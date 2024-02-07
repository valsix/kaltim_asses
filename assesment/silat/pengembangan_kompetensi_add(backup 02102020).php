<?
/* INCLUDE FILE */
include_once("../WEB/classes/utils/UserLogin.php");
include_once("../WEB/classes/utils/FileHandler.php");
include_once("../WEB/functions/string.func.php");
include_once("../WEB/functions/default.func.php");
include_once("../WEB/functions/date.func.php");
include_once("../WEB/classes/base/PegawaiHcdp.php");
include_once("../WEB/classes/base/PelatihanHcdp.php");
include_once("../WEB/classes/base-silat/Kelautan.php");

/* LOGIN CHECK */
if ($userLogin->checkUserLogin()) 
{ 
	$userLogin->retrieveUserInfo();
}

/* VARIABLE */
$reqId= httpFilterGet("reqId");
$reqFormulaId= httpFilterGet("reqFormulaId");

$set= new PegawaiHcdp();
$set->selectByParams(array('A.PEGAWAI_ID'=>$reqId, 'A.FORMULA_ID'=>$reqFormulaId), -1, -1);
$set->firstRow();
// echo $set->query;exit;
$reqRowId= $set->getField("PEGAWAI_HCDP_ID");
$reqJumlahJp= $set->getField("JUMLAH_JP");
unset($set);

$set= new PegawaiHcdp();
$set->selectByParamsPenilaian(array('A.PEGAWAI_ID'=>$reqId, 'D.FORMULA_ID'=>$reqFormulaId), -1, -1);
$set->firstRow();
// echo $set->query;exit;
$infoikk= $set->getField("IKK");
$infojpm= $set->getField("JPM");
$infotahun= $set->getField("TAHUN");
$infometode= $set->getField("METODE");
$infosaran= $set->getField("SARAN_PENGEMBANGAN");
$inforingkasan= $set->getField("RINGKASAN_PROFIL_KOMPETENSI");
unset($set);

$set= new Kelautan();
$set->selectByParamsMonitoringTableTalentPoolJPMMonitoring(array(), -1, -1, "AND X.FORMULA_ID = ".$reqFormulaId." AND A.PEGAWAI_ID = ".$reqId, "", $infotahun);
// echo $set->query;exit;
$set->firstRow();
$infokuadran= $set->getField("ID_KUADRAN");
unset($set);
// echo $infokuadran;exit;

$set= new PegawaiHcdp();
$set->setField("PEGAWAI_HCDP_ID", $reqRowId);
$set->setField("FORMULA_ID", $reqFormulaId);
$set->setField("PEGAWAI_ID", $reqId);
$set->setField("JPM", ValToNullDB($infojpm));
$set->setField("IKK", ValToNullDB($infoikk));
$set->setField("METODE", $infometode);
$set->setField("TAHUN", $infotahun);
$set->setField("KUADRAN", $infokuadran);
$set->setField("SARAN_PENGEMBANGAN", $infosaran);
$set->setField("RINGKASAN_PROFIL_KOMPETENSI", $inforingkasan);
if(empty($reqRowId))
{
	$set->insert();
	$reqRowId= $set->id;
}
else
$set->update();
unset($set);

$set= new PegawaiHcdp();
$set->selectByParams(array('A.PEGAWAI_HCDP_ID'=>$reqRowId));
// echo $set->query;exit;
$set->firstRow();
$infopegawainama= $set->getField("PEGAWAI_NAMA");
$infopegawainip= $set->getField("PEGAWAI_NIP_BARU");
$infopegawaipangkat= $set->getField("PEGAWAI_PANGKAT_KODE")." / ".$set->getField("PEGAWAI_PANGKAT_NAMA");
$infopegawaijabatan= $set->getField("PEGAWAI_JABATAN_NAMA");
$infokodekuadran= $set->getField("KODE_KUADRAN");
unset($set);

$index_loop= 0;
$arrAtribut=[];
$statement= "
AND EXISTS
(
	SELECT 1
	FROM
	(
		SELECT A.PENILAIAN_ID
		FROM penilaian A
		INNER JOIN JADWAL_TES B ON A.JADWAL_TES_ID = B.JADWAL_TES_ID
		INNER JOIN FORMULA_ESELON C ON B.FORMULA_ESELON_ID = C.FORMULA_ESELON_ID
		INNER JOIN FORMULA_ASSESMENT D ON C.FORMULA_ID = D.FORMULA_ID 
		WHERE 1=1 AND ASPEK_ID IN (1,2)
		AND D.FORMULA_ID = ".$reqFormulaId." AND PEGAWAI_ID = ".$reqId."
	) XXX WHERE A.PENILAIAN_ID = XXX.PENILAIAN_ID
)
";
$set= new PegawaiHcdp();
$set->selectByParamsAtribut(array(), -1,-1, $reqRowId, $reqId, $statement);
// echo $set->query;exit();
while($set->nextRow())
{
	$arrAtribut[$index_loop]["PERMEN_ID"]= $set->getField("PERMEN_ID");
	$arrAtribut[$index_loop]["ATRIBUT_ID"]= $set->getField("ATRIBUT_ID");
	$arrAtribut[$index_loop]["ATRIBUT_NAMA"]= $set->getField("ATRIBUT_NAMA");
	$arrAtribut[$index_loop]["PELATIHAN_ID"]= $set->getField("PELATIHAN_ID");
	$arrAtribut[$index_loop]["PELATIHAN_NAMA"]= $set->getField("PELATIHAN_NAMA");
	$index_loop++;
}
$jumlahatribut= $index_loop;
// print_r($arrAtribut);exit;
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Untitled Document</title>

<link rel="stylesheet" type="text/css" href="../WEB/css/gaya.css">
<link rel="stylesheet" type="text/css" href="../WEB/css/tablegradient.css">
<link rel="stylesheet" type="text/css" href="../WEB/css/bluetabs.css" />

<link rel="stylesheet" type="text/css" href="../WEB/lib/easyui/themes/default/easyui.css">
<script type="text/javascript" src="../WEB/lib/easyui/jquery-1.8.0.min.js"></script>
<script type="text/javascript" src="../WEB/lib/easyui/jquery.easyui.min.js"></script>
<script type="text/javascript" src="../WEB/lib/easyui/kalender-easyui.js"></script>
<script type="text/javascript">
	
	$(function(){
		$('#ff').form({
			url:'../json-silat/pengembangan_kompetensi_add.php',
			onSubmit:function(){
				reqJumlahJp= $("#reqJumlahJp").val();

				if(parseFloat(reqJumlahJp) > 0){}
				else
				{
					$.messager.alert('Info', "Isikan terlebih dahulu nilai JP", 'error');
					return false;
				}

				return $(this).form('validate');
			},
			success:function(data){
				// console.log(data);return false;
				data = data.split("-");
				$.messager.alert('Info', data[1], 'info');
				reqId= data[0];
				if(reqId == "xxx"){}
				else
				{
					if (typeof(window.top) == 'object' && typeof(window.top.mainFullFrame) !== "undefined")
					{
						top.frames['mainFullFrame'].location.reload();
					}

					document.location.href = 'pengembangan_kompetensi_add.php?reqId=<?=$reqId?>&reqFormulaId=<?=$reqFormulaId?>';

					<? 
					if($reqMode == "update") 
					{
					?>
						// window.parent.divwin.close();
					<? 
					} 
					?>
				}

			}
		});

		setKuadranOption("");

		$('#reqJumlahJp').bind('keyup paste', function(){
			this.value = this.value.replace(/[^0-9\.]/g, '');
		});
	});

	function setKuadranOption(info)
	{
		<?
		for($index_loop=0;$index_loop < $jumlahatribut;$index_loop++)
		{
			$infoid= $arrAtribut[$index_loop]["ATRIBUT_ID"];
			$infonama= $arrAtribut[$index_loop]["ATRIBUT_NAMA"];
			$infopelatihanid= $arrAtribut[$index_loop]["PELATIHAN_ID"];
		?>

		if(info == "")
		{
			var array = "<?=$infopelatihanid?>".split(',');
			$('#reqPelatihanHcdpJsonId<?=$infoid?>').combotree('setValues', array);
		}

		var url = "../json-silat/pengembangan_kompetensi_add_list.php";
		// console.log(url);
		$('#reqPelatihanHcdpJsonId<?=$infoid?>').combotree('reload', url);
		// $('#reqPelatihanHcdpJsonId<?=$infoid?>').combotree('loadData', items);
		// console.log("<?=$items?>");
		<?
		}
		?>
	}

	function clickNode(cc)
	{
		// var t = $("#"+cc).combotree('tree');	// get the tree object
		// var n = t.tree('getSelected');		// get selected node
		var valtree= $("#"+cc).combotree('getValues');
		var texttree= $("#"+cc).combotree('getText');
		treeid= String(cc).replace("reqPelatihanHcdpJsonId", "");
		// console.log(n);
		
		$(function(){
			$("#reqPelatihanId"+treeid).val(valtree);
			$("#reqPelatihanNama"+treeid).val(texttree);
		});
	}
</script>
</head>

<body>
<div id="page_effect">
<div id="bg"><img src="../WEB/images/wall-kanan-polos.png" width="100%" height="100%" alt=""></div>
<div id="content" style="height:auto; width:99.2%">
	<div id="header-tna-detil">Pengelolaan Pengembangan <span>Kompetensi</span></div>
	<form id="ff" method="post" novalidate>
    <table class="table_list" cellspacing="1" width="100%" style="margin-bottom: 20px; margin-left: 10px">
    	<tr>
    		<td style="width: 45%; vertical-align: top;">
    			<table class="table_list" cellspacing="1" width="100%" style="margin-bottom: 20px; margin-left: 10px">
    				<tr>
			        	<td style="width: 25%">Nama</td>
			        	<td style="width: 20px">:</td>
			            <td><?=$infopegawainama?></td>
			        </tr>
			        <tr>
			        	<td>NIP</td>
			        	<td>:</td>
			        	<td><?=$infopegawainip?></td>
			        </tr>
			        <tr>
			        	<td>Pangkat / Gol</td>
			        	<td>:</td>
			        	<td><?=$infopegawaipangkat?></td>
			        </tr>
			        <tr> 
						<td>Jabatan</td>
						<td>:</td>
						<td><?=$infopegawaijabatan?></td>
			        </tr>
			        <tr>
			        	<td>IKK</td>
			        	<td>:</td>
			        	<td><?=$infoikk?></td>
			        </tr>
			        <tr>
			        	<td>Kuadran</td>
			        	<td>:</td>
			        	<td><?=$infokodekuadran?></td>
			        </tr>
			        <tr>
			        	<td>Kategori</td>
			        	<td>:</td>
			        	<td><?=$infometode?></td>
			        </tr>
			        <tr>
			        	<td>Rekomendasi</td>
			        	<td>:</td>
			        	<td><?=$infosaran?></td>
			        </tr>
			        <tr>
			        	<td>Ringkasan</td>
			        	<td>:</td>
			        	<td><?=$inforingkasan?></td>
			        </tr>
    			</table>
    		</td>
    		<td style="vertical-align: top;">
    			<table class="gradient-style" id="tableKandidat" style="width:98.8%; margin-left:2px">
    				<thead>
	    				<tr>
	    					<th style="width: 40%; text-align: center;">Jenis kesenjangan Kompetensi</th>
	    					<th style="text-align: center;">Jenis pengembangan</th>
	    				</tr>
    				</thead>
    				<tbody>
    					<?
    					for($index_loop=0;$index_loop < $jumlahatribut;$index_loop++)
    					{
    						$infoid= $arrAtribut[$index_loop]["ATRIBUT_ID"];
    						$infonama= $arrAtribut[$index_loop]["ATRIBUT_NAMA"];
    						$infopelatihanid= $arrAtribut[$index_loop]["PELATIHAN_ID"];
    						$infopelatihannama= $arrAtribut[$index_loop]["PELATIHAN_NAMA"];
    					?>
    					<tr>
    						<td><?=$arrAtribut[$index_loop]["ATRIBUT_NAMA"]?></td>
    						<td>
    							<input id="reqPelatihanHcdpJsonId<?=$infoid?>" class="easyui-combotree" data-options="
			                    onLoadSuccess: function (row, data) {
			                        $('#reqPelatihanHcdpJsonId<?=$infoid?>').combotree('tree').tree('expandAll');
			                    },
			                    onCheck: function(node, checked){
				                	clickNode('reqPelatihanHcdpJsonId<?=$infoid?>');
				                },
			                    onClick: function(node){
			                        clickNode('reqPelatihanHcdpJsonId<?=$infoid?>');
			                    }, checkbox:true, cascadeCheck:true" multiple style="width:450px;" />
			                    <input type="hidden" name="reqAtributId[]" value="<?=$infoid?>" />
			                    <input type="hidden" name="reqPelatihanId[]" id="reqPelatihanId<?=$infoid?>" value="<?=$reqPelatihanId?>" value="<?=$infopelatihanid?>" />
			                    <input type="hidden" name="reqPelatihanNama[]" id="reqPelatihanNama<?=$infoid?>" value="<?=$reqPelatihanNama?>" value="<?=$infopelatihannama?>" />
    						</td>
    					</tr>
    					<?
    					}
    					?>
    					<tr>
    						<td style="text-align: right;">Jumlah JP</td>
    						<td><input type="text" name="reqJumlahJp" id="reqJumlahJp" style="width: 20%; text-align: right;" value="<?=$reqJumlahJp?>" /> JP</td>
    					</tr>
    					<tr>
    						<td style="text-align: right;">Tahun</td>
    						<td><?=$infotahun?></td>
    					</tr>
    				</tbody>
    			</table>
    		</td>
    	</tr>
        <tr>
            <td colspan="2">
                <input type="hidden" name="reqRowId" value="<?=$reqRowId?>" />
                <input type="hidden" name="reqPegawaiId" value="<?=$reqId?>" />
                <input type="hidden" name="reqFormulaId" value="<?=$reqFormulaId?>" />
                <input type="submit" name="" value="Simpan" />
            </td>
        </tr>
    </table>
	</form>
    </div>

</div>
</body>
</html>