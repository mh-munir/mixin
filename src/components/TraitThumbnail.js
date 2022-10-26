import React from 'react'
import { Link } from 'react-router-dom'

const TraitThumbnail = ({src, alt, to}) => {
  return (
    <div className=''>
          <div className='border border-[#B9B5B9] mb-2 shadow-sm'>
            <img className='w-full h-auto' src={src} alt={alt}/>
        </div>
        <Link className='inline-block bg-[#B9B5B9] text-white uppercase text-sm font-bold px-2 py-1' to={to}>
            View Details
        </Link>
    </div>
  )
}

export default TraitThumbnail