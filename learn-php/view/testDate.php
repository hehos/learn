<?php
/**
 * Created by PhpStorm.
 * User: hehui
 * Date: 2016/2/23
 * Time: 13:40
 */

$date = time();
echo $date . "<br/>";
echo date("Y-m-d h:i:sa", $date) . "<br/>";

$d1=strtotime("December 31");
echo date("Y-m-d h:i:sa", $d1) . "<br/>";

$d2=ceil(($d1-time())/60/60/24);
$d3=($d1-time())/60/60/24;
echo "距离十二月三十一日还有：" . $d2 ." 天。<br/>";
echo "距离十二月三十一日还有：" . $d3 ." 天。";