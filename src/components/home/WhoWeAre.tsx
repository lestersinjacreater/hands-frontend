const WhoWeAre = () => {
    return (
      <section className="who-we-are">
        <h2>Who We Are</h2>
        <div className="content-wrapper">
          <div className="text-content">
            <p>
              We are a trusted healthcare provider partner in Africa, dedicated to delivering 
              quality medical supplies and services. Our commitment to excellence drives us 
              to provide the best solutions for our clients.
            </p>
            <button className="learn-more">Learn More</button>
          </div>
          <div className="image-grid">
            <img src="/images/team.jpg" alt="Our Team" className="team-image" />
          </div>
        </div>
      </section>
    );
  };
  
  export default WhoWeAre;