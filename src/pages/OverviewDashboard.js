import React, { useEffect, useState } from 'react';
import StatsCard from '../components/StatsCard';
import api from '../services/api';
import '../styles/overview.css';

const OverviewDashboard = () => {
  const [stats, setStats] = useState({ totalEmployees: 0, departments: 0, averageSalary: 0 });

  useEffect(() => {
    api.get('/employees').then(res => {
      const employees = res.data;
      const total = employees.length;
      const depts = new Set(employees.map(e => e.department)).size;
      const avgSalary = employees.reduce((sum, e) => sum + e.salary, 0) / total || 0;
      setStats({ totalEmployees: total, departments: depts, averageSalary: avgSalary.toFixed(2) });
    });
  }, []);

  return (
    <div className="overview-dashboard">
      <h1>Overview Dashboard</h1>
      <div className="stats-grid">
        <StatsCard title="Total Employees" value={stats.totalEmployees} />
        <StatsCard title="Departments" value={stats.departments} />
        <StatsCard title="Average Salary" value={`$${stats.averageSalary}`} />
      </div>
    </div>
  );
};

export default OverviewDashboard;