import React from 'react';
import ReactDOM from 'react-dom/client';
import './output.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Jewelry from './pages/jewelry';
import Portfolio from './pages/xx_admin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Routes path="/">
          <Route index element={<Home />} />
          <Route path='jewelry' element={<Jewelry />} />
          <Route path='personal-website' element={<Portfolio />} />
        </Routes>
    </Router>
    {/* <Router>
      <Practice />
    </Router> */}
      
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
