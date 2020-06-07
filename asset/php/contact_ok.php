<?
    include_once $_SERVER['DOCUMENT_ROOT']."/asset/php/db.php";

    $user_name = $_POST["user_name"];
    $user_email = $_POST["user_email"];
    $tit = $_POST["tit"];
    $msg = $_POST["msg"];

    $query = "INSERT INTO contact(user_name, user_email, tit, msg) VALUES ('$user_name','$user_email', '$tit', '$msg')";

    mq($query);

    echo "<script> alert('success'); </script>";
    echo "<script> location.href = 'contact.php' </script>";
?>