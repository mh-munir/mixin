import React from 'react'

const IndividualCreatedTrait = ({src,alt,traitNmaeTitle,traitNmae,traitSupply,clild,
    traitSupplyStats,traitAmount, traitAmountStats, traitId, traitIdNum, traitleftAmount, traitleftAmountStats}) => {
  return (
    <div className='grid gap-2 text-center'>
        <img className='w-full h-auto border border-gray-400' src={src} alt={alt}/>
        {clild}
        <div className='bg-gray-400 text-white text-[16px] font-bold leading-4 p-1'>
            {traitNmaeTitle}<br/> {traitNmae}
        </div>
        <div className='bg-gray-400 text-white text-[16px] font-bold leading-4 p-1'>
            {traitId}<br/> {traitIdNum}
        </div>
        <div className='bg-gray-400 text-white text-[16px] font-bold leading-4 p-1'>
            {traitSupply}<br/> {traitSupplyStats}</div>
        <div className='bg-gray-400 text-white text-[16px] font-bold leading-4 p-1'>{traitAmount}<br/> {traitAmountStats}</div>
        <div className='bg-gray-400 text-white text-[16px] font-bold leading-4 p-1'>{traitleftAmount}<br/> {traitleftAmountStats}</div>
    </div>
  )
}

export default IndividualCreatedTrait