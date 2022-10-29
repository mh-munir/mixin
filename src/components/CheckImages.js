import React from 'react'
import CustomBtn from './CustomBtn'

const CheckImages = () => {
  return (
    <div className='max-w-lg mx-auto'>
        <h2 className='font-gilroy-bold text-gray-deep text-lg mb-3'>Review image</h2>
        <div className='flex gap-2'>
            <div className='bg-gray-200 p-5'>
                <h2 className='font-gilroy-bold text-gray-deep text-lg mb-4'>Trait layers</h2>
                <ul className='flex flex-col gap-5'>
                    <li className='flex items-center gap-5 cursor-pointer'> <button className='w-36  p-1 bg-gray-deep text-white font-lg font-bold'>Background</button> <span className='text-red-light text-lg'>➤</span></li>
                    <li className='flex items-center gap-5 cursor-pointer'> <button className='w-36  p-1 bg-gray-300 text-white font-lg font-bold'>Skin</button> <span className='text-gray-300 text-lg'>➤</span></li>
                    <li className='flex items-center gap-5 cursor-pointer'> <button className='w-36  p-1 bg-gray-300 text-white font-lg font-bold'>Clothing</button> <span className='text-gray-300 text-lg'>➤</span></li>
                    <li className='flex items-center gap-5 cursor-pointer'> <button className='w-36  p-1 bg-gray-300 text-white font-lg font-bold'>Help Item</button> <span className='text-gray-300 text-lg'>➤</span></li>
                    <li className='flex items-center gap-5 cursor-pointer'> <button className='w-36  p-1 bg-gray-300 text-white font-lg font-bold'>Eyes</button> <span className='text-gray-300 text-lg'>➤</span></li>
                    <li className='flex items-center gap-5 cursor-pointer'> <button className='w-36  p-1 bg-gray-300 text-white font-lg font-bold'>Face Accesory</button> <span className='text-gray-300 text-lg'>➤</span></li>
                    <li className='flex items-center gap-5 cursor-pointer'> <button className='w-36  p-1 bg-gray-300 text-white font-lg font-bold'>Head</button> <span className='text-gray-300 text-lg'>➤</span></li>
                    <li className='flex items-center gap-5 cursor-pointer'> <button className='w-36  p-1 bg-gray-300 text-white font-lg font-bold'>Ear</button> <span className='text-gray-300 text-lg'>➤</span></li>
                    <li className='flex items-center gap-5 cursor-pointer'> <button className='w-36  p-1 bg-gray-300 text-white font-lg font-bold'>Mouth</button> <span className='text-gray-300 text-lg'>➤</span></li>
                </ul>
            </div>
            <div className='bg-gray-200  p-10 max-h-[550px] w-full overflow-y-auto scrollbar-thumb-red-light scrollbar-thin'>
                <ul className='flex flex-col gap-2 pt-5'>
                    <li className='text-lg font-bold text-gray-400 cursor-pointer hover:text-red-light'>image.png</li>
                    <li className='text-lg font-bold text-gray-400 cursor-pointer hover:text-red-light'>image.png</li>
                    <li className='text-lg font-bold text-gray-400 cursor-pointer hover:text-red-light'>image.png</li>
                    <li className='text-lg font-bold text-gray-400 cursor-pointer hover:text-red-light'>image.png</li>
                    <li className='text-lg font-bold text-gray-400 cursor-pointer hover:text-red-light'>image.png</li>
                    <li className='text-lg font-bold text-gray-400 cursor-pointer hover:text-red-light'>image.png</li>
                    <li className='text-lg font-bold text-gray-400 cursor-pointer hover:text-red-light'>image.png</li>
                    <li className='text-lg font-bold text-gray-400 cursor-pointer hover:text-red-light'>image.png</li>
                    <li className='text-lg font-bold text-gray-400 cursor-pointer hover:text-red-light'>image.png</li>
                    <li className='text-lg font-bold text-gray-400 cursor-pointer hover:text-red-light'>image.png</li>
                    <li className='text-lg font-bold text-gray-400 cursor-pointer hover:text-red-light'>image.png</li>
                    <li className='text-lg font-bold text-gray-400 cursor-pointer hover:text-red-light'>image.png</li>
                    <li className='text-lg font-bold text-gray-400 cursor-pointer hover:text-red-light'>image.png</li>
                    <li className='text-lg font-bold text-gray-400 cursor-pointer hover:text-red-light'>image.png</li>
                    <li className='text-lg font-bold text-gray-400 cursor-pointer hover:text-red-light'>image.png</li>
                    <li className='text-lg font-bold text-gray-400 cursor-pointer hover:text-red-light'>image.png</li>
                    <li className='text-lg font-bold text-gray-400 cursor-pointer hover:text-red-light'>image.png</li>
                    <li className='text-lg font-bold text-gray-400 cursor-pointer hover:text-red-light'>image.png</li>
                    <li className='text-lg font-bold text-gray-400 cursor-pointer hover:text-red-light'>image.png</li>
                    <li className='text-lg font-bold text-gray-400 cursor-pointer hover:text-red-light'>image.png</li>
                </ul>
            </div>
            <div className='flex items-end'>
            <CustomBtn 
                type={"button"} 
                className={"text-white bg-red-light font-gilroy-bold text-lg py-1 px-7 align-bottom rounded-md"} 
                btnText={"Upload"} />
            </div>
        </div>
    </div>
  )
}

export default CheckImages