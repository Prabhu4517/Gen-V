import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { servicesData } from '../../data/services';
import { submitEnquiry } from '../../services/enquiryService';
import Button from '../common/Button';

const budgetOptions = [
  'Under $5,000 (Consultation / Scope)',
  '$5,000 - $15,000 (Targeted MVP / Web Portal)',
  '$15,000 - $35,000 (Full-Scale Custom Application)',
  '$35,000 - $75,000+ (Enterprise Platform / Ecosystem)',
  'Undetermined / Need Architectural Scoping'
];

export default function ContactForm({ preselectedService = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    phone: '',
    service: preselectedService || '',
    budget: '',
    description: '',
    privacyConsent: false,
    botField: '' // Honeypot field
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear specific field error when typed
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionResult(null);

    const result = await submitEnquiry(formData);
    setIsSubmitting(false);

    if (result.success) {
      setSubmissionResult({
        type: 'success',
        isDemoMode: result.isDemoMode,
        message: result.message
      });
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        companyName: '',
        phone: '',
        service: '',
        budget: '',
        description: '',
        privacyConsent: false,
        botField: ''
      });
      setErrors({});
    } else {
      if (result.validationErrors) {
        setErrors(result.validationErrors);
      }
      setSubmissionResult({
        type: 'error',
        message: result.message || 'There was an error processing your inquiry.'
      });
    }
  };

  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-10 shadow-xl relative text-slate-900">
      {/* Decorative gradient corner */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-bl-full pointer-events-none blur-xl" />

      <div className="mb-8">
        <h3 className="text-2xl font-black text-slate-950 mb-2 flex items-center gap-2">
          <span>Start a Technical Discussion</span>
          <Sparkles className="w-5 h-5 text-amber-500" />
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          Tell us about your product roadmap, engineering bottleneck, or new software idea. We respond with technical insights within 24 business hours.
        </p>
      </div>

      {submissionResult && submissionResult.type === 'success' && (
        <div className="mb-8 p-5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-emerald-800 text-sm mb-1">
                Inquiry Received
              </h4>
              <p className="text-xs leading-relaxed text-emerald-700">
                {submissionResult.message}
              </p>
              {submissionResult.isDemoMode && (
                <div className="mt-2.5 p-2 rounded bg-emerald-100 border border-emerald-200 text-[11px] text-emerald-800 font-medium">
                  <strong>Notice:</strong> To connect live submissions to your CRM or SMTP, configure your backend endpoint in <code className="bg-white px-1 py-0.5 rounded border border-emerald-200">src/data/companyConfig.js</code>.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {submissionResult && submissionResult.type === 'error' && (
        <div className="mb-8 p-4 rounded-xl bg-rose-50 border border-rose-300 text-rose-800 text-xs flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
          <span>{submissionResult.message}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Honeypot field (hidden from legitimate users) */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="botField">Leave this field blank</label>
          <input
            type="text"
            id="botField"
            name="botField"
            tabIndex="-1"
            value={formData.botField}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>

        {/* Row 1: Name and Business Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Full Name <span className="text-amber-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Elena Rostova"
              className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                errors.fullName ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 focus:border-amber-500 focus:ring-amber-500'
              } text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-1 transition-all`}
            />
            {errors.fullName && (
              <p className="mt-1.5 text-xs text-rose-500 font-medium">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Business Email <span className="text-amber-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="elena@company.com"
              className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                errors.email ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 focus:border-amber-500 focus:ring-amber-500'
              } text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-1 transition-all`}
            />
            {errors.email && (
              <p className="mt-1.5 text-xs text-rose-500 font-medium">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Row 2: Company Name and Phone Number */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="companyName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Company / Startup Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Acme Technologies"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Phone / WhatsApp (Optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
            />
          </div>
        </div>

        {/* Row 3: Required Service & Budget */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Primary Service Required <span className="text-amber-500">*</span>
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                errors.service ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 focus:border-amber-500 focus:ring-amber-500'
              } text-slate-900 text-sm focus:outline-none focus:ring-1 transition-all`}
            >
              <option value="" disabled className="text-slate-400">
                Select a service category...
              </option>
              {servicesData.map((svc) => (
                <option key={svc.id} value={svc.title}>
                  {svc.title}
                </option>
              ))}
              <option value="Other Technical Advisory">
                Other / Architecture Scoping
              </option>
            </select>
            {errors.service && (
              <p className="mt-1.5 text-xs text-rose-500 font-medium">{errors.service}</p>
            )}
          </div>

          <div>
            <label htmlFor="budget" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Approximate Project Budget
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
            >
              <option value="" className="text-slate-400">
                Select an approximate budget range...
              </option>
              {budgetOptions.map((b, idx) => (
                <option key={idx} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Project Description */}
        <div>
          <label htmlFor="description" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Project Overview & Goals <span className="text-amber-500">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            placeholder="Tell us what you are building, target users, preferred tech stack, or specific challenges you want solved..."
            className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
              errors.description ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 focus:border-amber-500 focus:ring-amber-500'
            } text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-1 transition-all resize-y`}
          ></textarea>
          {errors.description && (
            <p className="mt-1.5 text-xs text-rose-500 font-medium">{errors.description}</p>
          )}
        </div>

        {/* Privacy Consent Checkbox */}
        <div>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="privacyConsent"
              checked={formData.privacyConsent}
              onChange={handleChange}
              className="mt-1 w-4 h-4 rounded border-slate-300 bg-white text-amber-500 focus:ring-amber-500"
            />
            <span className="text-xs text-slate-600 leading-normal">
              I acknowledge that the information provided will be used solely to evaluate our project inquiry in accordance with the{' '}
              <a href="/privacy-policy" className="text-amber-600 font-semibold hover:underline">
                Privacy Policy
              </a>
              . We respect strict confidentiality and never share your data. <span className="text-amber-500">*</span>
            </span>
          </label>
          {errors.privacyConsent && (
            <p className="mt-1.5 text-xs text-rose-500 font-medium">{errors.privacyConsent}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <Button
            type="submit"
            size="lg"
            variant="primary"
            isLoading={isSubmitting}
            icon={Send}
            iconPosition="right"
            className="w-full sm:w-auto"
          >
            {isSubmitting ? 'Validating & Transmitting...' : 'Send Project Enquiry'}
          </Button>
        </div>
      </form>
    </div>
  );
}
