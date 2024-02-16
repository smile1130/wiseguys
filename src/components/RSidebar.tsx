import React from "react";
import BuyToken from "./BuyToken";
import SwapToken from "./SwapToken";

type RSidebarProps = {
    isSwapToken: boolean;
};

const RSidebar = ({ isSwapToken }: RSidebarProps) => {
    return (
        <div className="bg-bgPrimary min-w-[350px] flex flex-col gap-4 pe-4 pb-4 max-sm:hidden">
            <BuyToken />
            {isSwapToken && <SwapToken />}
            <div className="bg-black rounded-[10px] grow"></div>
        </div>
    );
};

export default RSidebar;
