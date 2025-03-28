import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import HousePricePredictor from "./components/HousePricePredictor";
import "./App.css"; // Import the CSS file

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/predict" element={<HousePricePredictor />} />
            </Routes>
        </Router>
    );
}

export default App;
