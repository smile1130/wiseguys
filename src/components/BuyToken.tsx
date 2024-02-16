import React from "react";

type BuyTokenProps = {
    handleClickBuy?: (s: boolean) => void;
};

const BuyToken = ({ handleClickBuy }: BuyTokenProps) => {
    return (
        <div className="bg-black rounded-[10px] px-8 max-sm:px-4 py-6 max-sm:py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <img src="/token.png" alt="token" />
                <div className="text-14 font-semibold flex flex-col justify-between">
                    <span className="text-white ">$WGUYS</span>
                    <span className="text-[#00FF85] text-14">$0.000035</span>
                </div>
            </div>
            <button
                className="bg-[#00FF8599] text-14 text-white font-bold py-2 px-6 rounded-[5px]"
                onClick={() => handleClickBuy && handleClickBuy(true)}
            >
                Buy
            </button>
        </div>
    );
};

export default BuyToken;
