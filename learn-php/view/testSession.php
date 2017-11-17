<?php session_start(); ?>

<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

<?php

echo session_id() . "<br>";
var_dump(isset($_SESSION['views']));

if(isset($_SESSION['views'])) {
    $_SESSION['views']=$_SESSION['views']+1;
} else {
    echo "第一次";
    $_SESSION['views']=1;
}
echo "Views=". $_SESSION['views'];

?>

</body>
</html>