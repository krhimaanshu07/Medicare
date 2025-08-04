import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Download, 
  ExternalLink, 
  FileText, 
  Video, 
  Presentation,
  Book,
  PlayCircle,
  Calendar,
  Filter,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import type { Resource } from "@/lib/types";

const resources: Resource[] = [
  {
    id: "clinical-validation-2024",
    title: "AI-Enhanced MRI: Clinical Validation Results",
    description: "Comprehensive study of 1,000+ patients demonstrating 75% reduction in scan times with maintained diagnostic accuracy across multiple anatomical regions.",
    type: "RESEARCH PAPER",
    date: "December 2023",
    pages: "24 pages",
    publisher: "Nature Medicine",
    category: "research"
  },
  {
    id: "roi-calculator-whitepaper",
    title: "ROI Calculator: AI in Medical Imaging",
    description: "Detailed analysis of cost savings and efficiency gains from implementing AI-powered imaging solutions, including real-world case studies and financial models.",
    type: "WHITEPAPER", 
    date: "November 2023",
    pages: "14 pages",
    publisher: "Medicare Research",
    category: "whitepapers"
  },
  {
    id: "stanford-case-study",
    title: "Stanford Medical: Implementation Success",
    description: "How Stanford Medical Center achieved 60% faster MRI scans while improving patient satisfaction scores and reducing operational costs.",
    type: "CASE STUDY",
    date: "October 2023", 
    pages: "8 pages",
    publisher: "Medicare Case Studies",
    category: "case-studies"
  },
  {
    id: "pacs-integration-guide",
    title: "Integration Guide: PACS Systems",
    description: "Technical documentation for seamless integration with existing PACS and imaging workflows, including step-by-step implementation instructions.",
    type: "TECHNICAL",
    date: "September 2023",
    pages: "25 pages", 
    publisher: "Medicare Technical Docs",
    category: "technical"
  },
  {
    id: "future-ai-radiology-webinar",
    title: "Future of AI in Radiology",
    description: "Expert panel discussion on emerging trends and technologies in AI-powered medical imaging, featuring leading radiologists and AI researchers.",
    type: "WEBINAR",
    date: "August 2023",
    pages: "60 min",
    publisher: "Medicare Education",
    category: "webinar"
  },
  {
    id: "synthetic-imaging-breakthrough",
    title: "Synthetic Imaging: Breakthrough Study",
    description: "First clinical study demonstrating zero-acquisition-time synthetic STIR imaging with maintained diagnostic quality and clinical utility.",
    type: "RESEARCH PAPER",
    date: "July 2023",
    pages: "18 pages",
    publisher: "Radiology Journal",
    category: "research"
  },
  {
    id: "pet-dose-reduction-study",
    title: "PET Dose Reduction: Multi-Center Analysis",
    description: "Comprehensive analysis of radiation dose reduction capabilities across 50+ medical centers, demonstrating consistent 75% dose savings.",
    type: "RESEARCH PAPER", 
    date: "June 2023",
    pages: "22 pages",
    publisher: "Journal of Nuclear Medicine",
    category: "research"
  },
  {
    id: "healthcare-ai-implementation",
    title: "Healthcare AI Implementation Best Practices",
    description: "Strategic guide for healthcare administrators on successfully implementing AI technologies, including change management and training protocols.",
    type: "WHITEPAPER",
    date: "May 2023",
    pages: "16 pages",
    publisher: "Medicare Strategy",
    category: "whitepapers"
  },
  {
    id: "mayo-clinic-deployment",
    title: "Mayo Clinic: Enterprise Deployment",
    description: "Detailed case study of enterprise-wide AI implementation across Mayo Clinic's imaging network, covering technical and operational aspects.",
    type: "CASE STUDY",
    date: "April 2023",
    pages: "12 pages", 
    publisher: "Medicare Case Studies",
    category: "case-studies"
  },
  {
    id: "api-developer-documentation",
    title: "Developer API Documentation",
    description: "Complete technical documentation for Medicare AI platform APIs, including authentication, endpoints, and integration examples.",
    type: "TECHNICAL",
    date: "March 2023",
    pages: "45 pages",
    publisher: "Medicare Developer",
    category: "technical"
  },
  {
    id: "ai-imaging-masterclass",
    title: "AI in Medical Imaging Masterclass", 
    description: "Comprehensive educational series covering AI fundamentals, clinical applications, and implementation strategies for healthcare professionals.",
    type: "WEBINAR",
    date: "February 2023",
    pages: "120 min",
    publisher: "Medicare Education",
    category: "webinar"
  },
  {
    id: "regulatory-compliance-guide",
    title: "Regulatory Compliance Guide for AI Imaging",
    description: "Complete guide to FDA regulations, CE marking requirements, and international compliance standards for AI-powered medical imaging systems.",
    type: "WHITEPAPER",
    date: "January 2023", 
    pages: "20 pages",
    publisher: "Medicare Regulatory",
    category: "whitepapers"
  }
];

const categories = [
  { id: "all", label: "All Resources", count: resources.length },
  { id: "research", label: "Research Papers", count: resources.filter(r => r.category === "research").length },
  { id: "whitepapers", label: "Whitepapers", count: resources.filter(r => r.category === "whitepapers").length },
  { id: "case-studies", label: "Case Studies", count: resources.filter(r => r.category === "case-studies").length },
  { id: "technical", label: "Technical Docs", count: resources.filter(r => r.category === "technical").length },
  { id: "webinar", label: "Webinars", count: resources.filter(r => r.category === "webinar").length }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "RESEARCH PAPER":
      return "bg-[var(--medical-blue)] text-white";
    case "WHITEPAPER":
      return "bg-green-600 text-white";
    case "CASE STUDY":
      return "bg-orange-600 text-white";
    case "TECHNICAL":
      return "bg-gray-600 text-white";
    case "WEBINAR":
      return "bg-purple-600 text-white";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getTypeIcon = (type: string) => {
  switch (type) {
    case "RESEARCH PAPER":
      return FileText;
    case "WHITEPAPER":
      return Book;
    case "CASE STUDY":
      return Presentation;
    case "TECHNICAL":
      return FileText;
    case "WEBINAR":
      return Video;
    default:
      return FileText;
  }
};

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredResources = resources
    .filter(resource => selectedCategory === "all" || resource.category === selectedCategory)
    .filter(resource => 
      searchQuery === "" || 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.type.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const totalPages = Math.ceil(filteredResources.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedResources = filteredResources.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Research & Resources
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Access peer-reviewed research, technical documentation, and clinical evidence 
              supporting our AI solutions. Stay informed with the latest advances in medical AI.
            </p>
            <Button 
              size="lg"
              className="bg-[var(--medical-blue)] hover:bg-[var(--medical-dark)]"
              onClick={() => document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Resources
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section id="resources" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <motion.div
            className="max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search resources, topics, or keywords..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="pl-12 h-12 text-lg"
              />
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setCurrentPage(1);
                }}
                className={`${selectedCategory === category.id ? 
                  "bg-[var(--medical-blue)] hover:bg-[var(--medical-dark)]" : 
                  "hover:bg-gray-100"}`}
              >
                <Filter className="mr-2 h-4 w-4" />
                {category.label} ({category.count})
              </Button>
            ))}
          </motion.div>

          {/* Results Summary */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600">
              Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredResources.length)} of {filteredResources.length} resources
            </p>
          </motion.div>

          {/* Resources Grid */}
          {paginatedResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {paginatedResources.map((resource, index) => {
                const IconComponent = getTypeIcon(resource.type);
                
                return (
                  <motion.div
                    key={resource.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="hover-lift border-0 shadow-lg h-full">
                      <CardContent className="p-8">
                        <div className="flex justify-between items-start mb-4">
                          <Badge className={getTypeColor(resource.type)}>
                            {resource.type}
                          </Badge>
                          <span className="text-gray-500 text-sm">{resource.date}</span>
                        </div>
                        
                        <div className="flex items-start mb-4">
                          <IconComponent className="text-[var(--medical-blue)] h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                          <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
                            {resource.title}
                          </h3>
                        </div>
                        
                        <p className="text-gray-600 mb-6 line-clamp-3">
                          {resource.description}
                        </p>
                        
                        <div className="flex items-center justify-between mb-6">
                          <div className="text-sm text-gray-500">
                            {resource.pages} • {resource.publisher}
                          </div>
                        </div>
                        
                        <div className="flex gap-3">
                          <Button 
                            size="sm"
                            className="bg-[var(--medical-blue)] hover:bg-[var(--medical-dark)] flex-1"
                          >
                            <Download className="mr-2 h-4 w-4" />
                            {resource.type === "WEBINAR" ? "Watch" : "Download"}
                          </Button>
                          {resource.type === "WEBINAR" && (
                            <Button size="sm" variant="outline">
                              <PlayCircle className="mr-2 h-4 w-4" />
                              Preview
                            </Button>
                          )}
                          {resource.type === "RESEARCH PAPER" && (
                            <Button size="sm" variant="outline">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Journal
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No resources found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search criteria or category filter.
              </p>
            </motion.div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div
              className="flex justify-center gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Button
                variant="outline"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  onClick={() => setCurrentPage(page)}
                  className={currentPage === page ? 
                    "bg-[var(--medical-blue)] hover:bg-[var(--medical-dark)]" : 
                    ""}
                >
                  {page}
                </Button>
              ))}
              
              <Button
                variant="outline"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-[var(--medical-blue)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated with Latest Research
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to our research newsletter and be the first to access new publications, 
              case studies, and breakthrough developments in medical AI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto mb-8">
              <Input
                placeholder="Enter your email address"
                className="bg-white border-0 h-12"
              />
              <Button 
                className="bg-white text-[var(--medical-blue)] hover:bg-gray-100 h-12"
              >
                Subscribe
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Calendar className="text-white h-6 w-6 mx-auto mb-2" />
                <div className="text-white font-medium">Monthly Updates</div>
                <div className="text-blue-100 text-sm">Latest research & insights</div>
              </div>
              <div className="text-center">
                <FileText className="text-white h-6 w-6 mx-auto mb-2" />
                <div className="text-white font-medium">Exclusive Content</div>
                <div className="text-blue-100 text-sm">Early access to publications</div>
              </div>
              <div className="text-center">
                <Video className="text-white h-6 w-6 mx-auto mb-2" />
                <div className="text-white font-medium">Expert Webinars</div>
                <div className="text-blue-100 text-sm">Live sessions with researchers</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
