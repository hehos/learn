<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>


<?php
// Print a cookie
echo "设置的Cookie是：" . $_COOKIE["user"] . "<br>";

// A way to view all cookies
print_r($_COOKIE);
echo "<br>";
if (isset($_COOKIE["user"]))
    echo "Welcome " . $_COOKIE["user"] . "!<br />";
else
    echo "Welcome guest!<br />";
?>

</body>
</html>