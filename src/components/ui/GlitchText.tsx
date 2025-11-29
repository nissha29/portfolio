'use client';

import { motion } from 'motion/react';

export default function GlitchText({ text }: { text: string }) {
    return (
        <div className="relative inline-block">
            <span className="relative z-10">{text}</span>
            <motion.span
                className="absolute top-0 left-0 -z-10 text-rose-500/50 blur-[0.5px] select-none"
                animate={{
                    x: [-3, 5, -5, 5],
                    y: [2, -5, 5, -5],
                    opacity: [0.5, 0.9, 0.5]
                }}
                transition={{
                    duration: 0.2,
                    repeat: Infinity,
                    repeatDelay: Math.random() * 2 + 1
                }}
            >
                {text}
            </motion.span>
            <motion.span
                className="absolute top-0 left-0 -z-10 text-blue-500/50 blur-[2px] select-none"
                animate={{
                    x: [3, -3, 3, 0],
                    y: [-2, 2, -2, 0],
                    opacity: [0.5, 0.9, 0.5]
                }}
                transition={{
                    duration: 0.3,
                    repeat: Infinity,
                    repeatDelay: Math.random() * 2 + 1
                }}
            >
                {text}
            </motion.span>
        </div>
    );
}
