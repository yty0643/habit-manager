import './app.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './pages/login/login';
import Main from './pages/main/main';
import Auth from './service/auth';
import Database from './service/database';

function App({ auth, db }:{auth: Auth, db: Database}) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login auth={auth}/>}/>
        <Route path="/main" element={<Main auth={auth} db={db}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
