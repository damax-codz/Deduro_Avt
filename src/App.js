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
          <Route path="/" element={<Gsap />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/credit" element={<Credit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
