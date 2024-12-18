interface HeroProps {
  title?: string;
  subtitle?: string;
}

const Hero = ({ 
  title = "EMPOWERING LIVES WITH QUALITY SUPPLIES",
  subtitle = "Contact us today"
}: HeroProps) => {
  return (
    <section className="relative h-[600px] flex items-center">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-white leading-tight">{title}</h1>
          <p className="text-white text-xl mt-4">{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;