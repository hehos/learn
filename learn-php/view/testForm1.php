<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

<h3>post 方式提交</h3>
<form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post">
    Name: <input type="text" name="name"><br>
    E-mail: <input type="text" name="email"><br>
    密码：<input type="password" name="pwd"><br>
    <input type="submit">
</form>
Welcome <?php echo $_POST["name"]; ?><br>
Your email address is: <?php echo $_POST["email"]; ?><br>
Your password is: <?php echo $_POST["pwd"]; ?>


<h3>post get 方式提交</h3>
<form action="<?php echo $_SERVER['PHP_SELF'];?>" method="get">
    Name: <input type="text" name="name"><br>
    E-mail: <input type="text" name="email"><br>
    密码：<input type="password" name="pwd"><br>
    <input type="submit">
</form>
Welcome <?php echo $_GET["name"]; ?><br>
Your email address is: <?php echo $_GET["email"]; ?><br>
Your password is: <?php echo $_GET["pwd"]; ?>


</body>
</html>