<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <!--  测试XSS攻击  -->
</head>
<body>

<form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
    <input type="text"/>
    <input type="submit"/>
</form>

<?php //  ?>

<!--
    测试地址：
    1, http://192.168.0.188/learn/learn-php/view/testXSS.php?a=%22/%3E%3Cscript%3Ealert(%27hacked%27)%3C/script%3E%3Ca%20title=%22
    2, http://192.168.0.188/learn/learn-php/view/testXSS.php?a=%22/%3E%3Cscript%3Ealert('hacked')%3C/script%3E%3Cbr/
    <form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>"> ==>
    <form method="post" action="/learn/learn-php/view/testXSS.php"/><script>alert('hacked')</script><br/">

    注：未成功测试通过！
-->


</body>
</html>