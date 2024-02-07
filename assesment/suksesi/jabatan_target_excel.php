<?php 
require '../WEB/lib/Classes/PHPExcel.php'; 
include_once("../WEB/classes/utils/UserLogin.php");
include_once("../WEB/classes/base/RekapAssesment.php");
include_once("../WEB/classes/base/FormulaSuksesi.php");
include_once("../WEB/classes/base/FormulaJabatanTarget.php");
include_once("../WEB/classes/base/FormulaJabatanTargetPegawai.php");

include_once("../WEB/functions/date.func.php");
include_once("../WEB/functions/string.func.php");
include_once("../WEB/functions/default.func.php");

/* LOGIN CHECK */
if ($userLogin->checkUserLogin()) 
{ 
	$userLogin->retrieveUserInfo();
}

header("Content-type: application/vnd-ms-excel");
header("Content-Disposition: attachment; filename=jabatan_target_excel.xls");
// echo 'asdas';exit;
$reqTahun= httpFilterGet("reqTahun");
$reqFormulaJabatanTargetId= httpFilterGet("reqFormulaJabatanTargetId");
$reqKeterangan = httpFilterRequest("reqKeterangan");
$reqId = httpFilterRequest("reqId");
$reqCari = httpFilterRequest("reqCari");
$reqSearch = httpFilterGet("reqSearch");

$arrkolomdata= array(
    array("label"=>"Nama", "width"=>"220px")
    , array("label"=>"NIP Baru", "width"=>"120px")
    , array("label"=>"Jabatan", "width"=>"")
    , array("label"=>"Instansi", "width"=>"150px")
);

$totalstandart= 0;
if(!empty($reqFormulaJabatanTargetId))
{
	// $statement.= " AND A.PEGAWAI_ID IN (SELECT A.PEGAWAI_ID FROM formula_jabatan_target_pegawai A WHERE A.FORMULA_JABATAN_TARGET_ID = ".$reqFormulaJabatanTargetId.") ";
	// $sOrder= "ORDER BY DT.NILAI DESC";
	// $jumlahdetil= 5;
	// $setdetil= new FormulaSuksesi();
	// $setdetil->selectByParamsMonitoringPegawai(array(), -1, -1, $statement, $reqFormulaJabatanTargetId,$sOrder);
	$statement= " AND A.FORMULA_JABATAN_TARGET_ID = ".$reqFormulaJabatanTargetId;
	$sOrder= " ORDER BY A1.NIP_BARU";
	$jumlahdetil= 5;
	$setdetil= new FormulaJabatanTargetPegawai();
	$setdetil->selectByParamsMonitoringPegawai(array(), -1, -1, $statement, $sOrder);
	// echo $setdetil->query;exit;
}

$setnama= new FormulaSuksesi();
$setnama->selectByParamsUnsurFormula(array(), -1, -1, " AND A.FORMULA_UNSUR_ID = ".$reqFormulaJabatanTargetId);

function setnumberdua($val)
{
	return number_format(round($val,2), 2, '.', '');
}

$set= new RekapAssesment();
$sOrder= "ORDER BY COALESCE(B.JPM,0) DESC";
$set->selectByParamsNewRekap(array(), -1, -1, $statement, $reqFormulaJabatanTargetId, $sOrder);
// echo $set->query;exit();

$set= new FormulaJabatanTarget();
$set->selectByParams(array('A.FORMULA_JABATAN_TARGET_ID'=>$reqFormulaJabatanTargetId), -1, -1);
$set->firstRow();
// echo $set->query;exit;
$reqNama= $set->getField("NAMA");
$reqFormulaSuksesiId= $set->getField("FORMULA_SUKSESI_ID");
$reqFormulaSuksesiNama= $set->getField("FORMULA_SUKSESI_NAMA");
$reqJabatanId= $set->getField("JABATAN_ID");
$reqJabatanNama= $set->getField("JABATAN_NAMA");
$reqRumpunId= $set->getField("RUMPUN_ID");
$reqRumpunNama= $set->getField("RUMPUN_NAMA");
$reqSatkerId= $set->getField("SATKER_ID");
$reqSatkerNama= $set->getField("SATKER_NAMA");
$reqTarget= $set->getField("TARGET");
$reqKeterangan= $set->getField("KETERANGAN");
// echo $reqFormulaUnsurId;exit;
?>
<!DOCTYPE html>
<html lang="en">
<head>
</head>
<body>
<style>
	body, table{
		font-size:12px;
		font-family:Arial, Helvetica, sans-serif
	}
	th {
		text-align:center;
		font-weight: bold;
	}
	td {
		vertical-align: top;
  		text-align: left;
	}
	.str{
	  mso-number-format:"\@";/*force text*/
	}
	</style>
	<table style="width:100%">
        <tr>
            <td colspan="10" style="font-size:13px ;font-weight:bold; text-align: center;">JABATAN TARGET</td>	
        </tr>
	</table>
	<br/>
	<table class="table_list" cellspacing="1" width="100%" style="margin-bottom: 20px; margin-left: 10px">
        <tr>
        	<td style="width: 35%">Nama</td>
        	<td style="width: 20px">:</td>
            <td><?=$reqNama?></td>
        </tr>
        <tr>
        	<td>Formula Grafik & Kuadran talent pool</td>
        	<td>:</td>
        	<td><?=$reqFormulaSuksesiNama?></td>
        </tr>
        <tr> 
			<td>Nama Jabatan</td>
			<td>:</td>
			<td><?=$reqJabatanNama?></td>
        </tr>
        <tr>
        	<td>Rumpun Jabatan</td>
        	<td>:</td>
        	<td><label id="reqRumpunNama"><?=$reqRumpunNama?></label></td>
        </tr>
        <tr>
        	<td>Instansi</td>
        	<td>:</td>
        	<td><label id="reqSatkerNama"><?=$reqSatkerNama?></label></td>
        </tr>
        <tr>
        	<td>Jumlah Jabatan Target</td>
        	<td>:</td>
        	<td><label id="reqSatkerNama"><?=$reqTarget?></label></td>
        </tr>
        <tr>
        	<td>Keterangan</td>
        	<td>:</td>
        	<td><?=$reqKeterangan?></td>
        </tr>
        <?
		if($reqId == ""){}
		else
		{
        ?>
        <tr>
            <td>
                <input type="hidden" name="reqId" value="<?=$reqId?>" />
                <input type="hidden" id="reqPegawaiId" name="reqPegawaiId" />
                <input type="hidden" name="reqMode" value="insert" />
                <?
				if($tempStatusValidasi == "1"){}
				else
				{
				?>
                <!-- <input type="submit" name="" value="Simpan" /> -->
                <?
				}
                ?>
            </td>
        </tr>
        <?
		}
        ?>
    </table>
	<table style="width:100%" border="1" cellspacing="0" cellpadding="0">
		<thead>
			<tr>
				<th rowspan="2" width="220px">Nama</th>
				<th rowspan="2" width="120px">NIP Baru</th>
				<th rowspan="2" width="150px">Gol Ruang</th>
				<th rowspan="2" width="150px">Eselon</th>
				<th style="text-align: center;" colspan="3">Nilai</th>
				<th rowspan="2" width="100px">Total</th>
			</tr>
			<tr>
				<?			
				while($setnama->nextRow())
				{
					
					?>
					<th width="100px"><?=$setnama->getField("NAMA")?></th>
					<?
				}
				?>
			</tr>
	    </thead>
        <tbody>
            <?			
            while($setdetil->nextRow())
            {
            	$pegawaiid = $setdetil->getField("PEGAWAI_ID");
            	$setget= new FormulaSuksesi();
            	$setget->selectByParamsUnsurFormula(array(), -1, -1, " AND A.FORMULA_UNSUR_ID = ".$reqFormulaJabatanTargetId);
				while($setget->nextRow())
				{
            		$unsurid = $setget->getField("UNSUR_ID");
					$statementdetil= " AND A.FORMULA_UNSUR_ID = ".$reqFormulaJabatanTargetId." AND A.UNSUR_ID = '".$unsurid."'";
					$setbobot= new FormulaSuksesi();
					$setbobot->selectByParamsGetBobot(array(), -1, -1, $statementdetil);
					$setbobot->firstRow();
					// echo $setbobot->query;
					$infobobot= $setbobot->getField("BOBOT");

					if ($unsurid == '03')
					{
						$statementdetil= " AND A.PEGAWAI_ID = ".$pegawaiid;
						$setvalue= new FormulaSuksesi();
						$setvalue->selectByParamsAmbilNilaiJpmPegawai(array(), -1, -1, $statementdetil);
						$setvalue->firstRow();
						$infoassment= setnumberdua($setvalue->getField("JPM") * $infobobot);

					}
					elseif ($unsurid == '01')
					{
						$statementdetil= " AND A.PEGAWAI_ID = ".$pegawaiid." AND A.FORMULA_UNSUR_ID = ".$reqFormulaJabatanTargetId." AND A.UNSUR_ID = '".$unsurid."'";
						$setrekam= new FormulaSuksesi();
						$setrekam->selectByParamsAmbilNilaiUnsurPegawai(array(), -1, -1, $statementdetil);
						$setrekam->firstRow();
						// echo $setrekam->query;
						$inforekam= setnumberdua($setrekam->getField("NILAI"));
					}
					else
					{
						$statementdetil= " AND A.PEGAWAI_ID = ".$pegawaiid." AND A.FORMULA_UNSUR_ID = ".$reqFormulaJabatanTargetId." AND A.UNSUR_ID = '".$setget->getField("UNSUR_ID")."'";
						$setrekam= new FormulaSuksesi();
						$setrekam->selectByParamsAmbilNilaiUnsurPegawai(array(), -1, -1, $statementdetil);
						$setrekam->firstRow();
						// echo $setrekam->query;
						$infopenilaian= setnumberdua($setrekam->getField("NILAI"));
					}
					// echo $inforekam.'<br>';

					$total = $infoassment + $inforekam + $infopenilaian;
				}	
			?>
            	<tr>
                    <td><?=$setdetil->getField("PEGAWAI_NAMA")?></td>
                    <td class="str"><?=$setdetil->getField("PEGAWAI_NIP")?></td>
                    <td><?=$setdetil->getField("PEGAWAI_GOL")?></td>
                    <td><?=$setdetil->getField("PEGAWAI_ESELON")?></td>
                   	<td><?=$inforekam?></td>
                   	<td><?=$infopenilaian?></td>
                   	<td><?=$infoassment?></td>
                   	<td><?=$total?></td>
                </tr>
			<?
            }
            ?>


        </tbody>
    </table>
</body>
</html>