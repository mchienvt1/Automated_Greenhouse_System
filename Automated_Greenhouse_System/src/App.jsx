import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage'
import NoPage from './pages/NoPage'
import NavBar from './components/NavBar'
import DashBoard from './components/DashBoard';
import ScheduledTask from './pages/ScheduledTask';
import AddTask from './components/AddTask';
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage';
import DeviceManagementPage from './pages/DeviceManagementPage';




function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: <LoginPage  />,
    },  
    {
      path: "/signup",
      element: <SignUpPage />,
    },
    {
      path: "/scheduled_task",
      element: <ScheduledTask />,
      children:[{
      }
      ]
    },
    {
      path: "/scheduled_task/add_task",
      element: <AddTask />,
    },
    {
      path: "/device_management",
      element: <DeviceManagementPage />,
    },
    {
      path: '*',
      element: <NoPage />
    }
  ]
  )

    return (
      <div className='w-full flex'>
        <DashBoard />
        <div className='flex grow flex-col w-4/5' style={{backgroundColor: '#e3e3e3'}}>
          {/*Navigation bar*/}
          <NavBar />
          {/* Main Components */}
          {/* <RouterProvider router={router} /> */}
          <RouterProvider router={router} />
        </div>
      </div>

    )
}

export default App


