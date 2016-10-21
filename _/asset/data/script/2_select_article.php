<?php

$filename = 'select_article.in';
$count_arr = require('count');

$fp = fopen($filename, 'r');

$text = array();
while (!feof($fp)) {
	$line = fgets($fp);

	$line = str_replace("\r\n", "\n", $line);
	if($line != "\n"){
		preg_match_all('/(\d+?)-(.+)\s+——(.+)/', $line, $matches);
		
		if(isset($matches[1][0])){
			$bookid = formatBookId($matches[1][0]);
			
			$text[$bookid] = array(
				'bookid'=>$bookid,
				'bookname'=>trim($matches[2][0]),
				'articletitle'=>trim($matches[3][0]),
			);
		}
	}
}
function formatBookId($bid){
	return str_pad($bid, 3, "0", STR_PAD_LEFT);
}




$out_data = array();
foreach ($count_arr as $key => $val) {
	print $key."\n";
	$out_data[$key] = array(
		'book'=>$text[$key]['bookname'],
		'title'=>$text[$key]['articletitle'],
		'tabId'=>$val,
	);
}


$str = "<?php return \n";
$str .= var_export($out_data, true);
$str .="?>";

file_put_contents('select_article.out', $str);
echo 'ok';
?>