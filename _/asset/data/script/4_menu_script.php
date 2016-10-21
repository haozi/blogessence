<?php


$filename = 'menu.js.in';
$article_data = require('select_article.out');


function my_replace_line($matches){
	
	global $article_data;

	$bookid = $matches[2];
	$book = isset($article_data[$bookid]['book']) ? $article_data[$bookid]['book'] : '=====';
	return $matches[1] . ' data="'.$bookid.'" '.$matches[4].$book.'</a>';
}

$fp = fopen($filename, 'r');
$text = array();
while (!feof($fp)) {
	$line = fgets($fp);

	$line = preg_replace_callback('/(<a href="#bookId=(\d+)&tabId=(\d+)").+(class=".+?"\s*>)(.+?)<\/a>/','my_replace_line', $line);
	$line = str_replace('tabId=3', 'tabId=1', $line);
	
	$text[] = $line;

	
}

fclose($fp);

file_put_contents('menu.js.out', implode('', $text));
echo 'ok';
?>