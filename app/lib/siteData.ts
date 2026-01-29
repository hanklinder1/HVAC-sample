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
    email: string;
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
    name: "David's Heating & Air Conditioning",
    address: {
      street: "1110 Frontage Rd",
      cityStateZip: "Seneca, SC 29672",
      full: "1110 Frontage Rd, Seneca, SC 29672",
    },
    phone: {
      display: "+1 (864) 882-0479",
      tel: "+18648820479",
    },
    email: "info@davidshvac.com", // TODO: Replace with actual business email
    hours: {
      label: "Hours",
      detail: "Mon–Fri 9:00 AM – 5:00 PM",
      emergencyNote: "Emergency service available.",
    },
    serviceAreaSummary: "Serving Seneca and surrounding Upstate areas.",
    towns: ["Seneca"],
    claims: {
      sameDayService: "Same-day service available",
      licensedInsured: "Licensed & Insured",
      localCompany: "Local Upstate company",
    },
  },
  ui: {
    topBarText: "Going beyond just sales and service...",
    primaryCtas: {
      callNow: "Call Now",
      requestService: "Request Service",
    },
    nav: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    footerDisclaimer: "Demo website for presentation purposes.",
    reviewsDisclaimer: "Sample reviews for layout.",
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
    title: "David's Heating & Air Conditioning | Seneca, SC",
    description:
      "Heating & air service in Seneca and surrounding Upstate areas. Repairs, maintenance, and installations.",
  },
  hero: {
    headline: "Going beyond just sales and service...",
    subhead: "HVAC repairs, maintenance, and installations in Seneca and the Upstate.",
    quickPoints: [],
  },
  pages: {
    services: {
      heading: "Services",
      subhead: "Repairs, installations, and maintenance for air conditioning, heating, heat pumps, and more.",
    },
    serviceAreas: {
      heading: "Service areas",
      subhead: "Serving Seneca and surrounding Upstate areas.",
    },
  },
  home: {
    sections: {
      servicesHeading: "Services",
      servicesSubhead: "Repairs, installations, and maintenance for your HVAC system.",
      whyChooseHeading: "Why choose David's",
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
    trustBadges: [],
    whyChooseCards: [
      {
        title: "Fast response times",
        description: "We work to get you scheduled quickly — especially when it’s hot or cold out.",
      },
      {
        title: "Honest recommendations",
        description: "We'll tell you what you need, not what we want to sell.",
      },
      {
        title: "Reasonable pricing",
        description: "Straightforward pricing and work that’s worth paying for.",
      },
      {
        title: "Reliable service",
        description: "On-time, professional, and thorough.",
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
      name: "Beth Carlock",
      when: "6 months ago",
      quote:
        "Who comes out at 10:00 at night right before the 4th of July weekend? David's Heating and Air does. The problem was quickly identified and the offending part replaced for a fraction of what I was expecting. They are truly the best out there — I could not recommend them more highly!",
    },
    {
      name: "Gregory Davis",
      when: "a year ago",
      quote:
        "Chad is better than just 'good'. Blower motor on my air handler went bad. He came right after I called, diagnosed the issue almost immediately, and installed it the next day. The price was reasonable and the service was exemplary.",
    },
    {
      name: "Four Seasons Pest Solutions",
      when: "2 months ago",
      quote: "Always on time. Priced right. Techs know their stuff.",
    },
  ],
  about: {
    heading: "About David's Heating & Air Conditioning",
    storyParagraphs: [
      "David's Heating & Air Conditioning serves Seneca and surrounding Upstate areas. We focus on honest recommendations, quality work, and fair pricing.",
      "Whether it’s a no-cool call in the summer or a heat issue on a cold morning, our goal is simple: show up, diagnose the problem, and give you honest options you can feel good about.",
    ],
    meetTech: {
      heading: "",
      name: "",
      paragraphs: [],
      note: "",
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
        src: "/images/brand-photo.png",
        alt: "David's Heating & Air Conditioning branded graphic with an HVAC unit",
      },
      tech: {
        src: "/images/hvac-tech.jpg",
        alt: "HVAC technician checking system gauges",
      },
      family: {
        src: "/images/brand-photo.png",
        alt: "David's Heating & Air Conditioning branded graphic with an HVAC unit",
      },
      van: {
        src: "/images/service-van.jpg",
        alt: "Service vehicle photo placeholder",
      },
      gallery: [],
    },
    video: {
      heroSrc: "/video/hero.mp4",
    },
  },
  map: {
    title: "Map to David's Heating & Air Conditioning",
    embedSrc:
      "https://www.google.com/maps?q=1110%20Frontage%20Rd%2C%20Seneca%2C%20SC%2029672&output=embed",
  },
};

