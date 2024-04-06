import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Modifierservice() {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [updatedName, setUpdatedName] = useState('');

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

  const handleSelectService = (service) => {
    setSelectedService(service);
    setUpdatedName(service.name);
  };

  const handleNameChange = (e) => {
    setUpdatedName(e.target.value);
  };

  const handleUpdateService = async () => {
    try {
      await axios.put(`http://localhost:7000/service/${selectedService._id}`, { name: updatedName });
      console.log('Service updated successfully');
      // Optionally, you can show a success message or update the service list here
      // Refresh the service list after updating
      fetchServices();
    } catch (error) {
      console.error('Error updating service:', error);
    }
  };

  return (
    <div className="container">
      <h2>Modifier Service</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service._id}>
              <td>{service.name}</td>
              <td>{service.description}</td>
              <td>
                <button onClick={() => handleSelectService(service)} className="btn btn-primary">Select</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedService && (
        <div>
          <h2>Selected Service Details</h2>
          <p>Description: {selectedService.description}</p>
          {/* Editable name field */}
          <input type="text" value={updatedName} onChange={handleNameChange} className="form-control" />
          <button onClick={handleUpdateService} className="btn btn-success">Update Service</button>
        </div>
      )}
    </div>
  );
}

export default Modifierservice;


