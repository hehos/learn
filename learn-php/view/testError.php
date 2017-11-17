<?php
/**
 * Created by PhpStorm.
 * User: hehui
 * Date: 2016/2/26
 * Time: 11:03
 */

// 没有设置错误等级
//error handler function
//function customError($errno, $errstr)
//{
//    echo "<b>Error:</b> [$errno] $errstr<br />";
//    echo "Ending Script";
//    die();
//}
//
//set_error_handler("customError");
//
////trigger error
//echo($test);


// 设置接受触发错误的等级
//set error handler
//set_error_handler("customError",E_USER_WARNING);
//
////trigger error
//$test=2;
//if ($test>1)
//{
//    trigger_error("Value must be 1 or below",E_USER_WARNING);
//}


// 错误记录发送到邮箱
//error handler function
function customError($errno, $errstr)
{
    echo "<b>Error:</b> [$errno] $errstr<br />";
    echo "Webmaster has been notified";
    error_log("Error: [$errno] $errstr",1,
        "someone@example.com","From: webmaster@example.com");
}

//set error handler
set_error_handler("customError",E_USER_WARNING);

//trigger error
$test=2;
if ($test>1)
{
    trigger_error("Value must be 1 or below",E_USER_WARNING);
}