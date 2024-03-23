import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UpdateChef() {
  const [chefs, setChefs] = useState([]);
  const [selectedChef, setSelectedChef] = useState('');
  const [updatedName, setUpdatedName] = useState('');

  useEffect(() => {
    fetchChefs();
  }, []);

  const fetchChefs = async () => {
    try {
      const response = await axios.get('http://localhost:7000/chef');
      setChefs(response.data);
    } catch (error) {
      console.error('Error fetching chefs:', error);
    }
  };

  const handleUpdate = async () => {
    if (!selectedChef || !updatedName) {
      console.error('Chef or updated name not provided');
      return;
    }
    try {
      const response = await axios.put(`http://localhost:7000/chef/${selectedChef}`, { name: updatedName });
      console.log('Chef updated:', response.data);
      fetchChefs(); // Refresh the list after update
      setSelectedChef(''); // Reset selected chef
      setUpdatedName(''); // Reset updated name
    } catch (error) {
      console.error('Error updating chef:', error);
    }
  };

  return (
    <div>
      <h2>Update chef</h2>
      <select value={selectedChef} onChange={(e) => setSelectedChef(e.target.value)}>
        <option value="">Select chef to update</option>
        {chefs.map((chef) => (
          <option key={chef.nom} value={chef.nom}>
            {chef.nom}
          </option>
        ))}
      </select>
      <input type="text" value={updatedName} onChange={(e) => setUpdatedName(e.target.value)} />
      <button onClick={handleUpdate}>Update chef</button>
    </div>
  );
}

export default UpdateChef;