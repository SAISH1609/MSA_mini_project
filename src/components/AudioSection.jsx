import { useInView } from "./useInView";
import { useState, useRef, useEffect } from "react";

export default function AudioSection({ brand }) {
  const [ref, inView] = useInView();
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const audioRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setPlaying(false);
    setProgress(0);
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [brand.id]);

  const toggle = () => {
    if (playing) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      setPlaying(false);
    } else {
      if (audioRef.current) {
        audioRef.current.volume = volume;
        audioRef.current.play().catch(() => {});
      }
      setPlaying(true);
    }
  };

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
            The Sound
          </span>
        </div>
        <h2 className="font-display text-5xl lg:text-7xl tracking-wide text-white mt-3">
          ENGINE VOICE
        </h2>
      </div>

      <div ref={ref} className="px-8 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Static car image */}
          <div
            className="relative overflow-hidden transition-all duration-1000"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "none" : "translateX(-30px)",
            }}
          >
            <img
              src={brand.frontImage}
              alt={brand.model}
              className="w-full object-cover"
              style={{
                height: "360px",
                filter: playing
                  ? `drop-shadow(0 0 40px ${brand.accentColor}40)`
                  : "none",
                transition: "filter 0.5s",
              }}
            />
            {/* Vibration rings when playing */}
            {playing && (
              <>
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{
                      border: `1px solid ${brand.accentColor}`,
                      opacity: 0,
                      animation: `pulse-ring 1.5s ease-out ${i * 0.4}s infinite`,
                    }}
                  />
                ))}
              </>
            )}
            <style>{`
              @keyframes pulse-ring {
                0% { transform: scale(0.9); opacity: 0.6; }
                100% { transform: scale(1.1); opacity: 0; }
              }
            `}</style>
          </div>

          {/* Audio player */}
          <div
            className="transition-all duration-1000"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "none" : "translateX(30px)",
              transitionDelay: "0.2s",
            }}
          >
            <h3 className="font-display text-3xl text-white mb-2">
              {brand.basicSpecs.engine}
            </h3>
            <p className="font-condensed text-xs tracking-widest uppercase text-white/30 mb-10">
              {brand.basicSpecs.power} · Naturally{" "}
              {brand.id === "lamborghini" ? "Aspirated" : "Turbocharged"}
            </p>

            {/* Big play button */}
            <div className="flex items-center gap-8 mb-10">
              <button
                onClick={toggle}
                className={`audio-btn ${playing ? "playing" : ""}`}
                style={{
                  "--accent": brand.accentColor,
                  borderColor: brand.accentColor,
                }}
              >
                {playing ? (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill={playing ? "#000" : brand.accentColor}
                  >
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                ) : (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill={brand.accentColor}
                  >
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                )}
              </button>

              <div>
                <div className="font-condensed text-sm tracking-widest uppercase text-white mb-1">
                  {playing ? "Engine Running" : "Press to Start Engine"}
                </div>
                <div className="font-condensed text-xs tracking-wider text-white/30">
                  {brand.name} {brand.model} · {brand.year}
                </div>
              </div>
            </div>

            {/* Volume control */}
            <div className="flex items-center gap-4">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="2"
              >
                <polygon points="11,5 6,9 2,9 2,15 6,15 11,19" />
              </svg>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => {
                  setVolume(parseFloat(e.target.value));
                  if (audioRef.current)
                    audioRef.current.volume = parseFloat(e.target.value);
                }}
                className="flex-1 h-px appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, ${brand.accentColor} ${volume * 100}%, rgba(255,255,255,0.1) ${volume * 100}%)`,
                  accentColor: brand.accentColor,
                }}
              />
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="2"
              >
                <polygon points="11,5 6,9 2,9 2,15 6,15 11,19" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
              </svg>
            </div>

            {/* Waveform visualizer (decorative) */}
            <div className="flex items-center gap-0.5 mt-8 h-12">
              {Array.from({ length: 48 }).map((_, i) => {
                const h = playing
                  ? Math.abs(Math.sin(i * 0.4 + Date.now() * 0.001)) * 40 + 8
                  : Math.abs(Math.sin(i * 0.4)) * 10 + 4;
                return (
                  <div
                    key={i}
                    className="flex-1 rounded-sm transition-all duration-100"
                    style={{
                      height: `${Math.abs(Math.sin(i * 0.6)) * 40 + 6}px`,
                      background: brand.accentColor,
                      opacity: playing
                        ? 0.4 + Math.abs(Math.sin(i * 0.4)) * 0.6
                        : 0.15,
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <audio
        ref={audioRef}
        src={brand.audioUrl}
        onTimeUpdate={(e) =>
          setProgress((e.target.currentTime / e.target.duration) * 100 || 0)
        }
        onEnded={() => setPlaying(false)}
        loop
      />
    </section>
  );
}
