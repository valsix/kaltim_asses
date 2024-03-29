<?
include_once("../WEB/classes/utils/UserLogin.php");
include_once("../WEB/functions/date.func.php");
include_once("../WEB/functions/string.func.php");
include_once("../WEB/functions/default.func.php");

$reqRowId= httpFilterGet("reqRowId");
$reqAsesorId= httpFilterGet("reqAsesorId");

/* LOGIN CHECK */
if ($userLogin->checkUserLogin()) 
{ 
	$userLogin->retrieveUserInfoKhusus($reqId);
}

	ini_set("memory_limit","500M");
	ini_set('max_execution_time', 520);	
	
$lengthSatkerId= strlen($userLogin->userSatkerId);
$tinggi = 173;
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
<link rel="stylesheet" type="text/css" href="../WEB/lib/DataTables-1.10.6/examples/resources/demo.css">

<script type="text/javascript" language="javascript" src="../WEB/lib/DataTables-1.10.6/media/js/jquery.js"></script>
<link rel="stylesheet" type="text/css" href="../WEB/lib/easyui/themes/default/easyui.css">
<script type="text/javascript" src="../WEB/lib/easyui/jquery.easyui.min.js"></script>
<script type="text/javascript" language="javascript" src="../WEB/lib/DataTables-1.10.6/media/js/jquery.dataTables.js"></script>
<script type="text/javascript" language="javascript" src="../WEB/lib/DataTables-1.10.6/examples/resources/syntax/shCore.js"></script>
<script type="text/javascript" language="javascript" src="../WEB/lib/DataTables-1.10.6/examples/resources/demo.js"></script>	
<script type="text/javascript" language="javascript" src="../WEB/lib/DataTables-1.10.6/extensions/FixedColumns/js/dataTables.fixedColumns.js"></script>	
<script type="text/javascript" language="javascript" src="../WEB/lib/DataTables-1.10.6/extensions/Responsive/js/dataTables.responsive.js"></script>
<script type="text/javascript" language="javascript" src="../WEB/lib/DataTables-1.10.6/extensions/TableTools/js/dataTables.tableTools.min.js"></script>	
<script type="text/javascript" language="javascript" src="../WEB/lib/DataTables-1.10.6/extensions/Scroller/js/dataTables.scroller.min.js"></script>	

<script type="text/javascript" language="javascript" class="init">
	function trim(str)
	{
		if(!str || typeof str != 'string')
			return null;
	
		return str.replace(/^[\s]+/,'').replace(/[\s]+$/,'').replace(/[\s]{2,}/,' ');
	}
	
	var reqRowId= "<?=$reqRowId?>";
	var reqPegawaiId= "<?=$reqAsesorId?>";
	var arrChecked = [];
	var reqPilihCheck= reqPilihCheckVal= "";
    $(document).ready( function () {
		
        var id = -1;//simulation of id
		$(window).resize(function() {
		  console.log($(window).height());
		  $('.dataTables_scrollBody').css('height', ($(window).height() - <?=$tinggi?>));
		});
        var oTable = $('#example').dataTable({ "iDisplayLength": 50,bJQueryUI: true,
		/* UNTUK MENGHIDE KOLOM ID */
		"aoColumns": [ 
						{ bVisible:false },
						null,
						null,
						null,
						null,
						null,
						null,
						null,									 
						null
				  ],			
		"bProcessing": true,
		"bServerSide": true,
		"bFilter": false,
		//responsive: true,
		//columnDefs: [{ className: 'never', targets: [ 0, 1, -1, -2] }, { className: 'none', targets: [ -3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13 ] }],
		//columnDefs: [{ className: 'never', targets: [ -1, -2] }],
		"sScrollY": ($(window).height() - <?=$tinggi?>),
		"sScrollX": "100%",
		"sScrollXInner": "100%",					  
		"sAjaxSource": "../json-pengaturan/asesor_jadwal_pilih_pencarian_json.php?reqAsesorId=<?=$reqAsesorId?>",
		"sPaginationType": "full_numbers"
		});
		/* Click event handler */
		  
		  /* RIGHT CLICK EVENT */
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
		  var anSelectedId = anSelectedRowDetilId= '';
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
			  anSelectedId = element[0];//element[element.length-1];
			  anSelectedRowDetilId= element[element.length-2];
			  anSelectedPegawaiId = element[0];
			  anSelectedPegawaiNipBaru = element[3];
			  anSelectedPegawaiNama = element[4];
		  });
		  
		  $('#example tbody').on( 'dblclick', 'tr', function () {
			  if(anSelectedData == "")
				  return false;
			  $("#btnUbahData").click();	
		  });
			  
		  //$('#btnTambah,#btnUbahData').on('click', function () {
		  $('#example').on( 'change', 'input.editor-active', function () {
			  //alert(arrChecked.length+":--");
			  
			  if($(this).prop('checked'))
			  {
				arrChecked.push($(this).val());
				//alert(arrChecked.length);
			  }
			  else
			  {
				var i = arrChecked.indexOf($(this).val());
				if(i != -1)
					arrChecked.splice(i, 1);
				
				//alert(arrChecked.length+":--");
			  }
		  });
		  
		  $('#btnUbahData').on('click', function () {
			  //reqPencarian= $("#reqPencarian").val();
			  var reqStatusPeg= reqPencarian= "";
			  
			  if($("#reqCheckAll").prop('checked')) 
			  {
					$.messager.confirm('Konfirmasi', "Apakah Anda Yakin, pilih semua data yg tampil ?",function(r){
						if (r){
							var data= "";
							data= getChecked();
							reqArrData= String(data);
							reqArrData= reqArrData.split(',');
							for(var i=0; i<reqArrData.length; i++) 
							{
								anSelectedId= reqArrData[i];
								window.parent.addAsesorRowDetil();
								window.parent.OptionSetMainDetil(anSelectedId, reqRowId);
								
								if(reqPegawaiId == "")
									separatorTempRowId= "";
								else
									separatorTempRowId= ",";
								
								if(reqPegawaiId == "")
								{
									reqPegawaiId= anSelectedId;
								}
								else
								reqPegawaiId= reqPegawaiId+separatorTempRowId+anSelectedId;
								//alert(reqPegawaiId);return false;
								reqRowId= parseInt(reqRowId) + 1;
							}
							//alert(reqPegawaiId);return false;
							arrChecked= ""
							arrChecked= [];
							oTable.fnReloadAjax("../json-pengaturan/asesor_jadwal_pilih_pencarian_json.php?reqId=<?=$reqId?>&reqAsesorId="+reqPegawaiId+"&reqCari="+reqPencarian);
						}
					});
			  }
			  else
			  {
					var data= "";
					data= getChecked();
					
					if(data == "")
					{
						$.messager.alert('Informasi', "Checked data satu asesor terlebih dahulu.", 'info');
						return false;
					}
					//alert(data);return false;
				
					$.messager.confirm('Konfirmasi', "Apakah Anda Yakin, pilih semua data yang terpilih ?",function(r){
						if (r){
							reqArrData= String(data);
							reqArrData= reqArrData.split(',');
							for(var i=0; i<reqArrData.length; i++) 
							{
								anSelectedId= reqArrData[i];
								window.parent.addAsesorRowDetil();
								window.parent.OptionSetMainDetil(anSelectedId, reqRowId);
								
								if(reqPegawaiId == "")
									separatorTempRowId= "";
								else
									separatorTempRowId= ",";
								
								if(reqPegawaiId == "")
								{
									reqPegawaiId= anSelectedId;
								}
								else
								reqPegawaiId= reqPegawaiId+separatorTempRowId+anSelectedId;
								//alert(reqPegawaiId);return false;
								reqRowId= parseInt(reqRowId) + 1;
							}
							//alert(reqPegawaiId);return false;
							arrChecked= ""
							arrChecked= [];
							oTable.fnReloadAjax("../json-pengaturan/asesor_jadwal_pilih_pencarian_json.php?reqId=<?=$reqId?>&reqAsesorId="+reqPegawaiId+"&reqCari="+reqPencarian);
						}
					});
			  }
			  
			  /*var tempId= $(this).attr('id');
			  if(tempId == "btnTambah")
				anSelectedId= "";
			  else
			  {
				  if(anSelectedData == "")
					  return false;
				  
				  window.parent.OptionSet(anSelectedId, <?=$reqRowId?>);
				  setTimeout(parent.divwin.close(), 1000);
			  }*/
		  });
		  
		  $("#reqPencarian").keyup(function(e) { 
			var code = e.which;
			if(code==13)
			{
				  var reqStatusPeg= reqPencarian= "";
			  
				  reqStatusPeg= $("#reqStatusPeg").val();
				  reqPencarian= $("#reqPencarian").val();
				  oTable.fnReloadAjax("../json-pengaturan/asesor_jadwal_pilih_pencarian_json.php?reqAsesorId=<?=$reqAsesorId?>"+"&reqCari="+reqPencarian);
			}
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
		  
		  function getChecked()
			{
				var data = "";
				var validasi = 0;
				for(i=0;i<arrChecked.length; i++)
				{
					value = arrChecked[i];
					arrValue = value.split("-");
					
					if(data == "")
					data = arrValue[0];
					else
					data = data + "," + arrValue[0];
				}
				return data;
			}
			
			function setCheckedAll()
			{
				if($("#reqCheckAll").prop('checked')) {
				   // do what you need here
				   //alert("Checked");
				   $('input[id^="reqPilihCheck"]').each(function(){
						var id= $(this).attr('id');
						id= id.replace("reqPilihCheck", "")
						$(this).prop('checked', true);
						arrChecked.push($(this).val());
				   });
				}
				else {
				   // do what you need here
				   //alert("Unchecked");
				   $('input[id^="reqPilihCheck"]').each(function(){
						var id= $(this).attr('id');
						id= id.replace("reqPilihCheck", "")
						$(this).prop('checked', false);
				   });
				   
				   arrChecked = [];
				}
			}
			
			$("#reqCheckAll").change(function() {
				setCheckedAll();
			});
			
	} );
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
<script type="text/javascript" src="css/dropdowntabs.js"></script>
</head>

<body id="index" class="grid_2_3" style="overflow:hidden">
    <div class="full_width" style="width:100%;">
    <form id="formAddNewRow" action="#" title="Add a new browser" style="width:600px;min-width:600px">
    </form>
    <div id="header-tna">Master <span>Asesor</span></div>
    <div id="bluemenu" class="bluetabs" style="background:url(css/media/bluetab.gif)">    
    <ul>
          <li>
          	<li><a href="#" title="Pilih" id="btnUbahData"><img src="../WEB/images/pegawai-edit.png"/>&nbsp;Pilih</a></li>
          </li>
    </ul>
    </div>
      
    <!--2nd drop down menu -->
    <div id="dropmenu2_b" class="dropmenudiv_b" style="width: 250px;">
    <a href="#" title="FIP 01" id="btnLembarFIP01Row">FIP 01</a>
    </div>
    
    <script type="text/javascript">
    //SYNTAX: tabdropdown.init("menu_id", [integer OR "auto"])
    tabdropdown.init("bluemenu")
    </script>
    
    </div>  
    
    <div id="bar-status">
    	<input type="checkbox" id="reqCheckAll"/>&nbsp;Pilih Semua &nbsp;&nbsp;
    </div>
    <div style="position: relative; margin-bottom:-40px; margin-top:6px; margin-right:8px; float:right; z-index:9999; font-size:12px;">
        Pencarian :
        <input type="text" id="reqPencarian" style="width:255px" />
    </div>
    <div id="rightclickarea"> <!--RIGHT CLICK EVENT -->
    <table cellpadding="0" cellspacing="0" border="0" class="display" id="example">
    <thead>
        <tr>
            <th width="1px">id</th>
            <th width="10px">Check</th>
            <th width="150px">Tipe</th>
            <th width="150px">No SK</th>
            <th width="250px">Nama</th>            
            <th>Alamat</th>            
            <th width="300px">Email</th>            
            <th width="100px">Telepon</th>            
            <th width="100px">Status Aktif</th>
        </tr>
    </thead>
    </table>
    </div> <!--RIGHT CLICK EVENT -->
    
    
    <div class="vmenu">
        <div class="first_li"><span>Detail Data</span></div>
    </div>
</body>
</html>