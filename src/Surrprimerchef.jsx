import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DeleteChef() {
  const [chefs, setChefs] = useState([]);

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

  const handleDelete = async (nom) => {
    try {
      const response = await axios.delete(`http://localhost:7000/chef/${nom}`);
      console.log('Chef deleted:', response.data);
      fetchChefs();
    } catch (error) {
      console.error('Error deleting chef:', error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>Surrprimer chef</h2>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Email</th>
                <th>Password</th>
                <th>Numéro de téléphone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {chefs.map((chef) => (
                <tr key={chef.id}>
                  <td>{chef.id}</td>
                  <td>{chef.nom}</td>
                  <td>{chef.prénom}</td>
                  <td>{chef.email}</td>
                  <td>{chef.password}</td>
                  <td>{chef.numtel}</td>
                  <td>
                    <button onClick={() => handleDelete(chef.nom)} className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DeleteChef;

