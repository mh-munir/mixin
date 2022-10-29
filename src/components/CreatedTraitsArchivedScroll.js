import React from 'react'
import { Link } from 'react-router-dom'

const CreatedTraitsArchivedScroll = ({src,alt,traitNmaeTitle,traitNmae,traitSupply,
    traitSupplyStats,traitAmount, traitAmountStats, to, traitbtnText, traitText}) => {
  return (
    <div className='grid gap-2 text-center'>
        <img className='w-full h-auto border border-gray-400' src={src} alt={alt}/>
        <div className='bg-gray-400 text-white text-[16px] font-bold leading-4 p-1'>
            {traitNmaeTitle}<br/> {traitNmae}
        </div>
        <div className='bg-gray-400 text-white text-[16px] font-bold leading-4 p-1'>
            {traitSupply}<br/> {traitSupplyStats}</div>
        <div className='bg-gray-400 text-white text-[16px] font-bold leading-4 p-1'>{traitAmount}<br/> {traitAmountStats}</div>
        <div className='border border-gray-400 p-3'>
            <Link className='bg-red-deep text-[16px] font-bold px-4 py-1 text-white rounded-sm' to={to}>{traitbtnText}</Link>
        </div>
        <p className='text-sm text-gray-400'>{traitText}</p>
    </div>
  )
}

export default CreatedTraitsArchivedScroll