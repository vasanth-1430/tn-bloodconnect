import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with Tamil Nadu Blood Foundation. We're here to help with your blood donation needs.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="medical-form">
              <h2 className="text-2xl font-bold text-primary mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                {/* Emergency Helpline */}
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <Phone className="w-5 h-5 text-destructive" />
                    <h3 className="font-semibold text-destructive">Emergency Helpline</h3>
                  </div>
                  <p className="text-2xl font-bold text-destructive">1962</p>
                  <p className="text-sm text-muted-foreground">Available 24/7 for blood emergencies</p>
                </div>

                {/* General Contact */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">General Helpline</h3>
                      <p className="text-muted-foreground">+91 44 2345 6789</p>
                      <p className="text-sm text-muted-foreground">Mon - Fri, 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-muted-foreground">info@tnbloodfoundation.org</p>
                      <p className="text-muted-foreground">emergency@tnbloodfoundation.org</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Address</h3>
                      <p className="text-muted-foreground">
                        Tamil Nadu Blood Foundation<br />
                        123 Health Care Complex<br />
                        Anna Salai, Chennai - 600002<br />
                        Tamil Nadu, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Office Hours</h3>
                      <div className="text-muted-foreground">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 1:00 PM</p>
                        <p>Sunday: Closed</p>
                        <p className="text-destructive font-medium mt-1">
                          Emergency service available 24/7
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* District Coordinators */}
            <div className="medical-form mt-8">
              <h3 className="text-lg font-semibold text-primary mb-4">District Coordinators</h3>
              <p className="text-muted-foreground text-sm mb-4">
                For district-specific queries, contact your local coordinator:
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Chennai:</span>
                  <span className="text-foreground">+91 44 1234 5678</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Coimbatore:</span>
                  <span className="text-foreground">+91 422 123 4567</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Madurai:</span>
                  <span className="text-foreground">+91 452 234 5678</span>
                </div>
                <p className="text-xs text-muted-foreground pt-2">
                  More district coordinators available on request
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="medical-form">
              <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="form-label">Full Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="form-input"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="form-label">Email Address *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="form-label">Subject *</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    className="form-input"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="form-label">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please provide details about your inquiry..."
                    className="form-input min-h-[120px] resize-y"
                    required
                  />
                </div>

                <Button type="submit" className="btn-medical">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* FAQ Section */}
            <div className="medical-form mt-8">
              <h3 className="text-xl font-semibold text-primary mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-2">How can I register as a blood donor?</h4>
                  <p className="text-muted-foreground text-sm">
                    Visit our "Join as Donor" page and fill out the registration form with your details.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-foreground mb-2">Is there a cost for using this service?</h4>
                  <p className="text-muted-foreground text-sm">
                    Our blood donor connection service is completely free for both donors and recipients.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-foreground mb-2">How quickly can I find a donor in an emergency?</h4>
                  <p className="text-muted-foreground text-sm">
                    Our emergency service operates 24/7. Call 1962 for immediate assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;