import React, { useState, useEffect, useRef } from 'react';
import { FaCar, FaClock, FaCreditCard, FaHeadset, FaBullseye, FaShoppingCart, FaTools, FaLeaf, FaStar } from 'react-icons/fa';
import Footer from './footer';

const AboutPage = () => {
  
  const [scrollPosition, setScrollPosition] = useState(0);
  const testimonialsRef = useRef(null);
  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  const [counters, setCounters] = useState({
    vehicles: 0,
    customers: 0,
    rentals: 0,
    cities: 0
  });

  useEffect(() => {
    const targetValues = { vehicles: 500, customers: 10000, rentals: 25000, cities: 50 };
    const duration = 2000;
    let startTime = null;

    const animateCounters = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCounters({
        vehicles: Math.floor(progress * targetValues.vehicles),
        customers: Math.floor(progress * targetValues.customers),
        rentals: Math.floor(progress * targetValues.rentals),
        cities: Math.floor(progress * targetValues.cities)
      });

      if (progress < 1) {
        requestAnimationFrame(animateCounters);
      }
    };

    const timer = setTimeout(() => requestAnimationFrame(animateCounters), 500);
    return () => clearTimeout(timer);
  }, []);

  
  const [visibleTestimonials, setVisibleTestimonials] = useState(3);
  
  useEffect(() => {
    const handleResize = () => {
      setVisibleTestimonials(
        window.innerWidth < 768 ? 1 : 
        window.innerWidth < 1024 ? 2 : 3
      );
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const styles = {
    outer: {
      minHeight: '100vh',
      width: '100%',
      background: '#f9fafb',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '40px 20px',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
    },
    container: {
      width: '100%',
      maxWidth: '1200px',
      background: '#ffffff',
      padding: '40px',
      borderRadius: '20px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
      fontFamily: "'Poppins', sans-serif",
      color: '#374151',
      transform: `translateY(${scrollPosition * 0.05}px)`,
      transition: 'transform 0.3s ease-out',
    },
    header: {
      textAlign: 'center',
      marginBottom: '50px',
      position: 'relative',
    },
    title: {
      fontSize: 'clamp(2rem, 5vw, 3.5rem)',
      fontWeight: '700',
      marginBottom: '15px',
      color: '#1F51FF',
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
    },
    subtitle: {
      fontSize: 'clamp(1rem, 2vw, 1.4rem)',
      fontWeight: '300',
      color: '#000000', 
      maxWidth: '700px',
      margin: '0 auto',
      lineHeight: '1.6',
    },
    section: {
      display: 'flex',
      gap: '30px',
      flexWrap: 'wrap',
      justifyContent: 'center',
      margin: '40px 0',
    },
    card: {
      flex: '1 1 280px',
      background: '#ffffff',
      borderRadius: '15px',
      padding: '30px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      cursor: 'default',
      color: '#374151',
      border: '1px solid #e5e7eb',
    },
    cardHover: {
      transform: 'translateY(-10px) scale(1.02)',
      boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
      background: 'linear-gradient(135deg, #f0f9ff, #f0fdf4)',
      border: '1px solid #bfdbfe',
    },
    icon: (hovered) => ({
      fontSize: '2.5rem',
      color: hovered ? '#3b82f6' : '#10b981',
      marginBottom: '15px',
      transition: 'all 0.3s ease',
    }),
    textTitle: (hovered) => ({
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '15px',
      color: hovered ? '#3b82f6' : '#1f2937',
      transition: 'all 0.3s ease',
    }),
    textDesc: (hovered) => ({
      fontSize: '1rem',
      color: hovered ? '#4b5563' : '#6b7280',
      lineHeight: '1.7',
      transition: 'all 0.3s ease',
    }),
    sectionTitle: {
      fontSize: '2rem',
      fontWeight: '600',
      marginBottom: '30px',
      color: '#1f2937',
      textAlign: 'center',
      position: 'relative',
    },
    sectionTitleAfter: {
      content: '""',
      display: 'block',
      width: '80px',
      height: '4px',
      background: 'linear-gradient(90deg, #3b82f6, #10b981)',
      margin: '15px auto 0',
      borderRadius: '2px',
    },
    statsContainer: {
      background: '#f3f4f6', 
      borderRadius: '15px', 
      padding: '40px', 
      margin: '40px 0',
      border: '1px solid #e5e7eb'
    },
    missionSection: {
      background: 'linear-gradient(135deg, #f0f9ff, #f0fdf4)', 
      borderRadius: '15px', 
      padding: '40px',
      margin: '60px 0',
      border: '1px solid #bfdbfe'
    }
  };

  const features = [
    { icon: <FaCar />, title: 'Wide Range of Vehicles', desc: 'Choose from economy to luxury cars, SUVs, and electric vehicles.' },
    { icon: <FaClock />, title: 'Flexible Rentals', desc: 'Hourly, daily, or weekly rentals with customizable options.' },
    { icon: <FaCreditCard />, title: 'Secure Payments', desc: 'Multiple secure payment options including card, wallet, or cash.' },
    { icon: <FaHeadset />, title: '24/7 Support', desc: 'Our dedicated team is always available to assist you.' },
    { icon: <FaBullseye />, title: 'Personalized Choice', desc: 'Tailored vehicle options to match your specific needs.' },
    { icon: <FaShoppingCart />, title: 'Easy Booking', desc: 'Simple 3-step booking process with instant confirmation.' },
    { icon: <FaTools />, title: 'Roadside Assistance', desc: '24/7 roadside support for any emergencies.' },
    { icon: <FaLeaf />, title: 'Eco-Friendly Options', desc: 'Growing fleet of hybrid and electric vehicles.' },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Frequent Traveler',
      text: 'I use Rental for all my business trips. The service is impeccable and the cars are always in perfect condition.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Family Vacationer',
      text: 'Great experience renting a minivan for our family vacation. The process was smooth and the rates were competitive.',
      rating: 4
    },
    {
      name: 'David Wilson',
      role: 'Adventure Seeker',
      text: 'Rented a 4x4 for a weekend getaway. The vehicle was perfect and the staff helped me choose exactly what I needed.',
      rating: 5
    },
    {
      name: 'Emma Thompson',
      role: 'Business Executive',
      text: 'The luxury car selection is outstanding. Always arrive at my meetings in style with Rental.',
      rating: 5
    },
    {
      name: 'Raj Patel',
      role: 'Tourist',
      text: 'As an international visitor, I appreciated the easy documentation process and helpful staff.',
      rating: 5
    },
    {
      name: 'Lisa Wong',
      role: 'Student',
      text: 'Affordable rates for students like me. The economy cars are well-maintained and fuel-efficient.',
      rating: 4
    },
  ];

  // Render star rating with FaStar icons
  const renderStars = (rating) => {
    return (
      <div style={{ display: 'flex', gap: '4px', margin: '10px 0' }}>
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} color={i < rating ? '#f59e0b' : '#d1d5db'} />
        ))}
      </div>
    );
  };

  return (
    <div style={{ position: 'relative' }}>
      <div style={styles.outer}>
        {/* Decorative elements */}
        <div style={{
          position: 'absolute',
          top: '0',
          right: '0',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(59,130,246,0) 70%)',
          transform: `translate(50%, -50%)`
        }} aria-hidden="true"></div>
        
        <div style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, rgba(16,185,129,0) 70%)',
          transform: `translate(-50%, 50%)`
        }} aria-hidden="true"></div>

        <div style={styles.container}>
          <header style={styles.header}>
            <h1 style={styles.title}>About Rental</h1>
            <p style={styles.subtitle}>
              Your trusted partner for premium car rental experiences. We combine cutting-edge technology 
              with exceptional service to deliver seamless mobility solutions.
            </p>
          </header>

          {/* Stats Section */}
          <section style={styles.statsContainer}>
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'space-around',
              gap: '20px'
            }}>
              {Object.entries(counters).map(([key, value]) => (
                <div key={key} style={{ textAlign: 'center', minWidth: '150px' }}>
                  <div style={{ 
                    fontSize: '2.5rem', 
                    fontWeight: '700', 
                    color: key === 'customers' || key === 'cities' ? '#10b981' : '#3b82f6' 
                  }}>
                    {value}+
                  </div>
                  <div style={{ color: '#6b7280', textTransform: 'capitalize' }}>
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Our Story Section */}
          <section style={{ margin: '60px 0' }}>
            <h2 style={styles.sectionTitle}>Our Story <span style={styles.sectionTitleAfter}></span></h2>
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '40px', 
              alignItems: 'center' 
            }}>
              <div style={{ flex: '1 1 300px' }}>
                <p style={{ 
                  ...styles.textDesc(false), 
                  marginBottom: '20px',
                  fontSize: '1.1rem'
                }}>
                  Founded in 2015, Rental began with a simple vision — to revolutionize the car rental industry by 
                  making it more accessible, transparent, and customer-friendly.
                </p>
                <p style={{ 
                  ...styles.textDesc(false),
                  fontSize: '1.1rem'
                }}>
                  What started as a small fleet of 10 vehicles has now grown into one of the most trusted names 
                  in mobility solutions. We've consistently pushed boundaries by integrating the latest technology 
                  while maintaining our core values of reliability and customer satisfaction.
                </p>
              </div>
              <div style={{ 
                flex: '1 1 300px', 
                background: '#f3f4f6', 
                borderRadius: '15px',
                padding: '20px',
                border: '1px solid #e5e7eb'
              }}>
                <img 
                  src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Our rental fleet" 
                  style={{ 
                    width: '100%', 
                    borderRadius: '10px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                  }} 
                />
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section style={{ margin: '60px 0' }}>
            <h2 style={styles.sectionTitle}>Why Choose Us? <span style={styles.sectionTitleAfter}></span></h2>
            <div style={styles.section}>
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  style={{
                    ...styles.card,
                    ...(hoverIndex === idx ? styles.cardHover : {}),
                  }}
                  onMouseEnter={() => setHoverIndex(idx)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  <div style={styles.icon(hoverIndex === idx)}>{feature.icon}</div>
                  <h3 style={styles.textTitle(hoverIndex === idx)}>{feature.title}</h3>
                  <p style={styles.textDesc(hoverIndex === idx)}>{feature.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials Section */}
          <section style={{ margin: '60px 0' }}>
            <h2 style={styles.sectionTitle}>What Our Customers Say <span style={styles.sectionTitleAfter}></span></h2>
            
            <div style={{
              position: 'relative',
              width: '100%',
              overflowX: 'auto',
              padding: '20px 0',
              scrollBehavior: 'smooth',
            }} ref={testimonialsRef}>
              <div style={{
                display: 'flex',
                gap: '30px',
                width: 'max-content',
                padding: '0 10px'
              }}>
                {Array.from({ length: Math.ceil(testimonials.length / visibleTestimonials) }).map((_, groupIndex) => (
                  <div key={groupIndex} style={{
                    display: 'flex',
                    gap: '30px',
                    minWidth: `${visibleTestimonials * 330 + (visibleTestimonials - 1) * 30}px`
                  }}>
                    {testimonials
                      .slice(groupIndex * visibleTestimonials, (groupIndex + 1) * visibleTestimonials)
                      .map((testimonial, index) => (
                        <div key={`${groupIndex}-${index}`} style={{
                          flex: '1',
                          minWidth: '300px',
                          maxWidth: '350px'
                        }}>
                          <div style={{
                            ...styles.card,
                            height: '100%',
                            padding: '25px'
                          }}>
                            {renderStars(testimonial.rating)}
                            <p style={{
                              ...styles.textDesc(false),
                              fontStyle: 'italic',
                              marginBottom: '20px',
                              fontSize: '1rem',
                              lineHeight: '1.6'
                            }}>"{testimonial.text}"</p>
                            <div style={{
                              borderTop: '1px solid #e5e7eb',
                              paddingTop: '15px'
                            }}>
                              <div style={{
                                fontWeight: '600',
                                color: '#3b82f6',
                                fontSize: '1rem'
                              }}>{testimonial.name}</div>
                              <div style={{
                                fontSize: '0.9rem',
                                color: '#6b7280'
                              }}>{testimonial.role}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section style={styles.missionSection}>
            <h2 style={{
              ...styles.sectionTitle,
              color: '#3b82f6',
              marginBottom: '20px'
            }}>Our Mission</h2>
            <p style={{
              ...styles.textDesc(false),
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto',
              fontSize: '1.1rem'
            }}>
              To empower people's freedom of movement by providing innovative, sustainable, 
              and customer-centric mobility solutions. We strive to make every journey 
              memorable by delivering exceptional service, cutting-edge technology, 
              and the highest standards of safety and reliability.
            </p>
          </section>
        </div>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default AboutPage;