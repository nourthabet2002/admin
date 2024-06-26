import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ServiceComponent() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://localhost:7000/service');
        setServices(response.data);
        setLoading(false);
        console.log('Fetched services:', response.data); // Log fetched services
      } catch (error) {
        console.error('Error fetching services:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const handleDelete = async (serviceName) => {
    try {
      // Find the service in the list of services
      const serviceToDelete = services.find(service => service.name === serviceName);
      
      // If serviceToDelete is not found, return
      if (!serviceToDelete) {
        console.error('Service not found:', serviceName);
        return;
      }

      // Delete service and associated categories
      await axios.delete(`http://localhost:7000/service/${serviceName}`);

      // Update state to remove the deleted service
      setServices(prevServices => prevServices.filter(service => service.name !== serviceName));

      console.log('Service and associated categories deleted:', serviceName);
    } catch (error) {
      console.error('Error deleting service:', error);
    }
  };

  if (loading) {
    return <div className="container">Loading...</div>;
  }

  if (error) {
    return <div className="container">Error: {error.message}</div>;
  }

  // Filter out duplicate service names
  const uniqueServices = services.filter((service, index, self) =>
    index === self.findIndex(s => s.name === service.name)
  );

  return (
    <div className="container">
      <h1>Service List</h1>
      {uniqueServices.length === 0 ? (
        <div>No services available.</div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {uniqueServices.map(service => (
              <tr key={service._id}>
                <td>{service.name}</td>
                <td>
                  <button onClick={() => handleDelete(service.name)} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ServiceComponent;









