import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
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

    const handleLogin = () => {
        console.log('Username:', username);
        console.log('Password:', password);
        navigate('/home');
    };

    return (
    <div className="flex justify-center items-center h-screen bg-[#81D081]">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[350px]">
            <h2 className="text-2xl font-bold mb-4 text-center">Login</h2> 
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Username
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={handleUsernameChange}
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <div className="relative flex items-center"> 
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <button
                    className="absolute inset-y-0 pb-2 right-0 flex items-center px-4 text-gray-700 focus:outline-none"
                    onClick={handleToggleShowPassword}
                >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
                </div>
            </div>
            <div className="flex items-center justify-center"> 
                <button
                    className="bg-[#81D081] hover:bg-[#66BB66] text-white font-bold py-2 px-12 rounded focus:outline-none focus:shadow-outline mr-2"
                    type="button"
                    onClick={handleLogin}
                >
                Login
                </button>
            </div>
            <div className="text-center mt-4"> 
                <span className="text-gray-700 text-sm">Don't have an account? <Link to="/signup" className="text-cyan-500">Sign up</Link></span>
            </div>
        </div>
    </div>
    );
};

export default Login;