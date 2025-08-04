export interface Product {
  id: string;
  name: string;
  title: string;
  description: string;
  features: string[];
  status: 'FDA CLEARED' | 'CE MARKED' | 'BREAKTHROUGH';
  icon: string;
  image: string;
}

export interface CaseStudy {
  id: string;
  institution: string;
  title: string;
  description: string;
  metrics: {
    label: string;
    value: string;
    type: 'success' | 'info';
  }[];
  image: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'RESEARCH PAPER' | 'WHITEPAPER' | 'CASE STUDY' | 'TECHNICAL' | 'WEBINAR';
  date: string;
  pages?: string;
  publisher?: string;
  category: 'research' | 'whitepapers' | 'case-studies' | 'technical' | 'webinar';
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
}
