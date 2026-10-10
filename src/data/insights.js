/**
 * Engineering Insights & Industry Articles Data
 * Structured content for /insights and /insights/:slug.
 */

export const insightsData = [
  {
    id: "microservices-vs-modular-monolith",
    slug: "microservices-vs-modular-monolith-for-startups",
    title: "Why Startups Should Choose a Modular Monolith Before Microservices",
    category: "Architecture",
    readTime: "6 min read",
    publishedAt: "May 14, 2024",
    author: {
      name: "Alex Vance",
      role: "Lead Software Architect",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    summary:
      "Prematurely adopting microservices can introduce severe distributed systems overhead. Here is how a well-structured modular monolith provides velocity without technical debt.",
    tags: ["Software Architecture", "Node.js", "System Design", "Startups"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    content: [
      "In modern software engineering circles, microservices are frequently touted as the gold standard for scalable architecture. However, for early-stage companies and growing product teams, splitting a nascent application across dozens of independent services often introduces crippling coordination friction.",
      "A modular monolith, by contrast, enforces strict domain boundaries and decoupled modules within a unified codebase. You gain the benefit of single-repository refactoring, atomic database transactions, and trivial local development environments without needing distributed tracing or complex service meshes.",
      "When traffic grows and a specific module genuinely demands independent horizontal scaling—such as image processing or event streaming—its well-encapsulated boundary makes extracting it into an isolated microservice straightforward and low-risk.",
      "Key takeaway: Prioritize domain clarity over network partitioning. Build your monolith with clean interfaces today, and extract microservices only when concrete operational data demands it."
    ]
  },
  {
    id: "practical-enterprise-rag-pipelines",
    slug: "building-reliable-rag-ai-pipelines",
    title: "Engineering Reliable RAG AI Pipelines for Enterprise Knowledge",
    category: "AI & Automation",
    readTime: "8 min read",
    publishedAt: "June 22, 2024",
    author: {
      name: "Marcus Chen",
      role: "AI & Machine Learning Lead",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    summary:
      "Moving beyond toy chatbot demos. How we implement chunking strategies, hybrid vector-keyword retrieval, and hallucination guardrails for production applications.",
    tags: ["LLM", "RAG", "Python", "Vector Databases", "Enterprise AI"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Connecting Large Language Models (LLMs) to internal business knowledge requires far more than dropping PDF text into an off-the-shelf vector database. Real enterprise documents contain nested tables, footnotes, and contextual hierarchies that simple vector chunking tears apart.",
      "In our production architectures, we utilize recursive hierarchical chunking combined with hybrid search (dense vector embeddings combined with sparse BM25 keyword matching). This ensures precise terminology like SKU numbers or legal clause IDs are never lost to semantic approximation.",
      "Furthermore, we layer automated confidence verification and citation grounding before returning answers to users. If the retriever confidence score drops below 0.82, the system politely flags that information is unavailable rather than fabricating an answer.",
      "Practical AI is about predictability, verifiability, and privacy. Building guardrails first is what separates an enterprise product from a prototype."
    ]
  },
  {
    id: "offline-first-mobile-apps",
    slug: "offline-first-architecture-react-native",
    title: "Architecting Offline-First Mobile Applications with React Native",
    category: "Mobile Engineering",
    readTime: "7 min read",
    publishedAt: "August 30, 2024",
    author: {
      name: "Sarah Lin",
      role: "Senior Mobile Engineer",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    },
    summary:
      "A deep dive into local SQLite caching, optimistic UI updates, and conflict resolution strategies for field applications operating in zero-connectivity zones.",
    tags: ["React Native", "Mobile", "SQLite", "Architecture"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    content: [
      "When building mobile applications for utility workers, emergency responders, or logistics crews, network connectivity cannot be treated as a guaranteed precondition. Network drops are the norm, not the edge case.",
      "An offline-first architecture flips standard mobile app assumptions: the on-device database (such as SQLite or WatermelonDB) serves as the primary source of truth for the UI. All user actions write directly to the local store with optimistic UI updates.",
      "A background sync engine then queues outbound mutations and dispatches them sequentially once connectivity resumes, utilizing vector clocks and deterministic timestamp algorithms to resolve concurrent record edits without data corruption.",
      "The result is an application that feels instantaneous to the user, operates smoothly in basements and remote fields, and reliably syncs data without manual user intervention."
    ]
  }
];

export const insightCategories = ["All", "Architecture", "AI & Automation", "Mobile Engineering"];
