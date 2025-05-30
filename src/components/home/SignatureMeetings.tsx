const SignatureMeetings = () => {
  return (
    <div className="main-container text-white py-16">
      <div className="flex flex-col gap-6">
        <div className="w-full">
          <p className="text-5xl">Signature</p>
          <p className="text-yellow-600 text-7xl">Meetings</p>
        </div>
        <div className="flex lg:flex-row flex-col gap-8">
          <div className="flex md:flex-row flex-col gap-2 w-full">
            <div className="flex flex-col gap-2">
              <img
                src="/meeting_1.png"
                alt="Meeting 1"
                className="lg:w-80 w-full h-auto"
              />
              <img
                src="/meeting_3.png"
                alt="Meeting 3"
                className="lg:w-80 w-full h-auto"
              />
            </div>
            <div className="flex flex-col gap-2 mt-10">
              <img
                src="/meeting_2.png"
                alt="Meeting 2"
                className="lg:w-80 w-full h-auto"
              />
              <img
                src="/meeting_4.png"
                alt="Meeting 4"
                className="lg:w-80 w-full h-auto"
              />
            </div>
          </div>
          <div className=" w-full">
            <p className=" leading-relaxed text-gray-300">
              The key offering of Summits organized by GBB are the pre-arranged,
              diligently curated B2B meetings scheduled for the delegates and
              suppliers. The invited delegates are pre-qualified based on a
              number of criteria including the projects represented, size of
              these projects, their decision-making capacity and the budgets to
              source. They then provide their project requirements which is
              carefully matched with the offerings of the renowned global
              suppliers attending the summit. This robust process ensures
              high-quality business matches, based on which the face-to-face
              meetings are organized with the help of dedicated account managers
              at the summit. Every meeting therefore is sure to be productive
              while leaving each attendee with long-term and valuable business
              network.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignatureMeetings;
