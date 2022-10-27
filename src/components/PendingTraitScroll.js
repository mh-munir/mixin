import React from 'react'
import { Link } from 'react-router-dom'

const PendingTraitScroll = ({src,alt,traitNmaeTitle,traitNmae,traitSupply,
    traitSupplyStats,traitAmount, traitAmountStats, to, traitbtnText, traitText}) => {
  return (
    <div className='grid gap-2 text-center'>
        <img className='w-full h-auto border border-gray-400' src={src} alt={alt}/>
        <div className='bg-gray-400 text-white text-lg font-bold leading-5 p-2'>
            {traitNmaeTitle}<br/> {traitNmae}
        </div>
        <div className='bg-gray-400 text-white text-lg font-bold leading-5 p-2'>
            {traitSupply}<br/> {traitSupplyStats}</div>
        <div className='bg-gray-400 text-white text-lg font-bold leading-5 p-2'>{traitAmount}<br/> {traitAmountStats}</div>
        <div className='border border-gray-400 p-3'>
            <Link className='bg-gray-deep text-lg font-bold px-4 py-1 text-yellow-light rounded-sm' to={to}>{traitbtnText}</Link>
        </div>
        <p>{traitText}</p>
    </div>
  )
}

export default PendingTraitScroll