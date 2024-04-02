import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from './pages/HomePage'
import NoPage from './pages/NoPage'

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
    <>
      <RouterProvider router={router} />;
    </>
  )
}

export default App
