import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const FinalPage = () => {
  const { packageId } = useParams();
  const [packageData, setPackageData] = useState(null);
  useEffect(() => {
    const fetchPackage = async () => {
      try {
        const response = await fetch('http://192.168.160.234:8080/api/v1/packages/${packageId}', {
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        });
        const data = await response.json();
        setPackageData(data);
      } catch (error) {
        console.error('Error fetching package:', error);
      }
    };

    fetchPackage();
  }, [packageId]);
  return (
    <div className='bg-gray-100 min-h-screen py-40 flex text-primary'>
      <div className="max-w-2xl mx-auto bg-white shadow-md p-6 w-1/2">
      <p className="text-2xl font-bold mb-6">Order placed successfully!</p>
      <p><span className='font-bold'>Package Number:</span> {packageId}</p>
      {packageData && (
        <div>
          <p><span className='font-bold'>Your Name:</span> {packageData.userName}</p>
          <p><span className='font-bold'>Your Email:</span> {packageData.userEmail}</p>
          <div className='py-10'>
          <p className='font-bold text-xl'>Where to get your package</p>
          <p><span className='font-bold'>Name:</span> {packageData.pickupPoint.name}</p>
          <p><span className='font-bold'>Address:</span> {packageData.pickupPoint.address}</p>
          <p><span className='font-bold'>City:</span> {packageData.pickupPoint.city}</p>
          <p><span className='font-bold'>Postal Code:</span> {packageData.pickupPoint.postalCode}</p>
          <p><span className='font-bold'>Coordinates:</span> {packageData.pickupPoint.lat}, {packageData.pickupPoint.lng} </p>
          </div>
          <div>
            <p> To know the status of your order, please return to home page and click in the link "Click to track your package"</p>
          </div>
        </div>
      )}
      </div>
      
    </div>
  );
};

export default FinalPage;