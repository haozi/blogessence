<?php

$filename = 'article.js.in';
$count_arr = require('select_article.out');

function my_replace_line($matches){
	global $count_arr;
	//var_dump($matches);die;
	$bookId = $matches[2];
	$title = isset($count_arr[$bookId]['title'])? $bookId.' '.$count_arr[$bookId]['title'] : "====";
	$str = '<a href="#bookId='.$bookId.'&tabId='. replace_tabid($bookId) .'" class="j-step2" >'.$title.'</a>';
	return $str;
	//return $matches[1] . ' data="'.$matches[2].'" '.$matches[4];
}

function replace_tabid($bookId){
	global $count_arr;
	if(isset($count_arr[$bookId])){
		return $count_arr[$bookId]['tabId'] + 1;
	}else{
		return 0;
	}
}

$fp = fopen($filename, 'r');
$text = array();
while (!feof($fp)) {
	$line = fgets($fp);

	$line = preg_replace_callback('/(<a href="#bookId=(\d+)&tabId=(\d+)") (class=".+?"\s*?>).+?<\/a>/','my_replace_line', $line);
	//$line = str_replace('tabId=3', 'tabId='.$count_arr($matches[2]), $line);
	//echo $line;
	$text[] = $line;
	//echo $line;
	//preg_match('/<a\w+?\/a>/', $line, $matches);
	//var_dump($matches);

	
}

fclose($fp);

file_put_contents('article.js.out', implode('', $text));
echo 'ok';
?>