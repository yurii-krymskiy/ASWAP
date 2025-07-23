import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home/Home";
import BuyCrypto from "./pages/BuyCrypto/BuyCrypto";

function App() {
  return (
    <div className="flex flex-col relative">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<BuyCrypto />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
