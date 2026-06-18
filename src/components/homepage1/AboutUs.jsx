import React from 'react';
import { motion } from 'framer-motion';
import { Target, Award, Users, Lightbulb } from 'lucide-react';
import { ABOUT } from '@/constants/testIds';

const AboutUs = () => {
  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white"
      data-testid={ABOUT.section}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.2em] uppercase font-bold mb-4 text-[#0033CC]">
            ABOUT US
          </p>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl tracking-tight font-bold heading-font text-[#0A0A0A] mb-6"
            data-testid={ABOUT.title}
          >
            Empowering learners to achieve
            <br />their full potential
          </h2>
          <p
            className="text-base leading-relaxed text-[#6B7280] max-w-3xl mx-auto"
            data-testid={ABOUT.description}
          >
            We believe education should be accessible, engaging, and transformative. Our platform combines cutting-edge technology with expert instruction to create learning experiences that prepare students for success in the modern world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="border border-[#E5E7EB] p-8 hover:shadow-lg transition-shadow"
            data-testid="about-feature-mission"
          >
            <Target className="w-10 h-10 text-[#0033CC] mb-4" strokeWidth={1.5} />
            <h3 className="text-xl sm:text-2xl tracking-tight font-semibold heading-font text-[#0A0A0A] mb-3">
              Our Mission
            </h3>
            <p className="text-base leading-relaxed text-[#6B7280]">
              To democratize education by providing world-class learning opportunities that empower individuals to transform their careers and lives.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="border border-[#E5E7EB] p-8 hover:shadow-lg transition-shadow"
            data-testid="about-feature-excellence"
          >
            <Award className="w-10 h-10 text-[#0033CC] mb-4" strokeWidth={1.5} />
            <h3 className="text-xl sm:text-2xl tracking-tight font-semibold heading-font text-[#0A0A0A] mb-3">
              Excellence
            </h3>
            <p className="text-base leading-relaxed text-[#6B7280]">
              We partner with industry leaders and top educators to deliver courses that meet the highest standards of quality and relevance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="border border-[#E5E7EB] p-8 hover:shadow-lg transition-shadow"
            data-testid="about-feature-community"
          >
            <Users className="w-10 h-10 text-[#0033CC] mb-4" strokeWidth={1.5} />
            <h3 className="text-xl sm:text-2xl tracking-tight font-semibold heading-font text-[#0A0A0A] mb-3">
              Community
            </h3>
            <p className="text-base leading-relaxed text-[#6B7280]">
              Join a vibrant community of learners, mentors, and professionals who support each other's growth and celebrate success together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="border border-[#E5E7EB] p-8 hover:shadow-lg transition-shadow"
            data-testid="about-feature-innovation"
          >
            <Lightbulb className="w-10 h-10 text-[#0033CC] mb-4" strokeWidth={1.5} />
            <h3 className="text-xl sm:text-2xl tracking-tight font-semibold heading-font text-[#0A0A0A] mb-3">
              Innovation
            </h3>
            <p className="text-base leading-relaxed text-[#6B7280]">
              We continuously evolve our platform and curriculum to stay ahead of industry trends and technological advancements.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
