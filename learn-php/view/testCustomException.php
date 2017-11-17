<?php
/**
 * Created by PhpStorm.
 * User: hehui
 * Date: 2016/2/26
 * Time: 15:00
 */


//class customException extends Exception {
//    public function errorMessage()
//    {
//        //error message
//        $errorMsg = 'Error on line '.$this->getLine().' in '.$this->getFile()
//            .': <b>'.$this->getMessage().'</b> is not a valid E-Mail address';
//        return $errorMsg;
//    }
//}
//
//// 测试用例
////$email = "someone@example...com";
//$email = "someone@example.com";
//
//try {
//    //check if
//    if(filter_var($email, FILTER_VALIDATE_EMAIL) === FALSE) {
//        //throw exception if email is not valid
//        throw new customException($email);
//    } else {
//        echo "邮箱格式正确！";
//    }
//}
//
//catch (customException $e) {
//    //display custom message
//    echo $e->errorMessage();
//}


// 多个异常
//class customException extends Exception
//{
//    public function errorMessage()
//    {
////error message
//        $errorMsg = 'Error on line '.$this->getLine().' in '.$this->getFile()
//            .': <b>'.$this->getMessage().'</b> is not a valid E-Mail address';
//        return $errorMsg;
//    }
//}
//
//$email = "someone@example.com";
//
//try
//{
//    //check if
//    if(filter_var($email, FILTER_VALIDATE_EMAIL) === FALSE)
//    {
//        //throw exception if email is not valid
//        throw new customException($email);
//    }
//    //check for "example" in mail address
//    if(strpos($email, "example") !== FALSE)
//    {
//        throw new Exception("$email is an example e-mail");
//    }
//}
//
//catch (customException $e)
//{
//    echo $e->errorMessage();
//}
//
//catch(Exception $e)
//{
//    echo $e->getMessage();
//}



// 从新抛出异常
//class customException extends Exception
//{
//    public function errorMessage()
//    {
//        //error message
//        $errorMsg = $this->getMessage() . ' is not a valid E-Mail address.';
//        return $errorMsg;
//    }
//}
//
//$email = "someone@example.com";
//
//try {
//    try {
//        //check for "example" in mail address
//        if (strpos($email, "example") !== FALSE) {
//            //throw exception if email is not valid
//            throw new Exception($email);
//        }
//    } catch (Exception $e) {
//        //re-throw exception
//        throw new customException($email);
//    }
//} catch (customException $e) {
//    //display custom message
//    echo $e->errorMessage();
//}


// 设置顶层异常处理器
function myException($exception)
{
    echo "<b>Exception:</b> " , $exception->getMessage();
}

set_exception_handler('myException');

throw new Exception('Uncaught Exception occurred');