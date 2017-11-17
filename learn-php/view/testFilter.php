
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
    <form action="testFileUpload.php" method="post"
          enctype="multipart/form-data">
        <label for="file">Filename:</label>
        <input type="file" name="file" id="file" />
        <br />
        <input type="submit" name="submit" value="Submit" />
    </form>

    <?php
        if(!filter_has_var(INPUT_POST, "url"))
        {
            echo("Input type does not exist");
        }
        else
        {
            $url = filter_input(INPUT_POST, "url", FILTER_SANITIZE_URL);
        }
    ?>
</body>
</html>