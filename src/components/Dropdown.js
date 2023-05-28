import React, { useState, useEffect } from 'react';

const Dropdown = ({ onChange }) => {
  const [pickupPoints, setPickupPoints] = useState([]);

  useEffect(() => {
    const fetchPickupPoints = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/v1/pickuppoints/');
        const data = await response.json();
        setPickupPoints(data);
      } catch (error) {
        console.error('Error fetching pickup points:', error);
      }
    };

    fetchPickupPoints();
  }, []);

  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  };

  return (
    <select id="address" className="border border-gray-300 px-3 py-2 rounded" onChange={handleDropdownChange}>
      {pickupPoints.map((pickupPoint) => (
        <option key={pickupPoint.id} value={pickupPoint.id}>
          {pickupPoint.name}, {pickupPoint.address}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
