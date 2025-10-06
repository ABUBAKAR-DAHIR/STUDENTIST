import { useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export const SparklesCore = ({
  particleColor = "#e60a64",
  particleDensity = 500,
  className = "",
}) => {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: false }, // <-- important!
      background: { color: "transparent" },
      particles: {
        number: { value: particleDensity },
        color: { value: particleColor },
        size: { value: { min: 0.25, max: 1 } },
        move: { enable: true, speed: 0.6 },
      },
    }),
    [particleColor, particleDensity]
  );

  return <Particles id="tsparticles" options={options} className={className} />;
};
