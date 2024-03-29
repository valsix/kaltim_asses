<?
/* INCLUDE FILE */
include_once("../WEB/classes/utils/UserLogin.php");
include_once("../WEB/functions/string.func.php");
include_once("../WEB/functions/default.func.php");
include_once("../WEB/functions/date.func.php");
include_once("../WEB/classes/base/Kabupaten.php");


/* create objects */

ini_set("memory_limit","500M");
ini_set('max_execution_time', 520);

$reqPropinsiId= httpFilterGet("reqPropinsiId");

$set = new Kabupaten();

// get the search term
$search_term = isset($_REQUEST['term']) ? $_REQUEST['term'] : "";

$j=0;

if($reqPropinsiId == ""){}
else
$statement .= " AND PROPINSI_ID = ".$reqPropinsiId;

$set->selectByParams(array(), 10, 0, $statement." AND UPPER(NAMA) LIKE '%".strtoupper($search_term)."%' ");
//echo $set->query;exit;
while($set->nextRow())
{
	$arr_parent[$j]['id'] = $set->getField("KABUPATEN_ID");
	$arr_parent[$j]['label'] = $set->getField("NAMA");
	$arr_parent[$j]['desc'] = $set->getField("NAMA");
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