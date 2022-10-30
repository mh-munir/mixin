import React, {useState} from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import CustomBtn from './CustomBtn';

const AddNewCategoryConflict = () => {
    const [primaryCat, setPrimaryCat] = useState('');
    const [primaryArrow, setprimaryArrow] = useState(false);
    const [primaryCatValue,setPrimaryCatValue] = useState('')
    const [secondaryCat, setsecondaryCat] = useState('');
    const [secondaryArrow, setsecondaryArrow] = useState(false);
    const [secondaryCatValue,setsecondaryCatValue] = useState('')
  
  const onClickprimary = event => {
    setPrimaryCat(current => !current);
    setprimaryArrow(current => !current);
  };
 const onChangeprimary = (e)=>{
  setPrimaryCatValue(e.target.innerText)
   };
  const onClicksecondary = event => {
    setsecondaryCat(current => !current);
    setsecondaryArrow(current => !current);
  };
 const onChangesecondary = (e)=>{
   setsecondaryCatValue(e.target.innerText)
  };

  return (
    <div className='w-full min-h-[500]'>
        <div className='bg-gray-200 w-full min-h-[500px] p-5'>
             <h2 className='text-xl text-gray-deep font-gilroy-bold mb-1'>New conflict</h2>
             <input type="text" 
                className='w-3/4 bg-gray-200 border-2 border-gray-300 px-1 mb-3 focus:outline-none text-[16px] placeholder:italic placeholder:font-semibold py-[2px]' 
                placeholder='Conflict name'/>
              <p className='text-[16px] leading-6 font-semibold text-gray-deep mb-2'>
                  be swapped conflict categories (these are the categories that will for anytraits you select)
              </p>
              <p className='text-[16px] leading-6 font-semibold text-gray-deep mb-2'>
                  if any of these traits are selected, the default layering is overwritten and the priary and secondary categories selected will be swapped.
              </p>
              <p className='text-[16px] leading-6 font-semibold text-gray-deep mb-2'>
                select the categories that	make up this conflict
              </p>

              <div className='grid grid-cols-2 gap-5'>
                <div className='flex flex-col relative'>
                    <div onClick={onClickprimary} className="bg-gray-400 relative font-bold text-[16px] px-2 
                        uppercase cursor-pointer text-white w-full h-8 leading-8">
                        {primaryCatValue ? primaryCatValue: "Primary Category"}
                        <span className={ ` text-white absolute top-0 right-2 ${primaryArrow && 'rotate-180'}` }>⮟</span>
                    </div>
                    {primaryCat && (
                        <ul className="absolute w-full top-[103%] flex flex-col gap-[2px]" onClick={onClickprimary}>
                            <li onClick={(e)=>onChangeprimary(e)} className="bg-gray-400 text-[16px] font-bold uppercase hover:bg-gray-deep cursor-pointer text-white hover:text-yellow-light px-2 py-[2px]">Option1</li>
                            <li onClick={(e)=>onChangeprimary(e)} className="bg-gray-400 text-[16px] font-bold uppercase hover:bg-gray-deep cursor-pointer text-white hover:text-yellow-light px-2 py-[2px]">Option2</li>
                            <li onClick={(e)=>onChangeprimary(e)} className="bg-gray-400 text-[16px] font-bold uppercase hover:bg-gray-deep cursor-pointer text-white hover:text-yellow-light px-2 py-[2px]">Option3</li>
                        </ul>
                     )}
                </div>
                <div className='flex flex-col relative'>
                    <div onClick={onClicksecondary} className="bg-gray-400 relative font-bold text-[16px] px-2 
                        uppercase cursor-pointer text-white w-full h-8 leading-8">
                        {secondaryCatValue ? secondaryCatValue: "Secondary Category"}
                        <span className={ ` text-white absolute top-0 right-2 ${secondaryArrow && 'rotate-180'}` }>⮟</span>
                    </div>
                    {secondaryCat && (
                        <ul className="absolute w-full top-[103%] flex flex-col gap-[2px]" onClick={onClicksecondary}>
                            <li onClick={(e)=>onChangesecondary(e)} className="bg-gray-400 text-[16px] font-bold uppercase hover:bg-gray-deep cursor-pointer text-white hover:text-yellow-light px-2 py-[2px]">Option1</li>
                            <li onClick={(e)=>onChangesecondary(e)} className="bg-gray-400 text-[16px] font-bold uppercase hover:bg-gray-deep cursor-pointer text-white hover:text-yellow-light px-2 py-[2px]">Option2</li>
                            <li onClick={(e)=>onChangesecondary(e)} className="bg-gray-400 text-[16px] font-bold uppercase hover:bg-gray-deep cursor-pointer text-white hover:text-yellow-light px-2 py-[2px]">Option3</li>
                        </ul>
                     )}
                </div>
              </div>

              <div className='mt-3'>
                <h3 className='text-lg text-gray-deep font-gilroy-bold mb-1 text-end'>Selected conflict traits</h3>
                  <div className='grid grid-cols-2 gap-5 items-start'>
                    <ul className='flex flex-col gap-1'>
                        <li className='text-lg font-bold text-red-light cursor-pointer'>peach</li>
                        <li className='text-lg font-bold text-red-light cursor-pointer'>beige</li>
                        <li className='text-lg font-bold text-red-light cursor-pointer'>yellow</li>
                        <li className='text-lg font-bold text-gray-deep cursor-pointer'>peach</li>
                        <li className='text-lg font-bold text-gray-deep cursor-pointer'>beige</li>
                        <li className='text-lg font-bold text-gray-deep cursor-pointer'>yellow</li>
                        <li className='text-lg font-bold text-gray-deep cursor-pointer'>peach</li>
                        <li className='text-lg font-bold text-gray-deep cursor-pointer'>beige</li>
                    </ul>
                    <div>
                        <ul className='grid gap-2'>
                          <li className='flex items-center justify-between border-2 border-gray-300 py-1 px-2 text-lg font-semibold text-gray-deep'>peach<button><FaTrashAlt/></button></li>
                          <li className='flex items-center justify-between border-2 border-gray-300 py-1 px-2 text-lg font-semibold text-gray-deep'>beige<button><FaTrashAlt/></button></li>
                          <li className='flex items-center justify-between border-2 border-gray-300 py-1 px-2 text-lg font-semibold text-gray-deep'>yellow<button><FaTrashAlt/></button></li>
                        </ul>
                    </div>
                  </div>
              </div>
        </div>
        <div className='text-center'>
            <p className='text-[16px] leading-6 text-gray-deep my-2'>click any to swap the order</p>
            <CustomBtn type={"submit"} className={"bg-black py-2 px-5 text-[16px] font-gilroy-bold rounded-md text-white"} btnText={"Save conflict!"}/>
        </div>
    </div>
  )
}

export default AddNewCategoryConflict