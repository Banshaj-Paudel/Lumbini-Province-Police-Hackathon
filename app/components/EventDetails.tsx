"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./shared/SectionHeading";
import { Award, Users, Clock, MapPin } from "lucide-react";

export function EventDetails() {
  const details = [
    {
      Icon: Clock,
      title: "Duration",
      description: "36-hour continuous hackathon sprint",
    },
    {
      Icon: Users,
      title: "Team Size",
      description: "3-4 members per team",
    },
    {
      Icon: Award,
      title: "Prize Pool",
      description: "NPR 1,00,000 total with government recognition",
    },
    {
      Icon: MapPin,
      title: "Location",
      description: "Butwal, Lumbini Province, Nepal",
    },
  ];

  return (
    <section id="event-details" className="w-full bg-white py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading label="EVENT INFORMATION" title="EVENT DETAILS" />
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 list-none p-0 m-0" role="list">
          {details.map(({ Icon, title, description }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-border p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
              role="listitem"
            >
              <Icon className="text-crimson mb-4" size={40} aria-hidden="true" />
              <h3 className="font-sans font-bold text-lg text-foreground mb-2">
                {title}
              </h3>
              <p className="font-mono text-sm text-foreground/60">
                {description}
              </p>
            </motion.article>
          ))}
        </ul>
      </div>
    </section>
  );
}
