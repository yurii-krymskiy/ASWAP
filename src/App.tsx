import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home/Home";
import BuyCrypto from "./pages/BuyCrypto/BuyCrypto";
import Swap from "./pages/Swap/Swap";
import OnlineAds from "./pages/OnlineAds/OnlineAds";
import MyAccount from "./pages/MyAccount/MyAccount";

function App() {
  return (
    <div className="flex flex-col relative">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<BuyCrypto />} />
        <Route path="/swap" element={<Swap />} />
        <Route path="/online-ads" element={<OnlineAds />} />
        <Route path="/my-account" element={<MyAccount />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
