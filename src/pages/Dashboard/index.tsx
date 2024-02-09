import React from "react";

const Dashboard = () => {
  return (
    <div className="bg-bgPrimary w-full pe-4 pb-4 text-white">
      <div className="bg-black rounded-[10px] py-6 px-8 flex flex-col gap-8 h-full">
        <div className="">
          <p className="text-18">My Stats</p>
          <div className="flex gap-2 text-14 mt-3">
            <div className="border border-gray-500/70 flex flex-col justify-between rounded-md p-4 gorw">
              <p className="text-[#9F9F9F]">Earnings Till Date</p>
              <div className="flex gap-2 items-center">
                <span className="text-32 text-white font-bold">20.2 ETH</span>
                <span className="text-[#00FF85] text-24 font-bold">
                  ($50,150.54)
                </span>
              </div>
            </div>
            <div className="border border-gray-500/70 flex flex-col justify-between rounded-md p-4 gorw">
              <p className="text-[#9F9F9F]">$WGUYS Token Holdings</p>
              <span className="text-16 font-bold">123,456.789 </span>
            </div>
            <div className="border border-gray-500/70 flex flex-col justify-between rounded-md p-4 grow">
              <p className="text-[#9F9F9F]">Voting Power</p>
              <span className="text-16 font-bold">3x</span>
            </div>
            <div className="border border-gray-500/70 flex flex-col justify-between rounded-md p-4 grow">
              <p className="text-[#9F9F9F]">Votes Placed Till Date</p>
              <span className="text-16 font-bold">123,456.789 </span>
            </div>
          </div>
        </div>
        <div className="">
          <p className="text-[18px]">My Rewards</p>
          <div className="flex justify-between gap-2 mt-3">
            <div className="border border-gray-500/70 w-1/2 rounded-md p-4 flex items-center justify-between">
              <div>
                <p className="text-[#9F9F9F]">Pending Rewards</p>
                <div className="flex gap-2 items-center">
                  <span className="text-24 text-white font-bold">20.2 ETH</span>
                  <span className="text-[#00FF85] text-16 font-bold">
                    ($50,150.54)
                  </span>
                </div>
              </div>

              <button className="bg-[#222222] w-[150px] rounded-md p-4 border border-gray-500/70">
                Claim Rewards
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 grow">
          <p className="text-[18px]">Vote History</p>

          <div className="relative overflow-x-auto border border-gray-700 rounded-[10px] py-2 px-6 h-full">
            <table className="w-full text-sm text-left rtl:text-right text-14 font-medium">
              <thead className="text-xs uppercase text-[#9F9F9F]">
                <tr className="border-b border-gray-700">
                  <th scope="col" className="px-6 py-2">
                    Event
                  </th>
                  <th scope="col" className="px-6 py-2">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-2">
                    Voted For
                  </th>
                  <th scope="col" className="px-6 py-2">
                    Total Bet Amount
                  </th>
                  <th scope="col" className="px-6 py-2">
                    Result
                  </th>
                  <th scope="col" className="px-6 py-2">
                    Rewards Earned
                  </th>
                </tr>
              </thead>
              <tbody className="text-white">
                <tr className="">
                  <th
                    scope="row"
                    className="px-6 py-3 font-medium whitespace-nowrap"
                  >
                    1. Miami Heat VS. Lakers
                  </th>
                  <td className="px-6 py-3">NBA</td>
                  <td className="px-6 py-3">Miami Heat</td>
                  <td className="px-6 py-3">
                    10 ETH
                    <span className="text-[#00FF85] font-medium">
                      ($20,000)
                    </span>
                  </td>
                  <td className="px-6 py-3 text-[#00FF85] font-medium">Won</td>
                  <td className="px-6 py-3">
                    1 ETH
                    <span className="text-[#00FF85] font-medium">($20,00)</span>
                  </td>
                </tr>
                <tr className="">
                  <th
                    scope="row"
                    className="px-6 py-3 font-medium whitespace-nowrap"
                  >
                    2. Mcgreggor VS. Silva
                  </th>
                  <td className="px-6 py-3">UFC</td>
                  <td className="px-6 py-3">Silva</td>
                  <td className="px-6 py-3">
                    10 ETH
                    <span className="text-[#00FF85] font-medium">
                      ($20,000)
                    </span>
                  </td>
                  <td className="px-6 py-3 text-[#FF5959] font-medium">Lost</td>
                  <td className="px-6 py-3">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
