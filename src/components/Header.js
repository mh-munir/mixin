import React from 'react';
import Logo from '../assets/img/main-logo.png';
import CwBtn from './CwBtn';

const Header = () => {
  return (
    <header className='pt-10 mb-1'>
        <div className='w-full ml-auto flex items-end justify-between pl-5'>
            <img className='w-24 h-auto relative -mb-5' src={Logo} alt="Logo"/>
            <CwBtn />
        </div>
    </header>
  )
}

export default Header