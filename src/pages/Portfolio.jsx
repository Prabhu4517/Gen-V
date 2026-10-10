import React, { useState, useMemo } from 'react';
import { Search, Sparkles, ArrowRight } from 'lucide-react';
import SEO from '../components/common/SEO';
import PageHero from '../components/common/PageHero';
import ProjectCard from '../components/portfolio/ProjectCard';
import Button from '../components/common/Button';
import { projectsData, projectCategories } from '../data/projects';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const breadcrumbs = [{ label: 'Portfolio', path: '/portfolio' }];

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        activeCategory === 'All' || project.category === activeCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === '' ||
        project.title.toLowerCase().includes(query) ||
        project.summary.toLowerCase().includes(query) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(query)) ||
        project.clientIndustry.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <>
      <SEO
        title="Portfolio & Case Studies | Delivered Software Projects"
        description="Explore our technical portfolio: custom SaaS platforms, mobile apps, enterprise cloud migrations, and AI workflow automations."
      />

      <PageHero
        breadcrumbs={breadcrumbs}
        badge="Engineered Systems"
        title="Selected Client Products &"
        highlight="Technical Case Studies"
        description="Review detailed architectural breakdowns, implemented solutions, and verified outcomes across web, mobile, AI, and cloud domains."
      />

      {/* Filter and Search Bar Section */}
      <section className="py-12 border-b border-slate-800/60 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Category Buttons */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                      : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search by tech, keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-20 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 bg-slate-900/20 rounded-2xl border border-slate-800/60">
              <Sparkles className="w-10 h-10 text-slate-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">No projects matched your criteria</h3>
              <p className="text-sm text-slate-400 mb-6">
                Try clearing your search query or selecting a different category filter.
              </p>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  setActiveCategory('All');
                  setSearchQuery('');
                }}
              >
                Reset Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Scoping CTA */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Building a Similar Product or Platform?
          </h2>
          <p className="text-slate-400 text-sm mb-8">
            We can architect and deliver your system using these exact battle-tested patterns.
          </p>
          <Button to="/contact" size="lg" icon={ArrowRight} iconPosition="right">
            Discuss Your System Requirements
          </Button>
        </div>
      </section>
    </>
  );
}
