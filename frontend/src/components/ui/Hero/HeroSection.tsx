
import './HeroSection.scss';

const HeroSection = () => {
  return (
    <section className="hero bg-cover bg-center relative">
      <div className="overlay absolute inset-0 bg-primaryBlack opacity-65"></div>
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-5xl font-bold text-secondaryGray">
         Empowering Connections, Building Trust
        </h1>
        <p className="text-secondaryGray mt-4 text-lg">
          World's leading cable wire industry
        </p>
      </div>
    </section>
  );
};

export default HeroSection;