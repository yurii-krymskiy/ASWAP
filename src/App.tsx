import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home/Home";


function App() {
  return (
    <div className="flex flex-col relative">
      <Header />

      {/* LEFT RAY */}
      <div className="absolute top-0 left-50 w-[400px] z-10 rotate-[125deg] 
        bg-gradient-to-r from-white/10 to-transparent 
        shadow-[0_0_100px_40px_rgba(255,255,255,0.15)] pointer-events-none" />

      {/* RIGHT RAY */}
      <div className="absolute top-0 right-75 w-[200px] z-10 -rotate-[125deg] 
        bg-gradient-to-l from-white/10 to-transparent 
        shadow-[0_0_100px_40px_rgba(255,255,255,0.15)] pointer-events-none" />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </div>

  );
}

export default App;
