import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Buffer } from "buffer";

import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";

import { WagmiConfig } from "wagmi";
import { polygonMumbai, polygon, mainnet, arbitrum } from "viem/chains";

const projectId = "6fabdbbef40ca499527e1dfe8e1a5146";

window.Buffer = Buffer;

const metadata = {
  name: "ViewFi wallet connect",
  description: "Connect your wallet to redeem the campaign rewards",
  url: "https://www.viewfi.io/",
  icons: [
    "https://assets-global.website-files.com/62303bc2fcf4b20e1405c174/64f0e9cabc0f9a45865def2b_Screenshot%202023-08-31%20at%2012.27.29%20PM.png",
  ],
};

const chains = [polygonMumbai, polygon, mainnet, arbitrum];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
});
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <App />
    </WagmiConfig>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
