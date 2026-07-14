import TetimonialItem from '@/components/modules/TestimonialItem/TetimonialItem';
import React from 'react'

function TestimonialPage({Comments}) {
  return (
        <div className="container-fluid py-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Testimonial
          </h4>
          <h1 className="display-4">Our Clients Say</h1>
        </div>

        <div className="owl-carousel testimonial-carousel">
          {Comments.map((comment) => {
            return (
              <TetimonialItem
                key={comment.id}
                img={comment.img}
                name={comment.userName}
                profession={comment.profession}
                text={comment.body}
              />
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default TestimonialPage