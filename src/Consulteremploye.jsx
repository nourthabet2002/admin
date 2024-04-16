import React, { useState, useEffect } from "react";
import axios from "axios";

function Consulteremploye() {
  const [employees, setEmployees] = useState([]);
  const [services, setServices] = useState({});

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("http://localhost:7000/employes");
        setEmployees(response.data);
        // Fetch services once employees are fetched
        await fetchServices();
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
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
      <h2>Employee List</h2>
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
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.nom}</td>
              <td>{employee.prénom}</td>
              <td>{employee.email}</td>
              <td>{employee.numtel}</td>
              <td>{services[employee.serviceId]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Consulteremploye;







