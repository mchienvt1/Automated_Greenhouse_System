import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { http } from "../libs/http";

const SignUp = () => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleFullnameChange = (event) => {
    setFullname(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSignUp = () => {
    const data = {
      username,
      email,
      password,
      fullname,
    };

    http
      .post("/user/signup", data)
      .then((res) => {
        const user = res.data;
        console.log(user);
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/");
      })
      .catch((err) => {
        alert("User already exist");
        console.log("Error:", err);
      });
  };

  return (
    <div className="flex h-screen w-screen  items-center justify-center bg-[#81D081]">
      <div className="mb-4 w-[401px] rounded bg-white px-8 pb-8 pt-6 shadow-md">
        <h2 className="mb-4 text-center text-2xl font-bold">Sign Up</h2>
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="fullname"
          >
            Fullname
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="fullname"
            type="text"
            placeholder="Enter fullname"
            value={fullname}
            onChange={handleFullnameChange}
          />
        </div>
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
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="email"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-4">
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
        <div className="mb-6">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <div className="relative flex items-center">
            <input
              className="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <button
              className="absolute inset-y-0 right-0 flex items-center px-4 pb-2 text-gray-700 focus:outline-none"
              onClick={handleToggleShowConfirmPassword}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="focus:shadow-outline mr-2 rounded bg-[#81D081] px-12 py-2 font-bold text-white hover:bg-[#66BB66] focus:outline-none"
            type="button"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </div>
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-700">
            Already have an account?{" "}
            <a href="/" className="text-cyan-500">
              Login
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
