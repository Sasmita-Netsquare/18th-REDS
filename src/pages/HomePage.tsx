import {
  EventAbout,
  EventFeatures,
  EventNumbers,
  Gallery,
  HeroSection,
  InvestorMeet,
  MeetSection,
  PastPartners,
  PastSpeakers,
  SignatureMeetings,
  Testimonials,
} from "../components";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <EventAbout />
      <EventNumbers />
      <MeetSection />
      <EventFeatures />
      <SignatureMeetings />
      <InvestorMeet />
      <PastSpeakers />
      <PastPartners />
      <Testimonials />
      <Gallery />
    </>
  );
}
