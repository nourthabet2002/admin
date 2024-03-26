import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Accepter = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    // Fetch data from MongoDB backend when component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:7000/Reservation');
      setReservations(response.data);
    } catch (error) {
      console.error('Error fetching reservations:', error);
    }
  };

  const handleAccept = async (id) => {
    try {
      const response = await axios.post('http://localhost:7000/reservation/add', reservations.find(reservation => reservation._id === id));
      console.log('Reservation added:', response.data);
      // Optionally, you can update the UI to reflect the accepted reservation
      // For example, you can remove the accepted reservation from the reservations state
      setReservations(prevReservations => prevReservations.filter(reservation => reservation._id !== id));
    } catch (error) {
      console.error('Error adding Reservation:', error);
    }
  };

  return (
    <div>
      <h2>Reservations</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Service</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map(reservation => (
            <tr key={reservation._id}>
              <td>{reservation.dateres}</td>
              <td>{reservation.service}</td>
              <td>
                <button onClick={() => handleAccept(reservation._id)}>Accept</button>
                {/* Add refuse button here if needed */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Accepter;

