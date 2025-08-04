import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Brain, Eye, Wand2 } from "lucide-react";
import { motion } from "framer-motion";
import type { Product } from "@/lib/types";

const products: Product[] = [
  {
    id: "medicarehd",
    name: "MedicareHD™",
    title: "Ultra-High Definition MRI Enhancement",
    description: "Ultra-high definition MRI enhancement with advanced denoising and sharpening. Achieve superior image quality in 75% less time.",
    features: [
      "Up to 75% faster acquisition",
      "Enhanced image clarity",
      "All body regions"
    ],
    status: "FDA CLEARED",
    icon: "brain",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300"
  },
  {
    id: "medicarepet",
    name: "MedicarePET™",
    title: "AI-Enhanced PET Imaging",
    description: "AI-powered PET imaging enhancement that reduces radiation dose by up to 75% while maintaining diagnostic quality.",
    features: [
      "75% dose reduction",
      "4x scan acceleration",
      "Multiple tracers"
    ],
    status: "CE MARKED",
    icon: "eye",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300"
  },
  {
    id: "medicaresynth",
    name: "MedicareSYNTH™",
    title: "Synthetic Imaging Technology",
    description: "Industry-first synthetic imaging software that generates high-quality images in zero acquisition time.",
    features: [
      "0-minute acquisition",
      "Synthetic STIR imaging",
      "100% acceleration"
    ],
    status: "BREAKTHROUGH",
    icon: "wand2",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300"
  }
];

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "brain":
      return Brain;
    case "eye":
      return Eye;
    case "wand2":
      return Wand2;
    default:
      return Brain;
  }
};

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

export function ProductShowcase() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Revolutionary AI-Powered Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive suite of AI tools transforms medical imaging with unprecedented speed and accuracy
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const IconComponent = getIcon(product.icon);
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover-lift border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        <IconComponent className="text-[var(--medical-blue)] h-6 w-6 mr-3" />
                        <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                      </div>
                      <Badge className={`${getStatusColor(product.status)} text-white`}>
                        {product.status}
                      </Badge>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{product.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <Check className="text-green-600 h-4 w-4 mr-2" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button className="w-full bg-[var(--medical-blue)] hover:bg-[var(--medical-dark)]">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="bg-[var(--medical-light)] hover:bg-[var(--medical-blue)]"
          >
            View All Products
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
