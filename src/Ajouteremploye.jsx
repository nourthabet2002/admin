// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function AddEmployee() {
//   const [formData, setFormData] = useState({
//     nom: '',
//     prénom: '',
//     email: '',
//     password: '',
//     numtel: '',
//     serviceId: ''
//   });
//   const [services, setServices] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchServices();
//   }, []);

//   const fetchServices = async () => {
//     try {
//       const response = await axios.get('http://localhost:7000/service');
//       setServices(response.data);
//     } catch (error) {
//       console.error('Erreur lors de la récupération des services:', error);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:7000/employe/add', formData);
//       console.log('Employé ajouté:', response.data);
//       setFormData({
//         nom: '',
//         prénom: '',
//         email: '',
//         password: '',
//         numtel: '',
//         serviceId: ''
//       });
//       setError(null); // Clear any previous errors
//     } catch (error) {
//       console.error('Error adding employee:', error);
//       if (error.response && error.response.status === 400) {
//         setError(error.response.data.error); // Set the error message to display
//       } else {
//         setError('An error occurred while adding the employee.'); // Default error message
//       }
//     }
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-12">
//           <h2>Ajouter Employé</h2>
//           <form onSubmit={handleSubmit}>
//             {error && <div className="alert alert-danger">{error}</div>}
//             <div className="form-group">
//               <label>Nom :</label>
//               <input type="text" name="nom" value={formData.nom} onChange={handleChange} className="form-control" />
//             </div>
//             <div className="form-group">
//               <label>Prénom :</label>
//               <input type="text" name="prénom" value={formData.prénom} onChange={handleChange} className="form-control" />
//             </div>
//             <div className="form-group">
//               <label>Email :</label>
//               <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" />
//             </div>
//             <div className="form-group">
//               <label>Mot de passe :</label>
//               <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control" />
//             </div>
//             <div className="form-group">
//               <label>Numéro de téléphone :</label>
//               <input type="text" name="numtel" value={formData.numtel} onChange={handleChange} className="form-control" />
//             </div>
//             <div className="form-group">
//               <label>Service :</label>
//               <select name="serviceId" value={formData.serviceId} onChange={handleChange} className="form-control">
//                 <option value="">Sélectionnez un service</option>
//                 {services.map(service => (
//                   <option key={service._id} value={service._id}>{service.name}</option>
//                 ))}
//               </select>
//             </div>
//             <button type="submit" className="btn btn-primary">Ajouter Employé</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddEmployee;



import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AddEmployee() {
  const [formData, setFormData] = useState({
    nom: '',
    prénom: '',
    email: '',
    password: '',
    numtel: '',
    categorieId: '' // Changed from serviceId to categorieId
  });
  const [categories, setCategories] = useState([]); // State to store categories
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCategories(); // Fetch categories when component mounts
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:7000/categorie');
      setCategories(response.data); // Set categories in state
    } catch (error) {
      console.error('Erreur lors de la récupération des catégories:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Check if employee with the selected category already exists
      const existingEmployeeResponse = await axios.get(`http://localhost:7000/employe?categorieId=${formData.categorieId}`);
      if (existingEmployeeResponse.data.length > 0) {
        setError("Un employé existe déjà pour cette catégorie."); // Set error message
        return;
      }

      const response = await axios.post('http://localhost:7000/employe/add', formData);
      console.log('Employé ajouté:', response.data);
      setFormData({
        nom: '',
        prénom: '',
        email: '',
        password: '',
        numtel: '',
        categorieId: ''
      });
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error('Error adding employee:', error);
      if (error.response && error.response.status === 400) {
        setError(error.response.data.error); // Set error message to display
      } else {
        setError('An error occurred while adding the employee.'); // Default error message
      }
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>Ajouter Employé</h2>
          <form onSubmit={handleSubmit}>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="form-group">
              <label>Nom :</label>
              <input type="text" name="nom" value={formData.nom} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label>Prénom :</label>
              <input type="text" name="prénom" value={formData.prénom} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label>Email :</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label>Mot de passe :</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label>Numéro de téléphone :</label>
              <input type="text" name="numtel" value={formData.numtel} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label>Catégorie :</label> {/* Changed label to 'Catégorie' */}
              <select name="categorieId" value={formData.categorieId} onChange={handleChange} className="form-control">
                <option value="">Sélectionnez une catégorie</option>
                {categories.map(categorie => (
                  <option key={categorie._id} value={categorie._id}>{categorie.name}</option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Ajouter Employé</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;

