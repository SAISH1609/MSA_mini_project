import { Link } from "react-router-dom";
import { brands } from "../data/cars";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [hoveredBrand, setHoveredBrand] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const hovered = brands.find((b) => b.id === hoveredBrand);

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Dynamic background accent from hovered brand */}
      <div
        className="absolute inset-0 transition-all duration-700 pointer-events-none"
        style={{
          background: hovered
            ? `radial-gradient(ellipse at 60% 50%, ${hovered.accentColor}18 0%, transparent 65%)`
            : "radial-gradient(ellipse at 60% 50%, rgba(200,169,81,0.06) 0%, transparent 65%)",
        }}
      />

      {/* Hero text background */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{ opacity: 0.03 }}
      >
        <span className="font-display text-[28vw] leading-none tracking-tighter text-white">
        MSA PROJECT
        </span>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <div className="pt-32 pb-16 px-8 lg:px-20">
          <div
            className="transition-all duration-1000"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "none" : "translateY(40px)",
            }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-yellow-500/60" />
              <span className="font-condensed text-xs tracking-[0.3em] uppercase text-yellow-500/60">
                The Pinnacle Collection
              </span>
            </div>
            <h1 className="font-display text-7xl lg:text-9xl leading-none tracking-wide text-white mb-4">
              SUPERCAR
              <br />
              <span
                style={{
                  color: hovered ? hovered.accentColor : "#C8A951",
                  transition: "color 0.5s",
                }}
              >
                SHOWCASE
              </span>
            </h1>
            <p className="font-body font-light text-white/40 text-lg max-w-md mt-6 leading-relaxed">
              Six icons. Six legacies. Select a marque to begin your journey
              into automotive excellence.
            </p>
          </div>
        </div>

        {/* Brand Grid */}
        <div className="flex-1 px-8 lg:px-20 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {brands.map((brand, i) => (
              <Link
                key={brand.id}
                to={`/car/${brand.id}`}
                onMouseEnter={() => setHoveredBrand(brand.id)}
                onMouseLeave={() => setHoveredBrand(null)}
                className="group relative overflow-hidden"
                style={{
                  opacity: loaded ? 1 : 0,
                  transform: loaded ? "none" : "translateY(20px)",
                  transition: `opacity 0.6s ease ${i * 0.07}s, transform 0.6s ease ${i * 0.07}s`,
                }}
              >
                {/* Card */}
                <div
                  className="relative h-48 md:h-64 flex flex-col justify-end p-5 overflow-hidden"
                  style={{
                    background: "var(--surface)",
                    border: `1px solid var(--border)`,
                    transition: "border-color 0.3s, background 0.3s",
                  }}
                >
                  {/* Hover accent corner */}
                  <div
                    className="absolute top-0 left-0 w-full h-full transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${brand.accentColor}20 0%, transparent 60%)`,
                      opacity: hoveredBrand === brand.id ? 1 : 0,
                    }}
                  />

                  {/* Brand hero image */}
                  <div
                    className="absolute inset-0 transition-all duration-700"
                    style={{
                      backgroundImage: `url(${brand.heroImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      opacity: hoveredBrand === brand.id ? 0.25 : 0.08,
                      transform:
                        hoveredBrand === brand.id ? "scale(1.05)" : "scale(1)",
                    }}
                  />

                  {/* Accent line top */}
                  <div
                    className="absolute top-0 left-0 h-px transition-all duration-500"
                    style={{
                      background: brand.accentColor,
                      width: hoveredBrand === brand.id ? "100%" : "0%",
                    }}
                  />

                  {/* Number */}
                  <span
                    className="absolute top-4 right-4 font-display text-5xl leading-none transition-all duration-300"
                    style={{
                      color:
                        hoveredBrand === brand.id
                          ? brand.accentColor
                          : "rgba(255,255,255,0.05)",
                      opacity: 1,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Brand info */}
                  <div className="relative z-10">
                    <div className="font-display text-2xl md:text-3xl tracking-wider text-white mb-1">
                      {brand.name.toUpperCase()}
                    </div>
                    <div
                      className="font-condensed text-xs tracking-widest uppercase transition-colors duration-300"
                      style={{
                        color:
                          hoveredBrand === brand.id
                            ? brand.accentColor
                            : "rgba(255,255,255,0.3)",
                      }}
                    >
                      {brand.model}
                    </div>

                    {/* Arrow */}
                    <div
                      className="mt-3 flex items-center gap-2 font-condensed text-xs tracking-widest uppercase transition-all duration-300"
                      style={{
                        color: brand.accentColor,
                        opacity: hoveredBrand === brand.id ? 1 : 0,
                        transform:
                          hoveredBrand === brand.id
                            ? "translateX(0)"
                            : "translateX(-8px)",
                      }}
                    >
                      <span>Explore</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer line */}
        <div className="px-8 lg:px-20 pb-8 flex items-center justify-between">
          <span className="font-condensed text-xs tracking-widest text-white/20 uppercase">
            © 2025 Supercar Showcase — Six-car Multimedia Mini Project
          </span>
          <span className="font-condensed text-xs tracking-widest text-white/20 uppercase">
            IT3 Evaluation
          </span>
        </div>
      </div>
    </div>
  );
}
