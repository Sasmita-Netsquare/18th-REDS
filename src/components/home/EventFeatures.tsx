interface FeatureItem {
  title: string;
  image: string;
  css: string;
}

const features: FeatureItem[] = [
  {
    title: "Distinguished Speakers",
    image: "/image_1.png",
    css: "col-span-5",
  },
  {
    title: "Network of Industry Associations",
    image: "/image_2.png",
    css: "col-span-7",
  },
  {
    title: "Prior Notification of Attendees",
    image: "/image_2.png",
    css: "col-span-7",
  },
  {
    title: "Strategized Networking",
    image: "/image_1.png",
    css: "col-span-5",
  },
  {
    title: "Pre-Qualified Delegates",
    image: "/image_1.png",
    css: "col-span-5",
  },
  {
    title: "Global Solution Providers",
    image: "/image_2.png",
    css: "col-span-7",
  },
];

const EventFeatures = () => {
  return (
    <div className="main-container text-white py-12 ">
      <div className=" mx-auto flex flex-col gap-6">
        <div className="w-full">
          <p className="text-5xl">Event</p>
          <p className="text-yellow-600 text-7xl">Features</p>
        </div>

        <div className="grid grid-cols-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative bg-[#111] border-4 border-[#1c1c1e] group ${feature.css}`}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full md:h-96 h-60 object-cover opacity-80 group-hover:opacity-100 transition duration-300"
              />
              <div className="absolute bottom-2 left-2 text-sm sm:text-base font-medium bg-black bg-opacity-50 px-3 py-1 rounded">
                {feature.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventFeatures;
