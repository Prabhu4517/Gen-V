import React from 'react';
import {
  Building2,
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  Briefcase,
  Rocket,
  CheckCircle2,
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import SEO from '../components/common/SEO';
import PageHero from '../components/common/PageHero';
import Button from '../components/common/Button';
import { industriesData } from '../data/industries';

const iconMap = {
  Building2,
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  Briefcase,
  Rocket
};

export default function Industries() {
  const breadcrumbs = [{ label: 'Industries', path: '/industries' }];

  return (
    <>
      <SEO
        title="Industry Solutions & Sector Specialization"
        description="Discover how our engineering solutions address compliance, operational friction, and customer experience across real estate, healthcare, education, retail, and SaaS."
      />

      <PageHero
        breadcrumbs={breadcrumbs}
        badge="Sector Capabilities"
        title="Software Engineering Tailored For"
        highlight="Target Industries"
        description="Every industry operates under distinct regulatory constraints, data security standards, and workflow complexities. Explore our domain-tailored technical architectures."
      >
        <div className="flex flex-wrap gap-4">
          <Button to="/contact" icon={ArrowRight} iconPosition="right">
            Discuss Your Sector Needs
          </Button>
          <Button to="/services" variant="secondary">
            Explore All Services
          </Button>
        </div>
      </PageHero>

      {/* Industry Breakdown Grid */}
      <section className="py-24 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industriesData.map((ind) => {
              const IconComponent = iconMap[ind.icon] || Building2;
              return (
                <div
                  key={ind.id}
                  className="rounded-2xl bg-slate-900/60 border border-slate-800/80 p-8 backdrop-blur-sm flex flex-col justify-between hover:border-indigo-500/40 transition-colors"
                >
                  <div>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {ind.title}
                        </h3>
                        <p className="text-xs text-indigo-400 font-medium">
                          {ind.tagline}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {ind.description}
                    </p>

                    {/* Operational Challenges */}
                    <div className="mb-6">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                        <span>Common Sector Bottlenecks</span>
                      </h4>
                      <ul className="space-y-2">
                        {ind.painPoints.map((pain, pIdx) => (
                          <li key={pIdx} className="text-xs text-slate-400 flex items-start gap-2">
                            <span className="text-amber-400/80 font-bold">•</span>
                            <span>{pain}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tailored Technical Solutions */}
                    <div className="mb-6 border-t border-slate-800/60 pt-4">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Our Technical Solutions</span>
                      </h4>
                      <ul className="space-y-2">
                        {ind.solutions.map((sol, sIdx) => (
                          <li key={sIdx} className="text-xs text-slate-300 flex items-start gap-2">
                            <span className="text-emerald-400 font-bold">✓</span>
                            <span>{sol}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Use Cases tags */}
                  <div className="border-t border-slate-800/60 pt-4">
                    <span className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold block mb-2">
                      Example Target Applications
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {ind.exampleUseCases.map((useCase, uIdx) => (
                        <span
                          key={uIdx}
                          className="px-2.5 py-1 text-xs rounded-lg bg-slate-950 text-indigo-300 border border-slate-800 font-medium"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Do You Operate In One Of These Business Sectors?
          </h2>
          <p className="text-slate-400 text-sm mb-8">
            Let’s discuss your compliance requirements, operational constraints, and technology vision.
          </p>
          <Button to="/contact" size="lg" icon={ArrowRight} iconPosition="right">
            Request Sector-Specific Consultation
          </Button>
        </div>
      </section>
    </>
  );
}
