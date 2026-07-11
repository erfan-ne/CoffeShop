import React from "react";

function TetimonialItem({img, name, profession, text}) {
  return (
    <div class="testimonial-item">
      <div class="d-flex align-items-center mb-3">
        <img class="img-fluid" src={img} alt="" />
        <div class="ml-3">
          <h4>{name}</h4>
          <i>{profession}</i>
        </div>
      </div>
      <p class="m-0">
        {text}
      </p>
    </div>
  );
}

export default TetimonialItem;
