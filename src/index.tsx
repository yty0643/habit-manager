import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './pages/login/login';
import Main from './pages/main/main';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/main" element={<Main />}/>
      </Routes>
    <App />
  </BrowserRouter>
  </React.StrictMode>
);


