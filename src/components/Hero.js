import React from 'react';

import Img from '../img/book_hero.png';
import { Link } from 'react-router-dom';
import {BsBox} from "react-icons/bs";

const Hero = () => {
  return <section style={{ backgroundColor: '#e5dad8' }} className='h-[600px] bg-no-repeat bg-cover bg-center py-24'>
    <div className='container mx-auto flex justufy around h-full'>
      {/* text */}
      <div className='flex flex-col justify-center'>
        {/* pretitle */}
        <div className='font-semibold flex items-center uppercase'>
          <div style={{backgroundColor:'#e48d7a'}} className='w-10 h-[2px] mr-3'></div> Book Trend
        </div>
        {/* title */}
        <h1 className='text-[65px] leading-[1.1] font-light mb-4'>
          <span className='font-semibold'>READLY</span><br/>
          YOUR FAVOURITE ONLINE BOOK STORE
        </h1>
        <div className="flex font-bold mt-">
          <BsBox  className="text-2xl mr-2" />
          <Link to="/tracking" className="text-primary hover:underline">
            Click to track your package
          </Link>
        </div>
      </div>
      {/* image */}
      <div className='hidden lg:block'>
        <img src={Img} all="image"/>
      </div>
    </div>
  </section>;
};

export default Hero;
