import React, {createContext, useState, useEffect} from 'react';

// create context
export const CartContext = createContext();

const CartProvider = ({children}) => {
  // cart state
  const [cart, setCart] = useState([]);

  // item amount state
  const [itemAmount, setItemAmount] = useState(0);  

  // total price state
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const price = '14.99';
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + price * currentItem.amount;
    },0);
    setTotal(total);
  }, [cart]);

  // update item amount
  useEffect(() => {
    if(cart){
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  // add to cart
  const addToCart = (product, rank) => {
    const newItem = {...product, amount: 1};
    // check if the item is already in the cart
    const cartItem = cart.find((itme) =>{
      return itme.rank === rank;
    });
    // if the item is already in the cart
    if(cartItem){
      const newCart = [...cart].map(item => {
        if(item.rank === rank){
          return {...item, amount: cartItem.amount + 1};
        }else{
          return item;
        }
      });
      setCart(newCart);
    }else{
      setCart([...cart, newItem]);
    }
  };

  // remove from cart
  const removeFromCart = (rank) => {
    const newCart = cart.filter((item) => {
      return item.rank !== rank;
    });
    setCart(newCart);
  };

  //clear cart
  const clearCart = () => {
    setCart([]);
  };


  //increase amount
  const increaseAmount = (rank)=> {
    const cartItem = cart.find((item) => item.rank === rank);
    addToCart(cartItem, rank);
  };

  //decrease amount
  const decreaseAmount = (rank)=> {
    const cartItem = cart.find((item) => {
      return item.rank === rank;
    });
    if(cartItem){
      const newCart = cart.map(item => {
        if (item.rank === rank){
          return {...item, amount: cartItem.amount - 1};
        } else{
          return item;
        }
      });
      setCart(newCart);
    }
    if(cartItem.amount<2){
      removeFromCart(rank);
    }
  };

  return (<CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmount, itemAmount, total}}>
    {children}
    </CartContext.Provider>);
};

export default CartProvider;
