import React, { useState } from 'react';
import { FaCreditCard, FaUser, FaCalendarAlt, FaLock, FaCheckCircle } from 'react-icons/fa';

const Payment = ({ selectedCar, rentalDetails, onPaymentSuccess }) => {
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    agreeTerms: false
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Format card number with spaces
    if (name === 'cardNumber') {
      const formattedValue = value
        .replace(/\s/g, '')
        .replace(/(\d{4})/g, '$1 ')
        .trim();
      setPaymentData(prev => ({
        ...prev,
        [name]: formattedValue
      }));
      return;
    }
    
    // Format expiry date with slash
    if (name === 'expiryDate') {
      const formattedValue = value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .substring(0, 5);
      setPaymentData(prev => ({
        ...prev,
        [name]: formattedValue
      }));
      return;
    }
    
    setPaymentData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      setTimeout(() => {
        onPaymentSuccess();
      }, 2000);
    }, 1500);
  };

  const calculateTotal = (priceStr, days) => {
    const price = parseFloat(priceStr.replace(/[^0-9.]/g, ''));
    return `$${(price * days).toFixed(2)}`;
  };

  if (isSuccess) {
    return (
      <div style={styles.successContainer}>
        <FaCheckCircle style={styles.successIcon} />
        <h2>Payment Successful!</h2>
        <p>Your booking for {selectedCar.name} has been confirmed.</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1>Complete Your Booking</h1>
        <p>Please enter your payment details to confirm your reservation</p>
      </div>

      <div style={styles.content}>
        <div style={styles.carSummary}>
          <h2>Booking Summary</h2>
          <div style={styles.summaryItem}>
            <span>Car:</span>
            <span>{selectedCar.name}</span>
          </div>
          <div style={styles.summaryItem}>
            <span>Price:</span>
            <span>{selectedCar.price}</span>
          </div>
          <div style={styles.summaryItem}>
            <span>Rental Days:</span>
            <span>{rentalDetails.days}</span>
          </div>
          <div style={styles.summaryItem}>
            <span>Pickup Location:</span>
            <span>{rentalDetails.pickup}</span>
          </div>
          <div style={styles.summaryItem}>
            <span>Total Amount:</span>
            <span style={styles.totalAmount}>
              {calculateTotal(selectedCar.price, rentalDetails.days)}
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} style={styles.paymentForm}>
          <h2>Payment Details</h2>
          
          <div style={styles.formGroup}>
            <label style={styles.label}>
              <FaCreditCard style={styles.icon} /> Card Number
            </label>
            <input
              type="text"
              name="cardNumber"
              value={paymentData.cardNumber}
              onChange={handleChange}
              placeholder="1234 5678 9012 3456"
              style={styles.input}
              required
              maxLength="19"
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>
              <FaUser style={styles.icon} /> Name on Card
            </label>
            <input
              type="text"
              name="cardName"
              value={paymentData.cardName}
              onChange={handleChange}
              placeholder="John Doe"
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formRow}>
            <div style={styles.formGroup}>
              <label style={styles.label}>
                <FaCalendarAlt style={styles.icon} /> Expiry Date
              </label>
              <input
                type="text"
                name="expiryDate"
                value={paymentData.expiryDate}
                onChange={handleChange}
                placeholder="MM/YY"
                style={styles.input}
                required
                maxLength="5"
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>
                <FaLock style={styles.icon} /> CVV
              </label>
              <input
                type="text"
                name="cvv"
                value={paymentData.cvv}
                onChange={handleChange}
                placeholder="123"
                style={styles.input}
                required
                maxLength="3"
              />
            </div>
          </div>

          <div style={styles.checkboxGroup}>
            <input
              type="checkbox"
              name="agreeTerms"
              checked={paymentData.agreeTerms}
              onChange={handleChange}
              style={styles.checkbox}
              required
            />
            <label style={styles.checkboxLabel}>
              I agree to the terms and conditions
            </label>
          </div>

          <button 
            type="submit" 
            style={styles.payButton}
            disabled={isProcessing || !paymentData.agreeTerms}
          >
            {isProcessing ? 'Processing...' : 'Confirm Payment'}
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: "'Roboto', sans-serif"
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
    paddingTop: '20px'
  },
  content: {
    display: 'flex',
    gap: '30px',
    '@media (max-width: 768px)': {
      flexDirection: 'column'
    }
  },
  carSummary: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    height: 'fit-content'
  },
  summaryItem: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '15px',
    paddingBottom: '15px',
    borderBottom: '1px solid #eee'
  },
  totalAmount: {
    fontWeight: 'bold',
    color: '#1976d2',
    fontSize: '1.2rem'
  },
  paymentForm: {
    flex: 2,
    backgroundColor: 'white',
    padding: '25px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  formGroup: {
    marginBottom: '20px'
  },
  formRow: {
    display: 'flex',
    gap: '20px',
    '@media (max-width: 480px)': {
      flexDirection: 'column',
      gap: '0'
    }
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '8px',
    fontWeight: '500',
    color: '#333'
  },
  icon: {
    color: '#1976d2'
  },
  input: {
    width: '100%',
    padding: '12px 15px',
    border: '1px solid #ddd',
    borderRadius: '6px',
    fontSize: '16px',
    transition: 'all 0.3s',
    ':focus': {
      borderColor: '#1976d2',
      boxShadow: '0 0 0 3px rgba(25, 118, 210, 0.1)',
      outline: 'none'
    }
  },
  checkboxGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    margin: '25px 0'
  },
  checkbox: {
    width: '18px',
    height: '18px',
    accentColor: '#1976d2'
  },
  checkboxLabel: {
    fontSize: '14px',
    color: '#555'
  },
  payButton: {
    width: '100%',
    padding: '15px',
    backgroundColor: '#1976d2',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s',
    ':hover': {
      backgroundColor: '#1565c0'
    },
    ':disabled': {
      backgroundColor: '#90caf9',
      cursor: 'not-allowed'
    }
  },
  successContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '60vh',
    textAlign: 'center'
  },
  successIcon: {
    fontSize: '4rem',
    color: '#4CAF50',
    marginBottom: '20px'
  }
};

export default Payment;