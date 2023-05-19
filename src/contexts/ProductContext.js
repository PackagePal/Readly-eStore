import React, {createContext, useState, useEffect} from 'react';

//create context
export const ProductContext = createContext();

const ProductProvider = ({children}) => {
  // products state
  const [products, setProducts] = useState([]);

  // fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=MzOb1myIgBAGJbDjJCdJq3NXlEmD7eIM');
      const data = await response.json();
      //console.log(data.results.books);
      setProducts(data.results.books);
    };
    fetchProducts();
  }, []);

  return( <ProductContext.Provider value={{products}}>
    {children}
    </ProductContext.Provider>);
};

export default ProductProvider;
