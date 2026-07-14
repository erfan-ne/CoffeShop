import React from "react";

function TetimonialItem({img, name, profession, text}) {
  return (
    <div className="testimonial-item">
      <div className="d-flex align-items-center mb-3">
        <img className="img-fluid" src={img} alt="" />
        <div className="ml-3">
          <h4>{name}</h4>
          <i>{profession}</i>
        </div>
      </div>
      <p className="m-0">
        {text}
      </p>
    </div>
  );
}

export default TetimonialItem;
