import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Shield, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";
import type { InsertNewsletter } from "@shared/schema";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const newsletterMutation = useMutation({
    mutationFn: async (data: InsertNewsletter) => {
      const response = await apiRequest("POST", "/api/newsletter", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Successfully Subscribed!",
        description: "Thank you for subscribing to our newsletter. You'll receive monthly updates on medical AI innovations.",
        duration: 5000,
      });
      setEmail("");
    },
    onError: () => {
      toast({
        title: "Subscription Failed",
        description: "There was an error subscribing to our newsletter. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      newsletterMutation.mutate({ email });
    }
  };

  return (
    <section className="py-20 bg-[var(--medical-blue)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Updated with Medical AI Innovations
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the latest research, product updates, and industry insights delivered to your inbox monthly.
          </p>

          {/* Newsletter Form */}
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white border-0 text-lg h-12"
                required
              />
              <Button
                type="submit"
                size="lg"
                className="bg-white text-[var(--medical-blue)] hover:bg-gray-100"
                disabled={newsletterMutation.isPending}
              >
                {newsletterMutation.isPending ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
            <p className="text-blue-100 text-sm mt-4">
              Join 10,000+ healthcare professionals. Unsubscribe anytime.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Shield className="text-white h-8 w-8 mx-auto mb-3" />
              <div className="text-white font-medium">HIPAA Compliant</div>
              <div className="text-blue-100 text-sm">Your data is protected</div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Clock className="text-white h-8 w-8 mx-auto mb-3" />
              <div className="text-white font-medium">Monthly Updates</div>
              <div className="text-blue-100 text-sm">No spam, just insights</div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Users className="text-white h-8 w-8 mx-auto mb-3" />
              <div className="text-white font-medium">Expert Content</div>
              <div className="text-blue-100 text-sm">From industry leaders</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
