import ServiceItem from "@/components/modules/ServiceItem/ServiceItem";
import React from "react";

function Services() {
  return (
    <div class="container-fluid pt-5">
      <div class="container">
        <div class="section-title">
          <h4
            class="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Our Services
          </h4>
          <h1 class="display-4">Fresh & Organic Beans</h1>
        </div>
        <div class="row">
          <ServiceItem
            icon="faTruck"
            img="images/service-1.jpg"
            title="Fastest Door Delivery"
            text="Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor"
          />

          <ServiceItem
            icon="faCoffee"
            img="images/service-2.jpg"
            title="Fresh Coffee Beans"
            text="Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor"
          />

          <ServiceItem
            icon="faAward"
            img="images/service-3.jpg"
            title="Best Quality Coffee"
            text="Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor"
          />

          <ServiceItem
            icon="faTable"
            img="images/service-4.jpg"
            title="Online Table Booking"
            text="Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor"
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
