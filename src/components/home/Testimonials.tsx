interface Testimonial {
    id: number;
    name: string;
    text: string;
    image: string;
  }
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Client Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/images/testimonial1.jpg"
    },
    // Add more testimonials here
  ];
  
  const Testimonials = () => {
    return (
      <section className="testimonials">
        <h2>What Our Clients Say About Us</h2>
        <div className="testimonials-slider">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-image">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <h4 className="testimonial-name">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Testimonials;