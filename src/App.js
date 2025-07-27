import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './navbar';
import FirstPage from './FirstPage';
import About from './About';
import ContactPage from './Contact';
import HelpPage from './help';
import UserLogin from './UserLogin';
import Main from './main'; 
import AddCarForm from './AddCarForm'; 
import EditCar from './EditCar';
import AdminLogin from './AdminLogin';
import AdminSignup from './AdminSignup';
import AdminDashboard from './AdminDashboard';
function App() {
  // eslint-disable-next-line no-unused-vars
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/help" element={<HelpPage />} />

        {/* Car Rental Page */}
        <Route path="/rent-car" element={<Main />} />

        {/* Services page (same as rent-car) */}
        <Route path="/services" element={<Main />} />
        {/* Or redirect /services to /rent-car: */}
        {/* <Route path="/services" element={<Navigate to="/rent-car" replace />} /> */}

        {/* Login */}
        <Route path="/login" element={<UserLogin setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/UserLogin" element={<Navigate to="/login" replace />} />

{/* ✅ AddCarForm route */}
        <Route path="/add-car" element={<AddCarForm />} />
        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/edit-car/:id" element={<EditCar />} /> {/* ✅ Edit Route */}
<Route path="/admin/signup" element={<AdminSignup />} />
      </Routes>
    </Router>
  );
}

export default App;
