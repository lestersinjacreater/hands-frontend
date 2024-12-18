import Hero from '../components/home/Hero';
import Products from '../components/home/Products';
import Services from '../components/home/Services';
import Testimonials from '../components/home/Testimonials';
import Updates from '../components/home/Updates';
import WhyChooseUs from '../components/home/WhyChooseUs';
import WhoWeAre from '../components/home/WhoWeAre';
import ContactUs from '../components/home/ContactUs';

const Home = () => {
  return (
    <main className="home">
      <Hero />
      <Products />
      <Services />
      <Testimonials />
      <Updates />
      <WhyChooseUs />
      <WhoWeAre />
      <ContactUs />
    </main>
  );
};

export default Home;