/* eslint-disable react-hooks/purity */
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LoaderAPlus({ loading }: { loading: boolean }) {
  const particles = Array.from({ length: 12 });

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          <motion.div
            animate={{ rotate: [0, 2, -2, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="relative w-64 h-64 flex items-center justify-center"
          >
            {/* Gold floating particles */}
            {particles.map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-[#F36B21]"
                initial={{
                  x: 0,
                  y: 0,
                  opacity: 0.6,
                  scale: 0.4,
                }}
                animate={{
                  x: [
                    20 - Math.random() * 40,
                    -20 + Math.random() * 40,
                    20 - Math.random() * 40,
                  ],
                  y: [
                    20 - Math.random() * 40,
                    -20 + Math.random() * 40,
                    20 - Math.random() * 40,
                  ],
                  opacity: [0.4, 1, 0.5],
                }}
                transition={{
                  duration: 3 + Math.random() * 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            ))}

            <motion.div
              className="absolute inset-0 rounded-full border-[6px] border-[#F36B21]/40 shadow-[0_0_14px_rgba(243,107,33,0.35)]"
              animate={{ rotate: 360 }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="absolute inset-8 rounded-full border-[3px] border-[#F36B21]"
              animate={{
                rotate: -360,
                scale: [1, 1.06, 1],
              }}
              transition={{
                rotate: { duration: 6, repeat: Infinity, ease: "linear" },
                scale: { duration: 3.6, repeat: Infinity, ease: "easeInOut" },
              }}
            />

            <motion.div
              animate={{
                scale: [1, 1.04, 1],
                filter: [
                  "drop-shadow(0 0 2px rgba(243,107,33,0.3))",
                  "drop-shadow(0 0 12px rgba(243,107,33,0.6))",
                  "drop-shadow(0 0 2px rgba(243,107,33,0.3))",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="relative z-[20]"
            >
              <Image
                src="/logo.png"
                width={160}
                height={160}
                alt="Prime Connect"
                className="object-contain"
              />
            </motion.div>
          </motion.div>

          <motion.p
            className="absolute bottom-[120px] text-sm uppercase tracking-[0.3em] font-medium"
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
            }}
            style={{
              background: "linear-gradient(90deg, #F36B21, #c24d12, #F36B21)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Loading…
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
