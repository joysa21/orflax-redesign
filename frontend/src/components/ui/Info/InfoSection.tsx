import './InfoSection.scss';

const InfoSection = () => {
  return (
    <section className="bg-primaryBlack py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div className="info-box bg-primaryGray p-6">
          <h3 className="text-xl text-secondaryGray font-bold">Serving Across The Nation</h3>
        </div>
        <div className="info-box bg-highlightYellow text-white p-6">
          <h3 className="text-xl text-primaryBlack font-bold">Local Feel, National Appeal</h3>
        </div>
        <div className="info-box bg-secondaryGray p-6">
          <h3 className="text-xl text-highlight font-bold">Founded in 2007</h3>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;