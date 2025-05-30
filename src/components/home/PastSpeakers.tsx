const PastSpeakers = () => {
  return (
    <div className="main-container py-16 flex flex-col gap-5">
      <div className="w-full">
        <p className="text-5xl">Our Past</p>
        <p className="text-yellow-600 text-7xl">Speakers</p>
      </div>

      <div className="flex justify-end items-end">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 w-full lg:w-[80%]">
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="w-full">
              <div className="border-4 border-yellow-500 bg-white w-full aspect-square mb-2"></div>
              <p className="text-white font-semibold">Mark Kennedy</p>
              <p className="text-sm text-gray-300">Head of Design</p>
              <p className="text-sm text-gray-300">MAGNA – NEOM</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PastSpeakers;
