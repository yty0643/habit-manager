import { auth } from './firebase';
import { signInWithPopup, GithubAuthProvider, GoogleAuthProvider, FacebookAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

class Auth{
  signIn(providerToS: string) {
    let provider;
    switch(providerToS){
      case "Github":
        provider = new GithubAuthProvider();
        break;
      case "Google":
        provider = new GoogleAuthProvider();
        break;
      default :
        provider = new FacebookAuthProvider();
        break;
    }
    return signInWithPopup(auth, provider);
  };

  signInEP(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password)
  };

  signOut() {
    return signOut(auth);
  };

  signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password)
  };

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
  };
};

export default Auth;