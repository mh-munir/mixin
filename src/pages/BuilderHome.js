import React from 'react';
import Header from '../components/Header';
import BuilderHeader from '../components/BuilderHeader';
import BackLink from '../components/BackLink';
import builderimg from '../assets/img/builderimg.png'
import BuilderArray from '../components/BuilderArray';

const BuilderHome = () => {
  return (
    <>
         <Header/>
        <section className='w-[94%] h-full bg-gray-light ml-auto relative py-5'>
            <BackLink className={"absolute top-5 left-5 text-xl font-bold text-gray-deep"} to={"/"}/>
            <BuilderHeader />
            <div className='w-[80%] ml-auto px-5'>
                <div className='max-w-7xl mx-auto grid grid-cols-2 gap-5'>
                  <div className='pt-16 w-full flex items-end'>
                    <BuilderArray />
                  </div>
                  <div className='flex-auto border-2 border-gray-300 flex items-end'>
                    <img className='w-full h-auto object-cover' src={builderimg} alt="builder"/>
                  </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default BuilderHome