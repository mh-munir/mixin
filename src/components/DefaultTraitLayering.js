import React from 'react'
import CustomBtn from './CustomBtn'

const DefaultTraitLayering = () => {
  return (
        <div className='bg-gray-200 p-5 max-w-[250px]'>
            <h2 className='font-gilroy-bold text-gray-deep text-lg mb-3'>Trait layers</h2>
            <p className='text-lg text-gray-400 mb-5 leading-5'>this is the current tarit to you </p>
            <ul className='flex flex-col gap-5 mb-5'>
                <li className='w-full'> <button className='w-full p-1 bg-gray-300 text-white font-lg font-bold hover:bg-gray-deep active:bg-gray-deep focus:bg-gray-deep'>Background</button></li>
                <li className='w-full'> <button className='w-full p-1 bg-gray-300 text-white font-lg font-bold hover:bg-gray-deep active:bg-gray-deep focus:bg-gray-deep'>Skin</button></li>
                <li className='w-full'> <button className='w-full p-1 bg-gray-300 text-white font-lg font-bold hover:bg-gray-deep active:bg-gray-deep focus:bg-gray-deep'>Clothing</button></li>
                <li className='w-full'> <button className='w-full p-1 bg-gray-300 text-white font-lg font-bold hover:bg-gray-deep active:bg-gray-deep focus:bg-gray-deep'>Help Item</button></li>
                <li className='w-full'> <button className='w-full p-1 bg-gray-300 text-white font-lg font-bold hover:bg-gray-deep active:bg-gray-deep focus:bg-gray-deep'>Eyes</button>  </li>
                <li className='w-full'> <button className='w-full p-1 bg-gray-300 text-white font-lg font-bold hover:bg-gray-deep active:bg-gray-deep focus:bg-gray-deep'>Face Accesory</button></li>
                <li className='w-full'> <button className='w-full p-1 bg-gray-300 text-white font-lg font-bold hover:bg-gray-deep active:bg-gray-deep focus:bg-gray-deep'>Head</button></li>
                <li className='w-full'> <button className='w-full p-1 bg-gray-300 text-white font-lg font-bold hover:bg-gray-deep active:bg-gray-deep focus:bg-gray-deep'>Ear</button></li>
                <li className='w-full'> <button className='w-full p-1 bg-gray-300 text-white font-lg font-bold hover:bg-gray-deep active:bg-gray-deep focus:bg-gray-deep'>Mouth</button></li>
            </ul>
           <div className='text-center'>
                <p className='text-lg text-gray-400 mb-5 leading-5'>Click any to save order </p>
                <CustomBtn 
                    type={"submit"} 
                    className={"bg-black text-white text-sm py-2 px-6 font-gilroy-bold rounded-md"}  
                    btnText={"Save new order"}/>
           </div>
        </div>
  )
}

export default DefaultTraitLayering