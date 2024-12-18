interface Update {
    id: number;
    title: string;
    content: string;
    image: string;
  }
  
  const Updates = () => {
    const updates: Update[] = [
      {
        id: 1,
        title: "Latest Update",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "/images/update1.jpg"
      },
      // Add more updates
    ];
  
    return (
      <section className="updates">
        <h2>Updates</h2>
        <div className="updates-grid">
          {updates.map((update) => (
            <div key={update.id} className="update-card">
              <img src={update.image} alt={update.title} />
              <h3>{update.title}</h3>
              <p>{update.content}</p>
              <button className="details">Details</button>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Updates;