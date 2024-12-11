<?php
include 'headers.php';
include 'db.php';

// Get CustomerID from URL parameters
$customerID = $_GET['CustomerID'];

// Validate the data (ensure CustomerID is not empty)
if (empty($customerID)) {
    die("CustomerID cannot be empty.");
}

// Prepare SQL statement to prevent SQL injection
$sql = "SELECT `CustomerID`, `CompanyName`, `ContactName`, `Address`, `City`, `PostalCode`, `Country` FROM `custinfo` WHERE `CustomerID` = ?";

// Initialize prepared statement
$stmt = $conn->prepare($sql);

// Check if the prepared statement was successfully created
if ($stmt === false) {
    die("Error preparing statement: " . $conn->error);
}

// Bind parameter (CustomerID)
$stmt->bind_param("s", $customerID);

// Execute the statement
$stmt->execute();

// Get the result
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $customer = $result->fetch_assoc();
    echo json_encode($customer);
} else {
    echo "No results found";
}

// Close the statement and connection
$stmt->close();
$conn->close();
?>
