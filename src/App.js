import React from 'react';

// import react router dom
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';

// import pages
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import Tracking from './pages/Tracking';
import FinalPage from './pages/FinalPage';

// import components
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

const App = () => {
  return <div className='overflow-hidden'>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/tracking' element={<Tracking />}/>
        <Route path='/final_page/:packageId' element={<FinalPage />} />
      </Routes>
      <Sidebar />
      <Footer />
    </Router>
  </div>;
};

export default App;
