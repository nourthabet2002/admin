import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ClientComponent() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get('http://localhost:7000/client');
        setClients(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des clients :', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  if (loading) {
    return (
      <div className="container">
        <div className="loading">Chargement en cours...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div className="error">Erreur : {error.message}</div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="client-title">Liste des clients</h1>
      <table className="table">
        <thead>
          <tr>
            
            <th className="client-nom">Nom</th>
            <th className="client-email">Email</th>
            <th className="client-password">password</th>
            <th className="client-numtel">numtel</th>
            <th className="client-specialite">adresse</th>
          </tr>
        </thead>
        <tbody>
          {clients.map(client => (
            <tr key={client._id}>
             
              <td className="client-name">{client.nom}</td>
              <td className="client-email">{client.email}</td>
              <td className="client-password">{client.password}</td>
              <td className="client-numtel">{client.numtel}</td>
              <td className="client-specialite">{client.adresse}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClientComponent;


