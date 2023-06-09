import React, { useContext, useState, useEffect } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import Logo from '../img/LogoReadly.png';

//import icons
import {BsBag} from "react-icons/bs";
import { Link } from 'react-router-dom';

const Header = () => {
  const [setIsActive] = useState(false);
  const {isOpen, setIsOpen} = useContext(SidebarContext);
  const{itemAmount} = useContext(CartContext);
  // event  listener
  useEffect(()=> {
    window.addEventListener('scroll', ()=> {
      window.srollY > 60 ? setIsActive(true) : setIsActive(false);
    })
  })
  return( 
  <header className={`bg-white py-4 shadow-md fixed w-full z-10 transition-all h-[100px]`}>
    <div className='container mx-auto flex items-center justify-between h-full'>
      <Link to={'/'}>
        <div>
          <img className='w-[150px]' src={Logo} alt=""/>
        </div>
      </Link>
      <div onClick={()=> setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
        <BsBag className='text-2xl'/>
        <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
      </div>
    </div>
    
  </header>);
};

export default Header;
