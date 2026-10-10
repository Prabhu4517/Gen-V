import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '../components/common/SEO';
import PageHero from '../components/common/PageHero';
import SectionHeader from '../components/common/SectionHeader';
import ServiceCard from '../components/services/ServiceCard';
import Button from '../components/common/Button';
import { servicesData } from '../data/services';

export default function Services() {
  const breadcrumbs = [{ label: 'Services', path: '/services' }];

  return (
    <>
      <SEO
        title="Our Technical Services & Software Practices"
        description="Comprehensive software development and digital engineering services: web applications, mobile apps, AI solutions, backend systems, SaaS platforms, and DevOps."
      />

      <PageHero
        breadcrumbs={breadcrumbs}
        badge="Engineering Offerings"
        title="Modern Software Engineering"
        highlight="Practices"
        description="From greenfield product development to scaling high-throughput enterprise systems, we provide deep technical specialization across 8 core disciplines."
        backgroundImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80"
      >
        <div className="flex flex-wrap gap-4">
          <Button to="/contact" icon={ArrowRight} iconPosition="right">
            Discuss Your Requirements
          </Button>
          <Button to="/portfolio" variant="secondary">
            View Related Projects
          </Button>
        </div>
      </PageHero>

      {/* Services Grid (Clean White Background) */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models Preview (Light Slate Background) */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="How We Work"
            title="Flexible Engagement"
            highlight="Models"
            subtitle="Choose the model that best matches your timeline, budget predictability, and project scope."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-amber-500 hover:shadow-md transition-all">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Milestone-Based
              </span>
              <h3 className="text-xl font-bold text-slate-950 mt-4 mb-2">
                Fixed-Price Scope
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Best for MVPs, specific feature modules, or systems with well-defined functional specifications. You receive a guaranteed budget and milestone schedule.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Clearly defined milestones and deliverables</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Fixed cost with no surprise invoices</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>30-day post-launch warranty included</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-amber-500 hover:shadow-md transition-all">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Sprint-Based
              </span>
              <h3 className="text-xl font-bold text-slate-950 mt-4 mb-2">
                Dedicated Agile Retainer
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Ideal for evolving products, scaling platforms, and teams requiring continuous feature additions, performance profiling, and immediate technical agility.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Bi-weekly sprint planning and demos</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Direct daily collaboration via Slack / Teams</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Dynamic prioritization of feature backlog</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Dark CTA Strip */}
      <section className="py-20 bg-slate-950 text-white text-center border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">
            <span className="w-6 h-0.5 bg-amber-500"></span>
            <span>GET IN TOUCH</span>
            <span className="w-6 h-0.5 bg-amber-500"></span>
          </div>
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Need Guidance On Which Service Fits Your Roadmap?
          </h2>
          <p className="text-slate-300 text-sm mb-8">
            Book an introductory scoping call. We will review your architecture and suggest the best technical approach.
          </p>
          <Button to="/contact" size="lg" icon={ArrowRight} iconPosition="right">
            Request Technical Consultation
          </Button>
        </div>
      </section>
    </>
  );
}
