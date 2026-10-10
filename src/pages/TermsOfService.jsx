import React from 'react';
import SEO from '../components/common/SEO';
import PageHero from '../components/common/PageHero';
import { companyConfig } from '../data/companyConfig';

export default function TermsOfService() {
  const breadcrumbs = [{ label: 'Terms of Service', path: '/terms-of-service' }];

  return (
    <>
      <SEO
        title="Terms of Service | Website & Service Terms"
        description="Terms of service and engagement principles for Nexora Technologies."
      />

      <PageHero
        breadcrumbs={breadcrumbs}
        badge="Legal & Terms"
        title="Terms of Service &"
        highlight="Engagement Terms"
        description="The terms governing the use of our website and client service engagements."
      />

      <section className="py-20 border-b border-slate-800/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-300 text-sm sm:text-base leading-relaxed space-y-8">
          <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-500/30 text-amber-200 text-xs">
            <strong>Draft Disclosure:</strong> These website terms represent a standard draft. Formal engineering engagements and client software deliveries are governed by individually executed Master Services Agreements (MSA) and Statements of Work (SOW).
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">1. Agreement to Terms</h2>
            <p className="text-slate-400 text-sm">
              By accessing the website of {companyConfig.legalName}, you agree to adhere to these Terms of Service, applicable laws, and regulations. If you disagree with any portion of these terms, please discontinue using this website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">2. Intellectual Property & Client Deliverables</h2>
            <p className="text-slate-400 text-sm mb-3">
              Content, trademarks, and design elements published on this website are the property of {companyConfig.name}.
            </p>
            <p className="text-slate-400 text-sm">
              For custom software engineering engagements, intellectual property ownership is transferred to the client upon full payment of the agreed project milestones as stipulated in the applicable Master Services Agreement.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">3. Disclaimer of Warranties</h2>
            <p className="text-slate-400 text-sm">
              The informational materials on this website are provided "as is" for informational and scoping purposes without warranties of any kind, whether express or implied.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">4. Limitation of Liability</h2>
            <p className="text-slate-400 text-sm">
              In no event shall {companyConfig.name} or its affiliates be liable for any indirect, incidental, or consequential damages arising out of the use or inability to use this website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">5. Inquiries & Legal Notices</h2>
            <p className="text-slate-400 text-sm">
              For questions regarding these terms, contact us at:{' '}
              <a href={`mailto:${companyConfig.contact.email}`} className="text-indigo-400 hover:underline">
                {companyConfig.contact.email}
              </a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
