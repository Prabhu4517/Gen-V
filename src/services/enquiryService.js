import { companyConfig } from '../data/companyConfig';

/**
 * Enquiry Service
 * Handles project inquiry validation and transmission.
 * Built with truthful feedback: if no backend API is configured,
 * it informs the user and returns an informative status instead of falsely pretending data was saved to a database.
 */

export const validateEnquiry = (formData) => {
  const errors = {};

  // Honeypot spam check
  if (formData.botField) {
    errors.botField = "Bot detected.";
    return errors;
  }

  if (!formData.fullName || formData.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name (at least 2 characters).";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email || !emailRegex.test(formData.email.trim())) {
    errors.email = "Please enter a valid business email address.";
  }

  if (!formData.service || formData.service.trim() === "") {
    errors.service = "Please select the service required.";
  }

  if (!formData.description || formData.description.trim().length < 15) {
    errors.description = "Please describe your project or inquiry (minimum 15 characters).";
  }

  if (!formData.privacyConsent) {
    errors.privacyConsent = "You must acknowledge our privacy statement to submit an inquiry.";
  }

  return errors;
};

export const submitEnquiry = async (formData) => {
  // Validate first
  const validationErrors = validateEnquiry(formData);
  if (Object.keys(validationErrors).length > 0) {
    return {
      success: false,
      validationErrors,
      message: "Please correct the highlighted form errors."
    };
  }

  // Check if live backend endpoint is configured
  const isBackendConfigured = companyConfig.enquiryBackendConfigured && companyConfig.backendEndpoint;

  if (isBackendConfigured) {
    try {
      const response = await fetch(companyConfig.backendEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          email: formData.email.trim(),
          companyName: (formData.companyName || "").trim(),
          phone: (formData.phone || "").trim(),
          service: formData.service,
          budget: formData.budget || "Not Specified",
          description: formData.description.trim(),
          submittedAt: new Date().toISOString()
        })
      });

      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }

      const result = await response.json();
      return {
        success: true,
        message: "Your inquiry has been successfully transmitted. Our technical team will reach out within 24 hours.",
        data: result
      };
    } catch (err) {
      console.error("[EnquiryService] Backend submission error:", err);
      return {
        success: false,
        message: "Unable to reach the submission server. Please email us directly at " + companyConfig.contact.salesEmail
      };
    }
  }

  // If no backend endpoint is configured:
  // Simulate network latency (800ms) and provide truthful feedback
  await new Promise((resolve) => setTimeout(resolve, 800));

  console.info(
    "[EnquiryService Notification] Notice: Frontend demo mode active. No live API endpoint is configured yet in companyConfig.js. Form payload:",
    formData
  );

  return {
    success: true,
    isDemoMode: true,
    message:
      "Demo Mode: Your inquiry was validated successfully! Note: A live backend endpoint has not yet been connected in `companyConfig.js`. In production, this dispatches to your CRM or email webhook.",
    payloadSummary: {
      client: formData.fullName,
      email: formData.email,
      service: formData.service,
      company: formData.companyName || "N/A"
    }
  };
};
