import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from './pages/main/main';
import Auth from './service/auth';
import Database from './service/database';
import styles from './app.module.css';
import SignIn from './VC/sign_in/sign_in';

function App({ auth, db }:{auth: Auth, db: Database}) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn auth={auth} />} />
          <Route path="/main" element={<Main auth={auth} db={db} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
