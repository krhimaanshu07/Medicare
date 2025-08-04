import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  FileText, 
  Download, 
  ExternalLink, 
  Search,
  Users,
  Award,
  BookOpen,
  TrendingUp
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const publications = [
  {
    id: 1,
    title: "Deep Learning Enhancement of Low-Count PET Imaging: A Multi-Site Clinical Validation",
    authors: "Chen, S., Rodriguez, M., Thompson, E., et al.",
    journal: "Nature Medicine",
    year: "2024",
    type: "peer-reviewed",
    category: "Clinical Study",
    abstract: "This multi-center study demonstrates the clinical efficacy of AI-enhanced PET imaging across 15 medical institutions, showing consistent 75% dose reduction while maintaining diagnostic accuracy.",
    citations: 142,
    impact: "High Impact",
    downloadUrl: "#"
  },
  {
    id: 2,
    title: "Synthetic STIR Imaging: Zero-Acquisition Time MRI Sequences Using Deep Neural Networks",
    authors: "Thompson, E., Wilson, J., Chen, S., Rodriguez, M.",
    journal: "Radiology",
    year: "2024", 
    type: "peer-reviewed",
    category: "Technical Innovation",
    abstract: "First demonstration of synthetic STIR image generation from standard T1 and T2 sequences, eliminating the need for additional scan time while maintaining diagnostic quality.",
    citations: 89,
    impact: "Breakthrough",
    downloadUrl: "#"
  },
  {
    id: 3,
    title: "AI-Accelerated MRI: A Comprehensive Analysis of Time Savings and Clinical Outcomes",
    authors: "Rodriguez, M., Chen, S., Johnson, K., et al.",
    journal: "Journal of Medical Imaging",
    year: "2024",
    type: "peer-reviewed", 
    category: "Clinical Outcomes",
    abstract: "Comprehensive analysis of 50,000+ MRI scans enhanced with AI technology, demonstrating significant time savings without compromising diagnostic accuracy.",
    citations: 156,
    impact: "High Impact",
    downloadUrl: "#"
  },
  {
    id: 4,
    title: "Economic Impact of AI-Enhanced Medical Imaging: A Healthcare System Perspective",
    authors: "Wilson, J., Thompson, E., Davis, R.",
    journal: "Health Economics Review",
    year: "2023",
    type: "peer-reviewed",
    category: "Health Economics", 
    abstract: "Analysis of cost savings and operational improvements from AI implementation across major healthcare systems, showing average ROI of 340% within 18 months.",
    citations: 73,
    impact: "Significant",
    downloadUrl: "#"
  },
  {
    id: 5,
    title: "Patient Safety and Comfort in AI-Accelerated Magnetic Resonance Imaging",
    authors: "Davis, R., Chen, S., Brown, L., et al.",
    journal: "Patient Safety Journal",
    year: "2023",
    type: "peer-reviewed",
    category: "Patient Safety",
    abstract: "Comprehensive study of patient experiences and safety outcomes in AI-enhanced MRI procedures, showing 40% improvement in patient comfort scores.",
    citations: 62,
    impact: "Moderate",
    downloadUrl: "#"
  },
  {
    id: 6,
    title: "Automated Brain Alignment for Longitudinal MRI Studies: Clinical Validation and Research Applications",
    authors: "Johnson, K., Rodriguez, M., Thompson, E.",
    journal: "NeuroImage",
    year: "2023",
    type: "peer-reviewed",
    category: "Neuroimaging",
    abstract: "Validation study of automated brain alignment technology showing 97%+ accuracy in positioning across longitudinal studies, significantly improving research reliability.",
    citations: 91,
    impact: "High Impact",
    downloadUrl: "#"
  }
];

const researchStats = [
  {
    icon: FileText,
    number: "50+",
    label: "Published Papers",
    description: "Peer-reviewed publications in top medical journals"
  },
  {
    icon: Users,
    number: "200+",
    label: "Research Partners",
    description: "Academic institutions and healthcare centers"
  },
  {
    icon: Award,
    number: "15",
    label: "Awards Won",
    description: "International recognition for innovation"
  },
  {
    icon: TrendingUp,
    number: "2,500+",
    label: "Citations",
    description: "Total citations across all publications"
  }
];

export default function Research() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Clinical Study", "Technical Innovation", "Clinical Outcomes", "Health Economics", "Patient Safety", "Neuroimaging"];

  const filteredPublications = publications
    .filter(pub => selectedCategory === "All" || pub.category === selectedCategory)
    .filter(pub => 
      searchQuery === "" || 
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.abstract.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "High Impact":
        return "bg-red-100 text-red-800";
      case "Breakthrough":
        return "bg-purple-100 text-purple-800";
      case "Significant":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

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
              Research & Publications
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Advancing medical AI through rigorous research and clinical validation. 
              Explore our peer-reviewed publications and groundbreaking studies.
            </p>
            <Button 
              size="lg"
              className="bg-[var(--medical-blue)] hover:bg-[var(--medical-dark)]"
              onClick={() => document.getElementById('publications')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Publications
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Research Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchStats.map((stat, index) => {
              const IconComponent = stat.icon;
              
              return (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-[var(--medical-blue)] p-4 rounded-full inline-flex mb-4">
                    <IconComponent className="text-white h-6 w-6" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">
                    {stat.label}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {stat.description}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section id="publications" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Scientific Publications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Our research is published in leading medical journals and contributes to the advancement 
              of AI in healthcare globally.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search publications, authors, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 text-lg"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? 
                    "bg-[var(--medical-blue)] hover:bg-[var(--medical-dark)]" : 
                    ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Publications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPublications.map((publication, index) => (
              <motion.div
                key={publication.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover-lift border-0 shadow-lg h-full">
                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <Badge className={getImpactColor(publication.impact)}>
                        {publication.impact}
                      </Badge>
                      <div className="text-sm text-gray-500">
                        {publication.year}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {publication.title}
                    </h3>
                    
                    <div className="text-gray-600 mb-3">
                      <strong>Authors:</strong> {publication.authors}
                    </div>
                    
                    <div className="text-gray-600 mb-3">
                      <strong>Published in:</strong> {publication.journal}
                    </div>
                    
                    <Badge variant="outline" className="mb-4">
                      {publication.category}
                    </Badge>
                    
                    <p className="text-gray-700 mb-6 line-clamp-3">
                      {publication.abstract}
                    </p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-sm text-gray-600">
                        <strong>{publication.citations}</strong> citations
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button 
                        size="sm"
                        className="bg-[var(--medical-blue)] hover:bg-[var(--medical-dark)] flex-1"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                      </Button>
                      <Button size="sm" variant="outline">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Journal
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredPublications.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No publications found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search criteria or category filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Research Partnership CTA */}
      <section className="py-20 bg-[var(--medical-blue)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Collaborate with Our Research Team
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join our network of research partners and contribute to advancing AI in medical imaging. 
              We support collaborative studies and provide research grants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-[var(--medical-blue)] hover:bg-gray-100"
              >
                Partner with Us
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[var(--medical-blue)]"
              >
                Apply for Research Grant
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
