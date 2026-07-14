import PageHeader from "@/components/modules/PageHeader/PageHeader";
import React from "react";
import Services from "@/components/modules/Services/Services";

function ServicesPage({ services }) {
  return (
    <>
      <PageHeader route="Services" />
      <Services Services={services} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3001/services");
  const data = await res.json();

  return {
    props: {
        services: data,
    },
  };
}

export default ServicesPage;
