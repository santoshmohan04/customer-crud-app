<?php

$servername = "localhost";

$username = "epiz_28266684";

$password = "Hdfc@5250";

$dbname = "customerdata";



$conn = new mysqli($servername, $username, $password, $dbname);



if ($conn->connect_error) {

    die("Connection failed: " . $conn->connect_error);

}

?>

