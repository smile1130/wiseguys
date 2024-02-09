import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="flex">
        <Sidebar />
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
