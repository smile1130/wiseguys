import React from "react";

const Home = () => {
  return (
    <div className="bg-bgPrimary w-full pe-6 pb-6 flex flex-col">
      <div className="bg-black rounded-[10px] px-8 py-6">
        <div className="flex items-start justify-between">
          <div className="p-4 w-fit border border-[#181818] rounded-[10px]">
            <span className="text-16 font-medium text-[#BCBCBC]">
              Betting Treasury Amount
            </span>
            <p className="text-32 text-[#00FF85] font-bold">$50,000</p>
          </div>
          <div className="p-4 w-fit border border-[#181818] rounded-[10px]">
            <span className="text-16 font-medium text-[#BCBCBC]">
              Voting Ends In
            </span>
            <p className="text-16 text-white font-bold">20 H : 50 M : 30 S</p>
          </div>
        </div>
        <div className="flex items-center justify-between px-12">
          <div className="flex flex-col gap-4">
            <p className="flex items-center gap-2 text-20 text-white font-semibold">
              <img src="/usa.png" className="w-[26px] h-[16px]" alt="usa" />
              Elon Musk
            </p>
            <p className="ps-[32px]">
              <div className="text-white text-16">51</div>
              <div className="text-14 text-[#999999]">Age</div>
            </p>
            <p className="ps-[32px]">
              <div className="text-white text-16">6’ 1”</div>
              <div className="text-14 text-[#999999]">Height</div>
            </p>
            <p className="ps-[32px]">
              <div className="text-white text-16">200 lbs</div>
              <div className="text-14 text-[#999999]">Weight</div>
            </p>
          </div>
          <div className="flex items-center gap-16">
            <div>
              <img src="/mark.png" alt="mark" />
            </div>
            <div className="text-20 text-white font-semibold">VS</div>
            <div>
              <img src="/elon.png" alt="elon" />
            </div>
          </div>
          <div className="flex flex-col items-end gap-4">
            <p className="flex items-center gap-2 text-20 text-white font-semibold">
              Mark Zuckerburg
              <img src="/usa.png" className="w-[26px] h-[16px]" alt="usa" />
            </p>
            <p className="pe-[32px] flex flex-col items-end">
              <div className="text-white text-16">51</div>
              <div className="text-14 text-[#999999]">Age</div>
            </p>
            <p className="pe-[32px] flex flex-col items-end">
              <div className="text-white text-16">6’ 1”</div>
              <div className="text-14 text-[#999999]">Height</div>
            </p>
            <p className="pe-[32px] flex flex-col items-end">
              <div className="text-white text-16">200 lbs</div>
              <div className="text-14 text-[#999999]">Weight</div>
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-6 w-full grow">
        <div className="bg-black rounded-[10px] px-8 py-6 w-1/2">
          <button className="text-white text-16 font-bold bg-[#00A3FF] rounded-[7px] w-full py-2">
            VOTE
          </button>
          <div className="flex items-start gap-5">
            <div className="p-4 w-fit border border-[#181818] rounded-[10px] mt-6">
              <span className="text-16 text-[#BCBCBC]">Total Votes</span>
              <p className="text-16 text-white font-bold">51</p>
            </div>
            <div className="text-white flex flex-col gap-5 justify-center items-center mt-6 p-2">
              <p className="text-14 text-[#999999]">
                Percentage of Votes Favoring
              </p>
              <p className="text-64 text-[#00FF85] font-bold">51%</p>
            </div>
          </div>
        </div>
        <div className="bg-black rounded-[10px] px-8 py-6 w-1/2">
          <button className="text-white text-16 font-bold bg-[#00A3FF] rounded-[7px] w-full py-2">
            VOTE
          </button>
          <div className="flex items-start gap-5">
            <div className="p-4 w-fit border border-[#181818] rounded-[10px] mt-6">
              <span className="text-16 text-[#BCBCBC]">Total Votes</span>
              <p className="text-16 text-white font-bold">49</p>
            </div>
            <div className="text-white flex flex-col gap-5 justify-center items-center mt-6 p-2">
              <p className="text-14 text-[#999999]">
                Percentage of Votes Favoring
              </p>
              <p className="text-64 text-[#FF5959] font-bold">49%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
