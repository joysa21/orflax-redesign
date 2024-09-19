import './InfoSection.scss';

const InfoSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="info-box bg-gray-100 p-6">
          <h3 className="text-xl font-bold">Serving Across The Nation</h3>
        </div>
        <div className="info-box bg-red-500 text-white p-6">
          <h3 className="text-xl font-bold">Local Feel, National Appeal</h3>
        </div>
        <div className="info-box bg-gray-100 p-6">
          <h3 className="text-xl font-bold">Founded in 2007</h3>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;