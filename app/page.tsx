import { Ticker } from "./components/Ticker";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { BentoGrid } from "./components/BentoGrid";
import { Tracks } from "./components/Tracks";
import { HimalayanDivider } from "./components/HimalayanDivider";
import { Timeline } from "./components/Timeline";
import { Judges } from "./components/Judges";
import { Mentors } from "./components/Mentors";
import { WhyJoin } from "./components/WhyJoin";
import { OrganizingTeam } from "./components/OrganizingTeam";
import { Register } from "./components/Register";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Ticker />
      <Navigation />
      <Hero />
      <BentoGrid />
      <Tracks />
      <HimalayanDivider />
      <Timeline />
      <Judges />
      <Mentors />
      <WhyJoin />
      <OrganizingTeam />
      <Register />
      <Footer />
    </div>
  );
}
