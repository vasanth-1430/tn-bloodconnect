import { useState } from 'react';
import { AlertTriangle, Phone, Clock, MapPin, Droplet, Plus } from 'lucide-react';
import { tamilNaduDistricts, bloodGroups, sampleEmergencyRequests } from '@/data/districts';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

const Emergency = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    patientName: '',
    hospitalName: '',
    hospitalLocation: '',
    district: '',
    bloodGroup: '',
    unitsNeeded: '',
    contactNumber: '',
    urgency: 'High',
    additionalInfo: ''
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Emergency Request Posted!",
      description: "Your blood requirement has been posted. Donors will be contacted immediately.",
    });
    
    // Reset form
    setFormData({
      patientName: '',
      hospitalName: '',
      hospitalLocation: '',
      district: '',
      bloodGroup: '',
      unitsNeeded: '',
      contactNumber: '',
      urgency: 'High',
      additionalInfo: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'High': return 'text-destructive bg-destructive/10 border-destructive/20';
      case 'Medium': return 'text-warning bg-warning/10 border-warning/20';
      case 'Low': return 'text-success bg-success/10 border-success/20';
      default: return 'text-muted-foreground bg-muted/10 border-border';
    }
  };

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return `${Math.floor(diffInHours / 24)}d ago`;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Emergency Header */}
      <section className="bg-gradient-to-r from-destructive to-warning text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <AlertTriangle className="w-16 h-16 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Emergency Blood Requests
          </h1>
          <p className="text-xl text-white/90">
            24/7 Emergency Blood Donor Network - Every Second Counts
          </p>
          <div className="mt-6 bg-white/20 rounded-lg p-4 max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-2">
              <Phone className="w-5 h-5" />
              <span className="font-bold text-lg">Emergency Helpline: 1962</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Emergency Request Form */}
          <div className="lg:col-span-2">
            <div className="medical-form">
              <div className="flex items-center space-x-3 mb-6">
                <Plus className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-primary">Post Emergency Request</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Patient Information */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">Patient Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="form-label">Patient Name *</label>
                      <Input
                        name="patientName"
                        value={formData.patientName}
                        onChange={handleChange}
                        placeholder="Enter patient's name"
                        className="form-input"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="form-label">Blood Group Required *</label>
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

                    <div className="space-y-2">
                      <label className="form-label">Units Needed *</label>
                      <Input
                        name="unitsNeeded"
                        type="number"
                        min="1"
                        value={formData.unitsNeeded}
                        onChange={handleChange}
                        placeholder="Number of units"
                        className="form-input"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="form-label">Urgency Level *</label>
                      <select
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleChange}
                        className="form-input"
                        required
                      >
                        <option value="High">High - Immediate (within 2 hours)</option>
                        <option value="Medium">Medium - Urgent (within 6 hours)</option>
                        <option value="Low">Low - Planned (within 24 hours)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Hospital Information */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">Hospital Information</h3>
                  
                  <div className="grid grid-cols-1 gap-6">
                    <div className="space-y-2">
                      <label className="form-label">Hospital Name *</label>
                      <Input
                        name="hospitalName"
                        value={formData.hospitalName}
                        onChange={handleChange}
                        placeholder="Enter hospital name"
                        className="form-input"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="form-label">Hospital Location *</label>
                        <Input
                          name="hospitalLocation"
                          value={formData.hospitalLocation}
                          onChange={handleChange}
                          placeholder="Hospital address/location"
                          className="form-input"
                          required
                        />
                      </div>

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
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">Contact Information</h3>
                  
                  <div className="grid grid-cols-1 gap-6">
                    <div className="space-y-2">
                      <label className="form-label">Contact Number *</label>
                      <Input
                        name="contactNumber"
                        type="tel"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        placeholder="+91 9876543210"
                        className="form-input"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="form-label">Additional Information</label>
                      <textarea
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        placeholder="Any additional information (medical condition, preferred time for donation, etc.)"
                        className="form-input min-h-[80px] resize-y"
                      />
                    </div>
                  </div>
                </div>

                <Button type="submit" className="btn-emergency w-full md:w-auto">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Post Emergency Request
                </Button>
              </form>
            </div>
          </div>

          {/* Current Emergency Requests */}
          <div className="lg:col-span-1">
            <div className="medical-form">
              <h2 className="text-xl font-bold text-primary mb-6">Current Emergency Requests</h2>
              
              <div className="space-y-4">
                {sampleEmergencyRequests.map((request) => (
                  <div key={request.id} className={`border rounded-lg p-4 ${getUrgencyColor(request.urgency)}`}>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <Droplet className="w-5 h-5" />
                        <span className="font-bold text-lg">{request.bloodGroup}</span>
                      </div>
                      <span className="text-xs font-medium px-2 py-1 rounded">
                        {request.urgency}
                      </span>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <p className="font-medium">Patient: {request.patientName}</p>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3" />
                        <span>{request.hospitalName}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3" />
                        <span>{request.district}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{getTimeAgo(request.requestDate)}</span>
                      </div>
                    </div>
                    
                    <Button 
                      size="sm" 
                      className="btn-medical w-full mt-3"
                      onClick={() => window.open(`tel:${request.contactNumber}`)}
                    >
                      <Phone className="w-3 h-3 mr-1" />
                      Call: {request.contactNumber}
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Guidelines */}
            <div className="medical-form mt-8">
              <h3 className="text-lg font-semibold text-primary mb-4">Emergency Guidelines</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Verify blood group compatibility before donation</li>
                <li>• Contact hospital directly for urgent requirements</li>
                <li>• Donors should carry valid ID and health certificate</li>
                <li>• Report fake or fraudulent requests immediately</li>
                <li>• Emergency helpline available 24/7: 1962</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergency;