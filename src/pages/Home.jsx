import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Phone,
  Award,
  Check,
  Plus,
  Star,
  Code,
  Cloud,
  Database,
  Cpu,
  ShieldCheck,
  Sparkles,
  Send,
  Clock,
  Layout,
  ExternalLink,
  Activity,
  TrendingUp,
  Zap,
  Globe,
  ShoppingBag,
  CreditCard,
  Lock,
  Building2
} from 'lucide-react';
import SEO from '../components/common/SEO';
import Button from '../components/common/Button';
import { projectsData } from '../data/projects';
import { insightsData } from '../data/insights';
import { companyConfig } from '../data/companyConfig';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [consultForm, setConsultForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Custom Software Development'
  });

  const featuredProjects = projectsData.slice(0, 4);

  const testimonials = [
    {
      name: "Marcus Vance",
      role: "CTO, FleetStream Logistics",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      content: "GEN V transformed our legacy dispatch system into an event-driven microservices architecture. Our throughput increased by 400% with zero downtime during the cutover.",
      rating: 5
    },
    {
      name: "Sophia Rodriguez",
      role: "Founder, CarePulse Health",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
      content: "Their disciplined two-week sprints and proactive architecture guidance made all the difference. We launched our HIPAA-compliant portal a full month ahead of schedule.",
      rating: 5
    }
  ];

  const whyChooseItems = [
    {
      title: "Reasonable Cost & Agile Delivery",
      description: "Predictable 2-week agile sprint cycles with transparent sprint velocity, daily standup notes, and bi-weekly staging demonstrations so you see tangible return on investment.",
      icon: Clock
    },
    {
      title: "Growth Solutions for Your Tech Troubles",
      description: "We don't build temporary fixes. Our software architects construct modular, maintainable systems designed to handle 10x spikes in traffic without architectural rewrites.",
      icon: Cpu
    },
    {
      title: "24/7 Dedicated Support & Zero Downtime SLA",
      description: "Enterprise level SLA monitoring, automated error tracking with Sentry, and high-availability cloud infrastructure across multi-region AWS and Google Cloud deployments.",
      icon: ShieldCheck
    }
  ];

  const clientLogosRow1 = [
    {
      name: "Apex Capital",
      category: "FinTech & Trading",
      icon: TrendingUp,
      accent: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20"
    },
    {
      name: "CarePulse Health",
      category: "Digital Healthcare",
      icon: Activity,
      accent: "text-rose-500 bg-rose-500/10 border-rose-500/20"
    },
    {
      name: "CloudScale Systems",
      category: "Enterprise Cloud",
      icon: Cloud,
      accent: "text-blue-500 bg-blue-500/10 border-blue-500/20"
    },
    {
      name: "Hyperion Energy",
      category: "Smart Grid Tech",
      icon: Zap,
      accent: "text-amber-500 bg-amber-500/10 border-amber-500/20"
    },
    {
      name: "OmniRetail Group",
      category: "E-Commerce Logistics",
      icon: ShoppingBag,
      accent: "text-violet-500 bg-violet-500/10 border-violet-500/20"
    },
    {
      name: "Synthetix AI",
      category: "Autonomous Systems",
      icon: Cpu,
      accent: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20"
    },
    {
      name: "Vanguard Global",
      category: "Supply Chain",
      icon: Globe,
      accent: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20"
    },
    {
      name: "CyberShield Security",
      category: "Zero-Trust Defense",
      icon: ShieldCheck,
      accent: "text-teal-500 bg-teal-500/10 border-teal-500/20"
    }
  ];

  const clientLogosRow2 = [
    {
      name: "Quantum Payments",
      category: "Cross-Border PayTech",
      icon: CreditCard,
      accent: "text-amber-500 bg-amber-500/10 border-amber-500/20"
    },
    {
      name: "PulseData Analytics",
      category: "Big Data & BI",
      icon: Database,
      accent: "text-sky-500 bg-sky-500/10 border-sky-500/20"
    },
    {
      name: "Fortress Vault",
      category: "Cyber Defense",
      icon: Lock,
      accent: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20"
    },
    {
      name: "Nexus Enterprise",
      category: "B2B SaaS Architecture",
      icon: Building2,
      accent: "text-purple-500 bg-purple-500/10 border-purple-500/20"
    },
    {
      name: "Aura Creative",
      category: "Digital Media Studios",
      icon: Sparkles,
      accent: "text-pink-500 bg-pink-500/10 border-pink-500/20"
    },
    {
      name: "FleetStream Logistics",
      category: "Fleet Telematics",
      icon: Globe,
      accent: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20"
    },
    {
      name: "Helix BioTech",
      category: "Health Diagnostics",
      icon: Activity,
      accent: "text-red-500 bg-red-500/10 border-red-500/20"
    },
    {
      name: "Starlight Digital",
      category: "Cloud Media Delivery",
      icon: Layout,
      accent: "text-amber-500 bg-amber-500/10 border-amber-500/20"
    }
  ];

  const handleConsultSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-white text-slate-900 selection:bg-amber-500 selection:text-slate-950">
      <SEO
        title="GEN V SOLUTIONS | IT Software Development & Technology Solutions"
        description="GEN V SOLUTIONS builds custom software, web and mobile applications, AI automation, SaaS platforms, API integrations, and cloud solutions for businesses."
        canonical="/"
        ogImage="/og-image.png"
      />

      {/* =========================================================
          1. HERO SECTION (Dark theme with floating yellow stats)
         ========================================================= */}
      <section className="relative bg-slate-950 text-white pt-36 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
        {/* Background photo overlay */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2000&q=80"
            alt="IT Software Solutions Engineering Team"
            loading="eager"
            fetchPriority="high"
            className="w-full h-full object-cover object-center opacity-70 brightness-100 contrast-110"
          />
          {/* Directional gradient: darker on left for text readability, clear on right for vivid image view */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/65 to-slate-950/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6">
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/15 text-amber-400 border border-amber-500/30">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                <span>IT CERTIFIED SOLUTIONS</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[1.08]">
                IT SOFTWARE <br />
                <span className="text-amber-500">TECH & SOLUTIONS</span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                We build bespoke software engineering, enterprise cloud solutions, and scalable digital architectures to transform visionary ideas into resilient products.
              </p>

              {/* Dual Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button to="/services" size="lg" icon={ArrowRight} iconPosition="right">
                  Discover More
                </Button>
                <Button to="/process" variant="secondary" size="lg">
                  How We Work
                </Button>
              </div>
            </div>

            {/* Right Side / Blank to leave room for visual breathing space */}
            <div className="hidden lg:block lg:col-span-4" />
          </div>
        </div>

        {/* FLOATING AMBER DUAL-STATISTIC BOX (Signature Template Motif) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 mt-12 lg:mt-0">
          <div className="lg:absolute lg:right-8 lg:-bottom-12 flex flex-col sm:flex-row shadow-2xl rounded-xl overflow-hidden border-4 border-slate-900">
            {/* Left Box */}
            <div className="bg-amber-500 text-slate-950 px-8 py-6 text-center sm:text-left flex items-center gap-4 border-b sm:border-b-0 sm:border-r border-amber-600/30">
              <div className="w-12 h-12 rounded-lg bg-slate-950/10 flex items-center justify-center shrink-0">
                <Sparkles className="w-6 h-6 text-slate-950" />
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950">99.0K</div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-900/80">Satisfied Clients</div>
              </div>
            </div>

            {/* Right Box */}
            <div className="bg-amber-400 text-slate-950 px-8 py-6 text-center sm:text-left flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-slate-950/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-slate-950" />
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950">100%</div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-900/80">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. ABOUT / SOLUTION SECTION ("Provide the Best Easy Solution")
         ========================================================= */}
      <section className="py-24 lg:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Photo Collage with Yellow Corner Borders */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Large Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl yellow-corner-frame">
                  <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
                    alt="Engineers collaborating on software"
                    className="w-full h-[360px] sm:h-[420px] object-cover"
                  />
                </div>

                {/* Secondary Inset Image */}
                <div className="absolute -bottom-8 -right-4 sm:-bottom-10 sm:-right-6 w-3/5 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 hidden sm:block z-10">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
                    alt="Software Engineer"
                    className="w-full h-48 sm:h-52 object-cover object-top"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-slate-950/80 backdrop-blur-sm px-3 py-1.5 rounded-lg text-white flex items-center justify-between border border-white/10">
                    <span className="text-[11px] font-bold text-amber-400">Senior Engineers</span>
                    <span className="text-[10px] text-slate-300">Sprint Delivery</span>
                  </div>
                </div>

                {/* Floating Hotline Badge */}
                <div className="absolute -top-6 -left-2 sm:-left-6 bg-slate-950 text-white p-4 rounded-xl shadow-xl border-2 border-amber-500 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-slate-950 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Call Us Anytime</div>
                    <div className="text-sm font-bold text-amber-400">{companyConfig.contact.phone}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Information & Bullet List */}
            <div className="lg:col-span-6 space-y-6 pt-6 lg:pt-0">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-600">
                <span className="w-8 h-0.5 bg-amber-500"></span>
                <span>ABOUT OUR COMPANY</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                Provide the Best Easy Solution for Your IT Problem
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We provide high-impact technical consulting, bespoke software engineering, and digital infrastructure to solve complex bottlenecks. With senior architects and agile sprint delivery, we ensure your tech is built to scale.
              </p>

              {/* Two Feature Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Cloud className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Managed Tech Services</h4>
                    <p className="text-xs text-slate-500 mt-1">Continuous DevOps orchestration and cloud health monitoring.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Code className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">IT Consulting Solutions</h4>
                    <p className="text-xs text-slate-500 mt-1">Strategic discovery audits, technical roadmap, and system scaling.</p>
                  </div>
                </div>
              </div>

              {/* Checklist */}
              <div className="space-y-2.5 pt-2 text-sm font-semibold text-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Stop Solutions IT Manager, 24/7 Dedicated Service Desk</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Cross-Platform Modern Applications & Cloud Server Clusters</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Zero-Trust Enterprise Security Architect & Code IP Ownership</span>
                </div>
              </div>

              {/* Action & Trophy Box */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <Button to="/about" size="md" icon={ArrowRight} iconPosition="right">
                  Discover More
                </Button>

                <div className="flex items-center gap-3.5 px-4 py-2 rounded-xl bg-amber-50 border border-amber-200 text-slate-900">
                  <div className="w-10 h-10 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-black uppercase text-amber-700 tracking-wider">Award Winning Agency</div>
                    <div className="text-xs text-slate-600 font-medium">8+ Years Enterprise Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. SERVICES SECTION ("Services We're providing to Our Customers")
         ========================================================= */}
      <section className="py-24 bg-slate-950 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400">
              <span className="w-6 h-0.5 bg-amber-500"></span>
              <span>WHAT WE PROVIDE</span>
              <span className="w-6 h-0.5 bg-amber-500"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Services We're providing to Our Customers
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Explore our core engineering practices designed to deliver exceptional reliability, speed, and business outcomes.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                id: "ui-ux-design",
                title: "UI/UX Designing",
                icon: Layout,
                image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
                description: "Design systems, rapid interactive prototypes, and intuitive interfaces optimized for maximum user conversion."
              },
              {
                id: "custom-software-development",
                title: "Digital Marketing & Growth",
                icon: Sparkles,
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
                description: "Search engine architecture, performance optimization, and data-driven customer acquisition pipelines."
              },
              {
                id: "ai-workflow-automation",
                title: "Data Analysis & AI",
                icon: Database,
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
                description: "Enterprise RAG pipelines, predictive analytics dashboards, and autonomous workflow bots."
              },
              {
                id: "cloud-devops-infrastructure",
                title: "Cloud & Cybersecurity",
                icon: ShieldCheck,
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
                description: "Kubernetes orchestration, automated CI/CD pipelines, and zero-trust security postures."
              }
            ].map((srv, idx) => {
              const IconComponent = srv.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-amber-500 transition-all duration-300 flex flex-col hover:-translate-y-2 shadow-xl hover:shadow-2xl"
                >
                  {/* Photo Thumbnail */}
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-transparent transition-colors" />

                    {/* Circular Icon Badge Sitting on Top Center */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-lg border-4 border-white z-10 transition-transform duration-300 group-hover:scale-110">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 pt-10 text-center flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-slate-950 mb-2 group-hover:text-amber-600 transition-colors">
                        {srv.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                        {srv.description}
                      </p>
                    </div>

                    {/* Action Button */}
                    <div className="pt-2">
                      <Link
                        to={`/services`}
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-700 hover:bg-amber-500 hover:text-slate-950 transition-all shadow-sm border border-slate-200"
                        aria-label={`Explore ${srv.title}`}
                      >
                        <Plus className="w-4 h-4 font-bold" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button to="/services" variant="outline" icon={ArrowRight} iconPosition="right">
              Explore All 8 Practice Areas
            </Button>
          </div>
        </div>
      </section>

      {/* =========================================================
          4. BRAND TICKER / PARTNER STRIP (Bright Amber Ribbon)
         ========================================================= */}
      <section className="bg-amber-500 py-4 sm:py-5 text-slate-950 overflow-hidden shadow-inner border-y border-amber-600/30">
        <div className="relative w-full overflow-hidden flex">
          <div className="animate-ticker flex items-center gap-8 sm:gap-12 whitespace-nowrap font-black text-xs sm:text-sm md:text-base tracking-widest uppercase">
            {[
              "# ENVATO",
              "# MICROSOFT",
              "# AMAZON AWS",
              "# GOOGLE CLOUD",
              "# STRIPE",
              "# VERCEL",
              "# DOCKER",
              "# KUBERNETES",
              "# GITHUB",
              "# REACT",
              "# NODE.JS",
              "# NEXT.JS"
            ].concat([
              "# ENVATO",
              "# MICROSOFT",
              "# AMAZON AWS",
              "# GOOGLE CLOUD",
              "# STRIPE",
              "# VERCEL",
              "# DOCKER",
              "# KUBERNETES",
              "# GITHUB",
              "# REACT",
              "# NODE.JS",
              "# NEXT.JS"
            ]).map((tag, idx) => (
              <span
                key={idx}
                className="flex items-center gap-8 sm:gap-12 shrink-0 opacity-90 hover:opacity-100 transition-opacity select-none"
              >
                <span>{tag}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-950/40" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          5. "Why You should Choose Our Technology Company?"
         ========================================================= */}
      <section className="py-24 bg-slate-50 text-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Accordion / Feature Points */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-600">
                <span className="w-8 h-0.5 bg-amber-500"></span>
                <span>WHY CHOOSE US</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                Why You should Choose Our Technology Company?
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We believe in full engineering transparency. You get complete codebase ownership, dedicated senior engineers, and predictable milestone deliveries.
              </p>

              {/* Accordion / Card items */}
              <div className="space-y-4 pt-2">
                {whyChooseItems.map((item, index) => {
                  const isOpen = activeFaq === index;
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className={`p-5 rounded-xl border transition-all duration-200 cursor-pointer ${isOpen
                        ? 'bg-white border-amber-500 shadow-md'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      onClick={() => setActiveFaq(isOpen ? -1 : index)}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3.5">
                          <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${isOpen ? 'bg-amber-500 text-slate-950' : 'bg-slate-100 text-slate-700'}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                            {item.title}
                          </h4>
                        </div>
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-transform ${isOpen ? 'bg-amber-500 text-slate-950 rotate-45' : 'bg-slate-100 text-slate-600'}`}>
                          <Plus className="w-4 h-4" />
                        </div>
                      </div>

                      {isOpen && (
                        <div className="pt-3 pl-12 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-3">
                          {item.description}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="pt-4">
                <Button to="/contact" size="md" icon={ArrowRight} iconPosition="right">
                  Get In Touch
                </Button>
              </div>
            </div>

            {/* Right: Angled photo with yellow geometric frames */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Yellow frame accent backplate */}
                <div className="absolute -inset-4 bg-amber-500 rounded-3xl transform rotate-2 opacity-90 shadow-xl" />

                {/* Team photo */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                    alt="Engineers working together smiling"
                    className="w-full h-[400px] sm:h-[480px] object-cover"
                  />

                  {/* Overlay Experience Box */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/90 backdrop-blur-md border border-amber-500/50 text-white flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-black text-amber-400">100% IP Ownership</div>
                      <div className="text-xs text-slate-300">Signed NDAs & Direct GitHub Access</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          6. "What Customers are Saying?" (Testimonials)
         ========================================================= */}
      <section className="py-24 bg-white text-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-600">
              <span className="w-6 h-0.5 bg-amber-500"></span>
              <span>TESTIMONIALS</span>
              <span className="w-6 h-0.5 bg-amber-500"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              What Customers are Saying?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Verified reviews from enterprise CTOs and high-growth venture leaders who rely on GEN V engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-amber-500 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>

                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-6">
                    "{t.content}"
                  </p>
                </div>

                <div className="flex items-center gap-3.5 pt-4 border-t border-slate-200">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-amber-500"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                    <p className="text-xs text-slate-500 font-medium">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          OUR CLIENTS & PARTNERS AUTO-CAROUSEL SECTION
         ========================================================= */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/80 text-slate-900 relative overflow-hidden">
        {/* Subtle background ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-amber-500/5 blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-600 mb-3">
            <span className="w-6 h-0.5 bg-amber-500"></span>
            <span>OUR CLIENTS & PARTNERS</span>
            <span className="w-6 h-0.5 bg-amber-500"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Trusted by Industry Leaders & Fast-Growing Startups
          </h2>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mt-3">
            From high-throughput FinTech platforms to enterprise healthcare architectures, over 200+ technology leaders scale their digital products with GEN V.
          </p>

          {/* Quick Metrics Bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-6 text-xs sm:text-sm font-bold text-slate-700">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-amber-500" />
              <span>200+ Enterprise Deployments</span>
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-amber-500" />
              <span>99.2% SLA Uptime</span>
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-amber-500" />
              <span>15+ Global Industries</span>
            </span>
          </div>
        </div>

        {/* Continuous Auto-Carousel with Edge Fades */}
        <div className="relative w-full overflow-hidden space-y-4">
          {/* Edge Fades for cinematic look */}
          <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

          {/* Row 1: Smooth Left Flow */}
          <div className="flex w-full overflow-hidden">
            <div className="animate-ticker flex items-center gap-4 sm:gap-6 py-1">
              {[...clientLogosRow1, ...clientLogosRow1].map((client, idx) => {
                const Icon = client.icon;
                return (
                  <div
                    key={idx}
                    className="w-56 sm:w-64 p-4 rounded-xl bg-white border border-slate-200/90 hover:border-amber-500 hover:shadow-lg transition-all duration-300 flex items-center gap-3.5 shrink-0 group select-none shadow-sm cursor-default"
                  >
                    <div className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 border ${client.accent} group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="truncate">
                      <div className="font-bold text-slate-900 text-sm group-hover:text-amber-600 transition-colors truncate">
                        {client.name}
                      </div>
                      <div className="text-[11px] font-medium text-slate-500 truncate">
                        {client.category}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Row 2: Smooth Reverse Right Flow */}
          <div className="flex w-full overflow-hidden">
            <div className="animate-ticker-reverse flex items-center gap-4 sm:gap-6 py-1">
              {[...clientLogosRow2, ...clientLogosRow2].map((client, idx) => {
                const Icon = client.icon;
                return (
                  <div
                    key={idx}
                    className="w-56 sm:w-64 p-4 rounded-xl bg-white border border-slate-200/90 hover:border-amber-500 hover:shadow-lg transition-all duration-300 flex items-center gap-3.5 shrink-0 group select-none shadow-sm cursor-default"
                  >
                    <div className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 border ${client.accent} group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="truncate">
                      <div className="font-bold text-slate-900 text-sm group-hover:text-amber-600 transition-colors truncate">
                        {client.name}
                      </div>
                      <div className="text-[11px] font-medium text-slate-500 truncate">
                        {client.category}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          7. "Our Recently Completed Latest Projects"
         ========================================================= */}
      <section className="py-24 bg-slate-950 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400">
                <span className="w-6 h-0.5 bg-amber-500"></span>
                <span>FEATURED WORK</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Our Recently Completed Latest Projects
              </h2>
            </div>
            <Button to="/portfolio" variant="outline" icon={ArrowRight} iconPosition="right">
              View All Projects
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-xl overflow-hidden border border-slate-100 hover:border-amber-500 transition-all duration-300 flex flex-col shadow-xl hover:-translate-y-1.5"
              >
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-amber-500 text-slate-950 text-[10px] font-bold uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-slate-950 text-base mb-1.5 group-hover:text-amber-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  <Link
                    to={`/portfolio/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:text-amber-700 transition-colors"
                  >
                    <span>View Case Study</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          8. CONSULTATION INTAKE STRIP (Fast IT Problem Solution)
         ========================================================= */}
      <section className="py-20 bg-slate-900 text-white border-y border-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading & Value Prop */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                <span className="w-6 h-0.5 bg-amber-500"></span>
                <span>FAST IT CONSULTATION</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Need Fast IT Solution for Your Business?
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Book a 30-minute discovery call with our principal architects. We review your requirements, propose architectural paths, and provide transparent milestone pricing.
              </p>

              <div className="pt-2 flex items-center gap-4 text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-amber-400" />
                  Free 30-Min Discovery
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-amber-400" />
                  Signed NDA Guarantee
                </span>
              </div>
            </div>

            {/* Right Column: Fast Form */}
            <div className="lg:col-span-7">
              <div className="bg-slate-950 p-6 sm:p-8 rounded-2xl border-2 border-amber-500/60 shadow-2xl">
                {formSubmitted ? (
                  <div className="text-center py-8 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center mx-auto font-bold">
                      <Check className="w-6 h-6 stroke-[3]" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Consultation Request Received!</h3>
                    <p className="text-xs text-slate-400 max-w-md mx-auto">
                      Thank you, {consultForm.name || 'Friend'}. A Senior Solution Architect from GEN V will reach out within 24 business hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleConsultSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={consultForm.name}
                          onChange={(e) => setConsultForm({ ...consultForm, name: e.target.value })}
                          placeholder="e.g. John Doe"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                          Business Email
                        </label>
                        <input
                          type="email"
                          required
                          value={consultForm.email}
                          onChange={(e) => setConsultForm({ ...consultForm, email: e.target.value })}
                          placeholder="john@company.com"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={consultForm.phone}
                          onChange={(e) => setConsultForm({ ...consultForm, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                          Primary Requirement
                        </label>
                        <select
                          value={consultForm.service}
                          onChange={(e) => setConsultForm({ ...consultForm, service: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                        >
                          <option>Custom Software Development</option>
                          <option>Cloud & DevOps Migration</option>
                          <option>AI Workflow & Automation</option>
                          <option>Mobile App Engineering</option>
                          <option>UI/UX Product Design</option>
                        </select>
                      </div>
                    </div>

                    <Button type="submit" size="md" icon={Send} iconPosition="right" className="w-full mt-2">
                      Request Consultation
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          9. "Latest News & Articles from Our Blog Posts"
         ========================================================= */}
      <section className="py-24 bg-white text-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-600">
              <span className="w-6 h-0.5 bg-amber-500"></span>
              <span>FROM OUR BLOG</span>
              <span className="w-6 h-0.5 bg-amber-500"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              Latest News & Articles from Our Blog Posts
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Technical breakdowns, architecture playbooks, and engineering insights from our practitioners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insightsData.slice(0, 3).map((article, idx) => (
              <div
                key={article.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-amber-500 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                {/* Image with date badge */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Amber Date Badge */}
                  <div className="absolute top-3 left-3 bg-amber-500 text-slate-950 px-3 py-1.5 rounded-lg text-center font-black shadow-md">
                    <span className="text-xs uppercase tracking-wider block">
                      {idx === 0 ? '14 MAY' : idx === 1 ? '22 JUN' : '30 AUG'}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-amber-600 mb-2">
                      {article.category} • {article.readTime}
                    </div>
                    <h3 className="font-bold text-slate-950 text-base mb-2 group-hover:text-amber-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                      {article.summary}
                    </p>
                  </div>

                  <Link
                    to={`/insights/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors pt-2 border-t border-slate-100"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button to="/insights" variant="outline" icon={ArrowRight} iconPosition="right">
              View All Engineering Insights
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
