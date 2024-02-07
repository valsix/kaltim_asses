<?
/* INCLUDE FILE */
include_once("../WEB/classes/utils/UserLogin.php");
include_once("../WEB/functions/string.func.php");
include_once("../WEB/functions/default.func.php");
include_once("../WEB/functions/date.func.php");
include_once("../WEB/classes/base/Pangkat.php");


/* create objects */

ini_set("memory_limit","500M");
ini_set('max_execution_time', 520);

$set = new Pangkat();

// get the search term
$search_term = isset($_REQUEST['term']) ? $_REQUEST['term'] : "";

$j=0;

$set->selectByParams(array(), 10, 0, " AND UPPER(KODE) LIKE '%".strtoupper($search_term)."%' ");
//$set->selectByParams(array(), 5, 0);
//echo $set->query;exit;
while($set->nextRow())
{
	$arr_parent[$j]['id'] = $set->getField("PANGKAT_ID");
	$arr_parent[$j]['label'] = $set->getField("KODE");
	$arr_parent[$j]['desc'] = $set->getField("KODE");
	$j++;
}

if($j == 0)
{
	$arr_parent[$j]['id'] = "";
	$arr_parent[$j]['label'] = "";
	$arr_parent[$j]['desc'] = "";
}

//echo json_encode($arr_parent, JSON_UNESCAPED_SLASHES);
echo json_encode($arr_parent);
?>