/**
 * Service Categories and Details
 * Configurable schema for all technical service offerings.
 */

export const servicesData = [
  {
    id: "web-development",
    slug: "web-development",
    title: "Web & Custom Software Development",
    shortTitle: "Web & Software",
    tagline: "Scalable, high-performance web applications and digital platforms engineered for growth.",
    description:
      "From bespoke single-page web applications to enterprise-grade management portals, we engineer reliable, maintainable, and high-velocity web solutions adhering to modern web architecture standards.",
    icon: "Code2",
    badge: "Core Service",
    accentColor: "from-blue-500 to-cyan-500",
    features: [
      "Custom Web Applications & SPA/SSR Architecture",
      "Interactive Dashboards & Admin Portals",
      "High-Conversion Enterprise Websites & Landing Portals",
      "Custom Workflow & Operations Management Tools",
      "CRM, ERP, and LMS System Development",
      "Full-Stack Frontend & Backend Engineering"
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    deliverables: [
      "Production-ready, documented source code repository",
      "Responsive UI tested across all major devices and browsers",
      "Component library with atomic design principles",
      "CI/CD deployment setup with automated build checks"
    ],
    useCases: [
      "B2B service businesses scaling client onboarding portals",
      "E-commerce brands needing specialized product configurators",
      "Enterprises replacing disconnected spreadsheets with custom workflow tools"
    ]
  },
  {
    id: "mobile-app-development",
    slug: "mobile-app-development",
    title: "Mobile Application Development",
    shortTitle: "Mobile Apps",
    tagline: "Native and cross-platform mobile apps delivering smooth user experiences on iOS & Android.",
    description:
      "We design and build intuitive mobile applications that captivate users, streamline operations, and integrate seamlessly with enterprise backend ecosystems.",
    icon: "Smartphone",
    badge: "Cross-Platform",
    accentColor: "from-indigo-500 to-purple-500",
    features: [
      "Cross-Platform iOS & Android Apps (React Native / Flutter)",
      "Native Module Integrations & Hardware APIs",
      "Mobile Payment Gateways & In-App Purchases",
      "Push Notifications, Geolocation & Offline-First Sync",
      "App Store & Google Play Store Submission Management",
      "Ongoing Mobile Maintenance & OS Update Compatibility"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "GraphQL"],
    deliverables: [
      "Tested iOS and Android application binaries (IPA/APK/AAB)",
      "App Store and Google Play assets and metadata guide",
      "Push notification server integration",
      "Crash reporting and telemetry integration"
    ],
    useCases: [
      "On-demand service dispatch and field technician tracking",
      "Customer loyalty, ordering, and self-service mobile portals",
      "Internal workforce communication and timesheet tracking"
    ]
  },
  {
    id: "ai-automation",
    slug: "ai-automation",
    title: "AI Solutions & Workflow Automation",
    shortTitle: "AI & Automation",
    tagline: "Supercharge your business operations with intelligent LLM integrations, voice agents, and process bots.",
    description:
      "Harness practical, enterprise-grade artificial intelligence. We build custom retrieval-augmented generation (RAG) agents, conversational assistants, and automated data pipelines that eliminate repetitive friction.",
    icon: "Bot",
    badge: "Next-Gen Tech",
    accentColor: "from-violet-500 to-fuchsia-500",
    features: [
      "Custom AI Chatbots & Knowledge Base RAG Systems",
      "LLM Application Engineering (OpenAI, Claude, Llama)",
      "Automated Voice Agents & Interactive Voice Response (IVR)",
      "Omnichannel Messaging Automation (WhatsApp, Slack, Email)",
      "Intelligent Document Processing & Data Extraction",
      "Autonomous Multi-Step Workflow Integrations"
    ],
    technologies: ["Python", "LangChain", "OpenAI API", "Pinecone", "FastAPI", "n8n / Celery"],
    deliverables: [
      "Domain-specific RAG embedding pipeline",
      "Custom chatbot widget ready for website or portal embed",
      "Admin telemetry dashboard monitoring prompt token costs",
      "Data privacy sanitization layer preventing PII leakage"
    ],
    useCases: [
      "24/7 customer support triage resolving 60%+ common inquiries",
      "Legal and compliance document parsing and summarization",
      "Automated lead qualification and calendar booking via conversational AI"
    ]
  },
  {
    id: "backend-api-development",
    slug: "backend-api-development",
    title: "Backend Engineering & API Architecture",
    shortTitle: "Backend & APIs",
    tagline: "Robust, resilient server architectures and secure REST/GraphQL API systems built for high throughput.",
    description:
      "The backbone of your digital infrastructure. We design microservices and modular backends featuring robust authentication, data encryption, and sub-millisecond database queries.",
    icon: "Server",
    badge: "High Performance",
    accentColor: "from-emerald-500 to-teal-500",
    features: [
      "High-Throughput RESTful & GraphQL API Development",
      "Relational & NoSQL Database Architecture & Optimization",
      "JWT, OAuth2, and Role-Based Access Control (RBAC)",
      "Secure Payment Gateway Integrations (Stripe, LemonSqueezy)",
      "Event-Driven Architecture & Message Queues (RabbitMQ, Kafka)",
      "Third-Party API Integration & Webhook Ingestion"
    ],
    technologies: ["Node.js", "Express", "Go", "Python", "PostgreSQL", "Redis", "Docker"],
    deliverables: [
      "Comprehensive OpenAPI/Swagger interactive documentation",
      "Database schema migration scripts and seed datasets",
      "Centralized logging, error monitoring, and rate limiting",
      "Automated unit and integration test suites"
    ],
    useCases: [
      "Unifying siloed legacy databases into a clean modern API",
      "Fintech transactions requiring strict ACID compliance and audit logging",
      "Real-time collaborative tools requiring WebSocket event streaming"
    ]
  },
  {
    id: "saas-development",
    slug: "saas-development",
    title: "Custom SaaS & Business Systems",
    shortTitle: "SaaS Systems",
    tagline: "Turn your software product vision into an enterprise-ready, multi-tenant subscription platform.",
    description:
      "We build end-to-end software-as-a-service platforms engineered with tenant isolation, tiered billing, organization hierarchies, and comprehensive self-service admin controls.",
    icon: "Layers",
    badge: "Product Engineering",
    accentColor: "from-amber-500 to-orange-500",
    features: [
      "Multi-Tenant SaaS Architecture & Tenant Isolation",
      "Automated Subscription Billing & Metered Usage Tiering",
      "Team Management, Role Permissions & SSO Authentication",
      "Executive Analytics & Product Usage Reporting",
      "Self-Service Customer Onboarding Flows",
      "Custom Export Engines (PDF, CSV, Automated Reports)"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe Billing", "AWS", "Redis"],
    deliverables: [
      "Complete multi-tenant web application ready for live customers",
      "Stripe Customer Portal and webhooks handling upgrades/cancellations",
      "Super-admin system for managing accounts, plans, and metrics",
      "Data export and GDPR compliance tooling"
    ],
    useCases: [
      "Founders bootstrapping a vertical B2B SaaS product",
      "Consulting agencies converting proprietary spreadsheets into recurring SaaS",
      "Franchise networks needing unified multi-branch operations software"
    ]
  },
  {
    id: "cloud-devops",
    slug: "cloud-devops",
    title: "Cloud Infrastructure, DevOps & CI/CD",
    shortTitle: "Cloud & DevOps",
    tagline: "Resilient cloud infrastructure, automated deployment pipelines, and zero-downtime reliability.",
    description:
      "Modernize how your software is deployed and monitored. We provision cloud environments with automated security hardening, Docker containers, and turnkey continuous delivery pipelines.",
    icon: "Cloud",
    badge: "Infrastructure",
    accentColor: "from-sky-500 to-blue-600",
    features: [
      "Cloud Infrastructure Provisioning (AWS, GCP, Azure, DigitalOcean)",
      "Docker Containerization & Kubernetes Orchestration",
      "GitHub Actions & GitLab CI/CD Pipeline Automation",
      "SSL, DNS, Reverse Proxies (Nginx, Traefik, Cloudflare)",
      "Observability, Alerting & 24/7 Server Health Monitoring",
      "Database Backups, Disaster Recovery & Disaster Failover"
    ],
    technologies: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Terraform", "Nginx"],
    deliverables: [
      "Infrastructure-as-Code (IaC) configuration scripts",
      "Automated pull-request preview environments and staging pipelines",
      "Production-grade backup and recovery procedures",
      "Security audit checklist and SSL certificate auto-renewals"
    ],
    useCases: [
      "Migrating on-premise servers to scalable, cost-effective cloud instances",
      "Automating manual deployments prone to human error and downtime",
      "Hardening cloud security ahead of SOC 2 or enterprise vendor assessments"
    ]
  },
  {
    id: "ui-ux-design",
    slug: "ui-ux-design",
    title: "UI/UX Design & Product Architecture",
    shortTitle: "UI/UX & Design",
    tagline: "User-centric interfaces, design systems, and clickable interactive prototypes that convert.",
    description:
      "Exceptional engineering starts with deliberate product design. We craft interfaces that solve complex user problems with clarity, aesthetic elegance, and rigorous accessibility standards.",
    icon: "Palette",
    badge: "User Experience",
    accentColor: "from-pink-500 to-rose-500",
    features: [
      "User Journey Mapping & Information Architecture",
      "Interactive Wireframes & High-Fidelity Prototypes (Figma)",
      "Comprehensive Design Systems & Component Tokens",
      "UX Usability Audits & Conversion Rate Optimization",
      "Responsive Desktop, Tablet, and Mobile Screen Layouts",
      "WCAG 2.1 AA Accessibility Standards Compliance"
    ],
    technologies: ["Figma", "Design Systems", "Prototyping", "Tailwind CSS", "Accessibility / WCAG"],
    deliverables: [
      "Structured Figma file with responsive auto-layout components",
      "Clickable prototype for stakeholder and user validation",
      "Developer handoff documentation with spacing and color tokens",
      "Exported SVG icons and optimized graphic assets"
    ],
    useCases: [
      "Early-stage startups needing a polished prototype to pitch investors",
      "Legacy software needing a modern UI overhaul to improve user retention",
      "Teams needing a unified design system across multiple web and mobile apps"
    ]
  },
  {
    id: "technology-consulting-support",
    slug: "technology-consulting-support",
    title: "Technical Consulting & Application Support",
    shortTitle: "Consulting & Support",
    tagline: "Strategic architectural guidance, legacy modernization, and dedicated SLA maintenance.",
    description:
      "Whether evaluating a new technology stack, refactoring legacy codebases, or requiring dependable ongoing maintenance, our senior engineers act as your fractional technical leadership.",
    icon: "ShieldCheck",
    badge: "Advisory & SLA",
    accentColor: "from-cyan-500 to-blue-500",
    features: [
      "Software Architecture Reviews & Codebase Health Audits",
      "Legacy Code Modernization & Monolith-to-Microservices Planning",
      "Performance Profiling, Query Tuning & Bottleneck Resolution",
      "Security Vulnerability Assessment & Patching",
      "Dedicated SLA Application Maintenance & Security Updates",
      "Fractional CTO & Technical Advisory Services"
    ],
    technologies: ["Code Auditing", "Security Review", "Performance Profiling", "Git", "DevOps"],
    deliverables: [
      "Comprehensive architectural health and security audit report",
      "Prioritized technical debt remediation roadmap",
      "Monthly maintenance logs and dependency vulnerability reports",
      "Dedicated response SLA for high-priority production incidents"
    ],
    useCases: [
      "Companies facing performance slowdowns during peak user traffic",
      "Businesses inheriting code from previous vendors needing validation",
      "Organizations requiring predictable monthly technical maintenance retainers"
    ]
  }
];
