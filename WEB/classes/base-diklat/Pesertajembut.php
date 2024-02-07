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

  class Peserta extends Entity{ 

	var $query;
    /**
    * Class constructor.
    **/
    function Peserta()
	{
      $this->Entity(); 
    }

    function selectByParams($paramsArray=array(),$limit=-1,$from=-1,$statement="", $order="")
	{
		$str= "
		SELECT 
			A.PESERTA_ID, UNIT_KERJA_NAMA, UNIT_KERJA_KOTA, NAMA, KTP, NIP, JENIS_KELAMIN
			, CASE JENIS_KELAMIN WHEN 'L' THEN 'Laki-laki' WHEN 'P' THEN 'Perempuan' END JENIS_KELAMIN_NAMA,
			TEMPAT_LAHIR, TANGGAL_LAHIR, AGAMA, GOL_RUANG, JABATAN,
			ALAMAT_RUMAH, ALAMAT_RUMAH_KAB_KOTA, KOTA, ALAMAT_RUMAH_TELP, ALAMAT_RUMAH_FAX, EMAIL,
			ALAMAT_KANTOR, ALAMAT_KANTOR_TELP, ALAMAT_KANTOR_FAX,
			NPWP, PENDIDIKAN_TERAKHIR, PELATIHAN, KONTAK_DARURAT_NAMA, KONTAK_DARURAT_HP, FOTO_LINK
			, PASSWORD_LOGIN_DEKRIP, GELAR, TMT_GOLONGAN, TMT_CPNS, TMT_PNS, TMT_JABATAN, TMT_MUTASI
			, A.M_ESELON_ID, M_ESELON_NAMA
			, A.UNIT_KERJA_ESELON, A.STATUS_SATUAN_KERJA
		FROM PESERTA A
		LEFT JOIN (SELECT M_ESELON_ID, NAMA M_ESELON_NAMA FROM M_ESELON) ME ON A.M_ESELON_ID = ME.M_ESELON_ID
		WHERE 1=1
		"; 
		
		while(list($key,$val)= each($paramsArray))
		{
			$str .= " AND $key= '$val' ";
		}
		
		$str .= $statement." ".$order;
		$this->query= $str;
		// echo $str;exit();

		return $this->selectLimit($str,$limit,$from); 
    }

    function update()
	{
		// TEMPAT_LAHIR= '".$this->getField("TEMPAT_LAHIR")."',
		/*Auto-generate primary key(s) by next max value (integer) */
		$str= "
		UPDATE PESERTA
		SET 
			UNIT_KERJA_NAMA= '".$this->getField("UNIT_KERJA_NAMA")."',
			UNIT_KERJA_KOTA= '".$this->getField("UNIT_KERJA_KOTA")."',
			KTP= '".$this->getField("KTP")."',
			NAMA= '".$this->getField("NAMA")."',
			NIP= '".$this->getField("NIP")."',
			JENIS_KELAMIN= '".$this->getField("JENIS_KELAMIN")."',
			TEMPAT_LAHIR= '".$this->getField("TEMPAT_LAHIR")."',
			TANGGAL_LAHIR= ".$this->getField("TANGGAL_LAHIR").",
			AGAMA= '".$this->getField("AGAMA")."',
			GOL_RUANG= '".$this->getField("GOL_RUANG")."',
			JABATAN= '".$this->getField("JABATAN")."',
			ALAMAT_RUMAH= '".$this->getField("ALAMAT_RUMAH")."',
			ALAMAT_RUMAH_KAB_KOTA= '".$this->getField("ALAMAT_RUMAH_KAB_KOTA")."',
			KOTA= '".$this->getField("KOTA")."',
			ALAMAT_RUMAH_TELP= '".$this->getField("ALAMAT_RUMAH_TELP")."',
			ALAMAT_RUMAH_FAX= '".$this->getField("ALAMAT_RUMAH_FAX")."',
			ALAMAT_KANTOR= '".$this->getField("ALAMAT_KANTOR")."',
			ALAMAT_KANTOR_TELP= '".$this->getField("ALAMAT_KANTOR_TELP")."',
			ALAMAT_KANTOR_FAX= '".$this->getField("ALAMAT_KANTOR_FAX")."',
			NPWP= '".$this->getField("NPWP")."',
			PENDIDIKAN_TERAKHIR= '".$this->getField("PENDIDIKAN_TERAKHIR")."',
			PELATIHAN= '".$this->getField("PELATIHAN")."',
			EMAIL= '".$this->getField("EMAIL")."',
			KONTAK_DARURAT_NAMA= '".$this->getField("KONTAK_DARURAT_NAMA")."',
			KONTAK_DARURAT_HP= '".$this->getField("KONTAK_DARURAT_HP")."',
			GELAR= '".$this->getField("GELAR")."',
			TMT_GOLONGAN= ".$this->getField("TMT_GOLONGAN").",
			TMT_CPNS= ".$this->getField("TMT_CPNS").",
			TMT_PNS= ".$this->getField("TMT_PNS").",
			TMT_JABATAN= ".$this->getField("TMT_JABATAN").",
			TMT_MUTASI= ".$this->getField("TMT_MUTASI").",
			M_ESELON_ID= ".$this->getField("M_ESELON_ID").",
			UNIT_KERJA_ESELON= ".$this->getField("UNIT_KERJA_ESELON").",
			STATUS_SATUAN_KERJA= ".$this->getField("STATUS_SATUAN_KERJA")."
		WHERE PESERTA_ID= ".$this->getField("PESERTA_ID")."
		"; 
		$this->query= $str;
		return $this->execQuery($str);
    }
	
	function insert()
	{
		/*Auto-generate primary key(s) by next max value (integer) */
		$this->setField("PESERTA_ID", $this->getNextId("PESERTA_ID","PESERTA")); 
		$str= "
			INSERT INTO PESERTA
			(PESERTA_ID, UNIT_KERJA_NAMA, UNIT_KERJA_KOTA, KTP, NAMA, NIP, JENIS_KELAMIN, TEMPAT_LAHIR, TANGGAL_LAHIR, AGAMA, GOL_RUANG, JABATAN, ALAMAT_RUMAH, ALAMAT_RUMAH_KAB_KOTA, ALAMAT_RUMAH_TELP,
			 ALAMAT_RUMAH_FAX, ALAMAT_KANTOR, ALAMAT_KANTOR_TELP, ALAMAT_KANTOR_FAX, NPWP, PENDIDIKAN_TERAKHIR, PELATIHAN, EMAIL, KONTAK_DARURAT_NAMA, KONTAK_DARURAT_HP, PASSWORD_LOGIN, PASSWORD_LOGIN_DEKRIP, GELAR, TMT_GOLONGAN, TMT_CPNS, TMT_PNS, TMT_JABATAN, TMT_MUTASI)
		  	VALUES(
				  ".$this->getField("PESERTA_ID").",
				  '".$this->getField("UNIT_KERJA_NAMA")."',
				  '".$this->getField("UNIT_KERJA_KOTA")."',
				  '".$this->getField("KTP")."',
				  '".$this->getField("NAMA")."',	
				  '".$this->getField("NIP")."',
				  '".$this->getField("JENIS_KELAMIN")."',
				  '".$this->getField("TEMPAT_LAHIR")."',
				  ".$this->getField("TANGGAL_LAHIR").",
				  '".$this->getField("AGAMA")."',
				  '".$this->getField("GOL_RUANG")."',
				  '".$this->getField("JABATAN")."',	
				  '".$this->getField("ALAMAT_RUMAH")."',
				  '".$this->getField("ALAMAT_RUMAH_KAB_KOTA")."',
				  '".$this->getField("ALAMAT_RUMAH_TELP")."',
				  '".$this->getField("ALAMAT_RUMAH_FAX")."',
				  '".$this->getField("ALAMAT_KANTOR")."',
				  '".$this->getField("ALAMAT_KANTOR_TELP")."',
				  '".$this->getField("ALAMAT_KANTOR_FAX")."',
				  '".$this->getField("NPWP")."',
				  '".$this->getField("PENDIDIKAN_TERAKHIR")."',
				  '".$this->getField("PELATIHAN")."',
				  '".$this->getField("EMAIL")."',
				  '".$this->getField("KONTAK_DARURAT_NAMA")."',
				  '".$this->getField("KONTAK_DARURAT_HP")."',
				  '".$this->getField("GELAR")."',
				  ".$this->getField("TMT_GOLONGAN").",
				  ".$this->getField("TMT_CPNS").",
				  ".$this->getField("TMT_PNS").",
				  ".$this->getField("TMT_JABATAN").",
				  ".$this->getField("TMT_MUTASI").",
				  '21232f297a57a5a743894a0e4a801fc3',
				  'admin'
				)"; 
		$this->id= $this->getField("PESERTA_ID");
		$this->query= $str;
		// echo $str->query; exit();
		return $this->execQuery($str);
    }
	
	function insertAdmin()
	{
		/*Auto-generate primary key(s) by next max value (integer) */
		$this->setField("PESERTA_ID", $this->getNextId("PESERTA_ID","PESERTA")); 
		$str= "
			INSERT INTO PESERTA
			(PESERTA_ID, UNIT_KERJA_NAMA, UNIT_KERJA_KOTA, KTP, NAMA, NIP, JENIS_KELAMIN, TEMPAT_LAHIR, TANGGAL_LAHIR, AGAMA, GOL_RUANG, JABATAN, ALAMAT_RUMAH, ALAMAT_RUMAH_KAB_KOTA, KOTA, ALAMAT_RUMAH_TELP,
			 ALAMAT_RUMAH_FAX, ALAMAT_KANTOR, ALAMAT_KANTOR_TELP, ALAMAT_KANTOR_FAX, NPWP, PENDIDIKAN_TERAKHIR, PELATIHAN, EMAIL, KONTAK_DARURAT_NAMA, KONTAK_DARURAT_HP, PASSWORD_LOGIN, PASSWORD_LOGIN_DEKRIP, GELAR, TMT_GOLONGAN, TMT_CPNS, TMT_PNS, TMT_JABATAN, TMT_MUTASI
			 	, M_ESELON_ID
			 ) 
		  	VALUES(
				  ".$this->getField("PESERTA_ID").",
				  '".$this->getField("UNIT_KERJA_NAMA")."',
				  '".$this->getField("UNIT_KERJA_KOTA")."',
				  '".$this->getField("KTP")."',
				  '".$this->getField("NAMA")."',	
				  '".$this->getField("NIP")."',
				  '".$this->getField("JENIS_KELAMIN")."',
				  '".$this->getField("TEMPAT_LAHIR")."',
				  ".$this->getField("TANGGAL_LAHIR").",
				  '".$this->getField("AGAMA")."',
				  '".$this->getField("GOL_RUANG")."',
				  '".$this->getField("JABATAN")."',	
				  '".$this->getField("ALAMAT_RUMAH")."',
				  '".$this->getField("ALAMAT_RUMAH_KAB_KOTA")."',
				  '".$this->getField("KOTA")."',
				  '".$this->getField("ALAMAT_RUMAH_TELP")."',
				  '".$this->getField("ALAMAT_RUMAH_FAX")."',
				  '".$this->getField("ALAMAT_KANTOR")."',
				  '".$this->getField("ALAMAT_KANTOR_TELP")."',
				  '".$this->getField("ALAMAT_KANTOR_FAX")."',
				  '".$this->getField("NPWP")."',
				  '".$this->getField("PENDIDIKAN_TERAKHIR")."',
				  '".$this->getField("PELATIHAN")."',
				  '".$this->getField("EMAIL")."',
				  '".$this->getField("KONTAK_DARURAT_NAMA")."',
				  '".$this->getField("KONTAK_DARURAT_HP")."',
				  '21232f297a57a5a743894a0e4a801fc3',
				  'admin',
				  '".$this->getField("GELAR")."',
				  ".$this->getField("TMT_GOLONGAN").",
				  ".$this->getField("TMT_CPNS").",
				  ".$this->getField("TMT_PNS").",
				  ".$this->getField("TMT_JABATAN").",
				  ".$this->getField("TMT_MUTASI").",
				  ".$this->getField("M_ESELON_ID")."
				)"; 
		$this->id= $this->getField("PESERTA_ID");
		$this->query= $str;
		return $this->execQuery($str);
    }
	
	function updateAdmin()
	{
		/*Auto-generate primary key(s) by next max value (integer) */
		$str= "
		UPDATE PESERTA
		SET 
			UNIT_KERJA_NAMA= '".$this->getField("UNIT_KERJA_NAMA")."',
			UNIT_KERJA_KOTA= '".$this->getField("UNIT_KERJA_KOTA")."',
			KTP= '".$this->getField("KTP")."',
			NAMA= '".$this->getField("NAMA")."',
			NIP= '".$this->getField("NIP")."',
			JENIS_KELAMIN= '".$this->getField("JENIS_KELAMIN")."',
			TEMPAT_LAHIR= '".$this->getField("TEMPAT_LAHIR")."',
			TANGGAL_LAHIR= ".$this->getField("TANGGAL_LAHIR").",
			AGAMA= '".$this->getField("AGAMA")."',
			GOL_RUANG= '".$this->getField("GOL_RUANG")."',
			JABATAN= '".$this->getField("JABATAN")."',
			ALAMAT_RUMAH= '".$this->getField("ALAMAT_RUMAH")."',
			ALAMAT_RUMAH_KAB_KOTA= '".$this->getField("ALAMAT_RUMAH_KAB_KOTA")."',
			KOTA= '".$this->getField("KOTA")."',
			ALAMAT_RUMAH_TELP= '".$this->getField("ALAMAT_RUMAH_TELP")."',
			ALAMAT_RUMAH_FAX= '".$this->getField("ALAMAT_RUMAH_FAX")."',
			ALAMAT_KANTOR= '".$this->getField("ALAMAT_KANTOR")."',
			ALAMAT_KANTOR_TELP= '".$this->getField("ALAMAT_KANTOR_TELP")."',
			ALAMAT_KANTOR_FAX= '".$this->getField("ALAMAT_KANTOR_FAX")."',
			NPWP= '".$this->getField("NPWP")."',
			PENDIDIKAN_TERAKHIR= '".$this->getField("PENDIDIKAN_TERAKHIR")."',
			PELATIHAN= '".$this->getField("PELATIHAN")."',
			EMAIL= '".$this->getField("EMAIL")."',
			KONTAK_DARURAT_NAMA= '".$this->getField("KONTAK_DARURAT_NAMA")."',
			KONTAK_DARURAT_HP= '".$this->getField("KONTAK_DARURAT_HP")."',
			GELAR= '".$this->getField("GELAR")."',
			TMT_GOLONGAN= ".$this->getField("TMT_GOLONGAN").",
			TMT_CPNS= ".$this->getField("TMT_CPNS").",
			TMT_PNS= ".$this->getField("TMT_PNS").",
			TMT_JABATAN= ".$this->getField("TMT_JABATAN").",
			TMT_MUTASI= ".$this->getField("TMT_MUTASI").",
			M_ESELON_ID= ".$this->getField("M_ESELON_ID")."
		WHERE PESERTA_ID= ".$this->getField("PESERTA_ID")."
		"; 
		$this->query= $str;
		return $this->execQuery($str);
    }
	
	function insertImport()
	{
		/*Auto-generate primary key(s) by next max value (integer) */
		$this->setField("PESERTA_ID", $this->getNextId("PESERTA_ID","PESERTA")); 
		$str= "
		INSERT INTO PESERTA
		(
			PESERTA_ID, UNIT_KERJA_NAMA, NAMA, NIP, TANGGAL_LAHIR, GOL_RUANG, JABATAN, PENDIDIKAN_TERAKHIR
			, EMAIL, M_ESELON_ID
		) 
		VALUES(
			".$this->getField("PESERTA_ID").",
			'".$this->getField("UNIT_KERJA_NAMA")."',
			'".$this->getField("NAMA")."',	
			'".$this->getField("NIP")."',
			".$this->getField("TANGGAL_LAHIR").",
			'".$this->getField("GOL_RUANG")."',
			'".$this->getField("JABATAN")."',	
			'".$this->getField("PENDIDIKAN_TERAKHIR")."',
			'".$this->getField("EMAIL")."',
			".$this->getField("M_ESELON_ID")."
		)"; 
		$this->id= $this->getField("PESERTA_ID");
		$this->query= $str;
		return $this->execQuery($str);
    }

    function updateImport()
	{
		$str= "
		UPDATE PESERTA
		SET 
			UNIT_KERJA_NAMA= '".$this->getField("UNIT_KERJA_NAMA")."',
			NAMA= '".$this->getField("NAMA")."',
			NIP= '".$this->getField("NIP")."',
			TEMPAT_LAHIR= '".$this->getField("TEMPAT_LAHIR")."',
			TANGGAL_LAHIR= ".$this->getField("TANGGAL_LAHIR").",
			GOL_RUANG= '".$this->getField("GOL_RUANG")."',
			JABATAN= '".$this->getField("JABATAN")."',
			PENDIDIKAN_TERAKHIR= '".$this->getField("PENDIDIKAN_TERAKHIR")."',
			EMAIL= '".$this->getField("EMAIL")."',
			M_ESELON_ID= ".$this->getField("M_ESELON_ID")."
		WHERE PESERTA_ID= ".$this->getField("PESERTA_ID")."
		"; 
		$this->query= $str;
		return $this->execQuery($str);
    }

	function updateDiklatPesertaKtp()
	{
		/*Auto-generate primary key(s) by next max value (integer) */
		$str= "
	    UPDATE DIKLAT_PESERTA
	    SET 
		   KTP= '".$this->getField("KTP")."'
	    WHERE PESERTA_ID= ".$this->getField("PESERTA_ID")."
	    ";
		$this->query= $str;
		return $this->execQuery($str);
    }
	
	function updateFormatDynamis()
	{
		$str = "
				UPDATE ".$this->getField("TABLE")."
				SET
					   ".$this->getField("FIELD")." = '".$this->getField("FIELD_VALUE")."'
				WHERE ".$this->getField("FIELD_ID")." = '".$this->getField("FIELD_VALUE_ID")."'
			 "; 
		$this->query = $str;
		return $this->execQuery($str);
    }
	
	function updateByField()
	{
		/*Auto-generate primary key(s) by next max value (integer) */
		$str = "UPDATE PESERTA A SET
				  ".$this->getField("FIELD")." = '".$this->getField("FIELD_VALUE")."'
				WHERE PESERTA_ID = ".$this->getField("PESERTA_ID")."
				"; 
		$this->query = $str;
		return $this->execQuery($str);
    }
	
	function delete()
	{
        $str= "DELETE FROM PESERTA
                WHERE 
                  PESERTA_ID= ".$this->getField("PESERTA_ID").""; 
				  
		$this->query= $str;
        return $this->execQuery($str);
    }

    /** 
    * Cari record berdasarkan array parameter dan limit tampilan 
    * @param array paramsArray Array of parameter. Contoh array("id"=>"xxx","nama"=>"yyy") 
    * @param int limit Jumlah maksimal record yang akan diambil 
    * @param int from Awal record yang diambil 
    * @return boolean True jika sukses, false jika tidak 
    **/ 
	function selectByParamsCombo($paramsArray=array(),$limit=-1,$from=-1, $statement='', $sField="")
	{
		$str= "SELECT 
					   ".$sField."
				FROM PESERTA A
				WHERE 1=1"; 
		
		while(list($key,$val)= each($paramsArray))
		{
			$str .= " AND $key= '$val' ";
		}
		
		$str .= $statement." GROUP BY ".$sField." ORDER BY ".$sField;
		$this->query= $str;
				
		return $this->selectLimit($str,$limit,$from); 
    }
	
    
	
	function selectByParamsWord($paramsArray=array(),$limit=-1,$from=-1,$statement="", $order="")
	{
		$str= "
				SELECT DP.DIKLAT_PESERTA_ID, D.NAMA_DIKLAT,
				A.PESERTA_ID, DP.UNIT_KERJA_NAMA, DP.UNIT_KERJA_KOTA, DP.NAMA, A.KTP,
				DP.NIP, DP.JENIS_KELAMIN, CASE DP.JENIS_KELAMIN WHEN 'L' THEN 'LAKI-LAKI' WHEN 'P' THEN 'PEREMPUAN' END JENIS_KELAMIN_NAMA,
				DP.TEMPAT_LAHIR, DP.TANGGAL_LAHIR, DP.AGAMA, DP.GOL_RUANG, DP.JABATAN,
				DP.ALAMAT_RUMAH, DP.ALAMAT_RUMAH_KAB_KOTA, DP.ALAMAT_RUMAH_TELP, DP.ALAMAT_RUMAH_FAX, DP.EMAIL,
				DP.ALAMAT_KANTOR, DP.ALAMAT_KANTOR_TELP, DP.ALAMAT_KANTOR_FAX,
				DP.NPWP, DP.PENDIDIKAN_TERAKHIR, DP.PELATIHAN, DP.KONTAK_DARURAT_NAMA, DP.KONTAK_DARURAT_HP, A.FOTO_LINK, A.PASSWORD_LOGIN_DEKRIP, A.GELAR, A.TMT_GOLONGAN, A.TMT_CPNS, A.TMT_PNS, A.TMT_JABATAN, A.TMT_MUTASI
				FROM DIKLAT_PESERTA DP
				LEFT JOIN PESERTA A ON A.PESERTA_ID=DP.PESERTA_ID
				LEFT JOIN DIKLAT D ON D.DIKLAT_ID=DP.DIKLAT_ID
				WHERE 1=1
			"; 
		
		while(list($key,$val)= each($paramsArray))
		{
			$str .= " AND $key= '$val' ";
		}
		
		$str .= $statement." ".$order;
		$this->query= $str;
		return $this->selectLimit($str,$limit,$from); 
    }
    
	function selectByParamsLike($paramsArray=array(),$limit=-1,$from=-1, $statement="")
	{
		$str= "    SELECT PESERTA_ID,
						   UNIT_KERJA_NAMA,
						   NAMA,
						   NIP,
						   JENIS_KELAMIN,
						   TEMPAT_LAHIR,
						   TANGGAL_LAHIR,
						   AGAMA,
						   GOL_RUANG,
						   JABATAN,
						   ALAMAT_RUMAH,
						   ALAMAT_RUMAH_TELP,
						   ALAMAT_RUMAH_FAX,
						   ALAMAT_KANTOR,
						   ALAMAT_KANTOR_TELP,
						   ALAMAT_KANTOR_FAX,
						   NPWP,
						   PENDIDIKAN_TERAKHIR,
						   PELATIHAN, 
						   GELAR,
						   TMT_GOLONGAN, 
						   TMT_CPNS, 
						   TMT_PNS, 
						   TMT_JABATAN, 
						   TMT_MUTASI
					  FROM PESERTA						   
				      WHERE  1=1
				"; 
		while(list($key,$val)= each($paramsArray))
		{
			$str .= " AND $key LIKE '%$val%' ";
		}
		
		$str .= $statement." ORDER BY PESERTA_ID DESC";
		$this->query= $str;		
		return $this->selectLimit($str,$limit,$from); 
    }	
    /** 
    * Hitung jumlah record berdasarkan parameter (array). 
    * @param array paramsArray Array of parameter. Contoh array("id"=>"xxx","nama"=>"yyy") 
    * @return long Jumlah record yang sesuai kriteria 
    **/ 
    function getCountByParams($paramsArray=array(), $statement="")
	{
		$str= "SELECT COUNT(PESERTA_ID) AS ROWCOUNT FROM PESERTA WHERE 1= 1 ".$statement; 
		while(list($key,$val)=each($paramsArray))
		{
			$str .= " AND $key= '$val' ";
		}
		
		$this->select($str); 
		if($this->firstRow()) 
			return $this->getField("ROWCOUNT"); 
		else 
			return 0; 
    }

    function getCountByParamsLike($paramsArray=array())
	{
		$str= "SELECT COUNT(PESERTA_ID) AS ROWCOUNT FROM PESERTA WHERE 1= 1 "; 
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