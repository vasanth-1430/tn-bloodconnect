import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'ta';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'site.title': 'Tamil Nadu Blood Foundation',
    'site.subtitle': 'Saving Lives Together',
    'emergency.hotline': 'Emergency: 1962',
    
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.contact': 'Contact Us',
    'nav.facilities': 'Facilities',
    'nav.join': 'Join as Donor',
    'nav.emergency': 'Emergency Requests',
    
    // Home Page
    'hero.title': 'Save Lives Through Blood Donation',
    'hero.subtitle': 'Connecting generous donors with those in urgent need across all 38 districts of Tamil Nadu',
    'stats.donors': 'Active Donors',
    'stats.districts': 'Districts Covered',
    'stats.service': 'Emergency Service',
    'cta.donate': 'Become a Donor',
    'cta.emergency': 'Emergency Request',
    
    // Emergency Section
    'emergency.urgent': 'Urgent Blood Requests',
    'emergency.needed': 'needed for',
    'emergency.contact': 'Contact:',
    
    // Search Section
    'search.title': 'Find Blood Donors',
    'search.subtitle': 'Search by district and blood group to find available donors near you',
    'search.district': 'Search District',
    'search.district.placeholder': 'Enter district name...',
    'search.bloodgroup': 'Blood Group (Optional)',
    'search.bloodgroup.all': 'All Blood Groups',
    'search.button': 'Search Donors',
    
    // Districts
    'districts.title': 'Browse by District',
    'districts.subtitle': 'Select your district to find blood donors in your area',
    'districts.find': 'Find Donors',
    'districts.none': 'No districts found matching',
  },
  ta: {
    // Header  
    'site.title': 'தமிழ்நாடு இரத்த வங்கி அறக்கட்டளை',
    'site.subtitle': 'உயிர்களை காப்போம்',
    'emergency.hotline': 'அவசரம்: 1962',
    
    // Navigation
    'nav.home': 'முகப்பு',
    'nav.about': 'எங்களைப் பற்றி',
    'nav.contact': 'தொடர்பு',
    'nav.facilities': 'வசதிகள்',
    'nav.join': 'தானாளராக சேர',
    'nav.emergency': 'அவசர கோரிக்கைகள்',
    
    // Home Page
    'hero.title': 'இரத்த தானம் மூலம் உயிர்களை காப்பீர்கள்',
    'hero.subtitle': 'தமிழ்நாட்டின் 38 மாவட்டங்களில் உள்ள தேவையுள்ளவர்களுடன் தானாளர்களை இணைக்கும்',
    'stats.donors': 'செயலில் உள்ள தானாளர்கள்',
    'stats.districts': 'மாவட்டங்கள் சேர்க்கப்பட்டது',
    'stats.service': 'அவசர சேவை',
    'cta.donate': 'தானாளராக ஆகுங்கள்',
    'cta.emergency': 'அவசர கோரிக்கை',
    
    // Emergency Section
    'emergency.urgent': 'அவசர இரத்த கோரிக்கைகள்',
    'emergency.needed': 'தேவை',
    'emergency.contact': 'தொடர்பு:',
    
    // Search Section
    'search.title': 'இரத்த தானாளர்களை கண்டறியவும்',
    'search.subtitle': 'உங்கள் அருகிலுள்ள தானாளர்களை கண்டறிய மாவட்டம் மற்றும் இரத்த வகையை தேடவும்',
    'search.district': 'மாவட்டம் தேடவும்',
    'search.district.placeholder': 'மாவட்ட பெயரை உள்ளிடவும்...',
    'search.bloodgroup': 'இரத்த வகை (விருப்பம்)',
    'search.bloodgroup.all': 'அனைத்து இரத்த வகைகள்',
    'search.button': 'தானாளர்களை தேடவும்',
    
    // Districts
    'districts.title': 'மாவட்டம் வாரியாக பார்வையிடவும்',
    'districts.subtitle': 'உங்கள் பகுதியில் உள்ள இரத்த தானாளர்களை கண்டறிய உங்கள் மாவட்டத்தை தேர்ந்தெடுக்கவும்',
    'districts.find': 'தானாளர்களை கண்டறியவும்',
    'districts.none': 'பொருந்தும் மாவட்டங்கள் இல்லை',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ta' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};