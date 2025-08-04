import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Users, 
  Clock, 
  Shield, 
  TrendingUp, 
  Zap,
  CheckCircle,
  ArrowRight,
  Hospital,
  Stethoscope,
  Activity
} from "lucide-react";
import { motion } from "framer-motion";

const solutions = [
  {
    id: "hospital-systems",
    title: "Hospital Systems & Health Networks",
    description: "Comprehensive AI imaging solutions for large healthcare organizations.",
    icon: Building2,
    benefits: [
      "Standardized imaging protocols across facilities",
      "Centralized AI deployment and management", 
      "Enterprise-level integration support",
      "Volume-based pricing advantages"
    ],
    useCases: [
      "Multi-site MRI acceleration",
      "Standardized image quality",
      "Reduced variation between locations",
      "Improved patient throughput"
    ],
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    id: "imaging-centers",
    title: "Imaging Centers & Radiology Groups",
    description: "Specialized solutions for dedicated imaging facilities and practices.",
    icon: Activity,
    benefits: [
      "Faster patient scans and higher throughput",
      "Competitive advantage with premium quality",
      "Reduced need for repeat scans",
      "Enhanced patient satisfaction"
    ],
    useCases: [
      "Outpatient MRI acceleration",
      "PET dose reduction protocols",
      "Same-day reporting capabilities", 
      "Enhanced diagnostic confidence"
    ],
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    id: "academic-research",
    title: "Academic & Research Institutions", 
    description: "Advanced AI tools for research protocols and clinical studies.",
    icon: Users,
    benefits: [
      "Consistent image quality for research",
      "Accelerated data collection",
      "Standardized processing protocols",
      "Publication-ready results"
    ],
    useCases: [
      "Longitudinal study standardization",
      "Multi-center research protocols",
      "Clinical trial acceleration",
      "Research data consistency"
    ],
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  }
];

const integrationFeatures = [
  {
    icon: Zap,
    title: "Seamless Integration",
    description: "Deploy between your existing scanners and PACS with no workflow disruption."
  },
  {
    icon: Shield,
    title: "Enterprise Security", 
    description: "HIPAA-compliant infrastructure with enterprise-grade security and privacy."
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock technical support and monitoring for uninterrupted operation."
  },
  {
    icon: TrendingUp,
    title: "Scalable Deployment",
    description: "Start with one scanner or deploy across your entire imaging network."
  }
];

export default function Solutions() {
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
              Solutions for Every Healthcare Setting
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Whether you're a large health system, imaging center, or research institution, 
              our AI solutions adapt to your specific needs and workflows.
            </p>
            <Button 
              size="lg"
              className="bg-[var(--medical-blue)] hover:bg-[var(--medical-dark)]"
              onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Solutions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Solutions by Industry */}
      <section id="solutions" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Tailored Solutions by Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI platform adapts to different healthcare environments, providing customized 
              benefits for your specific use case.
            </p>
          </motion.div>

          <div className="space-y-20">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={solution.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Content */}
                  <div className={isEven ? 'lg:pr-8' : 'lg:pl-8 lg:order-2'}>
                    <div className="flex items-center mb-6">
                      <div className="bg-[var(--medical-blue)] p-3 rounded-lg mr-4">
                        <IconComponent className="text-white h-6 w-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{solution.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-8 text-lg">
                      {solution.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Key Benefits</h4>
                        <div className="space-y-3">
                          {solution.benefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-start">
                              <CheckCircle className="text-green-600 h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Use Cases</h4>
                        <div className="space-y-3">
                          {solution.useCases.map((useCase, useCaseIndex) => (
                            <div key={useCaseIndex} className="flex items-start">
                              <CheckCircle className="text-blue-600 h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{useCase}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Button 
                      className="bg-[var(--medical-blue)] hover:bg-[var(--medical-dark)]"
                    >
                      Learn More About This Solution
                    </Button>
                  </div>

                  {/* Image */}
                  <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                    <Card className="overflow-hidden shadow-xl border-0">
                      <CardContent className="p-0">
                        <img
                          src={solution.image}
                          alt={solution.title}
                          className="w-full h-80 object-cover"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Enterprise-Ready Integration
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our solutions integrate seamlessly with your existing infrastructure, 
              providing enterprise-grade reliability and support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrationFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center border-0 shadow-lg hover-lift">
                    <CardContent className="p-8">
                      <div className="bg-[var(--medical-blue)] p-4 rounded-full inline-flex mb-6">
                        <IconComponent className="text-white h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Calculate Your ROI
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                See how much time and money you could save with our AI solutions. 
                Most customers see ROI within 8-12 months.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--medical-blue)] mb-2">75%</div>
                  <div className="text-gray-600">Average Time Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--medical-blue)] mb-2">$2.3M</div>
                  <div className="text-gray-600">Average Annual Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--medical-blue)] mb-2">8</div>
                  <div className="text-gray-600">Months to ROI</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-[var(--medical-blue)] hover:bg-[var(--medical-dark)]"
                >
                  Calculate My ROI
                </Button>
                <Button size="lg" variant="outline">
                  Download ROI Whitepaper
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--medical-blue)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Schedule a consultation with our solution experts to discuss your specific needs 
              and develop a customized implementation plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-[var(--medical-blue)] hover:bg-gray-100"
              >
                Schedule Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[var(--medical-blue)]"
              >
                Request Proposal
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
