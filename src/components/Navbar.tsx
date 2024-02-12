import { useWeb3Modal } from "@web3modal/scaffold-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAccount } from "wagmi";

const Navbar = () => {
  const location = useLocation();
  const { open } = useWeb3Modal();
  const { isConnected, address } = useAccount();
  let title;
  switch (location.pathname) {
    case "/":
      title = "Home";
      break;
    case "/Dashboard":
      title = "Dashboard";
      break;
    case "/Partners":
      title = "Partners";
      break;
    case "/Stake":
      title = "Stake";
      break;
    default:
      // handle other cases if needed
      break;
  }
  return (
    <div className="flex items-center justify-between bg-bgPrimary px-6 py-4 relative">
      <div className="flex gap-[70px]">
        <Link to="/">
          <img src="/logo.png" alt="logo" />
        </Link>
        <span className="text-[#BCBCBC] text-18 font-semibold">{title}</span>
      </div>
      <div className="absolute w-[160px] h-[1px] bg-gray-500/70 left-5 bottom-0"></div>
      {isConnected ? (
        <div className="bg-[#0057BD] text-white px-4 py-2 rounded-lg">
          {address?.substring(0, 4)}...{address?.substr(-4)}
        </div>
      ) : (
        <div
          className="bg-[#0057BD] text-white px-4 py-2 rounded-lg cursor-pointer"
          onClick={() => open()}
        >
          Connect Wallet
        </div>
      )}
    </div>
  );
};

export default Navbar;
