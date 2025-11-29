import { ArrowUpRight } from "@/icons/Icons";
import Link from "next/link";
import { ReactNode } from "react";

interface BentoGridProps {
    children: ReactNode;
    className?: string;
}

export const BentoGrid = ({ children, className }: BentoGridProps) => {
    return (
        <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-2 max-w-7xl mx-auto ${className}`}
        >
            {children}
        </div>
    );
};

interface BentoGridItemProps {
    title: string;
    description: string;
    className?: string;
    href: string;
    technologies: readonly string[];
    index: number;
}

export const BentoGridItem = ({
    title,
    description,
    className,
    href,
    technologies,
    index,
}: BentoGridItemProps) => {
    const isLarge = index === 0 || index === 3 || index === 4;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { currentTarget, clientX, clientY } = e;
        const { left, top } = currentTarget.getBoundingClientRect();
        const x = clientX - left;
        const y = clientY - top;
        currentTarget.style.setProperty("--x", `${x}px`);
        currentTarget.style.setProperty("--y", `${y}px`);
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            className={`
        row-span-1 group/bento 
        hover:shadow-xl transition duration-200 shadow-input 
        p-4
        justify-between flex flex-col space-y-2
        relative overflow-hidden hover:cursor-pointer
        shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]
        hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_4px_20px_rgba(0,0,0,0.5)]
        ${isLarge ? "md:col-span-2" : "md:col-span-1"} 
        ${className}
      `}
        >
            <div
                className="pointer-events-none absolute -inset-px transition duration-300 opacity-0 group-hover/bento:opacity-100"
                style={{
                    background: `rgba(159, 18, 57, 0.15) url('/bg-texture.svg')`,
                    maskImage: `radial-gradient(400px circle at var(--x) var(--y), black, transparent 50%)`,
                    WebkitMaskImage: `radial-gradient(400px circle at var(--x) var(--y), black, transparent 50%)`,
                    WebkitMaskSize: "100%",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    maskSize: "100%",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                    WebkitMaskOrigin: "border-box",
                    WebkitMaskClip: "border-box",
                    backgroundBlendMode: "multiply",
                    backgroundSize: "cover",
                }}
            />
            <div className="group-hover/bento:translate-x-2 transition duration-200 flex flex-col h-full justify-between relative z-10">
                <div>
                    <div className="flex justify-between items-start mb-4">
                        <div className="font-sans font-bold text-neutral-200 text-xl">
                            {title}
                        </div>
                        <Link
                            href={href}
                            target="_blank"
                            className="p-1.5 rounded-full border border-neutral-700 hover:border-neutral-300 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <ArrowUpRight className="w-4 h-4 text-neutral-300" />
                        </Link>
                    </div>
                    <div className="font-sans font-normal text-neutral-400 text-sm line-clamp-4 mb-4">
                        {description}
                    </div>
                </div>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, i) => (
                        <span key={i} className="px-2.5 py-1 text-xs border border-neutral-700 text-neutral-400">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            <div className="absolute inset-0 border border-white/10 group-hover/bento:border-white/20 transition-colors duration-200 pointer-events-none" />

            <div className="absolute left-0 top-0 h-6 w-6 border-l-4 border-t-4 border-white/10 group-hover/bento:border-white/30 transition-colors duration-200" />
            <div className="absolute right-0 top-0 h-6 w-6 border-r-4 border-t-4 border-white/10 group-hover/bento:border-white/30 transition-colors duration-200" />
            <div className="absolute left-0 bottom-0 h-6 w-6 border-l-4 border-b-4 border-white/10 group-hover/bento:border-white/30 transition-colors duration-200" />
            <div className="absolute right-0 bottom-2 h-6 w-6 border-r-4 border-b-4 border-white/10 group-hover/bento:border-white/30 transition-colors duration-200" />
        </div>
    );
};
