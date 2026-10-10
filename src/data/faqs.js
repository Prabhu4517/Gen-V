/**
 * Frequently Asked Questions (FAQ) Data
 * Organized by category to answer common prospective client questions.
 */

export const faqsData = [
  {
    category: "Engagement & Pricing",
    questions: [
      {
        question: "How do you structure project pricing and contracts?",
        answer:
          "We offer two primary engagement models: Fixed-Price Milestone Contracts for clearly defined scopes (ideal for MVPs and initial builds), and Dedicated Sprint Retainers (Time & Materials) for evolving products requiring continuous feature development. Every proposal includes transparent itemized deliverables with no hidden fees."
      },
      {
        question: "What is your typical project timeline from kickoff to launch?",
        answer:
          "Timelines depend on complexity. A targeted MVP or specialized business web portal typically requires 6 to 10 weeks. Larger multi-tenant SaaS platforms or complex mobile apps typically take 12 to 16 weeks. We break every project into 2-week agile sprints with working staging builds at every review."
      },
      {
        question: "Do you sign Non-Disclosure Agreements (NDAs) before discussion?",
        answer:
          "Yes, absolutely. We prioritize your intellectual property. We are happy to execute a mutual NDA before our initial discovery consultation to ensure your business ideas, proprietary workflows, and data remain strictly confidential."
      }
    ]
  },
  {
    category: "Technical & Ownership",
    questions: [
      {
        question: "Who owns the intellectual property and source code?",
        answer:
          "You own 100% of the intellectual property, copyright, and source code upon milestone settlement. We transfer repository ownership directly to your GitHub/GitLab account and provide complete documentation, architectural diagrams, and deployment runbooks."
      },
      {
        question: "Can you take over or modernize an existing codebase?",
        answer:
          "Yes. We frequently conduct code audits for legacy applications, identify technical debt, patch vulnerabilities, and execute phased modernization plans without disrupting active business operations."
      },
      {
        question: "What technologies do you recommend for new web and mobile products?",
        answer:
          "We advocate proven, scalable technologies: React and Next.js for web frontends, Node.js or Python for backend APIs, PostgreSQL for relational databases, React Native or Flutter for cross-platform mobile apps, and AWS or Docker for resilient cloud hosting."
      }
    ]
  },
  {
    category: "Support & Communication",
    questions: [
      {
        question: "How will our team track progress and communicate with developers?",
        answer:
          "We maintain a collaborative, transparent workflow. You receive a dedicated Slack or Microsoft Teams channel, weekly video sprint reviews, and live access to our Jira/Linear project board and staging server previews."
      },
      {
        question: "What happens after our software is launched in production?",
        answer:
          "We provide 30 days of complimentary post-launch warranty support to resolve any unexpected bugs. After that, clients can transition into a flexible monthly SLA maintenance retainer covering server monitoring, dependency updates, and feature enhancements."
      }
    ]
  }
];
