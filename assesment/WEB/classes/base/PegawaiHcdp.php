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

  class PegawaiHcdp extends Entity{ 

	var $query;
	var $db;
    /**
    * Class constructor.
    **/
    function PegawaiHcdp()
	{
	  $this->Entity(); 
    }
	
	function insert()
	{
		$this->setField("PEGAWAI_HCDP_ID", $this->getNextId("PEGAWAI_HCDP_ID","pegawai_hcdp"));
		
		$str = "
		INSERT INTO pegawai_hcdp 
		(
			PEGAWAI_HCDP_ID, PEGAWAI_ID, FORMULA_ID
			, JPM, IKK, METODE, JUMLAH_JP, TAHUN
			, KUADRAN, SARAN_PENGEMBANGAN, RINGKASAN_PROFIL_KOMPETENSI
		)
		VALUES 
		(
			".$this->getField("PEGAWAI_HCDP_ID")."
			, ".$this->getField("PEGAWAI_ID")."
			, ".$this->getField("FORMULA_ID")."
			, ".$this->getField("JPM")."
			, ".$this->getField("IKK")."
			, '".$this->getField("METODE")."'
			, 0
			, ".$this->getField("TAHUN")."
			, ".$this->getField("KUADRAN")."
			, '".$this->getField("SARAN_PENGEMBANGAN")."'
			, '".$this->getField("RINGKASAN_PROFIL_KOMPETENSI")."'
		)"; 
		// echo $str;exit;
		$this->query = $str;
		$this->id = $this->getField("PEGAWAI_HCDP_ID");
		return $this->execQuery($str);
    }
	
    function update()
	{
		$str = "
		UPDATE pegawai_hcdp
		SET
		   JPM= ".$this->getField("JPM")."
		   , IKK= ".$this->getField("IKK")."
		   , METODE= '".$this->getField("METODE")."'
		   , TAHUN= ".$this->getField("TAHUN")."
		   , KUADRAN= ".$this->getField("KUADRAN")."
		   , SARAN_PENGEMBANGAN= '".$this->getField("SARAN_PENGEMBANGAN")."'
		   , RINGKASAN_PROFIL_KOMPETENSI= '".$this->getField("RINGKASAN_PROFIL_KOMPETENSI")."'
		WHERE PEGAWAI_HCDP_ID= '".$this->getField("PEGAWAI_HCDP_ID")."'
		"; 
		$this->query = $str;
		return $this->execQuery($str);
    }

    function updatejp()
	{
		$str = "
		UPDATE pegawai_hcdp
		SET
		   JUMLAH_JP= ".$this->getField("JUMLAH_JP")."
		WHERE PEGAWAI_HCDP_ID= '".$this->getField("PEGAWAI_HCDP_ID")."'
		"; 
		$this->query = $str;
		return $this->execQuery($str);
    }

    function selectByParamsTahun()
	{
		$str = "
		SELECT TAHUN FROM pegawai_hcdp GROUP BY TAHUN ORDER BY TAHUN
		";

		$this->query = $str;
		//echo $str;		
		return $this->selectLimit($str,-1,-1);
	}

	function selectByParamsPenilaian($paramsArray=array(),$limit=-1,$from=-1, $statement='', $sOrder="")
	{
		$str = "
		SELECT 
		COALESCE(A.IKK,0) * 100 IKK, COALESCE(A.JPM,0) * 100 JPM
		, TO_CHAR(A.TANGGAL_TES, 'YYYY') TAHUN
		, CASE TIPE_FORMULA WHEN '1' THEN 'Tujuan Pengisian'  WHEN '2' THEN 'Tujuan Pemetaan' ELSE '-' END METODE
		, A.SARAN_PENGEMBANGAN, A.RINGKASAN_PROFIL_KOMPETENSI
		FROM penilaian A
		INNER JOIN JADWAL_TES B ON A.JADWAL_TES_ID = B.JADWAL_TES_ID
		INNER JOIN FORMULA_ESELON C ON B.FORMULA_ESELON_ID = C.FORMULA_ESELON_ID
		INNER JOIN FORMULA_ASSESMENT D ON C.FORMULA_ID = D.FORMULA_ID 
		WHERE 1=1 AND ASPEK_ID = 1
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
	
	function selectByParams($paramsArray=array(),$limit=-1,$from=-1, $statement='', $sOrder="")
	{
		$str = "
		SELECT A.*
		, PEGAWAI_NAMA, PEGAWAI_NIP_BARU, PEGAWAI_JABATAN_NAMA, PEGAWAI_PANGKAT_KODE, PEGAWAI_PANGKAT_NAMA
		, K.KODE_KUADRAN
		FROM pegawai_hcdp A
		LEFT JOIN
		(
			SELECT
			A.PEGAWAI_ID, A.NAMA PEGAWAI_NAMA, A.NIP_BARU PEGAWAI_NIP_BARU, A.LAST_JABATAN PEGAWAI_JABATAN_NAMA
			, B.KODE PEGAWAI_PANGKAT_KODE, B.NAMA PEGAWAI_PANGKAT_NAMA
			FROM simpeg.pegawai A
			LEFT JOIN simpeg.pangkat B ON A.LAST_PANGKAT_ID = B.PANGKAT_ID
		) P ON A.PEGAWAI_ID = P.PEGAWAI_ID
		LEFT JOIN
		(
			SELECT * FROM
			(
				SELECT * FROM P_KUADRAN_INFOJPM()
			) A
		) K ON K.ID_KUADRAN = A.KUADRAN
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
	
    function getCountByParams($paramsArray=array())
	{
		$str = "
		SELECT COUNT(1) AS ROWCOUNT 
		FROM pegawai_hcdp A
		WHERE 1=1 "; 
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

    function selectByParamsRekapitulasi($paramsArray=array(),$limit=-1,$from=-1, $statement='', $sOrder="")
	{
		$str = "
		SELECT A.*
		, PEGAWAI_NAMA, PEGAWAI_NIP_BARU, PEGAWAI_JABATAN_NAMA, PEGAWAI_PANGKAT_KODE, PEGAWAI_PANGKAT_NAMA
		, K.KODE_KUADRAN
		, x.atribut
		, y.nama_pelatihan
		, CASE WHEN A.IKK >= 50 THEN 'Tinggi'
		WHEN (A.IKK < 50 AND A.IKK >= 25) THEN 'Sedang' 
		WHEN (A.IKK < 25 AND A.IKK > 0) THEN 'Rendah'
		WHEN (A.IKK <= 0) THEN 'Tidak Ada Kesenjangan'
		END KESENJANGAN_KOMPETENSI
		FROM pegawai_hcdp A
		LEFT JOIN
		(select a.pegawai_id, string_agg(trim(a.nama), ', ') atribut 
		from (
		 select a.pegawai_id,  b.nama  
		 from pegawai_hcdp_detil a 
		 inner join atribut b on a.atribut_id = b.atribut_id
		 group by a.pegawai_id, b.nama, a.pelatihan_nama
		 order by a.pegawai_id, b.nama, a.pelatihan_nama asc) a
		 group by a.pegawai_id) X ON X.PEGAWAI_ID = A.PEGAWAI_ID 
		 LEFT JOIN
		(select a.pegawai_id, string_agg(trim(a.nama_pelatihan), ', ') nama_pelatihan 
		from (
		 select a.pegawai_id,  a.nama_pelatihan 
		 from pegawai_hcdp_detil a  
		 group by a.pegawai_id,  a.nama_pelatihan
		 order by a.pegawai_id,  a.nama_pelatihan asc) a
		 group by a.pegawai_id) Y ON Y.PEGAWAI_ID = A.PEGAWAI_ID 
		LEFT JOIN
		(
			SELECT
			A.PEGAWAI_ID, A.NAMA PEGAWAI_NAMA, A.NIP_BARU PEGAWAI_NIP_BARU, A.LAST_JABATAN PEGAWAI_JABATAN_NAMA
			, B.KODE PEGAWAI_PANGKAT_KODE, B.NAMA PEGAWAI_PANGKAT_NAMA
			FROM simpeg.pegawai A
			LEFT JOIN simpeg.pangkat B ON A.LAST_PANGKAT_ID = B.PANGKAT_ID
		) P ON A.PEGAWAI_ID = P.PEGAWAI_ID
		LEFT JOIN
		(
			SELECT * FROM
			(
				SELECT * FROM P_KUADRAN_INFOJPM()
			) A
		) K ON K.ID_KUADRAN = A.KUADRAN
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
	
    function getCountByParamsRekapitulasi($paramsArray=array())
	{
		$str = "
		SELECT COUNT(1) AS ROWCOUNT 
		FROM pegawai_hcdp A
		WHERE 1=1 "; 
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

    function selectByParamsAtribut($paramsArray=array(),$limit=-1,$from=-1, $id, $pegawaiid, $statement='', $sOrder="ORDER BY ATR.ASPEK_ID DESC, A.ATRIBUT_ID")
	{
		$str = "
		SELECT
			A.PERMEN_ID, A.ATRIBUT_ID, ATR.NAMA ATRIBUT_NAMA
			, PELATIHAN_ID, PELATIHAN_NAMA
			, RM_PELATIHAN_ID, RM_PELATIHAN_NAMA
			, A.GAP, PL.JP, PL.TAHUN, PL.KETERANGAN
			, CASE ATR.ASPEK_ID WHEN '1' THEN 'Potensi' ELSE 'Kompetensi' END ASPEK_NAMA, ATR.ASPEK_ID
		FROM penilaian_detil A
		INNER JOIN atribut ATR ON ATR.ATRIBUT_ID = A.ATRIBUT_ID AND ATR.PERMEN_ID = A.PERMEN_ID
		LEFT JOIN
		(
			SELECT
			PEGAWAI_HCDP_ID, PEGAWAI_ID, ATRIBUT_ID, PELATIHAN_ID, PELATIHAN_NAMA, PERMEN_ID, JP, TAHUN, KETERANGAN
			FROM pegawai_hcdp_detil
			WHERE PEGAWAI_HCDP_ID = ".$id." AND PEGAWAI_ID = ".$pegawaiid."
			GROUP BY PEGAWAI_HCDP_ID, PEGAWAI_ID, ATRIBUT_ID, PELATIHAN_ID, PELATIHAN_NAMA, PERMEN_ID, JP, TAHUN, KETERANGAN
		) PL ON PL.ATRIBUT_ID = A.ATRIBUT_ID AND PL.PERMEN_ID = A.PERMEN_ID
		LEFT JOIN
		(
			SELECT
			PEGAWAI_HCDP_ID, PEGAWAI_ID, ATRIBUT_ID, PELATIHAN_ID RM_PELATIHAN_ID, PELATIHAN_NAMA RM_PELATIHAN_NAMA, PERMEN_ID
			FROM pegawai_hcdp_rumpun_detil
			WHERE PEGAWAI_HCDP_ID = ".$id." AND PEGAWAI_ID = ".$pegawaiid."
			GROUP BY PEGAWAI_HCDP_ID, PEGAWAI_ID, ATRIBUT_ID, PELATIHAN_ID, PELATIHAN_NAMA, PERMEN_ID
		) RM ON RM.ATRIBUT_ID = A.ATRIBUT_ID AND RM.PERMEN_ID = A.PERMEN_ID
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

    function selectByParamsRealisasiAtribut($paramsArray=array(),$limit=-1,$from=-1, $id, $pegawaiid, $statement='', $sOrder="ORDER BY ATR.ASPEK_ID DESC, A.ATRIBUT_ID")
	{
		$str = "
		SELECT
			A.PERMEN_ID, A.ATRIBUT_ID, ATR.NAMA ATRIBUT_NAMA
			, PELATIHAN_ID, PELATIHAN_NAMA
			, RM_PELATIHAN_ID, RM_PELATIHAN_NAMA
			, A.GAP, COALESCE(R.JP, PL.JP) JP, PL.TAHUN, PL.KETERANGAN
			, CASE ATR.ASPEK_ID WHEN '1' THEN 'Potensi' ELSE 'Kompetensi' END ASPEK_NAMA, ATR.ASPEK_ID
			, BIAYA, WAKTU_PELAKSANA, PENYELENGGARA, SUMBER_DANA, MATERI_PENGEMBANGAN, STATUS, ALASAN_PENGAJUAN
		FROM penilaian_detil A
		INNER JOIN atribut ATR ON ATR.ATRIBUT_ID = A.ATRIBUT_ID AND ATR.PERMEN_ID = A.PERMEN_ID
		INNER JOIN
		(
			SELECT
			PEGAWAI_HCDP_ID, PEGAWAI_ID, ATRIBUT_ID, PELATIHAN_ID, PELATIHAN_NAMA, PERMEN_ID, JP, TAHUN, KETERANGAN
			FROM pegawai_hcdp_detil
			WHERE PEGAWAI_HCDP_ID = ".$id." AND PEGAWAI_ID = ".$pegawaiid."
			GROUP BY PEGAWAI_HCDP_ID, PEGAWAI_ID, ATRIBUT_ID, PELATIHAN_ID, PELATIHAN_NAMA, PERMEN_ID, JP, TAHUN, KETERANGAN
		) PL ON PL.ATRIBUT_ID = A.ATRIBUT_ID AND PL.PERMEN_ID = A.PERMEN_ID
		LEFT JOIN
		(
			SELECT
			PEGAWAI_HCDP_ID, PEGAWAI_ID, ATRIBUT_ID, PELATIHAN_ID RM_PELATIHAN_ID, PELATIHAN_NAMA RM_PELATIHAN_NAMA, PERMEN_ID
			FROM pegawai_hcdp_rumpun_detil
			WHERE PEGAWAI_HCDP_ID = ".$id." AND PEGAWAI_ID = ".$pegawaiid."
			GROUP BY PEGAWAI_HCDP_ID, PEGAWAI_ID, ATRIBUT_ID, PELATIHAN_ID, PELATIHAN_NAMA, PERMEN_ID
		) RM ON RM.ATRIBUT_ID = A.ATRIBUT_ID AND RM.PERMEN_ID = A.PERMEN_ID
		LEFT JOIN pegawai_hcdp_realisasi R ON R.ATRIBUT_ID = A.ATRIBUT_ID AND R.PERMEN_ID = A.PERMEN_ID
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

    function selectcetak($paramsArray=array(),$limit=-1,$from=-1, $statement='', $sOrder="ORDER BY A.PEGAWAI_ID, ATR.ASPEK_ID DESC, A.ATRIBUT_ID")
	{
		$str = "
		SELECT
			A.PEGAWAI_ID
			, CASE ATR.ASPEK_ID WHEN '1' THEN 'Potensi' ELSE 'Kompetensi' END ASPEK_NAMA, ATR.ASPEK_ID
			, P.NIP_BARU, P.NAMA, PELATIHAN_NAMA, RM_PELATIHAN_NAMA
			, BIAYA, WAKTU_PELAKSANA, PENYELENGGARA, SUMBER_DANA, MATERI_PENGEMBANGAN, STATUS, ALASAN_PENGAJUAN
		FROM penilaian_detil A
		INNER JOIN formula_eselon W1 ON A.FORMULA_ESELON_ID = W1.FORMULA_ESELON_ID
		INNER JOIN formula_assesment W2 ON W1.FORMULA_ID = W2.FORMULA_ID
		INNER JOIN pegawai_hcdp W3 ON W2.FORMULA_ID = W3.FORMULA_ID
		INNER JOIN simpeg.pegawai P ON A.PEGAWAI_ID = P.PEGAWAI_ID
		INNER JOIN atribut ATR ON ATR.ATRIBUT_ID = A.ATRIBUT_ID AND ATR.PERMEN_ID = A.PERMEN_ID
		INNER JOIN
		(
			SELECT
			PEGAWAI_HCDP_ID, PEGAWAI_ID, ATRIBUT_ID, PELATIHAN_ID, PELATIHAN_NAMA, PERMEN_ID, JP, TAHUN, KETERANGAN
			FROM pegawai_hcdp_detil
			GROUP BY PEGAWAI_HCDP_ID, PEGAWAI_ID, ATRIBUT_ID, PELATIHAN_ID, PELATIHAN_NAMA, PERMEN_ID, JP, TAHUN, KETERANGAN
		) PL ON PL.ATRIBUT_ID = A.ATRIBUT_ID AND PL.PERMEN_ID = A.PERMEN_ID AND PL.PEGAWAI_HCDP_ID = W3.PEGAWAI_HCDP_ID AND A.PEGAWAI_ID = PL.PEGAWAI_ID
		LEFT JOIN
		(
			SELECT
			PEGAWAI_HCDP_ID, PEGAWAI_ID, ATRIBUT_ID, PELATIHAN_ID RM_PELATIHAN_ID, PELATIHAN_NAMA RM_PELATIHAN_NAMA, PERMEN_ID
			FROM pegawai_hcdp_rumpun_detil
			GROUP BY PEGAWAI_HCDP_ID, PEGAWAI_ID, ATRIBUT_ID, PELATIHAN_ID, PELATIHAN_NAMA, PERMEN_ID
		) RM ON RM.ATRIBUT_ID = A.ATRIBUT_ID AND RM.PERMEN_ID = A.PERMEN_ID AND RM.PEGAWAI_HCDP_ID = W3.PEGAWAI_HCDP_ID AND A.PEGAWAI_ID = RM.PEGAWAI_ID
		LEFT JOIN pegawai_hcdp_realisasi R ON R.ATRIBUT_ID = A.ATRIBUT_ID AND R.PERMEN_ID = A.PERMEN_ID AND R.PEGAWAI_HCDP_ID = W3.PEGAWAI_HCDP_ID
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
	
  } 
?>