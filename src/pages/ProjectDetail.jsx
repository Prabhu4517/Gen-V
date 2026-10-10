import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import {
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Cpu,
  Layers,
  Clock,
  Building,
  ShieldCheck
} from 'lucide-react';
import SEO from '../components/common/SEO';
import PageHero from '../components/common/PageHero';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import ProjectCard from '../components/portfolio/ProjectCard';
import { projectsData } from '../data/projects';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  const breadcrumbs = [
    { label: 'Portfolio', path: '/portfolio' },
    { label: project.title, path: `/portfolio/${project.slug}` }
  ];

  // Related projects
  const relatedProjects = projectsData
    .filter((p) => p.id !== project.id && (p.category === project.category || p.featured))
    .slice(0, 2);

  return (
    <>
      <SEO
        title={`${project.title} | Case Study & Architecture`}
        description={project.summary}
      />

      <PageHero
        breadcrumbs={breadcrumbs}
        badge={project.category}
        title={project.title}
        description={project.summary}
        backgroundImage={project.image}
      >
        <div className="flex flex-wrap items-center gap-4">
          <Button to="/contact" icon={ArrowRight} iconPosition="right">
            Discuss a Similar System
          </Button>
          {project.liveUrl && (
            <Button
              href={project.liveUrl}
              variant="secondary"
              icon={ExternalLink}
              iconPosition="right"
            >
              Demo Preview (Staging)
            </Button>
          )}
        </div>
      </PageHero>

      {/* Main Case Study Body (Clean White Background) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Visual Image Banner */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 mb-16 aspect-video max-h-[500px] w-full bg-slate-950 shadow-xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-40" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left 2 Columns: Deep Architectural Case Study */}
            <div className="lg:col-span-2 space-y-12">
              {/* 1. Problem Statement */}
              <div className="p-8 rounded-2xl bg-amber-50/60 border border-amber-200">
                <div className="flex items-center gap-3 text-amber-700 font-bold text-lg mb-3">
                  <AlertTriangle className="w-5 h-5 shrink-0 text-amber-600" />
                  <span>The Challenge & Problem Statement</span>
                </div>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  {project.problem}
                </p>
              </div>

              {/* 2. Implemented Technical Solution */}
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-3 text-slate-950 font-bold text-lg mb-3">
                  <Lightbulb className="w-5 h-5 shrink-0 text-amber-500" />
                  <span>The Implemented Solution & System Architecture</span>
                </div>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base mb-6">
                  {project.solution}
                </p>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {project.description}
                </p>
              </div>

              {/* 3. Key Implemented Features */}
              <div>
                <h3 className="text-2xl font-bold text-slate-950 mb-6 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-amber-500" />
                  <span>Key Implemented Features</span>
                </h3>
                <div className="space-y-3">
                  {project.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-800 font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Verified Outcomes & Business Impact */}
              {project.outcomes && project.outcomes.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-slate-950 mb-6 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    <span>Verified Outcomes & Operational Impact</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {project.outcomes.map((outcome, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 flex flex-col justify-between shadow-sm"
                      >
                        <span className="font-bold text-amber-600 mb-2">Metric #{idx + 1}</span>
                        <span className="font-medium">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 5. Additional Visual Gallery */}
              {project.gallery && project.gallery.length > 1 && (
                <div>
                  <h3 className="text-xl font-bold text-slate-950 mb-6">
                    Application Previews
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.gallery.map((imgUrl, idx) => (
                      <div key={idx} className="rounded-xl overflow-hidden border border-slate-200 aspect-video shadow-md">
                        <img
                          src={imgUrl}
                          alt={`${project.title} preview ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Project Meta Sidebar */}
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-slate-900">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-6">
                  Project Metadata
                </h4>

                <div className="space-y-5 text-xs sm:text-sm">
                  <div>
                    <div className="text-slate-400 mb-1 flex items-center gap-1.5 font-medium">
                      <Building className="w-3.5 h-3.5" />
                      <span>Industry Sector</span>
                    </div>
                    <div className="font-bold text-slate-950">{project.clientIndustry}</div>
                  </div>

                  <div className="border-t border-slate-100 pt-4">
                    <div className="text-slate-400 mb-1 flex items-center gap-1.5 font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Development Timeline</span>
                    </div>
                    <div className="font-bold text-slate-950">{project.timeline}</div>
                  </div>

                  <div className="border-t border-slate-100 pt-4">
                    <div className="text-slate-400 mb-1 font-medium">Our Engineering Role</div>
                    <div className="font-bold text-slate-950">{project.role}</div>
                  </div>

                  <div className="border-t border-slate-100 pt-4">
                    <div className="text-slate-400 mb-1 font-medium">Project Status</div>
                    <Badge variant="success" size="xs">
                      {project.status}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Tech Stack Card */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-slate-900">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-amber-500" />
                  <span>Technology Stack</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs rounded-lg bg-amber-50 text-amber-700 border border-amber-200 font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Discuss similar project CTA card */}
              <div className="p-6 rounded-2xl bg-slate-950 text-white border-2 border-slate-900 shadow-xl">
                <h4 className="text-lg font-bold text-white mb-2">
                  Need a similar platform?
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  Let’s schedule a technical consultation to explore your software architecture and delivery timeline.
                </p>
                <Button to="/contact" size="md" icon={ArrowRight} iconPosition="right" className="w-full">
                  Discuss Your Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies (Light Slate Background) */}
      {relatedProjects.length > 0 && (
        <section className="py-20 border-b border-slate-200 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="More Case Studies"
              title="Related Project Implementations"
              subtitle="Explore additional production systems engineered by our team."
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

      {/* Strategic Dark CTA Strip */}
      <section className="py-20 bg-slate-950 text-white text-center border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">
            <span className="w-6 h-0.5 bg-amber-500"></span>
            <span>GET IN TOUCH</span>
            <span className="w-6 h-0.5 bg-amber-500"></span>
          </div>
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Ready to Begin Your Technical Build?
          </h2>
          <p className="text-slate-300 text-sm mb-8">
            Tell us about your requirements and we’ll review your architecture roadmap.
          </p>
          <Button to="/contact" size="lg" icon={ArrowRight} iconPosition="right">
            Start Project Conversation
          </Button>
        </div>
      </section>
    </>
  );
}
