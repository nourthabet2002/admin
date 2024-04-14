import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UpdateChef() {
  const [chefs, setChefs] = useState([]);
  const [selectedChef, setSelectedChef] = useState('');
  const [updatedChefData, setUpdatedChefData] = useState({});
  const [selectedChefData, setSelectedChefData] = useState(null);

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

  const handleSelectChef = (chefName) => {
    const chef = chefs.find(chef => chef.nom === chefName);
    setSelectedChefData(chef);
    setSelectedChef(chefName);
  };

  const handleUpdate = async () => {
    if (!selectedChefData || Object.keys(updatedChefData).length === 0) {
      console.error('Chef or updated information not provided');
      return;
    }
    try {
      const response = await axios.put(`http://localhost:7000/chef/${selectedChefData.nom}`, updatedChefData);
      console.log('Chef updated:', response.data);
      fetchChefs(); // Refresh the list after update
      setSelectedChef(''); // Reset selected chef
      setUpdatedChefData({}); // Reset updated chef data
      setSelectedChefData(null); // Reset selected chef data
    } catch (error) {
      console.error('Error updating chef:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedChefData({ ...updatedChefData, [name]: value });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>Modifier chef</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Chef Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Numtel</th>
                <th>Service ID</th>
                <th>Select</th>
              </tr>
            </thead>
            <tbody>
              {chefs.map(chef => (
                <tr key={chef.nom}>
                  <td>{chef.nom}</td>
                  <td>{chef.email}</td>
                  <td>{chef.password}</td>
                  <td>{chef.numtel}</td>
                  <td>{chef.serviceId}</td>
                  <td>
                    <button onClick={() => handleSelectChef(chef.nom)} className="btn btn-primary">Select</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {selectedChefData && (
            <div>
              <h3>Selected Chef Information</h3>
              <table className="table">
                <thead>
                  <tr>
                    <th>Field</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(selectedChefData).map(([field, value]) => (
                    <tr key={field}>
                      <td>{field}</td>
                      <td>
                        <input
                          type="text"
                          name={field}
                          value={updatedChefData[field] || value}
                          onChange={handleInputChange}
                          className="form-control"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button onClick={handleUpdate} className="btn btn-success">Update chef</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UpdateChef;




