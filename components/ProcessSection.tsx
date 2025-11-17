"use client";

import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    {
      title: "Discovery",
      desc: "We understand your business goals, culture, and HR needs.",
    },
    {
      title: "Design",
      desc: "We craft a customized HR strategy and execution roadmap.",
    },
    {
      title: "Deliver",
      desc: "We implement recruitment, payroll, and HR operations flawlessly.",
    },
    {
      title: "Improve",
      desc: "We measure KPIs and continuously optimize performance.",
    },
  ];

  return (
    <section id="process" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl md:text-5xl font-extrabold text-primary"
        >
          Our Premium HR Process
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center text-neutral/70 max-w-2xl mx-auto mt-4"
        >
          A proven, structured and measurable approach that ensures HR excellence.
        </motion.p>

        {/* Steps Grid */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">

          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: "easeOut",
              }}
              whileHover={{
                y: -8,
                boxShadow: "0px 12px 30px rgba(26, 46, 106, 0.12)",
              }}
              className="relative bg-white rounded-2xl p-8 border border-primary/10 
              shadow-sm hover:shadow-xl transition-all backdrop-blur-sm"
            >
              {/* Floating Step Number */}
              <motion.div
                className="
                  absolute -top-6 left-1/2 -translate-x-1/2
                  w-14 h-14 rounded-full 
                  bg-gradient-to-br from-primary to-primaryDark
                  flex items-center justify-center
                  text-white text-xl font-bold shadow-lg
                "
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                {i + 1}
              </motion.div>

              {/* Card Content */}
              <div className="mt-10 text-center">
                <h4 className="text-xl font-semibold text-primary">{s.title}</h4>
                <p className="mt-3 text-neutral/70 leading-relaxed text-sm">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
