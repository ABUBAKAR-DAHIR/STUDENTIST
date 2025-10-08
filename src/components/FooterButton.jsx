import { motion } from "framer-motion";

export default function FooterButton({ children }) {
  const size = 44;
  const strokeWidth = 2;
  const r = (size / 2) - strokeWidth;
  const c = 2 * Math.PI * r;

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      className="relative w-[62px] h-[62px] flex items-center justify-center cursor-pointer"
    >
      {/* Animated Circle Border */}
      <svg
        className="absolute pointer-events-none rotate-[-90deg]" // rotate so it starts at top
        width={size}
        height={size}
        style={{ zIndex: 10 }}
      >
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="#F9F509"
          strokeWidth={strokeWidth}
          strokeDasharray={c}
          strokeDashoffset={c} // ensures it starts fully hidden
          variants={{
            rest: { strokeDashoffset: c },
            hover: {
              strokeDashoffset: 0,
              transition: { duration: 0.5, ease: "easeInOut" },
            },
          }}
        />
      </svg>

      {/* Inner content */}
      <span className="relative z-2 size-11 flex items-center justify-center rounded-full border-2 border-black transition-all duration-200 text-[20px]">
        {children}
      </span>
    </motion.div>
  );
}
