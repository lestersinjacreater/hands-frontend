interface ProductItem {
  title: string;
  image: string;
}

const Products = () => {
  const items: ProductItem[] = [
    { title: 'Medical Equipment', image: '/images/medical.jpg' },
    { title: 'Pharmaceuticals', image: '/images/pharma.jpg' },
    { title: 'Non-Pharmaceuticals', image: '/images/non-pharma.jpg' },
    { title: 'Spare Parts', image: '/images/spare-parts.jpg' }
  ];

  return (
    <section className="products">
      <h2>PRODUCTS</h2>
      <div className="products-grid">
        <div className="products-container">
          {items.map((item, index) => (
            <div key={index} className="product-card">
              <div className="product-image" style={{ backgroundImage: `url(${item.image})` }}>
                <div className="product-overlay">
                  <h3>{item.title}</h3>
                  <button className="see-more">See more</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;