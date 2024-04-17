import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Modifier() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [updatedEmployeeData, setUpdatedEmployeeData] = useState({});
  const [selectedEmployeeData, setSelectedEmployeeData] = useState(null);
  const [services, setServices] = useState({});

  useEffect(() => {
    fetchEmployees();
    fetchServices(); // Fetch services data
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:7000/employes');
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const fetchServices = async () => {
    try {
      const response = await axios.get('http://localhost:7000/service');
      const servicesData = {};
      response.data.forEach((service) => {
        servicesData[service._id] = service.name;
      });
      setServices(servicesData);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  const handleSelectEmployee = (employeeName) => {
    const employee = employees.find((employee) => employee.nom === employeeName);
    const serviceName = services[employee.serviceId]; // Get service name using service ID
    const employeeWithServiceName = { ...employee, service: serviceName }; // Add service name to the employee object
    setSelectedEmployeeData(employeeWithServiceName);
    setSelectedEmployee(employeeName);
  };

  const handleUpdate = async () => {
    if (!selectedEmployeeData || Object.keys(updatedEmployeeData).length === 0) {
      console.error('Employee or updated information not provided');
      return;
    }
    try {
      const response = await axios.put(
        `http://localhost:7000/employee/${selectedEmployeeData.nom}`,
        updatedEmployeeData
      );
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
            <th>Employee Prénom</th>
            <th>Email</th>
            <th>Password</th>
            <th>Numtel</th>
            <th>Service</th> {/* Change heading from Service ID to Service */}
            <th>Select</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.nom}>
              <td>{employee.nom}</td>
              <td>{employee.prénom}</td>
              <td>{employee.email}</td>
              <td>{employee.password}</td>
              <td>{employee.numtel}</td>
              <td>{services[employee.serviceId]}</td> {/* Display service name */}
              <td>
                <button onClick={() => handleSelectEmployee(employee.nom)} className="btn btn-primary">
                  Select
                </button>
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
                    {field === 'nom' || field === 'prénom' ? (
                      <span>{value}</span> // Display as plain text
                    ) : (
                      <input
                        type="text"
                        name={field}
                        value={updatedEmployeeData[field] || value}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleUpdate} className="btn btn-success">
            Update Employee
          </button>
        </div>
      )}
    </div>
  );
}

export default Modifier;





