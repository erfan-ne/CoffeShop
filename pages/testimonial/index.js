import PageHeader from '@/components/modules/PageHeader/PageHeader'
import TestimonialPage from '@/components/templates/Testimonial/TestimonialPage'
import React from 'react'

function Testimonial({comments}) {
  return (
    <>
    <PageHeader route="Testimonial"/>
    <TestimonialPage Comments={comments} />
    </>
  )
}

export async function getStaticProps() {

  const res = await fetch("http://localhost:3001/comments");
  const data = await res.json();

  return {
    props: {
        comments: data,
    },
  };
}

export default Testimonial