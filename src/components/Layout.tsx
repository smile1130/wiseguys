import React from "react";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import RSidebar from "./RSidebar";

const Layout = () => {
  const location = useLocation();
  let isSwapToken;
  if (location.pathname === "/") {
    isSwapToken = true;
  } else {
    isSwapToken = false;
  }
  return (
    <>
      <Navbar />
      <main className="flex">
        <Sidebar />
        <Outlet />
        {(location.pathname === "/Dashboard" || location.pathname === "/") && (
          <RSidebar isSwapToken={isSwapToken} />
        )}
      </main>
    </>
  );
};

export default Layout;
