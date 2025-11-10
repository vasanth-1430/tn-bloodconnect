import { Heart, Users, MapPin, Award, Target, Eye } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              About Tamil Nadu Blood Foundation
            </h1>
            <p className="text-xl text-muted-foreground">
              Bridging the gap between generous blood donors and those in urgent need across Tamil Nadu
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="medical-form">
            <div className="flex items-center space-x-3 mb-6">
              <Target className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold text-primary">Our Mission</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To create a robust network connecting blood donors with patients in need across all 38 districts of Tamil Nadu. 
              We strive to ensure that no life is lost due to unavailability of blood by maintaining an efficient, 
              accessible, and reliable blood donation system.
            </p>
          </div>

          <div className="medical-form">
            <div className="flex items-center space-x-3 mb-6">
              <Eye className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold text-primary">Our Vision</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To become Tamil Nadu's most trusted platform for blood donation, where every citizen has easy access 
              to safe blood when needed, and every willing donor can contribute to saving lives in their community 
              and beyond.
            </p>
          </div>
        </section>

        {/* What We Do */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">What We Do</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive platform connects donors with recipients and provides essential services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="medical-form text-center">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-4">Donor Registration</h3>
              <p className="text-muted-foreground">
                Easy registration process for willing blood donors across all districts of Tamil Nadu
              </p>
            </div>

            <div className="medical-form text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-4">Emergency Response</h3>
              <p className="text-muted-foreground">
                24/7 emergency blood request system connecting patients with available donors instantly
              </p>
            </div>

            <div className="medical-form text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-4">District Coverage</h3>
              <p className="text-muted-foreground">
                Complete coverage of all 38 Tamil Nadu districts with localized donor networks
              </p>
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="bg-gradient-hero text-white rounded-2xl p-12 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-white/80">Making a difference across Tamil Nadu</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-white/80">Registered Donors</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">38</div>
              <p className="text-white/80">Districts Covered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100+</div>
              <p className="text-white/80">Lives Saved</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="text-white/80">Emergency Service</p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="medical-form text-center">
              <Award className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-primary mb-2">Trust</h3>
              <p className="text-sm text-muted-foreground">
                Building trust through transparency and reliability
              </p>
            </div>

            <div className="medical-form text-center">
              <Heart className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-primary mb-2">Compassion</h3>
              <p className="text-sm text-muted-foreground">
                Driven by empathy and care for human life
              </p>
            </div>

            <div className="medical-form text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-primary mb-2">Community</h3>
              <p className="text-sm text-muted-foreground">
                Building stronger communities through collaboration
              </p>
            </div>

            <div className="medical-form text-center">
              <Target className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-primary mb-2">Excellence</h3>
              <p className="text-sm text-muted-foreground">
                Committed to the highest standards of service
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="medical-form text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Join Our Mission</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Be part of our life-saving network. Whether you want to donate blood or need emergency assistance, 
            we're here to help connect you with the right people.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/join-donor" className="btn-medical inline-block">
              Become a Donor
            </a>
            <a href="/contact" className="btn-outline-medical inline-block">
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;