import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-bgPrimary px-6 py-4">
      <div className="flex gap-[70px]">
        <Link to="/">
          <img src="/logo.png" alt="logo" className="" />
        </Link>
        <span className="text-[#BCBCBC] text-18 font-semibold">Home</span>
      </div>
      <button className="bg-[#0057BD] text-white px-4 py-2 rounded-lg">
        Connect Wallet
      </button>
    </div>
  );
};

export default Navbar;
