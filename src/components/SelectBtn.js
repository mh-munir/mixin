import React from 'react'

const Button = () => {
  return (
    <button className='bg-gray-deep flex gap-3 items-center uppercase font-gilroy-regular text-xl text-yellow px-5 py-2 rounded-tl-lg rounded-bl-lg'>
      <div className='flex flex-col gap-1'>
        <span className='inline-block w-1 h-1 rounded-full bg-yellow'></span>
        <span className='inline-block w-1 h-1 rounded-full bg-yellow'></span>
        <span className='inline-block w-1 h-1 rounded-full bg-yellow'></span>
      </div>
      Select Wallet
    </button>
  )
}

export default Button
