const PastPartners = () => {
  return (
    <div className="main-container py-16">
      <div className="w-full">
        <p className="text-5xl">Our Past</p>
        <p className="text-yellow-600 text-7xl">Partners</p>
      </div>

      {/* Summit Partners */}
      <div className="flex justify-end my-2">
        <p className="text-white text-right text-2xl">Summit Partners</p>
      </div>
      <div className="flex justify-center sm:justify-end">
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2 mb-10 w-full lg:w-[80%]">
          {[...Array(12)].map((_, index) => (
            <div
              key={`summit-${index}`}
              className="bg-white aspect-[4/2] w-full"
            ></div>
          ))}
        </div>
      </div>

      {/* Media Association Partners */}
      <div className="flex justify-end my-2">
        <p className="text-white text-right text-2xl">
          Media Association Partners
        </p>
      </div>
      <div className="flex justify-center sm:justify-end px-2">
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2 w-full lg:w-[80%]">
          {[...Array(12)].map((_, index) => (
            <div
              key={`media-${index}`}
              className="bg-white aspect-[4/2] w-full"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PastPartners;
