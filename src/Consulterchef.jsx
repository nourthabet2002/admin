import React, { useState, useEffect } from "react";
import axios from "axios";

function Consulterchef() {
  const [chefs, setChefs] = useState([]);
  const [categories, setCategories] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchChefs = async () => {
      try {
        const chefsResponse = await axios.get("http://localhost:7000/chef");
        const categoriesResponse = await axios.get("http://localhost:7000/categorie");

        const chefsData = chefsResponse.data;
        const categoriesData = {};
        categoriesResponse.data.forEach((category) => {
          categoriesData[category._id] = category.name;
        });

        setChefs(chefsData);
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchChefs();
  }, []);

  const filteredChefs = chefs.filter(chef =>
    chef.nom.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Chef List</h2>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table className="table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Numéro de téléphone</th>
            <th>Categorie</th>
          </tr>
        </thead>
        <tbody>
          {filteredChefs.map((chef) => (
            <tr key={chef._id}>
              <td>{chef.nom}</td>
              <td>{chef.prénom}</td>
              <td>{chef.email}</td>
              <td>{chef.numtel}</td>
              <td>{categories[chef.categorieId]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Consulterchef;







