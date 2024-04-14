import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ModifierCategorie = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [updatedName, setUpdatedName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Fetch categories from the backend when the component mounts
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:7000/categorie");
        setCategories(response.data);
        console.log("Categories:", response.data); // Log categories
      } catch (error) {
        setErrorMessage(error.response.data.message);
      }
    };

    fetchCategories();
  }, []);

  // Function to handle choosing a category
  const handleChoose = (category) => {
    setSelectedCategory(category);
    setUpdatedName(category.name);
  };

  // Function to handle updating the selected category
  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:7000/categorie/${selectedCategory.name}`, { name: updatedName });
      setCategories(categories.map(cat => cat.name === selectedCategory.name ? response.data.updatedcategorie : cat));
      setErrorMessage('');
      console.log("Updated category:", response.data.updatedcategorie); // Log updated category
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  // Function to handle input change for updating name
  const handleNameChange = (e) => {
    const { value } = e.target;
    setUpdatedName(value);
  };

  return (
    <div className="container">
      <h2 className="title">Modifier Catégorie</h2>
      {errorMessage && <p className="error">Error: {errorMessage}</p>}
      <table className="table">
        <thead>
          <tr>
            <th className="table-header">Name</th>
            <th className="table-header">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(category => (
            <tr key={category._id}>
              <td className="table-data">{category.name}</td>
              <td className="table-data">
                <button onClick={() => handleChoose(category)} className="btn btn-primary">Choose</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedCategory && (
        <div>
          <h3 className="subtitle">Update Category</h3>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={updatedName}
              onChange={handleNameChange}
              className="form-control"
            />
          </div>
          <button onClick={handleUpdate} className="btn btn-success">Update Category</button>
        </div>
      )}
    </div>
  );
};

export default ModifierCategorie;





