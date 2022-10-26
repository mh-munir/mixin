import React from 'react';

const AddtraitField = ({onChange, type, className, heading,description}) => {
  return (
    <div>
        <h2 className='text-xl font-bold text-gray-deep'>{heading}</h2>
        <p className='text-xl font-bold text-gray-deep'>{description}</p>
        <input onChange={onChange} type={type} className={className}/>
    </div>
  )
}

export default AddtraitField;