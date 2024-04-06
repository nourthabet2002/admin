import React, { useState } from 'react';
import axios from 'axios';

const Chef = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prénom: '',
    email: '',
    password: '',
    numtel: '',
    spécialité: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:7000/employe/add', formData);
      console.log('Employee added:', response.data);
      setFormData({
        nom: '',
        prénom: '',
        email: '',
        password: '',
        numtel: '',
        spécialité: ''
      });
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  return (
    <div className="container">
      <h2>Ajouter Employee</h2>
      <form onSubmit={handleSubmit}>
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
          <label>Spécialité:</label>
          <input type="text" name="spécialité" value={formData.spécialité} onChange={handleChange} className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Add Employee</button>
      </form>
    </div>
  );
};

export default Chef;
