import React, { useState } from 'react';

const Tracking = () => {
  const [packageCode, setPackageCode] = useState('');
  const [packageData, setPackageData] = useState(null);

  const handleSubmit = async () => {
    try {
      const response = await fetch(`http://192.168.160.234:8080/api/v1/packages/${packageCode}`);
      const data = await response.json();
      setPackageData(data);
    } catch (error) {
      console.error('Error fetching package:', error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-40 flex flex-col text-primary">
      <div className="max-w-2xl mx-auto bg-white shadow-md p-6 w-1/2">
        <h1 className="text-2xl font-bold mb-6">Track your package</h1>
        <form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="packageCode" className="text-gray-700 font-medium">
              Package Code
            </label>
            <input
              type="text"
              id="packageCode"
              className="border border-gray-300 px-3 py-2 rounded"
              value={packageCode}
              onChange={(event) => setPackageCode(event.target.value)}
            />
          </div>
          <button
            type="button"
            className="bg-primary text-white px-4 py-2 rounded"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
      {/* Package Data */}
      {packageData && (
        <div className="max-w-2xl mx-auto bg-white shadow-md p-6 w-1/2">
          <h2 className='font-bold text-xl'>Package Information</h2>
          <div>
            <p><span className='font-bold'>Package Status:</span> {packageData.status}</p>
          </div>
          <div>
          <p><span className='font-bold'>PickupPoint Address:</span> {packageData.pickupPoint.address}</p>
          <p><span className='font-bold'>City:</span> {packageData.pickupPoint.city}</p>
          <p><span className='font-bold'>Postal Code:</span> {packageData.pickupPoint.postalCode}</p>
          <p><span className='font-bold'>Coordinates:</span> {packageData.pickupPoint.lat}, {packageData.pickupPoint.lng} </p>
          </div>
          <div>
          <p><span className='font-bold'>Your Name:</span> {packageData.userName}</p>
          <p><span className='font-bold'>Your Email:</span> {packageData.userEmail}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tracking;
