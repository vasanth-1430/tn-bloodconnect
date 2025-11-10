import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Phone, MessageCircle, Calendar, CheckCircle, XCircle } from 'lucide-react';
import { sampleDonors } from '@/data/districts';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const DonorList = () => {
  const { district, bloodGroup } = useParams<{ district: string; bloodGroup: string }>();
  const { t } = useLanguage();

  // Filter donors by district and blood group
  const filteredDonors = sampleDonors.filter(
    donor => donor.district === district && donor.bloodGroup === bloodGroup
  );

  const getStatusIcon = (status: string) => {
    return status === 'Available' ? 
      <CheckCircle className="w-4 h-4 text-success" /> : 
      <XCircle className="w-4 h-4 text-destructive" />;
  };

  const getStatusColor = (status: string) => {
    return status === 'Available' ? 'text-success' : 'text-destructive';
  };

  const isRecentDonation = (lastDonated: string) => {
    const donationDate = new Date(lastDonated);
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
    return donationDate > threeMonthsAgo;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link to={`/district/${district}`} className="inline-flex items-center text-primary hover:text-primary-glow mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('donorlist.back')}
          </Link>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">
              {bloodGroup} {t('donorlist.title')} {district}
            </h1>
            <p className="text-xl text-muted-foreground">
              {filteredDonors.length} {t('donorlist.found')}
            </p>
          </div>
        </div>

        {filteredDonors.length === 0 ? (
          <div className="medical-form text-center max-w-2xl mx-auto">
            <div className="py-12">
              <XCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-foreground mb-4">{t('donorlist.none')}</h3>
              <p className="text-muted-foreground mb-6">
                {t('donorlist.none.desc')} {bloodGroup} {t('donorlist.none.desc2')} {district} {t('donorlist.none.desc3')}
              </p>
              <div className="space-y-4">
                <Link to="/join-donor">
                  <Button className="btn-medical">
                    {t('donorlist.register')}
                  </Button>
                </Link>
                <Link to="/emergency">
                  <Button variant="outline" className="btn-outline-medical ml-4">
                    {t('donorlist.emergency')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="medical-form">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-2 font-semibold text-foreground">{t('donorlist.name')}</th>
                    <th className="text-left py-4 px-2 font-semibold text-foreground">{t('donorlist.age')}</th>
                    <th className="text-left py-4 px-2 font-semibold text-foreground">{t('donorlist.bloodgroup')}</th>
                    <th className="text-left py-4 px-2 font-semibold text-foreground">{t('donorlist.lastdonated')}</th>
                    <th className="text-left py-4 px-2 font-semibold text-foreground">{t('donorlist.status')}</th>
                    <th className="text-left py-4 px-2 font-semibold text-foreground">{t('donorlist.contact')}</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredDonors.map((donor) => (
                    <tr key={donor.id} className="border-b border-border hover:bg-muted/30">
                      <td className="py-4 px-2">
                        <div className="font-medium text-foreground">{donor.name}</div>
                      </td>
                      <td className="py-4 px-2 text-muted-foreground">{donor.age} {t('donorlist.years')}</td>
                      <td className="py-4 px-2">
                        <span className="blood-group text-sm">
                          {donor.bloodGroup}
                        </span>
                      </td>
                      <td className="py-4 px-2 text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(donor.lastDonated).toLocaleDateString()}</span>
                        </div>
                      </td>
                      <td className="py-4 px-2">
                        <div className={`flex items-center space-x-2 ${getStatusColor(donor.status)}`}>
                          {getStatusIcon(donor.status)}
                          <span className="font-medium">{donor.status === 'Available' ? t('donorlist.available') : t('donorlist.notavailable')}</span>
                        </div>
                        {isRecentDonation(donor.lastDonated) && (
                          <p className="text-xs text-muted-foreground mt-1">
                            {t('donorlist.recent')}
                          </p>
                        )}
                      </td>
                      <td className="py-4 px-2">
                        {donor.status === 'Available' ? (
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              className="btn-medical"
                              onClick={() => window.open(`tel:${donor.phone}`)}
                            >
                              <Phone className="w-3 h-3 mr-1" />
                              {t('donorlist.call')}
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="btn-outline-medical"
                              onClick={() => window.open(`https://wa.me/${donor.phone.replace('+91', '91')}`)}
                            >
                              <MessageCircle className="w-3 h-3 mr-1" />
                              {t('donorlist.whatsapp')}
                            </Button>
                          </div>
                        ) : (
                          <p className="text-sm text-muted-foreground">{t('donorlist.notavailable')}</p>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 text-center space-x-4">
              <Link to="/join-donor">
                <Button className="btn-medical">
                  {t('donorlist.register')}
                </Button>
              </Link>
              <Link to="/emergency">
                <Button variant="outline" className="btn-outline-medical">
                  {t('donorlist.emergency')}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonorList;