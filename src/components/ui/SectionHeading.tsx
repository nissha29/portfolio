export default function SectionHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative inline-block group">
      {/* Background glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-rose-500/20 via-purple-500/10 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Heading text */}
      <h2
        className="relative text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-200 to-white group-hover:from-rose-300 group-hover:via-purple-300 group-hover:to-white transition-all duration-500"
        style={{
          textShadow:
            "0 0 30px rgba(244, 114, 182, 0.2), 0 0 60px rgba(244, 114, 182, 0.1)",
        }}
      >
        {children}
      </h2>

      {/* Underline accent */}
      <div className="absolute -bottom-1 left-0 w-20 h-[3px] bg-gradient-to-r from-rose-400 via-purple-400 to-transparent opacity-70 group-hover:w-32 group-hover:opacity-100 transition-all duration-500"></div>
    </div>
  );
}
