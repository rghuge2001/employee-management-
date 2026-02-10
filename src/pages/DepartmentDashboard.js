import React, { useEffect, useState } from 'react';
import api from '../services/api';
import '../styles/department.css';

const DepartmentDashboard = () => {
  const [departments, setDepartments] = useState({});

  useEffect(() => {
    api.get('/employees').then(res => {
      const grouped = res.data.reduce((acc, e) => {
        if (!acc[e.department]) acc[e.department] = [];
        acc[e.department].push(e);
        return acc;
      }, {});
      setDepartments(grouped);
    });
  }, []);

  return (
    <div className="department-dashboard">
      <h1>Department Dashboard</h1>
      {Object.keys(departments).map(dept => (
        <div key={dept}>
          <h2>{dept}</h2>
          <ul>
            {departments[dept].map(emp => (
              <li key={emp._id}>{emp.name} - {emp.position}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DepartmentDashboard;