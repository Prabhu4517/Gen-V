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
import Card from '../components/common/Card';
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
      >
      </PageHero>

      {/* Main Form and Contact Details Section */}
      <section className="py-24 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 7 Columns: Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right 5 Columns: Direct Contact Channels & SLA */}
            <div className="lg:col-span-5 space-y-8">
              {/* Direct Channels Card */}
              <Card>
                <h3 className="text-xl font-bold text-white mb-6">
                  Direct Communication Channels
                </h3>

                <div className="space-y-6 text-sm">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 uppercase font-semibold">
                        General Inquiries & Sales
                      </div>
                      <a
                        href={`mailto:${companyConfig.contact.email}`}
                        className="text-white hover:text-indigo-300 font-medium transition-colors"
                      >
                        {companyConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 uppercase font-semibold">
                        Phone & Technical Scoping
                      </div>
                      <a
                        href={`tel:${companyConfig.contact.phone}`}
                        className="text-white hover:text-indigo-300 font-medium transition-colors"
                      >
                        {companyConfig.contact.phone}
                      </a>
                    </div>
                  </div>

                  {companyConfig.contact.whatsapp && (
                    <div className="flex items-start gap-3.5">
                      <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 uppercase font-semibold">
                          Direct WhatsApp Chat
                        </div>
                        <a
                          href={`https://wa.me/${companyConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors inline-flex items-center gap-1"
                        >
                          <span>Open WhatsApp Chat</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 uppercase font-semibold">
                        Working Hours & SLA
                      </div>
                      <div className="text-white">
                        {companyConfig.contact.workingHours}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        Guaranteed response within 24 business hours
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 uppercase font-semibold">
                        Headquarters & Operations
                      </div>
                      <div className="text-white">
                        {companyConfig.contact.address.street}
                      </div>
                      <div className="text-slate-400 text-xs">
                        {companyConfig.contact.address.city}, {companyConfig.contact.address.state} {companyConfig.contact.address.zip}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Guarantees Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/40 to-slate-900 border border-indigo-500/20">
                <h4 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-indigo-400" />
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
