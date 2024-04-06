import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from './pages/HomePage'
import NoPage from './pages/NoPage'
import NavBar from './components/NavBar'
import DashBoard from './components/DashBoard';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: '*',
      element: <NoPage />
    }
  ]
  )

  return (
    <div className='flex flex-row'>
      <div className='w-1/5'>
        <DashBoard />
      </div>
      <div className='w-4/5'>
        {/*Navigation bar*/}
        <NavBar />
        {/* Main Components */}
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App
