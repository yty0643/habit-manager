import { auth } from './firebase';
import { signInWithPopup, GithubAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

class Auth{
  signIn() {
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider)
  }

  signOut() {
    return signOut(auth)
  }

  getUser() {
    return new Promise((resolve, reject) => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          resolve(user);
        } else {
          reject(new Error("no user"));
        }
      })
    })
  }
};

export default Auth;