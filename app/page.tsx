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
              Boutique HR consultancy combining compliance rigor with
              human-centered service. We help scale teams, build payroll
              certainty and improve people performance.
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
      title: "Tailored Programs",
      copy: "Custom roadmaps aligned to your business stage.",
    },
    {
      title: "Compliance-first",
      copy: "Statutory rigor baked into every process.",
    },
    {
      title: "People-centered",
      copy: "Practical HR that respects employee experience.",
    },
  ];

  return (
    <section id="why" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold"
          >
            Why Prime Connect
          </motion.h2>
          <p className="text-neutral/70 mt-2 max-w-2xl mx-auto">
            A consultancy approach with the rigor of an operations partner.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              className="
        p-6 rounded-2xl bg-white shadow-md
        hover:shadow-xl transition-shadow duration-300
        border border-neutral/10
      "
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -6 }}
            >
              {/* animated top bar */}
              <motion.div
                className="h-1 w-10 bg-gradient-to-r from-[#D94A1F] to-[#F2C17A] rounded-full mb-4"
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              />

              <h4 className="text-lg font-semibold text-primary">{r.title}</h4>
              <p className="mt-2 text-neutral/70">{r.copy}</p>
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
      title: "Recruitment",
      bullets: ["Job mapping", "Sourcing", "Evaluation", "Onboarding"],
    },
    {
      title: "Payroll & Compliance",
      bullets: ["Payroll cycles", "PF/ESI", "Statutory filings"],
    },
    {
      title: "HR Advisory",
      bullets: ["Policies", "Audits", "Legal alignment"],
    },
    { title: "Learning & Development", bullets: ["Leadership", "Workshops"] },
    { title: "Engagement", bullets: ["Pulse surveys", "Recognition"] },
    { title: "Outsourced HR", bullets: ["HRBP", "Admin", "HRIS"] },
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
              {/* Floating Gold Blob */}
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
              {/* Gold accent line */}
              <motion.div
                className="h-1 w-12 bg-gradient-to-r from-[#D94A1F] to-[#F2C17A] rounded-full mb-4"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 0.6 }}
              />

              {/* Quote icon */}
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
            <FAQItem
              key={i}
              question={f.q}
              answer={f.a}
              delay={i * 0.1}
            />
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
        {/* Question */}
        <h4 className="font-semibold text-primary text-lg flex-1">
          {question}
        </h4>

        {/* Chevron */}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-primary mt-1 text-lg"
        >
          ▼
        </motion.span>
      </div>

      {/* Gold Accent Line */}
      <motion.div
        className="h-[2px] bg-gradient-to-r from-[#D94A1F] to-[#F2C17A] rounded-full mt-3"
        initial={{ width: 0 }}
        animate={{ width: open ? "60px" : 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* Answer */}
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

          {/* Social icons */}
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

        {/* COMPANY */}
        <div>
          <h5 className="footer-heading">Company</h5>
          <ul className="footer-links">
            <li>
              <a href="#why">Why Us</a>
            </li>
            <li>
              <a href="#industries">Industries</a>
            </li>
            <li>
              <a href="#process">Process</a>
            </li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h5 className="footer-heading">Services</h5>
          <ul className="footer-links">
            <li>Recruitment</li>
            <li>Payroll & Compliance</li>
            <li>HR Advisory</li>
            <li>Training & L&D</li>
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
              <MapPin size={16} className="mt-1 mr-2 " color="#D94A1F" />
              <span className="text-sm">
                TC 41/2343(4), Manacaud PO
                <br />
                Thiruvananthapuram, Kerala
                <br />
                PIN 695009
              </span>
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
