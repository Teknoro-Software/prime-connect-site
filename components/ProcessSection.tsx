"use client";

import { motion } from "framer-motion";

export default function Approach() {
  const steps = [
    {
      title: "Ethical & Transparent",
      desc: "We follow 100% ethical, clear, and transparent recruitment and HR practices.",
    },
    {
      title: "Understanding Needs",
      desc: "We analyze both client requirements and candidate goals for the perfect match.",
    },
    {
      title: "Fast Turnaround",
      desc: "Our workflow ensures rapid responses, quick processing, and smooth delivery.",
    },
    {
      title: "High-Quality Placements",
      desc: "We verify candidates thoroughly ensuring reliable, long-term placements.",
    },
    {
      title: "Smooth Communication",
      desc: "We maintain clear, continuous support for both clients and candidates.",
    },
  ];

  return (
    <section
      id="process"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl md:text-5xl font-extrabold text-primary"
        >
          Our Approach
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-neutral/70 max-w-3xl mx-auto mt-4"
        >
          Prime Connect operates with the highest level of commitment and
          professionalism.
        </motion.p>

        <div className="relative mt-20">
          <motion.div
            className="absolute left-1/2 top-[65px] -translate-x-1/2 h-[2px] bg-gradient-to-r from-[#F2C17A] to-[#D94A1F] rounded-full"
            style={{ width: "70%" }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 3 }}
          />

          <motion.div
            className="absolute left-1/2 top-[330px] -translate-x-1/2 h-[2px] bg-gradient-to-r from-[#F2C17A] to-[#D94A1F] rounded-full"
            style={{ width: "40%" }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
          />

          <div className="grid md:grid-cols-3 gap-12">
            {steps.slice(0, 3).map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 25, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="
                  relative bg-white p-10 rounded-2xl shadow-md 
                  border border-primary/10 text-center
                  hover:shadow-xl transition-all
                "
              >
                <motion.div
                  className="
                    absolute -top-6 left-1/2 -translate-x-1/2
                    w-14 h-14 rounded-full bg-primary shadow-lg
                    flex items-center justify-center text-white font-bold text-lg
                  "
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {i + 1}
                </motion.div>

                <h3 className="mt-10 text-xl font-semibold text-primary">
                  {step.title}
                </h3>
                <p className="mt-3 text-neutral/70 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:place-items-center mt-16 gap-10 md:gap-12">
            {steps.slice(3).map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 25, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.2 + 0.4 }}
                className="
        relative bg-white p-10 rounded-2xl shadow-md 
        border border-primary/10 text-center
        hover:shadow-xl transition-all
        w-full md:w-[80%] lg:w-[70%]
      "
              >
                <motion.div
                  className="
          absolute -top-6 left-1/2 -translate-x-1/2
          w-14 h-14 rounded-full bg-primary shadow-lg
          flex items-center justify-center text-white font-bold text-lg
        "
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {i + 4}
                </motion.div>

                <h3 className="mt-10 text-xl font-semibold text-primary">
                  {step.title}
                </h3>
                <p className="mt-3 text-neutral/70 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
