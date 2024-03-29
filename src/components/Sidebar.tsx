import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
    // how to get current route
    const location = useLocation();

    return (
        <>
            <div className="flex flex-col gap-2 bg-bgPrimary min-w-[250px] py-4 h-custom max-sm:hidden">
                <Link
                    to={"/"}
                    className={`font-medium text-16 px-8 py-2 flex items-center gap-2 cursor-pointer hover:text-[#00A3FF] ${
                        location.pathname === "/"
                            ? "border-l-4 border-[#00A3FF] text-[#00A3FF]"
                            : "text-white"
                    }`}
                >
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M14.8889 15.7427H10.8889C10.2751 15.7427 9.77778 15.2913 9.77778 14.7341V11.1031C9.77778 10.6573 9.38 10.2962 8.88889 10.2962H7.11111C6.62 10.2962 6.22222 10.6573 6.22222 11.1031V14.7341C6.22222 15.2913 5.72489 15.7427 5.11111 15.7427H1.11111C0.497333 15.7427 0 15.2913 0 14.7341V7.03353C0 6.106 0.468445 5.22971 1.27067 4.65601L7.58711 0.137807C7.82933 -0.0348681 8.17067 -0.0348681 8.41244 0.137807L14.7298 4.65601C15.532 5.22971 16 6.1056 16 7.03272V14.7341C16 15.2913 15.5027 15.7427 14.8889 15.7427Z" />
                    </svg>
                    Home
                </Link>
                <Link
                    to={"/Dashboard"}
                    className={` font-medium text-16 px-8 py-2 flex items-center gap-2 cursor-pointer hover:text-[#00A3FF] ${
                        location.pathname === "/Dashboard"
                            ? "border-l-4 border-[#00A3FF] text-[#00A3FF]"
                            : "text-white"
                    }`}
                >
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M9.6 6.39999V16H1.6C1.17565 16 0.768687 15.8314 0.468629 15.5314C0.168571 15.2313 0 14.8243 0 14.4V6.39999H9.6Z" />
                        <path d="M16.0002 6.39999V14.4C16.0002 14.8243 15.8316 15.2313 15.5316 15.5314C15.2315 15.8314 14.8245 16 14.4002 16H11.2002V6.39999H16.0002Z" />
                        <path d="M16 1.6V4.8H0V1.6C0 1.17565 0.168571 0.768687 0.468629 0.468629C0.768687 0.168571 1.17565 0 1.6 0H14.4C14.8243 0 15.2313 0.168571 15.5314 0.468629C15.8314 0.768687 16 1.17565 16 1.6Z" />
                    </svg>
                    Dashboard
                </Link>
                <Link
                    to={"/Partners"}
                    className={` font-medium text-16 px-8 py-2 flex items-center gap-2 cursor-pointer hover:text-[#00A3FF] ${
                        location.pathname === "/Partners"
                            ? "border-l-4 border-[#00A3FF] text-[#00A3FF]"
                            : "text-white"
                    }`}
                >
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M6.58667 10.16C7.57333 9.6 8.50667 9.33333 9.54667 9.33333C9.84 9.33333 10.1333 9.36 10.4 9.38667C10.5333 9.41333 10.56 9.36 10.4267 9.28C9.92 8.98667 9.36 8.72 8.77333 8.48C7.62667 8 7.46667 7.57333 7.46667 7.09333C7.46667 6.61333 7.78667 6.18667 8.16 5.84C8.82667 5.22667 9.2 4.4 9.2 3.41333C9.2 1.57333 8.05333 0 6.02667 0C4 0 2.82667 1.57333 2.82667 3.41333C2.82667 4.4 3.2 5.25333 3.86667 5.84C4.24 6.18667 4.56 6.64 4.56 7.09333C4.56 7.54667 4.37333 8 3.25333 8.48C1.6 9.17333 0.0266667 9.97333 0 11.4933C0 12.48 0.746666 13.36 1.68 13.36H5.46667C5.76 13.36 6 13.12 6 12.8267V11.0933C6.05333 10.72 6.24 10.3467 6.58667 10.16Z" />
                        <path d="M15.2804 11.7599C12.7737 12.5333 10.8004 10.1599 8.02703 11.2799C7.8137 11.3599 7.70703 11.5466 7.70703 11.7866V14.6399C7.70703 15.0133 8.02703 15.2533 8.3737 15.1466C11.0937 14.3199 13.067 16.6933 15.6537 15.6266C15.8404 15.5466 16.0004 15.3599 16.0004 15.1199V12.2666C16.0004 11.9199 15.627 11.6533 15.2804 11.7599ZM11.9204 14.4266C11.3337 14.4266 10.8537 13.9466 10.8537 13.3599C10.8537 12.7733 11.3337 12.2933 11.9204 12.2933C12.507 12.2933 12.987 12.7733 12.987 13.3599C12.987 13.9466 12.507 14.4266 11.9204 14.4266Z" />
                    </svg>
                    Partners
                </Link>
                <Link
                    to={"/Stake"}
                    className={`font-medium text-16 px-8 py-2 flex items-center gap-2 cursor-pointer hover:text-[#00A3FF] ${
                        location.pathname === "/Stake"
                            ? "border-l-4 border-[#00A3FF] text-[#00A3FF]"
                            : "text-white"
                    }`}
                >
                    <svg
                        width="22"
                        height="18"
                        viewBox="0 0 22 18"
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M20.9999 4.33333C20.9999 5.46667 19.6821 6.46667 17.6666 7.06889C16.4066 7.44667 14.8743 7.66667 13.2221 7.66667C11.5699 7.66667 10.0377 7.44556 8.77767 7.06889C6.76322 6.46667 5.44434 5.46667 5.44434 4.33333C5.44434 2.49222 8.92656 1 13.2221 1C17.5177 1 20.9999 2.49222 20.9999 4.33333Z" />
                        <path d="M20.9999 4.33333C20.9999 2.49222 17.5177 1 13.2221 1C8.92656 1 5.44434 2.49222 5.44434 4.33333M20.9999 4.33333V8.77778C20.9999 9.91111 19.6821 10.9111 17.6666 11.5133C16.4066 11.8911 14.8743 12.1111 13.2221 12.1111C11.5699 12.1111 10.0377 11.89 8.77767 11.5133C6.76322 10.9111 5.44434 9.91111 5.44434 8.77778V4.33333M20.9999 4.33333C20.9999 5.46667 19.6821 6.46667 17.6666 7.06889C16.4066 7.44667 14.8743 7.66667 13.2221 7.66667C11.5699 7.66667 10.0377 7.44556 8.77767 7.06889C6.76322 6.46667 5.44434 5.46667 5.44434 4.33333" />
                        <path
                            d="M20.9999 4.33333C20.9999 2.49222 17.5177 1 13.2221 1C8.92656 1 5.44434 2.49222 5.44434 4.33333M20.9999 4.33333V8.77778C20.9999 9.91111 19.6821 10.9111 17.6666 11.5133C16.4066 11.8911 14.8743 12.1111 13.2221 12.1111C11.5699 12.1111 10.0377 11.89 8.77767 11.5133C6.76322 10.9111 5.44434 9.91111 5.44434 8.77778V4.33333M20.9999 4.33333C20.9999 5.46667 19.6821 6.46667 17.6666 7.06889C16.4066 7.44667 14.8743 7.66667 13.2221 7.66667C11.5699 7.66667 10.0377 7.44556 8.77767 7.06889C6.76322 6.46667 5.44434 5.46667 5.44434 4.33333"
                            stroke="#0D0D0D"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path d="M1 8.77785V13.2223C1 14.3556 2.31889 15.3556 4.33333 15.9578C5.59333 16.3356 7.12556 16.5556 8.77778 16.5556C10.43 16.5556 11.9622 16.3345 13.2222 15.9578C15.2367 15.3556 16.5556 14.3556 16.5556 13.2223V12.1112M1 8.77785C1 7.44785 2.81667 6.30007 5.44444 5.76562L1 8.77785ZM1 8.77785C1 9.91118 2.31889 10.9112 4.33333 11.5134C5.59333 11.8912 7.12556 12.1112 8.77778 12.1112C9.55 12.1112 10.2956 12.0634 11 11.9734" />
                        <path
                            d="M1 8.77785V13.2223C1 14.3556 2.31889 15.3556 4.33333 15.9578C5.59333 16.3356 7.12556 16.5556 8.77778 16.5556C10.43 16.5556 11.9622 16.3345 13.2222 15.9578C15.2367 15.3556 16.5556 14.3556 16.5556 13.2223V12.1112M1 8.77785C1 7.44785 2.81667 6.30007 5.44444 5.76562M1 8.77785C1 9.91118 2.31889 10.9112 4.33333 11.5134C5.59333 11.8912 7.12556 12.1112 8.77778 12.1112C9.55 12.1112 10.2956 12.0634 11 11.9734"
                            stroke="#0D0D0D"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    Stake
                </Link>
            </div>
            <div className="flex px-4 py-3 gap-3 sm:hidden w-full overflow-auto">
                <Link
                    to={"/"}
                    className={`text-white text-12 font-medium py-3 border border-[#262626] rounded-[7px] w-1/4 text-center ${
                        location.pathname === "/" ? "bg-[#00A3FF]" : ""
                    }`}
                >
                    Home
                </Link>
                <Link
                    to={"/Dashboard"}
                    className={`text-white text-12 font-medium py-3 border border-[#262626] rounded-[7px] w-1/4 text-center ${
                        location.pathname === "/Dashboard" ? "bg-[#00A3FF]" : ""
                    }`}
                >
                    Dashboard
                </Link>
                <Link
                    to={"/Partners"}
                    className={`text-white text-12 font-medium py-3 border border-[#262626] rounded-[7px] w-1/4 text-center ${
                        location.pathname === "/Partners" ? "bg-[#00A3FF]" : ""
                    }`}
                >
                    Partners
                </Link>
                <Link
                    to={"/Stake"}
                    className={`text-white text-12 font-medium py-3 border border-[#262626] rounded-[7px] w-1/4 text-center ${
                        location.pathname === "/Stake" ? "bg-[#00A3FF]" : ""
                    }`}
                >
                    Stake
                </Link>
            </div>
        </>
    );
};

export default Sidebar;
