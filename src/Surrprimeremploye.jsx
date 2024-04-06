import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DeleteEmployee() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:7000/employes');
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleDelete = async (nom) => {
    try {
      const response = await axios.delete(`http://localhost:7000/employee/${nom}`);
      console.log('Employee deleted:', response.data);
      fetchEmployees(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  return (
    <div className="container">
      <h2>Surrprimer Employee</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Password</th>
            <th>Numéro de téléphone</th>
            <th>Spécialité</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.nom}</td>
              <td>{employee.prénom}</td>
              <td>{employee.email}</td>
              <td>{employee.password}</td>
              <td>{employee.numtel}</td>
              <td>{employee.spécialité}</td>
              <td>
                <button onClick={() => handleDelete(employee.nom)} className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DeleteEmployee;
