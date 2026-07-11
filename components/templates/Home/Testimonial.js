import React from "react";
import TetimonialItem from "@/components/modules/TestimonialItem/TetimonialItem";

function Testimonial() {
  return (
    <div class="container-fluid py-5">
      <div class="container">
        <div class="section-title">
          <h4
            class="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Testimonial
          </h4>
          <h1 class="display-4">Our Clients Say</h1>
        </div>

        <div class="owl-carousel testimonial-carousel">
          <TetimonialItem
            img={"images/testimonial-1.jpg"}
            name={"Client Name"}
            profession={"Profession"}
            text={
              "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita"
            }
          />
          <TetimonialItem
            img={"images/testimonial-2.jpg"}
            name={"Client Name"}
            profession={"Profession"}
            text={
              "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita"
            }
          />
          <TetimonialItem
            img={"images/testimonial-3.jpg"}
            name={"Client Name"}
            profession={"Profession"}
            text={
              "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita"
            }
          />
          <TetimonialItem
            img={"images/testimonial-4.jpg"}
            name={"Client Name"}
            profession={"Profession"}
            text={
              "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
