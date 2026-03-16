export const SERVICE_DETAILS = [
  {
    id: 'strategic-business-digital-solutions',
    slug: 'strategic-business-digital-solutions',
    title: 'Strategic Business & Digital Solutions',
    subtitle: 'for Startups and Growing Companies',
    navDescription:
      'Strategy, systems, and digital foundations for entrepreneurs and early-stage business teams.',
    intro: [
      'Starting a business requires the right strategy, systems, and digital presence. Zack Solutions helps entrepreneurs transform ideas into structured, operational businesses with the tools and support needed to launch and scale successfully.',
      'Our startup support services simplify early-stage execution while establishing a strong foundation for long-term growth.',
    ],
    servicesIncluded: [
      {
        title: 'Business Setup Guidance',
        description:
          'Guidance on structuring your business model, defining services, and establishing operational processes.',
        iconKey: 'businessSetup',
      },
      {
        title: 'Website Development for Startups',
        description:
          'Professional websites designed to establish credibility, attract customers, and communicate your value clearly.',
        iconKey: 'websiteDevelopment',
      },
      {
        title: 'Digital Marketing Foundation',
        description:
          'Initial marketing implementation including SEO setup, social media setup, and baseline brand positioning.',
        iconKey: 'marketingFoundation',
      },
      {
        title: 'Business Operations Setup',
        description:
          'Guidance on administrative systems, workflow processes, and operational organization for steady delivery.',
        iconKey: 'operationsSetup',
      },
      {
        title: 'Technology Setup',
        description:
          'Implementation of essential digital tools to manage communication, customer relationships, and internal operations.',
        iconKey: 'technologySetup',
      },
    ],
    audiencePoints: [
      'Entrepreneurs launching a new business',
      'Small businesses transitioning to digital operations',
      'Startups needing a professional online presence',
      'Founders who need structured operational systems and guidance',
    ],
    impactPoints: [
      'Helps startups build a strong operational foundation',
      'Improves efficiency with proper systems and workflows',
      'Establishes a professional digital presence early',
      'Supports sustainable long-term business growth',
    ],
    cta: {
      heading: 'Launch Your Startup with Confidence',
      description:
        'Whether you are starting with an idea or strengthening an early-stage business, Zack Solutions provides the strategy, technology, and operational support needed to move forward with clarity.',
      primaryLabel: 'Get Started',
      secondaryLabel: 'Schedule a Consultation',
      paymentProductId: 'strategicBusinessDigitalSolutions',
      consultationLink: process.env.REACT_APP_SERVICE_CONSULTATION_LINK || '/contact',
    },
  },
  {
    id: 'technical-capabilities-deliverables',
    slug: 'technical-capabilities-deliverables',
    title: 'Technical Capabilities and Deliverables',
    subtitle: '',
    navDescription:
      'Implementation-focused deliverables for operational clarity, automation, and scalable digital systems.',
    intro: [
      'Each engagement includes implementation-focused deliverables designed to improve operational clarity, automation efficiency, and scalable digital systems.',
    ],
    deliverables: [
      {
        title: 'Website Structure & Page Hierarchy',
        description:
          'Design and organize website pages to ensure clear navigation and effective communication of your services.',
        iconKey: 'websiteStructure',
      },
      {
        title: 'CRM & Communication Tool Setup',
        description:
          'Configure CRM systems and communication tools to manage leads, track clients, and streamline business operations.',
        iconKey: 'crmSetup',
      },
      {
        title: 'Process Map for Client Onboarding',
        description:
          'Create structured workflows for onboarding new clients and managing recurring support tasks.',
        iconKey: 'onboardingProcess',
      },
      {
        title: 'Baseline Analytics & Reporting',
        description:
          'Implement analytics systems to monitor website performance, visitor behavior, and marketing effectiveness.',
        iconKey: 'analyticsReporting',
      },
      {
        title: 'SEO Fundamentals & Search Visibility',
        description:
          'Optimize website elements to improve search engine visibility and attract high-intent prospects.',
        iconKey: 'seoVisibility',
      },
      {
        title: 'Content Operations System',
        description:
          'Develop a structured content workflow for consistent publishing of updates, case studies, and marketing assets.',
        iconKey: 'contentOperations',
      },
      {
        title: 'Mobile Application Development',
        description:
          'Design and develop scalable mobile applications for iOS and Android, including interface and performance optimization.',
        iconKey: 'mobileDevelopment',
      },
      {
        title: 'Automation & Workflow Systems',
        description:
          'Set up automated processes to streamline recurring workflows and support long-term operational efficiency.',
        iconKey: 'automationSystems',
      },
      {
        title: 'User Experience (UX) & Interface Optimization',
        description:
          'Enhance navigation, layout, and usability to create a smoother and more intuitive user experience.',
        iconKey: 'uxOptimization',
      },
      {
        title: 'Technical Documentation for Scalability',
        description:
          'Prepare clear documentation for systems, integrations, and processes to support long-term growth.',
        iconKey: 'technicalDocumentation',
      },
    ],
    cta: {
      heading: 'Activate Your Technical Delivery Plan',
      description:
        'Get implementation support for the exact technical capabilities your current stage requires, with scope aligned to your goals and operating model.',
      primaryLabel: 'Get Started',
      secondaryLabel: 'Schedule a Consultation',
      paymentProductId: 'technicalCapabilitiesDeliverables',
      consultationLink: process.env.REACT_APP_SERVICE_CONSULTATION_LINK || '/contact',
    },
  },
];

export const NAV_SERVICES = SERVICE_DETAILS.map((service) => ({
  id: service.id,
  slug: service.slug,
  title: service.title,
  navDescription: service.navDescription,
}));

export const DEFAULT_SERVICE_SLUG = SERVICE_DETAILS[0].slug;

export function getServiceBySlug(slug) {
  return SERVICE_DETAILS.find((service) => service.slug === slug);
}
