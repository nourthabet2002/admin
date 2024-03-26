import React from 'react';
import axios from 'axios';

function GetReservations() {
  const handleReservationClick = async () => {
    try {
      const response = await axios.get('http://localhost:7000/Reservation');
      console.log('Reservation data:', response.data);
    } catch (error) {
      console.error('Error fetching Reservation:', error);
    }
  };

  return (
    <div>
      <h2>Reservation</h2>
      <button onClick={handleReservationClick}>Make Reservation</button>
    </div>
  );
}

export default GetReservations;