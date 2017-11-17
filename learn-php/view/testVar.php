<?php
//$x=5;
//$y=10;
//
//function myTest() {
//    global $x,$y;
//    $y=$x+$y;
//}
//
//myTest();
//echo $y . "<br>"; // 输出 15



//function myTest2() {
//    static $x=0;
//    echo $x;
//    $x++;
//}
//
//myTest2();
//echo "<br>";
//myTest2();
//echo "<br>";
//myTest2();
//echo "<br>";
//myTest2();
//echo "<br>";
//myTest2();
//
//
//echo $x;

//$x="Hello world!";
//var_dump($x);
//$x=null;
//var_dump($x);

// 定义对大小写敏感的常量
define("GREETING", "Welcome to W3School.com.cn!");
echo GREETING;
echo "<br>";
// 不会输出常量的值
echo greeting;