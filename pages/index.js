import React from "react";
import Slider from "../components/templates/Home/Slider";
import About from "@/components/templates/Home/About";
import Services from "@/components/templates/Home/Services";
import Offer from "@/components/templates/Home/Offer";
import Menu from "@/components/templates/Home/Menu";
import Reservation from "@/components/templates/Home/Reservation";
import Testimonial from "@/components/templates/Home/Testimonial";

function Home() {
  return (
    <>
      <Slider />
      <About />
      <Services/>
      <Offer/>
      <Menu/>
      <Reservation/>
      <Testimonial />
    </>
  );
}

export default Home;
