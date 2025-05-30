const Gallery = () => {
  return (
    <div className="main-container py-16">
      {/* Header */}
      <div className="w-full pb-5">
        <p className="text-5xl">Photos</p>
        <p className="text-yellow-600 text-7xl">Gallery</p>
      </div>

      {/* Gallery Grid */}
      <div className="grid md:grid-cols-3 gap-1">
        {/* Column 1 */}
        <div className="flex flex-col gap-2 ">
          <div className="bg-gray-300 h-[19rem] w-auto" />
          <div className="bg-gray-300 h-[19rem] w-auto" />
          <div className="bg-gray-300 h-[19rem] w-auto" />
          <div className="bg-gray-300 h-[19rem] w-auto" />
          <div className="bg-gray-300 h-[19rem] w-auto" />
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-2">
          <div className="bg-gray-300 h-[26rem] w-auto" />
          <div className="bg-gray-300 h-[26rem] w-auto" />
          <div className="bg-gray-300 h-[26rem] w-auto" />
          <div className="bg-gray-300 h-[26rem] w-auto" />
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-2">
          <div className="bg-gray-300 h-[24rem] w-auto" />
          <div className="bg-gray-300 h-[24rem] w-auto" />
          <div className="bg-gray-300 h-[24rem] w-auto" />
          <div className="bg-gray-300 h-[24rem] w-auto" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
