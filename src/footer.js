import React, { useState, useEffect } from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaArrowUp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa';

const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  useEffect(() => {
    const checkScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const handleScrollTop = () => {
    try {
      if ('scrollBehavior' in document.documentElement.style) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } 
      else {
        const scrollStep = -window.scrollY / 15;
        const scrollInterval = setInterval(() => {
          if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
          } else {
            clearInterval(scrollInterval);
          }
        }, 15);
      }
    } catch (error) {
      window.scrollTo(0, 0);
    }
  };

  const styles = {
    footer: {
      background: 'linear-gradient(135deg, #1a1a1a 0%, #2b2b2b 100%)',
      color: '#eee',
      padding: '80px 30px 40px',
      fontFamily: "'Poppins', sans-serif",
      fontSize: '15px',
      position: 'relative',
      overflow: 'hidden',
    },
    container: {
      maxWidth: '1200px',
      margin: 'auto',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '40px',
      position: 'relative',
      zIndex: 2
    },
    column: {
      flex: '1 1 240px',
      minWidth: '220px',
    },
    heading: {
      color: '#fff',
      fontWeight: '700',
      fontSize: '20px',
      marginBottom: '25px',
      position: 'relative',
      paddingBottom: '10px',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    headingUnderline: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '50px',
      height: '3px',
      background: 'linear-gradient(90deg, #1e88e5, #0d47a1)',
      borderRadius: '3px'
    },
    link: {
      display: 'block',
      margin: '12px 0',
      color: '#bbb',
      textDecoration: 'none',
      cursor: 'pointer',
      background: 'none',
      border: 'none',
      padding: 0,
      fontSize: '15px',
      fontFamily: 'inherit',
      textAlign: 'left',
      transition: 'all 0.3s ease',
      position: 'relative',
      paddingLeft: '15px'
    },
    contactRow: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '20px',
    },
    iconBox: {
      backgroundColor: 'rgba(30, 136, 229, 0.1)',
      borderRadius: '10px',
      width: '44px',
      height: '44px',
      color: '#1e88e5',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '15px',
      fontSize: '18px',
      flexShrink: 0,
      border: '1px solid rgba(30, 136, 229, 0.3)',
      transition: 'all 0.3s ease'
    },
    contactText: {
      fontWeight: '500',
      color: '#eee',
      fontSize: '15px',
      lineHeight: '1.5'
    },
    socialContainer: {
      marginTop: '30px',
      display: 'flex',
      gap: '15px',
    },
    socialIcon: {
      width: '42px',
      height: '42px',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
      cursor: 'pointer',
      fontSize: '18px',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
    },
    decorativeElements: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 1,
      overflow: 'hidden'
    },
    circle1: {
      position: 'absolute',
      width: '300px',
      height: '300px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(30, 136, 229, 0.1) 0%, rgba(30, 136, 229, 0) 70%)',
      top: '-100px',
      right: '-100px'
    },
    circle2: {
      position: 'absolute',
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(30, 136, 229, 0.05) 0%, rgba(30, 136, 229, 0) 70%)',
      bottom: '-50px',
      left: '-50px'
    },
    backToTopButton: {
      background: 'linear-gradient(90deg, #1e88e5, #0d47a1)',
      color: '#fff',
      padding: '12px 25px',
      border: 'none',
      borderRadius: '30px',
      cursor: 'pointer',
      fontWeight: '600',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      boxShadow: '0 5px 15px rgba(30, 136, 229, 0.3)',
      transition: 'all 0.3s ease',
      position: 'fixed',
      bottom: '30px',
      right: '30px',
      zIndex: 99,
      opacity: showScrollButton ? 1 : 0,
      visibility: showScrollButton ? 'visible' : 'hidden',
      transform: showScrollButton ? 'translateY(0)' : 'translateY(100px)'
    },
    copyrightText: {
      textAlign: 'center', 
      marginTop: '30px', 
      fontSize: '14px', 
      color: '#777',
      position: 'relative',
      zIndex: 2
    }
  };

  const socialColors = {
    facebook: '#3b5998',
    instagram: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
    twitter: '#1da1f2',
    linkedin: '#0077b5',
  };

  const handlePrivacyClick = () => {
    console.log('Navigate to privacy policy');
  };

  const handleTermsClick = () => {
    console.log('Navigate to terms of service');
  };

  return (
    <footer style={styles.footer}>
      {/* Decorative elements */}
      <div style={styles.decorativeElements}>
        <div style={styles.circle1}></div>
        <div style={styles.circle2}></div>
      </div>

      <div style={styles.container}>
        {/* About Company */}
        <div style={styles.column}>
          <h3 style={styles.heading}>
            About Us
            <span style={styles.headingUnderline}></span>
          </h3>
          <p style={{ color: '#bbb', marginTop: '15px', lineHeight: '1.7' }}>
            Premium car rental service offering luxury vehicles at competitive prices across Pakistan with 24/7 customer support.
          </p>
          <div style={{ marginTop: '25px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img 
              src="https://img.icons8.com/fluency/96/000000/car-rental.png" 
              alt="Rental Logo" 
              style={{ 
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                objectFit: 'cover',
                filter: 'brightness(0) invert(1) opacity(0.9)'
              }}
            />
            <h1 style={{ 
              fontSize: '1.8rem',
              fontWeight: '700',
              background: 'linear-gradient(90deg, #1e88e5, #0d47a1)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              margin: 0
            }}>Rental</h1>
          </div>
        </div>

        {/* Rent A Car Cities */}
        <div style={styles.column}>
          <h3 style={styles.heading}>
            Our Locations
            <span style={styles.headingUnderline}></span>
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            {['Islamabad', 'Lahore', 'Karachi', 'Peshawar', 'Rawalpindi', 'Faisalabad', 'Multan', 'Quetta'].map((city, idx) => (
              <button
                key={idx}
                style={{
                  ...styles.link,
                }}
                onMouseOver={(e) => {
                  e.target.style.color = '#1e88e5';
                  e.target.style.paddingLeft = '20px';
                }}
                onMouseOut={(e) => {
                  e.target.style.color = '#bbb';
                  e.target.style.paddingLeft = '15px';
                }}
                type="button"
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div style={styles.column}>
          <h3 style={styles.heading}>
            Quick Links
            <span style={styles.headingUnderline}></span>
          </h3>
          {[
            { text: 'About Us', icon: '🏢' },
            { text: 'Our Fleet', icon: '🚗' },
            { text: 'Pricing', icon: '💰' },
            { text: 'Testimonials', icon: '🌟' },
            { text: 'Blog', icon: '📰' },
            { text: 'Contact', icon: '📞' }
          ].map((link, idx) => (
            <button
              key={idx}
              style={{
                ...styles.link,
              }}
              onMouseOver={(e) => {
                e.target.style.color = '#1e88e5';
                e.target.style.paddingLeft = '20px';
              }}
              onMouseOut={(e) => {
                e.target.style.color = '#bbb';
                e.target.style.paddingLeft = '15px';
              }}
              type="button"
            >
              <span style={{ marginRight: '10px' }}>{link.icon}</span>
              {link.text}
            </button>
          ))}
        </div>

        {/* Contact Info */}
        <div style={styles.column}>
          <h3 style={styles.heading}>
            Contact Us
            <span style={styles.headingUnderline}></span>
          </h3>

          <div style={styles.contactRow}>
            <div style={{ ...styles.iconBox }}>
              <FaPhone />
            </div>
            <div>
              <div style={styles.contactText}>+92 312 5552476</div>
              <div style={{ ...styles.contactText, fontSize: '13px', color: '#aaa' }}>24/7 Support</div>
            </div>
          </div>

          <div style={styles.contactRow}>
            <div style={{ ...styles.iconBox }}>
              <FaEnvelope />
            </div>
            <div>
              <div style={styles.contactText}>bookings@rentcars247.com</div>
              <div style={{ ...styles.contactText, fontSize: '13px', color: '#aaa' }}>Response within 1 hour</div>
            </div>
          </div>

          <div style={styles.contactRow}>
            <div style={{ ...styles.iconBox }}>
              <FaMapMarkerAlt />
            </div>
            <a
              href="https://maps.google.com?q=Your+Company+Location"
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...styles.contactText, textDecoration: 'none', color: '#eee' }}
            >
              <div>Head Office: Islamabad</div>
              <div style={{ fontSize: '13px', color: '#aaa' }}>View on Map →</div>
            </a>
          </div>

          <p style={{ fontWeight: '600', color: '#ddd', marginTop: '30px', marginBottom: '15px' }}>
            FOLLOW US
          </p>

          <div style={styles.socialContainer}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                ...styles.socialIcon, 
                background: socialColors.facebook,
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                ...styles.socialIcon, 
                background: socialColors.instagram,
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                ...styles.socialIcon, 
                background: socialColors.twitter,
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                ...styles.socialIcon, 
                background: socialColors.linkedin,
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button - Now Fixed Position */}
      <button
        onClick={handleScrollTop}
        style={styles.backToTopButton}
        aria-label="Scroll to top"
      >
        <FaArrowUp style={{ fontSize: '18px' }} />
        Back to Top
      </button>

      <p style={styles.copyrightText}>
        © {new Date().getFullYear()} Rental. All Rights Reserved. | 
        <button 
          onClick={handlePrivacyClick}
          style={{ 
            background: 'none',
            border: 'none',
            color: '#1e88e5',
            cursor: 'pointer',
            margin: '0 5px',
            padding: 0,
            fontSize: '14px',
            fontFamily: 'inherit'
          }}
        >
          Privacy Policy
        </button> | 
        <button 
          onClick={handleTermsClick}
          style={{ 
            background: 'none',
            border: 'none',
            color: '#1e88e5',
            cursor: 'pointer',
            margin: '0 5px',
            padding: 0,
            fontSize: '14px',
            fontFamily: 'inherit'
          }}
        >
          Terms of Service
        </button>
      </p>
    </footer>
  );
};

export default Footer;