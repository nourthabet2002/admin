import React, { useState } from 'react';
import axios from 'axios';

function GetReservations() {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleReservationClick = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://localhost:7000/projet');
      setReservations(response.data);
      console.log('projet:', response.data); // Ajout de la console log
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Reservations</h2>
      <button onClick={handleReservationClick} disabled={loading}>
        {loading ? 'Loading...' : 'Get Reservations'}
      </button>
      {error && <p>Error: {error.message}</p>}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Service Name</th>
            <th>Subcategory</th>
            <th>Date</th>
            <th>descripition</th>
            <th>lieu</th>
            <th>Prix</th>
            <th>etat</th>
            <th>chefchantier</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((projet) => (
            <tr key={projet.ID}>
              <td>{projet.ID}</td>
              <td>{projet.serviceName}</td>
              <td>{projet.subCategory}</td>
              <td>{projet.date}</td>
              <td>{projet.descripition}</td>
              <td>{projet.lieu}</td>
              <td>{projet.prix}</td>
              <td>{projet.etat}</td>
              <td>{projet.chefchantier}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GetReservations;


