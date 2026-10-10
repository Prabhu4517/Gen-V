import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import SEO from '../components/common/SEO';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import { insightsData } from '../data/insights';

export default function InsightDetail() {
  const { slug } = useParams();
  const article = insightsData.find((item) => item.slug === slug);

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  const relatedArticles = insightsData
    .filter((a) => a.id !== article.id)
    .slice(0, 2);

  return (
    <>
      <SEO
        title={`${article.title} | Engineering Insights`}
        description={article.summary}
        ogType="article"
      />

      <article className="pt-32 pb-24 border-b border-slate-800/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            to="/insights"
            className="inline-flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 font-medium mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Insights</span>
          </Link>

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="primary" size="sm">
              {article.category}
            </Badge>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-indigo-400" />
              {article.readTime}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-indigo-400" />
              {article.publishedAt}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-8">
            {article.title}
          </h1>

          {/* Author Block */}
          <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 mb-10">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-12 h-12 rounded-full object-cover border border-indigo-500/30"
            />
            <div>
              <div className="text-sm font-bold text-white">
                {article.author.name}
              </div>
              <div className="text-xs text-slate-400">
                {article.author.role}
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="rounded-2xl overflow-hidden border border-slate-800/80 aspect-video mb-12 bg-slate-950">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Paragraphs */}
          <div className="space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed font-normal mb-12">
            {article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center gap-2 mb-16">
            <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider mr-2">
              Tags:
            </span>
            {article.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="px-3 py-1 text-xs rounded-lg bg-slate-900 text-slate-300 border border-slate-800"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* CTA Box */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-900/20 via-indigo-900/30 to-purple-900/20 border border-indigo-500/30 text-center">
            <Sparkles className="w-8 h-8 text-indigo-400 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-white mb-2">
              Discuss This Architecture With Our Team
            </h3>
            <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
              Need assistance evaluating whether this technical approach is right for your software product?
            </p>
            <Button to="/contact" size="md" icon={ArrowRight} iconPosition="right">
              Schedule Architecture Review
            </Button>
          </div>
        </div>
      </article>

      {/* Related Insights */}
      {relatedArticles.length > 0 && (
        <section className="py-20 bg-slate-900/30 border-b border-slate-800/60">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h3 className="text-xl font-bold text-white mb-8">
              More Engineering Articles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
                <div
                  key={rel.id}
                  className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-colors"
                >
                  <span className="text-xs text-indigo-400 font-semibold mb-2 block">
                    {rel.category}
                  </span>
                  <h4 className="text-base font-bold text-white mb-2 line-clamp-2">
                    <Link to={`/insights/${rel.slug}`} className="hover:text-indigo-300">
                      {rel.title}
                    </Link>
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2 mb-4">
                    {rel.summary}
                  </p>
                  <Link
                    to={`/insights/${rel.slug}`}
                    className="text-xs font-semibold text-indigo-400 hover:underline"
                  >
                    Read article →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
