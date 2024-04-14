import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Accepter = () => {
  const [reservations, setReservations] = useState([]);
  const [price, setPrice] = useState('');
  const [etat, setEtat] = useState('');
  const [selectedChef, setSelectedChef] = useState('');
  const [selectedReservationId, setSelectedReservationId] = useState(null);
  const [chefs, setChefs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [clients, setClients] = useState([]);

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
    setSelectedChef('');
  };

  const handleAddProject = async () => {
    try {
      const selectedReservation = reservations.find(reservation => reservation._id === selectedReservationId);
      const { date, lieu, categorieId, clientId } = selectedReservation;
      const selectedCategory = categories.find(category => category._id === categorieId);
      const selectedClient = clients.find(client => client._id === clientId);
      const response = await axios.post('http://localhost:7000/projet/add', {
        date,
        lieu,
        prix: price,
        etat,
        chefchantier: selectedChef,
        categorie: selectedCategory.name, // Assuming the category name field is "name"
        client: selectedClient.name // Assuming the client name field is "name"
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
    <div className="container">
      <h2 className="reservations-title">Reservations</h2>
      <table className="table">
        <thead>
          <tr>
            <th className="reservation-categorie">Category</th>
            <th className="reservation-client">Client</th>
            <th className="reservation-date">Date</th>
            <th className="reservation-lieu">Lieu</th>
            <th className="reservation-IDreservation">IDreservation</th>
            <th className="reservation-actions">Actions</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map(reservation => (
            <tr key={reservation._id}>
              <td className="reservation-categorie">{categories.find(category => category._id === reservation.categorieId)?.name}</td>
              <td className="reservation-client">{clients.find(client => client._id === reservation.clientId)?.nom}</td>
              <td className="reservation-date">{reservation.date}</td>
              <td className="reservation-lieu">{reservation.lieu}</td>
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
            <label>Prix:</label>
            <input type="text" value={price} onChange={e => setPrice(e.target.value)} className="form-control" />
          </div>
          <div className="form-group">
            <label>Etat:</label>
            <input type="text" value={etat} onChange={e => setEtat(e.target.value)} className="form-control" />
          </div>
          <div className="form-group">
            <label>Chef Chantier:</label>
            <select value={selectedChef} onChange={e => setSelectedChef(e.target.value)} className="form-control">
              <option value="">Select Chef</option>
              {chefs.map(chef => (
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












