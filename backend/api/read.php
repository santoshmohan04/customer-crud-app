<?php
include 'headers.php';
include 'db.php';

// Prepare SQL statement to select all records
$sql = "SELECT `CustomerID`, `CompanyName`, `ContactName`, `Address`, `City`, `PostalCode`, `Country` FROM `custinfo`";

// Initialize prepared statement
$stmt = $conn->prepare($sql);

// Check if the prepared statement was successfully created
if ($stmt === false) {
    die("Error preparing statement: " . $conn->error);
}

// Execute the statement
$stmt->execute();

// Get the result
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $customers = array();

    // Fetch all rows and add them to the $customers array
    while ($row = $result->fetch_assoc()) {
        $customers[] = $row;
    }

    // Output the customers data in JSON format
    echo json_encode($customers);
} else {
    echo "0 results";
}

// Close the statement and connection
$stmt->close();
$conn->close();
?>