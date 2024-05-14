import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Consultercategorie() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const categoriesResponse = await axios.get('http://localhost:7000/categorie');
        const categoriesData = await Promise.all(categoriesResponse.data.map(async (category) => {
          try {
            const serviceResponse = await axios.get(`http://localhost:7000/servicee/${category.serviceId}`);
            return {
              ...category,
              serviceName: serviceResponse.data.name
            };
          } catch (error) {
            console.error(`Error fetching service for category ${category._id}:`, error);
            return {
              ...category,
              serviceName: 'Service Not Found'
            };
          }
        }));
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="container">
      <h2>Consult Categorie</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Service</th>
            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody>
          {categories.map(category => (
            <tr key={category._id}>
              <td>{category.name}</td>
              <td>{category.serviceName}</td>
              {/* Add more columns as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Consultercategorie;

