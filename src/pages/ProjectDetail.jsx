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
import Card from '../components/common/Card';
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

      {/* Main Case Study Body */}
      <section className="py-20 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Visual Image Banner */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-800/80 mb-16 aspect-video max-h-[500px] w-full bg-slate-950">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left 2 Columns: Deep Architectural Case Study */}
            <div className="lg:col-span-2 space-y-12">
              {/* 1. Problem Statement */}
              <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80">
                <div className="flex items-center gap-3 text-amber-400 font-bold text-lg mb-3">
                  <AlertTriangle className="w-5 h-5 shrink-0" />
                  <span>The Challenge & Problem Statement</span>
                </div>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  {project.problem}
                </p>
              </div>

              {/* 2. Implemented Technical Solution */}
              <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80">
                <div className="flex items-center gap-3 text-indigo-400 font-bold text-lg mb-3">
                  <Lightbulb className="w-5 h-5 shrink-0" />
                  <span>The Implemented Solution & System Architecture</span>
                </div>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-6">
                  {project.solution}
                </p>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {project.description}
                </p>
              </div>

              {/* 3. Key Implemented Features */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-indigo-400" />
                  <span>Key Implemented Features</span>
                </h3>
                <div className="space-y-3">
                  {project.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/70 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-200">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Verified Outcomes & Business Impact */}
              {project.outcomes && project.outcomes.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    <span>Verified Outcomes & Operational Impact</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {project.outcomes.map((outcome, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-xl bg-gradient-to-br from-indigo-950/40 to-slate-900 border border-indigo-500/20 text-xs sm:text-sm text-slate-200 flex flex-col justify-between"
                      >
                        <span className="font-semibold text-emerald-400 mb-2">Metric #{idx + 1}</span>
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 5. Additional Visual Gallery */}
              {project.gallery && project.gallery.length > 1 && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-6">
                    Application Previews
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.gallery.map((imgUrl, idx) => (
                      <div key={idx} className="rounded-xl overflow-hidden border border-slate-800 aspect-video">
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
              <Card>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-6">
                  Project Metadata
                </h4>

                <div className="space-y-5 text-xs sm:text-sm">
                  <div>
                    <div className="text-slate-500 mb-1 flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5" />
                      <span>Industry Sector</span>
                    </div>
                    <div className="font-medium text-white">{project.clientIndustry}</div>
                  </div>

                  <div className="border-t border-slate-800/80 pt-4">
                    <div className="text-slate-500 mb-1 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Development Timeline</span>
                    </div>
                    <div className="font-medium text-white">{project.timeline}</div>
                  </div>

                  <div className="border-t border-slate-800/80 pt-4">
                    <div className="text-slate-500 mb-1">Our Engineering Role</div>
                    <div className="font-medium text-white">{project.role}</div>
                  </div>

                  <div className="border-t border-slate-800/80 pt-4">
                    <div className="text-slate-500 mb-1">Project Status</div>
                    <Badge variant="success" size="xs">
                      {project.status}
                    </Badge>
                  </div>
                </div>
              </Card>

              {/* Tech Stack Card */}
              <Card>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-indigo-400" />
                  <span>Technology Stack</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs rounded-lg bg-slate-950 text-indigo-300 border border-slate-800 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>

              {/* Discuss similar project CTA card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/80 to-slate-900 border border-indigo-500/40">
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

      {/* Related Case Studies */}
      {relatedProjects.length > 0 && (
        <section className="py-20 border-b border-slate-800/60 bg-slate-900/30">
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

      {/* Scoping CTA */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Begin Your Technical Build?
          </h2>
          <p className="text-slate-400 text-sm mb-8">
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
