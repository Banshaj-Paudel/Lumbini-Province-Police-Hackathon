"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./shared/SectionHeading";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who can participate in the hackathon?",
      answer:
        "The hackathon is open to all Nepalese developers and tech enthusiasts. Teams of 3-4 members are required. No experience requirement beginners and experts alike can participate.",
    },
    {
      question: "What is the registration fee?",
      answer:
        "The hackathon is completely FREE to participate! There is no registration charge. All developers are welcome to join and showcase their skills.",
    },
    {
      question: "Do I need to have a team before registering?",
      answer:
        "You can register as an individual or with a pre-formed team. We'll provide opportunities to network and form teams if you're registering solo.",
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
      question: "What happens after the hackathon?",
      answer:
        "Winning projects will receive cash prizes and government recognition certificates. Outstanding projects may have opportunities for further collaboration with Lumbini Province Police.",
    },
    {
      question: "What are the judging criteria?",
      answer:
        "Judging criteria will be announced closer to the event date."
    },
  ];

  return (
    <section className="w-full bg-soft py-24 md:py-28">
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
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
