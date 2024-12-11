<?php

header("Access-Control-Allow-Origin: *"); // Allow requests from your development origin

header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); // Specify allowed methods

header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With"); // Specify allowed headers



// Handle preflight OPTIONS request

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {

    http_response_code(200);

    exit;

}

?>