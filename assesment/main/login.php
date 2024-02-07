<?
include_once("../WEB/page_config.php");
include_once("../WEB/functions/default.func.php");
include_once("../WEB/classes/utils/UserLogin.php");

include_once("../WEB/functions/crfs_protect.php");

$csrf = new crfs_protect('_crfs_login');

/* PARAMETERS */
$pg = httpFilterRequest("pg");
$menu = httpFilterRequest("menu");
$reqMode = httpFilterRequest("reqMode");
$reqUser = httpFilterPost("reqUser");
$reqPasswd = httpFilterPost("reqPasswd");
$reqSecurity= httpFilterPost("reqSecurity");

/* ACTIONS BY reqMode */
if($reqMode == "submitLogin" && $reqUser != "" && $reqPasswd != "") 
{
	if(md5($reqSecurity) == $_SESSION['security_code'])
	{
		if (!$csrf->isTokenValid($_POST['_crfs_login']))
		{
			echo '<script language="javascript">';
			echo 'alert("Username atau password anda masih salah.");';
			echo 'top.location.href = "login.php";';
			echo '</script>';		
			exit;
		}
		
		$userLogin->resetLogin();
		if ($userLogin->verifyUserLogin($reqUser, $reqPasswd)) 
		{	
			// if($userLogin->userPegawaiId=="")
			// {	
			// 	header("location:index.php");
			// }
			// else
			// {
			// 	header("location:../asesor/index.php");
			// }
			// exit;
			header("location:index.php");
		}
		else
		{
			echo '<script language="javascript">';
			echo 'alert("Username atau password anda masih salah.");';
			echo 'top.location.href = "login.php";';
			echo '</script>';		
			exit;
		}
	}
	else
	{
		echo '<script language="javascript">';
		echo 'alert("Captcha yang anda ketik masih salah.");';
		echo 'top.location.href = "login.php";';
		echo '</script>';		
		exit;
	}
}
else if ($reqMode == "submitLogout")
{
	$userLogin->resetLogin();
	$userLogin->emptyUsrSessions();
}
?>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>Aplikasi Assessment Center - Pemerintah Provinsi Kalimantan Timur</title>

	<!-- BOOTSTRAP -->
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<link href="../WEB/lib/bootstrap/bootstrap.css" rel="stylesheet">
	<link rel="stylesheet" href="../WEB/css/gaya-main.css" type="text/css">
	<link rel="stylesheet" href="../WEB/lib/Font-Awesome-4.5.0/css/font-awesome.css">

	<style>
		.col-md-12{
			*padding-left:0px;
			*padding-right:0px;
		}
	    
	/*    FLUSH FOOTER*/
		html, body {
			height: 100%;
		}
		
		#wrap-utama {
			min-height: 100%;
			*min-height: calc(100% - 10px);
		}
		
		#main {
			overflow:auto;
			padding-bottom:50px; /* this needs to be bigger than footer height*/
		}
		
		.footer {
			position: relative;
			margin-top: -50px; /* negative value of footer height */
			height: 50px;
			clear:both;
			padding-top:20px;
			*background:cyan;
			
			text-align:center;
		} 
		.input-container {
		  display: -ms-flexbox; /* IE10 */
		  display: flex;
		  width: 100%;
		  margin-bottom: 15px;
		  background-color: white;
		  border-radius: 20px;
		}

		.icon {
		  padding: 10px;
/*		  background: dodgerblue;*/
		  color: white;
		  min-width: 50px;
		  text-align: center;
		}

		.input-field {
		  width: 100%;
		  padding: 10px;
		  outline: none;
		  margin-top: 5px;
		}

	</style>
	    
	<script src="../WEB/lib/emodal/eModal.js"></script>
	<script type='text/javascript' src="../WEB/lib/js/jquery.js"></script> 
	
	<script>
		function openPopup() {
			eModal.ajax('konten.html', 'Judul Popup')
		}
	
		function reloadcaptchadinamis(value, json)
		{
			$('#'+value).attr('src', json+'?random=' + (new Date).getTime()+'width=100&amp;height=40&amp;characters=5');
		}
	</script>

</head>

<body style="background-color:#fffcf3">
	<div class="col-md-4" style="height: 100vh;"> 
		<img src="../WEB/images/kiri-login.png" style="height: 100vh;">
	</div>
	<div class="col-md-8" style="height: 100vh;">
		<div class="area-login" style="margin: 10% 30%;">
            <form role="form" method="post" action="">
                <fieldset> 
                	<h4 style="text-align: left;"><b>Halaman Login</b></h4>
                	<p style="text-align: left;">Selamat datang,<br>
                	silahkan login menggunakan akun anda.</p>
                	<div class="input-container">
                    	<img src="../WEB/images/user-login.png" class=" icon" style="width:10%">
					    <input class="input-field" type="text" name="reqUser" id="reqUser" placeholder="NIP">
					</div>      			
					<div class="input-container">
                    	<img src="../WEB/images/pass-login.png" class=" icon" style="width:10%">
					    <input class="input-field" type="password" name="reqPasswd" id="reqPasswd" placeholder="Password">
                    	<i class="fa fa-eye-slash" id="eye" aria-hidden="true" class=" icon" style="margin-top: 5%;font-size: 20px;margin-right: 3%;cursor: pointer;" onclick="showPass()"></i>
					</div> 
                    <div class="form-group">
                    	<img src="../WEB/functions/CaptchaSecurityImages.php?width=150&amp;height=50&amp;characters=5" id="captchaImage" />&nbsp;&nbsp;&nbsp;<img src="../WEB/functions/refresh.png" 
                    	onclick="reloadcaptchadinamis('captchaImage', '../WEB/functions/CaptchaSecurityImages.php')" style="cursor:pointer" title="refresh captcha">
                    </div>
                    <div class="input-container">
                    	<img src="../WEB/images/captca-login.png" class=" icon" style="width:10%">
					    <input class="input-field"  type="text"  name="reqSecurity" id="reqSecurityDaftar" placeholder="Ketik Captcha">
					</div>
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12">
                            <input name="slogin_POST_send" type="submit" class="btn btn-lg btn-success btn-block" value="Login" alt="DO LOGIN!" style="background-color:#0b7f7d">
                            <input type="hidden" name="reqMode" value="submitLogin">
                        </div>
                    </div>
                </fieldset>

                <?=$csrf->echoInputField();?>
            </form>
        </div>
	</div>
</body>


<script type='text/javascript' src="../WEB/lib/bootstrap/bootstrap.js"></script> 
<script type='text/javascript' src="../WEB/lib/bootstrap/angular.js"></script> 
</body>
</html>
<script type="text/javascript">
	function showPass(){  
	    if($('#reqPasswd').attr("type") == "text"){
	        document.getElementsByName("reqPasswd")[0].setAttribute('type','password')
	        $("#eye").attr('class', 'fa fa-eye-slash')
	    }else if($('#reqPasswd').attr("type") == "password"){
	        document.getElementsByName("reqPasswd")[0].setAttribute('type','text')
	        $("#eye").attr('class', 'fa fa-eye')
	    }
	}
</script>