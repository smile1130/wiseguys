import React from "react";
import BuyToken from "../../components/BuyToken";
import SwapToken from "../../components/SwapToken";

const Dashboard = () => {
    const [isSwapToken, setIsSwapToken] = React.useState(false);
    return (
        <div className="bg-bgPrimary w-full pe-4 pb-4 max-sm:ps-4 text-white">
            <div className="mt-3 sm:hidden">
                <BuyToken handleClickBuy={setIsSwapToken} />
            </div>
            {isSwapToken ? (
                <>
                    <div
                        className="text-14 text-white font-medium border border-[#262626] w-fit py-4 px-8 rounded-[7px] mt-3 sm:none"
                        onClick={() => setIsSwapToken(false)}
                    >
                        <svg
                            width="57"
                            height="12"
                            viewBox="0 0 57 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5.03779 11.1839L0.399299 6.54545L5.03779 1.90696L5.93268 2.7919L2.82544 5.89915H10.6308V7.19176H2.82544L5.93268 10.294L5.03779 11.1839ZM24.6085 11V0.818182H28.3372C29.0597 0.818182 29.6579 0.9375 30.1319 1.17614C30.6059 1.41146 30.9605 1.7313 31.1958 2.13565C31.4311 2.53669 31.5488 2.98911 31.5488 3.4929C31.5488 3.91714 31.4709 4.27509 31.3151 4.56676C31.1594 4.85511 30.9506 5.08712 30.6887 5.26278C30.4302 5.43513 30.1452 5.56108 29.8336 5.64062V5.74006C30.1717 5.75663 30.5015 5.866 30.8229 6.06818C31.1478 6.26705 31.4162 6.55043 31.6283 6.91832C31.8405 7.28622 31.9465 7.73366 31.9465 8.26065C31.9465 8.78101 31.8239 9.24834 31.5786 9.66264C31.3367 10.0736 30.9622 10.4001 30.4551 10.642C29.9479 10.8807 29.3 11 28.5112 11H24.6085ZM26.1447 9.68253H28.362C29.0978 9.68253 29.6248 9.54001 29.943 9.25497C30.2612 8.96993 30.4203 8.61364 30.4203 8.18608C30.4203 7.86458 30.339 7.5696 30.1766 7.30114C30.0142 7.03267 29.7822 6.81889 29.4806 6.6598C29.1823 6.50071 28.8277 6.42116 28.4167 6.42116H26.1447V9.68253ZM26.1447 5.22301H28.2029C28.5476 5.22301 28.8575 5.15672 29.1326 5.02415C29.411 4.89157 29.6314 4.70597 29.7938 4.46733C29.9595 4.22538 30.0424 3.94034 30.0424 3.61222C30.0424 3.19129 29.8949 2.8383 29.5999 2.55327C29.305 2.26823 28.8525 2.12571 28.2427 2.12571H26.1447V5.22301ZM35.8716 11.169C35.3877 11.169 34.9502 11.0795 34.5591 10.9006C34.168 10.7183 33.8581 10.4548 33.6294 10.1101C33.404 9.76539 33.2913 9.3428 33.2913 8.84233C33.2913 8.41146 33.3742 8.05682 33.5399 7.77841C33.7056 7.5 33.9294 7.27959 34.2111 7.11719C34.4928 6.95478 34.8077 6.83215 35.1557 6.74929C35.5037 6.66643 35.8583 6.60346 36.2196 6.56037C36.677 6.50734 37.0482 6.46425 37.3332 6.43111C37.6183 6.39465 37.8254 6.33665 37.9547 6.2571C38.084 6.17756 38.1486 6.0483 38.1486 5.86932V5.83452C38.1486 5.40033 38.026 5.06392 37.7807 4.82528C37.5387 4.58665 37.1775 4.46733 36.6969 4.46733C36.1964 4.46733 35.802 4.57836 35.5136 4.80043C35.2286 5.01918 35.0314 5.26278 34.922 5.53125L33.525 5.21307C33.6907 4.74905 33.9327 4.37453 34.2509 4.08949C34.5724 3.80114 34.9419 3.59233 35.3595 3.46307C35.7771 3.33049 36.2163 3.2642 36.677 3.2642C36.9819 3.2642 37.3051 3.30066 37.6465 3.37358C37.9912 3.44318 38.3127 3.57244 38.6109 3.76136C38.9126 3.95028 39.1595 4.22041 39.3517 4.57173C39.5439 4.91974 39.6401 5.37216 39.6401 5.92898V11H38.1884V9.95597H38.1287C38.0326 10.1482 37.8884 10.3371 37.6962 10.5227C37.5039 10.7083 37.257 10.8625 36.9554 10.9851C36.6538 11.1077 36.2925 11.169 35.8716 11.169ZM36.1948 9.97585C36.6057 9.97585 36.9571 9.89465 37.2487 9.73224C37.5437 9.56984 37.7674 9.35772 37.9199 9.09588C38.0757 8.83073 38.1536 8.54735 38.1536 8.24574V7.26136C38.1005 7.31439 37.9978 7.36411 37.8453 7.41051C37.6962 7.4536 37.5255 7.49171 37.3332 7.52486C37.141 7.55469 36.9537 7.58286 36.7715 7.60938C36.5892 7.63258 36.4367 7.65246 36.3141 7.66903C36.0257 7.70549 35.7622 7.76681 35.5236 7.85298C35.2883 7.93916 35.0993 8.06345 34.9568 8.22585C34.8176 8.38494 34.748 8.59706 34.748 8.86222C34.748 9.23011 34.8839 9.50852 35.1557 9.69744C35.4275 9.88305 35.7738 9.97585 36.1948 9.97585ZM44.8366 11.1541C44.0975 11.1541 43.4611 10.9867 42.9275 10.652C42.3972 10.3139 41.9896 9.84825 41.7045 9.25497C41.4195 8.66169 41.277 7.98224 41.277 7.21662C41.277 6.44105 41.4228 5.75663 41.7145 5.16335C42.0061 4.56676 42.4171 4.10109 42.9474 3.76633C43.4777 3.43158 44.1025 3.2642 44.8217 3.2642C45.4017 3.2642 45.9188 3.37192 46.3728 3.58736C46.8269 3.79948 47.1932 4.09777 47.4716 4.48224C47.7533 4.86671 47.9207 5.31581 47.9737 5.82955H46.527C46.4474 5.47159 46.2651 5.16335 45.9801 4.90483C45.6984 4.64631 45.3205 4.51705 44.8466 4.51705C44.4323 4.51705 44.0693 4.62642 43.7578 4.84517C43.4495 5.06061 43.2093 5.36884 43.0369 5.76989C42.8646 6.16761 42.7784 6.63826 42.7784 7.18182C42.7784 7.73864 42.8629 8.21922 43.0319 8.62358C43.201 9.02794 43.4396 9.34115 43.7478 9.56321C44.0594 9.78527 44.4256 9.89631 44.8466 9.89631C45.1283 9.89631 45.3835 9.84493 45.6122 9.74219C45.8442 9.63613 46.0381 9.48532 46.1939 9.28977C46.353 9.09422 46.464 8.8589 46.527 8.58381H47.9737C47.9207 9.07765 47.7599 9.51847 47.4915 9.90625C47.223 10.294 46.8634 10.599 46.4126 10.821C45.9652 11.0431 45.4398 11.1541 44.8366 11.1541ZM50.9305 8.4098L50.9206 6.59517H51.1791L54.2217 3.36364H56.0016L52.5314 7.04261H52.2977L50.9305 8.4098ZM49.5634 11V0.818182H51.0499V11H49.5634ZM54.3858 11L51.6514 7.37074L52.6756 6.33168L56.2104 11H54.3858Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                    <div className="mt-3">
                        <SwapToken />
                    </div>
                </>
            ) : (
                <div className="bg-black rounded-[10px] py-6 max-sm:py-3 px-8 max-sm:px-4 flex flex-col gap-8 h-full max-sm:mt-3">
                    <div className="">
                        <p className="text-18">My Stats</p>
                        <div className="flex max-sm:flex-col gap-2 text-14 mt-3">
                            <div className="border border-gray-500/50 flex flex-col justify-between rounded-md p-4 max-sm:p-2 max-sm:px-8 grow">
                                <p className="text-[#9F9F9F] mb-2 text-14">
                                    Earnings Till Date
                                </p>
                                <div className="flex max-sm:flex-col sm:items-center sm:gap-2">
                                    <span className="text-32 max-sm:text-24 text-white font-bold">
                                        20.2 ETH
                                    </span>
                                    <span className="text-[#00FF85] text-24 max-sm:text-14 font-bold">
                                        ($50,150.54)
                                    </span>
                                </div>
                            </div>
                            <div className="border border-gray-500/50 flex flex-col justify-between rounded-md p-4 max-sm:p-2 max-sm:px-8 grow">
                                <p className="text-[#9F9F9F] text-14 max-sm:mb-2">
                                    $WGUYS Token Holdings
                                </p>
                                <span className="text-16 font-bold">
                                    123,456.789{" "}
                                </span>
                            </div>
                            <div className="border border-gray-500/50 flex flex-col justify-between rounded-md p-4 max-sm:p-2 max-sm:px-8 grow">
                                <p className="text-[#9F9F9F] text-14 max-sm:mb-2">
                                    Voting Power
                                </p>
                                <span className="text-16 font-bold">3x</span>
                            </div>
                            <div className="border border-gray-500/50 flex flex-col justify-between rounded-md p-4 max-sm:p-2 max-sm:px-8 grow">
                                <p className="text-[#9F9F9F] text-14 max-sm:mb-2">
                                    Votes Placed Till Date
                                </p>
                                <span className="text-16 font-bold">
                                    123,456.789{" "}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <p className="text-18">My Rewards</p>
                        <div className="flex justify-between gap-2 mt-3">
                            <div className="border border-gray-500/70 w-1/2 max-sm:w-full rounded-md p-4 max-sm:p-2 max-sm:px-8 flex max-sm:flex-col max-sm:gap-2 sm:items-center justify-between">
                                <div>
                                    <p className="text-[#9F9F9F] text-14 mb-2">
                                        Pending Rewards
                                    </p>
                                    <div className="flex sm:gap-2 items-center max-sm:flex-col">
                                        <span className="text-24 text-white font-bold">
                                            20.2 ETH
                                        </span>
                                        <span className="text-[#00FF85] text-16 font-bold">
                                            ($50,150.54)
                                        </span>
                                    </div>
                                </div>

                                <button className="bg-[#00060a] rounded-md px-3 py-3 border border-gray-500/70 flex items-center gap-2 max-sm:w-fit">
                                    <span>Claim Rewards</span>
                                    <img src="/arrow.png" alt="arrow" />
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
                                        <td className="px-6 py-3">
                                            Miami Heat
                                        </td>
                                        <td className="px-6 py-3">
                                            10 ETH
                                            <span className="text-[#00FF85] font-medium">
                                                ($20,000)
                                            </span>
                                        </td>
                                        <td className="px-6 py-3 text-[#00FF85] font-medium">
                                            Won
                                        </td>
                                        <td className="px-6 py-3">
                                            1 ETH
                                            <span className="text-[#00FF85] font-medium">
                                                ($20,00)
                                            </span>
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
                                        <td className="px-6 py-3 text-[#FF5959] font-medium">
                                            Lost
                                        </td>
                                        <td className="px-6 py-3">-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
