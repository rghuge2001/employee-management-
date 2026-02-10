import React from 'react';

const EmployeeCard = ({ employee, onDelete }) => {
  return (
    <div className="employee-card">
      <h3>{employee.name}</h3>
      <p>Position: {employee.position}</p>
      <p>Department: {employee.department}</p>
      <p>Salary: ${employee.salary}</p>
      <button onClick={() => onDelete(employee._id)}>Delete</button>
    </div>
  );
};

export default EmployeeCard;