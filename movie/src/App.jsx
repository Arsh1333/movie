import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import MainPage from "./components/MainPage.jsx";
import PublicReviews from "./components/PublicReviews.jsx";
import YourReviews from "./components/YourReviews.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/public" element={<PublicReviews />} />
        <Route path="/your" element={<YourReviews />} />
      </Routes>
    </Router>
    // <>
    //   <Navbar></Navbar>
    //   <Hero></Hero>
    // </>
  );
}

export default App;
