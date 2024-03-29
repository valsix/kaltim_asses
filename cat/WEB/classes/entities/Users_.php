<? 
/* *******************************************************************************************************
MODUL NAME 			: SIMWEB
FILE NAME 			: Users.php
AUTHOR				: MRF
VERSION				: 1.0
MODIFICATION DOC	:
DESCRIPTION			: Entity-base class for tabel Users implementation
***************************************************************************************************** */

  /***
  * Entity-class untuk mengimplementasikan tabel users.
  * 
  * @author M Reza Faisal
  * @generated by Entity Generator 5.8.3
  * @generated on 21-Apr-2005,06:36
  ***/
  include_once("../WEB/classes/base/UsersBase.php");
  //include_once("$INDEX_ROOT/$INDEX_SUB/src/valsix/WEB/classes/base/UsersBase.php");

  class Users extends UsersBase{ 
    var $query;

    /************************** <STANDARD METHODS> **************************************/
    /**
    * Class constructor.
    * @author M Reza Faisal
    **/
    function Users(){
      /** !!DO NOT REMOVE/CHANGE CODES IN THIS SECTION!! **/
      $this->UsersBase(); //execute Entity constructor
      /** YOU CAN INSERT/CHANGE CODES IN THIS SECTION **/				
			
	
    }
	function validasi()
	{
			/*Auto-generate primary key(s) by next max value (integer) */
			$str = "
					UPDATE user_login
					SET     
						   USER_STATUS    = 1				   
					WHERE  REKANAN_ID   = (SELECT REKANAN_ID FROM REKANAN WHERE KODE =  '".$this->getField("KODE")."')
					"; 				
			$this->execQuery($str);
			$str1 = "UPDATE REKANAN
					SET     
						   STATUS_VALIDASI  = 1,
						   TANGGAL_VALIDASI = CURRENT_DATE				   
					WHERE  KODE = '".$this->getField("KODE")."'";
			return $this->execQuery($str1);
	}	
    /************************** </STANDARD METHODS> **********************************/

    /************************** <ADDITIONAL METHODS> *********************************/
	function selectByIdPassword($id_usr,$passwd){
	  $str = "
	  SELECT 
		  A.PEGAWAI_ID PELAMAR_ID, B.NIP_BARU, B.JADWAL_TES_ID, B.FORMULA_ASSESMENT_ID, B.FORMULA_ESELON_ID, B.UJIAN_ID
		  , CAST(TANGGAL_TES || ' 00:00:01' AS TIMESTAMP WITHOUT TIME ZONE) PEGAWAI_TANGGAL_AWAL
		  , CAST(TANGGAL_TES || ' 23:59:59' AS TIMESTAMP WITHOUT TIME ZONE) PEGAWAI_TANGGAL_AKHIR
		  , B.UJIAN_PEGAWAI_DAFTAR_ID
	  FROM cat.user_app A
	  INNER JOIN
	  (
		  SELECT
		  A.UJIAN_PEGAWAI_DAFTAR_ID, A.PEGAWAI_ID, C.NIP_BARU, A.JADWAL_TES_ID, A.FORMULA_ASSESMENT_ID, A.FORMULA_ESELON_ID, A.UJIAN_ID
		  , TO_CHAR(TGL_MULAI, 'YYYY-MM-DD') TANGGAL_TES
		  FROM cat.ujian_pegawai_daftar A
		  INNER JOIN cat.ujian B ON A.UJIAN_ID = B.UJIAN_ID
		  INNER JOIN simpeg.pegawai C ON A.PEGAWAI_ID = C.PEGAWAI_ID
		  WHERE 1=1
		  AND CURRENT_DATE = TO_DATE(TO_CHAR(TGL_MULAI, 'YYYY-MM-DD'), 'YYYY-MM-DD')
	  ) B ON A.PEGAWAI_ID = B.PEGAWAI_ID
	  WHERE 1=1
	  AND USER_LOGIN='".$id_usr."' AND USER_PASS='".$passwd."'";

	  // AND CURRENT_DATE = TO_DATE(TO_CHAR(TGL_MULAI, 'YYYY-MM-DD'), 'YYYY-MM-DD')

	  // AND TO_DATE('2020-05-12', 'YYYY-MM-DD') = TO_DATE(TO_CHAR(TGL_MULAI, 'YYYY-MM-DD'), 'YYYY-MM-DD')

	  // AND TO_DATE('2019-09-19', 'YYYY-MM-DD') BETWEEN TO_DATE(TO_CHAR(TGL_MULAI, 'YYYY-MM-DD'), 'YYYY-MM-DD')
	  // AND TO_DATE(TO_CHAR(TGL_SELESAI, 'YYYY-MM-DD'), 'YYYY-MM-DD')

	  // echo $str;exit();
	  //
	  //AND C.IS_STATUS_LOLOS = '1'
      $this->query = $str;
	  return $this->select($str);         
    }
	
	function updateUserPass(){
      if(!$this->canUpdate())
        showMessageDlg("Data Users tidak dapat diupdate",true);
      else{
		$this->setField("USER_PASSWORD", md5($this->getField("USER_PASSWORD")));
		$str = "UPDATE user_login 
                SET 
                  USER_PASSWORD = '".$this->getField("USER_PASSWORD")."'
                WHERE 
                  USER_LOGIN_ID = '".$this->getField("USER_LOGIN_ID")."'"; 
			   $this->query = $str;
        return $this->execQuery($str);
      }
    }
	
    function selectUserGroup($paramsArray=array(),$limit=-1,$from=-1, $statement="")
	{
		$str = "
					SELECT 
                    USER_GROUP_ID, A.NAMA, KETERANGAN, B.NAMA AKSES_APP_DATABASE, C.NAMA AKSES_APP_OPERASIONAL, 
                    D.NAMA AKSES_APP_KEPEGAWAIAN, E.NAMA AKSES_APP_PENGHASILAN,
                    F.NAMA AKSES_APP_PRESENSI, G.NAMA AKSES_APP_PENILAIAN, 
                    H.NAMA AKSES_APP_BACKUP, I.NAMA AKSES_ADM_WEBSITE, AMBIL_GROUP_AKSES_INTRANET(AKSES_ADM_INTRANET_ID) AKSES_ADM_INTRANET,
					A.AKSES_APP_DATABASE_ID, A.AKSES_APP_OPERASIONAL_ID, A.AKSES_APP_KEPEGAWAIAN_ID, A.AKSES_APP_PENGHASILAN_ID, 
					A.AKSES_APP_PRESENSI_ID, A.AKSES_APP_PENILAIAN_ID, A.AKSES_APP_BACKUP_ID, A.AKSES_ADM_WEBSITE_ID, A.AKSES_ADM_INTRANET_ID
                    FROM USER_GROUP A 
					LEFT JOIN AKSES_APP_DATABASE B ON A.AKSES_APP_DATABASE_ID = B.AKSES_APP_DATABASE_ID 
					LEFT JOIN AKSES_APP_OPERASIONAL C ON A.AKSES_APP_OPERASIONAL_ID = C.AKSES_APP_OPERASIONAL_ID 
					LEFT JOIN AKSES_APP_KEPEGAWAIAN D ON A.AKSES_APP_KEPEGAWAIAN_ID = D.AKSES_APP_KEPEGAWAIAN_ID 
					LEFT JOIN AKSES_APP_PENGHASILAN E ON A.AKSES_APP_PENGHASILAN_ID = E.AKSES_APP_PENGHASILAN_ID 
					LEFT JOIN AKSES_APP_PRESENSI F ON A.AKSES_APP_PRESENSI_ID = F.AKSES_APP_PRESENSI_ID 
					LEFT JOIN AKSES_APP_PENILAIAN G ON A.AKSES_APP_PENILAIAN_ID = G.AKSES_APP_PENILAIAN_ID 
					LEFT JOIN AKSES_APP_BACKUP H ON A.AKSES_APP_BACKUP_ID = H.AKSES_APP_BACKUP_ID 
					LEFT JOIN AKSES_ADM_WEBSITE I ON A.AKSES_ADM_WEBSITE_ID = I.AKSES_ADM_WEBSITE_ID 
					 WHERE USER_GROUP_ID IS NOT NULL
				"; 
		
		while(list($key,$val) = each($paramsArray))
		{
			$str .= " AND $key = '$val' ";
		}
		
		$str .= $statement." ORDER BY A.NAMA DESC";
		
		$this->query = $str;
		return $this->selectLimit($str,$limit,$from); 
    }
	function searchUserGroup($paramsArray=array(),$limit=-1,$from=-1,$varStatement=""){
      $str = "SELECT u.username AS username,
	  				 u.NAMA AS NAMA,
					 u.EMAIL AS EMAIL,
					 ug.NAMA as USERGROUP
	  		  FROM user_login u, usergroups ug
			  WHERE username IS NOT NULL 
					AND ug.UGID = u.LEVEL "; 
      while(list($key,$val)=each($paramsArray)){
        $str .= " AND $key LIKE '%$val%' ";
      }
      $str .= $varStatement." ORDER BY u.username";
	  $this->query = $str;
      return $this->selectLimit($str,$limit,$from); 
    }
	
	function getSearchCountByParams($paramsArray=array(),$varStatement=""){
      $str = "SELECT COUNT(username) AS ROWCOUNT FROM user_login WHERE username IS NOT NULL ".$varStatement; 
      while(list($key,$val)=each($paramsArray)){
        $str .= " AND $key LIKE '%$val%' ";
      }
      $this->select($str); 
      if($this->firstRow()) 
        return $this->getField("ROWCOUNT"); 
      else 
         return 0; 
    }
	
	function getURLAplikasiPemeliharaan($nrp="")
	{
		$str = "select PMS_DIRECT_LOGIN(B.NRP) URL from public.user_login A JOIN pds_simpeg.PEGAWAI B ON A.pegawai_id = B.pegawai_id AND A.USER_LOGIN = '" . $nrp ."' AND STATUS = 1"; 
		
		$this->select($str); 
		if($this->firstRow()) 
			return $this->getField("URL"); 
		else 
			return ''; 
    }

    /************************** </ADDITIONAL METHODS> *******************************/
  } //end of class Users
?>