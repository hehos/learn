<?php
/**
 * Created by PhpStorm.
 * User: hehui
 * Date: 2016/2/24
 * Time: 9:47
 */

// names.txt文件需要手动赋权限。
$myfile = fopen("../files/names.txt", "w") or die("Unable to open file!");
$txt = "Bill Gates2\n";
fwrite($myfile, $txt);
$txt = "Steve Jobs2\n";
fwrite($myfile, $txt);
fclose($myfile);

