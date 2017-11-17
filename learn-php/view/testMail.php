<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

<?php
    if (isset($_REQUEST['email'])) {//if "email" is filled out, send email
        //send email
        $email = $_REQUEST['email'] ;
        $subject = $_REQUEST['subject'] ;
        $message = $_REQUEST['message'] ;
        mail( $email, "Subject: $subject",
        "message：$message", "From: test@qq.com" );
        echo "Thank you for using our mail form";
    } else  { //if "email" is not filled out, display the form
        echo "<form method='post' action='testMail.php'>
        收件人: <input name='email' type='text' /><br />
        Subject: <input name='subject' type='text' /><br />
        Message:<br />
          <textarea name='message' rows='15' cols='40'>
          </textarea><br />
        <input type='submit' />
        </form>";
    }
?>

</body>
</html>