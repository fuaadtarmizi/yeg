import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Award, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO } from '@/constants/testIds';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Portfolio = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await axios.get(`${API}/portfolio`);
        setPortfolioItems(response.data);
      } catch (error) {
        console.error('Error fetching portfolio:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  return (
    <section
      id="portfolio"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white"
      data-testid={PORTFOLIO.section}
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
            SUCCESS STORIES
          </p>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl tracking-tight font-bold heading-font text-[#0A0A0A] mb-6"
            data-testid={PORTFOLIO.title}
          >
            Real students, real transformations
          </h2>
        </motion.div>

        {loading ? (
          <div className="text-center py-12" data-testid="portfolio-loading">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#0033CC] border-t-transparent"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-[#F3F4F6] border border-[#E5E7EB] p-8 hover:shadow-xl transition-shadow relative group"
                data-testid={PORTFOLIO.card(item.id)}
              >
                {item.featured && (
                  <div className="absolute top-4 right-4">
                    <Award className="w-6 h-6 text-[#0033CC]" />
                  </div>
                )}

                <div className="mb-4">
                  <h3
                    className="text-xl sm:text-2xl tracking-tight font-semibold heading-font text-[#0A0A0A] mb-2"
                    data-testid={PORTFOLIO.studentName(item.id)}
                  >
                    {item.student_name}
                  </h3>
                  <p
                    className="text-lg font-semibold text-[#0033CC] mb-3"
                    data-testid={PORTFOLIO.achievement(item.id)}
                  >
                    {item.achievement}
                  </p>
                </div>

                <p className="text-base leading-relaxed text-[#6B7280] mb-4">
                  {item.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-[#0033CC] bg-blue-50 px-3 py-1 rounded">
                    {item.course}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-[#6B7280] group-hover:text-[#0033CC] transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};