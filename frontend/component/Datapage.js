import React, { useEffect, useState } from 'react';
import './Datapage.css';
import Navbar from './Navbar';

const Datapage = () => {
  const [data, setData] = useState([]);
  const [filtereddata, setFiltereddata] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5;

  // Fetch data on component mount
  useEffect(() => {
    fetch("http://localhost:8080/datatable")
      .then(res => res.json())
      .then(data => {
        setData(data);
        setFiltereddata(data); // Initialize filtered data
      })
      .catch(err => console.log(err));
  }, []);

  // Handle search
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    
    const filteredData = data.filter((user) =>
      user.name.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value) ||
      user.id.toString().includes(value) ||
      user.address.toLowerCase().includes(value) // Assuming address is a simple string
    );

    setFiltereddata(filteredData);
    setCurrentPage(1);
  };

  // Handle sorting
  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });

    const sortedData = [...filtereddata].sort((a, b) => {
      const aValue = key.includes('.') ? key.split('.').reduce((acc, part) => acc[part], a) : a[key];
      const bValue = key.includes('.') ? key.split('.').reduce((acc, part) => acc[part], b) : b[key];

      if (aValue < bValue) return direction === 'ascending' ? -1 : 1;
      if (aValue > bValue) return direction === 'ascending' ? 1 : -1;
      return 0;
    });
    setFiltereddata(sortedData);
  };

  // Helper function to get the sort symbol
  const getSortSymbol = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'ascending' ? ' ▲' : ' ▼';
    }
    return '▲'; // No symbol if not sorted
  };

  // Pagination logic
  const indexOfLastUser = currentPage * dataPerPage;
  const indexOfFirstUser = indexOfLastUser - dataPerPage;
  const currentData = filtereddata.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(filtereddata.length / dataPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className='datacontent'>
        <div className="search-sort-container">
        {/* <i className="fa fa-search"></i> */}
        {/* <i class="fa fa-search" style="font-size:48px;color:red"></i> */}
          <input
            type="text"
            id='sb'
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <i className="fa fa-search"></i>
        </div>

        <div className='tablecontent'>
          <table>
            <thead>
              <tr>
                <th onClick={() => handleSort('id')}>DriverID {getSortSymbol('id')}</th>
                <th onClick={() => handleSort('name')}>DriverName {getSortSymbol('name')}</th>
                <th onClick={() => handleSort('email')}>DriverEmail {getSortSymbol('email')}</th>
                <th onClick={() => handleSort('address')}>DriverAddress {getSortSymbol('address')}</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((d, i) => (
                <tr key={i} className="table-row">
                  <td className="table-cell">{d.id}</td>
                  <td className="table-cell">{d.name}</td>
                  <td className="table-cell">{d.email}</td>
                  <td className="table-cell">{d.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination">
          <span>Page {currentPage} of {totalPages}</span>
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Previous
          </button>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Datapage;
