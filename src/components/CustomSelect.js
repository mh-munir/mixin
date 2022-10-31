import React from 'react'

const CustomSelect = ({onClick,value, optionClass, className, defaultValue,
  arrow,optionShow,onChange,Option1, Option2, Option3, Option4, Option5, Option6}) => {
  return (
    <div className={`relative ${className}`}>
        <div onClick={onClick} className="bg-gray-400 relative font-bold text-[16px] px-2 uppercase cursor-pointer text-white w-full h-7 leading-8">
            {value ? value: defaultValue}
            <span className={ ` text-white absolute top-0 right-2 ${arrow && 'rotate-180'}` }>⮟</span>
        </div>
            {optionShow && (
                <ul className="absolute w-full top-8 flex flex-col gap-[2px]" onClick={onClick}>
                    <li onClick={(e)=>onChange(e)} className={optionClass}>{Option1}</li>
                    <li onClick={(e)=>onChange(e)} className={optionClass}>{Option2}</li>
                    <li onClick={(e)=>onChange(e)} className={optionClass}>{Option3}</li>
                    <li onClick={(e)=>onChange(e)} className={optionClass}>{Option4}</li>
                    <li onClick={(e)=>onChange(e)} className={optionClass}>{Option5}</li>
                    <li onClick={(e)=>onChange(e)} className={optionClass}>{Option6}</li>
                </ul>
        )}
    </div>
  )
}

export default CustomSelect