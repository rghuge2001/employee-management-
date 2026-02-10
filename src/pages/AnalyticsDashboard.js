import React, { useEffect, useState } from 'react';
import BarChart from '../components/Charts/BarChart';
import PieChart from '../components/Charts/PieChart';
import LineChart from '../components/Charts/LineChart';
import api from '../services/api';
import '../styles/analytics.css';

const AnalyticsDashboard = () => {
  const [data, setData] = useState({
    departments: {},
    salaries: [],
    hires: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await api.get('/employees');
        const employees = res.data || [];

        // Department count
        const deptCount = employees.reduce((acc, emp) => {
          const dept = emp.department || 'Unknown';
          acc[dept] = (acc[dept] || 0) + 1;
          return acc;
        }, {});

        // Salaries array
        const salaries = employees
          .filter(emp => typeof emp.salary === 'number' && !isNaN(emp.salary))
          .map(emp => emp.salary);

        // Hire years
        const hires = employees
          .filter(emp => emp.hireDate)
          .map(emp => new Date(emp.hireDate).getFullYear());

        setData({
          departments: deptCount,
          salaries,
          hires
        });
      } catch (err) {
        console.error('Analytics fetch error:', err);
        setError('Failed to load analytics data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="analytics-dashboard">
        <h1>Analytics Dashboard</h1>
        <div className="loading">Loading analytics data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="analytics-dashboard">
        <h1>Analytics Dashboard</h1>
        <div className="error-message">{error}</div>
      </div>
    );
  }

  const hasData = 
    Object.keys(data.departments).length > 0 ||
    data.salaries.length > 0 ||
    data.hires.length > 0;

  if (!hasData) {
    return (
      <div className="analytics-dashboard">
        <h1>Analytics Dashboard</h1>
        <div className="no-data">
          No employee data available yet.<br />
          Add some employees to see analytics.
        </div>
      </div>
    );
  }

  return (
    <div className="analytics-dashboard">
      <h1>Analytics Dashboard</h1>
      <p className="subtitle">Insights based on {data.salaries.length} employees</p>

      <div className="charts-grid">
        {/* Bar Chart - Salaries */}
        <div className="chart-container">
          <h2>Salary Distribution</h2>
          {data.salaries.length > 0 ? (
            <BarChart data={data.salaries} label="Salaries" />
          ) : (
            <div className="no-chart-data">No salary data available</div>
          )}
        </div>

        {/* Pie Chart - Departments */}
        <div className="chart-container">
          <h2>Department Distribution</h2>
          {Object.keys(data.departments).length > 0 ? (
            <PieChart 
              data={Object.values(data.departments)} 
              labels={Object.keys(data.departments)} 
            />
          ) : (
            <div className="no-chart-data">No department data available</div>
          )}
        </div>

        {/* Line Chart - Hires over time */}
        <div className="chart-container">
          <h2>Hires Over Time</h2>
          {data.hires.length > 0 ? (
            <LineChart data={data.hires} label="Hires Over Time" />
          ) : (
            <div className="no-chart-data">No hire date data available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;