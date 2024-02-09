import React from "react";

const BuyToken = () => {
  return (
    <div className="bg-black rounded-[10px] px-8 py-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src="/token.png" alt="token" />
        <div className="text-14 font-semibold flex flex-col justify-between">
          <span className="text-white ">$WGUYS</span>
          <span className="text-[#00FF85] text-14">$0.000035</span>
        </div>
      </div>
      <button className="bg-[#00FF8599] text-14 text-white font-bold py-2 px-6 rounded-[5px]">
        Buy
      </button>
    </div>
  );
};

export default BuyToken;
