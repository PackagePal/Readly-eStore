import React, {useContext, useState} from 'react';
//import cart context
import {CartContext} from '../contexts/CartContext';
// import product context
import CartItem from '../components/CartItem';
import Dropdown from '../components/Dropdown';

const Checkout = () => {
  const {cart, total} = useContext(CartContext);
  const [selectedPickupPoint, setSelectedPickupPoint] = useState('');
  const handleDropdownChange = (value) => {
    setSelectedPickupPoint(value);
  };
  //console.log(selectedPickupPoint);
  const postData = async (event) => {
    event.preventDefault();
    const packageId = generateCode();
    const userName = document.getElementById("name").value;
    const userEmail = document.getElementById("email").value;
    console.log(selectedPickupPoint);
    const pickupPointData = fetchPickupPoint();
    const pickupPointName = pickupPointData.name;
    const pickupPointAddress = pickupPointData.address;
    const pickupPointCity = pickupPointData.city;
    const pickupPointPostalCode = pickupPointData.postalCode;
    const pickupPointLat = pickupPointData.lat;
    const pickupPointLng = pickupPointData.lng;
    const data = {
      id: null,
      packageId: packageId,
      userName: userName,
      userEmail: userEmail,
      status: "PENDING",
      pickupPoint: {
        id: selectedPickupPoint,
        name: pickupPointName,
        address: pickupPointAddress,
        city: pickupPointCity,
        postalCode: pickupPointPostalCode,
        lat: pickupPointLat,
        lng: pickupPointLng
      },
      store: {
        id: 2,
        name: "Readly",
        email: "readlyeStore@gmail.com"
      }
    };
    try {
      const response = await fetch("http://192.168.160.234:8080/api/v1/packages/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
  
      if (response.ok) {
        console.log("Dados enviados com sucesso!");
        window.location.href = `/final_page/${packageId}`;
      } else {
        console.log("Ocorreu um erro ao enviar os dados.");
      }
    } catch (error) {
      console.log("Ocorreu um erro na solicitação:", error);
    }
  };


  const generateCode = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
  
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters[randomIndex];
    }
  
    return code;
  };


  const fetchPickupPoint = async () => {
    try {
      const response = await fetch('http://192.168.160.234:8080/api/v1/pickuppoints/${selectedPickupPoint}', {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        console.log("Ocorreu um erro ao obter os dados.");
        return undefined;
      }
    } catch (error) {
      console.log("Ocorreu um erro na solicitação:", error);
      return undefined;
    }
  };

  return (
      <div className="bg-gray-100 min-h-screen py-40 flex text-primary">
            <div className="max-w-2xl mx-auto bg-white shadow-md p-6 w-1/2">
            {cart.map((item) => {
                return <CartItem item={item} key={item.rank}/>
            })}
            <div className="uppercase font-semibold">
                <span className="mr-2">Total:</span> {parseFloat(total).toFixed(2)}€
            </div>
            </div>
            
            <div className="max-w-2xl mx-auto bg-white shadow-md p-6 w-1/2 ">
                <h1 className="text-2xl font-bold mb-6">Checkout</h1>
                <form className="space-y-4">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-gray-700 font-medium">Name(First and Last)</label>
                        <input type="text" id="name" className="border border-gray-300 px-3 py-2 rounded" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-gray-700 font-medium">Email</label>
                        <input type="email" id="email" className="border border-gray-300 px-3 py-2 rounded" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="address" className="text-gray-700 font-medium">PickUp Point</label>
                        <Dropdown onChange={handleDropdownChange} />
                    </div>
                    <button type="submit" className="bg-primary text-white px-4 py-2 rounded" onClick={postData}>Place Order</button>
                </form>
            </div>
        </div>
  );


  
  
};
export default Checkout;