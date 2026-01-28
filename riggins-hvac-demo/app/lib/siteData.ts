export type SiteNavItem = { label: string; href: string };

export type SiteService = {
  title: string;
  description: string;
  iconKey:
    | "snowflake"
    | "flame"
    | "heatPump"
    | "wrench"
    | "droplet"
    | "duct"
    | "air";
};

export type SiteReview = {
  name: string;
  when: string;
  quote: string;
};

export type SiteData = {
  business: {
    name: string;
    address: {
      street: string;
      cityStateZip: string;
      full: string;
    };
    phone: {
      display: string;
      tel: string;
    };
    hours: {
      label: string;
      detail: string;
      emergencyNote: string;
    };
    serviceAreaSummary: string;
    towns: string[];
    claims: {
      licensedInsured: string;
      sameDayService: string;
      localCompany: string;
    };
  };
  ui: {
    topBarText: string;
    primaryCtas: {
      callNow: string;
      requestService: string;
    };
    nav: SiteNavItem[];
    footerDisclaimer: string;
    reviewsDisclaimer: string;
    labels: {
      viewAllServices: string;
      viewServiceAreas: string;
      townsWeServeHeading: string;
      townsWeServeSubhead: string;
      surroundingAreasLabel: string;
      officeLocationLabel: string;
      callForFastestService: string;
      viewServices: string;
      sendAnotherRequest: string;
      sending: string;
      consentText: string;
      ourApproachHeading: string;
      whatToExpectHeading: string;
      whatToExpectBullets: string[];
    };
  };
  seo: {
    title: string;
    description: string;
  };
  hero: {
    headline: string;
    subhead: string;
    quickPoints: string[];
  };
  pages: {
    services: { heading: string; subhead: string };
    serviceAreas: { heading: string; subhead: string };
  };
  home: {
    sections: {
      servicesHeading: string;
      servicesSubhead: string;
      whyChooseHeading: string;
      whyChooseSubhead: string;
      maintenanceHeading: string;
      maintenanceSubhead: string;
      maintenanceBullets: string[];
      maintenanceCardTitle: string;
      maintenanceCardBody: string;
      maintenanceCardNote: string;
      financingHeading: string;
      financingSubhead: string;
      testimonialsHeading: string;
      serviceAreaHeading: string;
      serviceAreaCardTitle: string;
      finalCtaHeading: string;
      finalCtaSubhead: string;
    };
    trustBadges: string[];
    whyChooseCards: { title: string; description: string }[];
  };
  services: SiteService[];
  testimonials: SiteReview[];
  about: {
    heading: string;
    storyParagraphs: string[];
    meetTech: {
      heading: string;
      name: string;
      paragraphs: string[];
      note: string;
    };
  };
  contact: {
    heading: string;
    subhead: string;
    form: {
      nameLabel: string;
      phoneLabel: string;
      emailLabel: string;
      serviceTypeLabel: string;
      serviceTypes: string[];
      messageLabel: string;
      submitLabel: string;
      successHeading: string;
      successBody: string;
    };
  };
  media: {
    images: {
      hero: { src: string; alt: string };
      tech: { src: string; alt: string };
      family: { src: string; alt: string };
      van: { src: string; alt: string };
      gallery: { src: string; alt: string }[];
    };
    video: {
      heroSrc: string;
    };
  };
  map: {
    embedSrc: string;
    title: string;
  };
};

export const siteData: SiteData = {
  business: {
    name: "Riggins Heating & Air Conditioning",
    address: {
      street: "154 Exchange St",
      cityStateZip: "Pendleton, SC 29670",
      full: "154 Exchange St, Pendleton, SC 29670",
    },
    phone: {
      display: "+1 (864) 646-2681",
      tel: "+18646462681",
    },
    hours: {
      label: "Hours",
      detail: "Mon–Fri 8:00 AM – 5:00 PM",
      emergencyNote: "Emergency service available.",
    },
    serviceAreaSummary:
      "Proudly serving Pendleton, Anderson, Clemson, Central, Seneca, Easley, and surrounding Upstate areas.",
    towns: ["Pendleton", "Anderson", "Clemson", "Central", "Seneca", "Easley"],
    claims: {
      sameDayService: "Same-day service available",
      licensedInsured: "Licensed & Insured",
      localCompany: "Local Upstate company",
    },
  },
  ui: {
    topBarText: "Same-Day Service Available • Licensed & Insured • Reliable & Knowledgeable",
    primaryCtas: {
      callNow: "Call Now",
      requestService: "Request Service",
    },
    nav: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Service Areas", href: "/service-areas" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    footerDisclaimer: "Demo website for presentation purposes.",
    reviewsDisclaimer: "Reviews shown from public customer feedback. Demo layout.",
    labels: {
      viewAllServices: "View all services",
      viewServiceAreas: "View service areas",
      townsWeServeHeading: "Towns we serve",
      townsWeServeSubhead: "We regularly serve these areas and nearby communities throughout the Upstate.",
      surroundingAreasLabel: "Surrounding Upstate areas",
      officeLocationLabel: "Office location",
      callForFastestService: "Call for fastest service",
      viewServices: "View services",
      sendAnotherRequest: "Send another request",
      sending: "Sending...",
      consentText: "By sending this request, you agree we can contact you by phone or email.",
      ourApproachHeading: "Our approach",
      whatToExpectHeading: "What to expect",
      whatToExpectBullets: [
        "Clear communication and straightforward options",
        "Work that’s done carefully and kept clean",
        "Recommendations focused on reliability and comfort",
      ],
    },
  },
  seo: {
    title: "Riggins Heating & Air Conditioning | Pendleton, SC",
    description:
      "Heating & air service in Pendleton and the Upstate. Repairs, maintenance, and installations with fast response times and straightforward pricing.",
  },
  hero: {
    headline: "Fast, reliable heating & air service in Pendleton and the Upstate.",
    subhead:
      "Maintenance, repairs, and installations you can trust — with fast response times and honest pricing.",
    quickPoints: ["Same-day availability", "Straightforward recommendations", "Quality workmanship"],
  },
  pages: {
    services: {
      heading: "Services",
      subhead:
        "Repairs, installations, and maintenance for air conditioning, heating, heat pumps, ductwork, drains, and indoor air quality.",
    },
    serviceAreas: {
      heading: "Service areas",
      subhead:
        "Based in Pendleton and serving nearby towns across the Upstate with responsive HVAC service.",
    },
  },
  home: {
    sections: {
      servicesHeading: "HVAC services we handle every week",
      servicesSubhead:
        "Repairs, replacements, and preventative work for comfort and reliability across the Upstate.",
      whyChooseHeading: "Why choose Riggins",
      whyChooseSubhead:
        "Straightforward service from a local Upstate company — focused on getting you comfortable again.",
      maintenanceHeading: "Prevent breakdowns with seasonal maintenance",
      maintenanceSubhead:
        "A simple tune-up plan that keeps your system running efficiently and helps you avoid surprise repairs.",
      maintenanceBullets: ["Seasonal tune-ups", "Priority scheduling", "Fewer breakdowns"],
      maintenanceCardTitle: "A simple way to stay ahead of problems",
      maintenanceCardBody:
        "Seasonal tune-ups help reduce wear, improve performance, and catch issues early — so you’re less likely to deal with breakdowns when you need comfort most.",
      maintenanceCardNote: "Note: pricing and plan details are editable in the demo content.",
      financingHeading: "Need a new system?",
      financingSubhead: "Ask about payment options for new systems.",
      testimonialsHeading: "What customers say",
      serviceAreaHeading: "Serving Pendleton and nearby towns",
      serviceAreaCardTitle: "Based in Pendleton",
      finalCtaHeading: "Need service today?",
      finalCtaSubhead:
        "Call now for quick scheduling. If it’s urgent, ask about emergency service.",
    },
    trustBadges: [
      "Licensed & insured",
      "Same-day / fast response",
      "Reasonable pricing",
      "Reliable & knowledgeable",
      "Local Upstate company",
    ],
    whyChooseCards: [
      {
        title: "Fast response times",
        description: "We work to get you scheduled quickly — especially when it’s hot or cold out.",
      },
      {
        title: "Honest recommendations",
        description: "Clear explanations and practical options, without pressure.",
      },
      {
        title: "Reasonable pricing",
        description: "Straightforward pricing and work that’s worth paying for.",
      },
      {
        title: "Reliable workmanship",
        description: "Careful work, clean job sites, and repairs you can count on.",
      },
    ],
  },
  services: [
    {
      title: "Air Conditioning Repair & Installation",
      description:
        "Troubleshooting, repairs, and replacement installs for reliable cooling and comfort.",
      iconKey: "snowflake",
    },
    {
      title: "Heating Repair & Installation",
      description:
        "Furnace and heating system repairs, replacements, and safety-focused checks.",
      iconKey: "flame",
    },
    {
      title: "Heat Pumps",
      description:
        "Service, repairs, and new heat pump installs for efficient year-round heating and cooling.",
      iconKey: "heatPump",
    },
    {
      title: "Preventative Maintenance / Tune-Ups",
      description:
        "Seasonal tune-ups that help improve efficiency, reduce wear, and catch issues early.",
      iconKey: "wrench",
    },
    {
      title: "Drain Line / Clogged Drain Repair",
      description:
        "Fast clearing and repair of clogged condensate drains to prevent leaks and shutdowns.",
      iconKey: "droplet",
    },
    {
      title: "Ductwork",
      description:
        "Repairs and improvements that help airflow, comfort, and system performance.",
      iconKey: "duct",
    },
    {
      title: "Indoor Air Quality",
      description:
        "Filters, humidity control, and air quality solutions to help your home feel better.",
      iconKey: "air",
    },
  ],
  testimonials: [
    {
      name: "F Mellon",
      when: "7 months ago",
      quote:
        "James came out same day for overdue HVAC maintenance. Reasonable price, professional, honest, and courteous. Hard to find service like this.",
    },
    {
      name: "Tyler Montgomery",
      when: "7 months ago",
      quote:
        "James came out incredibly fast for a clogged drain and had our system back online within an hour. Been using Riggins for two years — reliable and knowledgeable.",
    },
  ],
  about: {
    heading: "Local HVAC service you can count on",
    storyParagraphs: [
      "Riggins Heating & Air Conditioning is based in Pendleton and serves homeowners across the Upstate. We focus on responsive service, clear communication, and repairs that last.",
      "Whether it’s a no-cool call in the summer or a heat issue on a cold morning, our goal is simple: show up, diagnose the problem, and give you honest options you can feel good about.",
    ],
    meetTech: {
      heading: "Meet James (optional)",
      name: "James",
      paragraphs: [
        "James is known for quick response times and straightforward recommendations. Customers appreciate the professionalism, courteous service, and fair pricing.",
        "This section is editable — you can add credentials, years of experience, and a short personal note.",
      ],
      note: "Demo note: names and details are editable in the site data file.",
    },
  },
  contact: {
    heading: "Request service",
    subhead:
      "Tell us what’s going on and we’ll follow up. If you need help now, calling is the fastest option.",
    form: {
      nameLabel: "Name",
      phoneLabel: "Phone",
      emailLabel: "Email",
      serviceTypeLabel: "Service type",
      serviceTypes: [
        "Air Conditioning",
        "Heating",
        "Heat Pump",
        "Maintenance / Tune-Up",
        "Drain Line / Clogged Drain",
        "Ductwork",
        "Indoor Air Quality",
        "Not sure",
      ],
      messageLabel: "Message",
      submitLabel: "Send request",
      successHeading: "Request sent",
      successBody:
        "Thanks — we received your message. If it’s urgent, please call and we’ll do our best to help quickly.",
    },
  },
  media: {
    images: {
      hero: {
        src: "/images/hero-hvac.jpg",
        alt: "Outdoor residential HVAC units beside a home",
      },
      tech: {
        src: "/images/hvac-tech.jpg",
        alt: "HVAC technician checking system gauges",
      },
      family: {
        src: "/images/happy-family.jpg",
        alt: "Home comfort photo placeholder",
      },
      van: {
        src: "/images/service-van.jpg",
        alt: "Service vehicle photo placeholder",
      },
      gallery: [
        { src: "/images/hvac-tech.jpg", alt: "Technician working on an HVAC system" },
        { src: "/images/service-van.jpg", alt: "Service-ready equipment and vehicle placeholder" },
        { src: "/images/happy-family.jpg", alt: "Comfortable home placeholder" },
      ],
    },
    video: {
      heroSrc: "/video/hero.mp4",
    },
  },
  map: {
    title: "Map to Riggins Heating & Air Conditioning",
    embedSrc:
      "https://www.google.com/maps?q=154%20Exchange%20St%2C%20Pendleton%2C%20SC%2029670&output=embed",
  },
};

