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
      <p className="m-4">
        {text}
      </p>
      </div>
    </div>
  );
}

export default TetimonialItem;
