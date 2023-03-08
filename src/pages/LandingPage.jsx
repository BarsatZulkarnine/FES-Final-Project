import React from "react";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Nav from "../components/Nav";
import SearchBar from "../components/SearchBar";


function LandingPage() {
  return (
    <>
      <Nav />
      <Home/>
      <SearchBar/>
      <Footer/>
      
    </>
  );
}

export default LandingPage;
