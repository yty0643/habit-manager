import './app.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './pages/login/login';
import Main from './pages/main/main';
import Auth from './service/auth';

function App({ auth }:{auth: Auth}) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login auth={auth}/>}/>
        <Route path="/main" element={<Main />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
