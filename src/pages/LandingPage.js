import React from 'react';
import {Link} from 'react-router-dom'
import Button from '../components/SelectBtn';
import LandingPageLogo from '../assets/img/main-logo.png'

export const LandingPage = () => {
  return (
    <section className='bg-white py-24'>
      <div className='text-end mb-1 flex justify-end'> <Button /></div>
      <div className='bg-gray-light py-32 w-full'>
          <div className='container mx-auto px-5'>
              <div className='max-w-[200px] mx-auto mb-10'>
                  <img className='w-full h-auto' src={LandingPageLogo} alt="Landing Page Logo"/>
              </div>
              <div className='text-center max-w-md mx-auto'>
                  <Link className=' bg-gray-deep px-5 py-1 text-lg text-white uppercase'to="/welcome"> Please 
                    <span className='text-yellow'> Connect your Wallet</span> 
                    to Get Started 
                  </Link>

                  <p className='mt-5 text-lg text-gray-deep'>
                    The <b>mixin creator portal</b> has two main utilities right now - a customizable B2B <b>trait shop</b>
                    and a robust collection builder designed to help creator and artists produce  the best collection imaginable.
                  </p>
              </div>
          </div>
      </div>
    </section>
  )
}





