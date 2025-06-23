import "./App.css";
import Naviga from "./components/navi";
import Footer from "./components/footer";
import Homepage from "./pages/home";
import Experience from "./pages/experience";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Naviga />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
