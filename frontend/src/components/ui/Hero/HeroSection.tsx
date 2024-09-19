
import './HeroSection.scss';

const HeroSection = () => {
  return (
    <section className="hero bg-cover bg-center relative">
      <div className="overlay absolute inset-0 bg-black opacity-60"></div>
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-5xl font-bold text-white">
         Empowering Connections, Building Trust
        </h1>
        <p className="text-white mt-4 text-lg">
          World's leading cable wire industry
        </p>
        {/* <a href="#contact" className="mt-6 inline-block bg-red-500 text-white py-2 px-6 rounded-lg">
          Contact Us
        </a> */}
      </div>
    </section>
  );
};

export default HeroSection;