<?
/* *******************************************************************************************************
MODUL NAME 			: SIMWEB
FILE NAME 			: TamuLogin.php
AUTHOR				: MRF
VERSION				: 1.0
MODIFICATION DOC	:
DESCRIPTION			: Class that responsible to handle process authentication for users on Admin group
***************************************************************************************************** */

/***********************************************************************
class.userlogin.php	
Mengelola informasi tentang user login. Untuk menggunakan kelas ini tidak
perlu di-instansiasi dulu, sudah otomatis.
Priyo Edi Purnomo dimodifikasi M Reza Faisal
************************************************************************/

include_once("../WEB/classes/utils/GlobalParam.php");
include_once("../WEB/classes/entities/Users.php");
include_once("../WEB/classes/entities/GroupAccess.php");

  class UserLogin{
    /* Properties */
    //-- PERSISTENT IN SESSION
	var $UID;
    var $idUser;
	var $loginTime;
	var $loginTimeStr;
	var $userLevel;
	var $userStatus;
	var $siswaId;
	var $siswaPenilaianId;
	var $kelas;
	
	var $pageLevel;
	var $bannedPageLevel;
	
	var $pageId;
		
    //-- NOT PERSISTENT
	var $admin;
	var $active;
    var $nama;
	var $password;
    var $email;
    var $website;
	
	//-- BUGTRACK
	var $query;

    /******************** CONSTRUCTOR **************************************/
    function UserLogin(){
		session_register("ssUsr_UID");
		session_register("ssUsr_idUser");
		session_register("ssUsr_nama");
		session_register("ssUsr_siswaId");		
		session_register("ssUsr_loginTime");
		session_register("ssUsr_loginTimeStr");			
		session_register("ssUsr_siswaPenilaianId");
		session_register("ssUsr_kelas");		
					
	
		 $this->emptyProps();
		 $this->setProps();
    }

    /******************** METHODS ************************************/
    /** Empty the properties **/
    function emptyProps(){
		$this->UID = "";
		$this->idUser = "";
		$this->nama = "";		
		$this->loginTime = "";
		$this->loginTimeStr = "";
		$this->userLevel = "";
		$this->userStatus = "";
		$this->siswaId = "";
		$this->siswaPenilaianId = "";
		$this->kelas = "";
		$this->pageLevel = false;
			
		$this->active = false;
    }

    /** empty sessions **/
    function emptyUsrSessions(){
		$_SESSION["ssUsr_UID"] = "";
		$_SESSION["ssUsr_idUser"] = "";
		$_SESSION["ssUsr_nama"] = "";		
		$_SESSION["ssUsr_loginTime"] = "";
		$_SESSION["ssUsr_loginTimeStr"] = "";
		$_SESSION["ssUsr_level"] = "";
		$_SESSION["ssUsr_status"] = "";
		$_SESSION["ssUsr_siswaId"] = "";	
		$_SESSION["ssUsr_siswaPenilaianId"] = "";								
		$_SESSION["ssUsr_kelas"] = "";								
    }

	/** reset user information **/
	function resetUserInfo(){
		$this->emptyUsrSessions();
		$this->emptyProps();
	}
		
    /** set properties depends on data from sessions**/
    function setProps(){
		$this->UID = $_SESSION["ssUsr_UID"];
		$this->idUser = $_SESSION["ssUsr_idUser"];
		$this->nama = $_SESSION["ssUsr_nama"];		
		$this->loginTime = $_SESSION["ssUsr_loginTime"];
		$this->loginTimeStr = $_SESSION["ssUsr_loginTimeStr"];
		$this->userLevel = $_SESSION["ssUsr_level"];
		$this->userStatus = $_SESSION["ssUsr_status"];	
		$this->siswaId = $_SESSION["ssUsr_siswaId"];
		$this->siswaPenilaianId = $_SESSION["ssUsr_siswaPenilaianId"];	
		$this->kelas = $_SESSION["ssUsr_kelas"];			
				
		if($this->idUser)
			//$this->active = true;
			$this->active = true; //$this->idUser;
    }
    
    /** Verify user login. True when login is valid**/
    function verifyUserLogin($usrLogin,$password){			
		$usr = new Users();

		$this->resetUserInfo();
		if(trim($usrLogin)=="" || trim($password)==""){				
			//echo 'gagal 1<br>';
			return false;        
		}	
		if(!$usr->selectByIdPassword($usrLogin,md5($password.'BAKWAN'))){
			//echo 'gagal 2<br>';
			return false;
		}
			
		if($usr->firstRow()){
			//echo $usr->field("USER_ID").'<br>';
			$_SESSION["ssUsr_UID"] = $usr->getField("UID");
			$_SESSION["ssUsr_idUser"] = $usr->getField("USER_NAME");
			$_SESSION["ssUsr_nama"] = $usr->getField("NAMA");
			$_SESSION["ssUsr_loginTime"] = time();
			$_SESSION["ssUsr_loginTimeStr"] = date("l, j M Y, H:i",time());
			$_SESSION["ssUsr_level"] = $usr->getField("LEVEL");
			$_SESSION["ssUsr_status"] = $usr->getField("STATUS_USER");			
			$_SESSION["ssUsr_siswaId"] = $usr->getField("siswa_id");
			$_SESSION["ssUsr_siswaPenilaianId"] = $usr->getField("siswa_penilaian_id"); 
			$_SESSION["ssUsr_kelas"] = $usr->getField("kelas"); 			
									
			$this->setProps();
		}else{
			//echo 'gagal 3<br>';
			//echo "tidak ada user";
			return false; //login/password salah								
  	  }
      unset($usr);
      return true;
    }
		
	//login user without password
	function verifyUserLoginNoPassword($usrLogin){			
      	$usr = new Users();
			
		$this->resetUserInfo();
      	if(trim($usrLogin)==""){				
			return false;        
		}
				
      	if(!$usr->findById($usrLogin)){
        	return false; //login/password salah
      }
			
			//echo $success.NL;		
      if($usr->firstRow()){
				if($usr->field("aktif")){
					$_SESSION["ssUsr_UID"] = $usr->getField("UID");
					$_SESSION["ssUsr_idUser"] = $usr->getField("USER_NAME");
					$_SESSION["ssUsr_nama"] = $usr->getField("NAMA");
					$_SESSION["ssUsr_siswaId"] = $usr->getField("siswa_id");
					$_SESSION["ssUsr_siswaPenilaianId"] = $usr->getField("siswa_penilaian_id"); 					
					$_SESSION["ssUsr_loginTime"] = time();
					$_SESSION["ssUsr_loginTimeStr"] = date("l, j M Y, H:i",time());
					$_SESSION["ssUsr_kelas"] = $usr->getField("kelas"); 										
					
					
					//$this->setProps();
				} else
					return false;//user tidak aktif
      }else
				return false; //login/password salah
				
      unset($usr);
      return true;
    }
    
	// added by esa unutk ubah password supaya jika pengisian password salah tidak dilakukan verify user login
	function verifyPassLama($usrLogin,$password){			
      $usr = new Users();
			
	  if(!$usr->selectByIdPassword($usrLogin,$password)){
        return false;
		exit();
      }
					
      if($usr->firstRow()){
        $this->active=true;
		return true;
	  }else {
		return false;
	  }
				
      unset($usr);
      return true;
    }

    /** Reset login information **/
    function resetLogin(){
      $this->emptyUsrSessions();
      $this->emptyProps();
    }

    /** Cek apakah user sudah login atau belum **/
    function checkUserLogin(){
		$usr = new Users();
		
		$statusLogin = false;
		if (trim($_SESSION["ssUsr_idUser"])) {
			$statusLogin = false;
		}
		$usr->selectById($_SESSION["ssUsr_idUser"]);
		if (!$usr->firstRow()) {
			$statusLogin = false;
		} else {
			$statusLogin = true;
		}
		
		if (!$statusLogin) {
			echo '<script language="javascript">';
			echo 'alert("Anda tidak punya hak mengakses halaman ini.\n Silakan login terlebih dahulu.");';
			echo 'top.location.href = "login.php";';
			echo '</script>';
			
			exit;
		}
		/*
			return true;
      if(!$this->active){
        unset($dbMgr);
        unset($this);
        showMessageDlg("Untuk mengakses halaman ini anda harus login dulu!",false,"../","parent.");
      }
	  */
	  
	  	return $statusLogin;
    }

    /** Cek apakah user memiliki kode akses yang dimaksud **/
    function checkAccessCode($accessCode=""){

      $found=0;

      if($accessCode=="")
        return true;
      else{//ada kode aksesnya
        $usr = new User();
        $usr->load($this->usrID);
        $groupFac=new GrpPrivilege();
        $groupFac->findByIdGroup($usr->idGroup);
        if ($groupFac->firstRow()){
          do{
            if ($groupFac->accessCode==$accessCode)
              $found=1;
          }while($groupFac->goNext() && !$found);
        }
        unset($groupFac);
        unset($usr);
        unset($this);
        if (!$found)
          showMessageDlg("Anda tidak memiliki hak untuk mengakses fasilitas ini.",false,"../main/mainpage.php");
        else
          return true;

      }

    }

	/** Mengambil informasi user yang sedang logged in **/
	function retrieveUserInfo(){
		$usr = new Users();
		$usr->selectById($_SESSION["ssUsr_idUser"]);
		if ($usr->firstRow()) {
			$this->UID = $_SESSION["ssUsr_UID"];
			$this->idUser = $_SESSION["ssUsr_idUser"];
			$this->nama = $usr->getField("NAMA");
			$this->siswaId = $_SESSION["ssUsr_siswaId"];			
			$this->password = $usr->getField("PASSWORD");
			$this->siswaPenilaianId = $_SESSION["ssUsr_siswaPenilaianId"];
			$this->kelas = $_SESSION["ssUsr_kelas"];


		}
		
		$this->query = $usr->query;
		
		unset($usr);
	}
  	
	/* Mengambil informasi tanggal login */  
	function getLoginDateStr(){
		return date("l, j M Y",$this->loginTime);		
	}
		
	/* Mengambil informasi tanggal login */  
	function getLoginTimeStr(){
		return date("H:i",$this->loginTime);		
	}
	
	/* mengeset level akses halaman 
	   isi $varLevel dengan array untuk multilevel
	   # $varBannedLevel : level yang ditolak
	*/
	function setPageLevel($varLevel, $varBannedLevel = "")
	{
		$this->pageLevel = $varLevel;
		$this->bannedPageLevel = $varBannedLevel;
	}
	
	/* mengeset ID halaman yang akan dibandingkan dengan tabel group_access
	   apakah halaman yg bersangkutan boleh diakses oleh level user yg sedang login
	*/
	function setPageId($varId)
	{
		$this->pageId = $varId;
	}
	
	/* Mengecek level akses halaman berdasarkan $pageLevel dan $userLevel. 
	   Jika privilege tepat maka return true.
	   Jika $pageLevel tidak diset maka akan selalu return true 
	   # untuk admin : $this->userLevel = 1
	   # untuk guest : $this->userLevel = 9999
	   # halaman yang boleh diakses user asal sudah login, maka : set $this->pageLevel = 9999 
	 */
	function checkPagePrivileges($autoExit = true)
	{
		$ret = false;
		
		if($this->pageLevel == false)
			$ret = true;
		
		// if admin, bypass checking
		// check whether $pageLevel is array or not
		// jika pageLevel = 9999 (public) then bypass checking
		if(is_array($this->pageLevel))
		{
			foreach($this->pageLevel as $key => $value)
			{
				if($value == $this->userLevel || $this->userLevel == '1'|| $this->userLevel == '2' || $this->pageLevel == '9999')
				{
					$ret = true;
					break;
				}
				else
					$ret = false;
			}
		}
		else
		{
			if($this->pageLevel == $this->userLevel || $this->userLevel == '1'|| $this->userLevel == '2' || $this->pageLevel == '9999')
				$ret = true;
			else
				$ret = false;
		}
		
		// check for any banned level
		if(is_array($this->bannedPageLevel))
		{
			foreach($this->bannedPageLevel as $key => $value)
			{
				if($value == $this->userLevel)
				{
					$ret = false;
					break;
				}
			}
		}
		else
		{
			if($this->bannedPageLevel == $this->userLevel)
			{
				$ret = false;
				break;
			}
		}
		
		// cek page access
		if($this->checkPageAccess() == false)
			$ret = false;
		
		
		if($autoExit == true)
		{
			if($ret == false) exit;
		}
		else
			return $ret;
	}
	
	/* helper method untuk mengecek apakah halaman yang bersangkutan 
	   boleh dibuka oleh usergroup yg sedang login 
	*/
	function checkPageAccess()
	{
		$gp = new GlobalParam();
		
		$group_access = new GroupAccess();
		
		$group_access->selectByParams(array('UGID' => $this->userLevel, 'id_menu' => $this->pageId));
		
		// bypass if admin
		if($this->userLevel == $gp->usergroupAdmin)
			return true;
		
		if($group_access->firstRow())
			return true;
		else
			return false;
	}
}
	
  /***** INSTANTIATE THE GLOBAL OBJECT */
  $userLogin = new UserLogin();

?>