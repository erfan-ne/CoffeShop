import React from "react";
import Slider from "../components/templates/Home/Slider";
import About from "@/components/templates/Home/About";
import Services from "@/components/templates/Home/Services";
import Offer from "@/components/templates/Home/Offer";
import Menu from "@/components/templates/Home/Menu";

function Home() {
  return (
    <>
      <Slider />
      <About />
      <Services/>
      <Offer/>
      <Menu/>
    </>
  );
}

export default Home;
