import React from "react";
import { Navigate } from "react-router-dom";

export default function Guard({ children }) {
  const user = localStorage.getItem("user");
  if (user) {
    return <Navigate to="/" replace={true} />;
  }
  return <>{children}</>;
}
