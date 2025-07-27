import React, { useState } from 'react';
import hondaImage from './assets/hondalineup.jpeg';
import hondaCity from './assets/hondacity.jpg';
import hondaAccord from './assets/hondaaccord.webp';
import hondaBrv from './assets/hondabrv.jpg';
import BMW5 from './assets/bmw5.avif';
import BMW3 from './assets/BMW3.jpeg';
import BMWX5 from './assets/bmw5.avif';
import toyotafortuner from './assets/toyotafortuner.webp';
import hillix from './assets/hillix.jpeg';
import cultus from './assets/cultus.jpg';
import swift from './assets/swift.jpg';
import lexusrs from './assets/lexusrs.jpeg';
import pajero from './assets/pajero.jpg';
import audi from './assets/audi.jpg';
import kia from './assets/kia.jpg';
import suzuki from './assets/suzuki.avif';
import { FaCar, FaTimes, FaHome, FaInfoCircle, FaConciergeBell, FaSearch } from 'react-icons/fa';
import { MdAirlineSeatReclineNormal, MdDirectionsCar } from 'react-icons/md';
import Payment from './Payment';

const Main = () => {
  const [formData, setFormData] = useState({
    brand: 'all',
    paymentMethod: 'cash'
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCar, setSelectedCar] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({
    car: null,
    rentalDays: 1,
    pickupLocation: ''
  });

  const carBrands = [
    { value: 'all', label: 'All Brands' },
    { value: 'toyota', label: 'Toyota' },
    { value: 'honda', label: 'Honda' },
    { value: 'suzuki', label: 'Suzuki' },
    { value: 'bmw', label: 'BMW' },
    { value: 'mercedes', label: 'Mercedes' },
    { value: 'audi', label: 'Audi' },
    { value: 'hyundai', label: 'Hyundai' },
    { value: 'kia', label: 'Kia' },
    { value: 'nissan', label: 'Nissan' },
    { value: 'mitsubishi', label: 'Mitsubishi' },
    { value: 'lexus', label: 'Lexus' }
  ];

  const cars = [
    { id: 1, name: 'Toyota Corolla', brand: 'toyota', price: '$30/day', seats: 5, transmission: 'Automatic', image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 2, name: 'Honda Lineup', brand: 'honda', price: '2000/day', seats: 5, transmission: 'Automatic', image: hondaImage },
    { id: 3, name: 'Suzuki Cultus', brand: 'suzuki', price: '2500/day', seats: 5, transmission: 'Automatic', image: cultus },
    { id: 4, name: 'BMW 5 Series', brand: 'bmw', price: '9000/day', seats: 5, transmission: 'Automatic', image: BMW5 },
    { id: 5, name: 'Mercedes E-Class', brand: 'mercedes', price: '$95/day', seats: 5, transmission: 'Automatic', image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 6, name: 'Audi A4', brand: 'audi', price: '$85/day', seats: 5, transmission: 'Automatic', image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 7, name: 'Toyota Fortuner', brand: 'toyota', price: '6000/day', seats: 7, transmission: 'Automatic', image: toyotafortuner },
    { id: 8, name: 'Honda City', brand: 'honda', price: '3200/day', seats: 5, transmission: 'Automatic', image: hondaCity },
    { id: 9, name: 'Suzuki Swift', brand: 'suzuki', price: '2800/day', seats: 5, transmission: 'Automatic', image: swift },
    { id: 10, name: 'Toyota Prado', brand: 'toyota', price: '$70/day', seats: 7, transmission: 'Automatic', image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 11, name: 'Hyundai Tucson', brand: 'hyundai', price: '$45/day', seats: 5, transmission: 'Automatic', image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 12, name: 'Kia Sportage', brand: 'kia', price: '$48/day', seats: 5, transmission: 'Automatic', image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 13, name: 'Nissan Sunny', brand: 'nissan', price: '$30/day', seats: 5, transmission: 'Automatic', image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 14, name: 'Mitsubishi Pajero', brand: 'mitsubishi', price: '6500/day', seats: 7, transmission: 'Automatic', image: pajero },
    { id: 15, name: 'Lexus RX', brand: 'lexus', price: '1000/day', seats: 5, transmission: 'Automatic', image: lexusrs },
    { id: 16, name: 'Toyota Camry', brand: 'toyota', price: '$50/day', seats: 5, transmission: 'Automatic', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 17, name: 'Honda Accord', brand: 'honda', price: '5500/day', seats: 5, transmission: 'Automatic', image: hondaAccord },
    { id: 18, name: 'Suzuki Alto', brand: 'suzuki', price: '$20/day', seats: 4, transmission: 'Manual', image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 19, name: 'BMW 3 Series', brand: 'bmw', price: '8000/day', seats: 5, transmission: 'Automatic', image: BMW3 },
    { id: 20, name: 'Mercedes C-Class', brand: 'mercedes', price: '$85/day', seats: 5, transmission: 'Automatic', image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 21, name: 'Audi Q7', brand: 'audi', price: '11000/day', seats: 7, transmission: 'Automatic', image: audi },
    { id: 22, name: 'Hyundai Elantra', brand: 'hyundai', price: '$38/day', seats: 5, transmission: 'Automatic', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 23, name: 'Kia Picanto', brand: 'kia', price: '2500/day', seats: 4, transmission: 'Automatic', image: kia },
    { id: 24, name: 'Nissan X-Trail', brand: 'nissan', price: '$60/day', seats: 5, transmission: 'Automatic', image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 25, name: 'Mitsubishi Lancer', brand: 'mitsubishi', price: '$35/day', seats: 5, transmission: 'Automatic', image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 26, name: 'Lexus ES', brand: 'lexus', price: '$90/day', seats: 5, transmission: 'Automatic', image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 27, name: 'Toyota Hilux', brand: 'toyota', price: '5500/day', seats: 5, transmission: 'Manual', image: hillix },
    { id: 28, name: 'Honda BR-V', brand: 'honda', price: '4500/day', seats: 7, transmission: 'Automatic', image: hondaBrv },
    { id: 29, name: 'Suzuki Wagon R', brand: 'suzuki', price: '2200/day', seats: 4, transmission: 'Automatic', image: suzuki },
    { id: 30, name: 'BMW X5', brand: 'bmw', price: '12000/day', seats: 5, transmission: 'Automatic', image: BMWX5 },
  ];

  const filteredCars = cars.filter(car => {
    const matchesBrand = formData.brand.toLowerCase() === 'all' || 
                        car.brand.toLowerCase() === formData.brand.toLowerCase();
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         car.brand.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesBrand && matchesSearch;
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setSelectedCar(null);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setSelectedCar(null);
  };

  const handleCarClick = (carId) => {
    setSelectedCar(carId === selectedCar ? null : carId);
  };

  const handleBookNow = (car) => {
    setBookingDetails({
      car: car,
      rentalDays: 1,
      pickupLocation: ''
    });
    setShowPayment(true);
  };

  const handlePaymentSuccess = () => {
    setShowPayment(false);
    alert('Booking confirmed! Thank you for your payment.');
  };

  const resetFilters = () => {
    setFormData({
      brand: 'all',
      paymentMethod: 'cash'
    });
    setSearchTerm('');
    setSelectedCar(null);
  };

  return (
    <div style={styles.container}>
      <div style={styles.navbar}>
        <div style={styles.navItems}>
          <div style={styles.navItem}>
            <FaHome style={styles.navIcon} /> Home
          </div>
          <div style={styles.navItem}>
            <FaInfoCircle style={styles.navIcon} /> About
          </div>
          <div style={styles.navItem}>
            <FaConciergeBell style={styles.navIcon} /> Services
          </div>
        </div>
      </div>

      {showPayment && bookingDetails.car && (
        <div style={styles.paymentModal}>
          <div style={styles.modalContent}>
            <button 
              style={styles.closeButton}
              onClick={() => setShowPayment(false)}
            >
              <FaTimes />
            </button>
            <Payment
              selectedCar={bookingDetails.car}
              rentalDetails={{
                days: bookingDetails.rentalDays,
                pickup: bookingDetails.pickupLocation
              }}
              onPaymentSuccess={handlePaymentSuccess}
            />
          </div>
        </div>
      )}

      <div style={styles.mainContent}>
        <h1 style={styles.servicesHeading}>Our Services</h1>

        <div style={styles.filterSection}>
          <div style={styles.searchContainer}>
            <FaSearch style={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search cars by name or brand..."
              value={searchTerm}
              onChange={handleSearchChange}
              style={styles.searchInput}
            />
          </div>
          <div style={styles.filterRow}>
            <div style={styles.filterContainer}>
              <label style={styles.filterLabel}>
                <MdDirectionsCar style={styles.icon} /> Filter by Brand:
              </label>
              <select
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                style={styles.filterSelect}
              >
                {carBrands.map(brand => (
                  <option key={brand.value} value={brand.value}>
                    {brand.label}
                  </option>
                ))}
              </select>
            </div>
            <button 
              style={styles.resetButton}
              onClick={resetFilters}
            >
              Reset Filters
            </button>
          </div>
        </div>

        <div style={styles.carsSection}>
          <h2 style={styles.sectionTitle}>
            {formData.brand === 'all' 
              ? 'All Available Cars' 
              : `${carBrands.find(b => b.value === formData.brand)?.label} Cars`
            } ({filteredCars.length})
          </h2>
          
          {filteredCars.length === 0 ? (
            <div style={styles.noCars}>
              No cars available for selected filters
              <button 
                style={styles.resetButton}
                onClick={resetFilters}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div style={styles.carsGrid}>
              {filteredCars.map(car => (
                <div 
                  key={car.id} 
                  style={{
                    ...styles.carCard,
                    transform: selectedCar === car.id ? 'translateY(-10px)' : 'none',
                    boxShadow: selectedCar === car.id ? '0 10px 20px rgba(0,0,0,0.2)' : '0 2px 10px rgba(0,0,0,0.05)'
                  }}
                  onClick={() => handleCarClick(car.id)}
                >
                  <div style={styles.carImageContainer}>
                    <img src={car.image} alt={car.name} style={styles.carImage} />
                    <div style={styles.carPrice}>{car.price}</div>
                  </div>
                  <div style={styles.carDetails}>
                    <h3 style={styles.carName}>{car.name}</h3>
                    <div style={styles.carFeatures}>
                      <span style={styles.carFeature}>
                        <MdAirlineSeatReclineNormal /> {car.seats} Seats
                      </span>
                      <span style={styles.carFeature}>
                        <FaCar /> {car.transmission}
                      </span>
                    </div>
                    <button 
                      style={styles.bookButton}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBookNow(car);
                      }}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
    fontFamily: "'Roboto', sans-serif"
  },
  navbar: {
    backgroundColor: 'white',
    padding: '15px 0',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    borderBottom: '1px solid #eee'
  },
  navItems: {
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    gap: '30px'
  },
  navItem: {
    color: '#333',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
    fontSize: '1.1rem',
    fontWeight: '500',
    transition: 'all 0.3s',
    ':hover': {
      color: '#1976d2'
    }
  },
  navIcon: {
    fontSize: '1.2rem',
    color: '#1976d2'
  },
  mainContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    paddingTop: '40px'
  },
  servicesHeading: {
    color: '#1976d2',
    textAlign: 'center',
    fontSize: '2.5rem',
    margin: '0 0 30px 0',
    fontWeight: 'bold'
  },
  filterSection: {
    marginBottom: '30px',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  },
  searchContainer: {
    position: 'relative',
    marginBottom: '15px'
  },
  searchIcon: {
    position: 'absolute',
    left: '15px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#777'
  },
  searchInput: {
    width: '100%',
    padding: '12px 20px 12px 40px',
    borderRadius: '6px',
    border: '1px solid #ddd',
    fontSize: '1rem',
    ':focus': {
      outline: 'none',
      borderColor: '#1976d2'
    }
  },
  filterRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '15px'
  },
  filterContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    flex: 1
  },
  filterLabel: {
    fontWeight: '500',
    fontSize: '1.1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  filterSelect: {
    padding: '10px 15px',
    borderRadius: '6px',
    border: '1px solid #ddd',
    flex: 1,
    fontSize: '1rem',
    ':focus': {
      outline: 'none',
      borderColor: '#1976d2'
    }
  },
  resetButton: {
    padding: '10px 15px',
    backgroundColor: '#f0f0f0',
    color: '#333',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '500',
    transition: 'all 0.3s',
    ':hover': {
      backgroundColor: '#e0e0e0'
    }
  },
  carsSection: {
    marginBottom: '40px'
  },
  sectionTitle: {
    color: '#0d47a1',
    marginBottom: '20px',
    fontSize: '1.8rem'
  },
  carsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '20px'
  },
  carCard: {
    backgroundColor: 'white',
    borderRadius: '10px',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
    }
  },
  carImageContainer: {
    position: 'relative',
    height: '180px'
  },
  carImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  carPrice: {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
    backgroundColor: 'rgba(25, 118, 210, 0.9)',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '4px',
    fontWeight: '600',
    fontSize: '14px'
  },
  carDetails: {
    padding: '15px'
  },
  carName: {
    margin: '0 0 10px 0',
    color: '#333',
    fontSize: '1.1rem'
  },
  carFeatures: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '15px',
    color: '#666',
    fontSize: '14px'
  },
  carFeature: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px'
  },
  bookButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#1976d2',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: '500',
    transition: 'background-color 0.3s',
    ':hover': {
      backgroundColor: '#1565c0'
    }
  },
  noCars: {
    textAlign: 'center',
    padding: '40px',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    color: '#666',
    fontSize: '1.2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px'
  },
  paymentModal: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '90%',
    maxHeight: '90%',
    overflow: 'auto',
    width: '800px',
    position: 'relative'
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: '#666',
    ':hover': {
      color: '#333'
    }
  }
};

export default Main;