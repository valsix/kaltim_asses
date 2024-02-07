<? 
/* *******************************************************************************************************
MODUL NAME 			: IMASYS
FILE NAME 			: 
AUTHOR				: 
VERSION				: 1.0
MODIFICATION DOC	:
DESCRIPTION			: 
***************************************************************************************************** */

  /***
  * Entity-base class untuk mengimplementasikan tabel AKSES_ADM_REKRUTMEN.
  * 
  ***/
  include_once("../WEB/classes/db/Entity.php");

  class AksesAdmRekrutmenMenu extends Entity{ 

	var $query;
    /**
    * Class constructor.
    **/
    function AksesAdmRekrutmenMenu()
	{
      $this->Entity(); 
    }
	
	function insert()
	{
	
		$this->setField("AKSES_ADM_REKRUTMEN_MENU_ID", $this->getAdminNextId("AKSES_ADM_REKRUTMEN_MENU_ID","AKSES_ADM_REKRUTMEN_MENU")); 
		$str = "
				INSERT INTO ".$this->getField("TABLE")."_MENU (
				  ".$this->getField("TABLE")."_ID, MENU_ID, AKSES) 
 			  	VALUES (
				  '".$this->getField("AKSES_ADM_REKRUTMEN_ID")."',
				  '".$this->getField("MENU_ID")."',
				  '".$this->getField("AKSES")."'
				)"; 
				
		$this->query = $str;
		return $this->execQuery($str);
    }

    function update()
	{
		$str = "
				UPDATE AKSES_ADM_REKRUTMEN_MENU
				SET    
					   AKSES_ADM_REKRUTMEN_ID   		= '".$this->getField("AKSES_ADM_REKRUTMEN_ID")."',
					   MENU_ID      				= '".$this->getField("MENU_ID")."',
					   AKSES      					= '".$this->getField("AKSES")."'
				WHERE  AKSES_ADM_REKRUTMEN_MENU_ID   = '".$this->getField("AKSES_ADM_REKRUTMEN_MENU_ID")."'

			 "; 
		$this->query = $str;
		return $this->execQuery($str);
    }

	function delete()
	{
        $str = "DELETE FROM ".$this->getField("TABLE")."_MENU
                WHERE 
                  ".$this->getField("TABLE")."_ID = ".$this->getField("AKSES_ADM_REKRUTMEN_ID").""; 
				  
		$this->query = $str;
		//echo $str;exit;
        return $this->execQuery($str);
    }

    /** 
    * Cari record berdasarkan array parameter dan limit tampilan 
    * @param array paramsArray Array of parameter. Contoh array("id"=>"xxx","IJIN_USAHA_ID"=>"yyy") 
    * @param int limit Jumlah maksimal record yang akan diambil 
    * @param int from Awal record yang diambil 
    * @return boolean True jika sukses, false jika tidak 
    **/ 
    function selectByParams($paramsArray=array(),$limit=-1,$from=-1, $statement="")
	{
		$str = "
				SELECT 
				AKSES_ADM_REKRUTMEN_MENU_ID, AKSES_ADM_REKRUTMEN_ID, MENU_ID, AKSES
				FROM AKSES_ADM_REKRUTMEN_MENU		
				WHERE 1 = 1
				"; 
		
		while(list($key,$val) = each($paramsArray))
		{
			$str .= " AND $key = '$val' ";
		}
		
		$str .= $statement." ORDER BY AKSES_ADM_REKRUTMEN_MENU_ID DESC";
		$this->query = $str;
		return $this->selectLimit($str,$limit,$from); 
    }
    
	function selectByParamsLike($paramsArray=array(),$limit=-1,$from=-1, $statement="")
	{
		$str = "
				SELECT 
				AKSES_ADM_REKRUTMEN_MENU_ID, AKSES_ADM_REKRUTMEN_ID, MENU_ID, AKSES
				FROM AKSES_ADM_REKRUTMEN_MENU		
				WHERE 1 = 1
			    "; 
		
		while(list($key,$val) = each($paramsArray))
		{
			$str .= " AND $key LIKE '%$val%' ";
		}
		
		$this->query = $str;
		$str .= $statement." ORDER BY AKSES_ADM_REKRUTMEN_MENU_ID ASC";
		return $this->selectLimit($str,$limit,$from); 
    }	
    /** 
    * Hitung jumlah record berdasarkan parameter (array). 
    * @param array paramsArray Array of parameter. Contoh array("id"=>"xxx","IJIN_USAHA_ID"=>"yyy") 
    * @return long Jumlah record yang sesuai kriteria 
    **/ 
    function getCountByParams($paramsArray=array(), $statement="")
	{
		$str = "SELECT COUNT(AKSES_ADM_REKRUTMEN_MENU_ID) AS ROWCOUNT FROM AKSES_ADM_REKRUTMEN_MENU WHERE AKSES_ADM_REKRUTMEN_MENU_ID IS NOT NULL ".$statement; 
		
		while(list($key,$val)=each($paramsArray))
		{
			$str .= " AND $key = '$val' ";
		}
		
		$this->select($str); 
		if($this->firstRow()) 
			return $this->getField("ROWCOUNT"); 
		else 
			return 0; 
    }

    function getCountByParamsLike($paramsArray=array(), $statement="")
	{
		$str = "SELECT COUNT(AKSES_ADM_REKRUTMEN_MENU_ID) AS ROWCOUNT FROM AKSES_ADM_REKRUTMEN_MENU WHERE AKSES_ADM_REKRUTMEN_MENU_ID IS NOT NULL ".$statement; 
		while(list($key,$val)=each($paramsArray))
		{
			$str .= " AND $key LIKE '%$val%' ";
		}
		
		$this->select($str); 
		if($this->firstRow()) 
			return $this->getField("ROWCOUNT"); 
		else 
			return 0; 
    }	
  } 
?>