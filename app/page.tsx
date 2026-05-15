import { Ticker } from "./components/Ticker";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { BentoGrid } from "./components/BentoGrid";
import { EventDetails } from "./components/EventDetails";
import { FirstGovernmentHackathon } from "./components/FirstGovernmentHackathon";
import { WhyJoin } from "./components/WhyJoin";
import { Tracks } from "./components/Tracks";
import { HimalayanDivider } from "./components/HimalayanDivider";
import { Timeline } from "./components/Timeline";
import { Judges } from "./components/Judges";
import { Mentors } from "./components/Mentors";
import { FAQ } from "./components/FAQ";
import { OrganizingTeam } from "./components/OrganizingTeam";
import { Register } from "./components/Register";
import { ContactPeople } from "./components/ContactPeople";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Ticker />
      <Navigation />
      <Hero />
      <BentoGrid />
      <EventDetails />
      <FirstGovernmentHackathon />
      <Tracks />

      <HimalayanDivider />
      <WhyJoin />
      <Timeline />
      <Judges />
      <Mentors />
      <OrganizingTeam />
      <FAQ />
      <Register />
      <ContactPeople />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
