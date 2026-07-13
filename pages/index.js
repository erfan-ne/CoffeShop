import React from "react";
import Slider from "../components/templates/Home/Slider";
import About from "@/components/templates/Home/About";
import Services from "@/components/templates/Home/Services";
import Offer from "@/components/templates/Home/Offer";
import Menu from "@/components/templates/Home/Menu";
import Reservation from "@/components/templates/Home/Reservation";
import Testimonial from "@/components/templates/Home/Testimonial";

function Home({services}) {
  return (
    <>    
      <Slider />
      <About />
      <Services Services={services}/>
      <Offer/>
      <Menu/>
      <Reservation/>
      <Testimonial />
    </>
  );
}

export async function getStaticProps(){

  const res = await fetch("http://localhost:3001/services");
  const data = await res.json()

  return{
    props:{
      services: data
    }
  }
}

export default Home;
