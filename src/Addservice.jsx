import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddServiceForm = () => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch services from the server when the component mounts
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://localhost:7000/service');
        setServices(response.data); // Assuming the response is an array of service objects with properties like _id and name
      } catch (error) {
        console.error('Failed to fetch services:', error);
        setError('Failed to fetch services');
      }
    };

    fetchServices();
  }, []);

  const addService = async () => {
    try {
      const apiUrl = "http://localhost:7000/service/add";
      const response = await axios.post(apiUrl, { name: selectedService, category });
      console.log("Service added successfully:", response.data);
      // Reset selectedService and category after adding the service
      setSelectedService('');
      setCategory('');
      // Optionally, fetch services again to update the list
      // fetchServices();
    } catch (error) {
      console.error("Failed to add service:", error);
      setError('Failed to add service');
    }
  };

  return (
    <div>
      <h2>Add Service</h2>
      {error && <p>{error}</p>}
      <label>
        Select Service:
        <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)}>
          <option value="">Select a service</option>
          {services.map(service => (
            <option key={service._id} value={service.name}>{service.name}</option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Category:
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
      </label>
      <br />
      <button onClick={addService}>Add Service</button>
    </div>
  );
};

export default AddServiceForm;