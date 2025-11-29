'use client'

import React from 'react';
import { motion } from "motion/react"

interface TimelineItemProps {
    title: string;
    subtitle: string;
    date: string;
    location: string;
    description?: string;
    isLast?: boolean;
}

const TimelineItem = ({ title, subtitle, date, location, description, isLast }: TimelineItemProps) => {
    return (
        <div className="relative flex gap-6 pb-12 group">

            {!isLast && (
                <div className="absolute left-[9px] top-2 h-full w-[2px] bg-neutral-800 group-hover:bg-neutral-700 transition-colors duration-300" />
            )}

            <div className="relative z-10 mt-2">
                <div className="h-5 w-5 rounded-full border-2 border-neutral-800 bg-neutral-950 group-hover:border-rose-500/50 group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-neutral-600 group-hover:bg-rose-400 transition-colors duration-300" />
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col gap-2 flex-1"
            >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                    <div>
                        <h3 className="text-lg font-semibold text-neutral-200 group-hover:text-rose-400 transition-colors duration-300">
                            {title}
                        </h3>
                        <p className="text-sm font-medium text-neutral-400">
                            {subtitle}
                        </p>
                    </div>
                    <div className="flex flex-col gap-1 justify-end items-end">
                        <span className="text-neutral-500 whitespace-nowrap">
                            {date}
                        </span>
                        <span className="text-rose-400/80 whitespace-nowrap text-sm">
                            {location}
                        </span>
                    </div>
                </div>

                {description && (
                    <p className="text-neutral-400 text-[15px] leading-relaxed max-w-2xl">
                        {description}
                    </p>
                )}
            </motion.div>
        </div>
    );
};

interface TimelineProps {
    items: Omit<TimelineItemProps, 'isLast'>[];
}

export const Timeline = ({ items }: TimelineProps) => {
    return (
        <div className="flex flex-col pt-8 pl-2">
            {items.map((item, index) => (
                <TimelineItem
                    key={index}
                    {...item}
                    isLast={index === items.length - 1}
                />
            ))}
        </div>
    );
};
