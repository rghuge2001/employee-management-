import React, { useEffect, useState } from 'react';
import EmployeeCard from '../components/EmployeeCard';
import api from '../services/api';
import '../styles/employee.css';

const EmployeeDashboard = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    api.get('/employees').then(res => setEmployees(res.data));
  }, []);

  const handleDelete = (id) => {
    api.delete(`/employees/${id}`).then(() => {
      setEmployees(employees.filter(e => e._id !== id));
    });
  };

  return (
    <div className="employee-dashboard">
      <h1>Employee Management</h1>
      <div className="employee-list">
        {employees.map(emp => (
          <EmployeeCard key={emp._id} employee={emp} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default EmployeeDashboard;