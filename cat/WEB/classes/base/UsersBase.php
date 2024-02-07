<? 
/* *******************************************************************************************************
MODUL NAME 			: SIMWEB
FILE NAME 			: UsersBase.php
AUTHOR				: MRF
VERSION				: 1.0
MODIFICATION DOC	:
DESCRIPTION			: Entity-base class for tabel Users implementation
***************************************************************************************************** */

  /***
  * Entity-base class untuk mengimplementasikan tabel Users.
  * 
  * @author M Reza Faisal
  * @generated by Entity Generator 5.8.3
  * @generated on 27-Apr-2005,14:15
  ***/
  include_once("../WEB/classes/db/Entity.php");
  //include_once("$INDEX_ROOT/$INDEX_SUB/src/valsix/WEB/classes/db/Entity.php");

  class UsersBase extends Entity{ 

	var $query;
    /**
    * Class constructor.
    * @author M Reza Faisal
    **/
    function UsersBase(){
      $this->Entity(); 
    }

    /**
    * Cek apakah operasi insert dapat dilakukan atau tidak 
    * @author M Reza Faisal
    * @return boolean True jika insert boleh dilakukan, false jika tidak.
    **/
    function canInsert(){
      return true;
    }

    /**
    * Insert record ke database. 
    * @author M Reza Faisal
    * @return boolean True jika insert sukses, false jika tidak.
    **/
    function insert(){
      if(!$this->canInsert())
        showMessageDlg("Data Users tidak dapat di-insert",true);
      else{
	  	/*Auto-generate primary key(s) by next max value (integer) */
		$this->setField("UID", $this->getNextId("UID","users"));  				
        $this->setField("PASSWORD", md5($this->getField("PASSWORD")."BAKWAN"));
		$str = "INSERT INTO users 
                (UID, USER_NAME,NAMA,ALAMAT,EMAIL,TELP,PASSWORD,LEVEL,STATUS_USER) 
                VALUES(
				  '".$this->getField("UID")."',
                  '".$this->getField("USER_NAME")."',
                  '".$this->getField("NAMA")."',
                  '".$this->getField("ALAMAT")."',
                  '".$this->getField("EMAIL")."',
                  '".$this->getField("TELP")."',
                  '".$this->getField("PASSWORD")."',
				  '".$this->getField("LEVEL")."',
				  '".$this->getField("STATUS_USER")."'
                )"; 
		$this->query = $str;
        return $this->execQuery($str);
      }
    }

    /**
    * Cek apakah operasi update dapat dilakukan atau tidak. 
    * @author M Reza Faisal
    * @return boolean True jika update dapat dilakukan, false jika tidak.
    **/
    function canUpdate(){
      return true;
    }

    /**
    * Update record. 
    * @author M Reza Faisal
    * @return boolean True jika update sukses, false jika tidak.
    **/
    function update(){
      if(!$this->canUpdate())
        showMessageDlg("Data Users tidak dapat diupdate",true);
      else{
        //$this->setField("PASSWORD", md5($this->getField("PASSWORD")."BAKWAN"));
		$str = "UPDATE users 
                SET 
                  NAMA = '".$this->getField("NAMA")."',
                  ALAMAT = '".$this->getField("ALAMAT")."',
                  EMAIL = '".$this->getField("EMAIL")."',
                  TELP = '".$this->getField("TELP")."',
				  LEVEL = '".$this->getField("LEVEL")."'
                WHERE 
                  USER_NAME = '".$this->getField("USER_NAME")."'"; 
				  $this->query = $str;
        return $this->execQuery($str);
      }
    }

    /**
    * Cek apakah record dapat dihapus atau tidak. 
    * @author M Reza Faisal
    * @return boolean True jika record dapat dihapus, false jika tidak.
    **/
    function canDelete(){
      return true;
    }

    /**
    * Menghapus record sesuai id-nya. 
    * @author M Reza Faisal
    * @return boolean True jika penghapusan sukses, false jika tidak.
    **/
    function delete(){
      if(!$this->canDelete())
        showMessageDlg("Data Users tidak dapat di-hapus",true);
      else{
        $str = "DELETE FROM users 
                WHERE 
                  USER_NAME = '".$this->getField("USER_NAME")."'"; 
        return $this->execQuery($str);
      }
    }

    function updatePassword()
	{
		/*Auto-generate primary key(s) by next max value (integer) */
		$str = "UPDATE users SET
				  PASSWORD = '".$this->getField("PASSWORD")."'
				WHERE UID = '".$this->getField("UID")."'
				"; 
		$this->query = $str;
		return $this->execQuery($str);
    }
    /**
    * Cari record berdasarkan id-nya. 
    * @author M Reza Faisal
    * @param string USER_NAME Id record 
    * @return boolean True jika pencarian sukses, false jika tidak.
    **/
    function selectById($USER_NAME){
      $str = "SELECT * FROM user_login
              WHERE 
                USER_LOGIN = '".$USER_NAME."'"; 
				
		$this->query = $str;
		
      return $this->select($str);
    }

    /** 
    * Cari record berdasarkan array parameter dan limit tampilan 
    * @author M Reza Faisal
    * @param array paramsArray Array of parameter. Contoh array("id"=>"xxx","nama"=>"yyy") 
    * @param int limit Jumlah maksimal record yang akan diambil 
    * @param int from Awal record yang diambil 
    * @return boolean True jika sukses, false jika tidak 
    **/ 
    function selectByParams($paramsArray=array(),$limit=-1,$from=-1){
      $str = "SELECT * FROM users WHERE USER_NAME IS NOT NULL "; 
      while(list($key,$val)=each($paramsArray)){
        $str .= " AND $key = '$val' ";
      }
      $str .= " ORDER BY USER_NAME";
      return $this->selectLimit($str,$limit,$from); 
    }
    /** 
    * Hitung jumlah record berdasarkan parameter (array). 
    * @author M Reza Faisal
    * @param array paramsArray Array of parameter. Contoh array("id"=>"xxx","nama"=>"yyy") 
    * @return long Jumlah record yang sesuai kriteria 
    **/ 
    function getCountByParams($paramsArray=array(), $varStatement=""){
      $str = "SELECT COUNT(USER_NAME) AS ROWCOUNT FROM users WHERE USER_NAME IS NOT NULL ".$varStatement; 
      while(list($key,$val)=each($paramsArray)){
        $str .= " AND $key = '$val' ";
      }
      $this->select($str); 
      if($this->firstRow()) 
        return $this->getField("ROWCOUNT"); 
      else 
         return 0; 
    }
  } 
?>