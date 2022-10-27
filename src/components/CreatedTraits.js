import React from 'react'

const CreatedTraits = ({className}) => {
  return (
    <form>
        <div className={`${className} grid grid-cols-3 gap-5`}>
            <div>
                <label className='text-lg text-gray-deep font-gilroy-bold'>filter by name</label>
                <input className='bg-gray-light border-2 border-gray-400 px-1 py-[3.5px] w-full text-sm font-bold text-gray-deep focus:outline-none uppercase' type="text" />
            </div>
            <div className='flex flex-col'>
                <label className='text-lg text-gray-deep font-gilroy-bold'>filter by category</label>
                <select className='bg-gray-400 p-[2px] w-full text-sm font-bold text-white uppercase'>
                    <option>Background</option>
                </select>
            </div>
            <div className='flex flex-col'>
                <label className='text-lg text-gray-deep font-gilroy-bold'>filter by status</label>
                <select className='bg-gray-400 p-[2px] w-full text-sm font-bold text-white uppercase'>
                    <option>View All</option>
                </select>
            </div>
        </div>
    </form>
  )
}

export default CreatedTraits;