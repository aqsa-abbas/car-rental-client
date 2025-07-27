import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';

const FirstPage = ({ isAuthenticated }) => {
  const [currentCarIndex, setCurrentCarIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const cars = [
    {
      name: "Tesla Model S",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      type: "Electric Luxury"
    },
    {
      name: "BMW i8",
      image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      type: "Hybrid Sports"
    }
  ];

  const handleBookNow = () => {
    if (!isAuthenticated) {
      navigate('/login', { state: { from: '/vehicles' } });
    } else {
      navigate('/vehicles');
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCarIndex((prev) => (prev + 1) % cars.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [cars.length]);

  const styles = {
    container: {
      position: 'relative',
      minHeight: '100vh',
      overflow: 'hidden',
      fontFamily: "'Poppins', sans-serif",
      color: '#2d3436',
      backgroundColor: '#f5f6fa'
    },
    carShowcase: {
      position: 'relative',
      width: '100%',
      height: '60vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      transition: 'background-image 1s ease-in-out',
      display: 'flex',
      alignItems: 'flex-end'
    },
    carInfo: {
      width: '100%',
      padding: '40px',
      background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
      color: 'white'
    },
    carName: {
      fontSize: '2.5rem',
      fontWeight: '700',
      margin: '0 0 10px 0'
    },
    carType: {
      fontSize: '1.2rem',
      margin: 0,
      opacity: 0.9
    },
    contentContainer: {
      padding: '40px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    header: {
      textAlign: 'center',
      marginBottom: '60px'
    },
    title: {
      fontSize: '3.5rem',
      fontWeight: '800',
      margin: '0 0 15px 0',
      color: '#2d3436'
    },
    titleHighlight: {
      color: '#0984e3',
      position: 'relative',
      display: 'inline-block'
    },
    titleHighlightUnderline: {
      position: 'absolute',
      bottom: '5px',
      left: 0,
      width: '100%',
      height: '10px',
      backgroundColor: '#00b894',
      opacity: 0.4,
      zIndex: -1
    },
    subtitle: {
      fontSize: '1.3rem',
      fontWeight: '300',
      margin: 0,
      color: '#636e72'
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '30px',
      marginBottom: '60px'
    },
    featureCard: {
      background: 'white',
      borderRadius: '15px',
      padding: '30px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
      textAlign: 'center',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      ':hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
      }
    },
    featureIcon: {
      fontSize: '2.5rem',
      marginBottom: '20px',
      color: '#0984e3'
    },
    featureTitle: {
      fontSize: '1.3rem',
      fontWeight: '600',
      margin: '0 0 10px 0',
      color: '#2d3436'
    },
    featureDesc: {
      fontSize: '1rem',
      margin: 0,
      color: '#636e72'
    },
    ctaButton: {
      background: 'linear-gradient(90deg, #0984e3, #00b894)',
      color: 'white',
      border: 'none',
      padding: '18px 45px',
      borderRadius: '50px',
      fontSize: '1.2rem',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      transition: 'all 0.3s ease',
      boxShadow: '0 5px 15px rgba(9, 132, 227, 0.3)',
      margin: '0 auto',
      ':hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 8px 20px rgba(9, 132, 227, 0.4)'
      }
    },
    buttonArrow: {
      fontSize: '1.5rem',
      transition: 'transform 0.3s ease'
    },
    carDots: {
      display: 'flex',
      justifyContent: 'center',
      gap: '15px',
      marginTop: '40px'
    },
    carDot: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      backgroundColor: '#dfe6e9'
    }
  };

  return (
    <div style={styles.container}>
      {/* Car Showcase Section */}
      <div style={{
        ...styles.carShowcase,
        backgroundImage: `url(${cars[currentCarIndex].image})`
      }}>
        <div style={styles.carInfo}>
          <h3 style={styles.carName}>{cars[currentCarIndex].name}</h3>
          <p style={styles.carType}>{cars[currentCarIndex].type}</p>
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.contentContainer}>
        <div style={styles.header}>
          <h1 style={styles.title}>
            <span style={styles.titleHighlight}>
              CAR RENTAL
              <span style={styles.titleHighlightUnderline}></span>
            </span>
          </h1>
          <p style={styles.subtitle}>
            Experience eco-friendly luxury with our premium vehicle collection
          </p>
        </div>

        {/* Features Grid */}
        <div style={styles.featuresGrid}>
          {[
            { icon: "🚗", title: "100+ Vehicles", desc: "From economy to luxury" },
            { icon: "⚡", title: "Eco-Friendly", desc: "Hybrid & electric options" },
            { icon: "🔄", title: "Flexible", desc: "Daily/weekly/monthly plans" },
             { icon: "🛡️", title: "Full Coverage", desc: "Comprehensive insurance" }
          ].map((feature, index) => (
            <div 
              key={index} 
              style={{
                ...styles.featureCard,
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`,
                opacity: 0
              }}
            >
              <div style={styles.featureIcon}>{feature.icon}</div>
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p style={styles.featureDesc}>{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* BOOK NOW Button */}
        <button 
          style={{
            ...styles.ctaButton,
            transform: isHovered ? "scale(1.05)" : "scale(1)"
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleBookNow}
        >
          BOOK NOW
          <span style={{
            ...styles.buttonArrow,
            transform: isHovered ? "translateX(5px)" : "translateX(0)"
          }}>→</span>
        </button>

        {/* Car Indicator Dots */}
        <div style={styles.carDots}>
          {cars.map((_, index) => (
            <div 
              key={index} 
              style={{
                ...styles.carDot,
                backgroundColor: index === currentCarIndex ? "#0984e3" : "#dfe6e9"
              }}
              onClick={() => setCurrentCarIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      
      <Footer />
    </div>
  );
};

export default FirstPage;