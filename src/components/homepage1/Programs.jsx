import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Clock, Users, ArrowRight } from 'lucide-react';
import { COURSES } from '@/constants/testIds';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(`${API}/courses`);
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-blue-100 text-blue-800';
      case 'Advanced':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section
      id="courses"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#F3F4F6]"
      data-testid={COURSES.section}
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
            OUR PROGRAMS
          </p>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl tracking-tight font-bold heading-font text-[#0A0A0A] mb-6"
            data-testid={COURSES.title}
          >
            Courses designed for your success
          </h2>
        </motion.div>

        {loading ? (
          <div className="text-center py-12" data-testid="courses-loading">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#0033CC] border-t-transparent"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white border border-[#E5E7EB] p-8 course-card"
                data-testid={COURSES.card(course.id)}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${getLevelColor(
                      course.level
                    )}`}
                  >
                    {course.level}
                  </span>
                  {course.featured && (
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#0033CC] text-white">
                      Popular
                    </span>
                  )}
                </div>

                <h3
                  className="text-xl sm:text-2xl tracking-tight font-semibold heading-font text-[#0A0A0A] mb-3"
                  data-testid={COURSES.cardTitle(course.id)}
                >
                  {course.title}
                </h3>
                <p
                  className="text-base leading-relaxed text-[#6B7280] mb-6"
                  data-testid={COURSES.cardDescription(course.id)}
                >
                  {course.description}
                </p>

                <div className="flex items-center gap-6 mb-6 text-sm text-[#6B7280]">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{course.students_enrolled.toLocaleString()}</span>
                  </div>
                </div>

                <button
                  className="w-full bg-[#0033CC] text-white px-6 py-3 hover:bg-[#002299] transition-colors btn-primary inline-flex items-center justify-center gap-2 font-semibold"
                  data-testid={COURSES.enrollButton(course.id)}
                >
                  Enroll Now
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Courses;
