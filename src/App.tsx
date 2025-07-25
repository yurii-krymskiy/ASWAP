import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home/Home";
import BuyCrypto from "./pages/BuyCrypto/BuyCrypto";
import OnlineAds from "./pages/OnlineAds/OnlineAds";
import MyAccount from "./pages/MyAccount/MyAccount";
import SwapChat from "./pages/SwapChat/SwapChat";
import Swap from "./pages/Swap/Swap";
import CoinJoin from "./pages/CoinJoin/CoinJoin";
import P2P from "./pages/P2P/P2P";

function App() {
  return (
    <div className="flex flex-col relative">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<BuyCrypto />} />
        <Route path="/swap-chat" element={<SwapChat />} />
        <Route path="/swap" element={<Swap />} />
        <Route path="/online-ads" element={<OnlineAds />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/coin-join" element={<CoinJoin />} />
        <Route path="/p2p" element={<P2P />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
