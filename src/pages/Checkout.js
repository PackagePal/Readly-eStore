import React, {useContext} from 'react';
//import cart context
import {CartContext} from '../contexts/CartContext';
// import product context
import {ProductContext} from '../contexts/ProductContext';
import CartItem from '../components/CartItem';
import Dropdown from '../components/Dropdown';

const Checkout = () => {
  const {cart, total} = useContext(CartContext);
 
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
                        <Dropdown />
                    </div>
                    <button type="submit" className="bg-primary text-white px-4 py-2 rounded">Place Order</button>
                </form>
            </div>
        </div>
  );

  
};
export default Checkout;