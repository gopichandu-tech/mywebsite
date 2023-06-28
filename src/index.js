import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

fetch("url").then(async response => {
  try {
   const data = await response.json()
   console.log('response data?', data)
 } catch(error) {
   console.log('Error happened here!')
   console.error(error)
 }
})
root.render(
  <React.StrictMode>
    <BrowserRouter><App /></BrowserRouter>
    
  </React.StrictMode>
);


reportWebVitals();
