import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Consulterservice() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function fetchServices() {
      try {
        const response = await axios.get('http://localhost:7000/service');
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    }

    fetchServices();
  }, []);

  return (
    <div className="container">
      <h2>Consulter services</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody>
          {services.map(service => (
            <tr key={service._id}>
              <td>{service.name}</td>
              <td>{service.description}</td>
              {/* Add more columns as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Consulterservice;
