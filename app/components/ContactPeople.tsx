"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { SectionHeading } from "./shared/SectionHeading";

export function ContactPeople() {
  const contacts = [
    {
      name: "Inspector Ujjwal Khadka",
      phone: "+977 9851288989",
    },
    {
      name: "Inspector Prashant Mainali",
      phone: "+977 9862255871",
    },
    {
      name: "Banshaj Paudel",
      phone: "+977 9865522222",
    },
  ];

  return (
    <section className="w-full bg-white py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading label="GET IN TOUCH" title="CONTACT PERSONS" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contacts.map(({ name, phone }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-border p-8 flex flex-col hover:shadow-lg transition-shadow"
            >
              <h3 className="font-sans font-bold text-lg text-foreground mb-4">
                {name}
              </h3>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-crimson shrink-0" />
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="font-mono text-sm text-crimson hover:text-crimson/80 transition-colors"
                >
                  {phone}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
