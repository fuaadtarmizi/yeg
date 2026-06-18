export const NAVBAR = {
  logo: 'navbar-logo',
  navLink: (name) => `nav-link-${name.toLowerCase()}`,
  ctaButton: 'navbar-cta-button'
};

export const HERO = {
  section: 'hero-section',
  title: 'hero-title',
  subtitle: 'hero-subtitle',
  ctaPrimary: 'hero-cta-primary',
  ctaSecondary: 'hero-cta-secondary',
  stats: {
    students: 'hero-stat-students',
    courses: 'hero-stat-courses',
    successRate: 'hero-stat-success-rate'
  }
};

export const COURSES = {
  section: 'courses-section',
  title: 'courses-title',
  card: (id) => `course-card-${id}`,
  cardTitle: (id) => `course-card-title-${id}`,
  cardDescription: (id) => `course-card-description-${id}`,
  enrollButton: (id) => `course-enroll-button-${id}`
};

export const ABOUT = {
  section: 'about-section',
  title: 'about-title',
  description: 'about-description'
};

export const PORTFOLIO = {
  section: 'portfolio-section',
  title: 'portfolio-title',
  card: (id) => `portfolio-card-${id}`,
  studentName: (id) => `portfolio-student-name-${id}`,
  achievement: (id) => `portfolio-achievement-${id}`
};

export const BLOG = {
  section: 'blog-section',
  title: 'blog-title',
  card: (id) => `blog-card-${id}`,
  cardTitle: (id) => `blog-card-title-${id}`,
  readMoreButton: (id) => `blog-read-more-${id}`
};

export const CONTACT = {
  section: 'contact-section',
  form: 'contact-form',
  nameInput: 'contact-name-input',
  emailInput: 'contact-email-input',
  subjectInput: 'contact-subject-input',
  messageInput: 'contact-message-input',
  submitButton: 'contact-submit-button',
  successMessage: 'contact-success-message',
  errorMessage: 'contact-error-message'
};

export const FOOTER = {
  section: 'footer-section',
  socialLink: (platform) => `footer-social-${platform.toLowerCase()}`
};