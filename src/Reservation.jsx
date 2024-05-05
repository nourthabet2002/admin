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
    <div className="container">
      <h2 className="reservations-title">Reservations</h2>
      <button className="btn btn-primary" onClick={handleReservationClick} disabled={loading}>
        {loading ? 'Loading...' : 'Get Reservations'}
      </button>
      {error && <p className="error">Error: {error.message}</p>}
      <table className="table">
        <thead>
          <tr>
            <th className="reservation-id">ID</th>
            <th className="service-name">Service Name</th>
            <th className="subcategory">Subcategory</th>
            <th className="date">Date</th>
            <th className="datedebut">datedebut</th>
            <th className="place">Place</th>
            <th className="duree">duree</th>
            <th className="status">Etat</th>
            <th className="foreman">Chef de Chantier</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((projet) => (
            <tr key={projet.ID}>
              <td className="reservation-id">{projet.ID}</td>
              <td className="service-name">{projet.servicename}</td>
              <td className="subcategory">{projet.subCategory}</td>
              <td className="date">{projet.date}</td>
              <td className="datedebut">{projet.datedebut}</td>
              <td className="place">{projet.lieu}</td>
              <td className="duree">{projet.duree}</td>
              <td className="status">{projet.etat}</td>
              <td className="foreman">{projet.chefchantier}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GetReservations;




