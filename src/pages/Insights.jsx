import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import SEO from '../components/common/SEO';
import PageHero from '../components/common/PageHero';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import { insightsData, insightCategories } from '../data/insights';

export default function Insights() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const breadcrumbs = [{ label: 'Insights', path: '/insights' }];

  const filteredInsights =
    selectedCategory === 'All'
      ? insightsData
      : insightsData.filter((item) => item.category === selectedCategory);

  return (
    <>
      <SEO
        title="Engineering Insights & Technology Articles | GEN V SOLUTIONS"
        description="Deep dives into cloud architecture, AI automation, full-stack performance profiling, DevOps security, and modern web engineering."
        canonical="/insights"
      />

      <PageHero
        breadcrumbs={breadcrumbs}
        badge="Engineering Notes"
        title="Technical Perspectives &"
        highlight="Engineering Insights"
        description="Practical guides, lessons learned from production systems, and architectural deep dives written by our senior development team."
        backgroundImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Categories Filter Strip (Light Slate Background) */}
      <section className="py-8 border-b border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2">
            {insightCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-amber-400 hover:text-slate-950 shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Listing (Clean White Background) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInsights.map((article) => (
              <article
                key={article.id}
                className="group rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm transition-all duration-300 hover:border-amber-500 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge variant="primary" size="xs">
                        {article.category}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-slate-500 font-medium mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-amber-500" />
                        {article.publishedAt}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-amber-500" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-950 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
                      <Link to={`/insights/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6 line-clamp-3">
                      {article.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {article.tags.slice(0, 3).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={article.author.avatar}
                      alt={article.author.name}
                      className="w-7 h-7 rounded-full object-cover border border-amber-500"
                    />
                    <span className="text-xs text-slate-800 font-bold">
                      {article.author.name}
                    </span>
                  </div>

                  <Link
                    to={`/insights/${article.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 hover:text-amber-700 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
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
            Have An Architecture Challenge We Can Help Solve?
          </h2>
          <p className="text-slate-300 text-sm mb-8">
            Speak directly with our senior software architects about your product challenges.
          </p>
          <Button to="/contact" size="lg" icon={ArrowRight} iconPosition="right">
            Request Architectural Discussion
          </Button>
        </div>
      </section>
    </>
  );
}
