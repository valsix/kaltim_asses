<?php
include_once("../WEB/classes/utils/UserLogin.php");
include_once("../WEB/classes/base-silat/Kelautan.php");
include_once("../WEB/classes/base/JadwalAwalTes.php");
include_once("../WEB/functions/string.func.php");
include_once("../WEB/functions/default.func.php");
include_once("../WEB/functions/date.func.php");
include_once("../WEB/classes/utils/Validate.php");

$set = new Kelautan();

/* LOGIN CHECK */
if ($userLogin->checkUserLogin()) 
{ 
	$userLogin->retrieveUserInfo();
}

$reqId= httpFilterGet("reqId");
$reqPegawaiId= httpFilterGet("reqPegawaiId");
$reqJadwalTesId= httpFilterGet("reqJadwalTesId");

ini_set("memory_limit","500M");
ini_set('max_execution_time', 520);

$reqKeterangan = httpFilterRequest("reqKeterangan");
$reqId = httpFilterRequest("reqId");
$reqCari= httpFilterRequest("reqCari");
$reqCheckId= httpFilterGet("reqCheckId");
$arrayCheckId= explode(',', $reqCheckId);

if($reqId == ""){}
else
{
	$setdetil= new JadwalAwalTes();
	$setdetil->selectByParams(array(), -1,-1, " AND JADWAL_AWAL_TES_ID = ".$reqId);
	$setdetil->firstRow();
	$reqStatusJenis= $setdetil->getField("STATUS_JENIS");
}

if($reqStatusJenis == "2")
	$aColumns= array("CHECK", "NAMA", "NIK");
else
	$aColumns= array("CHECK", "NAMA", "NIP_BARU", "NAMA_GOL", "NAMA_ESELON", "NAMA_JAB_STRUKTURAL", "SATKER");

$aColumnsAlias= $aColumns;

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
	if ( trim($sOrder) == "ORDER BY IDPEG asc" )
	{
		/*
		* If there is no order by clause - ORDER BY INDEX COLUMN!!! DON'T DELETE IT!
		* If there is no order by clause there might be bugs in table display.
		* No order by clause means that the db is not responsible for the data ordering,
		* which means that the same row can be displayed in two pages - while
		* another row will not be displayed at all.
		*/
		$sOrder = " ORDER BY coalesce(C.KODE_ESELON,99) ASC, B.KODE_GOL DESC";
		 
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

if($reqId == ""){}
else
{
	if($reqStatusJenis == "1")
	{
		$statement.= "
		AND COALESCE(CAST(SUBSTR(CAST(A.LAST_ESELON_ID AS CHAR),1,1) AS NUMERIC),9)
		in
		(
			SELECT
			COALESCE(CAST(SUBSTR(CAST(FE.ESELON_ID AS CHAR),1,1) AS NUMERIC),9)
			FROM jadwal_awal_tes JT 
			INNER JOIN 
			(
				select b.FORMULA_ESELON_ID, a.ESELON_ID 
				from formula_eselon a
				inner join (select FORMULA_ESELON_ID, formula_id from formula_eselon) b on a.formula_id = b.formula_id 
				where 1=1
			) FE ON JT.FORMULA_ESELON_ID = FE.FORMULA_ESELON_ID WHERE 1=1 AND JT.JADWAL_AWAL_TES_ID = ".$reqId."
		)";
	}
	// formula_eselon 

	$statement.= "
	AND A.PEGAWAI_ID NOT IN (SELECT A.PEGAWAI_ID FROM jadwal_awal_tes_pegawai A WHERE A.JADWAL_AWAL_TES_ID = ".$reqId.")
	AND A.PEGAWAI_ID NOT IN (SELECT A.PEGAWAI_ID FROM jadwal_awal_tes_simulasi_pegawai A WHERE A.JADWAL_AWAL_TES_ID = ".$reqId.")
	--AND A.STATUS_JENIS IN (SELECT A.STATUS_JENIS FROM jadwal_awal_tes A WHERE A.JADWAL_AWAL_TES_ID = ".$reqId.")
	";
}

//SELECT JT.FORMULA_ESELON_ID FROM jadwal_tes JT WHERE 1=1 AND JT.JADWAL_TES_ID = ".$reqId."
$searchJson= " AND (UPPER(A.NAMA) LIKE '%".strtoupper($reqCari)."%' OR UPPER(A.NIP_BARU) LIKE '%".strtoupper($reqCari)."%' OR UPPER(A.LAST_JABATAN) LIKE '%".strtoupper($reqCari)."%' OR UPPER(D.NAMA) LIKE '%".strtoupper($reqCari)."%') ";

$allRecord = $set->getCountByParamsMonitoringPegawai(array(), $statement);
if($reqCari == "")
	$allRecordFilter = $allRecord;
else
	$allRecordFilter = $set->getCountByParamsMonitoringPegawai(array(), $statement.$searchJson);

$sOrder="ORDER BY A.LAST_PANGKAT_ID DESC, COALESCE(A.LAST_ESELON_ID,'99') ASC";
$set->selectByParamsMonitoringPegawai(array(), $dsplyRange, $dsplyStart, $statement.$searchJson, $sOrder, $reqId);
// echo $set->errorMsg;exit;
// echo $set->query;exit;
/*
 * Output
 */
$output = array(
	"sEcho" => intval($_GET['sEcho']),
	"iTotalRecords" => $allRecord,
	"iTotalDisplayRecords" => $allRecordFilter,
	"aaData" => array()
);

$no_urut=1;
while($set->nextRow())
{
	$row = array();
	for ( $i=0 ; $i<count($aColumns) ; $i++ )
	{
		if($aColumns[$i] == 'CHECK')
		{
			$checked= "";
			/*$keyArray= array_search($set->getField("PEGAWAI_ID"), $arrayTreeId);
			if($keyArray == ""){}
			else
				$checked= "checked";*/
			$tempCheckId= $set->getField("IDPEG");
			if(in_array($tempCheckId, $arrayCheckId))
			{
				$checked= "checked";
			}

			$row[] = "<input type='checkbox' $checked onclick='setKlikCheck()' class='editor-active' id='reqPilihCheck".$set->getField("IDPEG")."' ".$checked." value='".$set->getField("IDPEG")."'>";
		}
		elseif(trim($aColumns[$i]) == "TGL_LAHIR" || trim($aColumns[$i]) == "TMT_GOL_AKHIR" || trim($aColumns[$i]) == "TMT_JABATAN")
		$row[] = dateToPageCheck($set->getField(trim($aColumns[$i])));
		elseif($aColumns[$i] == "NO")
		{
			$row[] = $no_urut;
		}
		else
		$row[] = $set->getField(trim($aColumns[$i]));
	}
	$no_urut++;
	$output['aaData'][] = $row;
}

echo json_encode( $output );
?>