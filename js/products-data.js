/**
 * MAAR METALS - Product Catalog Database
 * M A Abdul Rahman Metals - Premier Wholesale & Retail Aluminum Cookware
 */

const PRODUCTS_DATA = [
  // --- Category: Biryani Degs & Handis ---
  {
    id: "maar-deg-01",
    name: "Traditional Hammered Biryani Deg",
    category: "biryani-degs",
    categoryLabel: "Biryani Degs & Handis",
    gauge: "Heavy Duty Gauge 10 (3.2 mm)",
    gaugeBadge: "Gauge 10 Heavy Duty",
    material: "100% Virgin Food-Grade Pure Aluminium (IS:21 Standard)",
    sizeRange: "2 kg to 50 kg Rice (5 Litres to 120 Litres)",
    sizes: [
      { label: "No. 1 — 2 kg Rice / 5 L", capacity: "5 Litres", weight: "2.1 kg", dumCapacity: "1.5 - 2 kg Biryani" },
      { label: "No. 2 — 5 kg Rice / 12 L", capacity: "12 Litres", weight: "3.8 kg", dumCapacity: "4 - 5 kg Biryani" },
      { label: "No. 3 — 10 kg Rice / 25 L", capacity: "25 Litres", weight: "6.2 kg", dumCapacity: "8 - 10 kg Biryani" },
      { label: "No. 4 — 15 kg Rice / 38 L", capacity: "38 Litres", weight: "8.5 kg", dumCapacity: "12 - 15 kg Biryani" },
      { label: "No. 5 — 25 kg Rice / 60 L", capacity: "60 Litres", weight: "12.4 kg", dumCapacity: "20 - 25 kg Biryani" },
      { label: "No. 6 Jumbo — 50 kg Rice / 120 L", capacity: "120 Litres", weight: "19.5 kg", dumCapacity: "45 - 50 kg Biryani" }
    ],
    defaultSize: "No. 3 — 10 kg Rice / 25 L",
    wholesaleAvailable: true,
    retailAvailable: true,
    badge: "Catering Bestseller",
    description: "The gold standard for Hyderabadi & Awadhi Dum Biryani. Hand-hammered heavy base prevents burning under direct high flames, while the wide neck holds dough seal for leakproof dum cooking.",
    features: [
      "Authentic hand-hammered finish with extra-dense grain structure",
      "Reinforced heavy bottom (4.2mm central thickness)",
      "Flanged collar accommodates thick dough seal for authentic Dum",
      "Comes with custom heavy matching aluminum lid"
    ],
    idealFor: "Wedding Caterers, Dhabas, Biryani Specialists, Cloud Kitchens",
    illustration: "deg"
  },
  {
    id: "maar-deg-02",
    name: "Commercial Heavy-Duty Dum Handi",
    category: "biryani-degs",
    categoryLabel: "Biryani Degs & Handis",
    gauge: "Heavy Gauge 10 / 12 (3.0 mm)",
    gaugeBadge: "Gauge 10 Commercial",
    material: "Virgin Aluminum (99.5% Pure)",
    sizeRange: "3 Litres to 35 Litres (1 kg to 15 kg Biryani)",
    sizes: [
      { label: "Small — 3 L (1 kg Biryani)", capacity: "3 Litres", weight: "1.6 kg", dumCapacity: "1 kg Biryani" },
      { label: "Medium — 7 L (3 kg Biryani)", capacity: "7 Litres", weight: "2.7 kg", dumCapacity: "3 kg Biryani" },
      { label: "Large — 15 L (6 kg Biryani)", capacity: "15 Litres", weight: "4.5 kg", dumCapacity: "6 kg Biryani" },
      { label: "Commercial — 25 L (10 kg Biryani)", capacity: "25 Litres", weight: "6.8 kg", dumCapacity: "10 kg Biryani" },
      { label: "Jumbo — 35 L (15 kg Biryani)", capacity: "35 Litres", weight: "8.9 kg", dumCapacity: "15 kg Biryani" }
    ],
    defaultSize: "Commercial — 25 L (10 kg Biryani)",
    wholesaleAvailable: true,
    retailAvailable: true,
    badge: "Popular in Restaurants",
    description: "Ergonomic pot-bellied profile designed for uniform heat circulation during slow dum cooking and gravies. Features a sturdy grooved rim and seamless pressed body.",
    features: [
      "Pot-belly curved geometry promotes natural steam circulation",
      "Heavy rolled collar rim prevents denting during transport",
      "Scratch-resistant satin brushed finish",
      "Available with heavy snug-fit lid included"
    ],
    idealFor: "Restaurants, Fine Dining, Banquet Halls, Hotel Kitchens",
    illustration: "handi"
  },
  {
    id: "maar-deg-03",
    name: "Jumbo Kalyana Feast Biryani Deg",
    category: "biryani-degs",
    categoryLabel: "Biryani Degs & Handis",
    gauge: "Super Heavy Gauge 8 (4.0 mm)",
    gaugeBadge: "Gauge 8 Super Heavy",
    material: "100% Virgin Food-Grade Pure Aluminium",
    sizeRange: "35 kg to 75 kg Rice (80 Litres to 180 Litres)",
    sizes: [
      { label: "Feast Deg 80 L (35 kg Rice)", capacity: "80 Litres", weight: "15.0 kg", dumCapacity: "30 - 35 kg Rice" },
      { label: "Feast Deg 120 L (50 kg Rice)", capacity: "120 Litres", weight: "21.5 kg", dumCapacity: "45 - 50 kg Rice" },
      { label: "Feast Deg 150 L (65 kg Rice)", capacity: "150 Litres", weight: "26.0 kg", dumCapacity: "60 - 65 kg Rice" },
      { label: "Feast Deg 180 L (75 kg Rice)", capacity: "180 Litres", weight: "31.0 kg", dumCapacity: "70 - 75 kg Rice" }
    ],
    defaultSize: "Feast Deg 120 L (50 kg Rice)",
    wholesaleAvailable: true,
    retailAvailable: false,
    badge: "Super Heavy Duty",
    description: "Built for massive marriage feasts and religious congregations. Massive Gauge 8 thickness handles firewood or high-pressure bhatti burners without deformation.",
    features: [
      "Ultra-thick Gauge 8 (4.0mm) body engineered for woodfire and high BTU bhattis",
      "Deep concave heavy base prevents hotspots and rice scorching",
      "Reinforced heavy side lifting lugs for four-man carrying",
      "Custom oversized cast aluminum lid included"
    ],
    idealFor: "Marriage Contractors, Community Halls, Dargah & Temple Kitchens",
    illustration: "deg-jumbo"
  },

  // --- Category: Kadais & Pans ---
  {
    id: "maar-kadai-01",
    name: "Commercial Heavy Halwai Kadai",
    category: "kadais-pans",
    categoryLabel: "Kadais & Pans",
    gauge: "Heavy Gauge 10 (3.2 mm) / Gauge 8 (4.0 mm)",
    gaugeBadge: "Gauge 10 Heavy Duty",
    material: "100% Virgin Aluminium with Solid Riveted Handles",
    sizeRange: "14 inches to 42 inches Diameter (8L to 110L)",
    sizes: [
      { label: "14 Inch / 8 Litres", capacity: "8 Litres", weight: "2.8 kg", diameter: "14\"" },
      { label: "18 Inch / 16 Litres", capacity: "16 Litres", weight: "4.9 kg", diameter: "18\"" },
      { label: "22 Inch / 28 Litres", capacity: "28 Litres", weight: "7.6 kg", diameter: "22\"" },
      { label: "26 Inch / 45 Litres", capacity: "45 Litres", weight: "11.2 kg", diameter: "26\"" },
      { label: "32 Inch / 70 Litres", capacity: "70 Litres", weight: "16.8 kg", diameter: "32\"" },
      { label: "40 Inch Jumbo / 110 Litres", capacity: "110 Litres", weight: "25.0 kg", diameter: "40\"" }
    ],
    defaultSize: "22 Inch / 28 Litres",
    wholesaleAvailable: true,
    retailAvailable: true,
    badge: "Halwai Grade",
    description: "Indispensable for sweet makers, caterers, and bulk frying. Thick aluminum ensures steady oil temperature with no localized burning, fitted with heavy-duty forged handles.",
    features: [
      "Solid machine-riveted heavy steel/aluminum dual handles",
      "Thick uniform bowl eliminates oil thermal shock",
      "Mirror-finish interior resists sugar syrup caramel sticking",
      "Wide curved rim provides splash-free ladling"
    ],
    idealFor: "Sweet Shops (Halwais), Samosa/Snack Centers, Wedding Catering",
    illustration: "kadai"
  },
  {
    id: "maar-kadai-02",
    name: "Deep Frying Commercial Karahi (Extra Deep)",
    category: "kadais-pans",
    categoryLabel: "Kadais & Pans",
    gauge: "Heavy Duty Gauge 10 (3.2 mm)",
    gaugeBadge: "Gauge 10 Heavy Duty",
    material: "Food-Grade Pure Aluminium",
    sizeRange: "12 inches to 28 inches Diameter",
    sizes: [
      { label: "12 Inch Deep / 6 Litres", capacity: "6 Litres", weight: "2.1 kg", diameter: "12\"" },
      { label: "16 Inch Deep / 12 Litres", capacity: "12 Litres", weight: "3.7 kg", diameter: "16\"" },
      { label: "20 Inch Deep / 22 Litres", capacity: "22 Litres", weight: "5.8 kg", diameter: "20\"" },
      { label: "24 Inch Deep / 36 Litres", capacity: "36 Litres", weight: "8.9 kg", diameter: "24\"" }
    ],
    defaultSize: "16 Inch Deep / 12 Litres",
    wholesaleAvailable: true,
    retailAvailable: true,
    badge: "Oil-Saver Design",
    description: "Deep parabolic design minimizes oil oxidation and prevents hot splashing during fast-paced commercial frying of jalebis, puris, bajjis, and chicken.",
    features: [
      "Deep contour saves oil while maximizing submerged frying area",
      "Double-strength heavy rolled rim",
      "Fast heat absorption cuts preheat time by 30%",
      "Solid double-riveted ring handles"
    ],
    idealFor: "Snack Stalls, Quick Service Restaurants (QSR), Hotel Buffets",
    illustration: "kadai-deep"
  },
  {
    id: "maar-kadai-03",
    name: "Commercial Flat-Bottom Tope / Boiling Pot",
    category: "kadais-pans",
    categoryLabel: "Kadais & Pans",
    gauge: "Heavy Gauge 12 (2.6 mm) / 10 (3.2 mm)",
    gaugeBadge: "Gauge 12 Commercial",
    material: "High-Purity Aluminium",
    sizeRange: "No. 10 to No. 34 (2 Litres to 50 Litres)",
    sizes: [
      { label: "Tope No. 12 — 3.5 Litres", capacity: "3.5 Litres", weight: "1.1 kg", diameter: "8\"" },
      { label: "Tope No. 16 — 7.5 Litres", capacity: "7.5 Litres", weight: "2.0 kg", diameter: "11\"" },
      { label: "Tope No. 20 — 14 Litres", capacity: "14 Litres", weight: "3.3 kg", diameter: "13\"" },
      { label: "Tope No. 24 — 22 Litres", capacity: "22 Litres", weight: "4.8 kg", diameter: "15\"" },
      { label: "Tope No. 28 — 35 Litres", capacity: "35 Litres", weight: "7.1 kg", diameter: "18\"" },
      { label: "Tope No. 32 — 50 Litres", capacity: "50 Litres", weight: "9.8 kg", diameter: "21\"" }
    ],
    defaultSize: "Tope No. 20 — 14 Litres",
    wholesaleAvailable: true,
    retailAvailable: true,
    badge: "Kitchen Workhorse",
    description: "The universal multipurpose boiling and simmering vessel. Flat stable bottom works seamlessly on gas burners, commercial bhattis, and coal hearths.",
    features: [
      "Flat, wide base delivers uniform heat conductivity",
      "Sturdy beaded collar rim resists bending",
      "Smooth rounded inner corners for easy cleaning and scraping",
      "Available with matching snug lids"
    ],
    idealFor: "Milk Boiling, Sambar & Dal, Curries, Tea / Chai Stalls, Rice Cooking",
    illustration: "tope"
  },
  {
    id: "maar-kadai-04",
    name: "Heavy Commercial Saucepan / Chai Tope",
    category: "kadais-pans",
    categoryLabel: "Kadais & Pans",
    gauge: "Heavy Gauge 10 (3.2 mm)",
    gaugeBadge: "Gauge 10 Heavy Duty",
    material: "Pure Virgin Aluminium with Heavy Steel/Bakelite Handle",
    sizeRange: "1.5 Litres to 6 Litres",
    sizes: [
      { label: "Size 1 — 1.5 Litres", capacity: "1.5 Litres", weight: "0.8 kg", diameter: "6.5\"" },
      { label: "Size 2 — 2.5 Litres", capacity: "2.5 Litres", weight: "1.2 kg", diameter: "8\"" },
      { label: "Size 3 — 4.0 Litres", capacity: "4.0 Litres", weight: "1.7 kg", diameter: "9\"" },
      { label: "Size 4 — 6.0 Litres", capacity: "6.0 Litres", weight: "2.3 kg", diameter: "10.5\"" }
    ],
    defaultSize: "Size 3 — 4.0 Litres",
    wholesaleAvailable: true,
    retailAvailable: true,
    badge: "Irani Chai Special",
    description: "Engineered for relentless commercial tea and coffee preparation. Heavy gauge bottom prevents milk scorching and provides comfortable handle ergonomics.",
    features: [
      "Heavy duty heat-insulated steel handle fastened with 3 aircraft-grade rivets",
      "Precision pouring lip prevents messy dribbles",
      "Rapid heat recovery for nonstop tea brewing",
      "Food-safe virgin metal certification"
    ],
    idealFor: "Irani Cafes, Tea Stalls, Hotel Kitchens, Breakfast Outlets",
    illustration: "saucepan"
  },

  // --- Category: Plates & Strainers ---
  {
    id: "maar-plate-01",
    name: "Kalyana Big Thali & Feast Serving Plates",
    category: "plates-strainers",
    categoryLabel: "Plates & Strainers",
    gauge: "Standard Heavy Gauge 16 / 18 (1.6 mm)",
    gaugeBadge: "Gauge 16 Heavy Rim",
    material: "100% Virgin Food-Grade Pure Aluminium (High Polish)",
    sizeRange: "11 inches to 22 inches Diameter",
    sizes: [
      { label: "Standard Dinner Thali — 11 Inch", capacity: "Single Meal", weight: "0.35 kg", diameter: "11\"" },
      { label: "Deluxe Feast Thali — 13 Inch", capacity: "Full Meals", weight: "0.52 kg", diameter: "13\"" },
      { label: "Grand Kalyana Thali — 15 Inch", capacity: "Banquets", weight: "0.75 kg", diameter: "15\"" },
      { label: "Catering Serving Thali — 18 Inch", capacity: "Multi-serve", weight: "1.10 kg", diameter: "18\"" },
      { label: "Jumbo Master Platter — 22 Inch", capacity: "Platter / Display", weight: "1.65 kg", diameter: "22\"" }
    ],
    defaultSize: "Grand Kalyana Thali — 15 Inch",
    wholesaleAvailable: true,
    retailAvailable: true,
    badge: "Direct Wholesale Pack",
    description: "Mirror-polished aluminum catering dining plates with raised curled safety rim. Stackable, unbreakable, lightweight yet sturdy for heavy wedding hall operations.",
    features: [
      "Rolled edge safety rim with smooth non-cutting edge",
      "Brilliant mirror finish with high scratch resistance",
      "Deep recess holds gravies and curries without spilling",
      "Sold in wholesale dozens & gross bundles"
    ],
    idealFor: "Wedding Catering, Community Banquets, Messes, Temple Bhoj",
    illustration: "thali"
  },
  {
    id: "maar-plate-02",
    name: "Perforated Dum Rice Strainer (Jharni / Chalni)",
    category: "plates-strainers",
    categoryLabel: "Plates & Strainers",
    gauge: "Heavy Gauge 14 (2.0 mm) with Reinforced Rim",
    gaugeBadge: "Gauge 14 Reinforced",
    material: "Pure Food-Grade Aluminium with Precision Piercing",
    sizeRange: "16 inches to 36 inches Diameter",
    sizes: [
      { label: "16 Inch Basin / 10 kg Drain", capacity: "10 kg Cooked Rice", weight: "1.8 kg", diameter: "16\"" },
      { label: "20 Inch Basin / 20 kg Drain", capacity: "20 kg Cooked Rice", weight: "2.6 kg", diameter: "20\"" },
      { label: "24 Inch Basin / 35 kg Drain", capacity: "35 kg Cooked Rice", weight: "3.9 kg", diameter: "24\"" },
      { label: "30 Inch Basin / 55 kg Drain", capacity: "55 kg Cooked Rice", weight: "5.5 kg", diameter: "30\"" }
    ],
    defaultSize: "20 Inch Basin / 20 kg Drain",
    wholesaleAvailable: true,
    retailAvailable: true,
    badge: "Biryani Master Tool",
    description: "Crucial for draining par-boiled basmati rice at exact timing for dum biryani. Uniform laser-smooth perforations drain starch water instantly without crushing delicate grains.",
    features: [
      "Smooth deburred perforations prevent rice grain breakage",
      "Heavy reinforced ring rim and bottom support ribs",
      "Twin solid lifting handles for safe handling with hot steam",
      "Corrosion-resistant pure food-safe alloy"
    ],
    idealFor: "Biryani Master Chefs, Catering Kitchens, Central Food Commissaries",
    illustration: "strainer"
  },
  {
    id: "maar-plate-03",
    name: "Commercial Halwai Jhara / Deep Fryer Skimmer",
    category: "plates-strainers",
    categoryLabel: "Plates & Strainers",
    gauge: "Heavy Stamped Perforated Head + Steel Handle",
    gaugeBadge: "Commercial Skimmer",
    material: "Heavy Aluminium Perforated Bowl with Long Forged Handle",
    sizeRange: "8 inches to 16 inches Head (24\" to 36\" Total Length)",
    sizes: [
      { label: "8 Inch Head / 24 Inch Handle", capacity: "Snack Frying", weight: "0.6 kg", diameter: "8\"" },
      { label: "10 Inch Head / 28 Inch Handle", capacity: "Poori / Boondi", weight: "0.9 kg", diameter: "10\"" },
      { label: "12 Inch Head / 30 Inch Handle", capacity: "Halwai Jalebi", weight: "1.2 kg", diameter: "12\"" },
      { label: "14 Inch Head / 36 Inch Handle", capacity: "Heavy Catering", weight: "1.6 kg", diameter: "14\"" }
    ],
    defaultSize: "10 Inch Head / 28 Inch Handle",
    wholesaleAvailable: true,
    retailAvailable: true,
    badge: "High-Heat Safe",
    description: "Long-handle skimmer for safely scooping fried savories, sweets, and boondi from deep kadai oil vats while keeping hands well clear of raging flames.",
    features: [
      "Ultra-long handle with heat-dispersal wooden or steel grip",
      "Evenly spaced holes drain oil in seconds",
      "Stout weld joints guaranteed not to detach under heavy weight",
      "Lightweight ergonomics reduces chef wrist strain"
    ],
    idealFor: "Halwai Shops, Namkeen & Farsan Factories, Fry Stations",
    illustration: "jhara"
  },
  {
    id: "maar-plate-04",
    name: "Aluminum Masala & Gravy Mixing Basin (Tasla / Gamla)",
    category: "plates-strainers",
    categoryLabel: "Plates & Strainers",
    gauge: "Heavy Gauge 12 (2.6 mm)",
    gaugeBadge: "Gauge 12 Commercial",
    material: "Seamless Pressed Virgin Aluminium",
    sizeRange: "14 inches to 30 inches Diameter (5L to 45L)",
    sizes: [
      { label: "14 Inch / 5 Litres", capacity: "5 Litres", weight: "1.1 kg", diameter: "14\"" },
      { label: "18 Inch / 12 Litres", capacity: "12 Litres", weight: "1.9 kg", diameter: "18\"" },
      { label: "22 Inch / 22 Litres", capacity: "22 Litres", weight: "3.2 kg", diameter: "22\"" },
      { label: "26 Inch / 35 Litres", capacity: "35 Litres", weight: "4.8 kg", diameter: "26\"" }
    ],
    defaultSize: "18 Inch / 12 Litres",
    wholesaleAvailable: true,
    retailAvailable: true,
    badge: "All-Round Basin",
    description: "Seamless wide-mouth preparation basin for dough kneading (atta gundhana), meat marinating, salad tossing, and vegetable cutting.",
    features: [
      "Seamless single-piece pressing without crevices",
      "Wide sturdy base remains rock-solid during aggressive kneading",
      "Smooth non-stick satin finish washes easily",
      "Stackable nest-in design saves kitchen floor space"
    ],
    idealFor: "Commercial Bakeries, Roti / Naan Sections, Meat Preparation",
    illustration: "tasla"
  },

  // --- Category: Storage & Milk Cans ---
  {
    id: "maar-storage-01",
    name: "Seamless Heavy-Duty Aluminum Milk Can",
    category: "storage-milk-cans",
    categoryLabel: "Storage & Milk Cans",
    gauge: "Heavy Gauge 10 (3.2 mm) Seamless Spun",
    gaugeBadge: "Gauge 10 Seamless",
    material: "99.5% Pure Virgin Food-Safe Aluminium (Dairy Grade)",
    sizeRange: "10 Litres to 50 Litres",
    sizes: [
      { label: "10 Litres Dairy Can", capacity: "10 Litres", weight: "2.6 kg", height: "38 cm" },
      { label: "15 Litres Dairy Can", capacity: "15 Litres", weight: "3.3 kg", height: "43 cm" },
      { label: "20 Litres Dairy Can", capacity: "20 Litres", weight: "4.1 kg", height: "48 cm" },
      { label: "30 Litres Dairy Can", capacity: "30 Litres", weight: "5.5 kg", height: "55 cm" },
      { label: "40 Litres Dairy Can", capacity: "40 Litres", weight: "6.8 kg", height: "60 cm" },
      { label: "50 Litres Jumbo Can", capacity: "50 Litres", weight: "8.2 kg", height: "66 cm" }
    ],
    defaultSize: "20 Litres Dairy Can",
    wholesaleAvailable: true,
    retailAvailable: true,
    badge: "Dairy Grade Certified",
    description: "The trusted choice of dairy cooperatives and commercial milk distributors. Seamless spun aluminum body preserves milk chill, prevents bacterial entrapment, and withstands rough transport.",
    features: [
      "100% seamless hygienic spun body — no weld joints inside",
      "Airtight mushroom cap lid with secure chain tether",
      "Heavy forged top carrying handle with ergonomic balance",
      "Heavy bottom rim ring protects against ground drops and abrasions"
    ],
    idealFor: "Dairy Farmers, Milk Chilling Centers, Ghee Producers, Tea Stalls",
    illustration: "milk-can"
  },
  {
    id: "maar-storage-02",
    name: "Commercial Kitchen Grain & Atta Storage Drum",
    category: "storage-milk-cans",
    categoryLabel: "Storage & Milk Cans",
    gauge: "Commercial Gauge 14 (2.0 mm) with Heavy Flanges",
    gaugeBadge: "Gauge 14 Heavy",
    material: "Food-Safe Rustproof Virgin Aluminium",
    sizeRange: "25 kg to 100 kg Storage Capacity",
    sizes: [
      { label: "Small — 25 kg Grain / 35 L", capacity: "35 Litres", weight: "3.2 kg", storage: "25 kg Flour/Rice" },
      { label: "Medium — 50 kg Grain / 65 L", capacity: "65 Litres", weight: "5.4 kg", storage: "50 kg Flour/Rice" },
      { label: "Large — 75 kg Grain / 95 L", capacity: "95 Litres", weight: "7.8 kg", storage: "75 kg Flour/Rice" },
      { label: "Jumbo — 100 kg Grain / 130 L", capacity: "130 Litres", weight: "10.5 kg", storage: "100 kg Flour/Rice" }
    ],
    defaultSize: "Medium — 50 kg Grain / 65 L",
    wholesaleAvailable: true,
    retailAvailable: true,
    badge: "Pest & Moisture Proof",
    description: "Keep flour, basmati rice, pulses, and dry spices protected from moisture and rodents. Deep snug-fit aluminum lid forms a reliable protective seal.",
    features: [
      "Sturdy heavy-duty side carry handles riveted with backing plates",
      "Pest-proof tight collar lid keeps dry goods fresh for months",
      "Corrosion-free aluminum doesn't rust even in humid coastal areas",
      "Smooth non-crevice interior wipes clean in seconds"
    ],
    idealFor: "Hotel Pantries, Commercial Commissaries, Messes, Retail Grocery Stores",
    illustration: "drum"
  },
  {
    id: "maar-storage-03",
    name: "Aluminum Ghee & Oil Canister with Spout",
    category: "storage-milk-cans",
    categoryLabel: "Storage & Milk Cans",
    gauge: "Heavy Gauge 12 (2.6 mm)",
    gaugeBadge: "Gauge 12 Commercial",
    material: "Virgin Aluminium (Acid & Fat Resistant Polishing)",
    sizeRange: "5 Litres to 25 Litres",
    sizes: [
      { label: "5 Litres Canister", capacity: "5 Litres", weight: "1.4 kg", height: "26 cm" },
      { label: "10 Litres Canister", capacity: "10 Litres", weight: "2.3 kg", height: "34 cm" },
      { label: "15 Litres Canister", capacity: "15 Litres", weight: "3.1 kg", height: "40 cm" },
      { label: "25 Litres Canister", capacity: "25 Litres", weight: "4.6 kg", height: "48 cm" }
    ],
    defaultSize: "10 Litres Canister",
    wholesaleAvailable: true,
    retailAvailable: true,
    badge: "Leak-Proof Spout",
    description: "Designed for commercial cooking stations for dispensing refined oil, mustard oil, melted butter, or pure desi ghee without drips or wastage.",
    features: [
      "Precision curved pouring spout with snap-fit dust cap",
      "Sturdy overhead bail handle for one-handed controlled pouring",
      "Airtight filling lid for fast refilling",
      "Will not taint aromatic ghee or oils"
    ],
    idealFor: "Dosa Corners, Sweet Makers, Restaurant Fry Stations, Domestic Bulk Use",
    illustration: "ghee-can"
  },

  // --- Category: Commercial Cookware & Stoves ---
  {
    id: "maar-stove-01",
    name: "Heavy Commercial Single Bhatti Gas Stove",
    category: "commercial-cookware-stoves",
    categoryLabel: "Commercial Cookware & Stoves",
    gauge: "Heavy Angle Iron Frame + High BTU Cast Iron Burner",
    gaugeBadge: "High Pressure Commercial",
    material: "Structural Heavy Angle Iron with High-Pressure Brass Cock & Cast Burner",
    sizeRange: "18\" x 18\" to 24\" x 24\" Top Surface",
    sizes: [
      { label: "18\" x 18\" — Burner T-35 (Standard Catering)", capacity: "Supports up to 50 kg Deg", weight: "14.5 kg", burner: "T-35 High Pressure" },
      { label: "20\" x 20\" — Burner M-45 (Commercial Hotel)", capacity: "Supports up to 90 kg Deg", weight: "18.2 kg", burner: "M-45 High Pressure" },
      { label: "24\" x 24\" — Jumbo Burner M-60 (Feast Cook)", capacity: "Supports up to 150 kg Deg", weight: "24.0 kg", burner: "M-60 High Pressure" }
    ],
    defaultSize: "18\" x 18\" — Burner T-35 (Standard Catering)",
    wholesaleAvailable: true,
    retailAvailable: true,
    badge: "High Heat Efficiency",
    description: "The rugged backbone of catering and hotel kitchens. High-pressure blue-flame burner handles large biryani degs and halwai kadais with maximum thermal efficiency.",
    features: [
      "Heavy gauge angle-iron frame supports 150+ kg vessel weight",
      "Genuine cast-iron high-pressure burner delivers intense concentrated flame",
      "Industrial needle valve for fine simmer-to-roaring flame adjustment",
      "Removable top grid for easy soot cleanout"
    ],
    idealFor: "Outdoor Catering, Biryani Hubs, Banquet Kitchens, Fast Food Centers",
    illustration: "stove-single"
  },
  {
    id: "maar-stove-02",
    name: "Double Burner Commercial Catering Bhatti",
    category: "commercial-cookware-stoves",
    categoryLabel: "Commercial Cookware & Stoves",
    gauge: "Reinforced MS Tubular / Angle Frame",
    gaugeBadge: "Dual High Pressure",
    material: "Reinforced Structural Steel with Dual Cast Burners",
    sizeRange: "40\" x 20\" Frame Size",
    sizes: [
      { label: "Dual T-35 High Pressure Burners", capacity: "Dual Heavy Cooking", weight: "28.5 kg", dimensions: "40\" x 20\" x 24\"" },
      { label: "Combo T-35 + Low Pressure V-Burner", capacity: "Simmer + Boil Station", weight: "31.0 kg", dimensions: "44\" x 22\" x 24\"" }
    ],
    defaultSize: "Dual T-35 High Pressure Burners",
    wholesaleAvailable: true,
    retailAvailable: true,
    badge: "Kitchen Workstation",
    description: "Simultaneously boil rice and fry curries. Heavy dual-station bhatti engineered for continuous 12-hour high-heat operation in busy commercial environments.",
    features: [
      "Independent heavy brass gas controls for each burner",
      "Stout anti-slip pan supports for large kadais and topes",
      "Integrated heat shield protects control valves",
      "Heavy load rating of 250 kg total distributed load"
    ],
    idealFor: "Hotels, Dhaba Kitchens, Caterers, Industrial Canteens",
    illustration: "stove-double"
  },
  {
    id: "maar-stove-03",
    name: "Commercial Heavy Aluminum Idli Steamer Box",
    category: "commercial-cookware-stoves",
    categoryLabel: "Commercial Cookware & Stoves",
    gauge: "Heavy Gauge 12 (2.6 mm) Commercial Grade",
    gaugeBadge: "Gauge 12 Commercial",
    material: "100% Virgin Aluminium Box with Multi-Tier Aluminum Trays",
    sizeRange: "24 Idlis to 108 Idlis per batch",
    sizes: [
      { label: "6 Trays — 24 Idli Capacity", capacity: "24 Idlis / batch", weight: "5.5 kg", time: "10-12 mins" },
      { label: "12 Trays — 48 Idli Capacity", capacity: "48 Idlis / batch", weight: "8.9 kg", time: "12-14 mins" },
      { label: "18 Trays — 72 Idli Capacity", capacity: "72 Idlis / batch", weight: "12.8 kg", time: "14-16 mins" },
      { label: "24 Trays — 96 Idli Capacity", capacity: "96 Idlis / batch", weight: "16.5 kg", time: "15-18 mins" },
      { label: "Master Box — 108 Idli Jumbo", capacity: "108 Idlis / batch", weight: "19.0 kg", time: "16-20 mins" }
    ],
    defaultSize: "12 Trays — 48 Idli Capacity",
    wholesaleAvailable: true,
    retailAvailable: true,
    badge: "Fast Steaming Design",
    description: "Produce fluffiest South Indian idlis at commercial volume. Heavy-gauge aluminum box holds steam pressure steadily, cutting fuel bills and cooking cycles.",
    features: [
      "Quick-release steam latch door with high-temp heat gasket",
      "Anodized food-contact idli plates with non-stick rice batter release",
      "Rapid boiling water chamber at bottom with overflow drain port",
      "Stackable heavy-gauge slide-in tray channels"
    ],
    idealFor: "Udupi Restaurants, Tiffin Centers, College Canteens, Breakfast Caterers",
    illustration: "idli-steamer"
  },
  {
    id: "maar-stove-04",
    name: "Heavy Aluminum Rice & Dal Cauldron (Patila / Deghchi)",
    category: "commercial-cookware-stoves",
    categoryLabel: "Commercial Cookware & Stoves",
    gauge: "Heavy Gauge 10 (3.2 mm) Thick Base",
    gaugeBadge: "Gauge 10 Commercial",
    material: "Virgin Aluminium (99.5% Pure)",
    sizeRange: "No. 18 to No. 40 (15 Litres to 100 Litres)",
    sizes: [
      { label: "No. 20 — 15 Litres (Catering Rice)", capacity: "15 Litres", weight: "3.8 kg", diameter: "14\"" },
      { label: "No. 24 — 30 Litres (Medium Hotel)", capacity: "30 Litres", weight: "6.2 kg", diameter: "17\"" },
      { label: "No. 30 — 55 Litres (Wedding Sambar)", capacity: "55 Litres", weight: "10.4 kg", diameter: "21\"" },
      { label: "No. 36 — 85 Litres (Feast Gravy)", capacity: "85 Litres", weight: "15.8 kg", diameter: "25\"" },
      { label: "No. 40 — 100 Litres (Grand Feast)", capacity: "100 Litres", weight: "19.5 kg", diameter: "28\"" }
    ],
    defaultSize: "No. 30 — 55 Litres (Wedding Sambar)",
    wholesaleAvailable: true,
    retailAvailable: true,
    badge: "Even Heat Thick Base",
    description: "Deep cylindrical profile ideal for boiling bulk rice, simmering aromatic sambar, boiling potatoes, and preparing hearty stews without scorch spots.",
    features: [
      "Extra-thick circular base distributes thermal energy across the full floor",
      "Wide curved lip facilitates safe 2-person pouring",
      "Double reinforced perimeter rim will never warp or egg-shape",
      "Comes complete with heavy gauge matching aluminum flat lid"
    ],
    idealFor: "Hotel Sambar/Dal Stations, Marriage Halls, Community Bhoj, Langar",
    illustration: "patila"
  }
];

// Caterer Biryani Sizing Guide Matrix for the interactive calculator
const BIRYANI_CALCULATOR_DATA = [
  { minGuests: 1, maxGuests: 30, riceKg: "3-4 kg Rice", degSize: "No. 2 (12 Litres)", recommendedDeg: "Traditional Hammered Biryani Deg (No. 2)" },
  { minGuests: 31, maxGuests: 75, riceKg: "8-10 kg Rice", degSize: "No. 3 (25 Litres)", recommendedDeg: "Traditional Hammered Biryani Deg (No. 3)" },
  { minGuests: 76, maxGuests: 140, riceKg: "15-18 kg Rice", degSize: "No. 4 (38 Litres)", recommendedDeg: "Traditional Hammered Biryani Deg (No. 4)" },
  { minGuests: 141, maxGuests: 250, riceKg: "25-30 kg Rice", degSize: "No. 5 (60 Litres)", recommendedDeg: "Traditional Hammered Biryani Deg (No. 5)" },
  { minGuests: 251, maxGuests: 500, riceKg: "50-60 kg Rice", degSize: "No. 6 Jumbo (120 Litres) or 2x No. 5", recommendedDeg: "Jumbo Kalyana Feast Biryani Deg (120 Litres)" },
  { minGuests: 501, maxGuests: 1000, riceKg: "100-120 kg Rice", degSize: "2x Jumbo 120L or 3x No. 5 60L", recommendedDeg: "Jumbo Kalyana Feast Biryani Deg (Multiple Units)" }
];
