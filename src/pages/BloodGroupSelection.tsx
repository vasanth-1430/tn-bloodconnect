import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Droplet } from 'lucide-react';
import { bloodGroups } from '@/data/districts';
import { Button } from '@/components/ui/button';

const BloodGroupSelection = () => {
  const { district } = useParams<{ district: string }>();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary-glow mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Districts
          </Link>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">
              Blood Donors in {district}
            </h1>
            <p className="text-xl text-muted-foreground">
              Select the blood group you need
            </p>
          </div>
        </div>

        {/* Blood Group Grid */}
        <div className="medical-form max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {bloodGroups.map((bloodGroup) => (
              <Link 
                key={bloodGroup} 
                to={`/donors/${district}/${bloodGroup}`}
                className="block"
              >
                <div className="district-card text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="blood-group">
                      {bloodGroup}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <Droplet className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Blood Type</span>
                  </div>
                  
                  <Button className="btn-medical w-full" size="sm">
                    Find Donors
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Information Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="medical-form">
            <h3 className="text-xl font-semibold text-primary mb-4">Blood Compatibility</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="font-medium">Universal Donor:</span>
                <span className="text-primary">O-</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Universal Recipient:</span>
                <span className="text-primary">AB+</span>
              </div>
              <p className="text-muted-foreground pt-2">
                Remember: Always verify compatibility with medical professionals before transfusion.
              </p>
            </div>
          </div>
          
          <div className="medical-form">
            <h3 className="text-xl font-semibold text-primary mb-4">Donation Guidelines</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Minimum 3-month gap between donations</li>
              <li>• Age: 18-65 years</li>
              <li>• Weight: Minimum 50kg</li>
              <li>• Good health condition required</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodGroupSelection;