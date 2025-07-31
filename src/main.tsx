import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
} from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";

import "@solana/wallet-adapter-react-ui/styles.css";
import App from "./App";
import { SolflareWalletAdapter } from "@solana/wallet-adapter-wallets";
import { UserProvider } from "./context/User/UserProvider";
import { ModalProvider } from "./context/Modal/ModalProvider";
import { PlaceOrderProvider } from "./context/PlaceOrder/PlaceOrderProvider";
import { Buffer } from "buffer";
window.Buffer = Buffer;

const wallets = [new PhantomWalletAdapter(), new SolflareWalletAdapter()];
const endpoint = "https://api.devnet.solana.com";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <ModalProvider>
            <UserProvider>
              <PlaceOrderProvider>
                <App />
              </PlaceOrderProvider>
            </UserProvider>
          </ModalProvider>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  </BrowserRouter>
);
