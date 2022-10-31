import React, {useState} from 'react'
import CustomBtn from './CustomBtn';

const AddNewBlockedTrait = () => {
    const [catValue, setCatValue]= useState("")
      
   
    const onChangeCat = (e)=>{
        setCatValue(e.target.innerText)
    };
  return (
    <div className='w-full'>
        <div className='bg-gray-200 w-full p-5 min-h-[550px]'>
            <h2 className='mb-5 text-xl text-gray-deep font-gilroy-bold'>Select primary trait</h2>
            <div className="bg-gray-300 relative font-bold text-[16px] px-2 
                uppercase cursor-pointer text-white w-full h-8 leading-8 mb-5">
                {catValue ? catValue: "Catagory"}
                <span className={'text-white absolute top- right-2'}>⮟</span>
            </div>
            <ul className="w-full flex flex-col gap-5">
                <li onClick={(e)=>onChangeCat(e)} className="text-[16px] font-bold uppercase  cursor-pointer text-gray-deep px-2 py-[2px]">Background</li>
                <li onClick={(e)=>onChangeCat(e)} className="text-[16px] font-bold uppercase  cursor-pointer text-gray-deep px-2 py-[2px]">Eyes</li>
                <li onClick={(e)=>onChangeCat(e)} className="text-[16px] font-bold uppercase  cursor-pointer text-gray-deep px-2 py-[2px]">Ears</li>
                <li onClick={(e)=>onChangeCat(e)} className="text-[16px] font-bold uppercase  cursor-pointer text-gray-deep px-2 py-[2px]">Background</li>
                <li onClick={(e)=>onChangeCat(e)} className="text-[16px] font-bold uppercase  cursor-pointer text-gray-deep px-2 py-[2px]">Eyes</li>
                <li onClick={(e)=>onChangeCat(e)} className="text-[16px] font-bold uppercase  cursor-pointer text-gray-deep px-2 py-[2px]">Ears</li>
            </ul>
        </div>
        <div className='text-center'>
            <p className='text-lg text-gray-deep my-2'>Click any swap the order</p>
            <CustomBtn type={"button"} btnText={"Save conflict"} className={"bg-black text-white text-lg py-1 px-7 font-gilroy-regular rounded-md"}/>
        </div>
    </div>
  )
}

export default AddNewBlockedTrait