import React from "react";
import UserSidebar from "../container/Sidebar";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="layout-container">
        <UserSidebar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
