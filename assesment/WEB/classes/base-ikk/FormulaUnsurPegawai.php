<? 
/* *******************************************************************************************************
MODUL NAME 			: MTSN LAWANG
FILE NAME 			: 
AUTHOR				: 
VERSION				: 1.0
MODIFICATION DOC	:
DESCRIPTION			: 
***************************************************************************************************** */

  /***
  * Entity-base class untuk mengimplementasikan tabel kategori.
  * 
  ***/
  include_once("../WEB/classes/db/Entity.php");

  class FormulaUnsurPegawai extends Entity{ 

	var $query;
	var $db;
    /**
    * Class constructor.
    **/
    function FormulaUnsurPegawai()
	{
        //    $xmlfile = "../WEB/web.xml";
	  // $data = simplexml_load_file($xmlfile);
	  // $rconf_url_info= $data->urlConfig->main->urlbase;

	  // $this->db=$rconf_url_info;
	  $this->db='simpeg';
	  $this->Entity();  
    }
	
	function insert()
	{
		/*Auto-generate primary key(s) by next max value (integer) */
		$this->setField("FORMULA_UNSUR_PEGAWAI_ID", $this->getNextId("FORMULA_UNSUR_PEGAWAI_ID","formula_unsur_pegawai")); 

		$str = "INSERT INTO formula_unsur_pegawai (
				   FORMULA_UNSUR_PEGAWAI_ID, LAST_CREATE_USER, LAST_CREATE_DATE,UNSUR_ID,FORM_PERMEN_ID,PEGAWAI_ID) 
				VALUES (
				  ".$this->getField("FORMULA_UNSUR_PEGAWAI_ID").",
				  '".$this->getField("LAST_CREATE_USER")."',
				  ".$this->getField("LAST_CREATE_DATE").",
				  '".$this->getField("UNSUR_ID")."',
				  ".$this->getField("FORM_PERMEN_ID").",
				  ".$this->getField("PEGAWAI_ID")."

				)"; 
		$this->id= $this->getField("FORMULA_UNSUR_PEGAWAI_ID");
		$this->query= $str;
		return $this->execQuery($str);
    }
	
	function updateDinamis()
	{
		/*Auto-generate primary key(s) by next max value (integer) */
		$str = "
				UPDATE ".$this->getField("TABLE")."
				SET    
					   ".$this->getField("FIELD")." = ".$this->getField("FIELD_VALUE")."
				WHERE  ".$this->getField("FIELD_ID")." = ".$this->getField("FIELD_ID_VALUE")."
				"; 
				$this->query = $str;
		return $this->execQuery($str);
    }
	
    function update()
	{
		/*Auto-generate primary key(s) by next max value (integer) */
		$str= "
				UPDATE formula_unsur_pegawai SET
				  FORMULA_ESELON_ID= ".$this->getField("FORMULA_ESELON_ID").",
				  LEVEL_ID= ".$this->getField("LEVEL_ID").",
				  NILAI_STANDAR= ".$this->getField("NILAI_STANDAR")."
				WHERE FORMULA_UNSUR_PEGAWAI_ID = ".$this->getField("FORMULA_UNSUR_PEGAWAI_ID")."
				"; 
		$this->query = $str;
		return $this->execQuery($str);
    }
	
	function deleteLevel()
	{
		$strLevel= "DELETE FROM level_atribut
                WHERE 
                  LEVEL_ID = ".$this->getField("LEVEL_ID")."";
				  
		$this->query = $strLevel;
        $this->execQuery($strLevel);
		
		$strLain= "DELETE FROM atribut_penggalian
                WHERE 
                  FORMULA_UNSUR_PEGAWAI_ID = ".$this->getField("FORMULA_UNSUR_PEGAWAI_ID").""; 
				  
		$this->query = $strLain;
        $this->execQuery($strLain);
		
        $str = "DELETE FROM formula_unsur_pegawai
                WHERE 
                  FORMULA_UNSUR_PEGAWAI_ID = ".$this->getField("FORMULA_UNSUR_PEGAWAI_ID").""; 
				  
		$this->query = $str;
        return $this->execQuery($str);
    }
	
	function delete()
	{
		// $strLain= "DELETE FROM atribut_penggalian
  //               WHERE 
  //                 FORMULA_UNSUR_PEGAWAI_ID = ".$this->getField("FORMULA_UNSUR_PEGAWAI_ID").""; 
				  
		// $this->query = $strLain;
  //       $this->execQuery($strLain);
		
        $str = "DELETE FROM formula_unsur_pegawai
                WHERE 
                  FORMULA_UNSUR_PEGAWAI_ID = ".$this->getField("FORMULA_UNSUR_PEGAWAI_ID").""; 
				  
		$this->query = $str;
        return $this->execQuery($str);
    }
	
	function selectByParamsCombo($paramsArray=array(),$limit=-1,$from=-1, $statement='', $sField="")
	{
		$str = "SELECT 
					   ".$sField."
				FROM atribut_penggalian A
				WHERE 1=1"; 
		
		while(list($key,$val) = each($paramsArray))
		{
			$str .= " AND $key = '$val' ";
		}
		
		$str .= $statement." GROUP BY ".$sField." ORDER BY ".$sField;
		$this->query = $str;
				
		return $this->selectLimit($str,$limit,$from); 
    }
	
	function selectByParams($paramsArray=array(),$limit=-1,$from=-1, $statement='', $sOrder="ORDER BY A.ATRIBUT_PENGGALIAN_ID ASC")
	{
		$str = "
				SELECT A.ATRIBUT_PENGGALIAN_ID, A.FORMULA_UNSUR_PEGAWAI_ID, A.PENGGALIAN_ID
				FROM atribut_penggalian A
				WHERE 1=1
				"; 
		
		while(list($key,$val) = each($paramsArray))
		{
			$str .= " AND $key = '$val' ";
		}
		
		$str .= $statement." ".$sOrder;
		$this->query = $str;
		//echo $str;		
		return $this->selectLimit($str,$limit,$from); 
    }
	
	function selectByParamsSuksesiFormulaAtribut($paramsArray=array(),$limit=-1,$from=-1, $reqrowid="", $statement='', $statementpeg='', $sOrder="ORDER BY A.UNSUR_ID ASC")
	{
		$str = "
				SELECT A.UNSUR_ID, A.UNSUR_ID_PARENT
				, A.NAMA, A.KETERANGAN, B.FORMULA_UNSUR_PEGAWAI_ID
				,C.UNSUR_BOBOT,C.FORMULA_UNSUR_PEGAWAI_BOBOT_ID,
				C.PEGAWAI_ID
				FROM unsur_penilaian A
				LEFT JOIN
				(
					SELECT A.FORMULA_UNSUR_PEGAWAI_ID,  A.UNSUR_ID,A.PEGAWAI_ID
					FROM formula_unsur_pegawai A
					WHERE 1=1 
				) B ON A.UNSUR_ID = B.UNSUR_ID
				LEFT JOIN
				(
					SELECT A.UNSUR_ID, A.UNSUR_BOBOT
					, A.FORMULA_UNSUR_PEGAWAI_BOBOT_ID, A.PEGAWAI_ID
					FROM formula_unsur_pegawai_bobot A
					WHERE 1=1 ".$statementpeg."
				) C ON A.UNSUR_ID = C.UNSUR_ID
				WHERE 1=1
				"; 
		
		while(list($key,$val) = each($paramsArray))
		{
			$str .= " AND $key = '$val' ";
		}
		
		$str .= $statement." ".$sOrder;
		$this->query = $str;
		//echo $str;exit;
		return $this->selectLimit($str,$limit,$from); 
    }
	
	/** 
    * Hitung jumlah record berdasarkan parameter (array). 
    * @param array paramsArray Array of parameter. Contoh array("id"=>"xxx","JABATAN"=>"yyy") 
    * @return long Jumlah record yang sesuai kriteria 
    **/ 
    function getCountByParams($paramsArray=array(), $statement="")
	{
		$str = "
		SELECT COUNT(1) AS ROWCOUNT 
		FROM atribut_penggalian A
		WHERE 1=1 ".$statement;
		while(list($key,$val)=each($paramsArray))
		{
			$str .= " AND $key = '$val' ";
		}
		$this->query = $str;
		$this->select($str); 
		if($this->firstRow()) 
			return $this->getField("ROWCOUNT"); 
		else 
			return 0; 
    }

  } 
?>