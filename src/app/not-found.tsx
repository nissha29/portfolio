"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { DATA } from "@/data/Resume";

export default function NotFound() {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center bg-neutral-950 text-neutral-200 relative overflow-hidden"
      style={{
        backgroundImage: "url('/bg-texture.svg')",
        backgroundPosition: "center",
        scrollBehavior: "smooth",
      }}
    >
      <div className="absolute inset-0" />

      <div className="relative z-10 flex flex-col items-center space-y-8 text-center p-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            y: [0, -20, 0],
          }}
          transition={{
            duration: 0.8,
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          drag
          dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
          whileHover={{ scale: 1.1, cursor: "grab" }}
          whileTap={{ cursor: "grabbing" }}
          className="relative"
        >
          <h1 className="text-[150px] md:text-[200px] font-bold text-rose-500/50 select-none leading-none tracking-tighter">
            404
          </h1>
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              x: [-4, 4, -4, 0],
              y: [2, -2, 2, 0],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatDelay: Math.random() * 5 + 2,
            }}
          >
            <h1 className="text-[150px] md:text-[200px] font-bold text-rose-700 select-none leading-none tracking-tighter blur-sm">
              404
            </h1>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-4 max-w-lg"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-100">
            Page Not Found
          </h2>
          <p className="text-neutral-400 text-lg">
            But hey, since you&apos;re here...
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-rose-500/30 via-purple-500/30 to-cyan-500/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h3 className="relative text-2xl md:text-3xl font-bold bg-gradient-to-r from-rose-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent px-4 py-2">
              Skip the queue, hire me!
            </h3>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center flex-wrap">
            {Object.entries(DATA.contact.social).map(([key, social]) => {
              const Icon = social.icon;
              return (
                <Link
                  key={key}
                  href={social.url}
                  target="_blank"
                  title={social.name}
                  className="group relative"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-rose-500/20 group-hover:via-purple-500/20 group-hover:to-cyan-500/20 blur-lg transition-all duration-500 scale-0 group-hover:scale-150"></div>

                  <div className="relative border border-neutral-700/50 bg-neutral-900/50 backdrop-blur-sm rounded-full w-14 h-14 flex justify-center items-center cursor-pointer transition-all duration-500 text-neutral-400 hover:text-white hover:border-white group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] group-hover:bg-neutral-800/50">
                    <Icon />
                  </div>
                </Link>
              );
            })}
          </div>

          <p className="text-neutral-500 text-sm mt-4">
            Or{" "}
            <Link
              href="/"
              className="text-rose-400 hover:text-rose-300 underline transition-colors"
            >
              go back home
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
