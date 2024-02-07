<?
include_once("../WEB/classes/utils/UserLogin.php");
include_once("../WEB/functions/date.func.php");
include_once("../WEB/functions/string.func.php");
include_once("../WEB/functions/default.func.php");
include_once("../WEB/classes/base/CetakanPdf.php");
include_once("../WEB/classes/base/JadwalPegawai.php");
include_once("../WEB/classes/base/JadwalPegawaiDetil.php");
include_once("../WEB/classes/base-ikk/PenilaianRekomendasi.php");

$xmlfile = "../WEB/web.xml";
$data = simplexml_load_file($xmlfile);
$urlLink= $data->urlConfig->main->urlLink;

$reqId= httpFilterGet("reqId");
$reqTahun= httpFilterGet("reqTahun");
$reqJadwalTesId= httpFilterGet("reqJadwalTesId");

$statement= " AND A.PEGAWAI_ID = ".$reqId;
$statement.= " AND EXISTS (SELECT 1 FROM jadwal_tes_simulasi_pegawai X WHERE 1=1 AND X.JADWAL_TES_ID = ".$reqJadwalTesId." AND X.PEGAWAI_ID = A.PEGAWAI_ID)";

$set= new JadwalPegawai();
$set->selectByParamsLookupJadwalPegawai(array(), -1, -1, $statement, $reqJadwalTesId);
$set->firstRow();
// echo $set->query;exit;
$tempPesertaNomorUrut= $set->getField("NOMOR_URUT_GENERATE");
$tempBulanAngka = getMonth($set->getField("TANGGAL_TES"));
$tempTahun = getYear($set->getField("TANGGAL_TES"));
// echo $tempPesertaNomorUrut; exit;
$tempBulanRomawi = getRomawiMonth((int)$tempBulanAngka); 


$statement= " AND A.JADWAL_TES_ID = ".$reqJadwalTesId;
$set= new CetakanPdf();
$set->selectByParamsJadwalFormula($statement);
$set->firstRow();
$reqFormulaId= $set->getField("FORMULA_ID");
// echo $reqFormulaId;exit();

$set= new CetakanPdf();
$statement= " AND A.PEGAWAI_ID= ".$reqId." AND TO_CHAR(A.TANGGAL_TES, 'YYYY') = '".$reqTahun."' AND A.JADWAL_TES_ID = ".$reqJadwalTesId."";
$set->selectByParamsPenilaian(array(), -1, -1, $statement);
$set->firstRow();
//echo $set->query;exit;
$tempTanggalTes= getFormattedDate($set->getField("TANGGAL_TES"));
$tempSatkerTes= $set->getField("SATKER_TES");
$tempTempatTes= $set->getField("TEMPAT");
$tempSatkerTesId= $set->getField("SATKER_TES_ID");
$tempJabatanTes= $set->getField("JABATAN_TES");
$tempJabatanTesId= $set->getField("JABATAN_TES_ID");
$tempAspekNama= strtoupper($set->getField("ASPEK_NAMA"));
$tempAspekId= strtoupper($set->getField("ASPEK_ID"));
$tempTanggalTes2= dateToPageCheck($set->getField("TANGGAL_TES"));
$tempTipeTes= $set->getField("TIPE");
$tempTipeFormula= $set->getField("FORMULA");

$statement= " AND A.PEGAWAI_ID= ".$reqId;
$set= new CetakanPdf();
$set->selectByParamsPegawai(array(), -1,-1, $statement);
$set->firstRow();
//echo $set->query;exit;
$tempPegawaiNama= $set->getField("NAMA");
$tempPegawaiNip= $set->getField("NIP_BARU");
$tempPegawaiTanggalLahir= dateToPageCheck($set->getField("TGL_LAHIR"),"/");
$tempPegawaiJabatanSaatIni= $set->getField("NAMA_JAB_STRUKTURAL");
$tempPegawaiGol= $set->getField("NAMA_GOL");
$tempPegawaiGolPangkat= $set->getField("NAMA_PANGKAT");
$tempUnitKerjaSaatIni= $set->getField("SATKER");
unset($set);

$sOrder= "ORDER BY A.ATRIBUT_ID ASC";
if($reqFormulaId == "8")
{
	$sOrder= "ORDER BY CASE WHEN A.ATRIBUT_ID = '0407' THEN '0401'
	WHEN A.ATRIBUT_ID = '0401' THEN '0402'
	WHEN A.ATRIBUT_ID = '0410' THEN '0403'
	WHEN A.ATRIBUT_ID = '0406' THEN '0404'
	WHEN A.ATRIBUT_ID = '0402' THEN '0405'
	WHEN A.ATRIBUT_ID = '0606' THEN '0601'
	WHEN A.ATRIBUT_ID = '0607' THEN '0602'
	WHEN A.ATRIBUT_ID = '0608' THEN '0603'
	WHEN A.ATRIBUT_ID = '0610' THEN '0604'
	WHEN A.ATRIBUT_ID = '0609' THEN '0605'
	ELSE A.ATRIBUT_ID
	END ASC";
}

$statement= " AND A.PEGAWAI_ID = ".$reqId." AND A.JADWAL_TES_ID = ".$reqJadwalTesId." and aspek_id =1";

$index_loop= 0;
$arrAtribut="";
$sOrder='ORDER BY ur.urut ASC, atribut_id ASC';
$set= new JadwalPegawaiDetil();
// $set->selectByParamsPenilaianAsesor(array(), -1,-1, $statement, $statementgroup, $sOrder);
// $set->selectByParamsPenilaianAsesor($statement);
$set->selectByParamsPenilaianAsesor($statement,$sOrder);
 // echo $set->query;exit;
while($set->nextRow())
{
	$arrAtribut[$index_loop]["ATRIBUT_ID"]= $set->getField("ATRIBUT_ID");
	$arrAtribut[$index_loop]["ATRIBUT_ID_PARENT"]= $set->getField("ATRIBUT_ID_PARENT");
	$arrAtribut[$index_loop]["ASPEK_ID"]= $set->getField("ASPEK_ID");
	$arrAtribut[$index_loop]["ASPEK_NAMA"]= $set->getField("ASPEK_NAMA");
	$arrAtribut[$index_loop]["ATRIBUT_NAMA"]= $set->getField("NAMA");
	$arrAtribut[$index_loop]["NILAI_STANDAR"]= $set->getField("NILAI_STANDAR");
	$arrAtribut[$index_loop]["NILAI"]= $set->getField("NILAI");
	$arrAtribut[$index_loop]["KESIMPULAN"]= $set->getField("KESIMPULAN");
	$arrAtribut[$index_loop]["CATATAN"]= $set->getField("CATATAN");
	$index_loop++;
}
$jumlah_atribut= $index_loop;

$statementgroup= "";
$statement= "  AND TO_CHAR(P.TANGGAL_TES, 'YYYY') = '".$reqTahun."' AND P.PEGAWAI_ID = ".$reqId;
$index_loop= 0;
$arrPenilaianAtribut="";
$set= new CetakanPdf();
$set->selectByParamsAtributPegawaiPotensiPenilaian(array(), -1,-1, $statement, $statementgroup);
// echo $set->query;exit;
while($set->nextRow())
{
	$arrPenilaianAtribut[$index_loop]["ATRIBUT_ID"]= $set->getField("ATRIBUT_ID");
	$arrPenilaianAtribut[$index_loop]["ATRIBUT_ID_PARENT"]= $set->getField("ATRIBUT_ID_PARENT");
	$arrPenilaianAtribut[$index_loop]["ASPEK_ID"]= $set->getField("ASPEK_ID");
	$arrPenilaianAtribut[$index_loop]["ATRIBUT_BOBOT"]= $set->getField("ATRIBUT_BOBOT");
	$arrPenilaianAtribut[$index_loop]["ATRIBUT_NAMA"]= $set->getField("ATRIBUT_NAMA");
	$arrPenilaianAtribut[$index_loop]["STANDAR_RATING"]= $set->getField("STANDAR_RATING");
	$arrPenilaianAtribut[$index_loop]["STANDAR_SKOR"]= $set->getField("STANDAR_SKOR");
	$arrPenilaianAtribut[$index_loop]["INDIVIDU_RATING"]= round($set->getField("INDIVIDU_RATING"),2);
	$arrPenilaianAtribut[$index_loop]["INDIVIDU_SKOR"]= round($set->getField("INDIVIDU_SKOR"),2);
	$arrPenilaianAtribut[$index_loop]["GAP"]= round($set->getField("GAP"),2);
	$index_loop++;
}
$jumlah_penilaian_atribut= $index_loop;

function setnumberdua($val)
{
	return number_format(round($val,2), 2, '.', '');
}

?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="../WEB/css/cetaknew.css" type="text/css">
</head>
<body>
	<div class="container">
		<table width="100%">
			<tr>
				<td rowspan="5" style=""><center><img src="../WEB/images/logo-nobg.png" style="width: 80px;"></center>  </td>
				
			</tr>
			<tr>
				<td style="height: 20px;"></td>
				<td style=""></td>
			</tr>
			<tr>
				<td style=""></td>
				<td style=""><b>UPTD PENILAIAN KOMPETENSI PEGAWAI</b></td>
			</tr>
			<tr>
				<td style=""></td>
				<td style=""><b>BADAN KEPEGAWAIAN DAERAH PROV. KALIMANTAN TIMUR</b></td>
			</tr>
			<tr>
				<td style="height: 20px;"></td>
				<td style=""></td>
			</tr>

		</table>
		<div style="text-align: center; width: 170px;margin-left: 400px">
			<p style="padding: 5px; color: red; border: 2px solid red;">UNTUK ASSESOR</p>
		</div>
		<table width="100%">
			<tr>
				<td width="30%"> </td>
				<td width="75%" colspan="2">
					<b>Hasil Penilaian Potensi dan Kompetensi</b>
				</td>
			</tr>
		</table>
		
<p style="font-size: 14px;"> <strong>I. IDENTITAS PRIBADI </strong> </p>
<table style="border-color: white;">
			<tr>
				<td>Nomor</td>
				<td style="width:20px">:</td>
				<td><?=$tempPesertaNomorUrut.'/UPTD/'.$tempBulanRomawi.'/'.$tempTahun?></td>
			</tr>
			<tr>
				<td>Nama</td>
				<td style="width:20px">:</td>
				<td><?=$tempPegawaiNama?></td>
			</tr>
			<tr>
				<td>Jabatan</td>
				<td style="width:20px">:</td>
				<td><?=$tempJabatanTes?></td>
			</tr>
			<tr>
				<td>NIP.</td>
				<td style="width:20px">:</td>
				<td><?=$tempPegawaiNip?></td>
			</tr> 
			<tr>
				<td>Unit Kerja</td>
				<td style="width:20px">:</td>
				<td><?=$tempUnitKerjaSaatIni?></td>
			</tr>
			<tr>
				<td>Tanggal Tes</td>
				<td style="width:20px">:</td>
				<td><?=$tempTanggalTes?></td>
			</tr>
			
		</table>

<p style="font-size: 14px;"> <strong>II. PROFIL POTENSI </strong>  </p>
<ul style="list-style-type: none;">
<li > <strong> A. Aspek Potensi </strong> 
<table border="1" style="border-collapse: 1px solid black;text-align: center;font-size: 12px;width: 100%;" >
	<tr style="background: #febde6">
		<td rowspan="2" style="padding:5px;width: 5%;"> No  </td>
		<td rowspan="2" style="padding:5px;width: 45%;"> Aspek Potensi </td>
		<td  style="padding:5px;width:50%" colspan="5"> Skala Penilaian  </td>
	</tr>
	<tr style="background: #febde6">
		<td style="padding:5px">  KS </td>
		<td style="padding:5px">  K </td>
		<td style="padding:5px">  C </td>
		<td style="padding:5px">  B </td>
		<td style="padding:5px">  BS*) </td> 	 	
	</tr>
	<!-- <tr>
		<td style="padding:5px" rowspan="4" valign="top" align="center">1</td>
	</tr>
	<tr>
		<td colspan="6" style="padding:5px;background: #C9C9C9;"> Kapabilitas Berpikir</td>
	</tr>
	<tr>
		<td  style="padding:5px"> Daya Analisa</td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> X </td>
		<td align="center"> &nbsp; </td>

	</tr>
	<tr>
		<td  style="padding:5px"> Logika Berpikir</td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>

	</tr>


	<tr>
		<td style="padding:5px" rowspan="6" valign="top" align="center">2</td>
	</tr>
	<tr>
		<td colspan="6" style="padding:5px;background: #C9C9C9;"> Sikap Kerja</td>
	</tr>
	<tr>
		<td  style="padding:5px"> Sistematika Kerja</td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center">  &nbsp;  </td>
		<td align="center"> &nbsp; </td>

	</tr>
	<tr>
		<td  style="padding:5px"> Inisiatif</td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>

	</tr>
	<tr>
		<td  style="padding:5px"> Daya Tahan kerja</td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>

	</tr>
	<tr>
		<td  style="padding:5px"> Kepemimpinan</td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>

	</tr>

	<tr>
		<td style="padding:5px" rowspan="4" valign="top" align="center">3</td>
	</tr>
	<tr>
		<td colspan="6" style="padding:5px;background: #C9C9C9;"> Motivasi</td>
	</tr>
	<tr>
		<td  style="padding:5px"> Dorongan Berprestasi</td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>

	</tr>
	<tr>
		<td  style="padding:5px">Tanggung Jawab</td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>

	</tr>

<tr>
		<td style="padding:5px" rowspan="5" valign="top" align="center">4</td>
	</tr>
	<tr>
		<td colspan="6" style="padding:5px;background: #C9C9C9;"> Karakter</td>
	</tr>
	<tr>
		<td  style="padding:5px"> Ketrampilan Interpersonal</td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>

	</tr>
	<tr>
		<td  style="padding:5px">Kepercayaan Diri</td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>

	</tr>
	<tr>
		<td  style="padding:5px">Stabilitas Emosi </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>

	</tr>
 -->

 <?
			$tempGroupAspekId= $tempGroupParentAtributId= "";
			for($checkbox_index=0;$checkbox_index < $jumlah_atribut;$checkbox_index++)
			{
				$index_loop= $checkbox_index;
				$tempAtributId= $arrAtribut[$index_loop]["ATRIBUT_ID"];
				$tempAtributIdParent= $arrAtribut[$index_loop]["ATRIBUT_ID_PARENT"];
				$tempAtributAspekId= $arrAtribut[$index_loop]["ASPEK_ID"];
				$tempAtributAspekNama= $arrAtribut[$index_loop]["ASPEK_NAMA"];
				$tempAtributNama= $arrAtribut[$index_loop]["ATRIBUT_NAMA"];
				$tempAtributNilaiStandar= $arrAtribut[$index_loop]["NILAI_STANDAR"];
				$tempAtributNilai= $arrAtribut[$index_loop]["NILAI"];
				$exTempAtributNilai=explode(".",$tempAtributNilai);
				$tempAtributKesimpulan= $arrAtribut[$index_loop]["CATATAN"];
				
				if($tempGroupAspekId == $tempAtributAspekId)
				{
					if($tempAtributIdParent == "0")
					$tempNoAtributParent++;
				}
                else
                {
					$tempNoAtributParent=1;
				}
			?>
            	<?
				if($tempAtributIdParent == "0")
				{
					if($tempGroupParentAtributId == $tempAtributId)
					{
						
					}
					else
					{
						$tempNoAtribut=1;
                ?>
                    <tr class="bold-border">
                        <td><b><?=romanicNumber($tempNoAtributParent)?></b></td>
                        <td colspan="6" class="left"><b><?=$tempAtributNama?></b></td>
                    </tr>
                <?
					}
				}
				else
				{
					// if($exTempAtributNilai[1]>1){
					// 	$arrStyleClassChecked= radioPenilaian($tempAtributNilaiStandar+1, "grey");
					// }
					// else{
					// 	$arrStyleClassChecked= radioPenilaian($tempAtributNilaiStandar, "grey");
					// }
					if($tempAtributNilai>=0 && $tempAtributNilai<= 1.25 ){ 
						$penilaian='0';
					}
					else if($tempAtributNilai>=1.26 && $tempAtributNilai<= 2.25){ 
						$penilaian='1';
					}
					else if($tempAtributNilai>=2.26 && $tempAtributNilai<= 3.25){ 
						$penilaian='2';
					}
					else if($tempAtributNilai>=3.26 && $tempAtributNilai<= 4.25){ 
						$penilaian='3';
					}
					else if($tempAtributNilai>=4.26 && $tempAtributNilai<= 5){ 
						$penilaian='4';
					}

					// $arrStyleClassChecked= radioPenilaian('2', "grey");
					$arrStyleClassChecked= radioPenilaian($tempAtributNilaiStandar-1, "grey");
					
					$arrChecked= radioPenilaian($penilaian, $tempAtributNilai);

					$csswarnaketerangan= "";
					$csswarnaketerangan= "background-color: ".warnanilai($tempAtributNilai);					 

                ?>
                    <tr>
                        <td><?=$tempNoAtribut?></td>
                        <td class="left"><?=$tempAtributNama?></td>
                        <td class="<?=$arrStyleClassChecked[0]?>" ><?=$arrChecked[0]?></td>
                        <td class="<?=$arrStyleClassChecked[1]?>"><?=$arrChecked[1]?></td>
                        <td class="<?=$arrStyleClassChecked[2]?>"><?=$arrChecked[2]?></td>
                        <td class="<?=$arrStyleClassChecked[3]?>"><?=$arrChecked[3]?></td>
                        <td class="<?=$arrStyleClassChecked[4]?>"><?=$arrChecked[4]?></td>
                        <!-- <td class="left" style=" text-align: justify"><?=rscript($tempAtributKesimpulan)?></td> -->
                        <!-- <td style="<?=$csswarnaketerangan?>"><?=$tempAtributKesimpulan?></td> -->
                        <!-- FF69B4, FF0000, FFFF00, ADFF2F, 87CEFA -->
                    </tr>
                <?
				$tempNoAtribut++;
				}
                ?>
            <?
			$tempGroupAspekId= $tempAtributAspekId;
			$tempGroupParentAtributId= $tempAtributId;
			}
            ?>

</table>
<p style="font-size: 12px;"> Ket.: KS: Kurang Sekali; K: Kurang; C: Cukup; B:Baik; BS: Baik Sekali  </p>
<!-- <p style="font-size: 12px;"> X = Hasil Penilaian</p> -->
</li>
<li>
	 <strong>B. Dinamika Psikologis </strong>
	
	 <table style="border-collapse: 1px solid black;font-size: 12px;width: 100%;" >
	 	<tr>
				<?
				$setkepribadian= new PenilaianRekomendasi();
                $setkepribadian->selectByParams(array('PEGAWAI_ID'=>$reqId, 'JADWAL_TES_ID'=>$reqJadwalTesId, 'tipe'=>'profil_kepribadian'));
                // echo $setkepribadian->query; exit;
                  $setkepribadian->firstRow();
                $reqPenilaianKeteranganKepribadian= $setkepribadian->getField("KETERANGAN");?>
				<td width="5%"><strong></strong></td>
				<td style=" text-align: justify;font-size: 10pt">
					<?=$reqPenilaianKeteranganKepribadian?>
				</td>
			</tr>
	 </table>
</li>
</ul>
</div>
<?
	 // $html = file_get_contents("http://".$urlLink."ikk/sedang_hal2.php?reqId=".$reqId."&reqJadwalTesId=".$reqJadwalTesId."&reqTahun=".$reqTahun);
	 // echo $html;
	?>
<!-- <p style="font-size: 14px;"> III. PROFIL KOMPETENSI  </p>
<ul>
<li> <p style="font-size: 12px;"> A. Aspek Potensi  </p> -->
	
<!-- <table border="1" style="border-collapse: 1px solid black;font-size: 12px;width: 100%;" >
	<tr>
		<td rowspan="2" style="padding:5px;width: 5%;"> No  </td>
		<td rowspan="2" style="padding:5px;width: 45%;" align="center"> Aspek Kompetensi </td>
		<td  style="padding:5px;width:50%" colspan="6" align="center"> Skala Penilaian  </td>
	</tr>
	<tr>
		<td style="padding:5px" align="center">  0 </td>
		<td style="padding:5px" align="center">  1 </td>
		<td style="padding:5px" align="center">  2 </td>
		<td style="padding:5px" align="center">  3 </td>
		<td style="padding:5px" align="center">  4 </td>
		<td style="padding:5px" align="center">  5 </td> 	 	
	</tr> -->
	<!-- <tr>
		<td colspan="7"  style="padding:5px;margin-left: 10%;"> A. Kompetensi Manajeria </td>
	</tr>
	<tr>
		<td style="padding:5px" align="center"> 	1  </td>
		<td style="padding:5px" align="left"> 	Integritas  </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
	</tr>
	<tr>
		<td style="padding:5px" align="center"> 	2  </td>
		<td style="padding:5px" align="left"> 	Kerjasama  </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
	</tr>
	<tr>
		<td style="padding:5px" align="center"> 	3  </td>
		<td style="padding:5px" align="left"> 	Komunikasi  </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
	</tr>
	<tr>
		<td style="padding:5px" align="center"> 	4  </td>
		<td style="padding:5px" align="left"> 	Orientasi pada Hasil  </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
	</tr>
	<tr>
		<td style="padding:5px" align="center"> 	5  </td>
		<td style="padding:5px" align="left"> 	Pelayanan Publik  </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
	</tr>
	<tr>
		<td style="padding:5px" align="center"> 	6  </td>
		<td style="padding:5px" align="left"> 	Pengembangan Diri dan
Orang Lain </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
	</tr>
	<tr>
		<td style="padding:5px" align="center"> 	7  </td>
		<td style="padding:5px" align="left"> 	Mengelola Perubahan </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
	</tr>
	<tr>
		<td style="padding:5px" align="center"> 	8  </td>
		<td style="padding:5px" align="left"> 	Pengambilan Keputusan </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
	</tr>
	<tr>
		<td colspan="7"  style="padding:5px;margin-left: 10%;"> A. Kompetensi Sosial Kultural </td>
	</tr>
	<tr>
		<td style="padding:5px" align="center"> 	9  </td>
		<td style="padding:5px" align="left"> 	Perekat Bangsa </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
		<td align="center"> &nbsp; </td>
	</tr> -->


<!-- </table> -->
<!-- <p style="font-size: 12px;text-align: center;"> <span style="background-color:#C9C9C9;height: 100px;width: 100px;"> &nbsp;&nbsp;&nbsp;&nbsp;</span>= Persyaratan Kompetensi X = Hasil Penilaian </p>
<li> <p style="font-size: 12px;"> B. Profil Kompetensi <br> Berdasarkan hasil penilaian kompetensi, menunjukan bahwa nilai total
kompetensi Saudara ............. (12) adalah .............. (13) dari total
.............. (14) atau setara dengan .................% (15) Job Person Match
(JPM).
Uraian ................ (16) <br><br> (Uraian tentang profil kompetensi peserta berdasarkan rumpun
kompetensi, sebagaimana poin-poin di bawah ini) </p> 
	<ol><li> Kompetensi Manajerial
				<ul> 
					<li> Rumpun Mengelola Pekerjaan, meliputi 
						<ol> 
							<li> Integritas  </li> 
							<li> Pengambilan Keputusan  </li> 
							<li> Kerjasama  </li> 
							<li> Orientasi pada Hasil  </li> 
							<li> Pelayanan Publik  </li> 
						</ol>
					 </li>
					 <li> Rumpun Mengelola Diri dan Orang Lain 
					 	<ol>
					 		<li> Mengelola Perubahan  </li>
					 		<li> Komunikasi  </li>	
					 		<li> Pengembangan Diri dan Orang Lain  </li>	
					 	</ol>
					 </li>
				</ul>
		  </li>
		  <br>
		  <li>  Kompetensi Sosial Kultural <br> Perekat bangsa</li>
	</ol>
	
</li>
</li>
</ul> -->
<!-- <br>
<p style="font-size: 14px;"> IV. KEKUATAN DAN AREA PENGEMBANGAN </p>
<ol>
<li> Kekuatan  <br><br> Berdasarkan hasil penilaian kompetensi yang dilakukan, maka
yang menjadi kekuatannya adalah sebagai berikut: <br> .......................................................................................................
...................................................................................................(17)</li>
<li> Area Pengembangan  <br><br> Berdasarkan hasil penilaian kompetensi yang dilakukan, maka yang
menjadi area pengembangannya adalah sebagai berikut: <br> ......................................................................................................
.................................................................................................. (18)</li>
</ol>
<p style="font-size: 14px;"> V. REKOMENDASI </p>
<ol style="list-style-type:none">
	<li> Berdasarkan profil dan uraian di atas, maka Saudara <br> ...................................(12) berada pada kategori : .......................... (19) </li>
</ol>
<p style="font-size: 14px;">VI. SARAN PENEMPATAN  &nbsp; &nbsp; &nbsp; &nbsp;: ......................(20) </p>
<p style="font-size: 14px;">VII. SARAN PENGEMBANGAN : ...................... (21) </p>
<p style="font-size: 14px;text-align: center;">.................., ......................</p>
<table  style="border-collapse: 1px solid black;font-size: 12px;width: 100%;" >
	<tr>
		<td align="center"> Assessor  </td>
		<td align="center"> Pimpinan Penyelenggara <br>
Penilaian Kompetensi  </td>
	</tr>
		<tr>
		<td>   </td>
		<td align="center"> .....................(22)  </td>
	</tr>
	<tr>
		<td style="height:70px">  </td>
		<td>  </td>
	</tr>
	<tr>
		<td align="center"> <u>.....................(23)</u>  </td>
		<td align="center"> <u>.....................(24)</u>  </td>
	</tr>
</table> -->