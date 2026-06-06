"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./shared/SectionHeading";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: {
    question: string;
    answer: string;
    bullets?: string[];
  }[] = [
    {
      question: "Who can participate in the hackathon?",
      answer:
        "The hackathon is Open to innovators across Nepal, programmers, designers and tech enthusiasts. Teams of 3-4 members are required. No experience requirement beginners and experts alike can participate.",
    },
    {
      question: "Can participants under 18 join the hackathon?",
      answer:
        "Yes. However, participants below 18 years of age must bring a signed consent letter from their parent or guardian. Without this consent letter, underage participants will not be permitted to take part in the event.",
    },
    {
      question:
        "Do participants under 18 need to submit a parental consent letter during registration?",
      answer:
        "No. Participants below 18 years of age may submit the parental consent letter after team selection.",
    },
    {
      question: "What is the registration fee?",
      answer:
        "The hackathon is completely FREE to participate! There is no registration charge. All developers, designers, tech enthusiasts are welcome to join and showcase their skills.",
    },
    {
      question: "Do I need to have a team before registering?",
      answer:
        "Yes. You must register with a pre-formed team of 3 to 4 members. Individual registrations are not accepted.",
    },
    {
      question:
        "Is the event environment safe and inclusive for female participants?",
      answer:
        "Yes. We are committed to providing a safe, supportive, and inclusive environment for all participants, including women participants traveling from different locations.",
    },
    {
      question: "What should I bring to the hackathon?",
      answer:
        "Bring your laptop, charger, and any required development tools. We'll provide food, refreshments, and a workspace. A sense of innovation and creativity are essential!",
    },
    {
      question: "Are there any prerequisites or technical skills required?",
      answer:
        "No specific prerequisites. The event welcomes developers, designers, and other creative professionals of all skill levels. Choose a track that interests you and build something great within the 36-hour timeframe.",
    },
    {
      question: "Can we use AI tools, AI agents, or code-generation tools?",
      answer:
        "Yes. AI tools, AI agents, and code-generation tools are permitted. However:",
      bullets: [
        "Major AI tools or agents used must be disclosed.",
        "Teams must demonstrate understanding of their solution.",
        "Solutions must involve meaningful participant contribution.",
        "Organizers may ask teams to explain implementation decisions, architecture, or demonstrate components during evaluation.",
      ],
    },
    {
      question: "Can we build IoT or hardware projects?",
      answer:
        "Yes, IoT and hardware projects are welcome. However, teams are responsible for bringing their own components, sensors, microcontrollers, and any other required hardware materials. The venue will not provide IoT-specific equipment.",
    },
    {
      question: "Can we work on multiple themes?",
      answer:
        "No. Teams are expected to build one solution that addresses public safety challenges and demonstrates practical usability for Nepal Police.",
    },
    {
      question:
        "Do we have to strictly follow the provided problem statements?",
      answer:
        "No. The problem statements are intended as directions, not strict specifications, and solutions can go beyond them. Participants are encouraged to apply their own creativity, research, and analysis, provided solutions remain practical, feasible, and relevant to Nepal Police operations and public safety. Teams are strongly encouraged to research existing Nepal Police systems, tools, and publicly available resources before building to avoid duplication. For questions about technical constraints, operational realities, existing systems, or legal considerations, please contact the persons listed on this website.",
    },
    {
      question: "What are the judging criteria?",
      answer: "Judging criteria will be announced closer to the event date.",
    },
    {
      question: "What happens after the hackathon?",
      answer:
        "Winning projects will receive cash prizes and Official Recognition Certificates. Outstanding projects may have opportunities for further collaboration with Lumbini Province Police Office.",
    },
  ];

  return (
    <section id="faq" className="w-full bg-white py-24 md:py-28">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <SectionHeading label="COMMON QUESTIONS" title="FREQUENTLY ASKED" />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="border border-border bg-white"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 hover:bg-soft/50 transition-colors"
              >
                <h3 className="font-sans font-bold text-lg text-foreground text-left">
                  {faq.question}
                </h3>
                <ChevronDown
                  size={24}
                  className={`text-crimson shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-border px-6 py-4 bg-soft/30"
                >
                  <p className="font-mono text-sm leading-relaxed text-foreground/70">
                    {faq.answer}
                  </p>
                  {faq.bullets && (
                    <ul className="mt-3 flex flex-col gap-2">
                      {faq.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-3 font-mono text-sm leading-relaxed text-foreground/70"
                        >
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 bg-crimson"
                            aria-hidden
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
