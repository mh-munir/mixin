import React from 'react';
import {NavLink} from 'react-router-dom'

const TraitHeader = () => {
  return (
    <nav className='absolute left-0 top-44'>
        <ul className='flex flex-col justify-end items-end text-end gap-[2px]'>
            <li className='bg-yellow-deep w-[320px] px-2 py-1'><NavLink className="text-white text-xl font-bold" to="/">Traits Shop</NavLink></li>
            <li className='bg-gray-deep w-[205px] px-2 py-1'><NavLink className="text-gray-light text-lg font-normal" to="/">Add A New Traits</NavLink></li>
            <li className='bg-gray-deep w-[205px] px-2 py-1'><NavLink className="text-gray-light text-lg font-normal" to="/">View Panding Traits</NavLink></li>
            <li className='bg-gray-deep w-[205px] px-2 py-1'><NavLink className="text-gray-light text-lg font-normal" to="/">View Created Traits</NavLink></li>
            <li className='bg-rose w-[320px] px-2 py-1'><NavLink className="text-white text-lg font-bold " to="/">Collection Builer</NavLink></li>
        </ul>
    </nav>
  )
}

export default TraitHeader