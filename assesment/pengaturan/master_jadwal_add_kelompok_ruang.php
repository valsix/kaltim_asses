<?
/* INCLUDE FILE */
include_once("../WEB/classes/utils/UserLogin.php");
include_once("../WEB/classes/utils/FileHandler.php");
include_once("../WEB/functions/string.func.php");
include_once("../WEB/functions/default.func.php");
include_once("../WEB/functions/date.func.php");
include_once("../WEB/classes/base/JadwalAcara.php");
include_once("../WEB/classes/base/JadwalKelompokRuangan.php");

/* LOGIN CHECK */
if ($userLogin->checkUserLogin()) 
{ 
	$userLogin->retrieveUserInfo();
}

/* VARIABLE */
$reqMode 	= httpFilterRequest("reqMode");
$reqId = httpFilterGet("reqId");
$reqRowId= httpFilterGet("reqRowId");

$jadwal_acara = new JadwalAcara();

$jadwal_acara->selectByParamsMonitoring(array("JADWAL_ACARA_ID"=> $reqRowId),-1,-1,'');
$jadwal_acara->firstRow();
$tempJadwalTesId= $jadwal_acara->getField('JADWAL_TES_ID');
$tempPenggalianNama= $jadwal_acara->getField('PENGGALIAN_NAMA');
$tempPenggalianId= $jadwal_acara->getField('PENGGALIAN_ID');
$tempPukul1= $jadwal_acara->getField('PUKUL1');
$tempPukul2= $jadwal_acara->getField('PUKUL2');
$tempKeterangan= $jadwal_acara->getField('KETERANGAN_ACARA');

$index_loop= 0;
if($reqRowId == ""){}
else
{
	$arrJadwalKelompokRuangan="";
	$statement= " AND A.JADWAL_ACARA_ID = ".$reqRowId;
	$set_detil= new JadwalKelompokRuangan();
	$set_detil->selectByParamsMonitoring(array(), -1,-1, $statement);
	//echo $set_detil->query;exit;
	while($set_detil->nextRow())
	{
		$arrJadwalKelompokRuangan[$index_loop]["JADWAL_KELOMPOK_RUANGAN_ID"]= $set_detil->getField("JADWAL_KELOMPOK_RUANGAN_ID");
		$arrJadwalKelompokRuangan[$index_loop]["KELOMPOK_ID"]= $set_detil->getField("KELOMPOK_ID");
		$arrJadwalKelompokRuangan[$index_loop]["KELOMPOK_NAMA"]= $set_detil->getField("KELOMPOK_NAMA");
		$arrJadwalKelompokRuangan[$index_loop]["KELOMPOK"]= $set_detil->getField("KELOMPOK");
		$arrJadwalKelompokRuangan[$index_loop]["RUANGAN_ID"]= $set_detil->getField("RUANGAN_ID");
		$arrJadwalKelompokRuangan[$index_loop]["RUANGAN_NAMA"]= $set_detil->getField("RUANGAN_NAMA");
		$index_loop++;
	}
}

if($index_loop > 0)
{
	$tempKelompok= $arrJadwalKelompokRuangan[0]["KELOMPOK"];
	$tempRuang= $arrJadwalKelompokRuangan[0]["RUANG"];
}

$jumlah_asesor= $index_loop;
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Untitled Document</title>

<!-- CSS for Drop Down Tabs Menu #2 -->
<link rel="stylesheet" type="text/css" href="../WEB/css/bluetabs.css" />
<script type="text/javascript" src="css/dropdowntabs.js"></script>

<link rel="stylesheet" type="text/css" href="../WEB/css/gaya.css">
<link href="styles.css" rel="stylesheet" type="text/css" />

<link rel="stylesheet" href="../WEB/lib/autokomplit/jquery-ui.css">

<link rel="stylesheet" type="text/css" href="../WEB/lib/easyui/themes/default/easyui.css">
<script type="text/javascript" src="../WEB/lib/easyui/jquery-1.8.0.min.js"></script>
<script type="text/javascript" src="../WEB/lib/easyui/jquery.easyui.min.js"></script>

<!-- AUTO KOMPLIT -->
<link rel="stylesheet" href="../WEB/lib/autokomplit/jquery-ui.css">
<script src="../WEB/lib/autokomplit/jquery-ui.js"></script>  
<style>
    .ui-autocomplete {
        max-height: 200px;
        overflow-y: auto;
        /* prevent horizontal scrollbar */
        font-size:11px;
        overflow-x: hidden;
    }
    /* IE 6 doesn't support max-height
     * we use height instead, but this forces the menu to always be this tall
     */
    * html .ui-autocomplete {
        height: 200px;
    }
</style>

<!-- AUTO KOMPLIT -->
<script type="text/javascript" src="../WEB/lib/easyui/easyloader.js"></script>   
<script type="text/javascript" src="../WEB/lib/easyui/plugins/jquery.form.js"></script>  
<script type="text/javascript" src="../WEB/lib/easyui/plugins/jquery.linkbutton.js"></script> 
<script type="text/javascript" src="../WEB/lib/easyui/plugins/jquery.draggable.js"></script> 
<script type="text/javascript" src="../WEB/lib/easyui/plugins/jquery.resizable.js"></script> 
<script type="text/javascript" src="../WEB/lib/easyui/plugins/jquery.panel.js"></script> 
<script type="text/javascript" src="../WEB/lib/easyui/plugins/jquery.window.js"></script> 
<script type="text/javascript" src="../WEB/lib/easyui/plugins/jquery.progressbar.js"></script> 
<script type="text/javascript" src="../WEB/lib/easyui/plugins/jquery.messager.js"></script>      
<script type="text/javascript" src="../WEB/lib/easyui/plugins/jquery.tooltip.js"></script>  
<script type="text/javascript" src="../WEB/lib/easyui/plugins/jquery.validatebox.js"></script>  
<script type="text/javascript" src="../WEB/lib/easyui/plugins/jquery.combo.js"></script>
    
<script type="text/javascript" src="../WEB/lib/easyui/kalender-easyui.js"></script>
<script type="text/javascript">	
	$(function(){
		$('#ff').form({
			url:'../json-pengaturan/master_jadwal_add_kelompok_ruang.php',
			onSubmit:function(){
				return $(this).form('validate');
			},
			success:function(data){
				//alert(data);return false;
				$.messager.alert('Info', data, 'info');
				$('#rst_form').click();
				//parent.setShowHideMenu(3);
				parent.frames['mainFrame'].location.href = 'master_jadwal_add_kelompok_ruang_monitoring.php?reqId=<?=$reqId?>';
				parent.frames['mainFrameDetil'].location.href = 'master_jadwal_add_kelompok_ruang.php?reqId=<?=$reqId?>&reqRowId=<?=$reqRowId?>';
			}
		});
		
		$('input[id^="reqKelompok"], input[id^="reqRuangan"]').autocomplete({ 
			source:function(request, response){
				var id= this.element.attr('id');
				var replaceAnakId= replaceAnak= urlAjax= "";
				
				if (id.indexOf('reqKelompok') !== -1)
				{
					var element= id.split('reqKelompok');
					var indexId= "reqKelompokId"+element[1];
					urlAjax= "../json-pengaturan/kelompok_auto_combo_json.php";
				}
				else if (id.indexOf('reqRuangan') !== -1)
				{
					var element= id.split('reqRuangan');
					var indexId= "reqRuanganId"+element[1];
					urlAjax= "../json-pengaturan/ruangan_auto_combo_json.php";
				}
				
				$.ajax({
					url: urlAjax,
					type: "GET",
					dataType: "json",
					data: { term: request.term },
					success: function(responseData){
						$("#"+indexId).val("").trigger('change');
						if(replaceAnakId == ""){}
						else
						{
						$("#"+replaceAnakId).val("").trigger('change');
						$("#"+replaceAnak).val("").trigger('change');
						}
						
						if(responseData == null)
						{
							response(null);
						}
						else
						{
							var array = responseData.map(function(element) {
								return {desc: element['desc'], id: element['id'], label: element['label']};
							});
							response(array);
						}
					}
				})
			},
			select: function (event, ui) 
			{ 
				var id= $(this).attr('id');
				var replaceAnakId= replaceAnak= "";
				
				if (id.indexOf('reqKelompok') !== -1)
				{
					var element= id.split('reqKelompok');
					var indexId= "reqKelompokId"+element[1];
				}
				else if (id.indexOf('reqRuangan') !== -1)
				{
					var element= id.split('reqRuangan');
					var indexId= "reqRuanganId"+element[1];
				}
				$("#"+indexId).val(ui.item.id).trigger('change');
			}, 
			//minLength:3,
			autoFocus: true
			}).autocomplete( "instance" )._renderItem = function( ul, item ) {
				return $( "<li>" )
			  .append( "<a>" + item.desc + "</a>" )
			  .appendTo( ul );
		};
			
	});
	
	function addKelompokRuanganRow()
	{
		if (!document.getElementsByTagName) return;
		tabBody=document.getElementsByTagName("TBODY").item(1);
		
		var rownum= tabBody.rows.length;
		
		row=document.createElement("TR");
		
		cell = document.createElement("TD");
		var button = document.createElement('label');
		button.innerHTML = '<input type="hidden" name="reqKelompokId[]" id="reqKelompokId'+rownum+'" />'
		+'<input type="text" class="easyui-validatebox" style="width:98%" id="reqKelompok'+rownum+'" data-options="validType:[\'sameAutoLoder[\'reqKelompok'+rownum+'\', \'\']\']" />';
		cell.appendChild(button);
		row.appendChild(cell);
		
		cell = document.createElement("TD");
		var button = document.createElement('label');
		button.innerHTML = '<input type="hidden" name="reqRuanganId[]" id="reqRuanganId'+rownum+'" />'
		+'<input type="text" class="easyui-validatebox" style="width:98%" id="reqRuangan'+rownum+'" data-options="validType:[\'sameAutoLoder[\'reqRuangan'+rownum+'\', \'\']\']" />';
		cell.appendChild(button);
		row.appendChild(cell);
		
		cell = document.createElement("TD");
		var button = document.createElement('label');
		button.innerHTML = '<input type="hidden" name="reqJadwalKelompokRuanganId[]" id="reqJadwalKelompokRuanganId'+rownum+'" />'
		+'<center><a style="cursorointer" onclick="deleteRowDrawTable(\'tableKelompok\', this)"><img src="../WEB/images/delete-icon.png" width="15" height="15" border="0" /></a></center>';
		cell.appendChild(button);
		row.appendChild(cell);
			  
		tabBody.appendChild(row);
		
		$('input[id^="reqKelompok"], input[id^="reqRuangan"]').autocomplete({ 
			source:function(request, response){
				var id= this.element.attr('id');
				var replaceAnakId= replaceAnak= urlAjax= "";
				
				if (id.indexOf('reqKelompok') !== -1)
				{
					var element= id.split('reqKelompok');
					var indexId= "reqKelompokId"+element[1];
					urlAjax= "../json-pengaturan/kelompok_auto_combo_json.php";
				}
				else if (id.indexOf('reqRuangan') !== -1)
				{
					var element= id.split('reqRuangan');
					var indexId= "reqRuanganId"+element[1];
					urlAjax= "../json-pengaturan/ruangan_auto_combo_json.php";
				}
				
				$.ajax({
					url: urlAjax,
					type: "GET",
					dataType: "json",
					data: { term: request.term },
					success: function(responseData){
						$("#"+indexId).val("").trigger('change');
						if(replaceAnakId == ""){}
						else
						{
						$("#"+replaceAnakId).val("").trigger('change');
						$("#"+replaceAnak).val("").trigger('change');
						}
						
						if(responseData == null)
						{
							response(null);
						}
						else
						{
							var array = responseData.map(function(element) {
								return {desc: element['desc'], id: element['id'], label: element['label']};
							});
							response(array);
						}
					}
				})
			},
			select: function (event, ui) 
			{ 
				var id= $(this).attr('id');
				var replaceAnakId= replaceAnak= "";
				
				if (id.indexOf('reqKelompok') !== -1)
				{
					var element= id.split('reqKelompok');
					var indexId= "reqKelompokId"+element[1];
				}
				else if (id.indexOf('reqRuangan') !== -1)
				{
					var element= id.split('reqRuangan');
					var indexId= "reqRuanganId"+element[1];
				}
				$("#"+indexId).val(ui.item.id).trigger('change');
			}, 
			//minLength:3,
			autoFocus: true
			}).autocomplete( "instance" )._renderItem = function( ul, item ) {
				return $( "<li>" )
			  .append( "<a>" + item.desc + "</a>" )
			  .appendTo( ul );
		};
	}
	
	function deleteRowDrawTable(tableID, id) {
		if(confirm('Apakah anda ingin menghapus data terpilih?') == false)
			return "";
				
		try {
		var table = document.getElementById(tableID);
		var rowCount = table.rows.length;
		var id=id.parentNode.parentNode.parentNode.parentNode.rowIndex;
		
		for(var i=0; i<=rowCount; i++) {
			if(id == i) {
				table.deleteRow(i);
				//setHitungTotal();
				//setMasakanUtamaHitung();
			}
		}
		}catch(e) {
			alert(e);
		}
	}
	
	function deleteRowDrawTablePhp(tableID, id, rowId, tempId, mode) {
		if(confirm('Apakah anda ingin menghapus data terpilih?') == false)
			return "";
				
		try {
		var table = document.getElementById(tableID);
		var rowCount = table.rows.length;
		var id=id.parentNode.parentNode.parentNode.rowIndex;
		
		for(var i=0; i<=rowCount; i++) {
			if(id == i) 
			{
				var valRowId= $("#"+tempId+rowId).val();
				$.getJSON('../json-pengaturan/delete.php?reqMode='+mode+'&id='+valRowId, function (data) 
				{
				});
				
				table.deleteRow(i);
				//setHitungTotal();
				//setMasakanUtamaHitung();
				//top.frames['mainFrame'].location.reload();
			}
		}
		}catch(e) {
			alert(e);
		}
	}
</script>

<style type="text/css">
	/* Remove margins from the 'html' and 'body' tags, and ensure the page takes up full screen height */
	html, body {height:100%; margin:0; padding:0;}
	/* Set the position and dimensions of the background image. */
	#page-background {position:fixed; top:0; left:0; width:100%; height:100%;}
	/* Specify the position and layering for the content that needs to appear in front of the background image. Must have a higher z-index value than the background image. Also add some padding to compensate for removing the margin from the 'html' and 'body' tags. */
	#content {position:relative; z-index:1;}
	/* prepares the background image to full capacity of the viewing area */
	#bg {position:fixed; top:0; left:0; width:100%; height:100%;}
	/* places the content ontop of the background image */
	#content {position:relative; z-index:1;}
</style>

<style>
	/* UNTUK TABLE GRADIENT STYLE*/
	.gradient-style th {
	font-size: 12px;
	font-weight:400;
	background:#b9c9fe url(images/gradhead.png) repeat-x;
	border-top:2px solid #d3ddff;
	border-bottom:1px solid #fff;
	color:#039;
	padding:8px;
	}
	
	.gradient-style td {
	font-size: 12px;
	border-bottom:1px solid #fff;
	color:#669;
	border-top:1px solid #fff;
	background:#e8edff url(images/gradback.png) repeat-x;
	padding:8px;
	}
	
	.gradient-style tfoot tr td {
	background:#e8edff;
	font-size: 14px;
	color:#99c;
	}
	
	.gradient-style tbody tr:hover td {
	background:#d0dafd url(images/gradhover.png) repeat-x;
	color:#339;
	}
	
	.gradient-style {
	font-family: 'Open SansRegular';
	font-size: 14px;
	width:480px;
	text-align:left;
	border-collapse:collapse;
	margin:0px 0px 0px 10px;
	}
</style>
</head>

<body>
<div id="page_effect">
<div id="bg"><img src="../WEB/images/wall-kanan-polos.png" width="100%" height="100%" alt=""></div>
<div id="content" style="height:auto; width:100%">
    <form id="ff" method="post" novalidate>
    <table class="table_list" cellspacing="1" width="100%">
        <tr>           
            <td style="width:150px">Penggalian</td><td style="width:5px">:</td>
            <td><?=$tempPenggalianNama?></td>
        </tr>
        <tr>
            <td>Pukul</td><td>:</td>
            <td><?=$tempPukul1?> s/d <?=$tempPukul2?></td>	
        </tr>
        <tr>
            <td>Keterangan</td><td>:</td>
            <td><?=$tempKeterangan?></td>	
        </tr>
        <?
		if($reqRowId == ""){}
		else
		{
        ?>
        <tr>
            <td>
                <input type="hidden" name="reqRowId" value="<?=$reqRowId?>">
                <input type="hidden" name="reqId" value="<?=$reqId?>">
                <input type="hidden" name="reqMode" value="insert">
                <input type="submit" name="" value="Simpan" />
            </td>
        </tr>
        <?
		}
        ?>
    </table>
    <table class="gradient-style" id="tableKelompok" style="width:100%; margin-left:-1px">
    <thead>
    <tr>
        <th scope="col" style="width:35%">
        Kelompok
        <?
		if($reqRowId == ""){}
		else
		{
        ?>
        <a style="cursor:pointer" title="Tambah" onclick="addKelompokRuanganRow()"><img src="../WEB/images/icn_add.gif" width="16" height="16" border="0" /></a>
        <?
		}
        ?>
        </th>
        <th scope="col" style="text-align:center; width:60%">Ruangan</th>
        <th scope="col" style="text-align:center; width:50px">Aksi</th>
    </tr>
    </thead>
    <tbody>
    <?
	for($checkbox_index=0;$checkbox_index < $jumlah_asesor;$checkbox_index++)
	{
		$tempJadwalKelompokRuanganId= $arrJadwalKelompokRuangan[$checkbox_index]["JADWAL_KELOMPOK_RUANGAN_ID"];
		$tempKelompokId= $arrJadwalKelompokRuangan[$checkbox_index]["KELOMPOK_ID"];
		$tempKelompok= $arrJadwalKelompokRuangan[$checkbox_index]["KELOMPOK_NAMA"];
		$tempRuanganId= $arrJadwalKelompokRuangan[$checkbox_index]["RUANGAN_ID"];
		$tempRuangan= $arrJadwalKelompokRuangan[$checkbox_index]["RUANGAN_NAMA"];
    ?>
    <tr>
        <td>
            <input type="hidden" name="reqKelompokId[]" id="reqKelompokId<?=$checkbox_index?>" value="<?=$tempKelompokId?>" /> 
            <input type="text" class="easyui-validatebox" style="width:98%" id="reqKelompok<?=$checkbox_index?>" 
            data-options="validType:['sameAutoLoder[\'reqKelompok\', \'\']']"
            value="<?=$tempKelompok?>" />
        </td>
        <td>
            <input type="hidden" name="reqRuanganId[]" id="reqRuanganId<?=$checkbox_index?>" value="<?=$tempRuanganId?>" /> 
            <input type="text" class="easyui-validatebox" style="width:98%" id="reqRuangan<?=$checkbox_index?>" 
            data-options="validType:['sameAutoLoder[\'reqRuangan\', \'\']']"
            value="<?=$tempRuangan?>" />
        </td>
        <td>
        	<center><a style="cursor:pointer" onclick="deleteRowDrawTablePhp('tableKelompok', this, '<?=$checkbox_index?>', 'reqJadwalKelompokRuanganId', 'jadwal_kelompok_ruangan')"><img src="../WEB/images/delete-icon.png" width="15" height="15" border="0" /></a></center>
            <input type="hidden" name="reqJadwalKelompokRuanganId[]" id="reqJadwalKelompokRuanganId<?=$checkbox_index?>" value="<?=$tempJadwalKelompokRuanganId?>" />
        </td>
    </tr>
    <?
	}
    ?>
    </tbody>
    </table>
    </form>
    </div>
</div>
</body>
</html>