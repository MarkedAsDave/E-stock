import React from 'react';
import App from './App';
import Dashboard from './pages/dashboard';
import Stocks from './pages/stocks';
import EmpLogs from './pages/loggs/empLogs';
import EmpDashboard from './pages/dashboard/Employee';
import EmployeeStocks from './pages/stocks/EmployeeStocks';
import Logs from './pages/loggs';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
      {
          path: '/',
          element: <App/>,
      },
        {
        path: "/Stocks",
        element: <Stocks/>,
      },
      {
        path: "/Logs",
        element: <Logs/>,
      },
      {
        path: "/EmployeeLogs",
        element: <EmpLogs/>,
      },
    {
      path: "/Dashboard",
      element: <Dashboard />,
    },
    {
      path: "/Employee",
        element: <EmpDashboard/>,
    },
    {
      path: "/EmployeeStocks",
        element: <EmployeeStocks/>,
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals