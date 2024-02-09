import React from "react";

const SwapToken = () => {
  return (
    <div className="bg-black rounded-[10px] p-4 flex flex-col gap-3 items-center justify-between">
      <div className="px-4 py-1 w-full border border-[#181818] rounded-[10px]">
        <span className="text-14 font-medium text-[#BCBCBC] -mt-2">From</span>
        <div className="text-16 text-white flex items-center justify-between py-3">
          <span>1.00</span>
          <span className="flex gap-3">
            <img src="/token.png" alt="token" className="w-[30px] h-[30px]" />
            ETH
          </span>
        </div>
      </div>
      <div className="p-2 border border-gray-700 rounded-full -my-6 bg-[#2E2E2E] z-20">
        <svg
          width="19"
          height="17"
          viewBox="0 0 19 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect
            x="0.143555"
            y="0.143372"
            width="18.627"
            height="16.1434"
            fill="url(#pattern0)"
          />
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_1_611"
                transform="matrix(0.0104167 0 0 0.0120192 0 -0.076923)"
              />
            </pattern>
            <image
              id="image0_1_611"
              width="96"
              height="96"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAABSlJREFUeF7tnc1S3EYQx3s0VMEpzsMEk4QTh12NNh+Vc4qQR6CCH8DOPV88Q0juELzSeg9coLADyaOkbJ+gCmnsiXdTyrJa9Ugz22tNc6R6Z3r+P/VfI0HPCuAfUgUE6ew8OTAA4ouAATAAYgWIp+cKYADEChBPzxVQAjAajbaKotg2v4qi6CKO4xe++TAAABiPxw/yPD8CgM9nBD+VUu72er1XvkAED2Ai/ggAtipE/hsAekqpf3xACBoAQvyp5t4gBAvAQnyvEIIE0EB8bxCCA9BCfC8QggLgQHznEIIB4FB8pxCCAOBBfGcQOg/Ao/hOIHQawBLEbw1hKQCGw+HHUspPTLZ5nl8OBoPnPp4qy2OenZ19eHt7+wwANn3PNRn/an19vb+zs/PSZj6vACYi/A4ASTkpIcQwiqKvfb1jIRB/ujxrCF4BZFk2nBW/BOKpUmr25ZfNxTM3llD8RhC8ATC2E0XRZY2iW0qpP1urPhmgofiFeftckwMmpjwEuhK8Aciy7BEA/LBoYVrrR0mS/OQCwOSGO7bxfK31tRDiAgD2a3I41FpvCyE+ssj1SkrZq7NZbwDSNH0ihHhcA+D7JEmeWCyqMjTLslMA+Aw7lhE/z/O+lHIfk2ee54dSymc2ELTWfyRJ8uWinDoBwPwlS2uN3lkZ8Tc2Nnpmx2JzoRiLu7m5GVtCeJgkyVUVhE4ASNP0QAjxI/Lq/58/2wAw4ze4z3ynlPqFAbxT4N7N0RZAAwjdB/B2u/vw7Xa37g/oc3cmTQDYQIiiaLPf7193ugLM4tI0PRFCfFGx0MptYVMASAjHSqmvOn8TNgscDocfCCGO5kA4llJ+W7UdbAPAzGu2v3d3d7/Om7coir3BYPA6CADTRaZpuimEMP/bo4UQ53Ec/7VIgLYAms47/VwndkHI3c/cMFcAmubAAJb8wDgLigEwADevIppaAFuQo3dBDGBGAeorCwuEOk++B/A9gO8B2Gq1iqMubWyy1HmyBbEFsQVhq9Uqjrq0sclS58kWxBbEFoStVqs46tLGJkudJ1sQWxBbELZareKoSxubLHWebEFsQWxB2Gq1iqMubWyy1HmyBbEFsQVhq9Uqjrq0sclS58kWxBbEFoStVqs46tLGJkudJ1sQWxBbELZareKoSxubLHWebEFsQWxBqGo1raAA8KkJLorifFHrpYlxVdrlebXWFy47613miRJxTlCtBZnWnyiKfps91NQ0Ia+trX3js/Vn3mGqZl6t9W5d6w9WEFcXCna+2bhaADUd6CTNb5gOdKwgKw0A2YFO0v6ptV7Ygd4JABYd6CvXAB0aALPelToCoBMAkB3o/611mYdg1HWgdwLAZJu2qAP93jqXcQwMANR2oHcGwPt6EBIWAOZgKSHEQRzHP2PHtImr3YaawRoc0fLv8xrlUWBYESiOVivnhgLQAgJWB0wc+hw2zGDlmNFo9FRrPaj43KlSquoQENup7sWjARBD8Ca+WdfEZs3T/uyRZ6v3FSYN7ajNleJV/HJiZtdnDvrQ734u6t53tVnU9LNWFTD90PtwJLALcZYxRiMApbJd9OU3bfP39r0tbRNz+fnGADxDCEJ8o2ErAJ4gBCO+EwCOIQQlvjMAjiAEJ75TAC0hBCm+cwANIQQrvhcAlhCCFt8bACSE4MX3CmAKoeJQ0xMp5V7d2fouH3hWdazWzwGYhU3fsZhYH//bg8lhVWOWAmBVF78KeTEAYgoMgAEQK0A8PVcAAyBWgHh6rgBiAG8Aa9eUrJumUVEAAAAASUVORK5CYII="
            />
          </defs>
        </svg>
      </div>
      <div className="px-4 py-1 w-full border border-[#181818] rounded-[10px]">
        <span className="text-14 font-medium text-[#BCBCBC] -mt-2">From</span>
        <div className="text-16 text-white flex items-center justify-between py-3">
          <span>342,876</span>
          <span className="flex gap-3">
            <img src="/token.png" alt="token" className="w-[30px] h-[30px]" />
            WGUYS
          </span>
        </div>
      </div>
      <button className="bg-[#00FF8599] text-18 text-white font-bold py-3 rounded-[5px] w-full">
        Buy
      </button>
    </div>
  );
};

export default SwapToken;
