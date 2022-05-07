import { auth } from './firebase';
import { signInWithPopup, GithubAuthProvider, GoogleAuthProvider, FacebookAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

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

  signOut() {
    return signOut(auth);
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