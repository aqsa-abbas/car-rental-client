import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const adminName = localStorage.getItem('name') || 'Admin';
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCars = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/car/all');
      if (res.data.success) {
        setCars(res.data.cars);
      } else {
        console.error('Error fetching cars');
      }
    } catch (err) {
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this car?')) return;

    try {
      await axios.delete(`http://localhost:5000/api/car/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setCars((prevCars) => prevCars.filter(car => car._id !== id));
    } catch (err) {
      console.error('Delete error:', err);
      alert('Failed to delete car');
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/admin/login');
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Welcome, {adminName}</h2>

      <div style={styles.actions}>
        <button style={styles.button} onClick={() => navigate('/add-car')}>➕ Add New Car</button>
        <button style={styles.logoutButton} onClick={handleLogout}>🚪 Logout</button>
      </div>

      {loading ? (
        <p>Loading cars...</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Image</th>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Brand</th>
              <th style={styles.th}>Seats</th>
              <th style={styles.th}>Gear</th>
              <th style={styles.th}>Fuel</th>
              <th style={styles.th}>Price/Day</th>
              <th style={styles.th}>AC</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <tr key={car._id}>
                <td style={styles.td}>
                  <img
                    src={`http://localhost:5000${car.image}`}
                    alt={car.name}
                    style={{ width: '80px', height: 'auto' }}
                  />
                </td>
                <td style={styles.td}>{car.name}</td>
                <td style={styles.td}>{car.brand}</td>
                <td style={styles.td}>{car.seats}</td>
                <td style={styles.td}>{car.gearType}</td>
                <td style={styles.td}>{car.fuelType}</td>
                <td style={styles.td}>{car.pricePerDay}</td>
                <td style={styles.td}>{car.ac ? 'Yes' : 'No'}</td>
                <td style={styles.td}>
                  <button
                    onClick={() => navigate(`/edit-car/${car._id}`)}
                    style={styles.editButton}
                  >
                    ✏️ Edit
                  </button>
                  <button
                    onClick={() => handleDelete(car._id)}
                    style={styles.deleteButton}
                  >
                    🗑️ Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    maxWidth: '1200px',
    margin: 'auto',
    fontFamily: 'Arial, sans-serif'
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px'
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px'
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#1976d2',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  },
  logoutButton: {
    padding: '10px 20px',
    backgroundColor: '#e53935',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse'
  },
  th: {
    backgroundColor: '#f0f0f0',
    padding: '10px',
    border: '1px solid #ddd'
  },
  td: {
    padding: '10px',
    border: '1px solid #ddd',
    textAlign: 'center'
  },
  deleteButton: {
    padding: '6px 10px',
    backgroundColor: '#e53935',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginLeft: '8px'
  },
  editButton: {
    padding: '6px 10px',
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default AdminDashboard;
