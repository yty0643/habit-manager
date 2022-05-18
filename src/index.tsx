import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './index.css';
import Auth from './service/auth';
import Database from './service/database';

const auth: Auth = new Auth();
const db: Database = new Database();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <App auth={auth} db={db}/>
);


