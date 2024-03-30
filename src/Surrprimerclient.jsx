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

  const handleDelete = async (nom) => {
    try {
      await axios.delete(`http://localhost:7000/client/${nom}`);
      setClients(clients.filter(client => client.nom !== nom));
      console.log('Client supprimé:', nom);
    } catch (error) {
      console.error('Erreur lors de la suppression du client :', error);
    }
  };

  if (loading) {
    return <div>Chargement en cours...</div>;
  }

  if (error) {
    return <div>Erreur : {error.message}</div>;
  }

  return (
    <div>
      <h1>Liste des clients</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Email</th>
            <th>password</th>
            <th>numtel</th>
            <th>adresse</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {clients.map(client => (
            <tr key={client._id}>
              <td>{client._id}</td>
              <td>{client.nom}</td>
              <td>{client.email}</td>
              <td>{client.password}</td>
              <td>{client.numtel}</td>
              <td>{client.adresse}</td>
              <td>
                <button onClick={() => handleDelete(client.nom)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClientComponent;
