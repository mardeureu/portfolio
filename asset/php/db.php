<?

    $host = "localhost";
    $user ="s11xx";
    $pw="tmsl66tmsl^^";
    $dbName="s11xx";
    $dbConnect=mysqli_connect($host, $user, $pw, $dbName);

    $dbcon = new mysqli($host, $user, $pw, $dbName);

    function mq($sql){
        global $dbcon;
        return $dbcon->query($sql);
    }

?>