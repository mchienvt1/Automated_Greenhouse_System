import React from "react";
import { Route, Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const user = localStorage.getItem("user");

  if (!user) {
    return <Navigate to="/login" replace={true} />;
  }

  return <>{children}</>;
}
