"use client";

import { motion } from "framer-motion";

export default function Industries() {
  const industries = [
    {
      title: "IT & Technology",
      roles: [
        "Software Developers",
        "IT Support & Networking",
        "Data Analysts",
        "Cyber Security",
      ],
    },
    {
      title: "BPO & Customer Support",
      roles: [
        "Call Center Executives",
        "Telecallers",
        "Customer Relationship Officers",
      ],
    },
    {
      title: "Banking & Finance",
      roles: ["Loan Officers", "Relationship Managers", "Accountants"],
    },
    {
      title: "Sales & Marketing",
      roles: ["Field Sales", "Digital Marketing", "Business Development"],
    },
    {
      title: "Healthcare",
      roles: ["Nurses", "Lab Technicians", "Hospital Administrators"],
    },
    {
      title: "Education",
      roles: ["Teachers", "Trainers", "Counselors"],
    },
    {
      title: "Retail & Hospitality",
      roles: ["Sales Staff", "Front Office", "Hotel Staff"],
    },
    {
      title: "Construction & Engineering",
      roles: ["Site Supervisors", "Civil Engineers", "Technicians"],
    },
    {
      title: "Logistics & Transportation",
      roles: ["Delivery Executives", "Warehouse Staff", "Drivers"],
    },
    {
      title: "Administration & HR",
      roles: ["HR Executives", "Office Admin", "Receptionists"],
    },
  ];

  return (
    <section
      id="industries"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container">
        <motion.h3
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center text-primary"
        >
          Industries We Serve
        </motion.h3>

        <p className="text-neutral/70 mt-3 text-center max-w-2xl mx-auto">
          Talent solutions tailored for every major industry sector.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((item, i) => (
            <motion.div
              key={i}
              className="
                p-8 rounded-2xl bg-white shadow-md 
                border border-neutral/10 
                hover:shadow-xl transition-all duration-300
              "
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -6 }}
            >
              {/* Gold Top Bar Animation */}
              <motion.div
                className="h-1 w-10 bg-gradient-to-r from-[#D94A1F] to-[#F2C17A] rounded-full mb-4"
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              />

              <h4 className="text-lg font-semibold text-primary">
                {item.title}
              </h4>

              <ul className="text-neutral/70 mt-3 text-sm space-y-1">
                {item.roles.map((role, index) => (
                  <li key={index}>• {role}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
