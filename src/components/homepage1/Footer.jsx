import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';
import { FOOTER } from '@/constants/testIds';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      className="bg-[#0A0A0A] text-white py-16 px-6 md:px-12 lg:px-24"
      data-testid={FOOTER.section}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <GraduationCap className="w-8 h-8 text-[#0033CC]" strokeWidth={2} />
              <span className="text-2xl font-black heading-font">EDULEARN</span>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed">
              Empowering learners worldwide with accessible, high-quality education.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-[0.1em] uppercase mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('courses')}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Courses
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Success Stories
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('blog')}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Blog
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-[0.1em] uppercase mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-[0.1em] uppercase mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#0A0A0A] transition-colors"
                data-testid={FOOTER.socialLink('twitter')}
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#0A0A0A] transition-colors"
                data-testid={FOOTER.socialLink('linkedin')}
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#0A0A0A] transition-colors"
                data-testid={FOOTER.socialLink('facebook')}
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#0A0A0A] transition-colors"
                data-testid={FOOTER.socialLink('instagram')}
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-sm text-white/50 text-center">
            © {new Date().getFullYear()} EDULEARN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
