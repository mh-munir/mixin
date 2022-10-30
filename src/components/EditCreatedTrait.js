import React from 'react'

const EditCreatedTrait = () => {
  return (
   <form className='max-w-[250px] mx-auto'>
        <h3 className='text-xl font-gilroy-bold text-gray-deep mb-5'>Edit trait NFT:</h3>
        <div className='mb-3'>
            <label className='text-lg font-gilroy-bold text-gray-deep flex items-center gap-2'><span className='text-yellow-light'>➤</span> name</label>
            <input className='w-full border border-gray-400 bg-gray-light focus:outline-none px-3 text-[16px] font-bold text-gray-deep' type='text'/>
        </div>
        <div className='mb-3'>
            <label className='text-lg font-gilroy-bold text-gray-deep flex items-center gap-2'><span className='text-yellow-light'>➤</span> purchasing coin</label>
            <input className='w-full border border-gray-400 bg-gray-light focus:outline-none px-3 text-[16px] font-bold text-gray-deep' type='text'/>
        </div>
        <div className='mb-3'>
            <label className='text-lg font-gilroy-bold text-gray-deep flex items-center gap-2'><span className='text-yellow-light'>➤</span> price</label>
            <input className='w-full border border-gray-400 bg-gray-light focus:outline-none px-3 text-[16px] font-bold text-gray-deep' type='text'/>
        </div>
        <div className='mb-3'>
            <label className='text-lg font-gilroy-bold text-gray-deep flex items-center gap-2'><span className='text-yellow-light'>➤</span> royalty</label>
            <input className='w-full border border-gray-400 bg-gray-light focus:outline-none px-3 text-[16px] font-bold text-gray-deep' type='text'/>
        </div>
        <div className='mb-3'>
            <label className='text-lg font-gilroy-bold text-gray-deep flex items-center gap-2'><span className='text-yellow-light'>➤</span> description</label>
            <textarea className='w-full h-32 border border-gray-400 bg-gray-light focus:outline-none px-3 text-[16px] font-bold text-gray-deep' type='text'></textarea>
        </div>
        <div className='text-center'>
            <button className='bg-black text-white text-[16px] font-gilroy-bold py-2 px-5 rounded-md'>Apply Change</button>
        </div>
   </form>
  )
}

export default EditCreatedTrait