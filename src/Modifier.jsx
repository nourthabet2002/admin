import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Modifier() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [updatedEmployeeData, setUpdatedEmployeeData] = useState({});
  const [selectedEmployeeData, setSelectedEmployeeData] = useState(null);

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

  const handleSelectEmployee = (employeeName) => {
    const employee = employees.find(employee => employee.nom === employeeName);
    setSelectedEmployeeData(employee);
    setSelectedEmployee(employeeName);
  };

  const handleUpdate = async () => {
    if (!selectedEmployeeData || Object.keys(updatedEmployeeData).length === 0) {
      console.error('Employee or updated information not provided');
      return;
    }
    try {
      const response = await axios.put(`http://localhost:7000/employee/${selectedEmployeeData.nom}`, updatedEmployeeData);
      console.log('Employee updated:', response.data);
      fetchEmployees(); // Refresh the list after update
      setSelectedEmployee(''); // Reset selected employee
      setUpdatedEmployeeData({}); // Reset updated employee data
      setSelectedEmployeeData(null); // Reset selected employee data
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedEmployeeData({ ...updatedEmployeeData, [name]: value });
  };

  return (
    <div className="container">
      <h2>Modifier Employee</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Select</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.nom}>
              <td>{employee.nom}</td>
              <td>
                <button onClick={() => handleSelectEmployee(employee.nom)} className="btn btn-primary">Select</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedEmployeeData && (
        <div>
          <h3>Selected Employee Information</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Field</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(selectedEmployeeData).map(([field, value]) => (
                <tr key={field}>
                  <td>{field}</td>
                  <td>
                    <input
                      type="text"
                      name={field}
                      value={updatedEmployeeData[field] || value}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleUpdate} className="btn btn-success">Update Employee</button>
        </div>
      )}
    </div>
  );
}

export default Modifier;
