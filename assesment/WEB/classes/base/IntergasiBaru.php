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

  class IntergasiBaru extends Entity{ 

	var $query;
    /**
    * Class constructor.
    * @author M Reza Faisal
    **/
    function IntergasiBaru(){
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
		$this->setField("USER_LOGIN_ID", $this->getNextId("USER_LOGIN_ID","pds_rekrutmen.USER_LOGIN"));  				
        $this->setField("USER_PASS", md5($this->getField("USER_PASS")));
		$str = "INSERT INTO pds_rekrutmen.USER_LOGIN 
                (USER_LOGIN_ID, PELAMAR_ID, NAMA, EMAIL ,STATUS, USER_LOGIN, USER_PASS, LAST_CREATE_USER, LAST_CREATE_DATE) 
                VALUES(
				  '".$this->getField("USER_LOGIN_ID")."',
                  '".$this->getField("PELAMAR_ID")."',
                  '".$this->getField("NAMA")."',
                  '".$this->getField("EMAIL")."',
                  1,
                  '".$this->getField("USER_LOGIN")."',
                  '".$this->getField("USER_PASS")."',
                  '".$this->getField("LAST_CREATE_USER")."',
                  ".$this->getField("LAST_CREATE_DATE")."
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
		$str = "UPDATE pds_rekrutmen.USER_LOGIN SET
				  USER_PASS = '".$this->getField("USER_PASS")."'
				WHERE USER_LOGIN_ID = '".$this->getField("USER_LOGIN_ID")."'
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
      $str = "
      SELECT * FROM pelamar
      WHERE 
      NIP = '".$USER_NAME."'
      ";
				
		  $this->query = $str;
      // echo $str;exit();
		
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

    function selectByParamsSimple($paramsArray=array(),$limit=-1,$from=-1){
      $str = "SELECT USER_LOGIN_ID, PELAMAR_ID, NAMA, EMAIL ,STATUS, USER_LOGIN, USER_PASS, LAST_CREATE_USER, LAST_CREATE_DATE FROM pds_rekrutmen.USER_LOGIN A WHERE 1 = 1 "; 
      while(list($key,$val)=each($paramsArray)){
        $str .= " AND $key = '$val' ";
      }
      $str .= " ORDER BY USER_LOGIN_ID ASC ";
		$this->query = $str;
	  //echo $str;
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