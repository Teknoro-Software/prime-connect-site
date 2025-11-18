"use client";

import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Card,
  CardBody,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import { motion } from "framer-motion";
import ContactSection from "../components/ContactSection";
import Process from "../components/ProcessSection";
import { Mail, MapPin, PhoneCall, Menu, X } from "lucide-react";
import Loader from "../components/Loader";

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader loading={true} />;

  return (
    <div className="relative overflow-hidden">
      <NavBar />

      <motion.div
        aria-hidden
        className="absolute -left-40 -top-28 w-96 h-96 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(240,192,80,0.12), transparent 35%)",
        }}
        animate={{ x: [0, 30, -20, 0], y: [0, 20, -10, 0] }}
        transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        aria-hidden
        className="absolute -right-40 -bottom-28 w-96 h-96 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 70% 80%, rgba(26,46,106,0.08), transparent 30%)",
        }}
        animate={{ x: [0, -30, 20, 0], y: [0, -20, 10, 0] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      />

      <main>
        <Hero />
        <Why />
        <Industries />
        <Services />
        <Testimonials />
        <Process />
        <FAQ />
        <CTA />
        <ContactSection />
        <Footer />
      </main>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        <div className="relative group">
          <span
            className="
      absolute right-20 bottom-3 bg-black/80 text-white text-xs px-3 py-1 rounded-md 
      opacity-0 group-hover:opacity-100 transition-all duration-300
      translate-y-1 group-hover:translate-y-0
      backdrop-blur-md shadow-lg
    "
          >
            WhatsApp Us
          </span>

          <div
            className="
        bg-[#25D366] p-5 rounded-full shadow-xl cursor-pointer
        hover:scale-110 transition transform
        animate-[float_3s_ease-in-out_infinite]
        relative
      "
          >
            <span
              className="
        absolute inset-0 rounded-full bg-[#25D366]/40 
        animate-ping
      "
            ></span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="h-7 w-7"
            >
              <path
                fill="#fff"
                d="M16 .5C7.44.5.5 7.44.5 16c0 2.8.73 5.53 2.13 7.94L.5 31.5l7.72-2.08A15.4 15.4 0 0 0 16 31.5c8.56 0 15.5-6.94 15.5-15.5S24.56.5 16 .5Zm0 28c-2.5 0-4.94-.67-7.08-1.94l-.5-.3-4.58 1.23 1.22-4.46-.33-.54A12.9 12.9 0 0 1 3.1 16c0-7.12 5.78-12.9 12.9-12.9S28.9 8.88 28.9 16 23.12 28.5 16 28.5Zm7.26-9.9c-.4-.2-2.35-1.16-2.72-1.3-.36-.13-.63-.2-.9.2-.26.4-1.03 1.3-1.27 1.57-.23.26-.47.3-.87.1-.4-.2-1.7-.63-3.24-2.02-1.2-1.06-2.02-2.37-2.26-2.77-.23-.4-.02-.62.17-.82.17-.17.4-.44.6-.66.2-.23.27-.4.4-.66.13-.26.07-.5-.03-.7-.1-.2-.9-2.17-1.24-2.97-.33-.8-.67-.7-.9-.7-.23 0-.5 0-.77 0-.26 0-.7.1-1.07.5-.36.4-1.4 1.37-1.4 3.33s1.44 3.86 1.64 4.12c.2.26 2.84 4.3 6.86 6 1 .43 1.77.7 2.37.9 1 .3 1.9.26 2.62.16.8-.1 2.35-.96 2.7-1.9.33-.94.33-1.75.23-1.93-.1-.2-.36-.3-.77-.5Z"
              />
            </svg>
          </div>

          <div
            className="
      absolute bottom-24 right-0 w-64 p-4 rounded-2xl
      bg-white/25 backdrop-blur-xl border border-white/30
      shadow-[0_8px_40px_rgba(0,0,0,0.25)]
      opacity-0 translate-y-4 pointer-events-none
      group-hover:opacity-100 group-hover:translate-y-0 
      group-hover:pointer-events-auto
      transition-all duration-500 ease-[cubic-bezier(.23,1,.32,1)]
    "
          >
            <div className="text-xs font-medium text-neutral-600 mb-2">
              Chat on WhatsApp
            </div>

            <div className="flex flex-col gap-2">
              <a
                href="https://wa.me/917356704922"
                target="_blank"
                className="
            bg-white/60 border border-white/40 rounded-xl px-4 py-2
            hover:bg-[#25D366]/20 hover:border-[#25D366]/50
            transition-all duration-300 flex items-center gap-2
          "
              >
                <span className="text-sm">+91 73567 04922</span>
              </a>

              <a
                href="https://wa.me/919567604911"
                target="_blank"
                className="
            bg-white/60 border border-white/40 rounded-xl px-4 py-2
            hover:bg-[#25D366]/20 hover:border-[#25D366]/50
            transition-all duration-300 flex items-center gap-2
          "
              >
                <span className="text-sm">+91 95676 04911</span>
              </a>
            </div>
          </div>
        </div>

        <div className="relative group">
          <span
            className="
      absolute right-20 bottom-3 bg-black/80 text-white text-xs px-3 py-1 rounded-md 
      opacity-0 group-hover:opacity-100 transition-all duration-300
      translate-y-1 group-hover:translate-y-0
      backdrop-blur-md shadow-lg
    "
          >
            Call Us
          </span>

          <div
            className="
        p-4 rounded-full bg-[#0F2348] shadow-[0_8px_25px_rgba(15,35,72,0.45)]
        hover:shadow-[0_12px_35px_rgba(15,35,72,0.65)]
        transition-all duration-300 cursor-pointer relative
        animate-[float_3s_ease-in-out_infinite_reverse]
      "
          >
            <div className="absolute inset-0 rounded-full bg-[#0F2348]/40 blur-xl animate-ping"></div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 384"
              className="h-8 w-8 relative z-10"
            >
              <path
                fill="#fff"
                d="M353.6 252.4c-22.3 0-44-3.5-63.9-10.4-9.9-3.5-21-1-28.2 6.5l-40.4 30.6c-50.9-27-92.3-68.4-119.3-119.3l30.6-40.4c7.1-7.1 9.7-18.3 6.5-28.2-6.9-19.9-10.4-41.6-10.4-63.9C128.5 12.4 116.1 0 101 0H30.4C15.3 0 3 12.4 3 27.6 3 229.9 154.1 381 356.4 381c15.1 0 27.6-12.4 27.6-27.6v-70.6c0-15.1-12.4-27.6-27.6-27.6z"
              />
            </svg>
          </div>

          <div
            className="
      absolute bottom-24 right-0 w-64 p-4 rounded-2xl
      bg-white/25 backdrop-blur-xl border border-white/30
      shadow-[0_8px_40px_rgba(0,0,0,0.25)]
      opacity-0 translate-y-4 pointer-events-none
      group-hover:opacity-100 group-hover:translate-y-0 
      group-hover:pointer-events-auto
      transition-all duration-500 ease-[cubic-bezier(.23,1,.32,1)]
    "
          >
            <div className="text-xs font-medium text-neutral-600 mb-2">
              Call Us
            </div>

            <div className="flex flex-col gap-2">
              <a
                href="tel:7356704922"
                className="bg-white/60 border border-white/40 rounded-xl px-4 py-2 hover:bg-[#0F2348]/15 hover:border-[#0F2348]/40 transition-all duration-300"
              >
                +91 73567 04922
              </a>

              <a
                href="tel:9567604911"
                className="bg-white/60 border border-white/40 rounded-xl px-4 py-2 hover:bg-[#0F2348]/15 hover:border-[#0F2348]/40 transition-all duration-300"
              >
                +91 95676 04911
              </a>

              <a
                href="tel:8921965050"
                className="bg-white/60 border border-white/40 rounded-xl px-4 py-2 hover:bg-[#0F2348]/15 hover:border-[#0F2348]/40 transition-all duration-300"
              >
                +91 89219 65050
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <Navbar
      maxWidth="xl"
      className="
        fixed top-0 left-0 right-0 z-50
        bg-white/60 
        backdrop-blur-2xl 
        border-b border-white/40 
        shadow-[0_8px_32px_rgba(0,0,0,0.06)]
      "
    >
      <NavbarBrand>
        <a href="#home" className="cursor-pointer">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src="/logo2.png"
              alt="Prime Connect"
              className="h-10 w-auto drop-shadow-lg"
              animate={{ scale: [1, 1.04, 1] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.div>
        </a>
      </NavbarBrand>

      <NavbarContent className="hidden md:flex gap-6" justify="end">
        {["Home", "Why", "Industries", "Services", "Process", "FAQ"].map(
          (t) => (
            <NavbarItem key={t}>
              <motion.a
                href={`#${t.toLowerCase()}`}
                className="
                  text-neutral/70 
                  font-medium 
                  relative
                  transition
                "
                whileHover={{ y: -2 }}
              >
                {t}
                <span
                  className="
                    absolute left-0 -bottom-1 
                    h-[2px] w-0 
                    bg-gradient-to-r from-[#F36B21] to-[#c24d12]
                    transition-all duration-300 
                    hover:w-full
                  "
                />
              </motion.a>
            </NavbarItem>
          )
        )}

        <NavbarItem>
          <Button
            as="a"
            href="#contact"
            className="
              px-5 py-2 rounded-xl 
              text-white font-semibold 
              shadow-[0_4px_14px_rgba(243,107,33,0.4)]
              bg-gradient-to-r from-[#F36B21] to-[#d85d16]
            "
          >
            Consult Now
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="md:hidden" justify="end">
        <NavbarMenuToggle
          aria-label="Toggle menu"
          icon={<Menu size={26} color="#0F2348" />}
        />
      </NavbarContent>

      <NavbarMenu className="backdrop-blur-2xl bg-white/70 shadow-xl">
        {["Home", "Why", "Industries", "Services", "Process", "FAQ"].map(
          (item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <a
                href={`#${item.toLowerCase()}`}
                className="
                  block py-3 px-2 
                  text-lg font-medium text-neutral-700 
                  hover:text-primary 
                  transition
                "
              >
                {item}
              </a>
            </NavbarMenuItem>
          )
        )}

        <NavbarMenuItem className="mt-4">
          <Button
            as="a"
            href="#contact"
            className="
              w-full py-3 rounded-xl 
              text-white font-semibold 
              bg-gradient-to-r from-[#F36B21] to-[#d85d16]
            "
          >
            Consult Now
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

function Hero() {
  return (
    <section id="home" className="relative py-28 overflow-hidden">
      <div
        className="
    absolute inset-0 
    bg-hero bg-cover bg-center bg-no-repeat
    bg-fixed 
  "
        style={{
          filter: "blur(14px)",
          transform: "scale(1.25)",
        }}
      />

      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

      <div className="relative container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="kicker">Trusted HR partner</div>

            <motion.h1
              className="text-5xl md:text-6xl font-extrabold mt-4 leading-tight"
              animate={{ x: [-6, 6, -6] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                fontFamily: "Playfair Display, serif",
                color: "var(--accent-dark)",
              }}
            >
              HR strategy & operations for growth-stage companies
            </motion.h1>

            <p className="text-[#F2F2F2] mt-6 max-w-xl">
              Prime Connect offers end-to-end HR consultancy, recruitment and
              staffing solutions built on trust, transparency and
              expertise—helping organizations hire smarter, operate efficiently
              and grow with the right talent.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <Button
                className="btn-gold px-6 py-3 rounded-lg"
                as="a"
                href="#contact"
              >
                Request Consultation
              </Button>
              <Button
                variant="bordered"
                // color="#"
                className="px-6 py-3 text-[#F0C050]"
                as="a"
                href="#services"
              >
                Our Services
              </Button>
            </div>

            <div className="mt-8 flex gap-8 text-sm text-[#D4A032]">
              <div>
                <div className="text-2xl font-semibold text-[#D94A1F]">
                  500+
                </div>
                <div>Hires completed</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-[#D94A1F]">99%</div>
                <div>Client retention</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-[#D94A1F]">15+</div>
                <div>Years combined HR experience</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Card className="glass rounded-3xl p-8 shadow-premium">
              <CardBody>
                <motion.img
                  src="/logo2.png"
                  className="mx-auto h-40"
                  alt="logo"
                  animate={{ y: [-8, 8, -8] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />

                <h3 className="text-xl font-semibold text-primary mt-6 text-center">
                  Prime Connect
                </h3>
                <p className="text-neutral/70 mt-2 text-center">
                  Strategic HR advisory • Payroll • Compliance • Talent
                </p>

                <div className="mt-6 flex justify-center gap-4">
                  <Button
                    variant="bordered"
                    color="primary"
                    as="a"
                    href="#services"
                  >
                    Explore
                  </Button>
                  <Button
                    className="btn-gold rounded-lg"
                    as="a"
                    href="#contact"
                  >
                    Contact
                  </Button>
                </div>
              </CardBody>
            </Card>

            <motion.div
              className="absolute -left-4 -top-4 bg-accent text-white px-3 py-1 rounded-md shadow-lg"
              animate={{ rotate: [0, 8, -8, 0], y: [0, -6, 6, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <div className="text-xs font-semibold">
                HR • Payroll • Training
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Why() {
  const reasons = [
    {
      title: "Personalized HR Solutions",
      copy: "Every HR strategy is tailored to match your organization’s goals and workforce needs.",
    },
    {
      title: "Experienced & Dedicated Team",
      copy: "Our HR experts bring industry knowledge and hands-on expertise to every engagement.",
    },
    {
      title: "Strong Employer & Talent Network",
      copy: "We connect businesses with qualified candidates across multiple industries.",
    },
    {
      title: "Trustworthy & Professional Service",
      copy: "We maintain transparency, reliability, and ethical standards throughout the process.",
    },
    {
      title: "Efficient Hiring, Perfect Talent Match",
      copy: "We streamline hiring cycles, ensuring the right candidates are placed quickly and accurately.",
    },
  ];

  return (
    <section id="why" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-primary"
          >
            Why Prime Connect
          </motion.h2>

          <p className="text-neutral/70 mt-3 max-w-2xl mx-auto">
            Prime Connect operates with commitment, expertise, and transparent
            HR practices.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.slice(0, 3).map((r, i) => (
            <motion.div
              key={r.title}
              className="
                p-8 rounded-2xl bg-white shadow-md border border-neutral/10 
                hover:shadow-xl transition-all 
                relative
              "
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -6 }}
            >
              <h4 className="text-lg font-semibold text-primary">{r.title}</h4>

              <motion.div
                className="
                  h-1 rounded-full mt-3 mb-3 
                  bg-gradient-to-r from-[#D94A1F] to-[#F2C17A]
                "
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              />

              <p className="text-neutral/70 mt-1 leading-relaxed">{r.copy}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:place-items-center mt-12 gap-10 md:gap-12">
          {reasons.slice(3).map((r, i) => (
            <motion.div
              key={r.title}
              className="
        p-8 rounded-2xl bg-white shadow-md border border-neutral/10 
        hover:shadow-xl transition-all 
        relative w-full md:w-[80%] lg:w-[70%]
      "
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.12 }}
              whileHover={{ y: -6 }}
            >
              <h4 className="text-lg font-semibold text-primary">{r.title}</h4>

              <motion.div
                className="
          h-1 rounded-full mt-3 mb-3 
          bg-gradient-to-r from-[#D94A1F] to-[#F2C17A]
        "
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.6, delay: 0.25 + i * 0.1 }}
              />

              <p className="text-neutral/70 mt-1 leading-relaxed">{r.copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  const items = [
    "IT",
    "Manufacturing",
    "Retail",
    "Healthcare",
    "Logistics",
    "BFSI",
  ];
  return (
    <section id="industries" className="py-20">
      <div className="container">
        <motion.h3
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center text-primary"
        >
          Industries we serve
        </motion.h3>
        <p className="text-neutral/70 mt-3 text-center max-w-2xl mx-auto">
          Domain-aware HR programs for every sector.
        </p>

        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it}
              className="
        p-6 rounded-2xl bg-white 
        shadow-md 
        border border-neutral/10
        hover:shadow-xl 
        transition-all duration-300
      "
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <motion.div
                className="h-1 w-10 bg-gradient-to-r from-[#D94A1F] to-[#F2C17A] rounded-full mb-4"
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              />

              <div className="text-lg font-semibold text-primary">{it}</div>

              <p className="text-neutral/70 mt-2 text-sm">
                Tailored HR programs & compliance frameworks.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      title: "HR Consultancy",
      bullets: [
        "HR policy guidance & development",
        "Employee management support",
        "Compliance & statutory advisory",
        "Onboarding & induction planning",
        "Organizational HR structuring",
      ],
    },
    {
      title: "Recruitment & Talent Acquisition",
      bullets: [
        "Candidate sourcing",
        "Resume screening",
        "Interview coordination",
        "Skill & profile evaluation",
        "Complete end-to-end hiring management",
      ],
    },
    {
      title: "Staffing Solutions",
      bullets: [
        "Full-time staffing",
        "Part-time & temporary staffing",
        "Contract staffing",
        "Industry-specific manpower supply",
      ],
    },
    {
      title: "Employee Support Services",
      bullets: [
        "Documentation & joining formalities",
        "Performance tracking assistance",
        "Employee lifecycle support",
        "HR-related query handling",
      ],
    },
    {
      title: "Career Guidance for Job Seekers",
      bullets: [
        "Resume improvement",
        "Interview preparation",
        "Career counselling",
        "Job opportunity alignment",
      ],
    },
    {
      title: "HR Operations Support",
      bullets: [
        "Smooth communication with clients & candidates",
        "Fast turnaround time",
        "Verified & high-quality placements",
        "Ethical & transparent HR practices",
      ],
    },
  ];

  return (
    <section id="services" className="relative py-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-services bg-cover bg-center bg-no-repeat"
        style={{
          filter: "blur(14px)",
          transform: "scale(1.12)",
        }}
      />

      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />

      <div className="relative z-10 container">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center text-primary"
        >
          HR Solutions We Provide
        </motion.h3>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="relative p-8 rounded-2xl bg-white shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <motion.div
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#F2C17A]/30 blur-2xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <h4 className="text-xl font-semibold text-primary relative z-10">
                {s.title}
              </h4>

              <ul className="mt-3 text-neutral/70 text-sm relative z-10 space-y-1">
                {s.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      q: "Prime Connect reduced our hiring time by 40% and improved candidate quality.",
      by: "Rohit Sharma, TechCo",
    },
    {
      q: "Payroll accuracy improved drastically — our finance team trusts them.",
      by: "Asha Menon, RetailPlus",
    },
    {
      q: "Their L&D program uplifted manager performance across departments.",
      by: "Vikram Patel, MediCare",
    },
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container">
        <motion.h3
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center text-primary"
        >
          Client Testimonials
        </motion.h3>
        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {items.map((t, i) => (
            <motion.div
              key={i}
              className="
        p-8 bg-white rounded-2xl shadow-md 
        border border-neutral/10 
        hover:shadow-xl transition-all duration-300
      "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <motion.div
                className="h-1 w-12 bg-gradient-to-r from-[#D94A1F] to-[#F2C17A] rounded-full mb-4"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 0.6 }}
              />

              <motion.div
                className="text-[#D94A1F] text-3xl mb-3"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                “
              </motion.div>

              <p className="text-neutral/80 leading-relaxed">{t.q}</p>
              <p className="mt-5 text-sm font-medium text-primary">— {t.by}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "Do you manage hiring end-to-end?",
      a: "Yes — sourcing to onboarding.",
    },
    {
      q: "Do you handle payroll & statutory filings?",
      a: "Yes — PF, ESI, TDS & payroll cycles.",
    },
    {
      q: "Can you provide onsite HR?",
      a: "Yes — HRBP or hybrid support available.",
    },
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container max-w-4xl">
        <motion.h3
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center text-primary"
        >
          FAQ
        </motion.h3>

        <div className="mt-8 space-y-4">
          {faqs.map((f, i) => (
            <FAQItem key={i} question={f.q} answer={f.a} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({
  question,
  answer,
  delay,
}: {
  question: string;
  answer: string;
  delay: number;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <motion.div
      className="
        bg-white rounded-xl border border-neutral/15 
        p-6 shadow-sm cursor-pointer select-none
      "
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-start justify-between gap-4">
        <h4 className="font-semibold text-primary text-lg flex-1">
          {question}
        </h4>

        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-primary mt-1 text-lg"
        >
          ▼
        </motion.span>
      </div>

      <motion.div
        className="h-[2px] bg-gradient-to-r from-[#D94A1F] to-[#F2C17A] rounded-full mt-3"
        initial={{ width: 0 }}
        animate={{ width: open ? "60px" : 0 }}
        transition={{ duration: 0.4 }}
      />

      <motion.div
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
          marginTop: open ? 12 : 0,
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="overflow-hidden text-neutral/70 text-sm leading-relaxed"
      >
        {answer}
      </motion.div>
    </motion.div>
  );
}

function CTA() {
  return (
    <section
      className="py-20"
      style={{ background: "linear-gradient(90deg,#1A2E6A,#0F2348)" }}
    >
      <div className="container text-center text-white">
        <motion.h3
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-[#F36B21]"
        >
          Ready to upgrade your HR?
        </motion.h3>
        <p className="mt-3 max-w-2xl mx-auto text-white/80">
          Schedule a consultation with our senior HR consultants.
        </p>
        <div className="mt-6">
          <Button
            className="btn-gold px-8 py-3 rounded-lg"
            as="a"
            href="#contact"
          >
            Schedule Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="
        relative 
        mt-20
        bg-gradient-to-b from-white to-[#f7f7fb] 
        border-t border-neutral/20 
        pt-16 pb-5
      "
    >
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#F36B21] to-[#c24d12]" />

      <div className="container grid md:grid-cols-4 gap-10">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <img src="/logo2.png" className="h-12 drop-shadow-md" />
          </div>

          <p className="text-neutral/60 text-sm leading-relaxed max-w-xs">
            Premium HR consulting, tailored solutions, and trusted advisory for
            growth-focused businesses.
          </p>

          <div className="flex gap-4 text-neutral/50">
            <a href="#" className="hover:text-primary transition">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a href="#" className="hover:text-primary transition">
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a href="#" className="hover:text-primary transition">
              <i className="fab fa-instagram text-xl"></i>
            </a>
          </div>
        </div>

        <div>
          <h5 className="footer-heading">Company</h5>
          <ul className="footer-links text-sm">
            <li>
              <a href="#why">Why Us</a>
            </li>
            <li>
              <a href="#industries">Industries</a>
            </li>
            <li>
              <a href="#process">Our Approach</a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="footer-heading">Services</h5>
          <ul className="footer-links text-sm">
            <li>HR Consultancy</li>
            <li>Recruitment & Talent Acquisition</li>
            <li>Staffing Solutions</li>
            <li>Employee Support Services</li>
            <li>Career Guidance for Job Seekers</li>
          </ul>
        </div>

        <div>
          <h5 className="footer-heading">Get in Touch</h5>

          <ul className="footer-links space-y-2">
            <li className="flex items-start text-neutral/70 leading-relaxed">
              <PhoneCall size={16} className="mt-1 mr-2" color="#D94A1F" />
              <span className="text-sm">
                +91 73567 04922 <br />
                +91 95676 04911 <br />
                +91 89219 65050
              </span>
            </li>

            <li className="flex items-center text-neutral/70">
              <Mail size={16} className="mr-2 " color="#D94A1F" />
              <span className="text-sm">info@primeconnecthr.com</span>
            </li>

            <li className="flex items-start text-neutral/70 leading-relaxed">
              <a
                href="https://www.google.com/maps?q=TC+41/2343(4),+Manacaud+PO,+Thiruvananthapuram,+Kerala+695009"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start hover:text-primary transition"
              >
                <MapPin
                  size={18}
                  className="mt-1 mr-1 text-[#D94A1F] hover:scale-110 transition-transform"
                />

                <div className="text-sm font-medium text-neutral-800 hover:text-[#D94A1F]">
                  TC 41/2343(4), Manacaud PO <br />
                  Thiruvananthapuram, Kerala <br />
                  PIN 695009
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-neutral/20 text-center text-sm text-neutral/60">
        © {new Date().getFullYear()} Prime Connect HR Management Services Pvt.
        Ltd. All rights reserved.
      </div>
    </footer>
  );
}
