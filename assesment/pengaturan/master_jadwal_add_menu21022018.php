<?
/* *******************************************************************************************************
MODUL NAME 			: SIMKeu
FILE NAME 			: index.php
AUTHOR				: Ridwan Rismanto
VERSION				: 1.0
MODIFICATION DOC	:
DESCRIPTION			: halaman index
***************************************************************************************************** */
/* INCLUDE FILE */
include_once("../WEB/classes/utils/UserLogin.php");
include_once("../WEB/functions/string.func.php");
include_once("../WEB/functions/default.func.php");
include_once("../WEB/classes/base/JadwalTesSimulasiAsesor.php");

/* LOGIN CHECK */
if ($userLogin->checkUserLogin()) 
{ 
	$userLogin->retrieveUserInfo();  
}

$reqId = httpFilterRequest("reqId");
$reqMode = httpFilterRequest("reqMode");

$statement= " AND JADWAL_TES_ID = ".$reqId;
$set_validasi= new JadwalTesSimulasiAsesor();
$set_validasi->selectByParams(array(), -1,-1, $statement);
$set_validasi->firstRow();
$tempStatusValidasi= $set_validasi->getField("STATUS");
unset($set_validasi);
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
    <head>
    <title>Destroydrop &raquo; Javascripts &raquo; Tree</title>
    <link href="../WEB/css/themes/main.css" rel="stylesheet" type="text/css">
    <link rel="StyleSheet" href="../WEB/lib/dtree/dtree.css" type="text/css" />
    <link href="../WEB/css/tabs.css" rel="stylesheet" type="text/css" />
    <link href="button_satker.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="../jslib/jquery.js"></script>
    <script type="text/javascript" src="../WEB/lib/dtree/dtree.js"></script>
    
    <style type="text/css">
    /* Remove margins from the 'html' and 'body' tags, and ensure the page takes up full screen height */
    html, body {height:100%; margin:0; padding:0;}
    /* Set the position and dimensions of the background image. */
    #page-background {position:fixed; top:0; left:0; width:100%; height:100%;}
    /* Specify the position and layering for the content that needs to appear in front of the background image. Must have a higher z-index value than the background image. Also add some padding to compensate for removing the margin from the 'html' and 'body' tags. */
    #content {position:relative; z-index:1;}
    /* prepares the background image to full capacity of the viewing area */
    #bg {position:fixed; top:0; left:0; width:100%; height:100%;}
    /* places the content ontop of the background image */
    #content {position:relative; z-index:1;}
    </style>
    
    <script type="text/javascript" trdetilsrc="jquery-1.3.2.min.js"></script>
    <script type="text/javascript">
		function executeOnClick(varItem){
			$("a").removeClass("menuAktifDynamis");
			
			<? if($reqMode == 'search'){?>
				parent.document.getElementById('FrameFIP').style.display = '';	
				parent.document.getElementById('idMainFrame').style.display = 'none';	
			<? }?>
			
			if(varItem == 'jadwal'){
				parent.setShowHideMenu(2);
				$('#jadwal').addClass("menuAktifDynamis");
				parent.mainFrame.location.href='master_jadwal_add_data.php?reqId=<?=$reqId?>&reqMode=<?=$reqMode?>';
				parent.document.getElementById('trdetil').style.display = 'none';
			}
			else if(varItem == 'acara'){
				parent.setShowHideMenu(1);
				$('#acara').addClass("menuAktifDynamis");
				parent.mainFrame.location.href='master_jadwal_add_acara_monitoring.php?reqId=<?=$reqId?>&reqMode=<?=$reqMode?>';
				parent.mainFrameDetil.location.href='master_jadwal_add_acara.php?reqId=<?=$reqId?>&reqMode=<?=$reqMode?>';
				parent.document.getElementById('trdetil').style.display = '';
			}
			else if(varItem == 'kelompok_ruang'){
				parent.setShowHideMenu(1);
				$('#kelompok_ruang').addClass("menuAktifDynamis");
				parent.mainFrame.location.href='master_jadwal_add_kelompok_ruang_monitoring.php?reqId=<?=$reqId?>&reqMode=<?=$reqMode?>';
				parent.mainFrameDetil.location.href='master_jadwal_add_kelompok_ruang.php?reqId=<?=$reqId?>&reqMode=<?=$reqMode?>';
				parent.document.getElementById('trdetil').style.display = '';
			}
			else if(varItem == 'asesor'){
				parent.setShowHideMenu(1);
				$('#asesor').addClass("menuAktifDynamis");
				parent.mainFrame.location.href='master_jadwal_add_asesor_monitoring.php?reqId=<?=$reqId?>&reqMode=<?=$reqMode?>';
				parent.mainFrameDetil.location.href='master_jadwal_add_asesor.php?reqId=<?=$reqId?>&reqMode=<?=$reqMode?>';
				parent.document.getElementById('trdetil').style.display = '';
			}
			else if(varItem == 'pegawai'){
				parent.setShowHideMenu(1);
				$('#pegawai').addClass("menuAktifDynamis");
				parent.mainFrame.location.href='master_jadwal_add_pegawai_monitoring.php?reqId=<?=$reqId?>&reqMode=<?=$reqMode?>';
				parent.mainFrameDetil.location.href='master_jadwal_add_pegawai.php?reqId=<?=$reqId?>&reqMode=<?=$reqMode?>';
				parent.document.getElementById('trdetil').style.display = '';
			}
			
			else if(varItem == 'simulasi_pegawai'){
				parent.setShowHideMenu(2);
				$('#simulasi_pegawai').addClass("menuAktifDynamis");
				parent.mainFrame.location.href='master_jadwal_add_simulasi_pegawai.php?reqId=<?=$reqId?>&reqMode=<?=$reqMode?>';
				parent.document.getElementById('trdetil').style.display = 'none';
			}
			else if(varItem == 'simulasi_asesor_acara'){
				parent.setShowHideMenu(1);
				$('#simulasi_asesor_acara').addClass("menuAktifDynamis");
				parent.mainFrame.location.href='master_jadwal_add_simulasi_asesor_monitoring.php?reqId=<?=$reqId?>&reqJenisId=1&reqMode=<?=$reqMode?>';
				parent.mainFrameDetil.location.href='master_jadwal_add_simulasi_asesor.php?reqId=<?=$reqId?>&reqJenisId=1&reqMode=<?=$reqMode?>';
				parent.document.getElementById('trdetil').style.display = '';
			}
			else if(varItem == 'master_jadwal_add_jadwal_acara_potensi'){
				parent.setShowHideMenu(1);
				$('#master_jadwal_add_jadwal_acara_potensi').addClass("menuAktifDynamis");
				parent.mainFrame.location.href='master_jadwal_add_jadwal_acara_potensi_monitoring.php?reqId=<?=$reqId?>&reqJenisId=2&reqMode=<?=$reqMode?>';
				parent.mainFrameDetil.location.href='master_jadwal_add_jadwal_acara_potensi.php?reqId=<?=$reqId?>&reqJenisId=2&reqMode=<?=$reqMode?>';
				parent.document.getElementById('trdetil').style.display = '';
			}
			else if(varItem == 'simulasi_asesor_tools'){
				parent.setShowHideMenu(1);
				$('#simulasi_asesor_tools').addClass("menuAktifDynamis");
				parent.mainFrame.location.href='master_jadwal_add_simulasi_asesor_monitoring.php?reqId=<?=$reqId?>&reqJenisId=2&reqMode=<?=$reqMode?>';
				parent.mainFrameDetil.location.href='master_jadwal_add_simulasi_asesor.php?reqId=<?=$reqId?>&reqJenisId=2&reqMode=<?=$reqMode?>';
				parent.document.getElementById('trdetil').style.display = '';
			}
			else if(varItem == 'simulasi_hasil'){
				parent.setShowHideMenu(2);
				$('#simulasi_hasil').addClass("menuAktifDynamis");
				parent.mainFrame.location.href='master_jadwal_add_simulasi_hasil.php?reqId=<?=$reqId?>&reqMode=<?=$reqMode?>';
				parent.document.getElementById('trdetil').style.display = 'none';
			}
			
			else if(varItem == 'jadwal_asesor_potensi'){
				parent.setShowHideMenu(1);
				$('#jadwal_asesor_potensi').addClass("menuAktifDynamis");
				parent.mainFrame.location.href='master_jadwal_add_asesor_potensi_monitoring.php?reqId=<?=$reqId?>&reqMode=<?=$reqMode?>';
				parent.mainFrameDetil.location.href='master_jadwal_add_asesor_potensi.php?reqId=<?=$reqId?>&reqMode=<?=$reqMode?>';
				parent.document.getElementById('trdetil').style.display = '';
			}
			else if(varItem == 'jadwal_asesor_potensi_pegawai'){
				parent.setShowHideMenu(1);
				$('#jadwal_asesor_potensi_pegawai').addClass("menuAktifDynamis");
				parent.mainFrame.location.href='master_jadwal_add_asesor_potensi_pegawai_monitoring.php?reqId=<?=$reqId?>&reqMode=<?=$reqMode?>';
				parent.mainFrameDetil.location.href='master_jadwal_add_asesor_potensi_pegawai.php?reqId=<?=$reqId?>&reqMode=<?=$reqMode?>';
				parent.document.getElementById('trdetil').style.display = '';
			}
			return true;
		}
		
		function hidenJadwalMenu()
		{
			//$('#simulasi_pegawai, #simulasi_asesor_tools, #simulasi_asesor_acara, #master_jadwal_add_jadwal_acara_potensi').hide();
			$('#simulasi_asesor_tools, #simulasi_asesor_acara, #master_jadwal_add_jadwal_acara_potensi').hide();
		}
		
		function showJadwalMenu()
		{
			$('#acara, #kelompok_ruang, #asesor, #pegawai,#jadwal_asesor_potensi,#jadwal_asesor_potensi_pegawai').hide();
		}
    </script> 
    <script type="text/javascript">
        $(document).ready(function(){
			<?
			//if($tempStatusValidasi == "1")
			//{
			?>
			hidenJadwalMenu();
			<?
			//}
			//else
			//{
			?>
			//showJadwalMenu();
			<?
			//}
			?>
			//hidenJadwalMenu();
            $('#page_effect').fadeIn(2000);
            $('#tambmasakerja, #nikah, #bahasa, #riwayatpenugasan, #cuti, #hukuman, #catatanprestasi, #potensidiri, #dp3 ,#penghargaan, #organisasi, #saudara, #anak, #suamiistri, #mertua').click(
                    function (e) {
                        $('html, body').animate({scrollTop: '1000px'}, 800);
                    }
                ); 
        }); 
    </script>
    
    <!-- SDMENU -->
    <link rel="stylesheet" type="text/css" href="../WEB/lib/sdmenu/sdmenu.css" />
    <script type="text/javascript" src="../WEB/lib/sdmenu/sdmenu.js">
        /***********************************************
        * Slashdot Menu script- By DimX
        * Submitted to Dynamic Drive DHTML code library: http://www.dynamicdrive.com
        * Visit Dynamic Drive at http://www.dynamicdrive.com/ for full source code
        ***********************************************/
    </script>
    <script type="text/javascript">
    // <![CDATA[
        var myMenu;
        window.onload = function() {
            myMenu = new SDMenu("my_menu");
            myMenu.init();
        };
    // ]]>
    </script>
    </head>
    <body>
        <div id="page_effect" style="display:none;">
            <div id="bg"><img src="../WEB/images/wall-kiri.jpg" width="100%" height="100%" alt=""></div>
            <div id="content">
            
                <!-- SDMENU -->
                <div style="float: left" id="my_menu" class="sdmenu">
                  <div> 
                    <span>Jadwal</span>
                    <a href="#" id="jadwal" onclick="executeOnClick('jadwal');" <? if($reqMode == "fip") {} else { ?> class="menuAktifDynamis"  <? } ?>>Data</a>
                    <a href="#" id="simulasi_pegawai" onclick="executeOnClick('simulasi_pegawai');">Simulasi Pegawai</a>
                    <a href="#" id="master_jadwal_add_jadwal_acara_potensi" onclick="executeOnClick('master_jadwal_add_jadwal_acara_potensi');">Jadwal Potensi</a>
                    <a href="#" id="simulasi_asesor_tools" onclick="executeOnClick('simulasi_asesor_tools');">Simulasi Jadwal Tools</a>
                    <a href="#" id="simulasi_asesor_acara" onclick="executeOnClick('simulasi_asesor_acara');">Simulasi Jadwal Acara</a>
                    <?php /*?><a href="#" id="simulasi_hasil" onclick="executeOnClick('simulasi_hasil');">Simulasi Hasil</a><?php */?>
                    <a href="#" id="acara" onclick="executeOnClick('acara');">Jadwal Acara</a>
                    <a href="#" id="kelompok_ruang" onclick="executeOnClick('kelompok_ruang');">Jadwal Kelompok & Ruang</a>
                    <a href="#" id="asesor" onclick="executeOnClick('asesor');">Jadwal Asesor</a>
                    <a href="#" id="pegawai" onclick="executeOnClick('pegawai');">Jadwal Pegawai</a>
                    
                    <a href="#" id="jadwal_asesor_potensi" onclick="executeOnClick('jadwal_asesor_potensi');">Jadwal Asesor Potensi</a>
                    <a href="#" id="jadwal_asesor_potensi_pegawai" onclick="executeOnClick('jadwal_asesor_potensi_pegawai');">Jadwal Pegawai Potensi</a>
                  </div>
                <!-- END SDMENU -->
                    
            </div>
        </div>
    </body>
</html>