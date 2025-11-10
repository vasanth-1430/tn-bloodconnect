import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Droplet } from 'lucide-react';
import { bloodGroups } from '@/data/districts';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const BloodGroupSelection = () => {
  const { district } = useParams<{ district: string }>();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary-glow mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('bloodgroup.back')}
          </Link>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">
              {t('bloodgroup.title')} {district}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('bloodgroup.subtitle')}
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
                    <span className="text-sm text-muted-foreground">{t('bloodgroup.type')}</span>
                  </div>
                  
                  <Button className="btn-medical w-full" size="sm">
                    {t('districts.find')}
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Information Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="medical-form">
            <h3 className="text-xl font-semibold text-primary mb-4">{t('bloodgroup.compatibility')}</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="font-medium">{t('bloodgroup.universal.donor')}</span>
                <span className="text-primary">O-</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">{t('bloodgroup.universal.recipient')}</span>
                <span className="text-primary">AB+</span>
              </div>
              <p className="text-muted-foreground pt-2">
                {t('bloodgroup.verify')}
              </p>
            </div>
          </div>
          
          <div className="medical-form">
            <h3 className="text-xl font-semibold text-primary mb-4">{t('bloodgroup.guidelines')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• {t('bloodgroup.gap')}</li>
              <li>• {t('bloodgroup.age')}</li>
              <li>• {t('bloodgroup.weight')}</li>
              <li>• {t('bloodgroup.health')}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodGroupSelection;