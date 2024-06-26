import React, { useState } from 'react';
import axios from 'axios';

const AddServiceForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Make POST request to backend API endpoint on port 7000
      const response = await axios.post('http://localhost:7000/service/add', {
        name,
        description
      });

      // Handle successful response
      console.log('Service added successfully:', response.data);
      
      // Optionally, you can reset the form after successful submission
      setName('');
      setDescription('');
      setError(null);
    } catch (error) {
      // Handle error
      console.error('Error adding service:', error);
      setError('Failed to add service');
    }
  };

  return (
    <div className="add-service-form">
      <h2>Add Service</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit} className="service-form">
        <div className="form-group">
          <label htmlFor="name">Service Name:</label>
          <input type="text" id="name" className="form-control" value={name} onChange={handleNameChange} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Service Description:</label>
          <textarea id="description" className="form-control" value={description} onChange={handleDescriptionChange}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Add Service</button>
      </form>
    </div>
  );
};

export default AddServiceForm;

