import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { ProductShowcase } from "@/components/product-showcase";
import { DemoBooking } from "@/components/demo-booking";
import { CaseStudies } from "@/components/case-studies";
import { Newsletter } from "@/components/newsletter";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

// Trusted Partners Section
function TrustedPartners() {
  const partners = [
    "Stanford Health",
    "Mayo Clinic", 
    "Johns Hopkins",
    "Cleveland Clinic",
    "Mass General",
    "UCSF Health"
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-gray-600 text-lg font-medium mb-8">
            Trusted by Leading Healthcare Institutions
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={partner}
                className="flex justify-center items-center h-16 bg-gray-50 rounded-lg border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-gray-600 font-medium text-sm text-center px-2">
                  {partner}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Company Stats Section
function CompanyStats() {
  const stats = [
    { number: "500+", label: "Hospitals Served" },
    { number: "25M+", label: "Patients Impacted" },  
    { number: "50+", label: "Countries" },
    { number: "98%", label: "Satisfaction Rate" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Leading the Future of Medical AI
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Born from Stanford's cutting-edge research, Medicare is transforming healthcare through 
            innovative AI solutions that make medical imaging faster, safer, and more accessible worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-[var(--medical-blue)] mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <TrustedPartners />
      <ProductShowcase />
      <DemoBooking />
      <CaseStudies />
      <CompanyStats />
      <Newsletter />
      <Footer />
    </div>
  );
}
