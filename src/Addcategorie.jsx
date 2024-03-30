import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddcategorieForm = () => {
  const [services, setServices] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedServiceId, setSelectedServiceId] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://localhost:7000/service');
        setServices(response.data);
      } catch (error) {
        console.error('Failed to fetch services:', error);
        setError('Failed to fetch services');
      }
    };

    fetchServices();
  }, []);

  const addCategorie = async () => {
    try {
      const apiUrl = "http://localhost:7000/categorie/add";
      
      const response = await axios.post(apiUrl, { 
        name: selectedCategory,
        serviceId: selectedServiceId
      });
      
      console.log("Category added successfully:", response.data);
      
      setSelectedCategory('');
    } catch (error) {
      console.error("Failed to add category:", error);
      setError('Failed to add category');
    }
  };

  // Extract unique service names
  const uniqueServiceNames = [...new Set(services.map(service => service.name))];

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>Ajouter Categorie</h2>
          {error && <p>{error}</p>}
          <label>
            Select Service:
            <select className="form-control" value={selectedServiceId} onChange={(e) => setSelectedServiceId(e.target.value)}>
              <option value="">Select a service</option>
              {uniqueServiceNames.map((serviceName, index) => (
                <option key={index} value={services.find(service => service.name === serviceName)._id}>{serviceName}</option>
              ))}
            </select>
          </label>
          <br />
          <label>
            Category:
            <input type="text" className="form-control" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} />
          </label>
          <br />
          <button className="btn btn-primary" onClick={addCategorie}>Ajouter</button>
        </div>
      </div>
    </div>
  );
};

export default AddcategorieForm;

