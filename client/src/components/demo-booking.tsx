import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Video, TrendingUp, Settings, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import type { InsertDemoBooking } from "@shared/schema";

export function DemoBooking() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    institution: "",
    primaryInterest: "",
    preferredDate: "",
    preferredTime: "",
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const demoMutation = useMutation({
    mutationFn: async (data: InsertDemoBooking) => {
      const response = await apiRequest("POST", "/api/demo-bookings", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Demo Booked Successfully!",
        description: "We'll contact you within 24 hours to confirm your demo session.",
        duration: 5000,
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        institution: "",
        primaryInterest: "",
        preferredDate: "",
        preferredTime: "",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/demo-bookings"] });
    },
    onError: () => {
      toast({
        title: "Booking Failed",
        description: "There was an error booking your demo. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    demoMutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="demo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">See Our AI in Action</h2>
            <p className="text-xl text-gray-600 mb-8">
              Book a personalized demo and witness how our AI technology can transform your medical imaging workflow.
            </p>

            {/* Demo Benefits */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Video className="text-[var(--medical-blue)] h-6 w-6 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Live Product Demo</h4>
                  <p className="text-gray-600">See real-time AI enhancement on actual medical images</p>
                </div>
              </div>
              <div className="flex items-start">
                <TrendingUp className="text-[var(--medical-blue)] h-6 w-6 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">ROI Analysis</h4>
                  <p className="text-gray-600">Calculate potential time and cost savings for your facility</p>
                </div>
              </div>
              <div className="flex items-start">
                <Settings className="text-[var(--medical-blue)] h-6 w-6 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Integration Planning</h4>
                  <p className="text-gray-600">Discuss seamless integration with your existing systems</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Demo Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-[var(--medical-tint)] border-0">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Book Your Demo</h3>
                    <p className="text-gray-600">Choose your preferred time and we'll set up everything for you.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="john.doe@hospital.com"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="institution">Institution</Label>
                    <Input
                      id="institution"
                      value={formData.institution}
                      onChange={(e) => handleInputChange("institution", e.target.value)}
                      placeholder="Hospital/Clinic Name"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="primaryInterest">Primary Interest</Label>
                    <Select onValueChange={(value) => handleInputChange("primaryInterest", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your primary interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="MRI Enhancement">MRI Enhancement</SelectItem>
                        <SelectItem value="PET Imaging">PET Imaging</SelectItem>
                        <SelectItem value="Synthetic Imaging">Synthetic Imaging</SelectItem>
                        <SelectItem value="Complete Suite">Complete Suite</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Preferred Date & Time</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                        required
                        min={new Date().toISOString().split('T')[0]}
                      />
                      <Select onValueChange={(value) => handleInputChange("preferredTime", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="9:00 AM">9:00 AM</SelectItem>
                          <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                          <SelectItem value="11:00 AM">11:00 AM</SelectItem>
                          <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                          <SelectItem value="3:00 PM">3:00 PM</SelectItem>
                          <SelectItem value="4:00 PM">4:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[var(--medical-blue)] hover:bg-[var(--medical-dark)]"
                    size="lg"
                    disabled={demoMutation.isPending}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {demoMutation.isPending ? "Scheduling..." : "Schedule Demo"}
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    No commitment required. Cancel anytime.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
