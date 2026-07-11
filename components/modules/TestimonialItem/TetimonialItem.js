import React from "react";

function TetimonialItem({img, name, profession, text}) {
  return (
    <div class="testimonial-item">
      <div class="d-flex align-items-center mb-3">
        <img class="img-fluid" src={img} alt="" />
        <div class="ml-3">
          <h4>Client Name</h4>
          <i>Profession</i>
        </div>
      </div>
      <p class="m-0">
        Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod
        clita lorem. Dolor tempor ipsum sanct clita
      </p>
    </div>
  );
}

export default TetimonialItem;
