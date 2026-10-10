/**
 * Industries and Target Sectors Data
 * Highlights proposed domain verticals and tailored solutions.
 */

export const industriesData = [
  {
    id: "real-estate",
    title: "Real Estate & Property Management",
    tagline: "Digitizing asset management, leasing workflows, and tenant engagement.",
    description:
      "Modernize property portfolios with cloud-based leasing systems, automated rent collection pipelines, and digital inspection workflows.",
    icon: "Building2",
    painPoints: [
      "Fragmented lease agreements scattered across offline paper binders",
      "Manual rent reminders leading to chronic collection delays",
      "Lack of centralized maintenance ticket tracking for tenants"
    ],
    solutions: [
      "Multi-property portfolio portals with automated lease expiry triggers",
      "Tenant self-service portals with integrated card & ACH billing",
      "Mobile contractor dispatch with before/after inspection photos"
    ],
    exampleUseCases: ["Commercial Lease Manager", "Residential HOA Portal", "Short-Stay Maintenance Hub"]
  },
  {
    id: "healthcare",
    title: "Healthcare & Clinical Operations",
    tagline: "Compliant patient portals, telemedicine tools, and streamlined clinic scheduling.",
    description:
      "Secure digital tools engineered with HIPAA and data protection standards to elevate patient care and reduce staff administrative burden.",
    icon: "HeartPulse",
    painPoints: [
      "Excessive patient intake desk queues and repetitive paperwork",
      "High no-show rates for specialized clinical consultations",
      "Siloed communication between doctors, clinics, and pharmacies"
    ],
    solutions: [
      "Encrypted WebRTC telehealth suites with zero-install browser video",
      "Digital intake forms with touch-screen patient e-signatures",
      "Automated appointment SMS reminders with bidirectional calendar sync"
    ],
    exampleUseCases: ["Outpatient Video Portal", "Dental Practice Scheduler", "Lab Results Delivery System"]
  },
  {
    id: "education",
    title: "Education & Learning Platforms",
    tagline: "Interactive learning management systems (LMS) and student engagement portals.",
    description:
      "Empower educational institutions and digital course creators with scalable video streaming, quiz engines, and progress dashboards.",
    icon: "GraduationCap",
    painPoints: [
      "Outdated legacy LMS interfaces causing poor student completion rates",
      "Difficulty managing live instructor cohort schedules and grading",
      "Inability to securely protect digital curriculum from unauthorized downloads"
    ],
    solutions: [
      "Modern video-first learning portals with responsive course viewers",
      "Interactive assessment builders with automated grading and badges",
      "DRM-protected digital content delivery with role-based student access"
    ],
    exampleUseCases: ["Corporate Training LMS", "Certification Exam Engine", "Tutor Marketplace Platform"]
  },
  {
    id: "retail-ecommerce",
    title: "Retail & Modern E-Commerce",
    tagline: "High-speed storefronts, omnichannel inventory sync, and conversion-optimized checkouts.",
    description:
      "Bespoke e-commerce architectures, headless checkout flows, and real-time inventory management across multiple physical and online channels.",
    icon: "ShoppingBag",
    painPoints: [
      "Slow legacy storefront page loads driving high checkout bounce rates",
      "Inventory mismatches between warehouse shelves and online stores",
      "Rigid checkout systems unable to support flexible B2B wholesale pricing"
    ],
    solutions: [
      "Headless modern web storefronts with sub-second page transitions",
      "Real-time inventory synchronization across Shopify, Amazon, and ERPs",
      "Custom wholesale portals with tiered volume discounts and invoice billing"
    ],
    exampleUseCases: ["Direct-to-Consumer Brand Store", "B2B Wholesale Ordering System", "Curated Subscription Box App"]
  },
  {
    id: "professional-services",
    title: "Professional Services & Consulting",
    tagline: "Client onboarding portals, digital document exchange, and project billing.",
    description:
      "Enable accounting, legal, and engineering consultancies to streamline client communication, NDA execution, and deliverable handoffs.",
    icon: "Briefcase",
    painPoints: [
      "Chaotic email threads for sharing confidential tax and financial documents",
      "Unclear client milestone sign-offs leading to invoice payment disputes",
      "Disjointed time-tracking across billable project associates"
    ],
    solutions: [
      "Branded secure client portals with two-factor authenticated file sharing",
      "Milestone-based project tracking with e-signature sign-off approvals",
      "Automated retainer billing with integrated payment link delivery"
    ],
    exampleUseCases: ["CPA Tax Document Vault", "Legal Intake & Retainer Portal", "Architecture Design Review Platform"]
  },
  {
    id: "saas-startups",
    title: "SaaS & Technology Startups",
    tagline: "Rapid MVP development, cloud architecture, and multi-tenant platforms built to scale.",
    description:
      "Turn product roadmaps into production-ready software. We engineer resilient MVPs that validate market demand, impress investors, and scale effortlessly.",
    icon: "Rocket",
    painPoints: [
      "Struggling to find reliable senior full-stack talent to meet launch deadlines",
      "Technical debt from rushed prototypes threatening production stability",
      "Complex billing and tenant isolation requirements delaying launch"
    ],
    solutions: [
      "Accelerated MVP development cycles delivering deployable software in weeks",
      "Production-ready multi-tenant architecture with Stripe billing out of the box",
      "Cloud infrastructure setup with automated CI/CD for continuous shipping"
    ],
    exampleUseCases: ["Vertical AI Assistant", "Fintech Payment Analytics", "B2B Workflow Automation Hub"]
  }
];
