
import React from 'react';

// SVG icons for product categories
const UPVCIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 16.5h12"/>
    <path d="M6 16.5A2.5 2.5 0 0 1 3.5 14v-3a2.5 2.5 0 0 1 5 0v3A2.5 2.5 0 0 1 6 16.5Z"/>
    <path d="M18 16.5A2.5 2.5 0 0 1 15.5 14v-3a2.5 2.5 0 0 1 5 0v3A2.5 2.5 0 0 1 18 16.5Z"/>
    <path d="M3.5 11h17"/>
    <path d="M6 16.5v4.5"/>
    <path d="M18 16.5v4.5"/>
  </svg>
);

const CPVCIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
    <path d="M3 3v5h5"/>
    <path d="M12 7v5l3 3"/>
  </svg>
);

const SWRIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 21h10"/>
    <path d="M12 3a6 6 0 0 0-6 6v10a6 6 0 0 0 12 0V9a6 6 0 0 0-6-6Z"/>
    <path d="M12 11h3a3 3 0 1 0 0-6h-3v14"/>
  </svg>
);

const DrainageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12h0"/>
    <path d="M8 12h0"/>
    <path d="M12 12h0"/>
    <path d="M16 12h0"/>
    <path d="M20 12h0"/>
    <path d="M17 4v6M3 4v6"/>
    <path d="M21 12v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5"/>
    <path d="M7 8v4"/>
    <path d="M17 8v4"/>
  </svg>
);

const FRPIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 11a9.87 9.87 0 0 0 10 12"></path>
    <path d="M9 11H4.88a2 2 0 0 0-1.9 1.36 12 12 0 0 0 0 6.28A2 2 0 0 0 4.88 20H9"></path>
    <path d="M9 11v9"></path>
    <path d="M9 11a9.87 9.87 0 0 1-3-1 9.82 9.82 0 0 1-3-3.5M15 11v2"></path>
  </svg>
);

const ElbowFittingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7v9a2 2 0 0 0 2 2h2"></path>
    <path d="M7 18h12a2 2 0 0 0 2-2v-1.1a2 2 0 0 0-1.46-1.93 2 2 0 0 1-1.46-1.93V7.93A2 2 0 0 0 16.62 6h-1.24a2 2 0 0 0-1.46.93L13 8.5"></path>
  </svg>
);

const TeeFittingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 4v12"></path>
    <path d="M4 12h16"></path>
    <path d="M12 20c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2Z"></path>
  </svg>
);

export const productsData = [
  {
    id: 1,
    name: "UPVC Pipes & Fittings",
    slug: "upvc-pipes-fittings",
    category: "pipes",
    material: "Unplasticized Polyvinyl Chloride",
    standards: "IS 4985, ASTM D1785",
    shortDescription: "Durable UPVC pipes for water supply and plumbing applications.",
    description: "Our UPVC pipes and fittings are manufactured to the highest standards, ensuring durability, chemical resistance, and excellent flow characteristics. These pipes are ideal for cold water supply systems in residential, commercial, and industrial applications.",
    additionalInfo: "UPVC pipes are known for their smooth interior surfaces which minimize friction loss and prevent scale buildup, ensuring efficient water flow throughout their long service life.",
    icon: <UPVCIcon />,
    features: [
      "Corrosion resistant",
      "UV stabilized",
      "Easy installation",
      "Lower thermal conductivity",
      "Long service life (50+ years)",
      "Excellent chemical resistance",
      "Cost-effective solution"
    ],
    applications: {
      residential: [
        "Drinking water supply",
        "Rainwater harvesting",
        "Garden irrigation",
        "Bathroom plumbing"
      ],
      commercial: [
        "Water distribution systems",
        "Fire protection systems",
        "Water treatment plants",
        "Swimming pools"
      ],
      industrial: [
        "Chemical processing",
        "Water treatment",
        "Agricultural irrigation"
      ]
    }
  },
  {
    id: 2,
    name: "CPVC Pipes & Fittings",
    slug: "cpvc-pipes-fittings",
    category: "pipes",
    material: "Chlorinated Polyvinyl Chloride",
    standards: "IS 15778, ASTM D2846",
    shortDescription: "Heat-resistant CPVC pipes for hot and cold water applications.",
    description: "CPVC pipes and fittings are specifically designed to handle both hot and cold water applications. With superior heat resistance and pressure capabilities, these pipes are perfect for hot water distribution systems in homes and commercial buildings.",
    additionalInfo: "Our CPVC products maintain structural integrity at temperatures up to 93°C (200°F), making them ideal for hot water applications where standard PVC would fail.",
    icon: <CPVCIcon />,
    features: [
      "Temperature resistance (up to 93°C)",
      "Self-extinguishing properties",
      "Low thermal conductivity",
      "Excellent insulation",
      "Corrosion and chemical resistant",
      "Scale and deposit resistant",
      "Certified for potable water"
    ],
    applications: {
      residential: [
        "Hot water supply lines",
        "Cold water supply lines",
        "Centralized heating systems",
        "Water purification systems"
      ],
      commercial: [
        "Hotels and restaurants",
        "Hospitals",
        "Educational institutions",
        "Office buildings"
      ]
    }
  },
  {
    id: 3,
    name: "SWR Pipes & Fittings",
    slug: "swr-pipes-fittings",
    category: "drainage",
    material: "UPVC",
    standards: "IS 13592, IS 14735",
    shortDescription: "Soil, waste, and rain water drainage system for buildings.",
    description: "SWR (Soil, Waste, and Rain) drainage systems are designed for efficient removal of waste water and rainwater from buildings. Our SWR pipes feature a push-fit design for easy installation and are manufactured to withstand the harsh conditions of waste disposal.",
    additionalInfo: "Our SWR systems come with various joints and fittings to accommodate different building layouts and requirements, offering complete drainage solutions.",
    icon: <SWRIcon />,
    features: [
      "Noise-free water flow",
      "Leak-proof rubber ring joints",
      "High impact strength",
      "Resistance to chemicals and effluents",
      "Smooth inner surface prevents blockage",
      "UV stabilized for outdoor usage",
      "Superior hydraulic properties"
    ],
    applications: {
      residential: [
        "Toilet waste pipes",
        "Kitchen drainage",
        "Bathroom drainage",
        "Rainwater downpipes"
      ],
      commercial: [
        "Multi-story building drainage",
        "Rainfall drainage systems",
        "Commercial kitchen waste lines",
        "Public restroom facilities"
      ]
    }
  },
  {
    id: 4,
    name: "Underground Drainage Systems",
    slug: "underground-drainage-systems",
    category: "drainage",
    material: "PVC/HDPE",
    standards: "IS 15328",
    shortDescription: "Durable underground pipes for sewage and stormwater drainage.",
    description: "Our underground drainage systems are designed for the safe and efficient transport of sewage and stormwater below ground. These robust pipes offer exceptional durability and resistance to ground pressure, ensuring a long-lasting drainage solution.",
    additionalInfo: "These systems include a variety of accessories such as inspection chambers, manholes, and gullies to create a complete underground drainage network.",
    icon: <DrainageIcon />,
    features: [
      "High ring stiffness",
      "Superior load-bearing capacity",
      "Chemical and abrasion resistance",
      "Long service life (100+ years)",
      "Minimal maintenance required",
      "Watertight sealed joints",
      "Resistant to root penetration"
    ],
    applications: {
      residential: [
        "House sewer connections",
        "Foundation drainage",
        "Yard drainage systems",
        "Septic tank connections"
      ],
      commercial: [
        "Parking lot drainage",
        "Shopping complexes",
        "Campus drainage networks",
        "Highway drainage systems"
      ]
    }
  },
  {
    id: 5,
    name: "FRP Chamber Covers",
    slug: "frp-chamber-covers",
    category: "accessories",
    material: "Fiber Reinforced Plastic",
    standards: "IS 1726",
    shortDescription: "Lightweight, durable covers for inspection chambers and manholes.",
    description: "Our FRP (Fiber Reinforced Plastic) chamber covers combine strength with lightweight design, making them perfect alternatives to traditional heavy cast iron covers. These covers are easy to handle, corrosion-resistant, and provide secure access to underground chambers.",
    additionalInfo: "Available in various load ratings from pedestrian areas to heavy vehicular traffic zones, our FRP covers can be customized with anti-slip patterns and locking mechanisms for enhanced safety.",
    icon: <FRPIcon />,
    features: [
      "Lightweight (70-80% lighter than cast iron)",
      "High strength-to-weight ratio",
      "Corrosion and rust proof",
      "UV and weather resistant",
      "Non-conductive (electrical safety)",
      "Anti-theft design",
      "Custom colors and logos available"
    ],
    applications: {
      residential: [
        "Garden inspection chambers",
        "Residential driveways",
        "Water meter covers",
        "Septic tank access points"
      ],
      commercial: [
        "Sidewalks and pedestrian areas",
        "Parking facilities",
        "Landscaped areas",
        "Utility access points"
      ]
    }
  },
  {
    id: 6,
    name: "UPVC Elbows",
    slug: "upvc-elbows",
    category: "fittings",
    material: "UPVC",
    standards: "IS 4985",
    shortDescription: "Elbows for changing direction in UPVC piping systems.",
    description: "Our UPVC elbow fittings are designed to create smooth direction changes in piping systems. Available in various angles including 45° and 90°, these fittings ensure optimal flow while maintaining system integrity.",
    icon: <ElbowFittingIcon />,
    features: [
      "Precision-engineered for exact fit",
      "Available in multiple dimensions",
      "Compatible with standard UPVC pipes",
      "Solvent weld joining system",
      "Smooth inner surface reduces friction loss"
    ],
    applications: {
      residential: [
        "Water supply corners",
        "Plumbing installations",
        "Drainage systems",
        "Irrigation systems"
      ],
      commercial: [
        "Commercial plumbing",
        "Water distribution networks",
        "Specialty water systems",
        "Pool and spa installations"
      ]
    }
  },
  {
    id: 7,
    name: "UPVC Tee Joints",
    slug: "upvc-tee-joints",
    category: "fittings",
    material: "UPVC",
    standards: "IS 4985",
    shortDescription: "T-shaped fittings for creating branch connections in piping systems.",
    description: "UPVC tee joints allow for the creation of branch lines in your piping system. These fittings connect three pipes together, creating a T-shaped junction that's perfect for distributing water to multiple outlets or connecting branch lines to main pipes.",
    icon: <TeeFittingIcon />,
    features: [
      "Equal and reducing tees available",
      "High structural integrity at junction points",
      "Consistent internal diameter for smooth flow",
      "Precision molded for accurate alignment",
      "Available in various sizes for different applications"
    ],
    applications: {
      residential: [
        "Bathroom branch connections",
        "Kitchen plumbing networks",
        "Garden irrigation branches",
        "Main line distribution"
      ],
      commercial: [
        "Water supply branch lines",
        "Cooling system distribution",
        "Industrial process piping",
        "Fire sprinkler systems"
      ]
    }
  }
];
