<?php


$basedir = dirname(dirname(__FILE__)).DIRECTORY_SEPARATOR.'books';
$exclude = array('.','..','.svn','Thumbs.db', 'book.data.js');
//echo $dir;die;
$sd = array();

foreach(scandir($basedir) as $d){
	
	if(!in_array($d, $exclude)){
		$sd[] = $d;
	}
}

$data = array();
foreach ($sd as $dir) {
	$waste = array();
	foreach (scandir($basedir.DIRECTORY_SEPARATOR.$dir) as $img) {
		if(!in_array($img, $exclude)){
			$waste[] = $img;	
		}
	}
	$data[$dir] = $waste;
}


// 分组
$new_data = array();
foreach ($data as $key => $images) {
	$groups = array(1,2,3,4,5);

	// foreach ($images as $img) {
	// 	if(strpos($img, '.txt')) continue;
	// 	$bb = explode('_', $img);
	// 	if($bb){
	// 		$groups[] = $bb[1][0];
	// 	}
	// }

	$new_groups = array();
	foreach ($groups as $g) {
		$g_imgs = array();
		foreach ($images as $img) {
			if(strpos($img, '.txt')) continue;
			$bb = explode('_', $img);
			if(isset($bb[1][0])){
				if($bb[1][0] == $g){
					$g_imgs[] = array(
						$img,
						$bb[1][0],
						$bb[0],
					);
				}
			}
		}

		$new_groups[$g] = $g_imgs;
	}
	
	$new_data[$key] = $new_groups;

}

$out_data = array();

foreach ($new_data as $key => $data) {
	$arr = array();
	$tab = array();
	foreach ($data as $g => $img) {
		$cnt = count($img);
		$arr[] = $cnt == 0 ? 1 : $cnt;

		//$tab[$g] = $img[0];
	}

	$out_data[$key] = array(
		'name'=>'',
		'slideConfig'=>$arr,
		//'tabs'=>$data,
	);
}


//file_put_contents('xxx', var_export($out_data, true));

$out_array = array();
foreach($out_data as $k=>$imgs){
	//var_dump($imgs);die;
	$cnt = 0;
	//array_pop();
	foreach ($imgs['slideConfig'] as $i=>$v) {
		if($i == 4)break;
		$cnt += intval($v);
	}
	$out_array[$k] = $cnt;
}
//var_dump($out_data);
//die;

$out_count = "<?php \n return ";
$out_count .= var_export($out_array, true);
$out_count .= ";\n?>";

file_put_contents('count', $out_count);
echo 'ok';
echo "\n";

//######
$json_str = json_encode($out_data);

$out_str = "define(\n";
$out_str .= $json_str;
$out_str .= "\n);";

file_put_contents('book.data', $out_str);
echo 'ok';

?>