import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './app/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(123);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


