import React from "react";
import Slider from "../components/templates/Home/Slider";
import About from "@/components/templates/Home/About";
import Services from "@/components/templates/Home/Services";
import Offer from "@/components/templates/Home/Offer";
import Menu from "@/components/templates/Home/Menu";
import Reservation from "@/components/templates/Home/Reservation";

function Home() {
  return (
    <>
      <Slider />
      <About />
      <Services/>
      <Offer/>
      <Menu/>
      <Reservation/>
    </>
  );
}

export default Home;
