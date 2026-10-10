import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  FileText,
  Lock,
  GitBranch,
  ArrowRight
} from 'lucide-react';
import SEO from '../components/common/SEO';
import PageHero from '../components/common/PageHero';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import { processStages } from '../data/process';

export default function Process() {
  const breadcrumbs = [{ label: 'Process', path: '/process' }];

  return (
    <>
      <SEO
        title="Our 7-Stage Software Development Lifecycle & Delivery Framework"
        description="Learn how Nexora executes software engineering projects from initial requirements discovery through architecture, agile sprints, QA, launch, and maintenance."
      />

      <PageHero
        breadcrumbs={breadcrumbs}
        badge="Delivery Methodology"
        title="Our Proven 7-Stage"
        highlight="Engineering Lifecycle"
        description="A structured, agile development framework designed to minimize risk, ensure complete transparency, and deliver maintainable software on schedule."
      >
        <div className="flex flex-wrap gap-4">
          <Button to="/contact" icon={ArrowRight} iconPosition="right">
            Initiate Phase 1 Discovery
          </Button>
          <Button to="/portfolio" variant="secondary">
            View Case Studies
          </Button>
        </div>
      </PageHero>

      {/* 7 Process Stages Timeline */}
      <section className="py-24 border-b border-slate-800/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 relative before:absolute before:inset-0 before:left-8 sm:before:left-12 before:w-[2px] before:bg-gradient-to-b before:from-indigo-500 before:via-purple-500 before:to-slate-800 before:hidden sm:before:block">
            {processStages.map((stage) => (
              <div
                key={stage.step}
                className="relative flex flex-col sm:flex-row items-start gap-6 sm:gap-10 group"
              >
                {/* Step indicator node */}
                <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl bg-slate-900 border-2 border-indigo-500/40 text-indigo-400 group-hover:border-indigo-400 group-hover:bg-indigo-950 flex flex-col items-center justify-center shrink-0 transition-all shadow-xl shadow-black/40 z-10">
                  <span className="text-xl sm:text-2xl font-extrabold text-white">
                    {stage.step}
                  </span>
                  <span className="text-[10px] uppercase font-semibold text-indigo-400">
                    Phase
                  </span>
                </div>

                {/* Content Box */}
                <div className="flex-grow p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm group-hover:border-slate-700 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {stage.phase}
                    </h3>
                    <span className="text-xs font-semibold text-indigo-300 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-800/40 w-fit">
                      Estimated: {stage.duration}
                    </span>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {stage.description}
                  </p>

                  {/* Core Activities */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                      Key Activities & Execution:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {stage.activities.map((act, aIdx) => (
                        <div
                          key={aIdx}
                          className="flex items-start gap-2 text-xs text-slate-300"
                        >
                          <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                          <span>{act}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deliverable Box */}
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs text-slate-300 flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>
                      <strong className="text-emerald-400">Phase Deliverables:</strong>{' '}
                      {stage.deliverables}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Confidentiality, NDAs & Code Ownership Section */}
      <section id="confidentiality" className="py-24 bg-slate-900/30 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Trust & Legal Integrity"
            title="Confidentiality & Intellectual Property"
            highlight="Guaranteed"
            subtitle="How we safeguard your proprietary algorithms, product concepts, and commercial data."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <Lock className="w-8 h-8 text-indigo-400 mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">
                Mutual NDAs Before Scoping
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                We sign comprehensive bilateral Non-Disclosure Agreements prior to reviewing any proprietary blueprints, ensuring your product idea remains 100% confidential.
              </p>
            </Card>

            <Card>
              <GitBranch className="w-8 h-8 text-purple-400 mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">
                100% Client Code Ownership
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                All source code, Docker configs, documentation, and database migrations belong exclusively to your business. Repositories are transferred directly to your organization.
              </p>
            </Card>

            <Card>
              <ShieldCheck className="w-8 h-8 text-emerald-400 mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">
                Zero Third-Party Vendor Lock-In
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                We construct software using modern open-source foundations (React, Node, PostgreSQL, Docker) that your in-house engineers can take over and extend without friction.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Begin Phase 1 Discovery?
          </h2>
          <p className="text-slate-400 text-sm mb-8">
            Tell us about your requirements and we’ll prepare an architectural discovery workshop.
          </p>
          <Button to="/contact" size="lg" icon={ArrowRight} iconPosition="right">
            Schedule Discovery Consultation
          </Button>
        </div>
      </section>
    </>
  );
}
