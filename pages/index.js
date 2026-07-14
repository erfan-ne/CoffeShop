import React from "react";
import Slider from "../components/templates/Home/Slider";
import About from "@/components/templates/Home/About";
import Services from "@/components/templates/Home/Services";
import Offer from "@/components/templates/Home/Offer";
import Menu from "@/components/templates/Home/Menu";
import Reservation from "@/components/templates/Home/Reservation";
import Testimonial from "@/components/templates/Home/Testimonial";

function Home({ data }) {
  return (
    <>
      <Slider />
      <About />
      <Services Services={data.services} />
      <Offer />
      <Menu Menus={data.menus} />
      <Reservation />
      <Testimonial />
    </>
  );
}

export async function getStaticProps() {
  const servicesResponse = await fetch("http://localhost:3001/services");
  const servicesData = await servicesResponse.json();

  const menuResponse = await fetch("http://localhost:3001/menu");
  const menuData = await menuResponse.json();

  return {
    props: {
      data:{
        services: servicesData,
        menus: menuData
      }
    },
  };
}

export default Home;
