import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//FontAwesome 
import 'font-awesome/css/font-awesome.min.css';
// Bootstrap File
import "bootstrap/dist/css/bootstrap.min.css";
// Custom CSS
import './css/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);