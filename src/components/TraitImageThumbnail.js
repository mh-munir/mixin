import React from 'react'
import CustomBtn from './CustomBtn'

const TraitImageThumbnail = ({src, alt, traitName,trashIcon}) => {
  return (
    <div className='relative'>
        <img className='w-full h-auto border border-gray-400 mb-1' src={src} alt={alt}/>
        <button type='submit' className='absolute right-2 top-2 text-gray-deep text-xl'>{trashIcon}</button>
        <p className='bg-yellow-light px-1 w-full text-[16px] text-gray-deep uppercase font-gilroy-bold mb-1'>{traitName}</p>
        <CustomBtn type={"button"} className={"bg-gray-400 text-[16px] py-[2px] px-7 text-white font-gilroy-regular"} btnText={"edit name"}/>
    </div>
  )
}

export default TraitImageThumbnail