import './HeroSection.scss';
import Header from "../../layout/Header/Header"

const HeroSection = () => {
  return (
    <div className='hero bg-cover'>
      <Header />
      <section className="relative">
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-5xl font-bold text-secondaryGray">
          Empowering Connections, Building Trust
        </h1>
        <p className="text-secondaryGray mt-4 text-lg">
          World's leading cable wire industry
        </p>
      </div>
    </section>
    </div>
    
  );
};

export default HeroSection;