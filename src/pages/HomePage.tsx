import {
  EventAbout,
  EventFeatures,
  EventNumbers,
  Gallery,
  HeroSection,
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
      <PastSpeakers />
      <PastPartners />
      <Testimonials />
      <Gallery />
    </>
  );
}
