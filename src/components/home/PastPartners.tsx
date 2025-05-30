const PastPartners = () => {
  const mediaPartners = [
    {
      image: "/partner1.jpg",
    },
    {
      image: "/partner2.jpg",
    },
    {
      image: "/partner3.jpg",
    },
    {
      image: "/partner4.jpg",
    },
    {
      image: "/partner1.jpg",
    },
    {
      image: "/partner2.jpg",
    },
    {
      image: "/partner3.jpg",
    },
    {
      image: "/partner4.jpg",
    },
    {
      image: "/partner1.jpg",
    },
    {
      image: "/partner2.jpg",
    },
    {
      image: "/partner3.jpg",
    },
    {
      image: "/partner4.jpg",
    },
  ];
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
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2 mb-10 w-full lg:w-[85%]">
          {mediaPartners.map((_, index) => (
            <div
              key={index}
              className=" aspect-[4/2] w-full h-32 overflow-hidden"
            >
              <img
                src={_?.image}
                alt="image"
                className="delay-animation w-full h-full hover:scale-110"
              />
            </div>
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
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2 w-full lg:w-[85%]">
          {mediaPartners.map((_, index) => (
            <div
              key={index}
              className=" aspect-[4/2] w-full h-32 overflow-hidden"
            >
              <img
                src={_?.image}
                alt="image"
                className="delay-animation w-full h-full hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PastPartners;
