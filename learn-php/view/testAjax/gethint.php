<?php
/**
 * Created by PhpStorm.
 * User: hehui
 * Date: 2016/2/26
 * Time: 16:57
 */

// Fill up array with names
$a[] = "Anna";
$a[] = "Brittany";
$a[] = "Cinderella";
$a[] = "Diana";
$a[] = "Eva";
$a[] = "Fiona";
$a[] = "Gunda";
$a[] = "Hege";
$a[] = "Inga";
$a[] = "Johanna";
$a[] = "Kitty";
$a[] = "Linda";
$a[] = "Nina";
$a[] = "Ophelia";
$a[] = "Petunia";
$a[] = "Amanda";
$a[] = "Raquel";
$a[] = "Cindy";
$a[] = "Doris";
$a[] = "Eve";
$a[] = "Evita";
$a[] = "Sunniva";
$a[] = "Tove";
$a[] = "Unni";
$a[] = "Violet";
$a[] = "Liza";
$a[] = "Elizabeth";
$a[] = "Ellen";
$a[] = "Wenche";
$a[] = "Vicky";

//get the q parameter from URL
$q = $_GET["q"];

//lookup all hints from array if length of q>0
// 在数组中匹配输入的关键字
if (strlen($q) > 0) {
    $hint = "";
    for ($i = 0; $i < count($a); $i++) {
        // 如果输入字符与数组中的元素左边部分或者全匹配
        if (strtolower($q) == strtolower(substr($a[$i], 0, strlen($q)))) {
            if ($hint == "") {
                $hint = $a[$i];
            } else {
                $hint = $hint . " , " . $a[$i];
            }
        }
    }
}

//Set output to "no suggestion" if no hint were found
//or to the correct values

if ($hint == "") { // 如果没有匹配
    $response = "no suggestion";
} else {
    $response = $hint;
}

//output the response
echo $response;