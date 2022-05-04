import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Error404 from './404';

import './scss/app.scss'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<App />} />
        <Route path='*' element={<Error404 />} />



      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


