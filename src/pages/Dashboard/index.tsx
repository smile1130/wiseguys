import React from "react";

const Dashboard = () => {
  return <div className="h-[100vh] w-screen text-white">
    <div className="bg-black p-[20px]">
      <p className="text-[18px]">My Stats</p>
      <div className="flex justify-between gap-[10px] mt-3">
        <div className="border border-gray-500/70 w-[100%] rounded-md h-[105px] p-4">
          <p className="text-[#9F9F9F]">Earnings Till Date</p>
          
        </div>
        <div className="border border-gray-500/70 w-[100%] rounded-md h-[105px] p-4">
          <p className="text-[#9F9F9F]">$WGUYS Token Holdings</p>
        </div>
        <div className="border border-gray-500/70 w-[100%] rounded-md h-[105px] p-4">
          <p className="text-[#9F9F9F]">Voting Power</p>
        </div>
        <div className="border border-gray-500/70 w-[100%] rounded-md h-[105px] p-4">
          <p className="text-[#9F9F9F]">Votes Placed Till Date</p>
        </div>
      </div>
    </div>
    <div className="bg-black p-[20px]">
      <p className="text-[18px]">My Rewards</p>
      <div className="flex justify-between gap-[10px] mt-3">
        <div className="border border-gray-500/70 w-[50%] rounded-md h-[105px] p-4">
          <p className="text-[#9F9F9F]">Pending Rewards</p>
        </div>
      </div>
    </div>
    <div className="bg-black p-[20px]">
      <p className="text-[18px]">Vote History</p>
      <div className="flex justify-between gap-[10px] mt-3">
        <div className="border border-gray-500/70 w-[100%] rounded-md h-[105px] p-4">
          <p className="text-[#9F9F9F]">Pending Rewards</p>
        </div>
      </div>
    </div>
  </div>;
};

export default Dashboard;
