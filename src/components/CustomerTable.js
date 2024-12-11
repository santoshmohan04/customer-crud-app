import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Table, Button, Pagination } from "react-bootstrap";
import CustomerForm from "./CustomerForm";

const CustomerTable = ({
  customers,
  totalCustomers,
  currentPage,
  perPage,
  fetchData,
  searchTerm,
  handleSearch,
  handlePageChange,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const [isUpdate, setIsUpdate] = useState(false);
  const [formData, setFormData] = useState({
    CustomerID: "",
    CompanyName: "",
    ContactName: "",
    Address: "",
    City: "",
    PostalCode: "",
    Country: "",
  });
  const totalPages = Math.ceil(totalCustomers / perPage);

  const API_URL = process.env.REACT_APP_API_URL;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isUpdate) {
      await axios.post(`${API_URL}/update.php`, formData);
    } else {
      await axios.post(`${API_URL}/create.php`, formData);
    }
    fetchData();
    setIsUpdate(false);
    setShowModal(false);
    setFormData({
      CustomerID: "",
      CompanyName: "",
      ContactName: "",
      Address: "",
      City: "",
      PostalCode: "",
      Country: "",
    });
  };

  const handleUpdate = (customer) => {
    setIsUpdate(true);
    setFormData(customer);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    await axios.post(`${API_URL}/delete.php`, { CustomerID: id });
    fetchData();
  };

  return (
    <div>
      <div className="d-flex justify-content-between mt-3 mb-3">
        <h2>Customer Table</h2>
        <input
          type="text"
          placeholder="Search Company Name"
          value={searchTerm}
          onChange={handleSearch}
        />
        <Button variant="primary" onClick={handleShow}>
          Add Customer
        </Button>
      </div>
      {customers.length === 0 && <p className="text-center text-warning">No customers found</p>}
      {customers.length > 0 &&  <Table striped bordered hover>
        <thead>
          <tr>
            <th>CustomerID</th>
            <th>CompanyName</th>
            <th>ContactName</th>
            <th>Address</th>
            <th>City</th>
            <th>PostalCode</th>
            <th>Country</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.CustomerID}>
              <td>{customer.CustomerID}</td>
              <td>{customer.CompanyName}</td>
              <td>{customer.ContactName}</td>
              <td>{customer.Address}</td>
              <td>{customer.City}</td>
              <td>{customer.PostalCode}</td>
              <td>{customer.Country}</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  onClick={() => handleUpdate(customer)}
                >
                  Update
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(customer.CustomerID)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>}

      {/* Pagination */}
      <Pagination>
        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>

      <CustomerForm
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        showModal={showModal}
        handleClose={handleClose}
      />
    </div>
  );
};

CustomerTable.propTypes = {
  customers: PropTypes.array.isRequired,
  totalCustomers: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  fetchData: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handlePageChange: PropTypes.func.isRequired,
};

export default CustomerTable;
