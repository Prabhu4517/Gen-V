import React from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Code2
} from 'lucide-react';
import SEO from '../components/common/SEO';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';
import ServiceCard from '../components/services/ServiceCard';
import ProjectCard from '../components/portfolio/ProjectCard';
import Accordion from '../components/common/Accordion';
import { servicesData } from '../data/services';
import { projectsData } from '../data/projects';
import { technologyCategories } from '../data/technologies';
import { processStages } from '../data/process';
import { industriesData } from '../data/industries';
import { faqsData } from '../data/faqs';

export default function Home() {
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 3);
  const homeFaqs = faqsData.flatMap((category) => category.questions).slice(0, 5);

  return (
    <>
      <SEO
        title="Enterprise IT Solutions & Custom Software Development"
        description="We partner with ambitious startups and modern enterprises to architect, engineer, and deploy high-performance web platforms, mobile apps, and AI systems."
      />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/20 to-purple-600/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-cyan-600/10 blur-[90px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 mb-8 backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span>Engineering Partner For Modern Businesses</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.08] mb-8">
            Architecting Resilient Software.{' '}
            <span className="tech-gradient-text block mt-2">
              Accelerating Digital Velocity.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
            From strategic discovery and bespoke application engineering to cloud architecture and AI workflow integration, we deliver enterprise-grade digital products designed to scale.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button to="/contact" size="lg" icon={ArrowRight} iconPosition="right">
              Discuss Your Project
            </Button>
            <Button to="/portfolio" size="lg" variant="secondary">
              Explore Our Work
            </Button>
          </div>

          {/* Trust & Capability Metrics Banner */}
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 p-4 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
            <div className="p-2 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">100%</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Codebase Ownership</div>
            </div>
            <div className="p-2 text-center border-l border-slate-800/80">
              <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400">2-Week</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Agile Sprint Cycles</div>
            </div>
            <div className="p-2 text-center border-l border-slate-800/80">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">99.9%</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Cloud Reliability</div>
            </div>
            <div className="p-2 text-center border-l border-slate-800/80">
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">&lt; 24h</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Response SLA</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES OVERVIEW */}
      <section className="py-24 border-t border-slate-800/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Engineering Capabilities"
            title="Full-Lifecycle Software Services"
            highlight="Tailored for Scale"
            subtitle="Explore our comprehensive engineering practices covering custom web applications, mobile platforms, AI automation, and cloud infrastructure."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {servicesData.slice(0, 8).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center">
            <Button to="/services" variant="secondary" icon={ArrowRight} iconPosition="right">
              View All 8 Service Practices & Technical Deliverables
            </Button>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PORTFOLIO PROJECTS */}
      <section className="py-24 bg-slate-900/30 border-t border-slate-800/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeader
              badge="Case Studies"
              title="Proven Systems."
              highlight="Engineered For Results."
              subtitle="Review verified software architectures, full-stack implementations, and measurable business outcomes."
              align="left"
              className="max-w-2xl"
            />
            <Button to="/portfolio" variant="outline" icon={ArrowRight} iconPosition="right" className="self-start md:self-end">
              View All Case Studies
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US / VALUE PROPOSITION */}
      <section className="py-24 border-t border-slate-800/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Engineering Philosophy"
            title="Why Ambitious Leaders"
            highlight="Choose Nexora"
            subtitle="We reject black-box development. Our partnership provides transparent code repositories, predictable agile delivery, and senior technical leadership."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm relative group hover:border-indigo-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Architectural Integrity
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                We write modular, thoroughly documented, and strictly tested code adhering to clean architecture principles. No brittle hacks or untracked technical debt.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm relative group hover:border-indigo-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Agile Velocity & Working Previews
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Work happens in focused 2-week sprints. Every sprint concludes with a working staging server demonstration, ensuring you always see tangible progress.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm relative group hover:border-indigo-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Full IP & Code Ownership
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                You retain complete ownership of all repositories, database schemas, and intellectual property from day one, backed by signed mutual NDAs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TECHNOLOGY CAPABILITIES STRIP */}
      <section className="py-24 bg-slate-900/40 border-t border-slate-800/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Technology Stack"
            title="Battle-Tested Tools"
            highlight="Modern Ecosystems"
            subtitle="We select tools based on longevity, performance, and talent availability."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologyCategories.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800/80 backdrop-blur-sm"
              >
                <h4 className="text-base font-bold text-white mb-1">
                  {cat.category}
                </h4>
                <p className="text-xs text-slate-400 mb-4">{cat.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 text-xs rounded-lg bg-slate-900 text-slate-300 border border-slate-800 font-medium"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DEVELOPMENT PROCESS (7-STAGES PREVIEW) */}
      <section className="py-24 border-t border-slate-800/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Lifecycle"
            title="Our Structured 7-Stage"
            highlight="Delivery Framework"
            subtitle="From initial discovery to zero-downtime deployment and long-term SLA support."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {processStages.slice(0, 4).map((stage) => (
              <div
                key={stage.step}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 relative"
              >
                <div className="text-3xl font-extrabold text-indigo-400 mb-2">
                  {stage.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{stage.phase}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {stage.summary}
                </p>
                <span className="text-[11px] font-semibold text-indigo-300 bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-800/40">
                  {stage.duration}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button to="/process" variant="secondary" icon={ArrowRight} iconPosition="right">
              Explore Complete 7-Stage Process & Quality Assurance Controls
            </Button>
          </div>
        </div>
      </section>

      {/* 7. TARGET INDUSTRIES STRIP */}
      <section className="py-24 bg-slate-900/30 border-t border-slate-800/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Target Sectors"
            title="Specialized Solutions Across"
            highlight="Key Industries"
            subtitle="Explore how our software architectures address domain-specific regulatory and operational challenges."
            className="mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {industriesData.map((ind) => (
              <div
                key={ind.id}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/40 transition-colors"
              >
                <h3 className="text-lg font-bold text-white mb-2">{ind.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {ind.tagline}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {ind.exampleUseCases.map((useCase, uIdx) => (
                    <span
                      key={uIdx}
                      className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button to="/industries" variant="outline">
              Review Industry Use Cases & Technical Capabilities
            </Button>
          </div>
        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <section className="py-24 border-t border-slate-800/60 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Common Questions"
            title="Everything You Need"
            highlight="To Know"
            subtitle="Transparent answers regarding contracts, code ownership, sprint cycles, and post-launch maintenance."
            className="mb-16"
          />

          <Accordion items={homeFaqs} />

          <div className="mt-12 text-center">
            <p className="text-sm text-slate-400 mb-4">
              Have a question that is not covered here?
            </p>
            <Button to="/contact" variant="secondary">
              Speak Directly with Our Technical Team
            </Button>
          </div>
        </div>
      </section>

      {/* 9. FINAL PROJECT ENQUIRY CTA BANNER */}
      <section className="py-20 relative overflow-hidden border-t border-slate-800/80">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-indigo-900/30 to-purple-900/20 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
            <span>Ready To Build?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6 max-w-3xl mx-auto">
            Let’s Transform Your Technical Vision Into A Production-Ready Product.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Schedule a 30-minute discovery consultation. We’ll review your product requirements, propose an architecture roadmap, and provide transparent milestone estimates.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/contact" size="lg" icon={ArrowRight} iconPosition="right">
              Start Project Conversation
            </Button>
            <Button to="/services" size="lg" variant="secondary">
              Review Services & Deliverables
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
