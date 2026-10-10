import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  FileCheck2,
  Briefcase
} from 'lucide-react';
import SEO from '../components/common/SEO';
import PageHero from '../components/common/PageHero';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';
import ContactForm from '../components/forms/ContactForm';
import ProjectCard from '../components/portfolio/ProjectCard';
import { servicesData } from '../data/services';
import { projectsData } from '../data/projects';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const breadcrumbs = [
    { label: 'Services', path: '/services' },
    { label: service.title, path: `/services/${service.slug}` }
  ];

  // Find related case studies if any match category or tech
  const relatedProjects = projectsData.filter((p) =>
    p.technologies.some((t) => service.technologies.includes(t))
  ).slice(0, 2);

  return (
    <>
      <SEO
        title={`${service.title} | Software Engineering Services`}
        description={service.tagline || service.description}
        canonical={`/services/${service.slug}`}
        breadcrumbs={breadcrumbs}
      />

      <PageHero
        breadcrumbs={breadcrumbs}
        badge={service.badge}
        title={service.title}
        description={service.tagline}
        backgroundImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80"
      >
        <div className="flex flex-wrap gap-4">
          <Button to="/contact" icon={ArrowRight} iconPosition="right">
            Discuss {service.shortTitle} Project
          </Button>
          <Button to="/services" variant="secondary">
            Browse All Services
          </Button>
        </div>
      </PageHero>

      {/* Main Details Section (Clean White Background) */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column: Deep Dive */}
            <div className="lg:col-span-2 space-y-12">
              {/* Practice Overview */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-4">
                  Practice Overview & Engineering Approach
                </h2>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Core Features & Architectural Capabilities */}
              <div>
                <h3 className="text-xl font-bold text-slate-950 mb-6 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-amber-500" />
                  <span>Key Architectural Capabilities</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-800 font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expected Deliverables */}
              <div>
                <h3 className="text-xl font-bold text-slate-950 mb-6 flex items-center gap-2">
                  <FileCheck2 className="w-5 h-5 text-emerald-600" />
                  <span>Tangible Deliverables You Receive</span>
                </h3>
                <div className="space-y-3">
                  {service.deliverables.map((del, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3"
                    >
                      <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-sm text-slate-800 font-medium">{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Use Cases */}
              <div>
                <h3 className="text-xl font-bold text-slate-950 mb-6 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-amber-500" />
                  <span>Common Business Scenarios</span>
                </h3>
                <div className="space-y-3">
                  {service.useCases.map((useCase, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 font-medium"
                    >
                      {useCase}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="space-y-8">
              {/* Tech Stack Card */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-slate-900">
                <h4 className="text-base font-bold text-slate-950 mb-4 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-amber-500" />
                  <span>Technologies We Utilize</span>
                </h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-amber-50 text-amber-700 border border-amber-200 text-xs font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  We adapt to your team's preferred stack while ensuring high maintainability and security standards.
                </p>
              </div>

              {/* Contact / Scope Box */}
              <div className="p-6 rounded-2xl bg-slate-950 text-white border-2 border-slate-900 shadow-xl">
                <h4 className="text-lg font-bold text-white mb-2">
                  Ready to scope {service.shortTitle}?
                </h4>
                <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                  Send us your specifications or schedule an exploratory architectural call.
                </p>
                <Button to="/contact" size="md" icon={ArrowRight} iconPosition="right" className="w-full">
                  Request Scoping Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects (Light Slate Background) */}
      {relatedProjects.length > 0 && (
        <section className="py-24 border-b border-slate-200 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="Case Studies"
              title="Related Project Implementations"
              subtitle={`Explore how our ${service.shortTitle} practice was applied in live client platforms.`}
              className="mb-14"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedProjects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Dedicated Inquiry Form Section (Clean White Background) */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Project Intake"
            title={`Discuss Your ${service.shortTitle} Needs`}
            subtitle="Fill out the initial details below and we will prepare tailored technical questions and timelines for our call."
            className="mb-12"
          />
          <ContactForm preselectedService={service.title} />
        </div>
      </section>
    </>
  );
}
