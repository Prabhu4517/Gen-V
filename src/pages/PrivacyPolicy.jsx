import React from 'react';
import SEO from '../components/common/SEO';
import PageHero from '../components/common/PageHero';
import { companyConfig } from '../data/companyConfig';

export default function PrivacyPolicy() {
  const breadcrumbs = [{ label: 'Privacy Policy', path: '/privacy-policy' }];

  return (
    <>
      <SEO
        title="Privacy Policy | Data Protection & Confidentiality"
        description="Review how Nexora Technologies collects, handles, and safeguards client information."
      />

      <PageHero
        breadcrumbs={breadcrumbs}
        badge="Legal & Trust"
        title="Privacy Policy &"
        highlight="Data Protection"
        description="We take information security and client confidentiality seriously. This draft policy outlines our data handling practices."
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-700 text-sm sm:text-base leading-relaxed space-y-8">
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs font-medium">
            <strong>Draft Disclosure:</strong> This document is a structured draft template prepared for {companyConfig.legalName}. Before production deployment under specific international jurisdictions (e.g. GDPR, CCPA), it should be reviewed by qualified legal counsel to align with your organization’s exact server hosting and data handling configurations.
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-950 mb-3">1. Information We Collect</h2>
            <p className="mb-3 text-slate-600">
              When you submit a project inquiry or contact us through our website, we may collect:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-600 text-sm">
              <li>Full Name and Job Title</li>
              <li>Business Email Address and Phone Number</li>
              <li>Company Name and Project Description</li>
              <li>Technical details and specifications voluntarily submitted in scoping forms</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-950 mb-3">2. How We Use Collected Data</h2>
            <p className="text-slate-600 text-sm mb-3">
              We collect information strictly for legitimate commercial and technical purposes:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-600 text-sm">
              <li>To evaluate project feasibility and prepare tailored technical proposals</li>
              <li>To communicate with you regarding your service inquiries and schedule calls</li>
              <li>To fulfill contractual obligations and provide client software maintenance</li>
            </ul>
          </div>

          <div id="security">
            <h2 className="text-xl font-bold text-slate-950 mb-3">3. Data Security & Storage</h2>
            <p className="text-slate-600 text-sm">
              We implement industry-standard encryption, strict access controls, and TLS transport security to protect your communications against unauthorized access, loss, or alteration. We do not sell, rent, or lease client contact lists or project briefs to third-party marketing companies.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-950 mb-3">4. Cookies and Analytical Tools</h2>
            <p className="text-slate-600 text-sm">
              Our website may utilize essential session cookies and privacy-preserving analytics to evaluate page performance and improve user experience. You can configure your browser to reject cookies if preferred.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-950 mb-3">5. Contact Regarding Privacy</h2>
            <p className="text-slate-600 text-sm">
              If you have any questions or wish to request the deletion of your inquiry data, contact our privacy contact at:{' '}
              <a href={`mailto:${companyConfig.contact.email}`} className="text-amber-600 font-bold hover:underline">
                {companyConfig.contact.email}
              </a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
