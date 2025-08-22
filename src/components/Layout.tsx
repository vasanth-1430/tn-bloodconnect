import { Link, useLocation } from 'react-router-dom';
import { Heart, Phone, MapPin, Globe } from 'lucide-react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact Us' },
    { path: '/facilities', label: 'Facilities' },
    { path: '/join-donor', label: 'Join as Donor' },
    { path: '/emergency', label: 'Emergency Requests' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo & Title */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-medical rounded-full flex items-center justify-center">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">Tamil Nadu Blood Foundation</h1>
                <p className="text-sm text-muted-foreground">Saving Lives Together</p>
              </div>
            </div>
            
            {/* Language Toggle & Emergency */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm">
                <Globe className="w-4 h-4" />
                <span className="text-primary font-medium">English</span>
                <span className="text-muted-foreground">|</span>
                <span className="text-muted-foreground cursor-pointer hover:text-primary">தமிழ்</span>
              </div>
              <div className="hidden md:flex items-center space-x-2 bg-destructive text-white px-4 py-2 rounded-lg">
                <Phone className="w-4 h-4" />
                <span className="font-medium">Emergency: 1962</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto py-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link whitespace-nowrap ${
                  isActive(item.path) ? 'active' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Foundation Info */}
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-medical rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary">Tamil Nadu Blood Foundation</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Connecting blood donors with those in need across all 38 districts of Tamil Nadu. 
                Together, we save lives through the gift of blood donation.
              </p>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Serving all districts of Tamil Nadu, India</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/emergency" className="text-muted-foreground hover:text-primary">Emergency Requests</Link></li>
                <li><Link to="/join-donor" className="text-muted-foreground hover:text-primary">Become a Donor</Link></li>
                <li><Link to="/facilities" className="text-muted-foreground hover:text-primary">Blood Banks</Link></li>
                <li><Link to="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              </ul>
            </div>

            {/* Emergency Contact */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Emergency Contact</h4>
              <div className="space-y-3">
                <div className="bg-destructive text-white p-3 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span className="font-semibold">24/7 Helpline</span>
                  </div>
                  <p className="font-bold text-lg">1962</p>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>Blood Bank Emergency</p>
                  <p>Available round the clock</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Tamil Nadu Blood Foundation. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-muted-foreground text-sm">Social Media:</span>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary">Facebook</a>
                <a href="#" className="text-muted-foreground hover:text-primary">Twitter</a>
                <a href="#" className="text-muted-foreground hover:text-primary">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;