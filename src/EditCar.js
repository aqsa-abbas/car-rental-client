import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditCar = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [carData, setCarData] = useState({
    name: '',
    brand: '',
    pricePerDay: '',
    seats: '',
    gearType: '',
    fuelType: '',
    ac: false
  });

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/car/${id}`);
        if (res.data.success) {
          setCarData(res.data.car);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCar();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCarData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:5000/api/car/update/${id}`,
        carData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
      if (res.data.success) {
        setMessage('Car updated successfully!');
        setTimeout(() => navigate('/admin/dashboard'), 1000);
      }
    } catch (err) {
      console.error(err);
      setMessage('Update failed.');
    }
  };

  if (loading) return <p>Loading car data...</p>;

  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: 'auto' }}>
      <h2>Edit Car</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleUpdate} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input name="name" value={carData.name} onChange={handleChange} placeholder="Name" />
        <input name="brand" value={carData.brand} onChange={handleChange} placeholder="Brand" />
        <input name="pricePerDay" value={carData.pricePerDay} onChange={handleChange} placeholder="Price/Day" type="number" />
        <input name="seats" value={carData.seats} onChange={handleChange} placeholder="Seats" type="number" />
        <select name="gearType" value={carData.gearType} onChange={handleChange}>
          <option value="">Select Gear</option>
          <option value="manual">Manual</option>
          <option value="automatic">Automatic</option>
        </select>
        <select name="fuelType" value={carData.fuelType} onChange={handleChange}>
          <option value="">Select Fuel</option>
          <option value="petrol">Petrol</option>
          <option value="diesel">Diesel</option>
          <option value="electric">Electric</option>
          <option value="cng">CNG</option>
        </select>
        <label>
          <input type="checkbox" name="ac" checked={carData.ac} onChange={handleChange} />
          AC Available
        </label>
        <button type="submit">Update Car</button>
      </form>
    </div>
  );
};

export default EditCar;
