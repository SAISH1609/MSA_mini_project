const proxyImage = (url) => {
  const normalized = url.toLowerCase();

  if (url.startsWith("/media/")) {
    return url;
  }

  if (normalized.includes("porsche")) {
    return "https://images.unsplash.com/photo-1598814165187-ed79437d7490?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9yc2NoZXxlbnwwfHwwfHx8MA%3D%3D";
  }

  if (normalized.includes("mercedes")) {
    return "https://images.unsplash.com/photo-1686730540270-93f2c33351b6?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyfGVufDB8fDB8fHww";
  }

  if (normalized.includes("bmw")) {
    return "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8fDB8fHww";
  }

  if (normalized.includes("audi")) {
    return "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fHww";
  }

  if (normalized.includes("ferrari")) {
    return "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8fDB8fHww";
  }

  if (normalized.includes("lamborghini")) {
    return "https://images.unsplash.com/photo-1611651338412-8403fa6e3599?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9yc2NoZXxlbnwwfHwwfHx8MA%3D%3D";
  }

  if (normalized.includes("mclaren")) {
    return "https://images.unsplash.com/photo-1611651186486-415f04eb78e4?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBvcnNjaGV8ZW58MHx8MHx8fDA%3D";
  }

  if (normalized.includes("bugatti")) {
    return "https://images.unsplash.com/photo-1695192193767-54887768f845?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvcnNjaGV8ZW58MHx8MHx8fDA%3D";
  }

  return url;
};

export const brands = [
  {
    id: "porsche",
    name: "Porsche",
    tagline: "There is no substitute.",
    model: "911 GT3",
    year: "2025",
    accentColor: "#C8102E",
    logoUrl: proxyImage(
      "https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Porsche_logo.svg/800px-Porsche_logo.svg.png",
    ),
    heroImage: "/media/porsche/porsche_hero.png",
    animationVideo: "/media/porsche/porsche.mp4",
    animationVideoScale: 1.15,
    animationVideoPosition: "center 35%",
    animationVideoWidth: "620px",
    animationVideoHeight: "210px",
    animationVideoFull: true,
    frontImage: proxyImage(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/2022_Porsche_911_GT3_%28992%29%2C_front_8.26.22.jpg/1280px-2022_Porsche_911_GT3_%28992%29%2C_front_8.26.22.jpg",
    ),
    galleryImages: [
      proxyImage(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/2022_Porsche_911_GT3_%28992%29%2C_front_8.26.22.jpg/1280px-2022_Porsche_911_GT3_%28992%29%2C_front_8.26.22.jpg",
      ),
      proxyImage(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/2022_Porsche_911_GT3_%28992%29%2C_rear_8.26.22.jpg/1280px-2022_Porsche_911_GT3_%28992%29%2C_rear_8.26.22.jpg",
      ),
      proxyImage(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/2022_Porsche_911_GT3_%28992%29%2C_interior_8.26.22.jpg/1280px-2022_Porsche_911_GT3_%28992%29%2C_interior_8.26.22.jpg",
      ),
    ],
    basicSpecs: {
      engine: "4.0L Flat-6",
      power: "510 hp",
      torque: "470 Nm",
      acceleration: "3.4s (0–100 km/h)",
    },
    detailedSpecs: {
      "Top Speed": "318 km/h",
      Transmission: "7-speed PDK",
      Drive: "RWD",
      Weight: "1,435 kg",
      "Fuel Economy": "13.0 L/100km",
      Wheelbase: "2,457 mm",
      Brakes: "Carbon Ceramic",
      Tires: "Michelin Pilot Sport Cup 2",
    },
    audioUrl:
      "https://www.soundjay.com/transportation_c2026/sounds/car-ignition-1.mp3",
    price: 195000,
    colors: ["#FFFFFF", "#C8102E", "#000000", "#1A3A5C", "#4A7C59", "#C5A028"],
    configuratorOptions: {
      wheels: ["Standard GT3", "Lightweight Forged", "Center-Lock"],
      packages: ["Clubsport", "Weissach", "Touring"],
    },
  },
  {
    id: "mercedes",
    name: "Mercedes-Benz",
    tagline: "The best or nothing.",
    model: "AMG GT Black Series",
    year: "2025",
    accentColor: "#00ADEF",
    logoUrl: proxyImage(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/800px-Mercedes-Logo.svg.png",
    ),
    heroImage: proxyImage(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Mercedes-AMG_GT_Black_Series_%28C190%2C_facelift%2C_2020%29_IMG_3898.jpg/1280px-Mercedes-AMG_GT_Black_Series_%28C190%2C_facelift%2C_2020%29_IMG_3898.jpg",
    ),
    frontImage: proxyImage(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Mercedes-AMG_GT_Black_Series_%28C190%2C_facelift%2C_2020%29_IMG_3897.jpg/1280px-Mercedes-AMG_GT_Black_Series_%28C190%2C_facelift%2C_2020%29_IMG_3897.jpg",
    ),
    galleryImages: [
      proxyImage(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Mercedes-AMG_GT_Black_Series_%28C190%2C_facelift%2C_2020%29_IMG_3897.jpg/1280px-Mercedes-AMG_GT_Black_Series_%28C190%2C_facelift%2C_2020%29_IMG_3897.jpg",
      ),
      proxyImage(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Mercedes-AMG_GT_Black_Series_%28C190%2C_facelift%2C_2020%29_IMG_3898.jpg/1280px-Mercedes-AMG_GT_Black_Series_%28C190%2C_facelift%2C_2020%29_IMG_3898.jpg",
      ),
      proxyImage(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Mercedes-AMG_GT_Black_Series_%28C190%2C_facelift%2C_2020%29_IMG_3899.jpg/1280px-Mercedes-AMG_GT_Black_Series_%28C190%2C_facelift%2C_2020%29_IMG_3899.jpg",
      ),
    ],
    basicSpecs: {
      engine: "4.0L V8 Biturbo",
      power: "730 hp",
      torque: "800 Nm",
      acceleration: "3.2s (0–100 km/h)",
    },
    detailedSpecs: {
      "Top Speed": "325 km/h",
      Transmission: "7-speed DCT",
      Drive: "RWD",
      Weight: "1,625 kg",
      "Fuel Economy": "14.5 L/100km",
      Wheelbase: "2,630 mm",
      Brakes: "Carbon Ceramic",
      Tires: "Michelin Pilot Sport 4S",
    },
    audioUrl:
      "https://www.soundjay.com/transportation_c2026/sounds/car-ignition-1.mp3",
    price: 330000,
    colors: ["#C0C0C0", "#000000", "#FFFFFF", "#C8102E", "#1A1A2E", "#2D5016"],
    configuratorOptions: {
      wheels: ["AMG Cross-Spoke", "AMG Forged", "Track Edition"],
      packages: ["Night Package", "Carbon Package", "AMG Aero"],
    },
  },
  {
    id: "bmw",
    name: "BMW",
    tagline: "The ultimate driving machine.",
    model: "M4 CSL",
    year: "2025",
    accentColor: "#0066B1",
    logoUrl: proxyImage(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/800px-BMW.svg.png",
    ),
    heroImage: proxyImage(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/2023_BMW_M4_CSL_%28G82%29%2C_front_8.18.22.jpg/1280px-2023_BMW_M4_CSL_%28G82%29%2C_front_8.18.22.jpg",
    ),
    frontImage: proxyImage(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/2023_BMW_M4_CSL_%28G82%29%2C_front_8.18.22.jpg/1280px-2023_BMW_M4_CSL_%28G82%29%2C_front_8.18.22.jpg",
    ),
    galleryImages: [
      proxyImage(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/2023_BMW_M4_CSL_%28G82%29%2C_front_8.18.22.jpg/1280px-2023_BMW_M4_CSL_%28G82%29%2C_front_8.18.22.jpg",
      ),
      proxyImage(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/2023_BMW_M4_CSL_%28G82%29%2C_rear_8.18.22.jpg/1280px-2023_BMW_M4_CSL_%28G82%29%2C_rear_8.18.22.jpg",
      ),
      proxyImage(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/2023_BMW_M4_CSL_%28G82%29%2C_interior_8.18.22.jpg/1280px-2023_BMW_M4_CSL_%28G82%29%2C_interior_8.18.22.jpg",
      ),
    ],
    basicSpecs: {
      engine: "3.0L I6 TwinTurbo",
      power: "550 hp",
      torque: "650 Nm",
      acceleration: "3.6s (0–100 km/h)",
    },
    detailedSpecs: {
      "Top Speed": "307 km/h",
      Transmission: "8-speed M DCT",
      Drive: "RWD",
      Weight: "1,625 kg",
      "Fuel Economy": "11.8 L/100km",
      Wheelbase: "2,857 mm",
      Brakes: "Carbon Ceramic",
      Tires: "Michelin Pilot Sport Cup 2",
    },
    audioUrl:
      "https://www.soundjay.com/transportation_c2026/sounds/car-ignition-1.mp3",
    price: 140000,
    colors: ["#1A1A1A", "#FFFFFF", "#0066B1", "#C8102E", "#4A4A4A", "#1B4D3E"],
    configuratorOptions: {
      wheels: ["M Double-Spoke", "M Light Alloy", "CSL Forged"],
      packages: ["M Carbon", "M Track", "Competition"],
    },
  },
  {
    id: "audi",
    name: "Audi",
    tagline: "Vorsprung durch Technik.",
    model: "R8 V10 Performance",
    year: "2025",
    accentColor: "#BB0A21",
    logoUrl: proxyImage(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Audi-Logo_2016.svg/800px-Audi-Logo_2016.svg.png",
    ),
    heroImage: proxyImage(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/2020_Audi_R8_V10_Performance_%28facelift%2C_Type_4S%29%2C_front_8.23.20.jpg/1280px-2020_Audi_R8_V10_Performance_%28facelift%2C_Type_4S%29%2C_front_8.23.20.jpg",
    ),
    frontImage: proxyImage(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/2020_Audi_R8_V10_Performance_%28facelift%2C_Type_4S%29%2C_front_8.23.20.jpg/1280px-2020_Audi_R8_V10_Performance_%28facelift%2C_Type_4S%29%2C_front_8.23.20.jpg",
    ),
    galleryImages: [
      proxyImage(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/2020_Audi_R8_V10_Performance_%28facelift%2C_Type_4S%29%2C_front_8.23.20.jpg/1280px-2020_Audi_R8_V10_Performance_%28facelift%2C_Type_4S%29%2C_front_8.23.20.jpg",
      ),
      proxyImage(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/2020_Audi_R8_V10_Performance_%28facelift%2C_Type_4S%29%2C_rear_8.23.20.jpg/1280px-2020_Audi_R8_V10_Performance_%28facelift%2C_Type_4S%29%2C_rear_8.23.20.jpg",
      ),
      proxyImage(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/2020_Audi_R8_V10_Performance_%28facelift%2C_Type_4S%29%2C_interior_8.23.20.jpg/1280px-2020_Audi_R8_V10_Performance_%28facelift%2C_Type_4S%29%2C_interior_8.23.20.jpg",
      ),
    ],
    basicSpecs: {
      engine: "5.2L V10 FSI",
      power: "620 hp",
      torque: "580 Nm",
      acceleration: "3.1s (0–100 km/h)",
    },
    detailedSpecs: {
      "Top Speed": "331 km/h",
      Transmission: "7-speed S-Tronic",
      Drive: "Quattro AWD",
      Weight: "1,595 kg",
      "Fuel Economy": "17.0 L/100km",
      Wheelbase: "2,650 mm",
      Brakes: "Carbon Ceramic",
      Tires: "Pirelli P Zero Corsa",
    },
    audioUrl:
      "https://www.soundjay.com/transportation_c2026/sounds/car-ignition-1.mp3",
    price: 215000,
    colors: ["#C0C0C0", "#000000", "#FFFFFF", "#BB0A21", "#1A3A5C", "#2C2C2C"],
    configuratorOptions: {
      wheels: ["10-Spoke", "5-Twin-Spoke", "Audi Sport Forged"],
      packages: ["Carbon Optic", "Sport", "Dynamic Ride Control"],
    },
  },
  {
    id: "ferrari",
    name: "Ferrari",
    tagline: "We are the competition.",
    model: "SF90 Stradale",
    year: "2025",
    accentColor: "#CE2121",
    logoUrl: proxyImage(
      "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Ferrari_logo.svg/800px-Ferrari_logo.svg.png",
    ),
    heroImage: proxyImage(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/2020_Ferrari_SF90_Stradale%2C_front_8.22.20.jpg/1280px-2020_Ferrari_SF90_Stradale%2C_front_8.22.20.jpg",
    ),
    frontImage: proxyImage(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/2020_Ferrari_SF90_Stradale%2C_front_8.22.20.jpg/1280px-2020_Ferrari_SF90_Stradale%2C_front_8.22.20.jpg",
    ),
    galleryImages: [
      proxyImage(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/2020_Ferrari_SF90_Stradale%2C_front_8.22.20.jpg/1280px-2020_Ferrari_SF90_Stradale%2C_front_8.22.20.jpg",
      ),
      proxyImage(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/2020_Ferrari_SF90_Stradale%2C_rear_8.22.20.jpg/1280px-2020_Ferrari_SF90_Stradale%2C_rear_8.22.20.jpg",
      ),
      proxyImage(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/2020_Ferrari_SF90_Stradale%2C_interior_8.22.20.jpg/1280px-2020_Ferrari_SF90_Stradale%2C_interior_8.22.20.jpg",
      ),
    ],
    basicSpecs: {
      engine: "4.0L V8 + 3 Electric Motors",
      power: "1,000 hp",
      torque: "800 Nm",
      acceleration: "2.5s (0–100 km/h)",
    },
    detailedSpecs: {
      "Top Speed": "340 km/h",
      Transmission: "8-speed DCT",
      Drive: "AWD (Hybrid)",
      Weight: "1,570 kg",
      "Fuel Economy": "8.0 L/100km (Hybrid)",
      Wheelbase: "2,650 mm",
      Brakes: "Carbon Ceramic",
      Tires: "Michelin Pilot Sport 4S",
    },
    audioUrl:
      "https://www.soundjay.com/transportation_c2026/sounds/car-ignition-1.mp3",
    price: 510000,
    colors: ["#CE2121", "#FFD700", "#000000", "#FFFFFF", "#1A1A2E", "#2D5016"],
    configuratorOptions: {
      wheels: ["5-Spoke", "Diamond-Cut", "Forged Carbon"],
      packages: ["Assetto Fiorano", "Carbon Fibre", "Racing"],
    },
  },
  {
    id: "lamborghini",
    name: "Lamborghini",
    tagline: "Expect the unexpected.",
    model: "Huracán STO",
    year: "2025",
    accentColor: "#F0A500",
    logoUrl: proxyImage(
      "https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/Lamborghini_Logo.svg/800px-Lamborghini_Logo.svg.png",
    ),
    heroImage: proxyImage(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Lamborghini_Huracan_STO_%282021%29%2C_front_8.22.21.jpg/1280px-Lamborghini_Huracan_STO_%282021%29%2C_front_8.22.21.jpg",
    ),
    frontImage: proxyImage(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Lamborghini_Huracan_STO_%282021%29%2C_front_8.22.21.jpg/1280px-Lamborghini_Huracan_STO_%282021%29%2C_front_8.22.21.jpg",
    ),
    galleryImages: [
      proxyImage(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Lamborghini_Huracan_STO_%282021%29%2C_front_8.22.21.jpg/1280px-Lamborghini_Huracan_STO_%282021%29%2C_front_8.22.21.jpg",
      ),
      proxyImage(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Lamborghini_Huracan_STO_%282021%29%2C_rear_8.22.21.jpg/1280px-Lamborghini_Huracan_STO_%282021%29%2C_rear_8.22.21.jpg",
      ),
      proxyImage(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Lamborghini_Huracan_STO_%282021%29%2C_interior_8.22.21.jpg/1280px-Lamborghini_Huracan_STO_%282021%29%2C_interior_8.22.21.jpg",
      ),
    ],
    basicSpecs: {
      engine: "5.2L V10 Naturally Aspirated",
      power: "640 hp",
      torque: "565 Nm",
      acceleration: "3.0s (0–100 km/h)",
    },
    detailedSpecs: {
      "Top Speed": "310 km/h",
      Transmission: "7-speed LDF DCT",
      Drive: "RWD",
      Weight: "1,339 kg",
      "Fuel Economy": "15.7 L/100km",
      Wheelbase: "2,620 mm",
      Brakes: "Carbon Ceramic",
      Tires: "Bridgestone Potenza",
    },
    audioUrl:
      "https://www.soundjay.com/transportation_c2026/sounds/car-ignition-1.mp3",
    price: 330000,
    colors: ["#F0A500", "#00A36C", "#000000", "#FFFFFF", "#C8102E", "#1A3A5C"],
    configuratorOptions: {
      wheels: ["5-Y-Spoke", "Diamond-Cut", "STO Forged"],
      packages: ["STO", "Magneto Rheological", "Performance"],
    },
  },
  {
    id: "mclaren",
    name: "McLaren",
    tagline: "Relentless pursuit of progress.",
    model: "720S",
    year: "2025",
    accentColor: "#FF6600",
    logoUrl: proxyImage(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/McLaren_logo.svg/800px-McLaren_logo.svg.png",
    ),
    heroImage: proxyImage(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/McLaren_720S_-_Flickr_-_Alexandre_Prévot_%281%29_%28cropped%29.jpg/1280px-McLaren_720S_-_Flickr_-_Alexandre_Prévot_%281%29_%28cropped%29.jpg",
    ),
    frontImage: proxyImage(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/McLaren_720S_-_Flickr_-_Alexandre_Prévot_%281%29_%28cropped%29.jpg/1280px-McLaren_720S_-_Flickr_-_Alexandre_Prévot_%281%29_%28cropped%29.jpg",
    ),
    galleryImages: [
      proxyImage(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/McLaren_720S_-_Flickr_-_Alexandre_Prévot_%281%29_%28cropped%29.jpg/1280px-McLaren_720S_-_Flickr_-_Alexandre_Prévot_%281%29_%28cropped%29.jpg",
      ),
      proxyImage(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/McLaren_720S_Le_Mans_%28rear_three-quarter_view%29.jpg/1280px-McLaren_720S_Le_Mans_%28rear_three-quarter_view%29.jpg",
      ),
      proxyImage(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/McLaren_720S_interior.jpg/1280px-McLaren_720S_interior.jpg",
      ),
    ],
    basicSpecs: {
      engine: "4.0L V8 Twin-Turbo",
      power: "720 hp",
      torque: "770 Nm",
      acceleration: "2.9s (0–100 km/h)",
    },
    detailedSpecs: {
      "Top Speed": "341 km/h",
      Transmission: "7-speed SSG",
      Drive: "RWD",
      Weight: "1,283 kg",
      "Fuel Economy": "13.1 L/100km",
      Wheelbase: "2,670 mm",
      Brakes: "Carbon Ceramic",
      Tires: "Pirelli P Zero Corsa",
    },
    audioUrl:
      "https://www.soundjay.com/transportation_c2026/sounds/car-ignition-1.mp3",
    price: 299000,
    colors: ["#FF6600", "#000000", "#FFFFFF", "#C0C0C0", "#1A1A2E", "#CE2121"],
    configuratorOptions: {
      wheels: ["Ultra-Lightweight", "MSO Forged", "Carbon Black"],
      packages: ["Track Pack", "Vision GT", "Carbon Series"],
    },
  },
  {
    id: "bugatti",
    name: "Bugatti",
    tagline: "L'art de la vitesse.",
    model: "Chiron Super Sport",
    year: "2025",
    accentColor: "#C8A951",
    logoUrl: proxyImage(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Bugatti_logo.svg/800px-Bugatti_logo.svg.png",
    ),
    heroImage: proxyImage(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Bugatti_Chiron_-_Flickr_-_Alexandre_Prévot_%281%29.jpg/1280px-Bugatti_Chiron_-_Flickr_-_Alexandre_Prévot_%281%29.jpg",
    ),
    frontImage: proxyImage(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Bugatti_Chiron_-_Flickr_-_Alexandre_Prévot_%281%29.jpg/1280px-Bugatti_Chiron_-_Flickr_-_Alexandre_Prévot_%281%29.jpg",
    ),
    galleryImages: [
      proxyImage(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Bugatti_Chiron_-_Flickr_-_Alexandre_Prévot_%281%29.jpg/1280px-Bugatti_Chiron_-_Flickr_-_Alexandre_Prévot_%281%29.jpg",
      ),
      proxyImage(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Bugatti_Chiron_2016_rear.jpg/1280px-Bugatti_Chiron_2016_rear.jpg",
      ),
      proxyImage(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Bugatti_Chiron_Interior_2016.jpg/1280px-Bugatti_Chiron_Interior_2016.jpg",
      ),
    ],
    basicSpecs: {
      engine: "8.0L W16 Quad-Turbo",
      power: "1,600 hp",
      torque: "1,600 Nm",
      acceleration: "2.4s (0–100 km/h)",
    },
    detailedSpecs: {
      "Top Speed": "440 km/h",
      Transmission: "7-speed DSG",
      Drive: "AWD",
      Weight: "1,978 kg",
      "Fuel Economy": "35.0 L/100km",
      Wheelbase: "2,711 mm",
      Brakes: "Carbon Ceramic",
      Tires: "Michelin Pilot Sport Cup 2",
    },
    audioUrl:
      "https://www.soundjay.com/transportation_c2026/sounds/car-ignition-1.mp3",
    price: 3900000,
    colors: ["#C8A951", "#000000", "#1A3A5C", "#FFFFFF", "#C8102E", "#4A4A4A"],
    configuratorOptions: {
      wheels: ["Forged Aluminum", "Diamond-Cut", "Carbon Black"],
      packages: ["Sky View", "Rembrandt", "Legend Edition"],
    },
  },
];

export const getBrandById = (id) => brands.find((b) => b.id === id);
