import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const userInfo = {
    name: "Antor Karmaker",
    email: "karmokarantor@gmail.com",
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
