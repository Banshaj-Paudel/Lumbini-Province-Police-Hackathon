import { ShieldAlert, Siren, MonitorCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Accent = "crimson" | "gold" | "indigo";

export type Stat = {
  value: string;
  label: string;
};

export type Problem = {
  number: string;
  title: string;
  question: string;
  points: string[];
};

export type Track = {
  slug: string;
  Icon: LucideIcon;
  number: string;
  title: string;
  tagline: string;
  long: string;
  accent: Accent;
  stats: Stat[];
  problems: Problem[];
};

export const tracks: Track[] = [
  {
    slug: "public-safety-emergency-support",
    Icon: ShieldAlert,
    number: "01",
    title: "PUBLIC SAFETY, EMERGENCY & SUPPORT SYSTEMS",
    tagline: "Crisis response, victim follow-up, and early intervention.",
    long: "Crime reports are up 48% in three years and the police-to-citizen ratio sits far below the UN standard. This theme is about helping people reach the right help fast and identifying those at risk before a crisis hits.",
    accent: "crimson",
    stats: [
      {
        value: "58,472",
        label: "crime reports in FY 2081/082",
      },
      {
        value: "20/day",
        label:
          "average suicide deaths 7,221 lives lost in a single year. 1,300+ suicide cases in Lumbini in FY 2081/082",
      },
      {
        value: "~ 1 : 393",
        label: "police-to-citizen ratio (UN standard is 1:220)",
      },
      {
        value: ">90%",
        label:
          "of people with mental health problems receive no treatment",
      },
      {
        value: "150,000+",
        label:
          "estimated drug users nationally; ~70% aged 20-29. 700+ drug cases in Lumbini in FY 2081/082",
      },
      {
        value: "23,621",
        label: "missing persons in FY 2024/25 - 10,694 were women, 7,232 were children and 186 were senior citizens",
      },
    ],
    problems: [
      {
        number: "1",
        title: "The crisis moment",
        question:
          "How can technology help someone in an emergency reach the right help, fast - even in remote or low-connectivity areas or marginalised communities and keep them informed, supported, and connected to services after an incident is filed?",
        points: [
          "Emergency helplines: 100, 103, 104",
          "Awareness and accessibility uneven across provinces",
          "Many cannot safely make a call during a crisis",
          "~1:393 police-to-citizen ratio - response infrastructure is thin",
          "23,621 missing persons in FY 2024/25",
          "10,694 were women - out of 23,621 missing",
          "Records fragmented at district level - no cross-agency visibility",
          "DV survivors have no follow-up mechanism after filing",
          "Victims cannot track case progress or understand legal procedures",
          "No counselling mechanisms or platforms",
        ],
      },
      {
        number: "2",
        title: "Before the crisis",
        question:
          "How can technology identify people at risk and connect them to support before a crisis occurs? An early warning system that helps schools, health posts, or community police identify individuals showing behavioural or situational risk patterns for suicide, drug dependency, or domestic abuse.",
        points: [
          "~7,000 suicide deaths in a single year",
          "Girls under 18 die by suicide at 2× the rate of boys the same age",
          "156,000+ people living with drug dependency",
          "Schools and communities lack tools to recognise warning signs",
          ">90% of mental health cases go untreated",
          "No structured referral system between community actors and police",
        ],
      },
    ],
  },
  {
    slug: "police-operations-coordination",
    Icon: Siren,
    number: "02",
    title: "POLICE OPERATIONS & COORDINATION",
    tagline:
      "Traffic intelligence, situational awareness, and disaster coordination.",
    long: "Officers run 10–12 hour shifts with no real-time data while road deaths, protests, and disasters stretch a thin force even thinner. This theme is about giving police the situational awareness and coordination tools they currently lack.",
    accent: "gold",
    stats: [
      {
        value: "7/day",
        label: "road deaths nationally - 39% of crashes occur at night",
      },
      {
        value: "506",
        label:
          "killed on Lumbini roads in FY 2081/082 - roughly 1.4 deaths every single day",
      },
      
     
      {
        value: "~ 1 : 542",
        label:
          "police-to-citizen ratio in Lumbini - every officer already stretched thin",
      },
      {
        value: "75+",
        label:
          "killed in Sep 2025 protests - 2,642 rounds fired in 2 days, crowd size underestimated",
      },
      {
        value: "250",
        label:
          "killed in 2024 floods - 30,000+ personnel coordinated entirely by phone call",
      },
    ],
    problems: [
      {
        number: "1",
        title: "Traffic management",
        question:
          "How can technology help traffic police manage roads, intersections, and accident hotspots more safely - given severe understaffing and rapidly growing vehicle numbers?",
        points: [
          "7 deaths/day nationally from road accidents",
          "39% of crashes occur at night",
          "1 officer per 1,270 vehicles in Kathmandu",
          "Officers work 10–12 hour shifts with no real-time data",
          "No live deployment or enforcement guidance system exists",
          "No live accident hotspot mapping or predictive deployment tool in any district",
        ],
      },
      {
        number: "2",
        title: "Crowd control & public order",
        question:
          "How can technology help Nepal Police plan, monitor, and manage public gatherings - reducing the risk of disproportionate response and civilian harm?",
        points: [
          "Sep 2025 protests: 75+ killed, 2,000+ injured",
          "Police fired 2,642 rounds in 2 days",
          "Commanders underestimated crowd size - no real-time situational awareness",
          "Nepal Police holds numerous drones not yet deployed in live operations and disaster management",
        ],
      },
      {
        number: "3",
        title: "Disaster response & rescue coordination",
        question:
          "How can technology improve coordination between Nepal Police and other agencies - and the public - during floods, landslides, and earthquakes?",
        points: [
          "2024 floods: 250 killed",
          "30,000+ personnel across 21 districts - coordinated only by phone call",
          "No shared situational map - agencies operated in complete silos",
          "2018–2024: 32,000+ disaster events, ~3,000 deaths, Billions in losses",
          "Various disaster-prone areas of Lumbini have no reliable contact with concerned agencies",
        ],
      },
    ],
  },
  {
    slug: "osint-cybercrime-threat-analysis",
    Icon: MonitorCheck,
    number: "03",
    title: "OSINT, CYBERCRIME & THREAT ANALYSIS",
    tagline:
      "Open-source intelligence, AI-weaponised crime, and digital recon tools.",
    long: "Cybercrime has risen 757% in five years while just 1 in 200 complaints reaches court. This theme is about giving investigators the intelligence tooling to map criminal networks and counter AI-weaponised crime.",
    accent: "indigo",
    stats: [
      {
        value: "757%",
        label:
          "rise in cybercrime - 2,301 complaints (2019/20) to 19,730 (2023/24)",
      },
      {
        value: "52/day",
        label:
          "cybercrime cases registered in FY 2024/25 - more than 2 every hour",
      },
      {
        value: "88%",
        label: "financial fraud growth in one year - 4,112 to 7,723 cases",
      },
      {
        value: "3,093%",
        label:
          "TikTok-linked crime growth in 4 years - Facebook drives 72.73% of all cases",
      },
    ],
    problems: [
      {
        number: "1",
        title: "OSINT & criminal network intelligence",
        question:
          "How can technology help investigators build intelligence on cybercriminal networks using open-source information - mapping actors, platforms, money flows, and connections that are hiding in plain sight?",
        points: [
          "Cases from different districts almost never linked - even from the same network",
          "Facebook/Messenger: 72.73% of all cybercrime cases",
          "TikTok-linked crime up 3,093% in 4 years",
          "70% of perpetrators aged 19–30 - many recruited as money mules",
          "Only 3 mutual legal assistance treaties internationally",
          "Limited technical investigation experts in Nepal Police",
        ],
      },
      {
        number: "2",
        title: "AI-weaponised crime detection",
        question:
          "How can technology detect and counter the use of AI to commit crimes - including deepfakes used for blackmail and disinformation, voice cloning for fraud, AI-generated financial fraud, and synthetic identities used to deceive victims at scale?",
        points: [
          "Financial fraud up 88% in one year - 4,112 to 7,723 cases",
          "Deepfake incidents up 80% in 2024",
          "AI used for voice cloning, fake profiles, synthetic documents",
          "Automated scam bots operating across Facebook, TikTok, Telegram",
          "52 complaints/day - investigators cannot manually review AI-generated content",
          "No detection capability for AI-generated evidence or synthetic identities in Nepal Police",
        ],
      },
    ],
  },
];

export type AccentStyles = {
  bar: string;
  icon: string;
  label: string;
  dot: string;
  ring: string;
  tint: string;
};

export const accentMap: Record<Accent, AccentStyles> = {
  crimson: {
    bar: "bg-crimson",
    icon: "text-crimson",
    label: "text-crimson",
    dot: "bg-crimson",
    ring: "group-hover:border-crimson",
    tint: "hover:bg-crimson/[0.04]",
  },
  gold: {
    bar: "bg-gold",
    icon: "text-gold",
    label: "text-gold",
    dot: "bg-gold",
    ring: "group-hover:border-gold",
    tint: "hover:bg-gold/[0.06]",
  },
  indigo: {
    bar: "bg-indigo",
    icon: "text-indigo",
    label: "text-indigo",
    dot: "bg-indigo",
    ring: "group-hover:border-indigo",
    tint: "hover:bg-indigo/[0.05]",
  },
};

export function getTrackBySlug(slug: string): Track | undefined {
  return tracks.find((t) => t.slug === slug);
}

export const sources: string[] = [
  "Nepal Police Annual Report FY 2023/24",
  "Nepal Police GBV Factsheet FY 2080/81",
  "MoHA Drug Survey 2020",
  "Nepal Health Research Council",
  "Nepal Police Cyber Bureau",
  "myRepublica (May 2025)",
  "Harvard Atrocity Prevention Lab (2025)",
  "NDRRMA / ReliefWeb (2024)",
  "Nepal Disaster Report 2024",
  "Kathmandu Post (2024, 2025)",
  "Applied Data Science & Analysis (2025)",
  "FIU-Nepal Strategic Analysis Report 2024",
  "Cyber Alert Nepal 2024",
  "Rising Nepal Daily (2024)",
];
