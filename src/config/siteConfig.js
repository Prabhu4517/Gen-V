/**
 * GEN V SOLUTIONS — Centralized SEO, Social & Site Configuration
 * Single source of truth for site metadata, canonical domain, social sharing, and contact details.
 */

export const siteConfig = {
  // Brand & Legal Identity
  companyName: "GEN V SOLUTIONS",
  legalName: "GEN V SOLUTIONS Pvt. Ltd.",
  shortName: "GEN V",
  tagline: "IT Software Development & Enterprise Technology Solutions",
  description:
    "GEN V SOLUTIONS builds custom software, web and mobile applications, AI automation, SaaS platforms, API integrations, and cloud solutions for businesses.",
  
  // Production URL (never use localhost in production metadata)
  siteUrl: import.meta.env.VITE_SITE_URL || "https://genv.tech",
  
  // Locale & Language
  locale: "en_US",
  language: "en",
  
  // Brand Assets
  logoUrl: "/logoMain.png",
  faviconUrl: "/favicon.png",
  defaultOgImage: "/og-image.png",
  ogImageWidth: 1200,
  ogImageHeight: 630,

  // Business Contact (Verified Project Data)
  contact: {
    email: "contact@genv.tech",
    salesEmail: "sales@genv.tech",
    supportEmail: "support@genv.tech",
    phone: "+1 (555) 389-9210",
    whatsapp: "+15553899210",
    address: {
      street: "100 Innovation Boulevard, Suite 400",
      city: "San Francisco",
      state: "CA",
      postalCode: "94105",
      country: "US",
      display: "San Francisco, CA & Global Delivery"
    },
    workingHours: "Mon - Fri: 9:00 AM - 6:00 PM (PST)",
    supportAvailability: "24/7 SLA Support for Enterprise Retainers"
  },

  // Social Profile URLs
  socials: {
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    github: "https://github.com",
    youtube: "https://youtube.com",
    instagram: "https://instagram.com"
  },

  // Canonical Routes Metadata Catalog
  routes: {
    home: {
      path: "/",
      title: "GEN V SOLUTIONS | IT Software Development & Technology Solutions",
      description:
        "GEN V SOLUTIONS builds custom software, web and mobile applications, AI automation, SaaS platforms, API integrations, and cloud solutions for businesses."
    },
    services: {
      path: "/services",
      title: "Software Development Services | GEN V SOLUTIONS",
      description:
        "Explore custom software development, web applications, mobile apps, AI automation, backend APIs, SaaS solutions, and cloud deployment services."
    },
    portfolio: {
      path: "/portfolio",
      title: "Our Projects & Software Portfolio | GEN V SOLUTIONS",
      description:
        "Explore software projects, business applications, digital products, and technology solutions developed by GEN V SOLUTIONS."
    },
    about: {
      path: "/about",
      title: "About GEN V SOLUTIONS | Technology Partner for Businesses",
      description:
        "Learn about GEN V SOLUTIONS, our software engineering capabilities, development process, and approach to building reliable digital products."
    },
    process: {
      path: "/process",
      title: "Engineering Process & Delivery Lifecycle | GEN V SOLUTIONS",
      description:
        "Understand our disciplined 5-stage software engineering lifecycle, agile sprint delivery, CI/CD pipeline automation, and code ownership guarantees."
    },
    industries: {
      path: "/industries",
      title: "Industry Verticals & Sector Specializations | GEN V SOLUTIONS",
      description:
        "Enterprise technology solutions tailored for FinTech, Healthcare, Logistics, CleanTech, E-Commerce, and SaaS organizations."
    },
    insights: {
      path: "/insights",
      title: "Engineering Insights & Technology Articles | GEN V SOLUTIONS",
      description:
        "Deep dives into cloud architecture, AI automation, full-stack performance profiling, DevOps security, and modern web engineering."
    },
    contact: {
      path: "/contact",
      title: "Contact GEN V SOLUTIONS | Discuss Your Project",
      description:
        "Contact GEN V SOLUTIONS to discuss your software development requirements, digital product ideas, integrations, and technology projects."
    },
    privacyPolicy: {
      path: "/privacy-policy",
      title: "Privacy Policy | GEN V SOLUTIONS",
      description:
        "Understand how GEN V SOLUTIONS collects, protects, and handles personal data and client confidential information."
    },
    termsOfService: {
      path: "/terms-of-service",
      title: "Terms of Service | GEN V SOLUTIONS",
      description:
        "Terms and conditions governing consulting agreements, software engineering retainers, intellectual property ownership, and warranties."
    }
  }
};
