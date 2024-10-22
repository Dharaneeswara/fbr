import React, { useEffect, useState } from 'react';
import UserData from './UserData';
import './Home.css';
import Navbar from './component/Navbar';
import searchicon from './Assets/search.png'
const API = "https://jsonplaceholder.typicode.com/users";

const Home = () => {

  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const fetchUser = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setUsers(data);
        setFilteredUsers(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchUser(API);
  }, []);

  // Handle search
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filteredData = users.filter((user) =>
      user.name.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value) ||
      user.id.toString().includes(value) ||
      user.address.city.toLowerCase().includes(value)
    );
    setFilteredUsers(filteredData);
    setCurrentPage(1);
  };

  // Handle sorting
  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });

    const sortedData = [...filteredUsers].sort((a, b) => {
      // Handling nested properties like 'address.city'
      const aValue = key.includes('.') ? key.split('.').reduce((acc, part) => acc[part], a) : a[key];
      const bValue = key.includes('.') ? key.split('.').reduce((acc, part) => acc[part], b) : b[key];

      if (aValue < bValue) return direction === 'ascending' ? -1 : 1;
      if (aValue > bValue) return direction === 'ascending' ? 1 : -1;
      return 0;
    });
    setFilteredUsers(sortedData);
  };

  // Helper function to get the sort symbol
  const getSortSymbol = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'ascending' ? ' ▲' : ' ▼';
    }
    return ''; // No symbol if not sorted
  };

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
    <div>
      <Navbar/>
    </div>
    {/* <div className="container">
      <div className="row">
        <ul className="dropdown">
        <div className="logo">
          <h1>DDS</h1>
        </div>
          <Link to='/navbar'>About</Link>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Details <i className="fas fa-caret-down"></i></a>
            <ul className="product">
              <li><a href="#">Mobiles</a></li>
              <li><a href="#">Drowsing Details <i className="fas fa-caret-right"></i></a>
                <ul className="laptop">
                  <li><a href="#">HP</a></li>
                  <li><a href="#">LENOVA</a></li>
                  <Link to='/home'>In table</Link>
                </ul>
              </li>
              <li><a href="#">Desktop</a></li>
            </ul>
          </li>
          <li><a href="#">Help</a></li>
          <Link to='/' className='btn btn-default border border-primary  bg-light text-decoratio-none'>Logout</Link>
        </ul>
      </div>
    </div> */}


      <div className="search-sort-container">
        <img src={searchicon} alt='search' id='searchicon'/>
        <input
          type="text"
          id='sb'
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className='tablecontent'>
        <table>
          <thead>
            <tr>
              <th onClick={() => handleSort('id')}>
                DriverID {getSortSymbol('id')}
              </th>
              <th onClick={() => handleSort('name')}>
                DriverName {getSortSymbol('name')}
              </th>
              <th onClick={() => handleSort('email')}>
                DriverEmail {getSortSymbol('email')}
              </th>
              <th onClick={() => handleSort('address.city')}>
                DriverAddress {getSortSymbol('address.city')}
              </th>
            </tr>
          </thead>

          <tbody>
            <UserData users={currentUsers} />
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </>
  );
};

export default Home;
