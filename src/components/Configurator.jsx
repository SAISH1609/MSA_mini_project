import { useInView } from "./useInView";
import { useState } from "react";

export default function Configurator({ brand }) {
  const [ref, inView] = useInView();
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedWheel, setSelectedWheel] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packagePrices = [8500, 15000, 22000];
  const wheelPrices = [0, 3500, 7200];

  const totalPrice =
    brand.price +
    wheelPrices[selectedWheel] +
    (selectedPackage !== null ? packagePrices[selectedPackage] : 0);

  const colorNames = [
    "Arctic White",
    "Racing Red",
    "Midnight Black",
    "Sapphire Blue",
    "British Racing Green",
    "Dune Gold",
  ];

  return (
    <section
      id="configurator"
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
            Make It Yours
          </span>
        </div>
        <h2 className="font-display text-5xl lg:text-7xl tracking-wide text-white mt-3">
          CONFIGURATOR
        </h2>
      </div>

      <div ref={ref} className="px-8 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Car preview with color tint */}
          <div
            className="sticky top-24 transition-all duration-1000"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "none" : "translateY(30px)",
            }}
          >
            <div className="relative overflow-hidden">
              <img
                src={brand.heroImage}
                alt={brand.model}
                className="w-full object-cover"
                style={{ height: "380px", transition: "filter 0.5s" }}
                onError={(e) => {
                  e.target.src = brand.frontImage;
                }}
              />
              {/* Color overlay */}
              <div
                className="absolute inset-0 mix-blend-color pointer-events-none transition-all duration-500"
                style={{
                  background: brand.colors[selectedColor],
                  opacity: selectedColor === 2 || selectedColor === 0 ? 0 : 0.2,
                }}
              />
              {/* Reflection line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{ background: brand.accentColor, opacity: 0.4 }}
              />
            </div>

            {/* Selected color label */}
            <div className="mt-4 flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full border border-white/20"
                style={{ background: brand.colors[selectedColor] }}
              />
              <span className="font-condensed text-sm tracking-widest uppercase text-white/50">
                {colorNames[selectedColor] || "Custom"}
              </span>
            </div>
          </div>

          {/* Config options */}
          <div
            className="transition-all duration-1000"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "none" : "translateX(30px)",
              transitionDelay: "0.2s",
            }}
          >
            {/* Color section */}
            <div className="mb-10">
              <h3 className="font-condensed text-xs tracking-widest uppercase text-white/40 mb-5">
                Exterior Color
              </h3>
              <div className="flex flex-wrap gap-3">
                {brand.colors.map((color, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(i)}
                    className={`color-swatch ${selectedColor === i ? "active" : ""}`}
                    style={{
                      background: color,
                      borderColor:
                        selectedColor === i ? brand.accentColor : "transparent",
                      boxShadow:
                        selectedColor === i
                          ? `0 0 0 1px ${brand.accentColor}`
                          : "none",
                    }}
                    title={colorNames[i]}
                  />
                ))}
              </div>
            </div>

            {/* Wheels section */}
            <div className="mb-10">
              <h3 className="font-condensed text-xs tracking-widest uppercase text-white/40 mb-5">
                Wheel Design
              </h3>
              <div className="flex flex-wrap gap-2">
                {brand.configuratorOptions.wheels.map((w, i) => (
                  <button
                    key={i}
                    className={`config-option ${selectedWheel === i ? "active" : ""}`}
                    onClick={() => setSelectedWheel(i)}
                    style={
                      selectedWheel === i
                        ? {
                            background: brand.accentColor,
                            borderColor: brand.accentColor,
                            color: "#000",
                          }
                        : {}
                    }
                  >
                    {w}
                    {i > 0 && (
                      <span className="ml-2 text-xs opacity-60">
                        +${wheelPrices[i].toLocaleString()}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Packages */}
            <div className="mb-10">
              <h3 className="font-condensed text-xs tracking-widest uppercase text-white/40 mb-5">
                Optional Packages
              </h3>
              <div className="flex flex-col gap-2">
                {brand.configuratorOptions.packages.map((pkg, i) => (
                  <button
                    key={i}
                    className="flex items-center justify-between px-4 py-3 border transition-all duration-200 text-left"
                    style={{
                      borderColor:
                        selectedPackage === i
                          ? brand.accentColor
                          : "rgba(255,255,255,0.08)",
                      background:
                        selectedPackage === i
                          ? `${brand.accentColor}10`
                          : "transparent",
                    }}
                    onClick={() =>
                      setSelectedPackage(selectedPackage === i ? null : i)
                    }
                  >
                    <span
                      className="font-condensed text-sm tracking-wider uppercase"
                      style={{
                        color:
                          selectedPackage === i
                            ? brand.accentColor
                            : "rgba(255,255,255,0.6)",
                      }}
                    >
                      {pkg} Package
                    </span>
                    <span
                      className="font-condensed text-xs"
                      style={{ color: brand.accentColor }}
                    >
                      +${packagePrices[i].toLocaleString()}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div
              className="h-px mb-8"
              style={{ background: "rgba(255,255,255,0.08)" }}
            />

            {/* Total price */}
            <div className="flex items-end justify-between mb-6">
              <div>
                <div className="font-condensed text-xs tracking-widest uppercase text-white/30 mb-2">
                  Configured Price
                </div>
                <div
                  className="font-display text-5xl leading-none"
                  style={{ color: brand.accentColor }}
                >
                  ${totalPrice.toLocaleString()}
                </div>
                <div className="font-condensed text-xs text-white/20 mt-1">
                  Excluding taxes and delivery
                </div>
              </div>

              <div className="text-right">
                <div className="font-condensed text-xs text-white/20 mb-1">
                  Base
                </div>
                <div className="font-condensed text-sm text-white/40">
                  ${brand.price.toLocaleString()}
                </div>
              </div>
            </div>

            {/* Request button */}
            <button
              className="w-full py-4 font-condensed text-sm tracking-widest uppercase transition-all duration-300"
              style={{ background: brand.accentColor, color: "#000" }}
              onMouseEnter={(e) => {
                e.target.style.opacity = "0.85";
              }}
              onMouseLeave={(e) => {
                e.target.style.opacity = "1";
              }}
            >
              Request a Consultation
            </button>

            <p className="font-condensed text-xs text-white/20 text-center mt-4 tracking-wider">
              Availability subject to region. Contact your nearest dealer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
