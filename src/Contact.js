import React, { useState } from 'react';
import Footer from './footer';
import contactImage from './assets/image2.jpg';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoverStates, setHoverStates] = useState({
    card0: false,
    card1: false,
    card2: false,
    card3: false,
    button: false,
    image: false
  });
  const handleHover = (element, isHovering) => {
    setHoverStates(prev => ({ ...prev, [element]: isHovering }));
  };
  const styles = {
    outer: {
      minHeight: '100vh',
      width: '100%',
      backgroundColor: '#f9f9f9',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: '50px 20px',
      flexDirection: 'column',
      fontFamily: "'Poppins', sans-serif",
    },
    container: {
      width: '100%',
      maxWidth: '1200px',
      background: 'white',
      padding: '40px',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
      marginBottom: '40px',
    },
    header: {
      textAlign: 'center',
      marginBottom: '50px',
    },
    title: {
      fontSize: '2.8rem',
      fontWeight: '700',
      marginBottom: '15px',
      color: '#2c3e50',
      position: 'relative',
      display: 'inline-block',
    },
    titleUnderline: {
      content: '""',
      position: 'absolute',
      bottom: '-10px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '80px',
      height: '4px',
      background: 'linear-gradient(90deg, #3498db, #2ecc71)',
      borderRadius: '2px',
    },
    subtitle: {
      fontSize: '1.1rem',
      color: '#7f8c8d',
      maxWidth: '700px',
      margin: '0 auto',
      lineHeight: '1.6',
    },
    cardsWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '25px',
      flexWrap: 'wrap',
      marginBottom: '50px',
    },
    card: (isHovered) => ({
      flex: '1 1 220px',
      background: 'white',
      borderRadius: '15px',
      padding: '30px 25px',
      boxShadow: isHovered ? '0 12px 30px rgba(46, 204, 113, 0.2)' : '0 6px 20px rgba(0,0,0,0.05)',
      textAlign: 'center',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      border: isHovered ? '1px solid rgba(46, 204, 113, 0.5)' : '1px solid rgba(0,0,0,0.05)',
      transform: isHovered ? 'translateY(-10px)' : 'none',
    }),
    iconCircle: (isHovered) => ({
      backgroundColor: isHovered ? '#2ecc71' : '#3498db',
      width: '70px',
      height: '70px',
      borderRadius: '50%',
      margin: '0 auto 20px auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '28px',
      color: 'white',
      transition: 'all 0.3s ease',
      transform: isHovered ? 'scale(1.1)' : 'none',
    }),
    cardTitle: (isHovered) => ({
      fontWeight: '600',
      fontSize: '1.3rem',
      marginBottom: '15px',
      color: isHovered ? '#2ecc71' : '#2c3e50',
      transition: 'all 0.3s ease',
    }),
    cardText: (isHovered) => ({
      fontSize: '1rem',
      color: isHovered ? '#2ecc71' : '#7f8c8d',
      lineHeight: '1.5',
      whiteSpace: 'pre-line',
      transition: 'all 0.3s ease',
    }),
    formImageWrapper: {
      display: 'flex',
      gap: '40px',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      maxWidth: '500px',
      width: '100%',
    },
    input: {
      padding: '15px',
      borderRadius: '10px',
      border: '1px solid #ddd',
      fontSize: '1rem',
      outline: 'none',
      backgroundColor: 'white',
      color: '#333',
      transition: 'all 0.3s ease',
    },
    textarea: {
      padding: '15px',
      borderRadius: '10px',
      border: '1px solid #ddd',
      fontSize: '1rem',
      outline: 'none',
      backgroundColor: 'white',
      color: '#333',
      transition: 'all 0.3s ease',
      resize: 'vertical',
      minHeight: '150px',
      fontFamily: "'Poppins', sans-serif",
    },
    button: (isHovered) => ({
      backgroundColor: isHovered ? '#2ecc71' : '#3498db',
      color: 'white',
      fontWeight: '600',
      padding: '15px',
      border: 'none',
      borderRadius: '10px',
      cursor: 'pointer',
      fontSize: '1.1rem',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      transform: isHovered ? 'translateY(-2px)' : 'none',
      boxShadow: isHovered ? '0 5px 15px rgba(52, 152, 219, 0.4)' : 'none',
    }),
    status: {
      textAlign: 'center',
      fontWeight: '600',
      marginTop: '10px',
      // Color dynamically changes based on success/error
      color: status.includes('successfully') ? '#2ecc71' : '#e74c3c', 
    },
    imageContainer: (isHovered) => ({
      maxWidth: '500px',
      width: '100%',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: isHovered ? '0 15px 40px rgba(0,0,0,0.15)' : '0 10px 30px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
    }),
    image: (isHovered) => ({
      width: '100%',
      height: 'auto',
      display: 'block',
      transition: 'transform 0.5s ease',
      transform: isHovered ? 'scale(1.05)' : 'none',
    }),
    mapContainer: {
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto 50px',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields.');
      return;
    }
    
    setIsSubmitting(true);
    setStatus(''); 

    try {
      
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus(data.message);
        setFormData({ name: '', email: '', message: '' }); 
      } else {
        setStatus(data.message || 'Failed to send message. Please try again.'); 
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(''), 5000); 
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        input:focus, textarea:focus {
          border-color: #3498db;
          box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
        }
      `}</style>

      <div style={styles.outer}>
        <div style={styles.container}>
          <header style={styles.header}>
            <h1 style={styles.title}>
              Contact Us
              <span style={styles.titleUnderline}></span>
            </h1>
            <p style={styles.subtitle}>
              Have questions or need assistance? Reach out to our team and we'll get back to you as soon as possible.
            </p>
          </header>

          {/* Contact Info Cards */}
          <div style={styles.cardsWrapper}>
            <div 
              style={styles.card(hoverStates.card0)}
              onMouseEnter={() => handleHover('card0', true)}
              onMouseLeave={() => handleHover('card0', false)}
            >
              <div style={styles.iconCircle(hoverStates.card0)}>
                <FaPhone />
              </div>
              <h3 style={styles.cardTitle(hoverStates.card0)}>Phone Number</h3>
              <p style={styles.cardText(hoverStates.card0)}>+92 312 5552476</p>
            </div>

            <div 
              style={styles.card(hoverStates.card1)}
              onMouseEnter={() => handleHover('card1', true)}
              onMouseLeave={() => handleHover('card1', false)}
            >
              <div style={styles.iconCircle(hoverStates.card1)}>
                <FaEnvelope />
              </div>
              <h3 style={styles.cardTitle(hoverStates.card1)}>Email Address</h3>
              <p style={styles.cardText(hoverStates.card1)}>bookings@rentcars247.com</p>
            </div>

            <div 
              style={styles.card(hoverStates.card2)}
              onMouseEnter={() => handleHover('card2', true)}
              onMouseLeave={() => handleHover('card2', false)}
            >
              <div style={styles.iconCircle(hoverStates.card2)}>
                <FaMapMarkerAlt />
              </div>
              <h3 style={styles.cardTitle(hoverStates.card2)}>Location</h3>
              <p style={styles.cardText(hoverStates.card2)}>
                Riphah International University,{"\n"}
                Sector I-14, Islamabad, Pakistan
              </p>
            </div>

            <div 
              style={styles.card(hoverStates.card3)}
              onMouseEnter={() => handleHover('card3', true)}
              onMouseLeave={() => handleHover('card3', false)}
            >
              <div style={styles.iconCircle(hoverStates.card3)}>
                <FaClock />
              </div>
              <h3 style={styles.cardTitle(hoverStates.card3)}>Opening Hours</h3>
              <p style={styles.cardText(hoverStates.card3)}>Mon - Sat (10.00AM - 06.00PM)</p>
            </div>
          </div>

          {/* Image and Form Section */}
          <div style={styles.formImageWrapper}>
            <div 
              style={styles.imageContainer(hoverStates.image)}
              onMouseEnter={() => handleHover('image', true)}
              onMouseLeave={() => handleHover('image', false)}
            >
              <img
                src={contactImage}
                alt="Contact Us"
                style={styles.image(hoverStates.image)}
              />
            </div>

            <form style={styles.form} onSubmit={handleSubmit} noValidate>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                style={styles.input}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
                required
              />
              <textarea
                name="message"
                placeholder="Add your message"
                value={formData.message}
                onChange={handleChange}
                style={styles.textarea}
                required
              />
              <button 
                type="submit" 
                style={styles.button(hoverStates.button)}
                disabled={isSubmitting}
                onMouseEnter={() => handleHover('button', true)}
                onMouseLeave={() => handleHover('button', false)}
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>
              {status && <p style={styles.status}>{status}</p>}
            </form>
          </div>
        </div>

        {/* Google Maps Section */}
        <div style={styles.mapContainer}>
          <iframe
            title="Riphah International University Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.6216463129553!2d73.02935851523955!3d33.70714446830126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfd9ca2579b291%3A0xb58c4e2e5e81b545!2sRiphah%20International%20University!5e0!3m2!1sen!2s!4v1688476800000!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;