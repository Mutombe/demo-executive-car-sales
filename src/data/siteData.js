export const designTokens = {
  heroStyle: "cinematic",
  typography: { heading: "Playfair Display", body: "DM Sans", display: "Playfair Display" },
  effects: { noise: true, glassmorphism: "none", floatingShapes: false, scrollProgress: true, meshGradient: false, gradientBorders: false, cursorGlow: false },
  animationPreset: "dramatic",
  serviceCardStyle: "overlay",
  projectGridStyle: "masonry",
  testimonialStyle: "carousel",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: ["hero","marquee","services","portfolio","stats","about","whyChooseUs","testimonials","cta"],
};

const siteData = {
  business: {
    name: "Executive Car Sales",
    legalName: "Executive Car Sales Zimbabwe",
    tagline: "Where Prestige Meets the Open Road",
    description: "Executive Car Sales is Harare's premier dealership for luxury and performance vehicles. Specialising in imported pre-owned prestige marques, we deliver an automotive buying experience defined by discretion, quality assurance, and an uncompromising selection of the finest machines on the continent.",
    phone: "+263 77 278 2514",
    phoneRaw: "+263772782514",
    whatsappNumber: "263772782514",
    email: "info@executivecarsales.co.zw",
    address: "15 Hendrikz Way Corner, Second St Ext, Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.7,
    ratingRounded: 5,
    reviewCount: 19,
    established: "2015",
    yearsExperience: "9+",
    projectsCompleted: "800+",
    employees: "15+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "9:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292",
    cookieConsentKey: "executive-car-sales-consent",
    socialLinks: { facebook: "#", instagram: "#", linkedin: "#" },
  },

  navbar: { logoImage: null, logoLine1: "Executive", logoLine2: "Car Sales" },

  hero: {
    badge: "Harare's Premier Luxury Auto Dealership",
    titleParts: [
      { text: "PRESTIGE " },
      { text: "REDEFINED", highlight: true },
      { text: " ON EVERY DRIVE." },
    ],
    subtitle: "Curated luxury. Certified quality. Every vehicle in our showroom has been hand-selected for discerning drivers who refuse to compromise.",
    ctaPrimary: "Browse Inventory",
    ctaSecondary: "Book a Test Drive",
    trustBadge: "800+ Vehicles Sold",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=85", alt: "Luxury sports car on open road" },
      { url: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1920&q=85", alt: "Premium vehicle in showroom" },
      { url: "https://images.unsplash.com/photo-1549317661-bd32c8ce0571?w=1920&q=85", alt: "Executive sedan on highway" },
    ],
  },

  stats: [
    { number: "800+", label: "Vehicles Sold" },
    { number: "9+", label: "Years in Business" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Premium Brands" },
  ],

  servicesPreview: [
    { title: "Luxury Vehicle Sales", desc: "Hand-picked prestige marques from Mercedes-Benz, BMW, Audi, Range Rover, and Porsche. Every vehicle undergoes a 150-point inspection before entering our showroom.", icon: "Car" },
    { title: "Vehicle Financing", desc: "Flexible financing solutions tailored to your budget. We partner with leading banks to secure the most competitive rates for our clients.", icon: "CurrencyDollar" },
    { title: "Trade-In Program", desc: "Upgrade effortlessly. We offer fair market valuations on your current vehicle and apply it directly toward your next prestige purchase.", icon: "Handshake" },
    { title: "Import Services", desc: "Access to the global market. We source specific models from Japan, UK, South Africa, and the UAE to match your exact specifications.", icon: "Rocket" },
    { title: "After-Sales Support", desc: "Our relationship does not end at the handshake. Warranty support, service recommendations, and priority access to new arrivals.", icon: "ShieldCheck" },
    { title: "Fleet Solutions", desc: "Corporate fleet packages for businesses that demand prestige. Volume pricing, maintenance plans, and dedicated account management.", icon: "Buildings" },
  ],

  services: {
    heroTitle: "Our Services",
    heroSubtitle: "Six pillars of automotive excellence, built around your driving ambitions.",
    items: [
      { title: "Luxury Vehicle Sales", slug: "luxury-vehicle-sales", desc: "Our showroom is a gallery of automotive art. Every vehicle has been hand-selected from trusted sources worldwide, inspected by certified technicians, and presented in showroom-perfect condition. From the latest Mercedes-Benz S-Class to classic Range Rover Vogues, we curate a collection that speaks to those who understand that a vehicle is more than transport -- it is an extension of identity.", features: ["150-Point Inspection","Full Service History","Warranty Options","Premium Detailing","Documentation Support","Test Drive Experience"], image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80" },
      { title: "Vehicle Financing", slug: "vehicle-financing", desc: "We believe the right vehicle should be accessible. Our finance team works with Zimbabwe's leading financial institutions to structure deals that work for you -- whether you prefer hire purchase, lease-to-own, or outright purchase with staged payments.", features: ["Bank Partnerships","Competitive Rates","Quick Approval","Flexible Terms","Insurance Packages","Budget Planning"], image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80" },
      { title: "Trade-In Program", slug: "trade-in-program", desc: "Upgrading should feel exciting, not complicated. Drive in with your current vehicle, receive a transparent valuation from our team, and drive out in something extraordinary. We handle all paperwork, transfers, and logistics.", features: ["Fair Valuations","Same-Day Processing","All Brands Accepted","Paperwork Handled","Instant Credit","No Obligation"], image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0571?w=800&q=80" },
      { title: "Import Services", slug: "import-services", desc: "Cannot find your dream car locally? We source vehicles from Japan, the UK, South Africa, and the UAE. Tell us the make, model, year, and specification -- we handle shipping, clearance, duties, and delivery to your door.", features: ["Global Sourcing","Customs Clearance","Door-to-Door Delivery","Duty Calculation","Vehicle Tracking","Pre-Shipment Inspection"], image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80" },
      { title: "After-Sales Support", slug: "after-sales-support", desc: "Ownership is a journey, not a transaction. Our after-sales team provides warranty administration, connects you with trusted service centres, and gives you priority access to new stock before it hits the showroom floor.", features: ["Warranty Admin","Service Network","Priority Alerts","Parts Sourcing","Roadside Assist","Annual Check-Up"], image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80" },
      { title: "Fleet Solutions", slug: "fleet-solutions", desc: "For businesses that understand image matters. Our corporate fleet program provides volume pricing, dedicated account management, maintenance scheduling, and replacement vehicle guarantees for your executive team.", features: ["Volume Pricing","Account Manager","Maintenance Plans","Replacement Guarantee","Insurance Bundling","Branding Options"], image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80" },
    ],
  },

  projects: {
    heroTitle: "Our Showroom",
    heroSubtitle: "A curated selection of the finest vehicles we have placed with discerning owners.",
    items: [
      { title: "Mercedes-Benz S-Class", slug: "mercedes-benz-s-class", category: "Sedan", location: "Harare, Zimbabwe", desc: "The pinnacle of automotive luxury. A 2022 S500 in Obsidian Black with Nappa leather.", client: "Private Client", services: ["Import","Financing","Delivery"], image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80", images: ["https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80","https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80"] },
      { title: "Range Rover Vogue", slug: "range-rover-vogue", category: "SUV", location: "Harare, Zimbabwe", desc: "Commanding presence meets refined luxury. A 2021 Vogue SE in Santorini Black.", client: "Corporate Fleet", services: ["Trade-In","Financing","Fleet"], image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0571?w=800&q=80", images: ["https://images.unsplash.com/photo-1549317661-bd32c8ce0571?w=800&q=80","https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80"] },
      { title: "BMW 7 Series", slug: "bmw-7-series", category: "Sedan", location: "Harare, Zimbabwe", desc: "The ultimate executive machine. A 2023 740i in Mineral White with M Sport package.", client: "Private Client", services: ["Import","Inspection","Delivery"], image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80", images: ["https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80","https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80"] },
      { title: "Porsche Cayenne GTS", slug: "porsche-cayenne-gts", category: "Performance", location: "Harare, Zimbabwe", desc: "Sports car soul in an SUV body. A 2022 Cayenne GTS in Carmine Red.", client: "Private Client", services: ["Import","Warranty","Detailing"], image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80", images: ["https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80","https://images.unsplash.com/photo-1549317661-bd32c8ce0571?w=800&q=80"] },
      { title: "Audi Q8 55 TFSI", slug: "audi-q8", category: "SUV", location: "Harare, Zimbabwe", desc: "Where technology meets design. A 2023 Q8 in Navarra Blue with Virtual Cockpit.", client: "Private Client", services: ["Sourcing","Financing","Registration"], image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80", images: ["https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80"] },
      { title: "Land Cruiser 300", slug: "land-cruiser-300", category: "SUV", location: "Harare, Zimbabwe", desc: "The king of African roads. A 2022 LC300 GR Sport in Precious White Pearl.", client: "Private Client", services: ["Import","Clearance","Delivery"], image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0571?w=800&q=80", images: ["https://images.unsplash.com/photo-1549317661-bd32c8ce0571?w=800&q=80"] },
      { title: "Mercedes-AMG G63", slug: "mercedes-amg-g63", category: "SUV", location: "Harare, Zimbabwe", desc: "Iconic. Unstoppable. A 2023 G63 in Manufaktur Olive Green with diamond-stitched interior.", client: "VIP Client", services: ["Special Order","Import","Delivery"], image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80", images: ["https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80"] },
      { title: "BMW X5 M Competition", slug: "bmw-x5-m", category: "Performance", location: "Harare, Zimbabwe", desc: "617 horsepower wrapped in everyday luxury. A 2023 X5 M in Frozen Marina Bay Blue.", client: "Private Client", services: ["Import","Performance Spec","Delivery"], image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80", images: ["https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80"] },
    ],
  },

  homeTestimonials: [
    { text: "Executive Car Sales made buying my dream Mercedes feel effortless. The inspection report was thorough, the financing was competitive, and the handover experience was world-class. I will never buy a car anywhere else.", name: "Tendai Moyo", role: "Mercedes-Benz S-Class Owner", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
    { text: "I needed a specific spec Range Rover that was not available in Zimbabwe. Executive sourced it from the UK, handled all import duties, and delivered it to my door in six weeks. Incredible service.", name: "Grace Mutasa", role: "Range Rover Vogue Owner", rating: 5, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
    { text: "The trade-in process was transparent and fair. I drove in with my old BMW, and two hours later I was behind the wheel of a brand new X5. No stress, no hidden fees, just professionalism.", name: "James Karonga", role: "BMW X5 Owner", rating: 5, avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80" },
    { text: "Our company fleet of six vehicles was sourced and delivered by Executive within a month. The corporate pricing was excellent and the after-sales support has been outstanding.", name: "Patricia Sibanda", role: "CFO, Zimnat Holdings", rating: 5, avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80" },
    { text: "What sets Executive apart is their honesty. They talked me out of one vehicle and into a better option for my needs. That level of integrity is rare in the car business.", name: "Michael Chigwedere", role: "Porsche Cayenne Owner", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
  ],

  reviews: {
    heroTitle: "Client Testimonials",
    heroSubtitle: "Hear from the drivers who trusted us with their most important automotive decisions.",
    items: [
      { text: "Executive Car Sales made buying my dream Mercedes feel effortless. The inspection was thorough and handover world-class.", name: "Tendai Moyo", role: "S-Class Owner", rating: 5 },
      { text: "Sourced my Range Rover from the UK and delivered to my door in six weeks. Incredible service from start to finish.", name: "Grace Mutasa", role: "Range Rover Owner", rating: 5 },
      { text: "The trade-in process was transparent and fair. Two hours later I was in a new X5. No stress whatsoever.", name: "James Karonga", role: "BMW X5 Owner", rating: 5 },
      { text: "Our fleet of six vehicles was sourced within a month. Corporate pricing and after-sales have been outstanding.", name: "Patricia Sibanda", role: "CFO, Zimnat", rating: 5 },
      { text: "They talked me out of one vehicle into a better option. That integrity is rare in the business.", name: "Michael Chigwedere", role: "Cayenne Owner", rating: 5 },
      { text: "Second vehicle from Executive. Consistency of service across both purchases has been remarkable.", name: "Robert Mugwagwa", role: "Repeat Client", rating: 5 },
    ],
  },

  about: {
    heroTitle: "The Executive Story",
    heroSubtitle: "Born from a passion for fine automobiles. Built on a foundation of trust.",
    story: [
      "Executive Car Sales was founded in 2015 with a singular vision: to bring a world-class automotive buying experience to Zimbabwe. In a market plagued by uncertainty, we chose transparency, quality, and client-first service as our founding principles.",
      "Today, operating from our showroom on Hendrikz Way in Harare, we have placed over 800 vehicles with discerning owners across Zimbabwe, Zambia, and Mozambique. Every vehicle in our inventory has been hand-selected, rigorously inspected, and presented to the standards our clients expect.",
      "We are not just selling cars. We are building relationships with people who understand that the vehicle you drive is a statement about who you are and what you value.",
    ],
    values: [
      { title: "Quality First", desc: "Every vehicle undergoes a 150-point inspection before earning a place in our showroom." },
      { title: "Transparent Pricing", desc: "No hidden fees. The price you see is the price you pay, with full documentation." },
      { title: "Client Relationships", desc: "Over 60 percent of our business is repeat or referral. We measure success in loyalty." },
      { title: "Global Reach", desc: "Our sourcing spans Japan, UK, South Africa, and the UAE for the world's finest vehicles." },
    ],
    team: [
      { name: "David Hendrikz", role: "Founder & CEO", bio: "15 years in automotive. David's vision for premium service drives everything we do.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
      { name: "Sarah Mutasa", role: "Sales Director", bio: "Encyclopaedic luxury market knowledge ensures every client finds their perfect match.", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80" },
      { name: "Peter Chimwanda", role: "Technical Manager", bio: "20 years as master technician. Peter leads our rigorous inspection process.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" },
      { name: "Lisa Karonga", role: "Finance Manager", bio: "Structures every deal to work for the client, partnering with top banks.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
    ],
  },

  whyChooseUs: {
    title: "Why Executive",
    points: [
      { title: "150-Point Inspection", desc: "Every vehicle is mechanically and cosmetically vetted to the highest standard." },
      { title: "Transparent Process", desc: "No hidden charges, no pressure. Just honest advice and fair pricing." },
      { title: "Global Sourcing Network", desc: "Access to premium vehicles from Japan, UK, South Africa, and the UAE." },
      { title: "After-Sales Excellence", desc: "Warranty support, service network, and priority access to new stock." },
    ],
  },

  featuredProjects: [
    { title: "Mercedes-Benz S-Class", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80", category: "Sedan" },
    { title: "Range Rover Vogue", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0571?w=800&q=80", category: "SUV" },
    { title: "Porsche Cayenne", image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80", category: "Performance" },
  ],

  careers: {
    heroTitle: "Join Our Team",
    heroSubtitle: "Share our passion for automotive excellence.",
    positions: [
      { title: "Sales Consultant", department: "Sales", location: "Harare", type: "Full-time", desc: "Help clients find their perfect vehicle in our premium showroom." },
      { title: "Vehicle Technician", department: "Technical", location: "Harare", type: "Full-time", desc: "Lead our 150-point inspection process with exacting standards." },
    ],
  },

  contact: {
    heroTitle: "Visit Our Showroom",
    heroSubtitle: "Experience the Executive difference in person.",
    branches: [
      { name: "Harare Showroom", address: "15 Hendrikz Way Corner, Second St Ext, Harare", phone: "+263 77 278 2514", email: "info@executivecarsales.co.zw" },
    ],
  },

  homeCta: {
    title: "YOUR NEXT CHAPTER STARTS HERE",
    subtitle: "Every great journey begins with the right vehicle. Visit our showroom or browse online -- your dream car is closer than you think.",
    ctaPrimary: "Browse Inventory",
    ctaSecondary: "Chat on WhatsApp",
    whatsappText: "Hello Executive Car Sales! I'm interested in viewing your available vehicles.",
    backgroundImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=85",
  },

  footer: {
    description: "Harare's premier luxury auto dealership. Curating the finest vehicles for discerning drivers since 2015.",
    copyright: "Executive Car Sales",
  },
};

export default siteData;
