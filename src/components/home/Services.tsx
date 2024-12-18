interface ServiceItem {
  title: string;
  image: string;
}

const Services = () => {
  const items: ServiceItem[] = [
    { title: 'Online Support', image: '/images/support.jpg' },
    { title: 'Document Processing', image: '/images/document.jpg' },
    { title: 'Event Organization', image: '/images/event.jpg' },
    { title: 'Transport & Logistics', image: '/images/transport.jpg' }
  ];

  return (
    <section className="services">
      <h2>SERVICES</h2>
      <div className="services-grid">
        <div className="services-container">
          {items.map((item, index) => (
            <div key={index} className="service-card">
              <div className="service-image" style={{ backgroundImage: `url(${item.image})` }}>
                <div className="service-overlay">
                  <h3>{item.title}</h3>
                  <button className="learn-more">Learn more</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;