# Nexora Technologies — IT Solutions & Software Development Website

A production-ready company website and technical portfolio for an IT solutions, software development, and digital product engineering startup.

Built with **React**, **Vite**, **Tailwind CSS v4**, and **React Router**.

---

## 🚀 Key Features & Implemented Architecture

- **13 Complete Pages & Dynamic Routes**:
  - `Home (/)` — Hero with clear value proposition, trust metrics, 8 service category highlights, featured portfolio case studies, engineering philosophy, technology capability grid, 7-stage delivery overview, target industries, FAQs, and contact CTA.
  - `About Us (/about)` — Company mission, vision, core technical values, development philosophy, and code standards.
  - `Services (/services)` — Comprehensive overview of all 8 core practices and engagement models.
  - `Service Details (/services/:slug)` — Dynamic service template with architectural capabilities, tangible deliverables, technologies used, common business use cases, and targeted enquiry form.
  - `Portfolio (/portfolio)` — Interactive case study showcase with live category filtering, real-time keyword search, and tech tags.
  - `Project Details (/portfolio/:slug)` — Rich case study template covering problem statement, implemented solution, key features, verified outcomes, timeline, and industry sector.
  - `Target Industries (/industries)` — Breakdown of 6 target sectors with pain points solved and tailored technical solutions.
  - `7-Stage Process (/process)` — Detailed software development lifecycle from discovery through planning, prototyping, agile sprints, QA, launch, and ongoing SLA maintenance (including mutual NDA & code ownership assurances).
  - `Engineering Insights (/insights)` — Thought leadership blog listing with category filters, read times, and tags.
  - `Article Details (/insights/:slug)` — Full article reader with author profiles, syntax examples, and related posts.
  - `Contact (/contact)` — Complete project intake form with client-side validation, anti-spam honeypot, truthful submission feedback, working hours, and direct WhatsApp links.
  - `Legal Pages (/privacy-policy, /terms-of-service)` — Structured draft policies with transparent disclosures.
  - `404 Not Found (*)` — Custom route with navigation links back to key areas.

- **Centralized Data & Easy Rebranding**:
  - `src/data/companyConfig.js` — Change company name, tagline, address, phone, email, and social URLs in one place.
  - `src/data/services.js` — Edit, add, or remove service offerings and deliverables.
  - `src/data/projects.js` — Update case studies, images, and verified outcomes.
  - `src/data/technologies.js` — Customize technical stack categories.
  - `src/data/industries.js` — Customize industry verticals.
  - `src/data/process.js` — Customize development lifecycle stages.
  - `src/data/faqs.js` — Modify frequently asked questions.
  - `src/data/insights.js` — Add new blog posts and technical articles.

- **SEO & Discoverability**:
  - Dynamic page titles, meta descriptions, and OpenGraph social preview tags via `SEO.jsx`.
  - Schema.org Organization structured data (JSON-LD).
  - Canonical URL support.
  - `robots.txt` and `sitemap.xml` included in `public/`.

- **Truthful Inquiry Handling**:
  - Form validation with anti-bot honeypot protection.
  - Built-in service abstraction (`src/services/enquiryService.js`).
  - When no backend API is configured, the application explicitly notifies the user and logs the payload to the developer console instead of falsely claiming data was saved to a database.

---

## 🛠️ Technology Stack

- **Framework**: React 19
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Routing**: React Router v7 (`react-router-dom`)
- **Icons**: Lucide React + custom inline SVGs
- **Language**: JavaScript (JSX)

---

## 📦 Getting Started

### 1. Prerequisites
Ensure **Node.js 18+** is installed on your system.

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Local Development Server
```bash
npm run dev
```
Open your browser to `http://localhost:5173` to explore the website.

### 4. Build for Production
```bash
npm run build
```
The optimized static build will be generated in the `dist/` directory.

### 5. Preview Production Build Locally
```bash
npm run preview
```

---

## ⚙️ Connecting a Live Backend / CRM to the Contact Form

To connect a live form submission endpoint (such as an AWS API Gateway, Formspree, Resend, or your internal CRM):

1. Open `src/data/companyConfig.js`.
2. Update the following fields:
   ```javascript
   enquiryBackendConfigured: true,
   backendEndpoint: "https://your-api-domain.com/api/enquiries"
   ```
3. Your endpoint should accept a `POST` request with a JSON payload:
   ```json
   {
     "fullName": "Jane Doe",
     "email": "jane@example.com",
     "companyName": "Acme Inc",
     "phone": "+1 555-0192",
     "service": "Web & Custom Software Development",
     "budget": "$15,000 - $35,000",
     "description": "Project overview...",
     "submittedAt": "2026-10-10T12:00:00.000Z"
   }
   ```

---

## 📁 Project Structure

```
it-solutionhub/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── common/         # Button, Badge, Card, SEO, Accordion, PageHero, Breadcrumbs
│   │   ├── forms/          # ContactForm with validation and honeypot
│   │   ├── layout/         # Navbar, Footer, Layout with auto scroll-to-top
│   │   ├── portfolio/      # ProjectCard
│   │   └── services/       # ServiceCard
│   ├── data/               # Configurable company data, services, projects, faqs, etc.
│   │   ├── companyConfig.js
│   │   ├── faqs.js
│   │   ├── industries.js
│   │   ├── insights.js
│   │   ├── navigation.js
│   │   ├── process.js
│   │   ├── projects.js
│   │   ├── services.js
│   │   └── technologies.js
│   ├── pages/              # 13 Dedicated page views
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── Industries.jsx
│   │   ├── InsightDetail.jsx
│   │   ├── Insights.jsx
│   │   ├── NotFound.jsx
│   │   ├── Portfolio.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   ├── Process.jsx
│   │   ├── ProjectDetail.jsx
│   │   ├── ServiceDetail.jsx
│   │   ├── Services.jsx
│   │   └── TermsOfService.jsx
│   ├── services/           # enquiryService.js abstraction
│   ├── App.jsx             # React Router hierarchy
│   ├── index.css           # Tailwind CSS v4 & custom glassmorphism tokens
│   └── main.jsx
├── .env.example
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🛡️ License & Ownership
Copyright © 2026. All source code and architectural templates are ready for customization and production deployment.
