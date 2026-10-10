import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Code2, Smartphone, Bot, Server, Layers, Cloud, Palette, ShieldCheck } from 'lucide-react';
import Badge from '../common/Badge';

// Map icon string names to Lucide icons
const iconMap = {
  Code2,
  Smartphone,
  Bot,
  Server,
  Layers,
  Cloud,
  Palette,
  ShieldCheck
};

export default function ServiceCard({ service }) {
  const IconComponent = iconMap[service.icon] || Code2;

  return (
    <div className="group relative rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/50 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col justify-between">
      {/* Top Accent Gradient Border */}
      <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent group-hover:via-indigo-500 transition-all duration-300" />

      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm">
            <IconComponent className="w-6 h-6" />
          </div>
          <Badge variant="primary" size="xs">
            {service.badge}
          </Badge>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
          {service.title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          {service.tagline}
        </p>

        {/* Highlight features */}
        <div className="space-y-2 mb-6 border-t border-slate-800/60 pt-4">
          {service.features.slice(0, 3).map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {service.technologies.slice(0, 3).map((tech, idx) => (
            <span
              key={idx}
              className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/50"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          to={`/services/${service.slug}`}
          className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-400 hover:text-indigo-300 group-hover:translate-x-0.5 transition-all ml-2 shrink-0"
        >
          <span>Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
