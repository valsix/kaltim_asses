<?
/* INCLUDE FILE */
include_once("../WEB/classes/utils/PageNumber.php");
include_once("../WEB/functions/date.func.php");
include_once("../WEB/functions/string.func.php");
include_once("../WEB/functions/default.func.php");
include_once("../WEB/functions/recordcoloring.func.php");
include_once("../WEB/classes/base-tugasbelajar/Hukuman.php");

require_once "../WEB/lib/excel/class.writeexcel_workbookbig.inc.php";
require_once "../WEB/lib/excel/class.writeexcel_worksheet.inc.php";


ini_set("memory_limit","500M");
ini_set('max_execution_time', 520);

$fname = tempnam("/tmp", "rekap_tugas_belajar_excel.xls");
$workbook = & new writeexcel_workbookbig($fname);
$worksheet = &$workbook->addworksheet();

$hukuman = new Hukuman();
	
$hukuman->selectByParams(array(), -1, -1, $statement,  "ORDER BY TANGGAL_MULAI ASC");

$worksheet->set_column(0, 0, 8.43);
$worksheet->set_column(1, 1, 40.00);
$worksheet->set_column(2, 2, 25.00);
$worksheet->set_column(3, 3, 20.00);
$worksheet->set_column(4, 4, 20.00);
$worksheet->set_column(5, 5, 30.00);
$worksheet->set_column(6, 6, 30.00);
$worksheet->set_column(7, 7, 35.00);
$worksheet->set_column(8, 8, 20.00);

$tanggal =& $workbook->addformat(array(num_format => ' dd mmmm yyy'));

$text_format =& $workbook->addformat(array( size => 10, font => 'Arial Narrow'));
$text_format_num =& $workbook->addformat(array( num_format => '###', size => 8, font => 'Arial Narrow', align => 'center'));
$text_format_num->set_left(1);
$text_format_num->set_right(1);
$text_format_num->set_top(1);
$text_format_num->set_bottom(1);

$text_format_left_none =& $workbook->addformat(array( size => 10, font => 'Arial Narrow'));
$text_format_left_none->set_color('black');

$text_format_merge =& $workbook->addformat(array(size => 8, font => 'Arial Narrow'));
$text_format_merge->set_color('black');
$text_format_merge->set_size(8);
$text_format_merge->set_border_color('black');
$text_format_merge->set_merge(1);
$text_format_merge->set_bold(1);

$text_format_merge_line_bold =& $workbook->addformat(array(size => 8, font => 'Arial Narrow', fg_color => 0x16));
$text_format_merge_line_bold->set_color('black');
$text_format_merge_line_bold->set_size(8);
$text_format_merge_line_bold->set_border_color('black');
$text_format_merge_line_bold->set_merge(1);
$text_format_merge_line_bold->set_bold(1);
$text_format_merge_line_bold->set_left(1);
$text_format_merge_line_bold->set_right(1);
$text_format_merge_line_bold->set_top(1);
$text_format_merge_line_bold->set_bottom(1);

$text_format_merge_none =& $workbook->addformat(array(size => 8, font => 'Arial Narrow'));
$text_format_merge_none->set_color('black');
$text_format_merge_none->set_size(8);
$text_format_merge_none->set_border_color('black');
$text_format_merge_none->set_merge(1);

$text_format =& $workbook->addformat(array(align => 'left', size => 8, font => 'Arial Narrow'));
$text_format->set_color('black');
$text_format->set_size(8);
$text_format->set_border_color('black');

$text_format_center =& $workbook->addformat(array(align => 'center', size => 8, font => 'Arial Narrow'));
$text_format_center->set_color('black');
$text_format_center->set_size(8);
$text_format_center->set_border_color('black');

$text_format_line =& $workbook->addformat(array(align => 'center', size => 8, font => 'Arial Narrow'));
$text_format_line->set_color('black');
$text_format_line->set_size(8);
$text_format_line->set_border_color('black');
$text_format_line->set_left(1);
$text_format_line->set_right(1);
$text_format_line->set_top(1);
$text_format_line->set_bottom(1);

$text_format_line_left =& $workbook->addformat(array(align => 'left', size => 8, font => 'Arial Narrow'));
$text_format_line_left->set_color('black');
$text_format_line_left->set_size(8);
$text_format_line_left->set_border_color('black');
$text_format_line_left->set_left(1);
$text_format_line_left->set_right(1);
$text_format_line_left->set_top(1);
$text_format_line_left->set_bottom(1);

$text_format_line_bold =& $workbook->addformat(array(align => 'center', size => 8, font => 'Arial Narrow'));
$text_format_line_bold->set_color('black');
$text_format_line_bold->set_size(8);
$text_format_line_bold->set_border_color('black');
$text_format_line_bold->set_bold(1);
$text_format_line_bold->set_left(1);
$text_format_line_bold->set_right(1);
$text_format_line_bold->set_top(1);
$text_format_line_bold->set_bottom(1);

$text_format_wrapping =& $workbook->addformat(array( size => 8, font => 'Arial Narrow'));
$text_format_wrapping->set_text_wrap();
$text_format_wrapping->set_color('black');
$text_format_wrapping->set_size(8);
$text_format_wrapping->set_border_color('black');
$text_format_wrapping->set_left(1);
$text_format_wrapping->set_right(1);
$text_format_wrapping->set_top(1);

$uang =& $workbook->addformat(array(num_format => '#,##0', size => 8, font => 'Arial Narrow'));
$uang->set_color('black');
$uang->set_size(8);
$uang->set_border_color('black');

$uang_line =& $workbook->addformat(array(num_format => '#,##0', size => 8, font => 'Arial Narrow'));
$uang_line->set_color('black');
$uang_line->set_size(8);
$uang_line->set_border_color('black');
$uang_line->set_left(1);
$uang_line->set_right(1);
$uang_line->set_top(1);
$uang_line->set_bottom(1);


$worksheet->write(1, 1, "DAFTAR REKAP HUKUMAN", $text_format);

$worksheet->write(4, 1, "NAMA PEGAWAI", $text_format_line_bold);
$worksheet->write(4, 2, "NOMOR SK", $text_format_line_bold);
$worksheet->write(4, 3, "TANGGAL SK", $text_format_line_bold);
$worksheet->write(4, 4, "TMT SK", $text_format_line_bold);
$worksheet->write(4, 5, "TINGKAT HUKUMAN", $text_format_line_bold);
$worksheet->write(4, 6, "JENIS HUKUMAN", $text_format_line_bold);
$worksheet->write(4, 7, "KETERANGAN", $text_format_line_bold);
$worksheet->write(4, 8, "STATUS BERLAKU", $text_format_line_bold);

$row = 5;

while($hukuman->nextRow())
{
	$worksheet->write($row, 1, $hukuman->getField("NAMA_PEGAWAI"), $text_format_line_left);
	$worksheet->write($row, 2, $hukuman->getField("NO_SK"), $text_format_line_left);
	$worksheet->write($row, 3, getFormattedDate($hukuman->getField("TANGGAL_SK")), $text_format_line_left);
	$worksheet->write($row, 4, getFormattedDate($hukuman->getField("TMT_SK")), $text_format_line_left);
	$worksheet->write($row, 5, $hukuman->getField("NMTINGKATHUKUMAN"), $text_format_line_left);
	$worksheet->write($row, 6, $hukuman->getField("NMJENISHUKUMAN"), $text_format_line_left);
	$worksheet->write($row, 7, $hukuman->getField("KETERANGAN"), $text_format_line_left);
	$worksheet->write($row, 8, $hukuman->getField("STATUS_BERLAKU"), $text_format_line_left);
	$row++;
}

$workbook->close();

header("Content-Type: application/x-msexcel; name=\"rekap_hukuman_excel.xls\"");
header("Content-Disposition: inline; filename=\"rekap_hukuman_excel.xls\"");
$fh=fopen($fname, "rb");
fpassthru($fh);
unlink($fname);
?>