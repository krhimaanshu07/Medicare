import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Lightbulb, 
  Shield, 
  Users, 
  Globe, 
  Award,
  TrendingUp,
  Building,
  MapPin,
  Mail,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import type { TeamMember } from "@/lib/types";

const teamMembers: TeamMember[] = [
  {
    id: "sarah-chen",
    name: "Dr. Sarah Chen",
    title: "Chief Executive Officer",
    description: "Former Stanford Radiology, 15+ years in medical AI. Led breakthrough research in deep learning applications for medical imaging.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b1c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    id: "michael-rodriguez", 
    name: "Dr. Michael Rodriguez",
    title: "Chief Technology Officer",
    description: "PhD Computer Vision, Former Google AI Health. Pioneer in AI-powered medical image enhancement and synthetic imaging.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    id: "emily-thompson",
    name: "Dr. Emily Thompson", 
    title: "Chief Medical Officer",
    description: "Board-certified Radiologist, Mayo Clinic alumna. Expert in clinical validation and regulatory affairs for medical AI.",
    image: "https://images.unsplash.com/photo-1559209172-e6eee67c1d4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    id: "james-wilson",
    name: "James Wilson",
    title: "Chief Commercial Officer", 
    description: "Former Philips Healthcare, Global sales leader. 20+ years experience in medical device commercialization.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    id: "lisa-zhang",
    name: "Dr. Lisa Zhang",
    title: "VP of Research",
    description: "MIT PhD, Former Facebook AI Research. Leading our next-generation AI algorithms and clinical research initiatives.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    id: "david-kumar",
    name: "David Kumar",
    title: "VP of Engineering",
    description: "Former Apple, Netflix engineering leader. Architect of our scalable AI platform and infrastructure systems.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  }
];

const companyValues = [
  {
    icon: Heart,
    title: "Patient First",
    description: "Every decision we make prioritizes patient safety, comfort, and care quality. We measure success by the positive impact on patient outcomes."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We push the boundaries of what's possible in medical imaging through cutting-edge AI research and development."
  },
  {
    icon: Shield,
    title: "Trust & Reliability",
    description: "We build transparent, reliable solutions that healthcare professionals can depend on for critical diagnostic decisions."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with clinicians, researchers, and partners to ensure our solutions meet real-world healthcare needs."
  }
];

const milestones = [
  {
    year: "2019",
    title: "Company Founded",
    description: "Medicare spun out from Stanford University with breakthrough AI imaging research."
  },
  {
    year: "2020", 
    title: "First FDA Clearance",
    description: "MedicareHD™ receives FDA 510(k) clearance for MRI enhancement."
  },
  {
    year: "2021",
    title: "Global Expansion", 
    description: "Deployed across 50+ hospitals in North America and Europe."
  },
  {
    year: "2022",
    title: "PET Innovation",
    description: "MedicarePET™ receives CE mark, enabling 75% dose reduction."
  },
  {
    year: "2023",
    title: "Synthetic Breakthrough",
    description: "Industry-first synthetic imaging technology with MedicareSYNTH™."
  },
  {
    year: "2024",
    title: "500+ Installations",
    description: "Reached milestone of 500+ hospital installations worldwide."
  }
];

const stats = [
  { number: "500+", label: "Hospitals Served", icon: Building },
  { number: "25M+", label: "Patients Impacted", icon: Users },
  { number: "50+", label: "Countries", icon: Globe },
  { number: "98%", label: "Satisfaction Rate", icon: Award }
];

export default function Company() {
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
              Leading the Future of Medical AI
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Born from Stanford's cutting-edge research, Medicare is transforming healthcare through 
              innovative AI solutions that make medical imaging faster, safer, and more accessible worldwide.
            </p>
            <Button 
              size="lg"
              className="bg-[var(--medical-blue)] hover:bg-[var(--medical-dark)]"
              onClick={() => document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn Our Story
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
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
                  <div className="text-4xl font-bold text-[var(--medical-blue)] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission & Vision</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    To democratize access to high-quality medical imaging by developing AI solutions 
                    that make advanced diagnostic capabilities available to healthcare providers worldwide, 
                    regardless of their size or location. We believe every patient deserves the best 
                    possible diagnostic care.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    A world where AI-enhanced medical imaging is the standard of care, enabling 
                    faster diagnoses, improved patient outcomes, and more efficient healthcare delivery. 
                    We envision a future where technology amplifies human expertise rather than replacing it.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every solution we develop.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => {
              const IconComponent = value.icon;
              
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center border-0 shadow-lg hover-lift h-full">
                    <CardContent className="p-8">
                      <div className="bg-[var(--medical-blue)] p-4 rounded-full inline-flex mb-6">
                        <IconComponent className="text-white h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our world-class team combines deep medical expertise with cutting-edge AI research 
              to drive innovation in healthcare imaging.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg hover-lift">
                  <CardContent className="p-8 text-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                    />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <div className="text-[var(--medical-blue)] font-medium mb-4">{member.title}</div>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From university research to global healthcare transformation - key milestones in our mission 
              to advance medical AI.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[var(--medical-blue)] opacity-20"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <Badge className="bg-[var(--medical-blue)] text-white mb-3">
                          {milestone.year}
                        </Badge>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline node */}
                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-[var(--medical-blue)] rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-20 bg-[var(--medical-blue)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Join Our Mission</h2>
            <p className="text-xl text-blue-100 mb-8">
              We're always looking for talented individuals who share our passion for transforming 
              healthcare through AI innovation. Join our team and help shape the future of medical imaging.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <MapPin className="text-white h-8 w-8 mx-auto mb-2" />
                <div className="text-white font-medium">Global Remote</div>
                <div className="text-blue-100 text-sm">Work from anywhere</div>
              </div>
              <div className="text-center">
                <TrendingUp className="text-white h-8 w-8 mx-auto mb-2" />
                <div className="text-white font-medium">Growth Opportunities</div>
                <div className="text-blue-100 text-sm">Advance your career</div>
              </div>
              <div className="text-center">
                <Heart className="text-white h-8 w-8 mx-auto mb-2" />
                <div className="text-white font-medium">Meaningful Impact</div>
                <div className="text-blue-100 text-sm">Help save lives</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-[var(--medical-blue)] hover:bg-gray-100"
              >
                View Open Positions
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[var(--medical-blue)]"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact HR
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
