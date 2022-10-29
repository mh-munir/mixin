import React from 'react'

const ReadyToPurchaseBox = ({title,des,price,ammout,currency, currencyType, idTitle, idDes}) => {
  return (
    <div>
        <div className='bg-yellow-deep p-2 text-center mb-1'>
            <p className='text-white text-lg font-semibold uppercase'>{title}</p>
            <p className='text-[16px] font-semibold text-white leading-5'>{des}</p>
        </div>
        <div className='bg-gray-300 p-2 text-left min-h-[100px]'>
            <p className='text-[16px] text-white font-bold leading-5'>{price} <span> {ammout}</span></p>
            <p className='text-[16px] text-white font-bold leading-5'>{currency}<span> {currencyType}</span></p>
            <p className='text-[16px] text-white font-bold leading-5'>{idTitle}</p>
            <p className='text-[16px] text-white font-bold leading-5'>{idDes}</p>
        </div>
    </div>
  )
}

export default ReadyToPurchaseBox