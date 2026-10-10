import React from 'react';
import { Target, Compass, Shield, Zap, Code2, Users2, ArrowRight } from 'lucide-react';
import SEO from '../components/common/SEO';
import PageHero from '../components/common/PageHero';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

export default function About() {
  const breadcrumbs = [{ label: 'About Us', path: '/about' }];

  const coreValues = [
    {
      icon: Code2,
      title: "Technical Excellence Over Shortcuts",
      description:
        "We build for longevity. Our engineering practices prioritize strict typing, comprehensive testing, and clean architecture rather than hasty hacks that accumulate technical debt."
    },
    {
      icon: Shield,
      title: "Radical Transparency & Code Ownership",
      description:
        "No proprietary vendor lock-in. You receive repository access from day one, clear sprint task boards, and complete documentation with zero hidden barriers."
    },
    {
      icon: Zap,
      title: "Pragmatic Modern Architecture",
      description:
        "We avoid hype-driven engineering. We select battle-tested tools and frameworks suited to your specific product stage, budget, and performance requirements."
    },
    {
      icon: Users2,
      title: "Partnership, Not Outsourcing",
      description:
        "We act as an integrated extension of your leadership team, offering strategic technical counsel, roadmap feasibility feedback, and long-term architectural stability."
    }
  ];

  return (
    <>
      <SEO
        title="About Us | Technical Philosophy & Company Mission"
        description="Learn about Nexora Technologies, our software engineering philosophy, core values, and how we help businesses build resilient digital products."
      />

      <PageHero
        breadcrumbs={breadcrumbs}
        badge="About Nexora"
        title="Engineering Software with"
        highlight="Clarity, Precision & Purpose"
        description="We are a digital product engineering and technology solutions startup dedicated to helping ambitious businesses plan, architect, and deploy reliable software products."
      >
        <div className="flex flex-wrap gap-4">
          <Button to="/contact" icon={ArrowRight} iconPosition="right">
            Work With Us
          </Button>
          <Button to="/portfolio" variant="secondary">
            View Our Case Studies
          </Button>
        </div>
      </PageHero>

      {/* Mission & Vision Section */}
      <section className="py-24 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-indigo-500/30">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-slate-300 text-base leading-relaxed">
                To empower founders and forward-thinking businesses by translating ambitious technical visions into resilient, scalable, and beautifully designed digital products that create sustainable competitive advantage.
              </p>
            </Card>

            <Card className="border-purple-500/30">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Our Vision</h3>
              <p className="text-slate-300 text-base leading-relaxed">
                To be the most trusted software engineering partner for modern startups and enterprises—recognized for uncompromising code quality, transparent delivery frameworks, and empathetic technical leadership.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 border-b border-slate-800/60 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Guiding Principles"
            title="The Values That Guide Every"
            highlight="Line of Code"
            subtitle="How we make architectural decisions, collaborate with stakeholders, and guarantee product quality."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-slate-950/70 border border-slate-800/80 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{val.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Development Philosophy */}
      <section className="py-24 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-4">
                Engineering Discipline
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
                How We Approach <span className="tech-gradient-text">Software Craftsmanship</span>
              </h2>
              <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
                <p>
                  Building production software is not just about writing features; it is about managing complexity over time. We believe in domain-driven design, modular components, and automated continuous integration that catches regressions before users ever experience them.
                </p>
                <p>
                  Every engagement starts with active listening and architectural clarity. By thoroughly mapping data schemas, user workflows, and API boundaries upfront, we minimize expensive rework during late-stage development.
                </p>
                <p>
                  Whether integrating complex LLM workflows, orchestrating microservices in Docker, or crafting pixel-perfect responsive web apps, we deliver solutions that your internal engineers can easily understand, maintain, and expand.
                </p>
              </div>

              <div className="mt-8">
                <Button to="/process" variant="outline" icon={ArrowRight} iconPosition="right">
                  Explore Our 7-Stage Process
                </Button>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-900/90 border border-slate-800/90 p-8 font-mono text-xs text-slate-300 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-slate-500">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                </div>
                <span>engineering_standards.ts</span>
              </div>
              <pre className="pt-6 overflow-x-auto text-indigo-300 leading-relaxed">
{`// Nexora Engineering Guarantees
export const standards = {
  architecture: "Clean Modular & Decoupled",
  testCoverage: "Unit & E2E Integration Suite",
  accessibility: "WCAG 2.1 AA Compliance",
  deployment: "Automated CI/CD with Rollback",
  security: "Zero Hardcoded Secrets, OWASP Top 10",
  ownership: "100% Client Repository Transfer",
  communication: "Weekly Live Sprints & Demos"
};`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Partner With An Engineering Team Dedicated To Your Success
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mx-auto mb-8">
            Let’s review your project architecture and deliverable timeline together.
          </p>
          <Button to="/contact" size="lg" icon={ArrowRight} iconPosition="right">
            Start Your Project Enquiry
          </Button>
        </div>
      </section>
    </>
  );
}
