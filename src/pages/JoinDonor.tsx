import { useState } from 'react';
import { Heart, CheckCircle, AlertCircle } from 'lucide-react';
import { tamilNaduDistricts, bloodGroups } from '@/data/districts';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

const JoinDonor = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: '',
    bloodGroup: '',
    district: '',
    mobileNumber: '',
    alternateNumber: '',
    lastDonated: '',
    medicalConditions: '',
    agreement: false
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreement) {
      toast({
        title: "Agreement Required",
        description: "Please agree to the terms and conditions to proceed.",
        variant: "destructive",
      });
      return;
    }

    // Handle form submission
    toast({
      title: "Registration Successful!",
      description: "Welcome to Tamil Nadu Blood Foundation. Your registration is being processed.",
    });
    
    // Reset form
    setFormData({
      fullName: '',
      age: '',
      gender: '',
      bloodGroup: '',
      district: '',
      mobileNumber: '',
      alternateNumber: '',
      lastDonated: '',
      medicalConditions: '',
      agreement: false
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const eligibilityRequirements = [
    "Age between 18-65 years",
    "Minimum weight of 50kg",
    "Good general health",
    "No history of hepatitis, HIV, or other blood-borne diseases",
    "No major surgery in the last 6 months",
    "Not pregnant or breastfeeding",
    "No recent tattoos or piercings (within 6 months)"
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <section className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-medical rounded-full flex items-center justify-center">
              <Heart className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Join as Blood Donor
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Become a life-saver by registering as a blood donor. Your single donation can save up to three lives.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Eligibility & Benefits */}
          <div className="lg:col-span-1 space-y-8">
            {/* Eligibility */}
            <div className="medical-form">
              <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Eligibility Requirements
              </h2>
              <ul className="space-y-2">
                {eligibilityRequirements.map((requirement, index) => (
                  <li key={index} className="flex items-start space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="medical-form">
              <h3 className="text-xl font-bold text-primary mb-4">Benefits of Donating</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start space-x-2">
                  <Heart className="w-4 h-4 text-primary mt-0.5" />
                  <span className="text-muted-foreground">Save up to 3 lives with one donation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Heart className="w-4 h-4 text-primary mt-0.5" />
                  <span className="text-muted-foreground">Free health check-up before donation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Heart className="w-4 h-4 text-primary mt-0.5" />
                  <span className="text-muted-foreground">Reduces risk of heart disease</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Heart className="w-4 h-4 text-primary mt-0.5" />
                  <span className="text-muted-foreground">Helps maintain healthy iron levels</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Heart className="w-4 h-4 text-primary mt-0.5" />
                  <span className="text-muted-foreground">Free blood group testing</span>
                </li>
              </ul>
            </div>

            {/* Important Note */}
            <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-warning mt-0.5" />
                <div>
                  <h4 className="font-semibold text-warning mb-2">Important Note</h4>
                  <p className="text-sm text-muted-foreground">
                    Donation is safe and voluntary. You can donate blood every 3 months. 
                    Our medical team will conduct a health screening before each donation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="lg:col-span-2">
            <div className="medical-form">
              <h2 className="text-2xl font-bold text-primary mb-8">Donor Registration Form</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">Personal Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="form-label">Full Name *</label>
                      <Input
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="form-input"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="form-label">Age *</label>
                      <Input
                        name="age"
                        type="number"
                        min="18"
                        max="65"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="Enter your age"
                        className="form-input"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="form-label">Gender *</label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="form-input"
                        required
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="form-label">Blood Group *</label>
                      <select
                        name="bloodGroup"
                        value={formData.bloodGroup}
                        onChange={handleChange}
                        className="form-input"
                        required
                      >
                        <option value="">Select Blood Group</option>
                        {bloodGroups.map(group => (
                          <option key={group} value={group}>{group}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Location Information */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">Location Information</h3>
                  
                  <div className="space-y-2">
                    <label className="form-label">District *</label>
                    <select
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      className="form-input"
                      required
                    >
                      <option value="">Select District</option>
                      {tamilNaduDistricts.map(district => (
                        <option key={district} value={district}>{district}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">Contact Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="form-label">Mobile Number *</label>
                      <Input
                        name="mobileNumber"
                        type="tel"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        placeholder="+91 9876543210"
                        className="form-input"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="form-label">Alternate Number</label>
                      <Input
                        name="alternateNumber"
                        type="tel"
                        value={formData.alternateNumber}
                        onChange={handleChange}
                        placeholder="+91 9876543210 (Optional)"
                        className="form-input"
                      />
                    </div>
                  </div>
                </div>

                {/* Medical Information */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">Medical Information</h3>
                  
                  <div className="grid grid-cols-1 gap-6">
                    <div className="space-y-2">
                      <label className="form-label">Last Donated Date (if applicable)</label>
                      <Input
                        name="lastDonated"
                        type="date"
                        value={formData.lastDonated}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="form-label">Medical Conditions (if any)</label>
                      <textarea
                        name="medicalConditions"
                        value={formData.medicalConditions}
                        onChange={handleChange}
                        placeholder="Please mention any medical conditions, medications, or allergies..."
                        className="form-input min-h-[80px] resize-y"
                      />
                    </div>
                  </div>
                </div>

                {/* Agreement */}
                <div className="bg-muted/30 rounded-lg p-6">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="agreement"
                      checked={formData.agreement}
                      onChange={handleChange}
                      className="mt-1"
                      required
                    />
                    <div className="text-sm">
                      <p className="text-foreground font-medium mb-2">Terms and Conditions</p>
                      <p className="text-muted-foreground">
                        I hereby declare that the information provided is true and accurate. 
                        I understand that blood donation is voluntary and I consent to be contacted 
                        for blood donation emergencies. I agree to maintain my availability status 
                        and follow the donation guidelines provided by Tamil Nadu Blood Foundation.
                      </p>
                    </div>
                  </div>
                </div>

                <Button type="submit" className="btn-medical w-full md:w-auto">
                  Register as Blood Donor
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinDonor;