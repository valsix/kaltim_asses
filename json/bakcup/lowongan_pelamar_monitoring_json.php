<?php
include_once("../WEB/classes/utils/UserLogin.php");
include_once("../WEB/functions/string.func.php");
include_once("../WEB/functions/default.func.php");
include_once("../WEB/functions/date.func.php");
include_once("../WEB/classes/base/PelamarLowongan.php");

$reqId = httpFilterGet("reqId");
$reqCutoff = httpFilterGet("reqCutoff");

if($reqCutoff == "")
	$reqCutoff = date("d-m-Y");


$reqKondisiField = $_GET["reqKondisiField"];
$reqKondisiOperasi = $_GET["reqKondisiOperasi"];
$reqKondisiValue = $_GET["reqKondisiValue"];
$reqMode = $_GET["reqMode"];
$reqUrutanValue = $_GET["reqUrutanValue"];
$reqTMT2 = $_GET["reqTMT2"];

$_SESSION["ssUsr_reqUrutanValue"] = $_SESSION["ssUsr_reqFieldName"] = $_SESSION["ssUsr_reqFieldName"] = $_SESSION["ssUsr_reqKondisiField"] = $_SESSION["ssUsr_reqKondisiOperasi"] = $_SESSION["ssUsr_reqKondisiValue"] = $_SESSION["ssUsr_TMT2"] = '';
$_SESSION["ssUsr_reqFieldName"] = $reqFieldName;
$_SESSION["ssUsr_reqKondisiField"] = $reqKondisiField;
$_SESSION["ssUsr_reqKondisiOperasi"] = $reqKondisiOperasi;
$_SESSION["ssUsr_reqKondisiValue"] = $reqKondisiValue;
$_SESSION["ssUsr_reqUrutanValue"] = $reqUrutanValue;

$arrKondisiField = explode(",", $reqKondisiField);
$arrKondisiOperasi = explode(",", $reqKondisiOperasi);
$arrKondisiValue = explode("*", strtoupper($reqKondisiValue));
$arrUrutanValue = explode(",", $reqUrutanValue);


$flexyport_nrp= $flexyport_penempatan = $flexyport_jabatan = $flexyport_masa_kerja = $flexyport_nipp= $flexyport_nama= $flexyport_tempat_lahir= $flexyport_tanggal_lahir= $flexyport_agama= $flexyport_status= $flexyport_jenis_kelamin= $flexyport_kode_jenis_pegawai= 0;
for($i=0; $i<count($arrKondisiField);$i++)
{		
	if($arrKondisiOperasi[$i] == "sd")
		$arrKondisiOperasi[$i] = "=";
	elseif($arrKondisiOperasi[$i] == "tsd")	
		$arrKondisiOperasi[$i] = "!=";
	elseif($arrKondisiOperasi[$i] == "kd")	
		$arrKondisiOperasi[$i] = "<";
	elseif($arrKondisiOperasi[$i] == "kds")	
		$arrKondisiOperasi[$i] = "<=";
	elseif($arrKondisiOperasi[$i] == "ld")	
		$arrKondisiOperasi[$i] = ">";
	elseif($arrKondisiOperasi[$i] == "lds")	
		$arrKondisiOperasi[$i] = ">=";


	if($arrKondisiOperasi[$i] == "=" || $arrKondisiOperasi[$i] == "!=" || $arrKondisiOperasi[$i] == "!=")
	{
		if($arrKondisiField[$i] == "Usia")
		{
			$statement .= getValueANDOperator($flexyport_nrp)." REPLACE(pds_rekrutmen.AMBIL_MASA_KERJA(A.TANGGAL_LAHIR, TO_DATE('".$reqCutoff."', 'DD-MM-YYYY')),',','.')::NUMERIC ".$arrKondisiOperasi[$i]." '".$arrKondisiValue[$i]."'";
			$flexyport_nrp= 1;
		}
		elseif($arrKondisiField[$i] == "Agama")
		{
			$statement .= getValueANDOperator($flexyport_agama)." UPPER(E.NAMA) ".$arrKondisiOperasi[$i]." '".$arrKondisiValue[$i]."'";
			$flexyport_agama= 1;
		}
		elseif($arrKondisiField[$i] == "Jenis Kelamin")
		{
			$statement .= getValueANDOperator($flexyport_jenis_kelamin)." UPPER((CASE WHEN A.JENIS_KELAMIN='L' THEN 'Laki-Laki' ELSE 'Perempuan' END)) ".$arrKondisiOperasi[$i]." '".$arrKondisiValue[$i]."'";
			$flexyport_jenis_kelamin= 1;
		}
		elseif($arrKondisiField[$i] == "Tinggi")
		{
			$statement .= getValueANDOperator($flexyport_nrp)." A.TINGGI ".$arrKondisiOperasi[$i]." '".$arrKondisiValue[$i]."'";
			$flexyport_nrp= 1;
		}
		elseif($arrKondisiField[$i] == "Berat")
		{
			$statement .= getValueANDOperator($flexyport_nrp)." A.BERAT_BADAN ".$arrKondisiOperasi[$i]." '".$arrKondisiValue[$i]."'";
			$flexyport_nrp= 1;
		}
		elseif($arrKondisiField[$i] == "Status Kawin"){
			if($arrKondisiValue[$i] == strtoupper('Belum Kawin'))
				$arrKondisiValue[$i]= 1;
			elseif($arrKondisiValue[$i] == strtoupper('Kawin'))
				$arrKondisiValue[$i] = 2;
			elseif($arrKondisiValue[$i] == strtoupper('Janda'))
				$arrKondisiValue[$i] = 3;
			elseif($arrKondisiValue[$i] == strtoupper('Duda'))
				$arrKondisiValue[$i] = 4;
				
			$statement .= getValueANDOperator($status_kawin)."  A.STATUS_KAWIN ".$arrKondisiOperasi[$i]." '".$arrKondisiValue[$i]."'";
			$status_kawin=1;
		}
		elseif($arrKondisiField[$i] == "Pendidikan")
		{
			$statement .= getValueANDOperator($flexyport_status)."  EXISTS(SELECT 1 FROM pds_rekrutmen.PELAMAR_PENDIDIKAN X INNER JOIN pds_rekrutmen.PENDIDIKAN Y ON X.PENDIDIKAN_ID = Y.PENDIDIKAN_ID WHERE X.PELAMAR_ID =A.PELAMAR_ID AND UPPER(Y.NAMA) ".$arrKondisiOperasi[$i]." '".$arrKondisiValue[$i]."') ";
			$flexyport_status= 1;
		}		
		elseif($arrKondisiField[$i] == "Pengalaman")
		{
			$statement .= getValueANDOperator($flexyport_status)." DURASI ".$arrKondisiOperasi[$i]." '".$arrKondisiValue[$i]."'";
			$flexyport_status= 1;
		}
		elseif($arrKondisiField[$i] == "Domisili")
		{
			$statement .= getValueANDOperator($flexyport_status)." UPPER(F.NAMA) ".$arrKondisiOperasi[$i]." '".strtoupper($arrKondisiValue[$i])."'";
			$flexyport_status= 1;
		}		
		elseif($arrKondisiField[$i] == "Sertifikat")
		{
			if(strtoupper($arrKondisiValue[$i]) == "ADA")
			{
				$statement .= " AND EXISTS(SELECT 1 FROM pds_rekrutmen.PELAMAR_SERTIFIKAT X WHERE X.PELAMAR_ID = A.PELAMAR_ID) ";				
			}
			else
			{
				$statement .= " AND NOT EXISTS(SELECT 1 FROM pds_rekrutmen.PELAMAR_SERTIFIKAT X WHERE X.PELAMAR_ID = A.PELAMAR_ID) ";								
			}
			$flexyport_status= 1;
		}
	}
	elseif($arrKondisiOperasi[$i] == "BETWEEN" || $arrKondisiOperasi[$i] == "NOT BETWEEN" || $arrKondisiOperasi[$i] == "IN" || $arrKondisiOperasi[$i] == "NOT IN" || $arrKondisiOperasi[$i] == "<" || $arrKondisiOperasi[$i] == "<=" || $arrKondisiOperasi[$i] == ">" || $arrKondisiOperasi[$i] == ">=")
	{
		if($arrKondisiField[$i] == "Usia")
		{
			$statement .= getValueANDOperator($flexyport_nrp)." REPLACE(pds_rekrutmen.AMBIL_MASA_KERJA(A.TANGGAL_LAHIR, TO_DATE('".$reqCutoff."', 'DD-MM-YYYY')),',','.')::NUMERIC ".$arrKondisiOperasi[$i]." ".$arrKondisiValue[$i]."";
			$flexyport_nrp= 1;
		}
		elseif($arrKondisiField[$i] == "Agama")
		{
			$statement .= getValueANDOperator($flexyport_agama)." UPPER(E.NAMA) ".$arrKondisiOperasi[$i]." ".$arrKondisiValue[$i]."";
			$flexyport_agama= 1;
		}
		elseif($arrKondisiField[$i] == "Jenis Kelamin")
		{
			$statement .= getValueANDOperator($flexyport_jenis_kelamin)." UPPER((CASE WHEN A.JENIS_KELAMIN='L' THEN 'Laki-Laki' ELSE 'Perempuan' END)) ".$arrKondisiOperasi[$i]." ".$arrKondisiValue[$i]."";
			$flexyport_jenis_kelamin= 1;
		}
		elseif($arrKondisiField[$i] == "Tinggi")
		{
			$statement .= getValueANDOperator($flexyport_nrp)." A.TINGGI ".$arrKondisiOperasi[$i]." '".$arrKondisiValue[$i]."'";
			$flexyport_nrp= 1;
		}
		elseif($arrKondisiField[$i] == "Berat")
		{
			$statement .= getValueANDOperator($flexyport_nrp)." A.BERAT_BADAN ".$arrKondisiOperasi[$i]." '".$arrKondisiValue[$i]."'";
			$flexyport_nrp= 1;
		}
		elseif($arrKondisiField[$i] == "Status Kawin"){
			if($arrKondisiValue[$i] == strtoupper('Belum Kawin'))
				$arrKondisiValue[$i]= 1;
			elseif($arrKondisiValue[$i] == strtoupper('Kawin'))
				$arrKondisiValue[$i] = 2;
			elseif($arrKondisiValue[$i] == strtoupper('Janda'))
				$arrKondisiValue[$i] = 3;
			elseif($arrKondisiValue[$i] == strtoupper('Duda'))
				$arrKondisiValue[$i] = 4;
				
			$statement .= getValueANDOperator($status_kawin)."  A.STATUS_KAWIN ".$arrKondisiOperasi[$i]." ".$arrKondisiValue[$i]."";
			$status_kawin=1;
		}
		elseif($arrKondisiField[$i] == "Pendidikan")
		{
			if($arrKondisiOperasi[$i] == "<" || $arrKondisiOperasi[$i] == "<=" || $arrKondisiOperasi[$i] == ">" || $arrKondisiOperasi[$i] == ">=")
			{				
				$statement .= getValueANDOperator($flexyport_status)." EXISTS(SELECT 1 FROM pds_rekrutmen.PELAMAR_PENDIDIKAN X WHERE X.PELAMAR_ID =A.PELAMAR_ID AND X.PENDIDIKAN_ID ".$arrKondisiOperasi[$i]." (SELECT Y.PENDIDIKAN_ID FROM pds_rekrutmen.PENDIDIKAN Y WHERE UPPER(Y.NAMA) = '".$arrKondisiValue[$i]."')) ";
			}
			else
			{
				$statement .= getValueANDOperator($flexyport_status)." EXISTS(SELECT 1 FROM pds_rekrutmen.PELAMAR_PENDIDIKAN X INNER JOIN pds_rekrutmen.PENDIDIKAN Y ON X.PENDIDIKAN_ID = Y.PENDIDIKAN_ID WHERE X.PELAMAR_ID =A.PELAMAR_ID AND UPPER(Y.NAMA) ".$arrKondisiOperasi[$i]." ".$arrKondisiValue[$i].") ";
			}
			$flexyport_status= 1;
		}		
		elseif($arrKondisiField[$i] == "Pengalaman")
		{
			$statement .= getValueANDOperator($flexyport_status)." REPLACE(DURASI, ',', '.')::NUMERIC ".$arrKondisiOperasi[$i]." ".$arrKondisiValue[$i]."";
			$flexyport_status= 1;
		}
		elseif($arrKondisiField[$i] == "Sertifikat")
		{
			if(strtoupper($arrKondisiValue[$i]) == "ADA")
			{
				$statement .= " AND EXISTS(SELECT 1 FROM pds_rekrutmen.PELAMAR_SERTIFIKAT X WHERE X.PELAMAR_ID = A.PELAMAR_ID) ";				
			}
			else
			{
				$statement .= " AND NOT EXISTS(SELECT 1 FROM pds_rekrutmen.PELAMAR_SERTIFIKAT X WHERE X.PELAMAR_ID = A.PELAMAR_ID) ";								
			}
			$flexyport_status= 1;
		}
	}
	elseif($arrKondisiOperasi[$i] == "LIKE")
	{
		if($arrKondisiField[$i] == "Usia")
		{
			$statement .= getValueANDOperator($flexyport_nrp)." REPLACE(pds_rekrutmen.AMBIL_MASA_KERJA(A.TANGGAL_LAHIR, TO_DATE('".$reqCutoff."', 'DD-MM-YYYY')),',','.')::NUMERIC ".$arrKondisiOperasi[$i]." '%".$arrKondisiValue[$i]."%'";
			$flexyport_nrp= 1;
		}
		elseif($arrKondisiField[$i] == "Agama")
		{
			$statement .= getValueANDOperator($flexyport_agama)." UPPER(E.NAMA) ".$arrKondisiOperasi[$i]." '%".$arrKondisiValue[$i]."%'";
			$flexyport_agama= 1;
		}
		elseif($arrKondisiField[$i] == "Jenis Kelamin")
		{
			$statement .= getValueANDOperator($flexyport_jenis_kelamin)." UPPER((CASE WHEN A.JENIS_KELAMIN='L' THEN 'Laki-Laki' ELSE 'Perempuan' END)) ".$arrKondisiOperasi[$i]." '".$arrKondisiValue[$i]."'";
			$flexyport_jenis_kelamin= 1;
		}
		elseif($arrKondisiField[$i] == "Tinggi")
		{
			$statement .= getValueANDOperator($flexyport_nrp)." A.TINGGI ".$arrKondisiOperasi[$i]." '%".$arrKondisiValue[$i]."%'";
			$flexyport_nrp= 1;
		}
		elseif($arrKondisiField[$i] == "Berat")
		{
			$statement .= getValueANDOperator($flexyport_nrp)." A.BERAT_BADAN ".$arrKondisiOperasi[$i]." '%".$arrKondisiValue[$i]."%'";
			$flexyport_nrp= 1;
		}
		elseif($arrKondisiField[$i] == "Status Kawin"){
			if($arrKondisiValue[$i] == strtoupper('Belum Kawin'))
				$arrKondisiValue[$i]= 1;
			elseif($arrKondisiValue[$i] == strtoupper('Kawin'))
				$arrKondisiValue[$i] = 2;
			elseif($arrKondisiValue[$i] == strtoupper('Janda'))
				$arrKondisiValue[$i] = 3;
			elseif($arrKondisiValue[$i] == strtoupper('Duda'))
				$arrKondisiValue[$i] = 4;
				
			$statement .= getValueANDOperator($status_kawin)."  A.STATUS_KAWIN ".$arrKondisiOperasi[$i]." '%".$arrKondisiValue[$i]."%'";
			$status_kawin=1;
		}
		elseif($arrKondisiField[$i] == "Pendidikan")
		{
			$statement .= getValueANDOperator($flexyport_status)."  EXISTS(SELECT 1 FROM pds_rekrutmen.PELAMAR_PENDIDIKAN X INNER JOIN pds_rekrutmen.PENDIDIKAN Y ON X.PENDIDIKAN_ID = Y.PENDIDIKAN_ID WHERE X.PELAMAR_ID =A.PELAMAR_ID AND UPPER(Y.NAMA) ".$arrKondisiOperasi[$i]." '%".$arrKondisiValue[$i]."%') ";
			$flexyport_status= 1;
		}		
		elseif($arrKondisiField[$i] == "Pengalaman")
		{
			$statement .= getValueANDOperator($flexyport_status)." DURASI ".$arrKondisiOperasi[$i]." '%".$arrKondisiValue[$i]."%'";
			$flexyport_status= 1;
		}
		elseif($arrKondisiField[$i] == "Domisili")
		{
			$statement .= getValueANDOperator($flexyport_status)." UPPER(F.NAMA) ".$arrKondisiOperasi[$i]." '%".strtoupper($arrKondisiValue[$i])."%'";
			$flexyport_status= 1;
		}				
		elseif($arrKondisiField[$i] == "Sertifikat")
		{
			if(strtoupper($arrKondisiValue[$i]) == "ADA")
			{
				$statement .= " AND EXISTS(SELECT 1 FROM pds_rekrutmen.PELAMAR_SERTIFIKAT X WHERE X.PELAMAR_ID = A.PELAMAR_ID) ";				
			}
			else
			{
				$statement .= " AND NOT EXISTS(SELECT 1 FROM pds_rekrutmen.PELAMAR_SERTIFIKAT X WHERE X.PELAMAR_ID = A.PELAMAR_ID) ";								
			}
			$flexyport_status= 1;
		}
	}	
}




$pelamar_lowongan = new PelamarLowongan();

/* LOGIN CHECK 
if ($userLogin->checkUserLogin()) 
{ 
	$userLogin->retrieveUserInfo();
}*/

ini_set("memory_limit","500M");
ini_set('max_execution_time', 520);

            
$aColumns = array("PELAMAR_ID", "CHECK", "SHORTLIST", "NAMA", "NAMA_KOTA", "AGAMA", "JENIS_KELAMIN", "TELEPON", "TEMPAT_LAHIR", "TANGGAL_LAHIR", "UMUR", "TINGGI", "BERAT_BADAN", "STATUS_KAWIN", "PENDIDIKAN", "DURASI", "SERTIFIKAT", "LAMARAN_LAIN", "LAMPIRAN_FOTO", "STATUS_KIRIM");
$aColumnsAlias = array("PELAMAR_ID", "CHECK", "(SELECT COUNT(1) FROM pds_rekrutmen.PELAMAR_LOWONGAN_SHORTLIST X WHERE X.PELAMAR_ID = A.PELAMAR_ID AND X.LOWONGAN_ID = B.LOWONGAN_ID)", "A.NAMA", "F.NAMA", "A.AGAMA_ID", "JENIS_KELAMIN", "TELEPON", "TEMPAT_LAHIR", "TANGGAL_LAHIR", "pds_rekrutmen.AMBIL_MASA_KERJA(TANGGAL_LAHIR, TO_DATE('".$reqCutoff."', 'DD-MM-YYYY'))", "TINGGI", "BERAT_BADAN", "STATUS_KAWIN", 
						"C.PENDIDIKAN_ID", "COALESCE(BULAN, 0)", "pds_rekrutmen.AMBIL_PELAMAR_SERTIFIKAT(A.PELAMAR_ID)", "(SELECT COUNT(1) FROM pds_rekrutmen.PELAMAR_LOWONGAN X WHERE X.PELAMAR_ID = A.PELAMAR_ID AND NOT X.LOWONGAN_ID = B.LOWONGAN_ID)", "LAMPIRAN_FOTO", "STATUS_KIRIM");

/*
 * Ordering
 */
if ( isset( $_GET['iSortCol_0'] ) )
{
	$sOrder = " ORDER BY ";
	 
	//Go over all sorting cols
	for ( $i=0 ; $i<intval( $_GET['iSortingCols'] ) ; $i++ )
	{
		//If need to sort by current col
		if ( $_GET[ 'bSortable_'.intval($_GET['iSortCol_'.$i]) ] == "true" )
		{
			//Add to the order by clause
			$sOrder .= $aColumnsAlias[ intval( $_GET['iSortCol_'.$i] ) ];
			 
			//Determine if it is sorted asc or desc
			if (strcasecmp(( $_GET['sSortDir_'.$i] ), "asc") == 0)
			{
				$sOrder .=" asc, ";
			}else
			{
				$sOrder .=" desc, ";
			}
		}
	}
	
	 
	//Remove the last space / comma
	$sOrder = substr_replace( $sOrder, "", -2 );
	
	//Check if there is an order by clause
	if ( trim($sOrder) == "ORDER BY LOWONGAN_ID asc" )
	{
		/*
		* If there is no order by clause - ORDER BY INDEX COLUMN!!! DON'T DELETE IT!
		* If there is no order by clause there might be bugs in table display.
		* No order by clause means that the db is not responsible for the data ordering,
		* which means that the same row can be displayed in two pages - while
		* another row will not be displayed at all.
		*/
		$sOrder = " ORDER BY TANGGAL DESC";
		 
	}
}
 
 
/*
 * Filtering
 * NOTE this does not match the built-in DataTables filtering which does it
 * word by word on any field. It's possible to do here, but concerned about efficiency
 * on very large tables.
 */
$sWhere = "";
$nWhereGenearalCount = 0;
if (isset($_GET['sSearch']))
{
	$sWhereGenearal = $_GET['sSearch'];
}
else
{
	$sWhereGenearal = '';
}

if ( $_GET['sSearch'] != "" )
{
	//Set a default where clause in order for the where clause not to fail
	//in cases where there are no searchable cols at all.
	$sWhere = " AND (";
	for ( $i=0 ; $i<count($aColumnsAlias)+1 ; $i++ )
	{
		//If current col has a search param
		if ( $_GET['bSearchable_'.$i] == "true" )
		{
			//Add the search to the where clause
			$sWhere .= $aColumnsAlias[$i]." LIKE '%".$_GET['sSearch']."%' OR ";
			$nWhereGenearalCount += 1;
		}
	}
	$sWhere = substr_replace( $sWhere, "", -3 );
	$sWhere .= ')';
}
 
/* Individual column filtering */
$sWhereSpecificArray = array();
$sWhereSpecificArrayCount = 0;
for ( $i=0 ; $i<count($aColumnsAlias) ; $i++ )
{
	if ( $_GET['bSearchable_'.$i] == "true" && $_GET['sSearch_'.$i] != '' )
	{
		//If there was no where clause
		if ( $sWhere == "" )
		{
			$sWhere = "AND ";
		}
		else
		{
			$sWhere .= " AND ";
		}
		 
		//Add the clause of the specific col to the where clause
		$sWhere .= $aColumnsAlias[$i]." LIKE '%' || :whereSpecificParam".$sWhereSpecificArrayCount." || '%' ";
		 
		//Inc sWhereSpecificArrayCount. It is needed for the bind var.
		//We could just do count($sWhereSpecificArray) - but that would be less efficient.
		$sWhereSpecificArrayCount++;
		 
		//Add current search param to the array for later use (binding).
		$sWhereSpecificArray[] =  $_GET['sSearch_'.$i];
		 
	}
}
 
//If there is still no where clause - set a general - always true where clause
if ( $sWhere == "" )
{
	$sWhere = " AND 1=1";
}
//Bind variables.
if ( isset( $_GET['iDisplayStart'] ))
{
	$dsplyStart = $_GET['iDisplayStart'];
}
else{
	$dsplyStart = 0;
}
 
if ( isset( $_GET['iDisplayLength'] ) && $_GET['iDisplayLength'] != '-1' )
{
	$dsplyRange = $_GET['iDisplayLength'];
	if ($dsplyRange > (2147483645 - intval($dsplyStart)))
	{
		$dsplyRange = 2147483645;
	}
	else
	{
		$dsplyRange = intval($dsplyRange);
	}
}
else
{
	$dsplyRange = 2147483645;
}

$statement .= " AND NOT EXISTS(SELECT 1 FROM pds_rekrutmen.BLACKLIST X WHERE X.KTP_NO = A.KTP_NO)";

$allRecord = $pelamar_lowongan->getCountByParamsDaftarPelamarMonitoring(array("B.LOWONGAN_ID" => $reqId), $statement);
if($_GET['sSearch'] == "")
	$allRecordFilter = $allRecord;
else	
	$allRecordFilter = $pelamar_lowongan->getCountByParamsDaftarPelamarMonitoring(array("B.LOWONGAN_ID" => $reqId), $statement." AND (UPPER(A.NAMA) LIKE '%".strtoupper($_GET['sSearch'])."%')");

$pelamar_lowongan->selectByParamsDaftarPelamarCutoffMonitoring($reqCutoff, array("B.LOWONGAN_ID" => $reqId), $dsplyRange, $dsplyStart, $statement." AND (UPPER(A.NAMA) LIKE '%".strtoupper($_GET['sSearch'])."%')", $sOrder);     		
//echo $pelamar_lowongan->query;exit;

/* Output */
$output = array(
	"sEcho" => intval($_GET['sEcho']),
	"iTotalRecords" => $allRecord,
	"iTotalDisplayRecords" => $allRecordFilter,
	"aaData" => array()
);

$index = 1;
while($pelamar_lowongan->nextRow())
{
	$row = array();
	for ( $i=0 ; $i<count($aColumns) ; $i++ )
	{
		if($aColumns[$i] == "TANGGAL")
			$row[] = getFormattedDateTime($pelamar_lowongan->getField($aColumns[$i]));
		else if($aColumns[$i] == "CHECK")
		{
			if($pelamar_lowongan->getField("STATUS_KIRIM")=="0")
			{
				$row[] = '<input type="button" class="selectedId" id="reqCheck'.$index.'" onclick="openValidasi('.$pelamar_lowongan->getField("PELAMAR_ID").', '.$pelamar_lowongan->getField("LOWONGAN_ID").')" value="Lihat">';
			}
			else
			{
				$row[] = '<input type="checkbox" name="reqCheck[]" class="selectedId" id="reqCheck'.$index.'" value="'.$pelamar_lowongan->getField("PELAMAR_ID").'">';
			}
		}
		elseif($aColumns[$i] == "TANGGAL_AWAL" || $aColumns[$i] == "TANGGAL_AKHIR" || $aColumns[$i] == "TANGGAL_LAHIR")
			$row[] = getFormattedDate($pelamar_lowongan->getField($aColumns[$i]));				
		else if($aColumns[$i] == "LAMPIRAN_FOTO")
			$row[] = '<img src="../uploads/'.$pelamar_lowongan->getField("LAMPIRAN_FOTO").'" width="70" height="90">';
		else
			$row[] = $pelamar_lowongan->getField($aColumns[$i]);
	}
	
	$output['aaData'][] = $row;
	$index++;
}

echo json_encode( $output );
?>
