import React, { useState } from 'react';
import axios from 'axios';

const AddCarForm = () => {
  const [carData, setCarData] = useState({
    name: '',
    brand: '',
    pricePerDay: '', // ✅ matches schema
    seats: '',
    gearType: '',     // ✅ matches schema
    fuelType: '',
    ac: false
  });
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCarData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsSubmitting(true);

    const { name, brand, pricePerDay, seats, gearType, fuelType } = carData;

    if (!image || !name || !brand || !pricePerDay || !seats || !gearType || !fuelType) {
      setError('All fields including image are required.');
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData();
    formData.append('name', carData.name);
    formData.append('brand', carData.brand);
    formData.append('seats', carData.seats);
    formData.append('pricePerDay', carData.pricePerDay);
    formData.append('gearType', carData.gearType);
    formData.append('fuelType', carData.fuelType);
    formData.append('ac', carData.ac);
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:5000/api/car/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.data.success) {
        setSuccess('Car added successfully!');
        setCarData({
          name: '',
          brand: '',
          pricePerDay: '',
          seats: '',
          gearType: '',
          fuelType: '',
          ac: false
        });
        setImage(null);
      } else {
        setError(response.data.message || 'Something went wrong.');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Error adding car.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Add New Car</h2>

        {error && <div style={{ ...styles.message, backgroundColor: '#fdecea', color: '#d32f2f' }}>{error}</div>}
        {success && <div style={{ ...styles.message, backgroundColor: '#e8f5e9', color: '#2e7d32' }}>{success}</div>}

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Car Image</label>
            <input type="file" accept="image/*" onChange={handleImageChange} style={styles.input} />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Car Name</label>
            <input type="text" name="name" value={carData.name} onChange={handleChange} style={styles.input} required />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Brand</label>
            <input type="text" name="brand" value={carData.brand} onChange={handleChange} style={styles.input} required />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Price Per Day (PKR)</label>
            <input type="number" name="pricePerDay" value={carData.pricePerDay} onChange={handleChange} style={styles.input} required />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Seats</label>
            <input type="number" name="seats" value={carData.seats} onChange={handleChange} style={styles.input} required />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Gear Type</label>
            <select name="gearType" value={carData.gearType} onChange={handleChange} style={styles.input} required>
              <option value="">Select gear</option>
              <option value="automatic">Automatic</option>
              <option value="manual">Manual</option>
            </select>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Fuel Type</label>
            <select name="fuelType" value={carData.fuelType} onChange={handleChange} style={styles.input} required>
              <option value="">Select fuel type</option>
              <option value="petrol">Petrol</option>
              <option value="diesel">Diesel</option>
              <option value="hybrid">Hybrid</option>
              <option value="electric">Electric</option>
              <option value="cng">CNG</option>
              <option value="lpg">LPG</option>
            </select>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>
              <input type="checkbox" name="ac" checked={carData.ac} onChange={handleChange} />
              &nbsp;AC Available
            </label>
          </div>

          <button
            type="submit"
            style={{
              ...styles.submitButton,
              opacity: isSubmitting ? 0.7 : 1,
              cursor: isSubmitting ? 'not-allowed' : 'pointer'
            }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Uploading...' : 'Add Car'}
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#ffffff',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  },
  card: {
    width: '100%',
    maxWidth: '500px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    padding: '40px',
    border: '1px solid #e6e6e6'
  },
  title: {
    color: '#1976d2',
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: '26px',
    fontWeight: '600'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  label: {
    color: '#555555',
    fontSize: '14px',
    fontWeight: '500'
  },
  input: {
    padding: '12px',
    border: '1px solid #dddddd',
    borderRadius: '6px',
    fontSize: '15px',
    outline: 'none',
    width: '100%'
  },
  submitButton: {
    backgroundColor: '#1976d2',
    color: 'white',
    border: 'none',
    padding: '14px',
    borderRadius: '6px',
    fontSize: '16px',
    fontWeight: '600',
    transition: 'background-color 0.2s',
    marginTop: '10px',
    width: '100%'
  },
  message: {
    padding: '12px',
    borderRadius: '6px',
    fontSize: '14px',
    textAlign: 'center'
  }
};

export default AddCarForm;