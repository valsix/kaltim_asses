<?
/* INCLUDE FILE */
include_once("../WEB/classes/utils/UserLogin.php");
include_once("../WEB/functions/string.func.php");
include_once("../WEB/functions/default.func.php");
include_once("../WEB/functions/date.func.php");
include_once("../WEB/classes/base/Lowongan.php");


/* create objects */

ini_set("memory_limit","500M");
ini_set('max_execution_time', 520);

$reqMode= httpFilterGet("reqMode");

// get the search term
$search_term = isset($_REQUEST['term']) ? $_REQUEST['term'] : "";

$j=0;
$set = new Lowongan();
$set->selectByParams(array(), 20, 0, $statement." AND (UPPER(A.KODE) LIKE '%".strtoupper($search_term)."%' OR UPPER(B.NAMA) LIKE '%".strtoupper($search_term)."%') ");
//$set->selectByParams(array(), 5, 0);
//echo $set->query;exit;
while($set->nextRow())
{
	$arr_parent[$j]['id'] = $set->getField("LOWONGAN_ID");
	$arr_parent[$j]['label'] = $set->getField("LOWONGAN_INFO");
	$arr_parent[$j]['desc'] = $set->getField("LOWONGAN_INFO");
	$j++;
}
//echo json_encode($arr_parent, JSON_UNESCAPED_SLASHES);
echo json_encode($arr_parent);
?>