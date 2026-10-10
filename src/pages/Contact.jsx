import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import SEO from '../components/common/SEO';
import PageHero from '../components/common/PageHero';
import ContactForm from '../components/forms/ContactForm';
import { companyConfig } from '../data/companyConfig';

export default function Contact() {
  const breadcrumbs = [{ label: 'Contact', path: '/contact' }];

  return (
    <>
      <SEO
        title="Contact Us | Start Your Project Conversation"
        description="Get in touch with Nexora Technologies for custom software development, web & mobile applications, AI automation, and cloud architecture consulting."
      />

      <PageHero
        breadcrumbs={breadcrumbs}
        badge="Get In Touch"
        title="Let’s Discuss Your Product Roadmap &"
        highlight="Technical Requirements"
        description="Whether you have a fully documented specification or an early-stage concept, our technical leads are ready to review your project."
        backgroundImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Main Form and Contact Details Section (Light Slate Background) */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 7 Columns: Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right 5 Columns: Direct Contact Channels & SLA */}
            <div className="lg:col-span-5 space-y-8">
              {/* Direct Channels Card (Clean White) */}
              <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xl text-slate-900">
                <h3 className="text-xl font-black text-slate-950 mb-6">
                  Direct Communication Channels
                </h3>

                <div className="space-y-6 text-sm">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase font-bold">
                        General Inquiries & Sales
                      </div>
                      <a
                        href={`mailto:${companyConfig.contact.email}`}
                        className="text-slate-950 hover:text-amber-600 font-semibold transition-colors"
                      >
                        {companyConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase font-bold">
                        Phone & Technical Scoping
                      </div>
                      <a
                        href={`tel:${companyConfig.contact.phone}`}
                        className="text-slate-950 hover:text-amber-600 font-semibold transition-colors"
                      >
                        {companyConfig.contact.phone}
                      </a>
                    </div>
                  </div>

                  {companyConfig.contact.whatsapp && (
                    <div className="flex items-start gap-3.5">
                      <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 shrink-0">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 uppercase font-bold">
                          Direct WhatsApp Chat
                        </div>
                        <a
                          href={`https://wa.me/${companyConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-emerald-600 hover:text-emerald-700 font-bold transition-colors inline-flex items-center gap-1"
                        >
                          <span>Open WhatsApp Chat</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase font-bold">
                        Working Hours & SLA
                      </div>
                      <div className="text-slate-900 font-semibold">
                        {companyConfig.contact.workingHours}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5 font-medium">
                        Guaranteed response within 24 business hours
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase font-bold">
                        Headquarters & Operations
                      </div>
                      <div className="text-slate-900 font-semibold">
                        {companyConfig.contact.address.street}
                      </div>
                      <div className="text-slate-500 text-xs font-medium">
                        {companyConfig.contact.address.city}, {companyConfig.contact.address.state} {companyConfig.contact.address.zip}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantees Box (Dark Charcoal Accent Box) */}
              <div className="p-6 rounded-2xl bg-slate-950 text-white border-2 border-slate-900 shadow-xl">
                <h4 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-amber-400" />
                  <span>Our Inquiry Guarantees</span>
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>No sales spam or aggressive follow-up tactics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Mutual Non-Disclosure Agreement (NDA) upon request</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Direct discussion with a senior engineer, not a junior rep</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
