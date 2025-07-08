const Footer = () => {
  return (
    <footer className="main-container py-10 ">
      <div className="flex md:flex-row flex-col gap-8 w-full">
        <p className="text-lg text-start w-full ">
          GBB is a world leading invite-only B2B networking events organizer and
          International Trade Consulting firm working to plug you directly into
          the heart of global business opportunities. We are ‘Creating Value’
          through business events designed for growth, innovation, and strategic
          partnerships. Connect with us to explore the opportunities awaiting
          you.
        </p>
        <div className="flex items-center md:justify-end justify-center w-full">
          <img
            src="/gbb_logo.png"
            alt="GBB Logo"
            className="lg:w-[20%] md:w-[50%] w-44 h-auto"
          />
        </div>
      </div>
      <div className=" lg:w-1/2 py-16 flex flex-col items-start gap-4">
        <p>
          <span className="text-yellow-500 font-semibold">Address: </span>
          GBB Consulting Services UK Limited, 18 Brainton Avenue Feltham, TW14
          0AY
        </p>
        <p>
          <span className="text-yellow-500 font-semibold">Phone Number: </span>
          <a href="tel:+442038682202">+44 20 3868 2202</a>
        </p>
        <p className="text-start">
          <span className="text-yellow-500 font-semibold">E-mail: </span>
          For Sponsorship, Speaking, Media and Marketing Opportunities write to
          us at <br />
          <a href="mailto:marketing@gbbventure.com" className="underline">
            marketing@gbbventure.com
          </a>
        </p>
      </div>

      {/* Social Links */}
      <div className="grid grid-cols-3 md:grid-cols-6 text-lg gap-4">
        <a
          href="https://www.facebook.com/gbbventures"
          className="underline cursor-pointer"
          target="_blank"
        >
          Facebook
        </a>
        <a
          href="https://www.instagram.com/gbb_venture/"
          className="underline cursor-pointer md:text-center"
          target="_blank"
        >
          Instagram
        </a>
        <a
          href="https://x.com/gbbventure"
          className="underline cursor-pointer md:text-center"
          target="_blank"
        >
          Twitter
        </a>
        <a
          href="https://www.linkedin.com/company/gbb-consulting-services/"
          className="underline cursor-pointer md:text-center"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          href="https://www.youtube.com/channel/UCyEe6dVcyJwPXzVRqDZcJZw"
          className="underline cursor-pointer md:text-center"
          target="_blank"
        >
          Youtube
        </a>
        <a
          href="https://open.spotify.com/show/3Zt2gWtvx3JgyQ8KaHPIwv?nd=1&dlsi=f9cda2db89064eb9"
          className="underline cursor-pointer md:text-end"
          target="_blank"
        >
          Spotify
        </a>
      </div>
    </footer>
  );
};

export default Footer;
