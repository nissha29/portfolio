'use client';

import Link from 'next/link'
import { motion } from 'motion/react'

export default function NotFound() {
    return (
        <div
            className="min-h-screen w-full flex flex-col items-center justify-center bg-neutral-950 text-neutral-200 relative overflow-hidden"
            style={{ backgroundImage: "url('/bg-texture.svg')", backgroundPosition: "center", scrollBehavior: "smooth" }}
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
                            ease: "easeInOut"
                        }
                    }}
                    drag
                    dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
                    whileHover={{ scale: 1.1, cursor: 'grab' }}
                    whileTap={{ cursor: 'grabbing' }}
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
                            opacity: [0.4, 0.7, 0.4]
                        }}
                        transition={{
                            duration: 0.2,
                            repeat: Infinity,
                            repeatDelay: Math.random() * 5 + 2
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
                        Oops! You&apos;ve ventured into the void.
                    </h2>
                    <p className="text-neutral-400 text-lg">
                        Looks like this page got lost in the matrix, or maybe it never existed.
                        Either way, there&apos;s nothing to see here but digital dust.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <Link
                        href="/"
                        className="group relative inline-flex items-center gap-2 p-4 bg-neutral-100 text-neutral-950 font-medium transition-all duration-300 hover:scale-105"
                    >
                        <span>Teleport Home</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="group-hover:translate-x-1 transition-transform"
                        >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}
