<?
include_once("../WEB/classes/utils/UserLogin.php");
include_once("../WEB/functions/date.func.php");
include_once("../WEB/functions/string.func.php");
include_once("../WEB/functions/default.func.php");
include_once("../WEB/classes/base-cat/TipeUjian.php");

/* LOGIN CHECK */
if ($userLogin->checkUserLogin()) 
{ 
	$userLogin->retrieveUserInfoKhusus($reqId);
}

$reqTipeUjianId= httpFilterGet("reqTipeUjianId");

ini_set("memory_limit","500M");
ini_set('max_execution_time', 520);	

$arrTahun= setTahunLoop(5,1);
//$reqTahun= date("Y");

if($reqTahun == "")
	$reqTahun= 2015;

$tinggi = 180;

$tipe_ujian = new TipeUjian();
$tipe_ujian->selectByParamsInfoBankSoal(array(), -1,-1, " AND A.TIPE_UJIAN_ID = ".$reqTipeUjianId);
$tipe_ujian->firstRow();
// echo $tipe_ujian->query;exit;
$infonama= $tipe_ujian->getField("TIPE_NAMA");

$width= "";
$arrexcept= [];
$arrexcept= array("7","9","13","20","22","23","24","41","42","72","73");
if(in_array($reqTipeUjianId, $arrexcept)){}
else
{
	$arrexcept= [];
	$arrexcept= array("20","21","27","40","47","49","70","71","74");
	if(in_array($reqTipeUjianId, $arrexcept))
		$width= "500";
	else
	$width= "100";
}

$arrData= array(
	array("label"=>"No", "width"=>"50", "display"=>"")
	, array("label"=>"Pertanyaan", "width"=>$width, "display"=>"")
);

if(!empty($width))
{
	array_push($arrData,
		 array("label"=>"Jawaban", "width"=>"", "display"=>"")
	);
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html><head>
<meta http-equiv="Content-type" content="text/html; charset=UTF-8">
<title></title>
<style type="text/css" media="screen">
    @import "../WEB/lib/media/css/site_jui.css";
    @import "../WEB/lib/media/css/demo_table_jui.css";
    @import "../WEB/lib/media/css/themes/base/jquery-ui.css";
	
    /*
     * Override styles needed due to the mix of three different CSS sources! For proper examples
     * please see the themes example in the 'Examples' section of this site
     */
    .dataTables_info { padding-top: 0; }
    .dataTables_paginate { padding-top: 0; }
    .css_right { float: right; }
    #example_wrapper .fg-toolbar { font-size: 12px; }
    #theme_links span { float: left; padding: 2px 10px; }
	/*.transactionDebit { background-color:#6CF; }*/
	.hukumanStyle { background-color:#FC7370; }
</style>

<link rel="stylesheet" type="text/css" href="../WEB/lib/DataTables-1.10.6/media/css/jquery.dataTables.css">
<link rel="stylesheet" type="text/css" href="../WEB/lib/DataTables-1.10.6/extensions/Responsive/css/dataTables.responsive.css">
<link rel="stylesheet" type="text/css" href="../WEB/lib/DataTables-1.10.6/examples/resources/syntax/shCore.css">

<script type="text/javascript" language="javascript" src="../WEB/lib/DataTables-1.10.6/media/js/jquery.js"></script>
<link rel="stylesheet" type="text/css" href="../WEB/lib/easyui/themes/default/easyui.css">
<script type="text/javascript" src="../WEB/lib/easyui/jquery.easyui.min.js"></script>
<script type="text/javascript" language="javascript" src="../WEB/lib/DataTables-1.10.6/media/js/jquery.dataTables.js"></script>
<script type="text/javascript" language="javascript" src="../WEB/lib/DataTables-1.10.6/examples/resources/syntax/shCore.js"></script>

<script type="text/javascript" language="javascript" src="../WEB/lib/DataTables-1.10.6/extensions/FixedColumns/js/dataTables.fixedColumns.js"></script>	
<script type="text/javascript" language="javascript" src="../WEB/lib/DataTables-1.10.6/extensions/Responsive/js/dataTables.responsive.js"></script>
<script type="text/javascript" language="javascript" src="../WEB/lib/DataTables-1.10.6/extensions/TableTools/js/dataTables.tableTools.min.js"></script>	
<script type="text/javascript" language="javascript" src="../WEB/lib/DataTables-1.10.6/extensions/Scroller/js/dataTables.scroller.min.js"></script>	

<!-- <script type="text/javascript" src="../WEB/lib/window/js/jquery/jquery-ui.js"></script>
<script type="text/javascript" src="../WEB/lib/window/js/jquery/window/jquery.window.js"></script> -->

<script type="text/javascript" language="javascript" class="init">
	function trim(str)
	{
		if(!str || typeof str != 'string')
			return null;
	
		return str.replace(/^[\s]+/,'').replace(/[\s]+$/,'').replace(/[\s]{2,}/,' ');
	}

    $(document).ready( function () {
		
        var id = -1;//simulation of id
		$(window).resize(function() {
		  console.log($(window).height());
		  $('.dataTables_scrollBody').css('height', ($(window).height() - <?=$tinggi?>));
		});
        var oTable = $('#example').dataTable({ "iDisplayLength": 50,bJQueryUI: true,
		/* UNTUK MENGHIDE KOLOM ID */
		"aoColumns": [ 
		<?
		for($col=0; $col<count($arrData); $col++)
		{
			if($col == 0){}
			else
				echo ",";

			if($arrData[$col]["display"] == "1")
				echo "{'bVisible': false}";
			else
				echo "null";
		}
		?>
		],
		"bSort":false,
		"bProcessing": true,
		"bServerSide": true,
		"sScrollY": ($(window).height() - <?=$tinggi?>),
		"sScrollX": "100%",
		"sScrollXInner": "100%",					  
		"sAjaxSource": "../json-pengaturan/bank_tipe_soal_json.php?reqTipeUjianId=<?=$reqTipeUjianId?>",
		"sPaginationType": "full_numbers"
		});

        function fnGetSelected( oTableLocal )
        {
        	var aReturn = new Array();
        	var aTrs = oTableLocal.fnGetNodes();
        	for ( var i=0 ; i<aTrs.length ; i++ )
        	{
        		if ( $(aTrs[i]).hasClass('row_selected') )
        		{
        			aReturn.push( aTrs[i] );
        		}
        	}
        	return aReturn;
        }

		function findRowIndexUsingCol(StringToCheckFor, oTableLocal, iColumn){
		  // Initialize variables
		  var i, aData, sValue, IndexLoc, oTable, iColumn;
		   
		  aiRows = oTableLocal.fnGetNodes();
		   
		  for (i=0,c=aiRows.length; i<c; i++) {
			  iRow = aiRows[i];   // assign current row to iRow variable
			  aData = oTableLocal.fnGetData(iRow); // Pull the row
			   
			  sValue = aData[iColumn];    // Pull the value from the corresponding column for that row
			   
			  if(sValue == StringToCheckFor){
				  IndexLoc = i;
				  break;
			  }
		  }
		   
		  return IndexLoc;
		}
		  
		var anSelectedData = '';
		var anSelectedRowId = anSelectedRowDetilId= '';
		var anSelectedPegawaiId = '';
		var anSelectedPegawaiNipBaru = '';
		var anSelectedPegawaiNama = '';
		  
		$('#example tbody').on( 'click', 'tr', function () {

			$("#example tr").removeClass('row_selected');
			$(".DTFC_Cloned tr").removeClass("row_selected");
			var row = $(this);
			var rowIndex = row.index() + 1;

			if (row.parent().parent().hasClass("DTFC_Cloned")) {
				$("#example tr:nth-child(" + rowIndex + ")").addClass("row_selected");;
			} else {
				$(".DTFC_Cloned tr:nth-child(" + rowIndex + ")").addClass("row_selected");
			}

			row.addClass("row_selected");												
			var anSelected = fnGetSelected(oTable);													
			anSelectedData = String(oTable.fnGetData(anSelected[0]));
			var element = anSelectedData.split(',');
			anSelectedRowId = element[element.length-1];
		});
		  
		$('#example tbody').on( 'dblclick', 'tr', function () {
			if(anSelectedData == "")
				return false;
			$("#btnUbahData").click();	
		});

		$('#btnTambah,#btnUbahData').on('click', function () {
			var tempId= $(this).attr('id');
			if(tempId == "btnTambah")
				anSelectedRowId= "";
			else
			{
				if(anSelectedData == "")
					return false;
			}

			opWidth = 1050;
			opHeight = 550;

			opUrl= 'bank_soal_add.php?reqId='+anSelectedRowId+"&reqTipeUjianId=<?=$reqTipeUjianId?>";
			window.top.openPopup(opUrl, "Master Peraturan", '1000', '615');
			  //OpenDHTMLPopUp(opUrl);
		});

		$("#btnCari").on("click", function () {
	        // $(".fg-toolbar").show();
	        var reqTipeSoal= reqTipeUjianId= reqCariFilter= "";
	        reqTipeSoal= $("#reqTipeSoal").val();
	        reqTipeUjianId= $("#reqTipeUjianId").val();
	        // $("#reqStatusPegawaiId").val();
	        oTable.fnReloadAjax("../json-pengaturan/bank_tipe_soal_json.php?reqTipeUjianId=<?=$reqTipeUjianId?>");
	    });

		$("#reqTipeSoal,#reqTipeUjianId").change(function() { 
	      	//alert();
	      	setCariInfo();
	    });

		$('#rightclickarea').bind('contextmenu',function(e){
			if(anSelectedData == '')	
				return false;							
			var $cmenu = $(this).next();
			$('<div class="overlay"></div>').css({left : '0px', top : '0px',position: 'absolute', width: '100%', height: '100%', zIndex: '100' }).click(function() {				
				$(this).remove();
				$cmenu.hide();
			}).bind('contextmenu' , function(){return false;}).appendTo(document.body);
			$(this).next().css({ left: e.pageX, top: e.pageY, zIndex: '101' }).show();

			return false;
		});

		$('.vmenu .first_li').on('click',function() {
			if( $(this).children().size() == 1 ) {
				if($(this).children().text() == 'Detail Data')
				{
					$("#btnUbahData").click();																										
				}
				$('.vmenu').hide();
				$('.overlay').hide();
			}
		});

		$('.vmenu .inner_li span').on('click',function() {												
			if($(this).text() == 'FIP 01')
			{
				$("#btnLembarFIP01Row").click();																										
			}
			$('.vmenu').hide();
			$('.overlay').hide();
		});

  
		$(".first_li , .sec_li, .inner_li span").hover(function () {
			$(this).css({backgroundColor : '#E0EDFE' , cursor : 'pointer'});
			if ( $(this).children().size() >0 )
				$(this).find('.inner_li').show();	
			$(this).css({cursor : 'default'});
		}, 
		function () {
			$(this).css('background-color' , '#fff' );
			$(this).find('.inner_li').hide();
		});
		  /* RIGHT CLICK EVENT */
			
	} );

	function setCariInfo()
	{
		$(document).ready( function () {
			$("#btnCari").click();      
		});
	}

</script>

<!--RIGHT CLICK EVENT-->		
<style>
	.vmenu{
	border:1px solid #aaa;
	position:absolute;
	background:#fff;
	display:none;font-size:0.75em;}
	.first_li{}
	.first_li span{width:100px;display:block;padding:5px 10px;cursor:pointer}
	.inner_li{display:none;margin-left:120px;position:absolute;border:1px solid #aaa;border-left:1px solid #ccc;margin-top:-28px;background:#fff;}
	.sep_li{border-top: 1px ridge #aaa;margin:5px 0}
	.fill_title{font-size:11px;font-weight:bold;/height:15px;/overflow:hidden;word-wrap:break-word;}

</style>
<!--RIGHT CLICK EVENT-->		
<!--<link href="themes/main_datatables.css" rel="stylesheet" type="text/css" /> -->

<!-- CSS for Drop Down Tabs Menu #2 -->
<link rel="stylesheet" type="text/css" href="../WEB/css/bluetabs.css" />
<script type="text/javascript" src="../WEB/css/dropdowntabs.js"></script>
</head>

<body id="index" class="grid_2_3" style="overflow:hidden">
    <div class="full_width" style="width:100%;">
    <form id="formAddNewRow" action="#" title="Add a new browser" style="width:600px;min-width:600px">
    </form>
    <div id="header-tna">Bank Soal <span><?=$infonama?></span></div>
    <div id="bluemenu" class="bluetabs" style="background:url(../WEB/css/media/bluetab.gif)">    
    <ul>
		<li>
			<!-- <a href="#" title="Lihat" id="btnUbahData"><img src="../WEB/images/pegawai-edit.png"/>&nbsp;Lihat</a> -->
			<a href="#" id="btnCari" style="display:none" title="Cari">Cari</a>
			<input type="hidden" name="reqTipeSoal" id="reqTipeSoal" />
		</li>
    </ul>
    </div>
	</div>

    <div id="bar-status">
    </div>
    <div id="rightclickarea"> <!--RIGHT CLICK EVENT -->
    <table cellpadding="0" cellspacing="0" border="0" class="display" id="example">
    <thead>
        <tr>
        	<?
        	for($i=0; $i < count($arrData); $i++)
        	{
        		$infolabel= $arrData[$i]["label"];
        		$infowidth= $arrData[$i]["width"];
        	?>
        		<th class="th_like" style="<?=$style?>;" width="<?=$infowidth?>px"><?=$infolabel?></th>
        	<?
        	}
        	?>
        </tr>
    </thead>
    </table>
    </div> <!--RIGHT CLICK EVENT -->
    
    <div class="vmenu">
		<div class="first_li"><span>Detail Data</span></div>
    </div>
</body>
</html>