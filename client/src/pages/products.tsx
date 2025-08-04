import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Brain, Eye, Wand2, AlignLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const products = [
  {
    id: "medicarehd",
    name: "MedicareHD™",
    title: "Ultra-High Definition MRI Enhancement",
    description: "Advanced denoising and sharpening technology that delivers superior image quality in 75% less time.",
    fullDescription: "MedicareHD™ represents a breakthrough in MRI enhancement technology, utilizing deep learning algorithms to dramatically improve image quality while reducing scan times. Our proprietary AI models have been trained on millions of medical images to deliver consistent, reliable results across all body regions and MRI sequences.",
    features: [
      "Up to 75% faster acquisition times",
      "Enhanced image clarity and sharpness", 
      "Compatible with all body regions",
      "Works with T1, T2, T2 FLAIR sequences",
      "Vendor-neutral compatibility",
      "Real-time processing"
    ],
    benefits: [
      "Increased patient throughput",
      "Reduced patient discomfort",
      "Improved diagnostic confidence",
      "Lower operating costs"
    ],
    status: "FDA CLEARED",
    icon: Brain,
    color: "blue",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    id: "medicarepet", 
    name: "MedicarePET™",
    title: "AI-Enhanced PET Imaging",
    description: "Revolutionary PET enhancement that reduces radiation dose by up to 75% while maintaining diagnostic quality.",
    fullDescription: "MedicarePET™ transforms PET imaging by enabling significant dose reduction without compromising image quality. Our AI algorithms enhance low-count PET data, allowing for faster scans or lower tracer doses while maintaining the diagnostic accuracy physicians require.",
    features: [
      "Up to 75% radiation dose reduction",
      "4x scan time acceleration", 
      "Multiple radiotracer support",
      "Noise reduction algorithms",
      "Quantitative accuracy preservation",
      "Seamless workflow integration"
    ],
    benefits: [
      "Improved patient safety",
      "Faster scan completion",
      "Reduced waiting times", 
      "Cost-effective imaging"
    ],
    status: "CE MARKED",
    icon: Eye,
    color: "green",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    id: "medicaresynth",
    name: "MedicareSYNTH™", 
    title: "Synthetic Imaging Technology",
    description: "Industry-first synthetic imaging software that generates high-quality images in zero acquisition time.",
    fullDescription: "MedicareSYNTH™ represents a paradigm shift in medical imaging, using AI to generate synthetic images that would traditionally require separate scan sequences. This breakthrough technology can produce STIR images instantly from existing T1 and T2 data.",
    features: [
      "Zero-minute acquisition time",
      "Synthetic STIR image generation",
      "100% scan time acceleration",
      "Consistent image quality",
      "No additional contrast required",
      "Automated processing"
    ],
    benefits: [
      "Elimination of additional scans",
      "Significant time savings",
      "Improved workflow efficiency",
      "Enhanced patient experience"
    ],
    status: "BREAKTHROUGH",
    icon: Wand2,
    color: "orange", 
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    id: "medicarealign",
    name: "MedicareALIGN™",
    title: "Automated Brain Alignment",
    description: "Precision brain MR alignment to ideal anatomical position with 97%+ accuracy.",
    fullDescription: "MedicareALIGN™ automatically aligns brain MR images to standardized anatomical positions, reducing variability across longitudinal studies and improving diagnostic consistency. This tool is essential for research protocols and comparative studies.",
    features: [
      "97%+ alignment accuracy",
      "Automated processing",
      "3D brain sequence support", 
      "Orthogonal reformats",
      "Longitudinal study optimization",
      "Research protocol compliance"
    ],
    benefits: [
      "Improved diagnostic consistency", 
      "Reduced manual work",
      "Enhanced research reliability",
      "Standardized positioning"
    ],
    status: "FDA CLEARED",
    icon: AlignLeft,
    color: "purple",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "FDA CLEARED":
      return "bg-green-600";
    case "CE MARKED": 
      return "bg-green-600";
    case "BREAKTHROUGH":
      return "bg-orange-600";
    default:
      return "bg-blue-600";
  }
};

export default function Products() {
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
              AI-Powered Medical Imaging Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover our comprehensive suite of FDA-cleared AI tools that transform medical imaging 
              with unprecedented speed, quality, and efficiency.
            </p>
            <Button 
              size="lg"
              className="bg-[var(--medical-blue)] hover:bg-[var(--medical-dark)]"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={product.id}
                  id={product.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  {/* Content */}
                  <div className={isEven ? 'lg:pr-8' : 'lg:pl-8 lg:order-2'}>
                    <div className="flex items-center mb-4">
                      <IconComponent className="text-[var(--medical-blue)] h-8 w-8 mr-3" />
                      <h2 className="text-3xl font-bold text-gray-900">{product.name}</h2>
                    </div>
                    
                    <Badge className={`${getStatusColor(product.status)} text-white mb-4`}>
                      {product.status}
                    </Badge>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {product.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                      {product.fullDescription}
                    </p>

                    <Tabs defaultValue="features" className="mb-8">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="features">Features</TabsTrigger>
                        <TabsTrigger value="benefits">Benefits</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="features" className="mt-6">
                        <div className="space-y-3">
                          {product.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start">
                              <Check className="text-green-600 h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="benefits" className="mt-6">
                        <div className="space-y-3">
                          {product.benefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-start">
                              <Check className="text-blue-600 h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                    </Tabs>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        className="bg-[var(--medical-blue)] hover:bg-[var(--medical-dark)]"
                        onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        Request Demo
                      </Button>
                      <Button variant="outline">
                        Download Spec Sheet
                      </Button>
                    </div>
                  </div>

                  {/* Image */}
                  <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                    <Card className="overflow-hidden shadow-xl border-0">
                      <CardContent className="p-0">
                        <img
                          src={product.image}
                          alt={product.title}
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

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Medical Imaging?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join hundreds of healthcare institutions already using our AI solutions to improve patient care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-[var(--medical-blue)] hover:bg-[var(--medical-dark)]"
              >
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline">
                Compare Products
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
