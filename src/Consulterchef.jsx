import React, { useState, useEffect } from "react";
import axios from "axios";

function Consulterchef() {
  const [chefs, setChefs] = useState([]);
  const [services, setServices] = useState({});

  useEffect(() => {
    const fetchChefs = async () => {
      try {
        const response = await axios.get("http://localhost:7000/chef");
        setChefs(response.data);
        // Fetch services once chefs are fetched
        await fetchServices();
      } catch (error) {
        console.error("Error fetching chefs:", error);
      }
    };

    fetchChefs();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get("http://localhost:7000/service");
      const servicesData = {};
      response.data.forEach((service) => {
        servicesData[service._id] = service.name;
      });
      setServices(servicesData);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  return (
    <div className="container">
      <h2>Chef List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Numéro de téléphone</th>
            <th>Service</th>
          </tr>
        </thead>
        <tbody>
          {chefs.map((chef) => (
            <tr key={chef._id}>
              <td>{chef.nom}</td>
              <td>{chef.prénom}</td>
              <td>{chef.email}</td>
              <td>{chef.numtel}</td>
              <td>{services[chef.serviceId]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Consulterchef;






