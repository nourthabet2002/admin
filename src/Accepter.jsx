import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Accepter = () => {
  const [reservations, setReservations] = useState([]);
  const [price, setPrice] = useState('');
  const [etat, setEtat] = useState('');
  const [selectedChef, setSelectedChef] = useState('');
  const [selectedReservationId, setSelectedReservationId] = useState(null);
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetchData();
    fetchChefs();
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

  const handleAccept = (id) => {
    setSelectedReservationId(id);
    setEtat('');
    setSelectedChef('');
  };

  const handleAddProject = async () => {
    try {
      const selectedReservation = reservations.find(reservation => reservation._id === selectedReservationId);
      const { date, lieu, categorieId, clientId } = selectedReservation;
      const response = await axios.post('http://localhost:7000/projet/add', {
        date,
        lieu,
        prix: price,
        etat,
        chefchantier: selectedChef,
        categorieId,
        clientId
      });
      console.log('Project added:', response.data);
      setPrice('');
      setEtat('');
      setSelectedChef('');
      setSelectedReservationId(null);
      setReservations(prevReservations => prevReservations.filter(reservation => reservation._id !== selectedReservationId));
    } catch (error) {
      console.error('Error adding Project:', error);
    }
  };

  const handleDeleteResclient = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:7000/resclient/${id}`);
      console.log('Resclient deleted:', response.data);
      setReservations(reservations.filter(reservation => reservation._id !== id));
    } catch (error) {
      console.error('Error deleting resclient:', error);
    }
  };

  return (
    <div>
      <h2>Reservations</h2>
      <table>
        <thead>
          <tr>
            <th>categorieId</th>
            <th>clientId</th>
            <th>date</th>
            <th>lieu</th>
            <th>IDreservation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map(reservation => (
            <tr key={reservation._id}>
              <td>{reservation.categorieId}</td>
              <td>{reservation.clientId}</td>
              <td>{reservation.date}</td>
              <td>{reservation.lieu}</td>
              <td>{reservation._id}</td>
              <td>
                <button onClick={() => handleAccept(reservation._id)}>Accepter</button>
                <button onClick={() => handleDeleteResclient(reservation._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedReservationId && (
        <div>
          <h2>Add Project</h2>
          <div>
            <label>Prix:</label>
            <input type="text" value={price} onChange={e => setPrice(e.target.value)} />
          </div>
          <div>
            <label>Etat:</label>
            <input type="text" value={etat} onChange={e => setEtat(e.target.value)} />
          </div>
          <div>
            <label>Chef Chantier:</label>
            <select value={selectedChef} onChange={e => setSelectedChef(e.target.value)}>
              <option value="">Select Chef</option>
              {chefs.map(chef => (
                <option key={chef._id} value={chef.nom}>{chef.nom}</option>
              ))}
            </select>
          </div>
          <button onClick={handleAddProject}>Envoyer</button>
        </div>
      )}
    </div>
  );
};

export default Accepter;










