import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ArrowRight, Phone, Mail, Clock } from 'lucide-react';
import { navLinks } from '../../data/navigation';
import { companyConfig } from '../../data/companyConfig';
import Button from '../common/Button';
import Logo from '../common/Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Bar (Signature feature from template) */}
      <div className={`hidden md:block bg-slate-950 text-slate-300 border-b border-slate-800/60 text-xs transition-all duration-300 ${isScrolled ? 'h-0 opacity-0 overflow-hidden py-0' : 'py-2'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors">
              <Mail className="w-3.5 h-3.5 text-amber-500" />
              <span>{companyConfig.contact.email}</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              <span>{companyConfig.contact.workingHours}</span>
            </span>
          </div>

          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 font-medium text-slate-200">
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>Hotline: <strong className="text-amber-400">{companyConfig.contact.phone}</strong></span>
            </span>
            <span className="text-slate-600">|</span>
            <Link to="/contact" className="text-amber-400 hover:text-amber-300 font-semibold uppercase tracking-wider text-[11px] hover:underline">
              Free Consultation →
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md shadow-slate-900/5 py-3 border-b border-slate-200/80 text-slate-900'
          : 'bg-white/95 lg:bg-white text-slate-900 shadow-sm py-4 border-b border-slate-100'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg flex items-center"
            >
              <Logo size="md" lightBackground={true} />
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3.5 py-2 text-sm font-bold tracking-tight uppercase transition-colors rounded-md ${isActive
                      ? 'text-amber-600 bg-amber-50 font-extrabold'
                      : 'text-slate-700 hover:text-amber-600 hover:bg-slate-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Right Header Action */}
            <div className="hidden lg:flex items-center gap-4">
              {/* <Link
                to="/services"
                className="p-2 text-slate-500 hover:text-amber-600 rounded-full hover:bg-slate-100 transition-colors"
                title="Search Solutions"
              >
                <Search className="w-4 h-4" />
              </Link> */}
              <Button to="/contact" size="sm" icon={ArrowRight} iconPosition="right">
                Free Solution
              </Button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-6 py-6 shadow-2xl transition-all">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-lg text-base font-bold uppercase transition-colors ${isActive
                      ? 'bg-amber-50 text-amber-600'
                      : 'text-slate-800 hover:bg-slate-50 hover:text-amber-600'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <div className="pt-4 mt-2 border-t border-slate-200 flex flex-col gap-3">
                <Button to="/contact" size="md" icon={ArrowRight} className="w-full" onClick={closeMobileMenu}>
                  Free Solution
                </Button>
                <div className="text-center text-xs text-slate-500 font-medium">
                  {companyConfig.contact.email} • {companyConfig.contact.phone}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
