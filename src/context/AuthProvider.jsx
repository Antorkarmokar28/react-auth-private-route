import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.init";

const AuthProvider = ({ children }) => {
  // create user utilities function with firebase
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // sign In user utilities function with firebase
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const userInfo = {
    createUser,
    signInUser,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
