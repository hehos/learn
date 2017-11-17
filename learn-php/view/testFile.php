<?php
/**
 * Created by PhpStorm.
 * User: hehui
 * Date: 2016/2/23
 * Time: 15:20
 */

echo readfile("../files/test1.txt");
echo "<br>";

echo readfile("../files/test2.txt");
echo "<br>";

$myfile1 = fopen("../files/test1.txt", "r") or die("Unable to open file!");
echo fread($myfile1, filesize("../files/test1.txt"));
fclose($myfile1);
echo "<br>";

$myfile2 = fopen("../files/test3.txt", "r") or die("Unable to open file!");
while(!feof($myfile2)) {
    echo fgets($myfile2) . "<br>";
}
fclose($myfile2);
echo "<br>";