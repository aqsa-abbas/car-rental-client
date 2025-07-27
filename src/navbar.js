import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ user, onLogout }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAddCarClick = () => {
    if (!user) {
      navigate('/login', { state: { from: '/add-car' } });
    } else if (user.role !== 'admin') {
      alert('Only admins can add cars. Please login as admin.');
      navigate('/admin/login');
    } else {
      navigate('/add-car');
    }
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
    { name: 'Help', path: '/help' },
    { 
      name: 'Add Car',
      path: '/add-car',
      adminOnly: true,
      onClick: handleAddCarClick
    }
  ];

  const authItems = user
    ? [
        { 
          name: user.role === 'admin' ? 'Admin Panel' : 'My Account',
          path: user.role === 'admin' ? '/admin/dashboard' : '/account'
        },
        { 
          name: 'Logout',
          onClick: onLogout
        }
      ]
    : [
        { name: 'Login', path: '/login' },
        { name: 'Admin Login', path: '/admin/login' }
      ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Styles
  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 5%',
      backgroundColor: scrolled ? 'rgba(2, 27, 64, 0.95)' : 'transparent',
      color: 'white',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      backdropFilter: 'blur(8px)',
      transition: 'all 0.3s ease',
      boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.2)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none'
    },
    brand: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      textDecoration: 'none'
    },
    logo: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      objectFit: 'cover'
    },
    title: {
      fontSize: '1.6rem',
      fontWeight: '700',
      background: 'linear-gradient(90deg, #1e88e5, #0d47a1)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
      margin: 0
    },
    navContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px'
    },
    mainLinks: {
      display: 'flex',
      gap: '5px'
    },
    authLinks: {
      display: 'flex',
      gap: '5px',
      marginLeft: '20px',
      borderLeft: '1px solid rgba(255,255,255,0.2)',
      paddingLeft: '20px'
    },
    navLink: {
      color: '#4169E1',
      textDecoration: 'none',
      padding: '8px 15px',
      borderRadius: '6px',
      transition: 'all 0.3s ease',
      position: 'relative',
      fontWeight: '600',
      fontSize: '0.95rem',
      cursor: 'pointer'
    },
    authLink: {
      color: '#ffffff',
      backgroundColor: '#1F51FF',
      border: '1px solid rgba(31, 81, 255, 0.5)',
      transition: 'all 0.3s ease'
    },
    activeLink: {
      color: '#ffffff',
      backgroundColor: '#0096FF',
    },
    hoverLink: {
      backgroundColor: 'rgba(0, 150, 255, 0.2)',
      color: '#ffffff'
    },
    activeIndicator: {
      position: 'absolute',
      bottom: '0',
      left: '15px',
      right: '15px',
      height: '2px',
      backgroundColor: '#0096FF',
      borderRadius: '2px'
    },
    mobileButton: {
      display: 'none',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '8px',
      zIndex: 1100
    },
    menuIcon: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '25px',
      height: '18px',
      position: 'relative'
    },
    menuIconLine: {
      display: 'block',
      width: '100%',
      height: '2px',
      backgroundColor: '#4169E1',
      transition: 'all 0.3s ease',
      transformOrigin: 'center'
    },
    menuIconOpen: {
      transform: 'translateY(7px) rotate(45deg)'
    },
    menuIconHidden: {
      opacity: 0
    },
    menuIconClose: {
      transform: 'translateY(-7px) rotate(-45deg)'
    },
    mobileMenu: {
      position: 'fixed',
      top: '0',
      right: mobileMenuOpen ? '0' : '-100%',
      width: '70%',
      maxWidth: '280px',
      height: '100vh',
      backgroundColor: 'rgba(2, 27, 64, 0.98)',
      backdropFilter: 'blur(12px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '25px',
      transition: 'right 0.3s ease',
      padding: '2rem',
      boxShadow: '-5px 0 15px rgba(0,0,0,0.2)',
      zIndex: 1000
    },
    mobileLink: {
      width: '100%',
      textAlign: 'center',
      padding: '12px',
      fontSize: '1.1rem',
      color: '#4169E1',
      textDecoration: 'none',
      borderRadius: '6px',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    mobileActiveLink: {
      color: '#ffffff',
      backgroundColor: '#0096FF'
    },
    mobileAuthLink: {
      color: '#ffffff',
      backgroundColor: 'rgba(31, 81, 255, 0.3)',
      border: '1px solid rgba(31, 81, 255, 0.5)'
    },
    logoutButton: {
      background: 'none',
      border: 'none',
      color: '#ff4444',
      cursor: 'pointer',
      padding: '12px',
      fontSize: '1.1rem',
      width: '100%',
      textAlign: 'center'
    }
  };

  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.brand}>
        <img 
          src="https://img.icons8.com/fluency/96/000000/car-rental.png" 
          alt="Rental Logo" 
          style={styles.logo}
        />
        <h1 style={styles.title}>Rental</h1>
      </Link>

      <div style={styles.navContainer}>
        <div style={styles.mainLinks}>
          {navItems.filter(item => !item.adminOnly || (user && user.role === 'admin')).map((item, index) => (
            <Link
              key={index}
              to={item.onClick ? '#' : item.path}
              onClick={item.onClick || null}
              style={{
                ...styles.navLink,
                ...(location.pathname === item.path ? styles.activeLink : {}),
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = styles.hoverLink.backgroundColor;
                e.currentTarget.style.color = styles.hoverLink.color;
              }}
              onMouseLeave={(e) => {
                if (location.pathname !== item.path) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = styles.navLink.color;
                } else {
                  e.currentTarget.style.color = '#ffffff';
                }
              }}
            >
              {item.name}
              {location.pathname === item.path && (
                <span style={styles.activeIndicator}></span>
              )}
            </Link>
          ))}
        </div>
        
        <div style={styles.authLinks}>
          {authItems.map((item, index) => (
            item.onClick ? (
              <button
                key={index}
                onClick={item.onClick}
                style={{
                  ...styles.navLink,
                  ...styles.authLink,
                  ...(location.pathname === item.path ? styles.activeLink : {}),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(31, 81, 255, 0.5)';
                }}
                onMouseLeave={(e) => {
                  if (location.pathname !== item.path) {
                    e.currentTarget.style.backgroundColor = styles.authLink.backgroundColor;
                  }
                }}
              >
                {item.name}
              </button>
            ) : (
              <Link
                key={index}
                to={item.path}
                style={{
                  ...styles.navLink,
                  ...styles.authLink,
                  ...(location.pathname === item.path ? styles.activeLink : {}),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(31, 81, 255, 0.5)';
                }}
                onMouseLeave={(e) => {
                  if (location.pathname !== item.path) {
                    e.currentTarget.style.backgroundColor = styles.authLink.backgroundColor;
                  }
                }}
              >
                {item.name}
                {location.pathname === item.path && (
                  <span style={styles.activeIndicator}></span>
                )}
              </Link>
            )
          ))}
        </div>
      </div>

      <button 
        style={styles.mobileButton}
        onClick={toggleMobileMenu}
        aria-label="Toggle navigation"
      >
        <div style={styles.menuIcon}>
          <span style={{
            ...styles.menuIconLine,
            ...(mobileMenuOpen ? styles.menuIconOpen : {})
          }}></span>
          <span style={{
            ...styles.menuIconLine,
            ...(mobileMenuOpen ? styles.menuIconHidden : {})
          }}></span>
          <span style={{
            ...styles.menuIconLine,
            ...(mobileMenuOpen ? styles.menuIconClose : {})
          }}></span>
        </div>
      </button>

      <div style={styles.mobileMenu}>
        {navItems.filter(item => !item.adminOnly || (user && user.role === 'admin')).map((item, index) => (
          <Link
            key={index}
            to={item.onClick ? '#' : item.path}
            onClick={() => {
              if (item.onClick) item.onClick();
              setMobileMenuOpen(false);
            }}
            style={{
              ...styles.mobileLink,
              ...(location.pathname === item.path ? styles.mobileActiveLink : {}),
            }}
          >
            {item.name}
          </Link>
        ))}
        
        <div style={{ width: '100%', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '20px' }}>
          {authItems.map((item, index) => (
            item.onClick ? (
              <button
                key={index}
                onClick={() => {
                  item.onClick();
                  setMobileMenuOpen(false);
                }}
                style={styles.logoutButton}
              >
                {item.name}
              </button>
            ) : (
              <Link
                key={index}
                to={item.path}
                style={{
                  ...styles.mobileLink,
                  ...styles.mobileAuthLink,
                  ...(location.pathname === item.path ? styles.mobileActiveLink : {}),
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            )
          ))}
        </div>
      </div>

      <style>
        {`
          @media (max-width: 1024px) {
            .nav-link {
              padding: 6px 12px;
              font-size: 0.9rem;
            }
          }

          @media (max-width: 768px) {
            .navbar {
              padding: 12px 5%;
            }

            .nav-container {
              display: none;
            }

            button[style*="mobileButton"] {
              display: block;
            }
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;