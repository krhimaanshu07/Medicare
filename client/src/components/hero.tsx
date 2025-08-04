import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Play } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center gradient-bg overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-24 h-24 bg-white/10 rounded-full"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 3, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              AI-Powered <span className="text-yellow-300">Medical Imaging</span> Revolution
            </h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Experience unprecedented speed and quality in MRI and PET imaging with our cutting-edge AI solutions. 
              Reduce scan times by up to 80% while enhancing image clarity.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">80%</div>
                <div className="text-sm text-blue-100">Faster Scans</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">FDA</div>
                <div className="text-sm text-blue-100">Cleared</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">24/7</div>
                <div className="text-sm text-blue-100">Support</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-[var(--medical-blue)] hover:bg-gray-100"
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Book Free Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[var(--medical-blue)]"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Demo Video
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Interactive Demo Preview */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="glass-effect rounded-2xl p-6 border border-white/20">
              {/* AI Enhancement Preview */}
              <div className="mb-6">
                <h3 className="text-white text-xl font-semibold mb-4">Live AI Enhancement Preview</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="bg-gray-800 rounded-lg p-4 mb-2">
                      <img
                        src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
                        alt="Original MRI scan"
                        className="w-full h-32 object-cover rounded"
                      />
                    </div>
                    <div className="text-white text-sm">Original: 4:30</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-gray-800 rounded-lg p-4 mb-2">
                      <img
                        src="https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
                        alt="AI enhanced MRI scan"
                        className="w-full h-32 object-cover rounded"
                      />
                    </div>
                    <div className="text-yellow-300 text-sm">AI Enhanced: 0:54</div>
                  </div>
                </div>
              </div>

              {/* Processing Indicator */}
              <div className="bg-white/5 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white text-sm">AI Processing</span>
                  <Badge className="bg-green-600 text-white">Complete</Badge>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <motion.div
                    className="bg-green-500 h-2 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, delay: 1 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
