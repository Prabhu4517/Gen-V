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
        title="Engineering Insights & Technical Architecture Blog"
        description="Deep dives into software architecture, scalable APIs, AI automation pipelines, and modern mobile app development."
      />

      <PageHero
        breadcrumbs={breadcrumbs}
        badge="Engineering Notes"
        title="Technical Perspectives &"
        highlight="Engineering Insights"
        description="Practical guides, lessons learned from production systems, and architectural deep dives written by our senior development team."
      />

      {/* Categories Filter Strip */}
      <section className="py-8 border-b border-slate-800/60 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2">
            {insightCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-900 text-slate-300 border border-slate-800 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Listing */}
      <section className="py-20 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInsights.map((article) => (
              <article
                key={article.id}
                className="group rounded-2xl bg-slate-900/60 border border-slate-800/80 overflow-hidden backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/50 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge variant="primary" size="xs">
                        {article.category}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                        {article.publishedAt}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-indigo-400" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors line-clamp-2">
                      <Link to={`/insights/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>

                    <p className="text-sm text-slate-400 leading-relaxed mb-6 line-clamp-3">
                      {article.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {article.tags.slice(0, 3).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-800/60 mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={article.author.avatar}
                      alt={article.author.name}
                      className="w-7 h-7 rounded-full object-cover"
                    />
                    <span className="text-xs text-slate-300 font-medium">
                      {article.author.name}
                    </span>
                  </div>

                  <Link
                    to={`/insights/${article.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-400 hover:text-indigo-300 group-hover:translate-x-1 transition-transform"
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

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Have An Architecture Challenge We Can Help Solve?
          </h2>
          <p className="text-slate-400 text-sm mb-8">
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
