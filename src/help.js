import React from 'react';
import Footer from './footer';
import helpImage1 from './assets/image2.jpg';
import helpImage2 from './assets/green.jpg';
import helpImage3 from './assets/care.jpg';
import { FaPhone, FaEnvelope, FaClock, FaCheckCircle, FaStar, FaHeadset } from 'react-icons/fa';

const HelpPage = () => {
  const outerStyle = {
    minHeight: '100vh',
    width: '100%',
    backgroundColor: '#f8f9fa',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '60px 20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#333',
    boxSizing: 'border-box',
    backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(234, 238, 255, 0.5) 0%, rgba(251, 252, 255, 0.5) 90%)',
  };

  const mainTitleStyle = {
    fontSize: '2.8rem',
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: '50px',
    textAlign: 'center',
    position: 'relative',
    textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
  };

  const sectionStyle = {
    width: '100%',
    maxWidth: '950px',
    background: 'white',
    borderRadius: '12px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
    margin: '0 auto 40px auto',
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(0,0,0,0.05)',
    ':hover': {
      boxShadow: '0 8px 25px rgba(0,0,0,0.12)',
      transform: 'translateY(-3px)',
    },
  };

  const imageStyle = {
    width: '38%',
    height: 'auto',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
    ':hover': {
      transform: 'scale(1.02)',
    },
  };

  const contentStyle = {
    padding: '35px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '18px',
  };

  const headerStyle = {
    fontSize: '2rem',
    fontWeight: '600',
    color: '#2980b9',
    marginBottom: '15px',
    position: 'relative',
    paddingBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  };

  const headerUnderline = {
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '50px',
    height: '3px',
    backgroundColor: '#e74c3c',
    borderRadius: '3px',
  };

  const textStyle = {
    fontSize: '1.05rem',
    lineHeight: '1.7',
    color: '#555',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
  };

  const iconStyle = {
    color: '#2980b9',
    fontSize: '1rem',
    marginTop: '3px',
  };

  const badgeContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    marginTop: '10px',
  };

  const badgeStyle = {
    backgroundColor: '#f0f7ff',
    color: '#2980b9',
    padding: '5px 12px',
    borderRadius: '20px',
    fontSize: '0.85rem',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  };

  const renderSection = (img, title, contentArray, icon) => (
    <div style={sectionStyle}>
      <img src={img} alt="section" style={imageStyle} />
      <div style={contentStyle}>
        <h2 style={headerStyle}>
          {icon}
          {title}
          <span style={headerUnderline}></span>
        </h2>
        {contentArray.map((text, i) => (
          <p style={textStyle} key={i}>
            {i === 0 && <FaCheckCircle style={iconStyle} />}
            {i === 1 && <FaStar style={iconStyle} />}
            {i === 2 && <FaClock style={iconStyle} />}
            {i === 3 && <FaEnvelope style={iconStyle} />}
            {i === 4 && <FaPhone style={iconStyle} />}
            {text}
          </p>
        ))}
        {title === 'Why Choose Us?' && (
          <div style={badgeContainer}>
            <span style={badgeStyle}><FaCheckCircle /> 24/7 Support</span>
            <span style={badgeStyle}><FaCheckCircle /> Free Cancellation</span>
            <span style={badgeStyle}><FaCheckCircle /> Best Prices</span>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div style={outerStyle}>
      <h1 style={mainTitleStyle}>Our Premium Support Services</h1>

      {renderSection(
        helpImage1,
        'Help & Support',
        [
          'Need assistance? We\'re here to help you with all your car rental queries.',
          'Whether you have questions about booking, vehicle availability, pricing, or policies — count on us.',
          'Support Hours: Mon - Sat (10.00 AM - 6.00 PM)',
          'help@rentcars247.com',
          '+92 312 5552476',
        ],
        <FaHeadset style={{ fontSize: '1.8rem', color: '#2980b9' }} />
      )}

      {renderSection(
        helpImage2,
        'Why Choose Us?',
        [
          'Reliable, affordable cars with instant booking',
          'No hidden charges • Verified vehicles • 24/7 emergency support',
          'Serving all major cities including Lahore, Karachi, and Islamabad',
        ],
        <FaStar style={{ fontSize: '1.8rem', color: '#f39c12' }} />
      )}

      {renderSection(
        helpImage3,
        'Customer Care',
        [
          'Your satisfaction is our top priority',
          'Fast support • Easy modifications • Vehicle upgrades',
          'Available on both website and mobile app',
        ],
        <FaCheckCircle style={{ fontSize: '1.8rem', color: '#27ae60' }} />
      )}

      <Footer />
    </div>
  );
};

export default HelpPage;