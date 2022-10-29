import React from 'react'
import { Link } from 'react-router-dom'

const Header2 = () => {
  return (
<nav className='absolute -left-[115px] top-16'>
    <ul className='flex flex-col justify-end items-end text-end gap-[2px]'>
        <li className='w-[310px]  bg-rose-light px-2 py-1'><Link className="text-white text-xl font-bold uppercase" to="/traitshop">Traits Shop</Link></li>
        <li className='w-[310px]  bg-yellow-deep px-2 py-1'><Link className="text-white text-lg font-bold uppercase" to="/">Collection Builer</Link></li>
    </ul>
</nav>
  )
}

export default Header2