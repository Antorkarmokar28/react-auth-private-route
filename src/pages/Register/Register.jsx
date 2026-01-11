import { FaEye } from "react-icons/fa";
import { Link } from "react-router";
import { use } from "react";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
  const { createUser } = use(AuthContext);
  const handleSignUpForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);
    // create user with firebase
    createUser(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container mx-auto mt-6">
      <h1 className="text-6xl mb-6 text-center">Please Sign Up</h1>
      <form
        className="w-1/4 mx-auto p-4 rounded-2xl shadow-2xl space-y-6"
        onSubmit={handleSignUpForm}
      >
        <input
          className="w-full p-2 rounded"
          type="text"
          name="name"
          placeholder="Name"
        />
        <br />
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
            type="password"
            name="password"
            placeholder="Password"
          />
          <button className="btn btn-sm absolute top-1 right-2">
            <FaEye />
          </button>
        </div>
        <label className="label">
          <input type="checkbox" name="terms" className="checkbox" />
          Accept Our Terms and Condition
        </label>
        <br />
        <input
          className="w-full btn bg-violet-600 hover:bg-violet-500 text-gray-200"
          type="submit"
          value="Sign Up"
        />
        <br />
        <p>
          Do you have a account? then please{" "}
          <Link className="text-blue-600 font-bold" to="/login">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
