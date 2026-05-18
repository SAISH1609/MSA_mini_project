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
    model: "AMG G63",
    year: "2025",
    accentColor: "#00ADEF",
    logoUrl: proxyImage(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/800px-Mercedes-Logo.svg.png",
    ),
    heroImage: proxyImage("https://example.com/mercedes-amg-g63.jpg"),
    animationVideo: "/media/mercedes/mercedes.mp4",
    animationVideoScale: 1.15,
    animationVideoPosition: "center 35%",
    animationVideoWidth: "620px",
    animationVideoHeight: "210px",
    animationVideoFull: true,
    frontImage: proxyImage("https://example.com/mercedes-amg-g63-front.jpg"),
    galleryImages: [
      proxyImage("https://example.com/mercedes-amg-g63-front-2.jpg"),
      proxyImage("https://example.com/mercedes-amg-g63-rear.jpg"),
      proxyImage("https://example.com/mercedes-amg-g63-interior.jpg"),
    ],
    basicSpecs: {
      engine: "4.0L V8 Biturbo",
      power: "585 hp",
      torque: "850 Nm",
      acceleration: "4.5s (0–100 km/h)",
    },
    detailedSpecs: {
      "Top Speed": "240 km/h",
      Transmission: "9-speed Automatic",
      Drive: "AWD",
      Weight: "2,560 kg",
      "Fuel Economy": "14.5 L/100km",
      Wheelbase: "2,890 mm",
      Brakes: "AMG High-Performance",
      Tires: "Pirelli Scorpion",
    },
    audioUrl:
      "https://www.soundjay.com/transportation_c2026/sounds/car-ignition-1.mp3",
    price: 220000,
    colors: ["#000000", "#FFFFFF", "#C0C0C0", "#1A1A2E", "#2D5016", "#C8102E"],
    configuratorOptions: {
      wheels: ["AMG Twin 5-Spoke", "AMG Cross-Spoke", "AMG Forged"],
      packages: ["Night Package", "Off-Road Package", "AMG Performance"],
    },
  },
  {
    id: "bmw",
    name: "BMW",
    tagline: "The ultimate driving machine.",
    model: "2026 M4 CS",
    year: "2026",
    accentColor: "#0066B1",
    logoUrl: proxyImage(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/800px-BMW.svg.png",
    ),
    heroImage: proxyImage(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/2024_BMW_M4_CS_%28G82%29.jpg/1280px-2024_BMW_M4_CS_%28G82%29.jpg",
    ),
    animationVideo: "/media/bmw/bmw.mp4",
    animationVideoScale: 1.15,
    animationVideoPosition: "center 35%",
    animationVideoWidth: "620px",
    animationVideoHeight: "210px",
    animationVideoFull: true,
    frontImage: proxyImage(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/2024_BMW_M4_CS_%28G82%29.jpg/1280px-2024_BMW_M4_CS_%28G82%29.jpg",
    ),
    galleryImages: [
      proxyImage(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/2024_BMW_M4_CS_%28G82%29.jpg/1280px-2024_BMW_M4_CS_%28G82%29.jpg",
      ),
      proxyImage(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/2024_BMW_M4_CS_%28G82%29%2C_rear.jpg/1280px-2024_BMW_M4_CS_%28G82%29%2C_rear.jpg",
      ),
      proxyImage(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/2024_BMW_M4_CS_%28G82%29%2C_interior.jpg/1280px-2024_BMW_M4_CS_%28G82%29%2C_interior.jpg",
      ),
    ],
    basicSpecs: {
      engine: "3.0L I6 TwinTurbo",
      power: "543 hp",
      torque: "650 Nm",
      acceleration: "3.4s (0–100 km/h)",
    },
    detailedSpecs: {
      "Top Speed": "302 km/h",
      Transmission: "8-speed M Steptronic",
      Drive: "RWD",
      Weight: "1,800 kg",
      "Fuel Economy": "10.8 L/100km",
      Wheelbase: "2,857 mm",
      Brakes: "Carbon Ceramic",
      Tires: "Michelin Pilot Sport 4S",
    },
    audioUrl:
      "https://www.soundjay.com/transportation_c2026/sounds/car-ignition-1.mp3",
    price: 105000,
    colors: ["#1A1A1A", "#FFFFFF", "#0066B1", "#C8102E", "#4A4A4A", "#1B4D3E"],
    configuratorOptions: {
      wheels: ["M Double-Spoke", "M Forged", "Track Pack"],
      packages: ["Carbon Package", "M Driver's Package", "Performance"],
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
    animationVideo: "/media/audi/audi.mp4",
    animationVideoScale: 1.15,
    animationVideoPosition: "center 35%",
    animationVideoWidth: "620px",
    animationVideoHeight: "210px",
    animationVideoFull: true,
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
    id: "lamborghini",
    name: "Lamborghini",
    tagline: "Expect the unexpected.",
    model: "Aventador SVJ",
    year: "2026",
    accentColor: "#F0A500",
    logoUrl: proxyImage(
      "https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/Lamborghini_Logo.svg/800px-Lamborghini_Logo.svg.png",
    ),
    heroImage: proxyImage(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Lamborghini_Aventador_SVJ_-_Flickr_-_Alexandre_Pr%C3%A9vot_%281%29.jpg/1280px-Lamborghini_Aventador_SVJ_-_Flickr_-_Alexandre_Pr%C3%A9vot_%281%29.jpg",
    ),
    animationVideo: "/media/lamborghini/lamborghini.mp4",
    animationVideoScale: 1.15,
    animationVideoPosition: "center 35%",
    animationVideoWidth: "620px",
    animationVideoHeight: "210px",
    animationVideoFull: true,
    frontImage: proxyImage(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Lamborghini_Aventador_SVJ_-_Flickr_-_Alexandre_Pr%C3%A9vot_%281%29.jpg/1280px-Lamborghini_Aventador_SVJ_-_Flickr_-_Alexandre_Pr%C3%A9vot_%281%29.jpg",
    ),
    galleryImages: [
      proxyImage(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Lamborghini_Aventador_SVJ_-_Flickr_-_Alexandre_Pr%C3%A9vot_%281%29.jpg/1280px-Lamborghini_Aventador_SVJ_-_Flickr_-_Alexandre_Pr%C3%A9vot_%281%29.jpg",
      ),
      proxyImage(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Lamborghini_Aventador_SVJ_-_rear.jpg/1280px-Lamborghini_Aventador_SVJ_-_rear.jpg",
      ),
      proxyImage(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Lamborghini_Aventador_SVJ_-_interior.jpg/1280px-Lamborghini_Aventador_SVJ_-_interior.jpg",
      ),
    ],
    basicSpecs: {
      engine: "6.5L V12 Naturally Aspirated",
      power: "770 hp",
      torque: "720 Nm",
      acceleration: "2.8s (0–100 km/h)",
    },
    detailedSpecs: {
      "Top Speed": "350 km/h",
      Transmission: "7-speed ISR",
      Drive: "RWD",
      Weight: "1,525 kg",
      "Fuel Economy": "18.0 L/100km",
      Wheelbase: "2,700 mm",
      Brakes: "Carbon Ceramic",
      Tires: "Pirelli P Zero Corsa",
    },
    audioUrl:
      "https://www.soundjay.com/transportation_c2026/sounds/car-ignition-1.mp3",
    price: 517000,
    colors: ["#000000", "#FFFFFF", "#F0A500", "#C8102E", "#1A3A5C", "#00A36C"],
    configuratorOptions: {
      wheels: ["Forged Y-Spoke", "Center Lock", "SVJ Lightweight"],
      packages: ["Aerodinamica", "Track Pack", "Ad Personam"],
    },
  },
  {
    id: "mclaren",
    name: "McLaren",
    tagline: "Relentless pursuit of progress.",
    model: "765 LT",
    year: "2026",
    accentColor: "#FF6600",
    logoUrl: proxyImage(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/McLaren_logo.svg/800px-McLaren_logo.svg.png",
    ),
    heroImage: proxyImage(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/McLaren_765LT_-_Flickr_-_Alexandre_Pr%C3%A9vot_%281%29.jpg/1280px-McLaren_765LT_-_Flickr_-_Alexandre_Pr%C3%A9vot_%281%29.jpg",
    ),
    animationVideo: "/media/mclaren/mclaren.mp4",
    animationVideoScale: 1.15,
    animationVideoPosition: "center 35%",
    animationVideoWidth: "620px",
    animationVideoHeight: "210px",
    animationVideoFull: true,
    frontImage: proxyImage(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/McLaren_765LT_-_Flickr_-_Alexandre_Pr%C3%A9vot_%281%29.jpg/1280px-McLaren_765LT_-_Flickr_-_Alexandre_Pr%C3%A9vot_%281%29.jpg",
    ),
    galleryImages: [
      proxyImage(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/McLaren_765LT_-_Flickr_-_Alexandre_Pr%C3%A9vot_%281%29.jpg/1280px-McLaren_765LT_-_Flickr_-_Alexandre_Pr%C3%A9vot_%281%29.jpg",
      ),
      proxyImage(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/McLaren_765LT_-_rear.jpg/1280px-McLaren_765LT_-_rear.jpg",
      ),
      proxyImage(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/McLaren_765LT_-_interior.jpg/1280px-McLaren_765LT_-_interior.jpg",
      ),
    ],
    basicSpecs: {
      engine: "4.0L V8 Twin-Turbo",
      power: "765 hp",
      torque: "800 Nm",
      acceleration: "2.8s (0–100 km/h)",
    },
    detailedSpecs: {
      "Top Speed": "330 km/h",
      Transmission: "7-speed SSG",
      Drive: "RWD",
      Weight: "1,339 kg",
      "Fuel Economy": "12.2 L/100km",
      Wheelbase: "2,670 mm",
      Brakes: "Carbon Ceramic",
      Tires: "Pirelli P Zero Trofeo R",
    },
    audioUrl:
      "https://www.soundjay.com/transportation_c2026/sounds/car-ignition-1.mp3",
    price: 375000,
    colors: ["#FF6600", "#000000", "#FFFFFF", "#C0C0C0", "#1A1A2E", "#CE2121"],
    configuratorOptions: {
      wheels: ["LT Lightweight", "MSO Forged", "Carbon Black"],
      packages: ["Track Pack", "MSO Clubsport", "Carbon Series"],
    },
  },
];

export const getBrandById = (id) => brands.find((b) => b.id === id);
