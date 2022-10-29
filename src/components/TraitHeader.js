import React from 'react';
import {NavLink} from 'react-router-dom'

const TraitHeader = () => {
  return (
    <nav className='absolute -left-[115px] top-16'>
        <ul className='flex flex-col justify-end items-end text-end gap-[2px]'>
            <li className='w-[310px] bg-yellow-deep px-2 py-1'><NavLink className="text-white text-xl font-bold" to="/traitshop">Traits Shop</NavLink></li>
            <li className='w-[195px] bg-gray-deep px-2 py-1'><NavLink className="text-gray-light text-lg font-normal" to="/addtrait">Add A New Traits</NavLink></li>
            <li className='w-[195px] bg-gray-deep px-2 py-1'><NavLink className="text-gray-light text-lg font-normal" to="/pendingtraits">View Panding Traits</NavLink></li>
            <li className='w-[195px] bg-gray-deep px-2 py-1'><NavLink className="text-gray-light text-lg font-normal" to="/createdtraits">View Created Traits</NavLink></li>
            <li className='w-[310px] bg-rose-light px-2 py-1'><NavLink className="text-white text-lg font-bold " to="/">Collection Builer</NavLink></li>
        </ul>
    </nav>
  )
}

export default TraitHeader