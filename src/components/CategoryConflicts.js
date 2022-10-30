import React from 'react'
import CustomBtn from './CustomBtn'

const CategoryConflicts = ({title,des,child}) => {
  return (
    <div className='w-full bg-gray-200 p-5 text-center min-h-[600px]'>
        <h2 className='text-xl text-gray-deep font-gilroy-bold text-left mb-5'>{title}</h2>
        <CustomBtn className={"bg-gray-deep text-yellow-light font-gilroy-regular text-lg py-1 px-10 rounded-md mb-5"} type={"button"} btnText={"Add conflict"} />
        <p className='text-lg text-gray-deep'>{des}</p>
        {child}
    </div>
  )
}

export default CategoryConflicts