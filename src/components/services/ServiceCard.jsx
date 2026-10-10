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
    <div className="group relative rounded-2xl bg-white border border-slate-200/90 hover:border-amber-500 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl hover:shadow-amber-500/10 flex flex-col justify-between">
      {/* Top Accent Gradient Border */}
      <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-amber-500/20 to-transparent group-hover:via-amber-500 transition-all duration-300" />

      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300 shadow-sm">
            <IconComponent className="w-6 h-6" />
          </div>
          <Badge variant="primary" size="xs">
            {service.badge}
          </Badge>
        </div>

        <h3 className="text-xl font-bold text-slate-950 mb-2 group-hover:text-amber-600 transition-colors">
          {service.title}
        </h3>

        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {service.tagline}
        </p>

        {/* Highlight features */}
        <div className="space-y-2 mb-6 border-t border-slate-100 pt-4">
          {service.features.slice(0, 3).map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {service.technologies.slice(0, 3).map((tech, idx) => (
            <span
              key={idx}
              className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          to={`/services/${service.slug}`}
          className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 hover:text-amber-700 group-hover:translate-x-1 transition-all ml-2 shrink-0"
        >
          <span>Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
