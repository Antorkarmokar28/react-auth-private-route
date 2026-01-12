import { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { signInUser } = use(AuthContext);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState("");
  const navigate = useNavigate();
  // handle sign in button and sign in function
  const handleSignInForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // clear the success message and error message
    setSuccess(false);
    setError("");
    // user sign in functionality added
    signInUser(email, password)
      .then((result) => {
        setSuccess(result.user);
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="container mx-auto mt-6">
      <h1 className="text-6xl mb-6 text-center">Please Sign Up</h1>
      <form
        className="w-1/4 mx-auto p-4 rounded-2xl shadow-2xl space-y-6"
        onSubmit={handleSignInForm}
      >
        <input
          className="w-full p-2 rounded"
          type="email"
          name="email"
          placeholder="Email"
        />
        <br />
        <div className="relative">
          <input
            className="w-full p-2 rounded"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="btn btn-sm absolute top-1 right-2"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <br />
        <button className="underline cursor-pointer">Forgot Password</button>
        <br />
        <input
          className="w-full btn bg-violet-600 hover:bg-violet-500 text-gray-200"
          type="submit"
          value="Sign In"
        />
        <p>
          Are you new user? Then Please{" "}
          <Link className="text-blue-600 font-bold" to="/register">
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-600 font-bold">{error}</p>}
        {success && (
          <p className="text-green-600 font-bold">
            User sign in is successfuly
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
