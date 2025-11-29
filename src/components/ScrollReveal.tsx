"use client";

import { motion, useScroll, useTransform, useSpring, useVelocity } from "motion/react";
import { ReactNode, useRef } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    speed?: number;
}

export const ScrollReveal = ({ children, className, speed = 0.0001 }: ScrollRevealProps) => {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const yRange = 100 * speed * 10;
    const y = useTransform(scrollYProgress, [0, 1], [yRange, -yRange]);

    const { scrollY } = useScroll();
    const velocity = useVelocity(scrollY);


    const rotateXRawSubtle = useTransform(velocity, [-1000, 1000], [-1, 1]);
    const rotateX = useSpring(rotateXRawSubtle, { mass: 0.1, stiffness: 200, damping: 20 });

    const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    const z = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [-20, 0, 0, -20]);

    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95]);

    return (
        <div
            ref={ref}
            className={`perspective-1000 ${className}`}
            style={{ perspective: "1000px" }}
        >
            <motion.div
                style={{
                    y,
                    z,
                    rotateX,
                    opacity,
                    scale,
                    transformStyle: "preserve-3d",
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default ScrollReveal;
