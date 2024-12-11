<?php
include 'headers.php';
include 'db.php';

// Get raw POST data (JSON)
$data = json_decode(file_get_contents('php://input'), true);

// Check if the required field is present
if (!isset($data['CustomerID'])) {
    die("Missing required field: CustomerID.");
}

// Retrieve data from decoded JSON
$customerID = $data['CustomerID'];

// Validate the data (ensure CustomerID is not empty)
if (empty($customerID)) {
    die("CustomerID cannot be empty.");
}

// Prepare SQL statement to prevent SQL injection
$sql = "DELETE FROM `custinfo` WHERE `CustomerID` = ?";

// Initialize prepared statement
$stmt = $conn->prepare($sql);

// Check if the prepared statement was successfully created
if ($stmt === false) {
    die("Error preparing statement: " . $conn->error);
}

// Bind parameter (CustomerID)
$stmt->bind_param("s", $customerID);

// Execute the statement
if ($stmt->execute()) {
    echo "Record deleted successfully";
} else {
    echo "Error deleting record: " . $stmt->error;
}

// Close the statement and connection
$stmt->close();
$conn->close();
?>