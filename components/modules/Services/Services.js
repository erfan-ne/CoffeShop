import ServiceItem from "@/components/modules/Services/ServiceItem";
import React from "react";

function Services({ Services }) {
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Our Services
          </h4>
          <h1 className="display-4">Fresh & Organic Beans</h1>
        </div>


        <div className="row">
        {Services.map((service) => {
          return (
            <ServiceItem
              key={service.id}
              icon={service.icon}
              img={service.img}
              title={service.title}
              text={service.text}
            />
          );
        })}
        </div>
      </div>
    </div>
  );
}

export default Services;
