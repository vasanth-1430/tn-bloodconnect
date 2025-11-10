import { MapPin, Phone, Clock, Calendar, Building2, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Facilities = () => {
  const { t } = useLanguage();
  const bloodBanks = [
    {
      id: 1,
      name: "Government General Hospital Blood Bank",
      district: "Chennai",
      address: "Park Town, Chennai - 600003",
      phone: "+91 44 2567 8901",
      hours: "24/7",
      type: "Government",
      services: ["Emergency Blood Supply", "Blood Storage", "Component Separation"]
    },
    {
      id: 2,
      name: "Coimbatore Medical College Blood Bank", 
      district: "Coimbatore",
      address: "Avinashi Road, Coimbatore - 641014",
      phone: "+91 422 2345 678",
      hours: "24/7",
      type: "Government",
      services: ["Blood Collection", "Storage", "Testing"]
    },
    {
      id: 3,
      name: "Madurai Medical College Blood Bank",
      district: "Madurai", 
      address: "Alagappa Chettiar Govt Hospital, Madurai - 625020",
      phone: "+91 452 2345 789",
      hours: "24/7", 
      type: "Government",
      services: ["Blood Banking", "Apheresis", "Emergency Supply"]
    }
  ];

  const upcomingCamps = [
    {
      id: 1,
      title: "Chennai Corporate Blood Donation Drive",
      date: "2024-02-15",
      time: "9:00 AM - 5:00 PM",
      venue: "Express Avenue Mall, Chennai",
      organizer: "Chennai IT Companies Association",
      expectedDonors: 200
    },
    {
      id: 2,
      title: "Coimbatore University Blood Camp",
      date: "2024-02-18",
      time: "10:00 AM - 4:00 PM", 
      venue: "Anna University, Coimbatore",
      organizer: "National Service Scheme",
      expectedDonors: 150
    },
    {
      id: 3,
      title: "Madurai Temple Blood Donation",
      date: "2024-02-22",
      time: "8:00 AM - 2:00 PM",
      venue: "Meenakshi Amman Temple Complex",
      organizer: "Tamil Nadu Blood Foundation",
      expectedDonors: 300
    }
  ];

  const emergencyNumbers = [
    {
      service: "State Blood Bank Helpline",
      number: "1962",
      description: "24/7 emergency blood requirements"
    },
    {
      service: "Ambulance Service",
      number: "108", 
      description: "Emergency medical transportation"
    },
    {
      service: "Health Department Helpline",
      number: "+91 44 2567 9999",
      description: "Medical emergencies and guidance"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Blood Bank Facilities
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Government blood banks, emergency helplines, and upcoming donation camps across Tamil Nadu
          </p>
        </section>

        {/* Emergency Numbers */}
        <section className="mb-16">
          <div className="medical-form">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">Emergency Helplines</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {emergencyNumbers.map((emergency, index) => (
                <div key={index} className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 text-center">
                  <Phone className="w-8 h-8 text-destructive mx-auto mb-3" />
                  <h3 className="font-bold text-destructive mb-2">{emergency.service}</h3>
                  <p className="text-2xl font-bold text-destructive mb-2">{emergency.number}</p>
                  <p className="text-sm text-muted-foreground">{emergency.description}</p>
                  <Button 
                    className="btn-emergency mt-3"
                    onClick={() => window.open(`tel:${emergency.number}`)}
                  >
                    Call Now
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blood Banks */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">Government Blood Banks</h2>
            <p className="text-muted-foreground">
              Major government blood banks across Tamil Nadu districts
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {bloodBanks.map((bank) => (
              <div key={bank.id} className="medical-form">
                <div className="flex items-start space-x-3 mb-4">
                  <Building2 className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-primary">{bank.name}</h3>
                    <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                      {bank.type}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">{bank.district}</p>
                      <p className="text-sm text-muted-foreground">{bank.address}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <p className="text-sm text-foreground">{bank.phone}</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <p className="text-sm text-foreground">Operating Hours: {bank.hours}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-foreground mb-2">Services:</h4>
                  <ul className="space-y-1">
                    {bank.services.map((service, index) => (
                      <li key={index} className="text-sm text-muted-foreground">
                        • {service}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-3">
                  <Button 
                    className="btn-medical flex-1"
                    onClick={() => window.open(`tel:${bank.phone}`)}
                  >
                    <Phone className="w-3 h-3 mr-1" />
                    Call
                  </Button>
                  <Button 
                    variant="outline" 
                    className="btn-outline-medical flex-1"
                    onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(bank.address)}`)}
                  >
                    <MapPin className="w-3 h-3 mr-1" />
                    Directions
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Blood Donation Camps */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">Upcoming Blood Donation Camps</h2>
            <p className="text-muted-foreground">
              Join our organized blood donation drives across Tamil Nadu
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {upcomingCamps.map((camp) => (
              <div key={camp.id} className="medical-form">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-primary">{camp.title}</h3>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    Upcoming
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <p className="text-foreground">
                      {new Date(camp.date).toLocaleDateString('en-IN', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <p className="text-foreground">{camp.time}</p>
                  </div>

                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-muted-foreground mt-0.5" />
                    <p className="text-foreground">{camp.venue}</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Building2 className="w-4 h-4 text-muted-foreground" />
                    <p className="text-muted-foreground">Organized by: {camp.organizer}</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <p className="text-muted-foreground">Expected Donors: {camp.expectedDonors}</p>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button className="btn-medical flex-1">
                    Register for Camp
                  </Button>
                  <Button 
                    variant="outline" 
                    className="btn-outline-medical flex-1"
                    onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(camp.venue)}`)}
                  >
                    <MapPin className="w-3 h-3 mr-1" />
                    Location
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* How to Organize a Camp */}
          <div className="medical-form mt-12">
            <h3 className="text-xl font-bold text-primary mb-6 text-center">
              Want to Organize a Blood Donation Camp?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Requirements:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Minimum 50 expected donors</li>
                  <li>• Proper venue with adequate space</li>
                  <li>• Medical staff coordination</li>
                  <li>• Advance booking (minimum 2 weeks)</li>
                  <li>• Necessary permits and approvals</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-3">We Provide:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Trained medical staff</li>
                  <li>• All medical equipment</li>
                  <li>• Blood collection bags</li>
                  <li>• Safety and hygiene supplies</li>
                  <li>• Certificates for donors</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <Button className="btn-medical">
                Contact Us to Organize a Camp
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Facilities;