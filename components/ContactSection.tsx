"use client";

import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaUser,
  FaMobileAlt,
  FaRegCommentDots,
} from "react-icons/fa";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  
  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycby1u06dR8CavQn0RJ73-kwnllJhKzPNpJHK2bvEX4CB3SOxaeVD-vo7ky4XiVGnffnC/exec";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(SCRIPT_URL, {
        redirect: "follow",
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      });

      const resultText = await response.text();
      const result = JSON.parse(resultText);

      if (response.ok && result.status === "success") {
        setSuccess("Message sent successfully ✨");
      } else {
        console.error("Form submission error:", result.message);
      }
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      setFormData({ name: "", email: "", mobile: "", message: "" });
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Get In <span className="text-accent">Touch</span>
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-accent rounded-full mb-10"
          />

          <p className="text-neutral/70 text-lg max-w-md">
            Contact us today — we typically respond within a few hours and are
            happy to discuss your HR needs.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mt-12">

            {/* Card 1 */}
            <motion.div
              className="bg-white shadow-md rounded-xl p-6 border border-primary/10"
              whileHover={{ scale: 1.03 }}
            >
              <div className="bg-primary p-3 rounded-full inline-flex mb-4">
                <FaPhoneAlt className="text-white text-xl" />
              </div>
              <h3 className="font-semibold text-lg text-primary mb-2">
                Let’s Talk
              </h3>
              <p className="text-neutral/70 text-sm leading-relaxed">
                Call us anytime — our HR experts are ready to guide you.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="bg-white shadow-md rounded-xl p-6 border border-primary/10"
              whileHover={{ scale: 1.03 }}
            >
              <div className="bg-primary p-3 rounded-full inline-flex mb-4">
                <FaEnvelope className="text-white text-xl" />
              </div>
              <h3 className="font-semibold text-lg text-primary mb-2">
                Write to Us
              </h3>
              <p className="text-neutral/70 text-sm leading-relaxed">
                We respond quickly to all email inquiries.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral/40" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name*"
                required
                className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-primary text-neutral/80"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral/40" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address*"
                required
                className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-primary text-neutral/80"
              />
            </div>

            {/* Mobile */}
            <div className="relative">
              <FaMobileAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral/40" />
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter your mobile*"
                required
                className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-primary text-neutral/80"
              />
            </div>

            {/* Message */}
            <div className="relative">
              <FaRegCommentDots className="absolute left-3 top-4 text-neutral/40" />
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message*"
                required
                className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-primary text-neutral/80"
              />
            </div>

            {/* Button */}
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-primary text-white px-6 py-3 rounded-full w-full sm:w-auto shadow hover:bg-primaryDark transition"
            >
              {loading ? "Sending…" : "Send Message"}
            </motion.button>

            {/* Success Message */}
            {success && (
              <p className="text-green-600 text-sm pt-2">{success}</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
