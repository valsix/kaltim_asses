<?php

include_once("../WEB/classes/utils/UserLogin.php");

include_once("../WEB/functions/string.func.php");

include_once("../WEB/functions/default.func.php");

include_once("../WEB/functions/date.func.php");

include_once("../WEB/classes/base/Informasi.php");



$informasi = new Informasi();

$reqId = httpFilterGet("reqId");



/* LOGIN CHECK */

/*if ($userLogin->checkUserLogin()) 

{ 

	$userLogin->retrieveUserInfo();

}*/



ini_set("memory_limit","500M");

ini_set('max_execution_time', 520);


/*if($reqId == "2" || $reqId == "6")
{
	$aColumns = array("INFORMASI_ID", "TANGGAL", "I_NAMA", "I_KETERANGAN", "I_TITLE", "I_DESCRIPTION", "AKTIF", "STATUS_INFORMASI_NAMA");
	$aColumnsAlias = array("INFORMASI_ID", "TANGGAL", "I_NAMA", "I_KETERANGAN", "I_TITLE", "I_DESCRIPTION", "AKTIF", "STATUS_INFORMASI_NAMA");
}
else
{*/
	$aColumns = array("INFORMASI_ID", "TANGGAL", "I_NAMA", "I_KETERANGAN", "AKTIF");
	$aColumnsAlias = array("INFORMASI_ID", "TANGGAL", "I_NAMA", "I_KETERANGAN", "AKTIF");
//}


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

	if ( trim($sOrder) == "ORDER BY INFORMASI_ID asc" )

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



/*if($reqId == 2)
	$statement= " AND STATUS_INFORMASI IN ('2', '6')";
else*/

$statement= " AND STATUS_INFORMASI = '1'";

$statementJson= " AND (UPPER(I.NAMA) LIKE '%".strtoupper($_GET['sSearch'])."%')";

$allRecord = $informasi->getCountByParams(array(), $statement.$statementJson);
if($_GET['sSearch'] == "")
	$allRecordFilter = $allRecord;
else	
	$allRecordFilter = $informasi->getCountByParams(array(), $statement.$statementJson);

$informasi->selectByParams(array(), $dsplyRange, $dsplyStart, $statement.$statementJson);     		


/* Output */

$output = array(

	"sEcho" => intval($_GET['sEcho']),

	"iTotalRecords" => $allRecord,

	"iTotalDisplayRecords" => $allRecordFilter,

	"aaData" => array()

);



while($informasi->nextRow())

{

	$row = array();

	for ( $i=0 ; $i<count($aColumns) ; $i++ )

	{

		if($aColumns[$i] == "TANGGAL")
			$row[] = getFormattedDateTime($informasi->getField($aColumns[$i]), false);
		else if($aColumns[$i] == "I_KETERANGAN")
			$row[] = truncate($informasi->getField($aColumns[$i]), 5)."...";
		else
			$row[] = $informasi->getField($aColumns[$i]);

	}

	

	$output['aaData'][] = $row;

}



echo json_encode( $output );

?>