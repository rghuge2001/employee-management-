import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OverviewDashboard from './pages/OverviewDashboard';
import EmployeeDashboard from './pages/EmployeeDashboard';
import AnalyticsDashboard from './pages/AnalyticsDashboard';
import AddEmployeeDashboard from './pages/AddEmployeeDashboard';
import DepartmentDashboard from './pages/DepartmentDashboard';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import './styles/common.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-content">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<OverviewDashboard />} />
              <Route path="/employees" element={<EmployeeDashboard />} />
              <Route path="/analytics" element={<AnalyticsDashboard />} />
              <Route path="/add-employee" element={<AddEmployeeDashboard />} />
              <Route path="/departments" element={<DepartmentDashboard />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;