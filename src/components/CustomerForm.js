import React from "react";
import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button'; 
import Modal from "react-bootstrap/Modal";

const CustomerForm = ({ formData, handleInputChange, handleSubmit, showModal, handleClose }) => {
  return (
    <div>
      <Modal
        show={showModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add/Edit Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3" controlId="CustomerID">
              <Form.Label column sm="4">Customer ID</Form.Label>
              <Col sm="8">
                <Form.Control
                  name="CustomerID" // Added name
                  plaintext
                  placeholder="Customer ID"
                  value={formData.CustomerID}
                  onChange={handleInputChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="CompanyName">
              <Form.Label column sm="4">Company Name</Form.Label>
              <Col sm="8">
                <Form.Control
                  name="CompanyName" // Added name
                  plaintext
                  placeholder="Company Name"
                  value={formData.CompanyName}
                  onChange={handleInputChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="ContactName">
              <Form.Label column sm="4">Contact Name</Form.Label>
              <Col sm="8">
                <Form.Control
                  name="ContactName" // Added name
                  plaintext
                  placeholder="Contact Name"
                  value={formData.ContactName}
                  onChange={handleInputChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="Address">
              <Form.Label column sm="4">Address</Form.Label>
              <Col sm="8">
                <Form.Control
                  name="Address" // Added name
                  plaintext
                  placeholder="Address"
                  value={formData.Address}
                  onChange={handleInputChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="City">
              <Form.Label column sm="4">City</Form.Label>
              <Col sm="8">
                <Form.Control
                  name="City" // Added name
                  plaintext
                  placeholder="City"
                  value={formData.City}
                  onChange={handleInputChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="PostalCode">
              <Form.Label column sm="4">Postal Code</Form.Label>
              <Col sm="8">
                <Form.Control
                  name="PostalCode" // Added name
                  plaintext
                  placeholder="Postal Code"
                  value={formData.PostalCode}
                  onChange={handleInputChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="Country">
              <Form.Label column sm="4">Country</Form.Label>
              <Col sm="8">
                <Form.Control
                  name="Country" // Added name
                  plaintext
                  placeholder="Country"
                  value={formData.Country}
                  onChange={handleInputChange}
                />
              </Col>
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

CustomerForm.propTypes = {
  formData: PropTypes.shape({
    CustomerID: PropTypes.string,
    CompanyName: PropTypes.string,
    ContactName: PropTypes.string,
    Address: PropTypes.string,
    City: PropTypes.string,
    PostalCode: PropTypes.string,
    Country: PropTypes.string,
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default CustomerForm;