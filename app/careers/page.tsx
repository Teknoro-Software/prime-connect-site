/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, Tag, DollarSign, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";
import Loader from "../../components/Loader";

export default function CareersPage() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("/api/jobs");
        const data = await res.json();
        setJobs(data.jobs || []);
      } catch (err) {
        console.error("Failed to load jobs", err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  if (loading) return <Loader loading={true} />;

  return (
    <section id="careers" className="py-20 container">
      <NavBar />

      <motion.h1
        className="text-4xl md:text-5xl font-bold text-primary text-center mt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Explore Career Opportunities
      </motion.h1>

      <p className="text-neutral/70 text-center max-w-2xl mx-auto mt-3">
        Apply for open roles across multiple industries. We match talent with
        the right opportunities.
      </p>

      {!loading && jobs.length === 0 && (
        <motion.div
          className="text-center mt-16 p-10 bg-white shadow rounded-xl border border-neutral/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Briefcase size={48} className="mx-auto text-primary mb-4" />
          <h2 className="text-xl font-semibold text-primary">
            No openings right now
          </h2>
          <p className="text-neutral/60 mt-2">
            Please check back later — new positions are added soon.
          </p>
        </motion.div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {jobs.map((job, i) => (
          <motion.div
            key={job._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link
              href={`/careers/${job._id}`}
              className="block bg-white p-6 rounded-2xl border border-neutral/10 
              shadow-sm hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-semibold text-primary">
                {job.title}
              </h3>

              {job.category && (
                <div className="flex items-center gap-2 mt-2 text-sm text-neutral/60">
                  <Tag size={14} /> {job.category}
                </div>
              )}

              <div className="flex items-center gap-2 mt-3 text-sm text-neutral/60">
                <MapPin size={16} /> {job.location}
              </div>

              <div className="flex items-center gap-2 mt-1 text-sm text-neutral/60">
                <Clock size={16} /> {job.type}
              </div>

              {job.salary && (
                <div className="flex items-center gap-2 mt-1 text-sm text-neutral/60">
                  <DollarSign size={16} /> {job.salary}
                </div>
              )}

              <button
                className="mt-5 px-4 py-2 bg-primary text-white rounded-lg 
                hover:bg-primaryDark transition"
              >
                View & Apply
              </button>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function NavBar() {
  const menuItems = [
    "Home",
    "Why",
    "Industries",
    "Services",
    "Careers",
    "Process",
    "FAQ",
  ];

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
      {/* BRAND */}
      <NavbarBrand>
        <Link href="/" className="cursor-pointer">
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
        </Link>
      </NavbarBrand>

      {/* DESKTOP MENU */}
      <NavbarContent className="hidden md:flex gap-6" justify="end">
        {menuItems.map((item) => {
          const href =
            item === "Home"
              ? "/"
              : item === "Careers"
              ? "/careers"
              : `/#${item.toLowerCase()}`;

          return (
            <NavbarItem key={item}>
              <Link href={href}>
                <motion.span
                  className="text-neutral/70 font-medium relative transition cursor-pointer"
                  whileHover={{ y: -2 }}
                >
                  {item}
                  <span
                    className="
                      absolute left-0 -bottom-1 
                      h-[2px] w-0 
                      bg-gradient-to-r from-[#F36B21] to-[#c24d12]
                      transition-all duration-300 
                      group-hover:w-full
                    "
                  />
                </motion.span>
              </Link>
            </NavbarItem>
          );
        })}

        <NavbarItem>
          <Button
            as={Link}
            href="/#contact"
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

      {/* MOBILE TOGGLE */}
      <NavbarContent className="md:hidden" justify="end">
        <NavbarMenuToggle
          aria-label="Toggle menu"
          icon={<Menu size={26} color="#0F2348" />}
        />
      </NavbarContent>

      {/* MOBILE MENU */}
      <NavbarMenu className="backdrop-blur-2xl bg-white/70 shadow-xl">
        {menuItems.map((item, index) => {
          const href =
            item === "Home"
              ? "/"
              : item === "Careers"
              ? "/careers"
              : `/#${item.toLowerCase()}`;

          return (
            <NavbarMenuItem key={index}>
              <Link
                href={href}
                className="
                  block py-3 px-2 
                  text-lg font-medium text-neutral-700 
                  hover:text-primary 
                  transition
                "
              >
                {item}
              </Link>
            </NavbarMenuItem>
          );
        })}

        <NavbarMenuItem className="mt-4">
          <Button
            as={Link}
            href="/#contact"
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
