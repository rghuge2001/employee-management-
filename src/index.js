import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/common.css'; // Global styles with background
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);