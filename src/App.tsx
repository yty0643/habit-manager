import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from './pages/main/main';
import Auth from './service/auth';
import Database from './service/database';
import styles from './app.module.css';
import Login from './pages/login/login';
import Join from './pages/join/join';

function App({ auth, db }:{auth: Auth, db: Database}) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login auth={auth} />} />
          <Route path="/join" element={<Join />} />
          <Route path="/main" element={<Main auth={auth} db={db} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
