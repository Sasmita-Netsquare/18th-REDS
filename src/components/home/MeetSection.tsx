// components/MeetGrid.tsx

const MeetGrid = () => {
  const people = [
    "Architects",
    "Interior Designers",
    "Developers",
    "Hotel Operators",
    "Hotel Owners",
    "Consultants",
    "Global Solution Providers",
    "Media / Associations",
  ];

  return (
    <div className="main-container flex items-center justify-center py-16">
      <div className=" w-full flex flex-col gap-7">
        <div className="w-full">
          <p className="text-5xl">Who you will</p>
          <p className="text-yellow-600 text-7xl">Meet</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:w-9/12">
          {people.map((person, index) => (
            <div
              key={index}
              className="bg-[#111] border-2 border-[#1c1c1e] text-white text-center px-4 text-lg font-medium hover:bg-neutral-800 transition-colors duration-200 py-20"
            >
              {person}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetGrid;
