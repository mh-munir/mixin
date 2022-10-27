import React from 'react';

const AddtraitField = ({traitTitle, traitDes, accept, type, value, className, onChange}) => {
  return (
    <div>       
      <h3 className='font-gilroy-bold text-xl text-gray-deep mb-1'>{traitTitle}</h3>
      <p className='text-lg text-gray-400 font-medium mb-1'>{traitDes}</p>
      <input onChange={onChange} accept={accept} type={type} value={value} className={className} />
    </div>
  )
}

export default AddtraitField;