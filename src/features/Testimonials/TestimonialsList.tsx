import 
//React, 
{ useEffect, useState } from 'react';
import { getTestimonials } from '../../api/testimonials';

const TestimonialsList = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTestimonials();
      setTestimonials(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Testimonials</h2>
      {testimonials.map((testimonial: any) => (
        <div key={testimonial.testimonialid}>
          <p>{testimonial.text}</p>
          <small>Created At: {testimonial.createdAt}</small>
        </div>
      ))}
    </div>
  );
};

export default TestimonialsList;
