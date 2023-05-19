import React, {useContext} from 'react';
// import useParams
import {useParams} from 'react-router-dom';
//import cart context
import {CartContext} from '../contexts/CartContext';
// import product context
import {ProductContext} from '../contexts/ProductContext';

const ProductDetails = () => {
  // get product id from the url
  const {id} = useParams();
  const {products} = useContext(ProductContext);
  const {addToCart} = useContext(CartContext);

  // get the single product based on the id
  const product = products.find(item => {
    return item.rank === parseInt(id);
  }); 
  
  if(!product){
    return <section className='h-screen flex justify-center items-center'>Loading...</section>
  }
  // destructure product
  const price = '14.99';
  const {title, book_image, author, description,publisher} = product;
  return (
    <section className='pt-32 pb-12 lg:py-32 h-[88vh] flex items-center'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row items-center'>
          {/* image */}
          <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
            <img className='max-w-[200px] lg:max-w-sm' src={book_image} alt=''/>
          </div>
          {/* text */}
          <div className='flex-1 text-center lg:text-left'>
            <h1 className='text-[50px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0'>{title}</h1>
            <div className='text- xl text-red-500 font-medium mb-6'>{price}€</div>
            <p className='mb-8'><span className='font-semibold'>Author: </span>{author}</p>
            <p className='mb-8'><span className='font-semibold'>Publisher: </span>{publisher}</p>
            <p className='mb-8'><span className='font-semibold'>Description: </span>{description}</p>
            <button onClick={() => addToCart(product, product.rank)} className='bg-primary py-4 px-8 text-white'>Add to cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
