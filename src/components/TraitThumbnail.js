import React from 'react'
import { Link } from 'react-router-dom'

const TraitThumbnail = ({src, alt, to}) => {
  return (
    <div className='border border-[#9ca3af] pb-2'>
        <img className='w-full h-auto mb-2' src={src} alt={alt}/>
        <Link className='inline-block bg-[#B9B5B9] text-white uppercase text-md font-bold px-2 py-1 ml-1
         hover:bg-gray-deep duration-150' to={to}>
            View Details
          </Link>
    </div>
  )
}

export default TraitThumbnail