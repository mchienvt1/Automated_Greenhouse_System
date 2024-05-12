import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { http } from "../libs/http";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    const data = {
      username,
      password,
    };

    http
      .post("/user/login", data)
      .then((res) => {
        const user = res.data;
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/");
      })
      .catch((err) => {
        alert("Username or password is incorrect");
        console.log("Error:", err);
      });
  };

  return (
    <div className="mb-4 w-[350px] rounded bg-white px-8 pb-8 pt-6 shadow-md">
      <h2 className="mb-4 text-center text-2xl font-bold">Login</h2>
      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="username"
        >
          Username
        </label>
        <input
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          id="username"
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div className="mb-6">
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="password"
        >
          Password
        </label>
        <div className="relative flex items-center">
          <input
            className="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button
            className="absolute inset-y-0 right-0 flex items-center px-4 pb-2 text-gray-700 focus:outline-none"
            onClick={handleToggleShowPassword}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="focus:shadow-outline mr-2 rounded bg-[#81D081] px-12 py-2 font-bold text-white hover:bg-[#66BB66] focus:outline-none"
          type="button"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
      <div className="mt-4 text-center">
        <span className="text-sm text-gray-700">
          Don't have an account?{" "}
          <a href="/signup" className="text-cyan-500">
            Sign up
          </a>
        </span>
      </div>
    </div>
  );
};

export default Login;
