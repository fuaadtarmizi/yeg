import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, BookOpen, TrendingUp } from 'lucide-react';
import { HERO } from '@/components/homepage1/testIds';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid={HERO.section}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjBwaG90b2dyYXBoeSUyMGNpdHklMjBza3lsaW5lJTIwbW9kZXJufGVufDB8fHx8MTc4MTU5NzU2MHww&ixlib=rb-4.1.0&q=85)',
        }}
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 px-6 md:px-12 lg:px-24 text-center text-white max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-[0.2em] uppercase font-bold mb-6 text-white/90">
            TRANSFORM YOUR FUTURE
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl tracking-tighter font-black heading-font mb-6 leading-tight"
            data-testid={HERO.title}
          >
            Education built for
            <br />
            real-world success.
          </h1>
          <p
            className="text-base sm:text-lg leading-relaxed text-white/90 max-w-2xl mx-auto mb-10"
            data-testid={HERO.subtitle}
          >
            Master in-demand skills with expert-led courses, hands-on projects, and a community that supports your growth every step of the way.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => scrollToSection('courses')}
              className="bg-[#0033CC] text-white px-8 py-4 hover:bg-[#002299] transition-colors btn-primary inline-flex items-center justify-center gap-2 font-semibold"
              data-testid={HERO.ctaPrimary}
            >
              Explore Courses
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border border-white text-white px-8 py-4 hover:bg-white hover:text-[#0A0A0A] transition-colors inline-flex items-center justify-center font-semibold"
              data-testid={HERO.ctaSecondary}
            >
              Get in Touch
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center"
              data-testid={HERO.stats.students}
            >
              <Users className="w-8 h-8 mx-auto mb-2 text-white" />
              <div className="text-3xl font-black heading-font">5,000+</div>
              <div className="text-sm text-white/80">Active Students</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-center"
              data-testid={HERO.stats.courses}
            >
              <BookOpen className="w-8 h-8 mx-auto mb-2 text-white" />
              <div className="text-3xl font-black heading-font">50+</div>
              <div className="text-sm text-white/80">Expert-Led Courses</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-center"
              data-testid={HERO.stats.successRate}
            >
              <TrendingUp className="w-8 h-8 mx-auto mb-2 text-white" />
              <div className="text-3xl font-black heading-font">92%</div>
              <div className="text-sm text-white/80">Success Rate</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
