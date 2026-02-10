import React, { useState } from 'react';
import api from '../services/api';
import '../styles/addemployee.css';

const AddEmployeeDashboard = () => {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    department: '',
    salary: ''
  });
  const [errorMsg, setErrorMsg] = useState('');       // ← new
  const [success, setSuccess] = useState(false);      // ← new

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'salary' ? (value === '' ? '' : Number(value)) : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccess(false);

    // Quick client-side check
    if (!formData.name || !formData.position || !formData.department || !formData.salary) {
      setErrorMsg('Please fill all fields');
      return;
    }
    if (isNaN(formData.salary) || formData.salary <= 0) {
      setErrorMsg('Salary must be a positive number');
      return;
    }

    try {
      await api.post('/employees', formData);
      setSuccess(true);
      setFormData({ name: '', position: '', department: '', salary: '' });
      alert('Employee added successfully!');
    } catch (err) {
      console.error('Full error:', err);
      // Show nice message from server
      const serverError = err.response?.data?.message || 'Something went wrong. Check console.';
      setErrorMsg(serverError);
    }
  };

  return (
    <div className="add-employee-dashboard">
      <h1>Add Employee</h1>

      {errorMsg && <p style={{ color: 'red', fontWeight: 'bold' }}>{errorMsg}</p>}
      {success && <p style={{ color: 'limegreen' }}>Success!</p>}

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input name="position" placeholder="Position" value={formData.position} onChange={handleChange} required />
        <input name="department" placeholder="Department" value={formData.department} onChange={handleChange} required />
        <input
          name="salary"
          type="number"
          placeholder="Salary"
          value={formData.salary}
          onChange={handleChange}
          min="1"
          required
        />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployeeDashboard;