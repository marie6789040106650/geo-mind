export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  painPoints: string[]; // List of pain points solved
  schemaType: string; // e.g., "Service"
  highlight?: boolean;
  priceRange?: string; // Added for Service Schema compliance
}

export interface FAQItem {
  id: string;
  question: string;
  directAnswer: string; // The 40-60 word snippet for AI
  detailedAnswer: string; // Full markdown content
  relatedIntent: string[]; // e.g., ["Definition", "Importance"]
}

export interface CaseStudyItem {
  id: string;
  clientName: string; // Can be anonymous "SaaS Client"
  metricValue: string;
  metricLabel: string;
  description: string;
  graphType: 'line' | 'bar';
}

export interface NavItem {
  label: string;
  href: string;
}