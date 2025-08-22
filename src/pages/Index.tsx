import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, AlertTriangle, Heart, Users, Calendar } from 'lucide-react';
import { tamilNaduDistricts, sampleEmergencyRequests } from '@/data/districts';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchBloodGroup, setSearchBloodGroup] = useState('');

  const filteredDistricts = tamilNaduDistricts.filter(district =>
    district.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const urgentRequests = sampleEmergencyRequests.filter(req => req.urgency === 'High');

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Save Lives Through Blood Donation
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Connecting generous donors with those in urgent need across all 38 districts of Tamil Nadu
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
              <div className="flex items-center justify-center space-x-2">
                <Users className="w-6 h-6" />
                <span className="text-2xl font-bold">500+</span>
              </div>
              <p className="text-white/80">Active Donors</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
              <div className="flex items-center justify-center space-x-2">
                <Heart className="w-6 h-6" />
                <span className="text-2xl font-bold">38</span>
              </div>
              <p className="text-white/80">Districts Covered</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
              <div className="flex items-center justify-center space-x-2">
                <Calendar className="w-6 h-6" />
                <span className="text-2xl font-bold">24/7</span>
              </div>
              <p className="text-white/80">Emergency Service</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/join-donor">
              <Button size="lg" className="btn-medical text-lg px-8 py-4">
                Become a Donor
              </Button>
            </Link>
            <Link to="/emergency">
              <Button size="lg" variant="outline" className="btn-outline-medical text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
                Emergency Request
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Emergency Alerts */}
        {urgentRequests.length > 0 && (
          <section className="mb-12">
            <div className="emergency-banner">
              <div className="flex items-center space-x-3 mb-3">
                <AlertTriangle className="w-6 h-6" />
                <h2 className="text-xl font-bold">Urgent Blood Requests</h2>
              </div>
              <div className="grid gap-3">
                {urgentRequests.map((request) => (
                  <div key={request.id} className="bg-white/10 rounded-lg p-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold">
                          {request.bloodGroup} needed for {request.patientName}
                        </p>
                        <p className="text-white/80 text-sm">
                          {request.hospitalName}, {request.district}
                        </p>
                      </div>
                      <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-destructive">
                        Contact: {request.contactNumber}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Search Section */}
        <section className="mb-12">
          <div className="medical-form max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary mb-4">Find Blood Donors</h2>
              <p className="text-muted-foreground">
                Search by district and blood group to find available donors near you
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="space-y-2">
                <label className="form-label">Search District</label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Enter district name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="form-input pl-10"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="form-label">Blood Group (Optional)</label>
                <select 
                  value={searchBloodGroup}
                  onChange={(e) => setSearchBloodGroup(e.target.value)}
                  className="form-input"
                >
                  <option value="">All Blood Groups</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
              </div>
              
              <div className="flex items-end">
                <Button className="btn-medical w-full">
                  Search Donors
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Districts Grid */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">Browse by District</h2>
            <p className="text-muted-foreground">
              Select your district to find blood donors in your area
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {filteredDistricts.map((district) => (
              <Link key={district} to={`/district/${district}`}>
                <div className="district-card">
                  <div className="flex items-center space-x-3 mb-4">
                    <MapPin className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-foreground">{district}</h3>
                  </div>
                  <Button className="btn-medical w-full" size="sm">
                    Find Donors
                  </Button>
                </div>
              </Link>
            ))}
          </div>
          
          {filteredDistricts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No districts found matching "{searchTerm}"
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Index;