import React, { useState } from "react";

const TraitsFiltering = ({className}) => {
    const [catField, setCatField] = useState('');
    const [statusField, setStatusField] = useState('');
    const [statusArrow, setstatusArrow] = useState(false);
    const [catArrow,  setCatArrow] = useState(false);
    const [category,setCategory] = useState('')
    const [status,setStatus] = useState('')
  
    
  const onClickCategory = event => {
    setCatField(current => !current);
    setCatArrow(current => !current);
  };
    
  const onClickstatus = event => {
    setStatusField(current => !current);
    setstatusArrow(current => !current);
  };
 const onChangestatus = (e)=>{
    setStatus(e.target.innerText)
   };
  
 const onChangeCat = (e)=>{
    setCategory(e.target.innerText)
   }
  return (
    <form>
        <div className={`${className} grid grid-cols-3 gap-5`}>
            <div>
                <label className='text-lg text-gray-deep font-gilroy-bold'>filter by name</label>
                <input className='bg-gray-light border-2 border-gray-400 px-1 py-[2px] w-full text-[16px] font-bold text-gray-deep focus:outline-none uppercase' type="text" />
            </div>
            <div className='flex flex-col relative'>
                <label className='text-lg text-gray-deep font-gilroy-bold'>filter by category</label>
                <div onClick={onClickCategory} className="bg-gray-400 relative font-bold text-[16px] px-2 
                    uppercase cursor-pointer text-white w-full h-8 leading-8">
                    {category}
                    <span className={ ` text-white absolute top- right-2 ${catArrow && 'rotate-180'}` }>⮟</span>
                </div>
                {catField && (
                    <ul className="absolute w-full top-[103%] flex flex-col gap-[2px]" onClick={onClickCategory}>
                        <li onClick={(e)=>onChangeCat(e)} className="bg-gray-400 text-[16px] font-bold uppercase hover:bg-gray-deep cursor-pointer text-white hover:text-yellow-light px-2 py-[2px]">Option1</li>
                        <li onClick={(e)=>onChangeCat(e)} className="bg-gray-400 text-[16px] font-bold uppercase hover:bg-gray-deep cursor-pointer text-white hover:text-yellow-light px-2 py-[2px]">Option2</li>
                        <li onClick={(e)=>onChangeCat(e)} className="bg-gray-400 text-[16px] font-bold uppercase hover:bg-gray-deep cursor-pointer text-white hover:text-yellow-light px-2 py-[2px]">Option3</li>
                    </ul>
                )}
            </div>
            <div className='flex flex-col relative'>
                <label className='text-lg text-gray-deep font-gilroy-bold'>filter by Status</label>
                <div onClick={onClickstatus} className="bg-gray-400 relative font-bold text-[16px] px-2 
                    uppercase cursor-pointer text-white w-full h-8 leading-8">
               
                    {status}
                    <span className={ ` text-white absolute top-0 right-2 ${statusArrow && 'rotate-180'}` }></span>
                </div>
                {statusField && (
                    <ul className="absolute w-full top-[103%] flex flex-col gap-[2px]" onClick={onClickstatus}>
                        <li onClick={(e)=>onChangestatus(e)} className="bg-gray-400 text-[16px] font-bold uppercase hover:bg-gray-deep cursor-pointer text-white hover:text-yellow-light px-2 py-[2px]">Option1</li>
                        <li onClick={(e)=>onChangestatus(e)} className="bg-gray-400 text-[16px] font-bold uppercase hover:bg-gray-deep cursor-pointer text-white hover:text-yellow-light px-2 py-[2px]">Option2</li>
                        <li onClick={(e)=>onChangestatus(e)} className="bg-gray-400 text-[16px] font-bold uppercase hover:bg-gray-deep cursor-pointer text-white hover:text-yellow-light px-2 py-[2px]">Option3</li>
                    </ul>
                )}
            </div>
        </div>
    </form>
  )
}

export default TraitsFiltering;