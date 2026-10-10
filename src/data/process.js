/**
 * Software Development Lifecycle Process Data
 * Transparent 7-phase delivery framework.
 */

export const processStages = [
  {
    step: "01",
    phase: "Discovery & Requirements",
    duration: "Week 1 - 2",
    summary: "Deep-dive workshops to analyze business goals, user personas, technical constraints, and project scope.",
    description:
      "We begin by understanding your core business model, target users, and competitive landscape. We map out technical requirements, evaluate existing systems, and establish clear success metrics to avoid scope creep.",
    activities: [
      "Stakeholder interviews & goals definition",
      "Functional requirements document (FRD)",
      "Technical feasibility & third-party dependency review",
      "Project roadmap and milestone timeline estimation"
    ],
    deliverables: "Discovery Summary, Project Scope Document & Architecture Blueprint"
  },
  {
    step: "02",
    phase: "Planning & Architecture",
    duration: "Week 2 - 3",
    summary: "System architecture, database schema design, API contracts, and technology stack selection.",
    description:
      "Before writing code, our software architects map out the technical foundation. We design scalable database schemas, define REST/GraphQL contracts, and select the optimal hosting and cloud topology.",
    activities: [
      "Entity relationship diagrams (ERD) & database schemas",
      "API contract specifications (OpenAPI/Swagger)",
      "Security & compliance framework review",
      "Infrastructure capacity and scalability planning"
    ],
    deliverables: "System Architecture Document & Technical Specification"
  },
  {
    step: "03",
    phase: "UI/UX & Prototyping",
    duration: "Week 3 - 5",
    summary: "User journeys, wireframes, accessible design systems, and interactive clickable prototypes in Figma.",
    description:
      "We transform functional specifications into intuitive, elegant user interfaces. We test workflows through clickable prototypes so your team can experience and refine user journeys before engineering begins.",
    activities: [
      "User flows and information architecture diagrams",
      "Low-fidelity wireframing and layout exploration",
      "High-fidelity UI designs & atomic component systems",
      "Interactive clickable Figma prototype demonstration"
    ],
    deliverables: "Figma Prototype, UI Design System & Component Library Tokens"
  },
  {
    step: "04",
    phase: "Development & Integration",
    duration: "Sprint-Based (Weeks 5 - 10+)",
    summary: "Agile, sprint-driven full-stack engineering with clean code, version control, and weekly demos.",
    description:
      "Our senior developers write clean, maintainable, modular code. We work in 2-week agile sprints, providing working staging preview builds at the end of each sprint so you can track real progress.",
    activities: [
      "Frontend component engineering with responsive design",
      "Backend microservice & database implementation",
      "Third-party API, payment, and webhook integrations",
      "Bi-weekly sprint reviews and progress demos"
    ],
    deliverables: "Clean Git Repository, Staging Server Environments & Sprint Demos"
  },
  {
    step: "05",
    phase: "Testing & Quality Assurance",
    duration: "Continuous & Dedicated Hardening",
    summary: "Comprehensive unit testing, integration tests, cross-browser audits, security reviews, and load testing.",
    description:
      "Quality assurance is integrated into every phase. Before anything approaches production, we perform rigorous functional testing, cross-device responsiveness verification, and vulnerability scanning.",
    activities: [
      "Automated unit and integration test execution",
      "Cross-browser and cross-device responsiveness validation",
      "Penetration testing & OWASP security checklist audit",
      "User acceptance testing (UAT) with stakeholder sign-off"
    ],
    deliverables: "QA Test Matrix, Bug Resolution Log & Security Audit Report"
  },
  {
    step: "06",
    phase: "Deployment & Launch",
    duration: "Launch Week",
    summary: "Zero-downtime production deployment, domain/SSL setup, CI/CD configuration, and performance monitoring.",
    description:
      "We orchestrate a seamless production rollout. From configuring SSL certificates and DNS routing to setting up telemetry alarms and automated backups, we ensure your launch is smooth and stable.",
    activities: [
      "Production cloud infrastructure provisioning",
      "Automated CI/CD deployment pipeline configuration",
      "DNS cutover, SSL certificate verification & CDN caching",
      "Real-time error logging, uptime monitoring, and alerting setup"
    ],
    deliverables: "Live Production Application, Hosting Setup & Deployment Runbook"
  },
  {
    step: "07",
    phase: "Maintenance & Continuous Growth",
    duration: "Ongoing Partnership",
    summary: "Proactive security patching, database optimization, feature enhancements, and dedicated SLA support.",
    description:
      "Launch is just the beginning of your product's lifecycle. We remain by your side with regular dependency updates, security patches, performance profiling, and iterative feature development.",
    activities: [
      "Scheduled dependency updates and vulnerability patching",
      "Database indexing, query profiling, and cloud cost optimization",
      "Monthly performance and uptime SLA reports",
      "Roadmap consultation for version 2.0 feature expansion"
    ],
    deliverables: "Monthly Maintenance Reports, Guaranteed SLA Response & Ongoing Enhancements"
  }
];
