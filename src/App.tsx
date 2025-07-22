import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home/Home";
import LightRay from "./components/ui/LightRay";


function App() {
  return (
    <div className="flex flex-col relative">
      <Header />

      <LightRay side="left" width={400} />
      <LightRay side="right" width={200} />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </div>

  );
}

export default App;
