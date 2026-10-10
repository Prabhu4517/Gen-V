import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle } from 'lucide-react';
import Badge from '../common/Badge';

export default function ProjectCard({ project }) {
  return (
    <div className="group rounded-2xl bg-slate-900/60 border border-slate-800/80 overflow-hidden backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/50 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col justify-between">
      <div>
        {/* Project Thumbnail Image with Gradient Overlay */}
        <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

          {/* Badges on top of image */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            <Badge variant="primary" size="xs">
              {project.category}
            </Badge>
            {project.featured && (
              <Badge variant="accent" size="xs">
                Featured Case Study
              </Badge>
            )}
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6">
          <div className="text-xs text-indigo-400 font-semibold mb-1 uppercase tracking-wider">
            {project.clientIndustry}
          </div>

          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors line-clamp-1">
            {project.title}
          </h3>

          <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
            {project.summary}
          </p>

          {/* Key Outcome Highlight */}
          {project.outcomes && project.outcomes.length > 0 && (
            <div className="mb-4 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/60 flex items-start gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span className="text-xs text-slate-300 line-clamp-1">
                {project.outcomes[0]}
              </span>
            </div>
          )}

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/50"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-[11px] text-slate-400 px-1 py-0.5">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="px-6 pb-6 pt-2 border-t border-slate-800/60 flex items-center justify-between">
        <span className="text-xs text-slate-400 font-medium">
          Timeline: {project.timeline}
        </span>
        <Link
          to={`/portfolio/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 group-hover:translate-x-0.5 transition-all"
        >
          <span>View Case Study</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
