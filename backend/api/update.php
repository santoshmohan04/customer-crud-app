<?php
include 'headers.php';
include 'db.php';

// Get raw POST data (JSON)
$data = json_decode(file_get_contents('php://input'), true);

// Check if the required fields are present
if (!isset($data['CustomerID']) || !isset($data['CompanyName']) || !isset($data['ContactName']) || !isset($data['Address']) || !isset($data['City']) || !isset($data['PostalCode']) || !isset($data['Country'])) {
    die("Missing required fields.");
}

// Retrieve data from decoded JSON
$customerID = $data['CustomerID'];
$companyName = $data['CompanyName'];
$contactName = $data['ContactName'];
$address = $data['Address'];
$city = $data['City'];
$postalCode = $data['PostalCode'];
$country = $data['Country'];

// Validate the data (ensure CustomerID is not empty)
if (empty($customerID)) {
    die("CustomerID cannot be empty.");
}

// Prepare SQL statement to prevent SQL injection
$sql = "UPDATE `custinfo` SET `CompanyName` = ?, `ContactName` = ?, `Address` = ?, `City` = ?, `PostalCode` = ?, `Country` = ? WHERE `CustomerID` = ?";

// Initialize prepared statement
$stmt = $conn->prepare($sql);

// Check if the prepared statement was successfully created
if ($stmt === false) {
    die("Error preparing statement: " . $conn->error);
}

// Bind parameters (all are strings in this case)
$stmt->bind_param("sssssss", $companyName, $contactName, $address, $city, $postalCode, $country, $customerID);

// Execute the statement
if ($stmt->execute()) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . $stmt->error;
}

// Close the statement and connection
$stmt->close();
$conn->close();
?>