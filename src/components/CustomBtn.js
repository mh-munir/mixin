
import React from 'react'

const CustomBtn = ({type,className, awrrowSign, btnText}) => {
  return (
    <button type={type} className={className}> {awrrowSign} {btnText}</button>
  )
}

export default CustomBtn