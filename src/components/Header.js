import React from 'react';
import Logo from '../assets/img/main-logo.png';
import CwBtn from './CwBtn';

const Header = () => {
  return (
    <header className='pt-5'>
        <div className='w-[98%] ml-auto flex items-end justify-between'>
            <img className='w-24 h-auto' src={Logo} alt="Logo"/>
            <CwBtn />
        </div>
    </header>
  )
}

export default Header