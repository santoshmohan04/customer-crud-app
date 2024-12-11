import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomerTable from './components/CustomerTable';

const App = () => {
    const [customers, setCustomers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(5);

    useEffect(() => {
        fetchData();
    }, []);

    const API_URL = process.env.REACT_APP_API_URL;

    const fetchData = async () => {
        const response = await axios.get(`${API_URL}/read.php`);
        setCustomers(response.data);
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Reset to the first page on new search
    };

    const filteredCustomers = customers.filter((customer) =>
        customer.CompanyName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const offset = (currentPage - 1) * perPage;
    const currentCustomers = filteredCustomers.slice(offset, offset + perPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="container">
            <CustomerTable
                customers={currentCustomers}
                totalCustomers={filteredCustomers.length}
                currentPage={currentPage}
                perPage={perPage}
                fetchData={fetchData}
                searchTerm={searchTerm}
                handleSearch={handleSearch}
                handlePageChange={handlePageChange}
            />
        </div>
    );
};

export default App;