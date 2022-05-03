import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './index.css';
import Auth from './service/auth';

const auth: Auth = new Auth();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App auth={auth}/>
  </React.StrictMode>
);


