import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoriesList = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  // Function to fetch categories from the backend API
  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:7000/categorie');
      setCategories(response.data);
    } catch (error) {
      setError('Failed to fetch categories');
    }
  };

  // Function to delete a category
  const deleteCategory = async (name) => {
    try {
      await axios.delete(`http://localhost:7000/categorie/${name}`);
      // After successful deletion, fetch categories again to update the list
      fetchCategories();
      console.log(`Category "${name}" deleted successfully.`);
    } catch (error) {
      setError('Failed to delete category');
    }
  };

  // Fetch categories on component mount
  useEffect(() => {
    fetchCategories();
  }, []); // Empty dependency array to ensure fetch only once on mount

  return (
    <div className="container">
      {error && <div className="error">{error}</div>}
      <h2>Categories List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category._id}>
              <td>{category.name}</td>
              <td>
                <button onClick={() => deleteCategory(category.name)} className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoriesList;

