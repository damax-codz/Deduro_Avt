import "./App.css";
import Gsap from "./component/Load/Gsap";
import Home from "./pages/Home/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import Gallery from "./pages/Gallery/Gallery";
import Credit from "./pages/Credit/Credit";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Deduro_Avt/" element={<Gsap />} />
          <Route path="/Deduro_Avt/home" element={<Home />} />
          <Route path="/Deduro_Avt/profile" element={<Profile />} />
          <Route path="/Deduro_Avt/gallery" element={<Gallery />} />
          <Route path="/Deduro_Avt/credit" element={<Credit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
