import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ImageGallery from "./components/ImageGallery";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<ImageGallery />} />
                <Route path="/aboutus" element={<ImageGallery />} />
                <Route path="/foryou" element={<ImageGallery />} />
                <Route path="services/" element={<ImageGallery />} />
                <Route path="/blog" element={<ImageGallery />} />
                <Route path="/vlog" element={<ImageGallery />} />
                <Route path="/contact" element={<ImageGallery />} />
            </Routes>
        </Router>
    );
}

export default App;
