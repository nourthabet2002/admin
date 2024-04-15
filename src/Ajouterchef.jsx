import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AddChef() {
  const [formData, setFormData] = useState({
    nom: '',
    prénom: '',
    email: '',
    password: '',
    numtel: '',
    serviceId: ''
  });
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get('http://localhost:7000/service');
      setServices(response.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.numtel.length !== 8) {
      setError("Le numéro de téléphone doit être composé de 8 chiffres.");
      return; // Exit the function early if the phone number length is not 8
    }

    try {
      const response = await axios.post('http://localhost:7000/add', formData);
      console.log('Chef added:', response.data);
      setFormData({
        nom: '',
        prénom: '',
        email: '',
        password: '',
        numtel: '',
        serviceId: ''
      });
      setError(null); // Clear any previous error
    } catch (error) {
      console.error('Error adding chef:', error);
      if (error.response && error.response.status === 400) {
        setError("Chef existe déjà"); // Set error message to display
      } else {
        setError('An error occurred while adding the chef.'); // Default error message
      }
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>Ajouter Chef</h2>
          <form onSubmit={handleSubmit}>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="form-group">
              <label>Nom:</label>
              <input type="text" name="nom" value={formData.nom} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label>Prénom:</label>
              <input type="text" name="prénom" value={formData.prénom} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label>Num Tel:</label>
              <input type="text" name="numtel" value={formData.numtel} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label>Service:</label>
              <select name="serviceId" value={formData.serviceId} onChange={handleChange} className="form-control">
                <option value="">Select Service</option>
                {services.map(service => (
                  <option key={service._id} value={service._id}>{service.name}</option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Add Chef</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddChef;




