import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NoPage from "./pages/NoPage";
import NavBar from "./components/NavBar";
import DashBoard from "./components/DashBoard";
import ScheduledTask from "./pages/ScheduledTask";
import AddTask from "./components/AddTask";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import DeviceManagementPage from "./pages/DeviceManagementPage";
import MasterLayout from "./components/layouts/MasterLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import Guard from "./components/Guard";

function App() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <MasterLayout>
            <HomePage />
          </MasterLayout>
        </ProtectedRoute>
      ),
    },
    {
      path: "/login",
      element: (
        <Guard>
          <LoginPage />
        </Guard>
      ),
    },
    {
      path: "/signup",
      element: (
        <Guard>
          <SignUpPage />
        </Guard>
      ),
    },
    {
      path: "/scheduled_task",
      element: (
        <ProtectedRoute>
          <MasterLayout>
            <ScheduledTask />
          </MasterLayout>
        </ProtectedRoute>
      ),
      children: [{}],
    },
    {
      path: "/scheduled_task/add_task",
      element: (
        <ProtectedRoute>
          <MasterLayout>
            <AddTask />
          </MasterLayout>
        </ProtectedRoute>
      ),
    },
    {
      path: "/device_management",
      element: (
        <MasterLayout>
          <DeviceManagementPage />
        </MasterLayout>
      ),
    },
    {
      path: "*",
      element: <NoPage />,
    },
  ]);

  return (
    <div className="flex w-full" style={{ backgroundColor: "#e3e3e3" }}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
