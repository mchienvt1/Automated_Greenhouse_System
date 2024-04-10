import { useState } from 'react'
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from './pages/HomePage'
import NoPage from './pages/NoPage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage';

function App() {

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Login />,
  //   },
  //   {
  //     path: '/signup',
  //     element: <SignUp />,
  //   },
  //   {
  //     path: "/home",
  //     element: <HomePage />,
  //   },
  //   {
  //     path: '*',
  //     element: <NoPage />
  //   }
  // ]
  // )

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} /> 
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  )
}

export default App
