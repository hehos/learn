<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<a href="<?php echo $_SERVER['PHP_SELF'];?>?subject=PHP&web=W3school.com.cn">测试 $GET</a>
<br/>
<?php
    echo "Study " . $_GET['subject'] . " at " . $_GET['web'];
?>

</body>
</html>