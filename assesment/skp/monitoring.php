<?
include_once("../WEB/classes/utils/UserLogin.php");
include_once("../WEB/functions/date.func.php");
include_once("../WEB/classes/base/Satker.php");
include_once("../WEB/functions/string.func.php");
include_once("../WEB/functions/default.func.php");

$reqId = httpFilterGet("reqId");
$reqRowId= httpFilterGet("reqRowId");
$reqKeterangan = httpFilterGet("reqKeterangan");
$reqMode = httpFilterGet("reqMode");
$reqTipe = httpFilterGet("reqTipe");
$reqBulan = httpFilterGet("reqBulan");
$reqTahun = httpFilterGet("reqTahun");

if($reqId == "")
{
	$userSatkerEvaluasiKinerja= $userLogin->userSatkerEvaluasiKinerja;
	//userSatkerIkk;userSatkerPengembanganSdm;userSatkerPolaKarir;userSatkerEvaluasiKinerja;userSatkerTugasBelajar;userSatkerRencanaSuksesi
	if($userSatkerEvaluasiKinerja == ""){}
	else
	{
	$reqId = $userLogin->userSatkerId;
	$set= new Satker();
	$set->selectByParams(array("SATKER_ID"=>$reqId),-1,-1);
	$set->firstRow();
	$reqKeterangan= $set->getField("NAMA");
	unset($set);
	}
}
		
/* LOGIN CHECK */
if ($userLogin->checkUserLogin()) 
{ 
	$userLogin->retrieveUserInfoKhusus($reqId);
}

/* SET MENU */
if($_SESSION["ssUsr_reqMode"] == "")
{
	$_SESSION["ssUsr_reqMode"] = $reqMode;	
}
if($reqMode == ""){
	$reqMode = $_SESSION["ssUsr_reqMode"];
}
else{
	$_SESSION["ssUsr_reqMode"] = $reqMode;
}
/* END OF SET MENU */


/* SET INFORMATION */
if($_SESSION["ssUsr_SatkerId"] == ""){
	$_SESSION["ssUsr_SatkerId"] = $reqId;
}

if($reqRowId == 1)
	$_SESSION["ssUsr_SatkerId"]= $reqId;

if($reqId == "" && $_SESSION["ssUsr_SatkerId"] !== "")
{
	$reqId = $_SESSION["ssUsr_SatkerId"];
}
else{
	$_SESSION["ssUsr_SatkerId"] = $reqId;
}


if($_SESSION["ssUsr_Satker"] == ""){
	$_SESSION["ssUsr_Satker"] = $reqKeterangan;
}

if($reqKeterangan == ""){
	$reqKeterangan = $_SESSION["ssUsr_Satker"];
}
else{
	$_SESSION["ssUsr_Satker"] = $reqKeterangan;
}

if($reqKeterangan == '') $reqKeterangan = 'Semua Satuan Kerja';
/* END OF SET INFORMATION */

if($reqId == 0)
	$reqId = "";

switch($reqMode)
{
	// START MENUU BAWAH
	case "pegawai" :
		$link = "pegawai.php?reqId=".$reqId."&reqKeterangan=".$reqKeterangan;
	break;
	
	// START MENU MASTER
	case "periode_penilaian" :
		$link = "periode_penilaian.php";
	break;
	case "kategori" :
		$link = "kategori.php";
	break;
	case "pertanyaan" :
		$link = "pertanyaan.php";
	break;
	case "pegawai_penilai" :
		$link = "pegawai_penilai.php";
	break;
	
	// START MENU SKP
	case "kinerjaku" :
		$link = "kinerjaku.php?reqId=".$reqId;
	break;
	
	case "pelaporan_skp" :
		$link = "pelaporan_skp.php";
	break;
	case "pelaporan_skp_realisasi" :
		$link = "pelaporan_skp_realisasi.php";
	break;
	case "daftar_skp" :
		$link = "daftar_skp.php";
	break;
	case "daftar_skp_penilaian" :
		$link = "daftar_skp_penilaian.php";
	break;
	case "perilaku_kerja_penilaian" :
		$link = "perilaku_kerja_penilaian.php";
	break;
	case "daftar_skp_pelaporan" :
		$link = "daftar_skp_pelaporan.php";
	break;
 
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html><head>
<meta http-equiv="Content-type" content="text/html; charset=UTF-8">
<title></title>
<head>
</head>
<script language="JavaScript" src="../WEB/lib/easyui/DisableKlikKanan.js"></script>
<style type="text/css">
html {overflow: auto;}
html, body, div, iframe {margin: 0px; padding: 0px; height: 100%; border: none;}
iframe {display: block; width: 100%; border: none; overflow-y: hidden; overflow-x: hidden;}
</style> 

<body>
<iframe src="<?=$link?>" name="menuMonitoring"></iframe>

</body>
</html>