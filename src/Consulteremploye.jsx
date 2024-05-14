// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Consulteremploye() {
//   const [employees, setEmployees] = useState([]);
//   const [services, setServices] = useState({});

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const response = await axios.get("http://localhost:7000/employes");
//         setEmployees(response.data);
//         // Fetch services once employees are fetched
//         await fetchServices();
//       } catch (error) {
//         console.error("Error fetching employees:", error);
//       }
//     };

//     fetchEmployees();
//   }, []);

//   const fetchServices = async () => {
//     try {
//       const response = await axios.get("http://localhost:7000/service");
//       const servicesData = {};
//       response.data.forEach((service) => {
//         servicesData[service._id] = service.name;
//       });
//       setServices(servicesData);
//     } catch (error) {
//       console.error("Error fetching services:", error);
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Employee List</h2>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Nom</th>
//             <th>Prénom</th>
//             <th>Email</th>
//             <th>Numéro de téléphone</th>
//             <th>categorie</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map((employee) => (
//             <tr key={employee._id}>
//               <td>{employee.nom}</td>
//               <td>{employee.prénom}</td>
//               <td>{employee.email}</td>
//               <td>{employee.numtel}</td>
//               <td>{services[employee.serviceId]}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Consulteremploye;


import React, { useState, useEffect } from "react";
import axios from "axios";

function Consulteremploye() {
  const [employees, setEmployees] = useState([]);
  const [categories, setCategories] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const employeesResponse = await axios.get("http://localhost:7000/employes");
        const categoriesResponse = await axios.get("http://localhost:7000/categorie");

        const employeesData = employeesResponse.data;
        const categoriesData = {};
        categoriesResponse.data.forEach((category) => {
          categoriesData[category._id] = category.name;
        });

        setEmployees(employeesData);
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchEmployees();
  }, []);

  const filteredEmployees = employees.filter(employee =>
    employee.nom.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h2>liste des employés</h2>
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
          {filteredEmployees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.nom}</td>
              <td>{employee.prénom}</td>
              <td>{employee.email}</td>
              <td>{employee.numtel}</td>
              <td>{categories[employee.categorieId]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Consulteremploye;






