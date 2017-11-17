<?php
/**
 * Created by PhpStorm.
 * User: hehui
 * Date: 2016/2/26
 * Time: 13:59
 */

//create function with an exception
//function checkNum($number)
//{
//    if($number>1)
//    {
//        throw new Exception("Value must be 1 or below");
//    }
//    echo "正常执行，传入的值为：$number";
//}
//
////trigger exception
//checkNum(2);

// 加上 try catch
//创建可抛出一个异常的函数
function checkNum($number)
{
    if($number>1)
    {
        throw new Exception("Value must be 1 or below");
    }
    return true;
}

//在 "try" 代码块中触发异常
try
{
    checkNum(2);
    //If the exception is thrown, this text will not be shown
    echo 'If you see this, the number is 1 or below';
}

//捕获异常
catch(Exception $e)
{
    echo 'Message: ' .$e->getMessage();
}