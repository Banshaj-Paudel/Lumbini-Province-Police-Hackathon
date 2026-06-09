import { Ticker } from "./components/Ticker";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { BentoGrid } from "./components/BentoGrid";
import { EventDetails } from "./components/EventDetails";
import { ResearchBrief } from "./components/ResearchBrief";
import { FirstGovernmentHackathon } from "./components/FirstGovernmentHackathon";
import { WhyJoin } from "./components/WhyJoin";
import { Tracks } from "./components/Tracks";
import { Provisions } from "./components/Provisions";
import { Prizes } from "./components/Prizes";
import { HimalayanDivider } from "./components/HimalayanDivider";
import { Timeline } from "./components/Timeline";
// import { Judges } from "./components/Judges";
// import { Mentors } from "./components/Mentors";
import { FAQ } from "./components/FAQ";
import { SelectionProcess } from "./components/SelectionProcess";
import { EvaluationCriteria } from "./components/EvaluationCriteria";
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

      <ResearchBrief />
      <Provisions />
      <Prizes />

      <HimalayanDivider />
      <SelectionProcess />
      <EvaluationCriteria />

      <WhyJoin />
      {/* <Timeline />
      <Judges />
      <Mentors /> */}
      <FAQ />
      <Register />
      <ContactPeople />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
