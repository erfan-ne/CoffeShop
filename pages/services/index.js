import PageHeader from "@/components/modules/PageHeader/PageHeader";
import React from "react";
import Services from "@/components/modules/Services/Services";

function ServicesPage({ data }) {
  return (
    <>
      <PageHeader route="Services" />
      <Services Services={data.services} />
    </>
  );
}

export async function getStaticProps() {
  const servicesResponse = await fetch("http://localhost:3001/services");
  const servicesData = await servicesResponse.json();

  return {
    props: {
      data: {
        services: servicesData,
      },
    },
  };
}

export default ServicesPage;
