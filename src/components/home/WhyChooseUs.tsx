interface Reason {
    id: string;
    title: string;
  }
  
  const WhyChooseUs = () => {
    const reasons: Reason[] = [
      { id: '01', title: 'Expertise and Experience' },
      { id: '02', title: 'Quality Service' },
      { id: '03', title: 'Personalized Approach' },
      { id: '04', title: 'Cost Savings' },
      { id: '05', title: 'Hassle-Free Process' }
    ];
  
    return (
      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <div className="reasons-grid">
          {reasons.map((reason) => (
            <div key={reason.id} className="reason-card">
              <div className="reason-number">{reason.id}</div>
              <h3>{reason.title}</h3>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default WhyChooseUs;