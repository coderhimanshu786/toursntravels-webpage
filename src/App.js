import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Star from "./Components/Star/Star";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Main />
      <Footer />
      <Star />
    </>
  );
};

export default App;
