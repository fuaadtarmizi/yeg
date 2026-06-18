import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, Menu, X } from 'lucide-react';
import { NAVBAR } from '@/constants/testIds';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glassmorphism" data-testid={NAVBAR.logo}>
      <div className="px-6 md:px-12 lg:px-24 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2" data-testid={NAVBAR.logo}>
            <GraduationCap className="w-8 h-8 text-[#0033CC]" strokeWidth={2} />
            <span className="text-2xl font-black heading-font text-[#0A0A0A]">EDULEARN</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium text-[#0A0A0A] hover:text-[#0033CC] transition-colors"
              data-testid={NAVBAR.navLink('about')}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('courses')}
              className="text-sm font-medium text-[#0A0A0A] hover:text-[#0033CC] transition-colors"
              data-testid={NAVBAR.navLink('courses')}
            >
              Courses
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-sm font-medium text-[#0A0A0A] hover:text-[#0033CC] transition-colors"
              data-testid={NAVBAR.navLink('portfolio')}
            >
              Success Stories
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="text-sm font-medium text-[#0A0A0A] hover:text-[#0033CC] transition-colors"
              data-testid={NAVBAR.navLink('blog')}
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#0033CC] text-white px-6 py-2.5 hover:bg-[#002299] transition-colors btn-primary"
              data-testid={NAVBAR.ctaButton}
            >
              Get Started
            </button>
          </div>

          <button
            className="md:hidden text-[#0A0A0A]"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="navbar-mobile-toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 space-y-4"
            data-testid="navbar-mobile-menu"
          >
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-sm font-medium text-[#0A0A0A] hover:text-[#0033CC] transition-colors"
              data-testid={NAVBAR.navLink('about-mobile')}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('courses')}
              className="block w-full text-left text-sm font-medium text-[#0A0A0A] hover:text-[#0033CC] transition-colors"
              data-testid={NAVBAR.navLink('courses-mobile')}
            >
              Courses
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="block w-full text-left text-sm font-medium text-[#0A0A0A] hover:text-[#0033CC] transition-colors"
              data-testid={NAVBAR.navLink('portfolio-mobile')}
            >
              Success Stories
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="block w-full text-left text-sm font-medium text-[#0A0A0A] hover:text-[#0033CC] transition-colors"
              data-testid={NAVBAR.navLink('blog-mobile')}
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#0033CC] text-white px-6 py-2.5 hover:bg-[#002299] transition-colors btn-primary w-full"
              data-testid={NAVBAR.ctaButton}
            >
              Get Started
            </button>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
