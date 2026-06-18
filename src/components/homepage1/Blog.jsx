import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { BLOG } from '@/constants/testIds';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get(`${API}/blog`);
        setBlogPosts(response.data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section
      id="blog"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#F3F4F6]"
      data-testid={BLOG.section}
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
            RESOURCES
          </p>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl tracking-tight font-bold heading-font text-[#0A0A0A] mb-6"
            data-testid={BLOG.title}
          >
            Insights and learning resources
          </h2>
        </motion.div>

        {loading ? (
          <div className="text-center py-12" data-testid="blog-loading">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#0033CC] border-t-transparent"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white border border-[#E5E7EB] overflow-hidden hover:shadow-xl transition-shadow group"
                data-testid={BLOG.card(post.id)}
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4 text-sm text-[#6B7280]">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.published_date)}</span>
                    </div>
                  </div>

                  <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[#0033CC] text-white mb-4">
                    {post.category}
                  </span>

                  <h3
                    className="text-xl sm:text-2xl tracking-tight font-semibold heading-font text-[#0A0A0A] mb-3 group-hover:text-[#0033CC] transition-colors"
                    data-testid={BLOG.cardTitle(post.id)}
                  >
                    {post.title}
                  </h3>
                  <p className="text-base leading-relaxed text-[#6B7280] mb-6">
                    {post.excerpt}
                  </p>

                  <button
                    className="text-[#0033CC] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
                    data-testid={BLOG.readMoreButton(post.id)}
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;