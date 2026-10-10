/**
 * Portfolio Projects Data
 * Adheres strictly to the required project schema.
 */

export const projectsData = [
  {
    id: "propflow-crm",
    slug: "propflow-real-estate-crm",
    title: "PropFlow — Commercial Real Estate Asset Management Platform",
    category: "SaaS Platform",
    summary:
      "A multi-tenant commercial real estate platform featuring automated lease tracking, financial reporting, and interactive property portfolios.",
    description:
      "PropFlow was engineered to unify distributed property records, lease expirations, maintenance tickets, and investor reporting into a singular, high-performance web dashboard.",
    problem:
      "The client relied on fragmented spreadsheets and disconnected accounting tools to track over 150 commercial units, resulting in missed lease renewal windows, invoice reconciliation delays, and inaccurate investor reports.",
    solution:
      "We architected a responsive multi-tenant SaaS application with role-based access control (RBAC), automated lease expiry notifications, real-time rent collection tracking, and dynamic financial charts.",
    features: [
      "Dynamic interactive property map with occupancy indicators",
      "Automated lease expiration alerts and renewal workflow tracking",
      "Tenant portal for maintenance ticket creation and invoice review",
      "Executive financial reports with exportable PDF and CSV balance sheets",
      "Role-based permission hierarchy for property managers, accountants, and tenants"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "Prisma", "Docker"],
    role: "Full-Stack Architecture, UI/UX Design & Cloud Deployment",
    clientIndustry: "Real Estate & Asset Management",
    timeline: "14 Weeks",
    status: "Production Ready",
    featured: true,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    ],
    liveUrl: "https://demo-propflow.nexoratech.io",
    outcomes: [
      "Eliminated spreadsheet duplication across 4 regional asset offices",
      "Reduced monthly lease reconciliation turnaround time from 6 days to under 4 hours",
      "Achieved 99.95% application uptime across 12 consecutive months"
    ]
  },
  {
    id: "medivault-telehealth",
    slug: "medivault-telehealth-portal",
    title: "MediVault — Secure Patient Telehealth & Consultation Suite",
    category: "Web Development",
    summary:
      "A HIPAA-conscious patient appointment scheduling, WebRTC video consultation, and digital health records portal for medical practices.",
    description:
      "A clinical web application designed for outpatient medical practices to conduct high-definition telehealth consultations, manage digital intake questionnaires, and review prescription history.",
    problem:
      "The clinic experienced high patient no-show rates (over 28%) and lacked a unified video conferencing portal with encrypted patient note storage, resulting in physician administrative overload.",
    solution:
      "We engineered a modern clinical portal featuring automated SMS/email reminders, browser-based peer-to-peer WebRTC video rooms, digital intake signature capture, and encrypted medical record storage.",
    features: [
      "In-browser encrypted WebRTC video calls with zero software download needed",
      "Real-time calendar booking synchronized with physician Google/Outlook calendars",
      "Digital intake form builder with e-signature and photo upload",
      "Audit-logged clinical notes viewer with end-to-end data encryption",
      "Automated automated appointment reminders via Twilio integration"
    ],
    technologies: ["React", "WebRTC", "Express", "MongoDB", "Tailwind CSS", "Twilio API"],
    role: "Frontend Development, WebRTC Integration & Security Architecture",
    clientIndustry: "Healthcare & Clinical Services",
    timeline: "12 Weeks",
    status: "Production Ready",
    featured: true,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80"
    ],
    liveUrl: "https://demo-medivault.nexoratech.io",
    outcomes: [
      "Decreased appointment no-show rate from 28% to under 9% within 60 days",
      "Facilitated over 12,000 completed remote patient consultations in year one",
      "Zero reported data transmission anomalies during third-party HIPAA audit"
    ]
  },
  {
    id: "synapse-ai-agent",
    slug: "synapse-ai-workflow-assistant",
    title: "SynapseAI — Autonomous Customer Service & Ticket Dispatch Agent",
    category: "AI & Automation",
    summary:
      "An intelligent RAG-driven AI support agent integrating with Zendesk and Slack to resolve customer inquiries and auto-triage engineering tickets.",
    description:
      "SynapseAI combines large language model embeddings with enterprise knowledge bases to deliver accurate, citation-backed answers to customer questions while automating internal escalation pathways.",
    problem:
      "A fast-growing SaaS provider received 800+ repetitive support tickets weekly, causing response times to balloon to 18 hours and exhausting the tier-1 support staff.",
    solution:
      "We constructed a Retrieval-Augmented Generation (RAG) agent that indexes company documentation, answers inbound chat queries with 94% accuracy, and creates structured Jira tickets with diagnostic metadata when escalation is necessary.",
    features: [
      "RAG embedding engine syncing with Notion, Google Docs, and Markdown repositories",
      "Confidence scoring mechanism with safe human-handoff triggers",
      "Omnichannel support deployment across web chat widget, Slack, and email webhook",
      "Telemetry dashboard tracking token consumption, sentiment, and deflection metrics",
      "PII redaction filter preventing sensitive user credentials from passing to third-party LLMs"
    ],
    technologies: ["Python", "LangChain", "OpenAI API", "Pinecone", "FastAPI", "React"],
    role: "AI Architecture, RAG Pipeline & Full-Stack Integration",
    clientIndustry: "SaaS & Developer Tools",
    timeline: "8 Weeks",
    status: "Production Ready",
    featured: true,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
    ],
    liveUrl: "https://demo-synapse.nexoratech.io",
    outcomes: [
      "Deflected 63% of recurring tier-1 support queries without human intervention",
      "Reduced median first-response time from 18 hours down to 42 seconds",
      "Maintained a 4.8 / 5.0 customer satisfaction score over 20,000 conversations"
    ]
  },
  {
    id: "swiftlog-field-app",
    slug: "swiftlog-field-operations-app",
    title: "SwiftLog — Offline-First Field Service & Inspection Mobile App",
    category: "Mobile App",
    summary:
      "A cross-platform mobile application for utility field inspectors with offline-first synchronization, GPS tracking, and instant PDF report generation.",
    description:
      "Designed for utility engineers and field inspectors operating in remote areas with zero cell connectivity. The app caches inspection forms locally and syncs automatically once back online.",
    problem:
      "Field inspectors filled paper logs during remote site visits, requiring manual manual re-entry into back-office computers, resulting in 4-day delays before clients received compliance certificates.",
    solution:
      "We built a robust React Native cross-platform application utilizing SQLite for offline storage, background conflict resolution sync, camera photo annotation, and dynamic client certificate generation.",
    features: [
      "100% offline functionality with automated background queue synchronization",
      "Photo capture with markup tools (arrows, text highlights, timestamps)",
      "Digital stylus signatures for on-site client sign-offs",
      "One-tap on-device PDF generation and instant email delivery upon reconnection",
      "Geofenced site check-in and check-out tracking"
    ],
    technologies: ["React Native", "SQLite", "Node.js", "AWS S3", "TypeScript", "Tailwind CSS"],
    role: "Mobile App Development, Offline Sync Architecture & API Design",
    clientIndustry: "Field Services & Infrastructure",
    timeline: "10 Weeks",
    status: "Production Ready",
    featured: false,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80"
    ],
    liveUrl: "https://demo-swiftlog.nexoratech.io",
    outcomes: [
      "Accelerated inspection certificate delivery from 4 business days to instant on-site issuance",
      "Eliminated 100% of redundant office data re-entry labor",
      "10,000+ inspection audits synced across Android and iOS devices without data loss"
    ]
  },
  {
    id: "zenith-cloud-migration",
    slug: "zenith-microservices-cloud-infrastructure",
    title: "Zenith — Containerized Microservices & Automated CI/CD Platform",
    category: "Cloud & DevOps",
    summary:
      "Containerization, automated blue/green deployment pipelines, and multi-region AWS cloud infrastructure setup for high-traffic financial services.",
    description:
      "We spearheaded the cloud infrastructure modernization of a fintech platform, migrating a monolithic application into isolated Docker containers orchestrated with automated GitHub Actions and AWS ECS.",
    problem:
      "The client experienced recurring production outages during monthly server updates, high AWS hosting bills due to unoptimized instances, and a 3-hour manual deployment checklist.",
    solution:
      "We designed an automated Infrastructure-as-Code (Terraform) blueprint provisioning AWS ECS Fargate, Cloudflare edge caching, blue/green zero-downtime deployment pipelines, and centralized Prometheus/Grafana monitoring.",
    features: [
      "Zero-downtime rolling deployments using AWS ECS and GitHub Actions",
      "Infrastructure-as-Code provisioned entirely with declarative Terraform scripts",
      "Automated automated staging environments for every pull request branch",
      "Centralized observability dashboards with real-time Slack incident alerts",
      "DDoS protection, rate limiting, and SSL automation via Cloudflare"
    ],
    technologies: ["Docker", "AWS ECS", "Terraform", "GitHub Actions", "Prometheus", "Nginx"],
    role: "DevOps Architecture, Cloud Infrastructure & Security Hardening",
    clientIndustry: "Financial Services & FinTech",
    timeline: "9 Weeks",
    status: "Production Ready",
    featured: false,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
    ],
    liveUrl: "https://demo-zenith.nexoratech.io",
    outcomes: [
      "Reduced monthly cloud infrastructure operating expenditure by 38%",
      "Cut deployment cycle time from 3 hours of manual steps to a 7-minute automated pipeline",
      "Delivered 100% zero-downtime deployment capability for all production releases"
    ]
  },
  {
    id: "aurora-design-system",
    slug: "aurora-enterprise-design-system",
    title: "Aurora — Cross-Platform Enterprise UI Design System & Component Kit",
    category: "Web Development",
    summary:
      "A unified multi-brand design system containing 60+ accessible UI components, interactive Figma token guidelines, and responsive React modules.",
    description:
      "Created for an enterprise brand managing three distinct digital customer products. Aurora provides cohesive typography, color variables, spacing tokens, and thoroughly tested accessibility components.",
    problem:
      "Three separate product engineering teams used divergent styles, leading to disjointed user experiences, inconsistent brand presentation, and duplicated engineering effort on standard UI widgets.",
    solution:
      "We created an atomic design system bridging Figma tokens and React Tailwind components, complete with interactive Storybook documentation, keyboard navigation testing, and dark mode toggles.",
    features: [
      "60+ production-ready React UI components with strict TypeScript/JSX prop validation",
      "Figma design token synchronization supporting light, dark, and high-contrast modes",
      "WCAG 2.1 AA certified accessibility with screen reader and keyboard focus support",
      "Comprehensive Storybook documentation site with interactive prop controls",
      "Micro-interaction animation patterns with reduced-motion support"
    ],
    technologies: ["React", "Tailwind CSS", "Figma", "Storybook", "Accessibility / WCAG"],
    role: "UI/UX Architecture, Design System Engineering & Frontend Development",
    clientIndustry: "Enterprise Software",
    timeline: "11 Weeks",
    status: "Production Ready",
    featured: true,
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
    ],
    liveUrl: "https://demo-aurora.nexoratech.io",
    outcomes: [
      "Shortened new feature frontend turnaround time by an estimated 45%",
      "Achieved 100% WCAG 2.1 AA accessibility score across all component audits",
      "Unified 3 disparate customer platforms into a cohesive brand identity"
    ]
  }
];

export const projectCategories = [
  "All",
  "Web Development",
  "Mobile App",
  "AI & Automation",
  "SaaS Platform",
  "Cloud & DevOps"
];
