// AddChef.js
import React, { useState } from 'react';
import axios from 'axios';

function AddChef() {
  const [formData, setFormData] = useState({
   
    nom: '',
    prénom: '',
    email: '',
    password: '',
    numtel: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:7000/add', formData);
      console.log('chef added:', response.data);
      setFormData({
       
        nom: '',
        prénom: '',
        email: '',
        password: '',
        numtel: ''
      });
    } catch (error) {
      console.error('Error adding chef:', error);
    }
  };

 
  
  return (
    
    <div > 
      <h2>Add chef</h2>
      <form onSubmit={handleSubmit}>
        
        <div>
          <label>Nom:</label>
          <input type="text" name="nom" value={formData.nom} onChange={handleChange} />
        </div>
        <div>
          <label>Prénom:</label>
          <input type="text" name="prénom" value={formData.prénom} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <div>
          <label>Num Tel:</label>
          <input type="text" name="numtel" value={formData.numtel} onChange={handleChange} />
        </div>
        <button type="submit">Add chef</button>
      </form>
    </div>
    
  );
}

export default AddChef;
