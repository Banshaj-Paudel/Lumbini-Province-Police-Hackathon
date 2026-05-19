import { ShieldCheck, Radio, Search } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Accent = "crimson" | "gold" | "indigo";

export type SubTheme = {
  title: string;
  desc: string;
  examples: string[];
};

export type Track = {
  slug: string;
  Icon: LucideIcon;
  number: string;
  title: string;
  short: string;
  long: string;
  accent: Accent;
  subThemes: SubTheme[];
};

export const tracks: Track[] = [
  {
    slug: "public-safety-citizen-support",
    Icon: ShieldCheck,
    number: "01",
    title: "PUBLIC SAFETY & CITIZEN SUPPORT",
    short:
      "Bringing citizens closer to the police and protecting those most at risk.",
    long: "Build tools that strengthen the line between citizens and the police — from the moment something goes wrong to long-term support for vulnerable communities. Solutions in this track focus on accessibility, trust, and rapid response.",
    accent: "crimson",
    subThemes: [
      {
        title: "Crime reporting & emergency response",
        desc: "Channels that let citizens report incidents and reach the right responders without friction or fear.",
        examples: [
          "Anonymous tip-line app with location pinning",
          "One-tap SOS for women, elderly, and lone travelers",
          "Multilingual emergency dispatch routing",
        ],
      },
      {
        title: "Victim support & vulnerable people safety",
        desc: "Tools that help victims access help, track their cases, and protect at-risk groups across Lumbini Province.",
        examples: [
          "Case-status tracker with secure citizen login",
          "Verified safe-house and counselor directory",
          "Child / missing-person alert system",
        ],
      },
      {
        title: "Drug abuse & suicide prevention support",
        desc: "Solutions that connect people in distress to resources, counselors, and structured intervention pathways.",
        examples: [
          "Anonymous helpline routing to trained counselors",
          "Crisis triage chatbot in Nepali and English",
          "Community awareness and recovery program directory",
        ],
      },
    ],
  },
  {
    slug: "police-operations-coordination",
    Icon: Radio,
    number: "02",
    title: "POLICE OPERATIONS & COORDINATION",
    short:
      "Strengthening day-to-day operations, response, and internal coordination.",
    long: "Build the operational backbone — systems that move information faster, coordinate response across units, and replace paperwork friction with clean digital workflows.",
    accent: "gold",
    subThemes: [
      {
        title: "Traffic & crowd management",
        desc: "Systems that improve flow on roads and safety during festivals, rallies, and other large gatherings.",
        examples: [
          "Real-time traffic heatmap from CCTV and sensors",
          "Event crowd-density alerts for on-ground officers",
          "Smart violation logging and digital challan dispatch",
        ],
      },
      {
        title: "Disaster-response support",
        desc: "Tools for faster mobilization, resource tracking, and inter-agency coordination during disasters.",
        examples: [
          "Resource and personnel deployment dashboard",
          "Citizen safety check-in during earthquakes or floods",
          "Inter-agency communication and task assignment",
        ],
      },
      {
        title: "Internal office & workflow management",
        desc: "Digital workflows that reduce paperwork, accelerate approvals, and free officers to focus on core work.",
        examples: [
          "Digital FIR intake and case-file management",
          "Duty roster, leave, and assignment tracker",
          "Document approval and routing system",
        ],
      },
    ],
  },
  {
    slug: "osint-cybercrime-threat-analysis",
    Icon: Search,
    number: "03",
    title: "OSINT, CYBERCRIME & THREAT ANALYSIS",
    short:
      "Intelligence-driven solutions for investigation, cybercrime, and digital threats.",
    long: "Build intelligence-grade tools for digital investigations, financial crime, and online threat analysis. Solutions in this track support lawful investigation while respecting privacy and ethics.",
    accent: "indigo",
    subThemes: [
      {
        title: "OSINT & investigation support",
        desc: "Tools that aid lawful, ethical open-source intelligence gathering and structured case work.",
        examples: [
          "Social-graph and link analysis from public sources",
          "Geolocation and image-source verification",
          "Case-evidence aggregation dashboard",
        ],
      },
      {
        title: "Online fraud & cybercrime analysis",
        desc: "Detection, reporting, and analysis platforms for digital scams, financial crime, and impersonation.",
        examples: [
          "Scam URL and phone-number reporting and lookup",
          "Phishing pattern detection for citizen alerts",
          "Cybercrime intake form with auto-categorization",
        ],
      },
      {
        title: "Social media threat & misinformation analysis",
        desc: "Systems that surface coordinated misinformation, online threats, and viral hate content for review.",
        examples: [
          "Trend monitoring across public Nepali social media",
          "Misinformation cluster detection and verification",
          "Threat-against-officials alert routing",
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
    tint: "bg-crimson/5",
  },
  gold: {
    bar: "bg-gold",
    icon: "text-gold",
    label: "text-gold",
    dot: "bg-gold",
    ring: "group-hover:border-gold",
    tint: "bg-gold/5",
  },
  indigo: {
    bar: "bg-indigo",
    icon: "text-indigo",
    label: "text-indigo",
    dot: "bg-indigo",
    ring: "group-hover:border-indigo",
    tint: "bg-indigo/5",
  },
};

export function getTrackBySlug(slug: string): Track | undefined {
  return tracks.find((t) => t.slug === slug);
}
