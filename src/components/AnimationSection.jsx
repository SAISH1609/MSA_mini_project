import { useInView } from "./useInView";
import { useState } from "react";

export default function AnimationSection({ brand }) {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const [triggered, setTriggered] = useState(false);
  const [key, setKey] = useState(0);

  const handleReplay = () => {
    setTriggered(false);
    setTimeout(() => {
      setKey((k) => k + 1);
      setTriggered(true);
    }, 50);
  };

  // Trigger once when in view
  if (inView && !triggered) setTriggered(true);

  return (
    <section
      className="py-24 overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      <div className="px-8 lg:px-20 mb-12">
        <div className="flex items-center gap-4">
          <div className="h-px w-8" style={{ background: brand.accentColor }} />
          <span
            className="font-condensed text-xs tracking-[0.4em] uppercase"
            style={{ color: brand.accentColor }}
          >
            In Motion
          </span>
        </div>
        <h2 className="font-display text-5xl lg:text-7xl tracking-wide text-white mt-3">
          PURE MOTION
        </h2>
      </div>

      <div ref={ref}>
        {/* Track / road */}
        <div
          className="relative overflow-hidden"
          style={{
            height: "280px",
            background:
              "linear-gradient(to bottom, var(--bg) 0%, var(--surface) 40%, var(--bg) 100%)",
          }}
        >
          {/* Road lines */}
          <div
            className="absolute bottom-24 left-0 right-0 h-px"
            style={{
              background: `repeating-linear-gradient(90deg, ${brand.accentColor}40 0px, ${brand.accentColor}40 40px, transparent 40px, transparent 80px)`,
            }}
          />
          <div
            className="absolute bottom-20 left-0 right-0 h-px"
            style={{ background: "rgba(255,255,255,0.05)" }}
          />

          {/* Ground shadow */}
          <div
            className="absolute bottom-20 left-0 right-0"
            style={{
              height: "40px",
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.4), transparent)",
            }}
          />

          {/* Speed lines background */}
          {triggered && (
            <div
              key={`lines-${key}`}
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 8px, ${brand.accentColor}08 8px, ${brand.accentColor}08 9px)`,
                animation: "fadeIn 0.5s ease",
              }}
            />
          )}

          {/* Car image animated */}
          {triggered && (
            <div
              key={`car-${key}`}
              style={{
                position: "absolute",
                bottom: "22px",
                left: 0,
                animation:
                  "carDrive 3.5s cubic-bezier(0.25, 0.1, 0.25, 1) forwards",
                willChange: "transform",
              }}
            >
              <img
                src={brand.heroImage}
                alt={brand.model}
                style={{
                  height: "160px",
                  width: "auto",
                  objectFit: "contain",
                  filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.8))",
                }}
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
          )}

          {/* Motion blur overlay */}
          {triggered && (
            <div
              key={`blur-${key}`}
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `linear-gradient(to right, rgba(8,8,8,0.3), transparent 30%, transparent 70%, rgba(8,8,8,0.3))`,
              }}
            />
          )}

          {/* Speed stat overlay */}
          <div className="absolute top-8 right-12 text-right">
            <div
              className="font-display text-6xl leading-none"
              style={{ color: brand.accentColor, opacity: 0.15 }}
            >
              {brand.detailedSpecs?.["Top Speed"]?.split(" ")[0]}
            </div>
            <div className="font-condensed text-xs tracking-widest text-white/20">
              KM/H TOP SPEED
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="px-8 lg:px-20 mt-8 flex items-center gap-6">
          <button
            onClick={handleReplay}
            className="font-condensed text-xs tracking-widest uppercase px-6 py-2 border transition-all duration-300"
            style={{
              borderColor: `${brand.accentColor}60`,
              color: brand.accentColor,
            }}
            onMouseEnter={(e) => {
              e.target.style.background = brand.accentColor;
              e.target.style.color = "#000";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
              e.target.style.color = brand.accentColor;
            }}
          >
            ↺ Replay Animation
          </button>
          <span className="font-condensed text-xs text-white/20 tracking-wider">
            CSS keyframe animation · {brand.model}
          </span>
        </div>
      </div>
    </section>
  );
}
