import React from 'react';
import { Link } from 'react-router-dom';
import CwBtn from '../components/CwBtn';

const WelcomePage = () => {
  return (
    <section className='bg-white py-24'>
      <div className='text-end mb-1 flex justify-end'> <CwBtn /></div>
      <div className='bg-gray-light py-32 w-full'>
          <div className='container mx-auto px-5'>
              <div className='text-center max-w-md px-10 py-5 mx-auto bg-gray-deep'>
                  <p className='text-lg text-yellow uppercase font-semibold mb-5'>Welcom to mixin females Dashboard
                  </p>
                  <p className='text-lg text-yellow mb-10'>Here you will be able to create new traits and view/edit live traits</p>
                  <Link className='block w-full bg-yellow px-5 py-1 text-lg text-white uppercase mb-5' to="/traitshop"> Trait Shop</Link>
                  <Link className='block w-full bg-red px-5 py-1 text-lg text-white uppercase' to="/collection"> Collection Builder
                  </Link>
              </div>
          </div>
      </div>
    </section>
  )
}

export default WelcomePage