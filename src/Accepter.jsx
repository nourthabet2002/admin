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
      setChefs(response.data); // Assuming response.data is an array of chef objects with a "nom" field
    } catch (error) {
      console.error('Error fetching chefs:', error);
    }
  };

  const handleAccept = (id) => {
    setSelectedReservationId(id);
    setEtat(''); // Reset etat
    setSelectedChef(''); // Reset selected chef
  };

  const handleAddProject = async () => {
    try {
      const selectedReservation = reservations.find(reservation => reservation._id === selectedReservationId);
      const { serviceName, subCategory, date, description, lieu } = selectedReservation;
      const response = await axios.post('http://localhost:7000/projet/add', {
        serviceName,
        subCategory,
        date,
        description,
        lieu,
        prix: price,
        etat,
        chefchantier: selectedChef
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

  return (
    <div>
      <h2>Reservations</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Service Name</th>
            <th>Subcategory</th>
            <th>Date</th>
            <th>Description</th>
            <th>Lieux</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map(reservation => (
            <tr key={reservation._id}>
              <td>{reservation.ID}</td>
              <td>{reservation.serviceName}</td>
              <td>{reservation.subCategory}</td>
              <td>{reservation.date}</td>
              <td>{reservation.description}</td>
              <td>{reservation.lieu}</td>
              <td>
                <button onClick={() => handleAccept(reservation._id)}>Accepter</button>
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








