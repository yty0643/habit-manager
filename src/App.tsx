import './app.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './pages/login/login';
import Main from './pages/main/main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/main" element={<Main />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
