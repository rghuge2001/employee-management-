import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li><Link to="/">Overview</Link></li>
        <li><Link to="/employees">Employees</Link></li>
        <li><Link to="/analytics">Analytics</Link></li>
        <li><Link to="/add-employee">Add Employee</Link></li>
        <li><Link to="/departments">Departments</Link></li>
      </ul>
    </nav>
  );
};

export default Sidebar;