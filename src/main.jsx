import React from 'react';
import ReactDOM from 'react-dom'; 
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import App from './App';
import Dashboard from './pages/dashboard';
import Stocks from './pages/stocks';
import EmpLogs from './pages/loggs/empLogs';
import EmpDashboard from './pages/dashboard/Employee';
import EmployeeStocks from './pages/stocks/EmployeeStocks';
import Logs from './pages/loggs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/">   
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Stocks" element={<Stocks />} />
        <Route path="/Logs" element={<Logs />} />
        <Route path="/EmployeeLogs" element={<EmpLogs />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Employee" element={<EmpDashboard />} />
        <Route path="/EmployeeStocks" element={<EmployeeStocks />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
