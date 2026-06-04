import React from "react";
import Slider from "../components/templates/Home/Slider";
import About from "@/components/templates/Home/About";
import Services from "@/components/templates/Home/Services";

function Home() {
  return (
    <>
      <Slider />
      <About />
      <Services/>
    </>
  );
}

export default Home;
