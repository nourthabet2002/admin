// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Accepter = () => {
//   const [reservations, setReservations] = useState([]);
//   const [etat, setEtat] = useState('');
//   const [selectedChef, setSelectedChef] = useState('');
//   const [selectedReservationId, setSelectedReservationId] = useState(null);
//   const [chefs, setChefs] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [clients, setClients] = useState([]);
//   const [datedebut, setDatedebut] = useState('');
//   const [duree, setDuree] = useState('');

//   useEffect(() => {
//     fetchData();
//     fetchChefs();
//     fetchCategories();
//     fetchClients();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:7000/resclient');
//       setReservations(response.data);
//     } catch (error) {
//       console.error('Error fetching reservations:', error);
//     }
//   };

//   const fetchChefs = async () => {
//     try {
//       const response = await axios.get('http://localhost:7000/chef');
//       setChefs(response.data);
//     } catch (error) {
//       console.error('Error fetching chefs:', error);
//     }
//   };

//   const fetchCategories = async () => {
//     try {
//       const response = await axios.get('http://localhost:7000/categorie');
//       setCategories(response.data);
//     } catch (error) {
//       console.error('Error fetching categories:', error);
//     }
//   };

//   const fetchClients = async () => {
//     try {
//       const response = await axios.get('http://localhost:7000/client');
//       setClients(response.data);
//     } catch (error) {
//       console.error('Error fetching clients:', error);
//     }
//   };

//   const handleAccept = (id) => {
//     setSelectedReservationId(id);
//     setEtat('');
//     setDatedebut('');
//     setDuree('');
//     setSelectedChef('');
//   };

//   const handleAddProject = async () => {
//     try {
//       const selectedReservation = reservations.find(reservation => reservation._id === selectedReservationId);
//       const { date, lieu, categorieId, clientId } = selectedReservation;
      
//       const response = await axios.post('http://localhost:7000/projet/add', {
//         date,
//         lieu,
//         datedebut,
//         duree,
//         etat,
//         chefchantier: selectedChef,
//         categorieId, // Send category ID
//         clientId // Send client ID
//       });

//       console.log('Project added:', response.data);
//       setEtat('');
//       setSelectedChef('');
//       setSelectedReservationId(null);
//       setReservations(prevReservations => prevReservations.filter(reservation => reservation._id !== selectedReservationId));
//     } catch (error) {
//       console.error('Error adding Project:', error);
//     }
//   };

//   const handleDeleteResclient = async (id) => {
//     try {
//       const etatInput = prompt("Enter the state for deletion (e.g., refuse):");
//       if (etatInput) {
//         const response = await axios.put(`http://localhost:7000/resclient/${id}`, { etat: etatInput });
//         console.log('Reservation updated:', response.data);
        
//         // Call the resrefuse endpoint here
//         const selectedReservation = reservations.find(reservation => reservation._id === id);
//         const { date, lieu, categorieId, clientId } = selectedReservation;
//         const resrefuseResponse = await axios.post('http://localhost:7000/resrefuse/add', {
//           date,
//           lieu,
//           categorieId,
//           clientId,
//           etat: etatInput
//         });
//         console.log('Resrefuse added:', resrefuseResponse.data);
        
//         setReservations(reservations.filter(reservation => reservation._id !== id));
//       }
//     } catch (error) {
//       console.error('Error updating reservation:', error);
//     }
//   };

//   return (
//     <div className="container">
//       <h2 className="reservations-title">Reservations</h2>
//       <table className="table">
//         <thead>
//           <tr>
//             <th className="reservation-categorie">Category</th>
//             <th className="reservation-client">Client</th>
//             <th className="reservation-date">Date</th>
//             <th className="reservation-adresse">Adresse</th>
//             <th className="reservation-numtel">Numtel</th>
//             <th className="reservation-IDreservation">ID Reservation</th>
//             <th className="reservation-actions">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {reservations.map(reservation => (
//             <tr key={reservation._id}>
//               <td className="reservation-categorie">
//                 {categories.find(category => category._id === reservation.categorieId)?.name}
//               </td>
//               <td className="reservation-client">
//                 {clients.find(client => client._id === reservation.clientId)?._id}
//               </td>
//               <td className="reservation-date">{reservation.date}</td>
//               <td className="reservation-lieu">{reservation.adresse}</td>
//               <td className="reservation-numtel">{reservation.numtel}</td>
//               <td className="reservation-IDreservation">{reservation._id}</td>
//               <td className="reservation-actions">
//                 <button onClick={() => handleAccept(reservation._id)} className="btn btn-primary">Accepter</button>
//                 <button onClick={() => handleDeleteResclient(reservation._id)} className="btn btn-danger">Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {selectedReservationId && (
//         <div>
//           <h2 className="add-project-title">Add Project</h2>
//           <div className="form-group">
//             <label>Date Debut:</label>
//             <input type="text" value={datedebut} onChange={e => setDatedebut(e.target.value)} className="form-control" />
//           </div>
//           <div className="form-group">
//             <label>Duree:</label>
//             <input type="text" value={duree} onChange={e => setDuree(e.target.value)} className="form-control" />
//           </div>
//           <div className="form-group">
//             <label>Etat:</label>
//             <input type="text" value={etat} onChange={e => setEtat(e.target.value)} className="form-control" />
//           </div>
//           <div className="form-group">
//             <label>Chef Chantier:</label>
//             <select value={selectedChef} onChange={e => setSelectedChef(e.target.value)} className="form-control">
//               <option value="">Select Chef</option>
//               {chefs.map(chef => (
//                 <option key={chef._id} value={chef.nom}>{chef.nom}</option>
//               ))}
//             </select>
//           </div>
//           <button onClick={handleAddProject} className="btn btn-success">Envoyer</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Accepter;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Accepter = () => {
//   const [reservations, setReservations] = useState([]);
//   const [etat, setEtat] = useState('');
//   const [selectedChef, setSelectedChef] = useState('');
//   const [selectedReservationId, setSelectedReservationId] = useState(null);
//   const [chefs, setChefs] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [clients, setClients] = useState([]);
//   const [datedebut, setDatedebut] = useState('');
//   const [duree, setDuree] = useState('');

//   useEffect(() => {
//     fetchData();
//     fetchChefs();
//     fetchCategories();
//     fetchClients();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:7000/resclient');
//       setReservations(response.data);
//     } catch (error) {
//       console.error('Error fetching reservations:', error);
//     }
//   };

//   const fetchChefs = async () => {
//     try {
//       const response = await axios.get('http://localhost:7000/chef');
//       setChefs(response.data);
//     } catch (error) {
//       console.error('Error fetching chefs:', error);
//     }
//   };

//   const fetchCategories = async () => {
//     try {
//       const response = await axios.get('http://localhost:7000/categorie');
//       setCategories(response.data);
//     } catch (error) {
//       console.error('Error fetching categories:', error);
//     }
//   };

//   const fetchClients = async () => {
//     try {
//       const response = await axios.get('http://localhost:7000/client');
//       setClients(response.data);
//     } catch (error) {
//       console.error('Error fetching clients:', error);
//     }
//   };

//   const handleAccept = (id) => {
//     setSelectedReservationId(id);
//     setEtat('');
//     setDatedebut('');
//     setDuree('');
//     setSelectedChef('');
//   };

//   const handleAddProject = async () => {
//     try {
//       const selectedReservation = reservations.find(reservation => reservation._id === selectedReservationId);
//       const { date, adresse, categorieId, clientId } = selectedReservation;
      
//       const response = await axios.post('http://localhost:7000/projet/add', {
//         date,
//         adresse, // Include the adresse field
//         datedebut,
//         duree,
//         etat,
//         chefchantier: selectedChef,
//         categorieId,
//         clientId, // Include the clientId field
//       });

//       console.log('Project added:', response.data);
//       setEtat('');
//       setSelectedChef('');
//       setSelectedReservationId(null);
//       setReservations(prevReservations => prevReservations.filter(reservation => reservation._id !== selectedReservationId));
//     } catch (error) {
//       console.error('Error adding Project:', error);
//     }
//   };

//   const handleDeleteResclient = async (id) => {
//     try {
//       const etatInput = prompt("Enter the state for deletion (e.g., refuse):");
//       if (etatInput) {
//         const response = await axios.put(`http://localhost:7000/resclient/${id}`, { etat: etatInput });
//         console.log('Reservation updated:', response.data);
        
//         // Call the resrefuse endpoint here
//         const selectedReservation = reservations.find(reservation => reservation._id === id);
//         const { date, adresse, categorieId, clientId } = selectedReservation;
//         const resrefuseResponse = await axios.post('http://localhost:7000/resrefuse/add', {
//           date,
//           adresse,
//           categorieId,
//           clientId,
//           etat: etatInput
//         });
//         console.log('Resrefuse added:', resrefuseResponse.data);
        
//         setReservations(reservations.filter(reservation => reservation._id !== id));
//       }
//     } catch (error) {
//       console.error('Error updating reservation:', error);
//     }
//   };

//   return (
//     <div className="container">
//       <h2 className="reservations-title">Reservations</h2>
//       <table className="table">
//         <thead>
//           <tr>
//             <th className="reservation-categorie">Category</th>
//             <th className="reservation-client">Client</th>
//             <th className="reservation-date">Date</th>
//             <th className="reservation-adresse">Adresse</th> {/* Changed from "Lieu" to "Adresse" */}
//             <th className="reservation-numtel">Numtel</th>
//             <th className="reservation-IDreservation">ID Reservation</th>
//             <th className="reservation-actions">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {reservations.map(reservation => (
//             <tr key={reservation._id}>
//               <td className="reservation-categorie">
//                 {categories.find(category => category._id === reservation.categorieId)?.name}
//               </td>
//               <td className="reservation-client">
//                 {clients.find(client => client._id === reservation.clientId)?._id}
//               </td>
//               <td className="reservation-date">{reservation.date}</td>
//               <td className="reservation-adresse">{reservation.adresse}</td> {/* Changed from "lieu" to "adresse" */}
//               <td className="reservation-numtel">{reservation.numtel}</td>
//               <td className="reservation-IDreservation">{reservation._id}</td>
//               <td className="reservation-actions">
//                 <button onClick={() => handleAccept(reservation._id)} className="btn btn-primary">Accepter</button>
//                 <button onClick={() => handleDeleteResclient(reservation._id)} className="btn btn-danger">Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {selectedReservationId && (
//         <div>
//           <h2 className="add-project-title">Add Project</h2>
//           <div className="form-group">
//             <label>Date Debut:</label>
//             <input type="text" value={datedebut} onChange={e => setDatedebut(e.target.value)} className="form-control" />
//           </div>
//           <div className="form-group">
//             <label>Duree:</label>
//             <input type="text" value={duree} onChange={e => setDuree(e.target.value)} className="form-control" />
//           </div>
//           <div className="form-group">
//             <label>Etat:</label>
//             <input type="text" value={etat} onChange={e => setEtat(e.target.value)} className="form-control" />
//           </div>
//           <div className="form-group">
//             <label>Chef Chantier:</label>
//             <select value={selectedChef} onChange={e => setSelectedChef(e.target.value)} className="form-control">
//               <option value="">Select Chef</option>
//               {chefs.map(chef => (
//                 <option key={chef._id} value={chef.nom}>{chef.nom}</option>
//               ))}
//             </select>
//           </div>
//           <button onClick={handleAddProject} className="btn btn-success">Envoyer</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Accepter;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Accepter = () => {
  const [reservations, setReservations] = useState([]);
  const [etat, setEtat] = useState('');
  const [selectedChef, setSelectedChef] = useState('');
  const [selectedReservationId, setSelectedReservationId] = useState(null);
  const [chefs, setChefs] = useState([]);
  const [filteredChefs, setFilteredChefs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [clients, setClients] = useState([]);
  const [datedebut, setDatedebut] = useState('');
  const [duree, setDuree] = useState('');

  useEffect(() => {
    fetchData();
    fetchChefs();
    fetchCategories();
    fetchClients();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:7000/resclient');
      setReservations(response.data);
    } catch (error) {
      console.error('Error fetching reservations:', error);
    }
  };

  const fetchChefs = async () => {
    try {
      const response = await axios.get('http://localhost:7000/chef');
      setChefs(response.data);
    } catch (error) {
      console.error('Error fetching chefs:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:7000/categorie');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchClients = async () => {
    try {
      const response = await axios.get('http://localhost:7000/client');
      setClients(response.data);
    } catch (error) {
      console.error('Error fetching clients:', error);
    }
  };

  const handleAccept = (id) => {
    setSelectedReservationId(id);
    setEtat('');
    setDatedebut('');
    setDuree('');
    setSelectedChef('');

    const selectedReservation = reservations.find(reservation => reservation._id === id);
    if (selectedReservation) {
      const categoryChefs = chefs.filter(chef => chef.categorieId === selectedReservation.categorieId);
      setFilteredChefs(categoryChefs);
    }
  };

  const handleAddProject = async () => {
    try {
      const selectedReservation = reservations.find(reservation => reservation._id === selectedReservationId);
      const { date, adresse, categorieId, clientId } = selectedReservation;
      
      const response = await axios.post('http://localhost:7000/projet/add', {
        date,
        adresse,
        datedebut,
        duree,
        etat,
        chefchantier: selectedChef,
        categorieId,
        clientId,
      });

      console.log('Project added:', response.data);
      setEtat('');
      setSelectedChef('');
      setSelectedReservationId(null);
      setReservations(prevReservations => prevReservations.filter(reservation => reservation._id !== selectedReservationId));
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };

  const handleDeleteResclient = async (id) => {
    try {
      const etatInput = prompt("Enter the state for deletion (e.g., refuse):");
      if (etatInput) {
        const response = await axios.put(`http://localhost:7000/resclient/${id}`, { etat: etatInput });
        console.log('Reservation updated:', response.data);
        
        const selectedReservation = reservations.find(reservation => reservation._id === id);
        const { date, adresse, categorieId, clientId } = selectedReservation;
        const resrefuseResponse = await axios.post('http://localhost:7000/resrefuse/add', {
          date,
          adresse,
          categorieId,
          clientId,
          etat: etatInput
        });
        console.log('Resrefuse added:', resrefuseResponse.data);
        
        setReservations(reservations.filter(reservation => reservation._id !== id));
      }
    } catch (error) {
      console.error('Error updating reservation:', error);
    }
  };

  return (
    <div className="container">
      <h2 className="reservations-title">Reservations</h2>
      <table className="table">
        <thead>
          <tr>
            <th className="reservation-categorie">Category</th>
            <th className="reservation-client">Client</th>
            <th className="reservation-date">Date</th>
            <th className="reservation-adresse">Adresse</th>
            <th className="reservation-numtel">Numtel</th>
            <th className="reservation-IDreservation">ID Reservation</th>
            <th className="reservation-actions">Actions</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map(reservation => (
            <tr key={reservation._id}>
              <td className="reservation-categorie">
                {categories.find(category => category._id === reservation.categorieId)?.name}
              </td>
              <td className="reservation-client">
                {clients.find(client => client._id === reservation.clientId)?._id}
              </td>
              <td className="reservation-date">{reservation.date}</td>
              <td className="reservation-adresse">{reservation.adresse}</td>
              <td className="reservation-numtel">{reservation.numtel}</td>
              <td className="reservation-IDreservation">{reservation._id}</td>
              <td className="reservation-actions">
                <button onClick={() => handleAccept(reservation._id)} className="btn btn-primary">Accepter</button>
                <button onClick={() => handleDeleteResclient(reservation._id)} className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedReservationId && (
        <div>
          <h2 className="add-project-title">Add Project</h2>
          <div className="form-group">
            <label>Date Debut:</label>
            <input type="text" value={datedebut} onChange={e => setDatedebut(e.target.value)} className="form-control" />
          </div>
          <div className="form-group">
            <label>Duree:</label>
            <input type="text" value={duree} onChange={e => setDuree(e.target.value)} className="form-control" />
          </div>
          <div className="form-group">
            <label>Etat:</label>
            <input type="text" value={etat} onChange={e => setEtat(e.target.value)} className="form-control" />
          </div>
          <div className="form-group">
            <label>Chef Chantier:</label>
            <select value={selectedChef} onChange={e => setSelectedChef(e.target.value)} className="form-control">
              <option value="">Select Chef</option>
              {filteredChefs.map(chef => (
                <option key={chef._id} value={chef.nom}>{chef.nom}</option>
              ))}
            </select>
          </div>
          <button onClick={handleAddProject} className="btn btn-success">Envoyer</button>
        </div>
      )}
    </div>
  );
};

export default Accepter;


























