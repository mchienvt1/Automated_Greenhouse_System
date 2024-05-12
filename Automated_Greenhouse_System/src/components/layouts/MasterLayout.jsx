import React, { useState } from "react";
import DashBoard from "../DashBoard";
import NavBar from "../NavBar";

export default function MasterLayout({ children }) {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  return (
    <>
      <DashBoard
        toggleSidebar={toggleSidebar}
        setToggleSidebar={setToggleSidebar}
      />
      <div className="flex-grow">
        <NavBar
          setToggleSidebar={setToggleSidebar}
          toggleSidebar={toggleSidebar}
        />
        {children}
      </div>
    </>
  );
}
