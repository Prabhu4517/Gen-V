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
        title="Industry Verticals & Sector Specializations | GEN V SOLUTIONS"
        description="Enterprise technology solutions tailored for FinTech, Healthcare, Logistics, CleanTech, E-Commerce, and SaaS organizations."
        canonical="/industries"
      />

      <PageHero
        breadcrumbs={breadcrumbs}
        badge="Sector Capabilities"
        title="Software Engineering Tailored For"
        highlight="Target Industries"
        description="Every industry operates under distinct regulatory constraints, data security standards, and workflow complexities. Explore our domain-tailored technical architectures."
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
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

      {/* Industry Breakdown Grid (Clean White Background) */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industriesData.map((ind) => {
              const IconComponent = iconMap[ind.icon] || Building2;
              return (
                <div
                  key={ind.id}
                  className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm flex flex-col justify-between hover:border-amber-500 hover:shadow-md transition-all text-slate-900"
                >
                  <div>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-950">
                          {ind.title}
                        </h3>
                        <p className="text-xs text-amber-600 font-bold uppercase tracking-wider">
                          {ind.tagline}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {ind.description}
                    </p>

                    {/* Operational Challenges */}
                    <div className="mb-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
                        <span>Common Sector Bottlenecks</span>
                      </h4>
                      <ul className="space-y-2">
                        {ind.painPoints.map((pain, pIdx) => (
                          <li key={pIdx} className="text-xs text-slate-600 flex items-start gap-2">
                            <span className="text-amber-500 font-bold">•</span>
                            <span>{pain}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tailored Technical Solutions */}
                    <div className="mb-6 border-t border-slate-100 pt-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Our Technical Solutions</span>
                      </h4>
                      <ul className="space-y-2">
                        {ind.solutions.map((sol, sIdx) => (
                          <li key={sIdx} className="text-xs text-slate-700 flex items-start gap-2 font-medium">
                            <span className="text-emerald-600 font-bold">✓</span>
                            <span>{sol}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Use Cases tags */}
                  <div className="border-t border-slate-100 pt-4">
                    <span className="text-[11px] text-slate-400 uppercase tracking-wider font-bold block mb-2">
                      Example Target Applications
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {ind.exampleUseCases.map((useCase, uIdx) => (
                        <span
                          key={uIdx}
                          className="px-2.5 py-1 text-xs rounded-lg bg-amber-50 text-amber-700 border border-amber-200 font-bold"
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

      {/* Strategic Dark CTA Strip */}
      <section className="py-20 bg-slate-950 text-white text-center border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">
            <span className="w-6 h-0.5 bg-amber-500"></span>
            <span>LET'S CONNECT</span>
            <span className="w-6 h-0.5 bg-amber-500"></span>
          </div>
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Do You Operate In One Of These Business Sectors?
          </h2>
          <p className="text-slate-300 text-sm mb-8">
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
