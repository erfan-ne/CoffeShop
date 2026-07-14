import React from "react";
import Slider from "../components/templates/Home/Slider";
import About from "@/components/templates/Home/About";
import Services from "@/components/modules/Services/Services";
import Offer from "@/components/templates/Home/Offer";
import Reservation from "@/components/modules/Reservation/Reservation";
import Testimonial from "@/components/templates/Home/Testimonial";
import Menu from "@/components/templates/Home/Menu";

function Home({ data }) {
  return (
    <>
      <Slider />
      <About />
      <Services Services={data.services} />
      <Offer />
      <Menu Menus={data.menus}/>
      <Reservation />
      <Testimonial Comments={data.comments} />
    </>
  );
}

export async function getStaticProps() {
  const servicesResponse = await fetch("http://localhost:3001/services");
  const servicesData = await servicesResponse.json();

  const menuResponse = await fetch("http://localhost:3001/menu");
  const menusData = await menuResponse.json();

  const commentsResponse = await fetch("http://localhost:3001/comments");
  const commentsData = await commentsResponse.json();

  return {
    props: {
      data: {
        services: servicesData,
        menus: menusData,
        comments: commentsData,
      },
    },
    revalidate: 60 * 60 * 12
  };
}

export default Home;
