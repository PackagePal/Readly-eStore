import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// productprovider
import ProductProvider from './contexts/ProductContext';

// sidebar provider
import SidebarProvider from './contexts/SidebarContext';
import CartProvider from './contexts/CartContext';

const app = require('./App');

// Resto da configuração do servidor Express...

// Inicia o servidor
app.listen(3000, '192.168.160.234', () => {
  console.log('Servidor Express iniciado em http://192.168.160.234:3000');
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
  
  
);
