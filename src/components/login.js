import React, { useState } from "react";

import PasswordIcon from "../assets/ic_password.svg";
import { login } from "../store/authSlice";
import loginImage from "../assets/login-image.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Please fill in both fields");
    } else {
      try {
        await dispatch(login({ username, password })).unwrap();
        navigate("/home");
      } catch (err) {
        setError("Invalid username or password");
      }
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Section with Image */}
      <div className="w-1/2 flex items-center justify-center bg-white">
        <img src={loginImage} alt="Login Visual" className="h-3/4" />
      </div>

      {/* Right Section with Login Form */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-blue-50 px-10">
        <h2 className="text-4xl font-bold text-blue-500 mb-2">DOMECARE</h2>
        <p className="text-gray-500 mb-6">
          Welcome back! Please login to your account.
        </p>

        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="User Name or Number Phone"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
            />
          </div>

          <div className="mb-4">
            <img src={PasswordIcon} alt="Login Visual" className="" />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full p-3 border ${
                error ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:border-blue-400`}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>

          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <input type="checkbox" id="rememberMe" className="mr-2" />
              <label htmlFor="rememberMe" className="text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <a href="/" className="text-sm text-blue-500">
              Forgot Password?
            </a>
          </div>

          <button
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
            type="submit"
          >
            Login
          </button>

          <p className="text-center text-sm text-gray-500 mt-4">
            Don't have an account?{" "}
            <a href="/" className="text-blue-500">
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
