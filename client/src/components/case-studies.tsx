import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import type { CaseStudy } from "@/lib/types";

const caseStudies: CaseStudy[] = [
  {
    id: "stanford",
    institution: "Stanford Medical Center",
    title: "60% Reduction in Scan Time",
    description: "Implementation of MedicareHD resulted in significant workflow improvements and higher patient satisfaction scores.",
    metrics: [
      { label: "Patient Throughput", value: "+65%", type: "success" },
      { label: "Image Quality Score", value: "9.2/10", type: "success" },
      { label: "ROI Period", value: "8 months", type: "success" },
    ],
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
  },
  {
    id: "mayo",
    institution: "Mayo Clinic Network",
    title: "75% Dose Reduction Achieved",
    description: "MedicarePET implementation across 12 facilities demonstrated significant radiation dose reduction without compromising diagnostic accuracy.",
    metrics: [
      { label: "Radiation Dose", value: "-75%", type: "success" },
      { label: "Diagnostic Accuracy", value: "98.5%", type: "success" },
      { label: "Patient Comfort", value: "+40%", type: "success" },
    ],
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
  },
  {
    id: "cleveland",
    institution: "Cleveland Clinic",
    title: "Zero-Time Synthetic Imaging",
    description: "First clinical deployment of MedicareSYNTH achieved unprecedented workflow efficiency with synthetic STIR imaging.",
    metrics: [
      { label: "STIR Acquisition", value: "0 minutes", type: "success" },
      { label: "Image Quality", value: "Superior", type: "success" },
      { label: "Workflow Efficiency", value: "+85%", type: "success" },
    ],
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
  },
];

export function CaseStudies() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Proven Clinical Results</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world outcomes from leading healthcare institutions using our AI technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover-lift border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <img
                      src={study.image}
                      alt={study.institution}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{study.institution}</h3>
                    <Badge className="bg-[var(--medical-blue)] text-white">{study.title}</Badge>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{study.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {study.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex justify-between">
                        <span className="text-gray-600">{metric.label}</span>
                        <span
                          className={`font-semibold ${
                            metric.type === "success" ? "text-green-600" : "text-blue-600"
                          }`}
                        >
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <Button
                    variant="link"
                    className="text-[var(--medical-blue)] hover:text-[var(--medical-dark)] p-0"
                  >
                    Read Full Case Study →
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
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
            className="bg-[var(--medical-blue)] hover:bg-[var(--medical-dark)]"
          >
            View All Case Studies
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
