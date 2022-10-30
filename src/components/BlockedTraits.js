import React, {useState} from 'react';
import CustomBtn from './CustomBtn';

const BlockedTraits = () => {
    const [Cat1, setCat1] = useState('');
    const [Cat1Arrow, setCat1Arrow] = useState(false);
    const [Cat1Value,setCat1Value] = useState('')
    const [Cat2, setCat2] = useState('');
    const [Cat2Arrow, setCat2Arrow] = useState(false);
    const [Cat2Value,setCat2Value] = useState('')
    const [traitName, settraitName] = useState('');
    const [traitArrow, settraitArrow] = useState(false);
    const [traitNameValue,settraitNameValue] = useState('')
    const [traitName2, settraitName2] = useState('');
    const [traitArrow2, settraitArrow2] = useState(false);
    const [traitNameValue2,settraitNameValue2] = useState('')
  
  const onClickCat = event => {
    setCat1(current => !current);
    setCat1Arrow(current => !current);
  };
    const onChangecat1 = (e)=>{
    setCat1Value(e.target.innerText)
   };

  const onClicktrait = event => {
    settraitName(current => !current);
    settraitArrow(current => !current);
  };
 const onChangetrait = (e)=>{
    settraitNameValue(e.target.innerText)
  };

  const onClickCat2 = event => {
    setCat2(current => !current);
    setCat2Arrow(current => !current);
  };
    const onChangecat2 = (e)=>{
    setCat2Value(e.target.innerText)
   };

  const onClicktrait2 = event => {
    settraitName2(current => !current);
    settraitArrow2(current => !current);
  };
 const onChangetrait2 = (e)=>{
    settraitNameValue2(e.target.innerText)
  };


  return (
    <div className='w-full min-h-[500]'>
        <div className='bg-gray-200 w-full min-h-[650px] p-5'>
             <h2 className='text-xl text-gray-deep font-gilroy-bold mb-5'>Block trait combinations</h2>
             <div className='text-center mb-5'>
                 <CustomBtn className={"bg-gray-deep text-yellow-light py-1 px-8 rounded-sm"} btnText={"Create Blocker "}/>
             </div>
              <p className='text-lg leading-6 text-gray-deep text-center max-w-[350px] mx-auto mb-5'>
                    these are the conflicts -click any two to change their priority (conflicts are managed in order of priority) 
              </p>

              <div className='mb-5 max-w-[350px] mx-auto'>
                <div className='grid grid-cols-2 bg-gray-300 gap-2 p-5'>
                    <div className='flex flex-col relative'>
                        <div onClick={onClickCat} className="bg-gray-400 relative font-bold text-[16px] px-2 
                            uppercase cursor-pointer text-white w-full h-7 leading-8">
                            {Cat1Value ? Cat1Value: "Category"}
                            <span className={ ` text-white absolute top-0 right-2 ${Cat1Arrow && 'rotate-180'}` }>⮟</span>
                        </div>
                        {Cat1 && (
                            <ul className="absolute w-full top-8 flex flex-col gap-[2px]" onClick={onClickCat}>
                                <li onClick={(e)=>onChangecat1(e)} className="bg-gray-400 text-[16px] font-bold uppercase hover:bg-gray-deep cursor-pointer text-white hover:text-yellow-light px-2 py-[2px]">Option1</li>
                                <li onClick={(e)=>onChangecat1(e)} className="bg-gray-400 text-[16px] font-bold uppercase hover:bg-gray-deep cursor-pointer text-white hover:text-yellow-light px-2 py-[2px]">Option2</li>
                                <li onClick={(e)=>onChangecat1(e)} className="bg-gray-400 text-[16px] font-bold uppercase hover:bg-gray-deep cursor-pointer text-white hover:text-yellow-light px-2 py-[2px]">Option3</li>
                            </ul>
                        )}
                        <p className='text-gray-deep text-lg p-1 leading-normal'>background</p>  
                    </div>
                    <div className='flex flex-col relative'>
                        <div onClick={onClicktrait} className="bg-gray-400 relative font-bold text-[16px] px-2 
                            uppercase cursor-pointer text-white w-full h-7 leading-8">
                            {traitNameValue ? traitNameValue: "Trait Name"}
                            <span className={ ` text-white absolute top-0 right-2 ${traitArrow && 'rotate-180'}` }>⮟</span>
                        </div>
                        {traitName && (
                            <ul className="absolute w-full top-8 flex flex-col gap-[2px]" onClick={onClicktrait}>
                                <li onClick={(e)=>onChangetrait(e)} className="bg-gray-400 text-[16px] font-bold uppercase hover:bg-gray-deep cursor-pointer text-white hover:text-yellow-light px-2 py-[2px]">Option1</li>
                                <li onClick={(e)=>onChangetrait(e)} className="bg-gray-400 text-[16px] font-bold uppercase hover:bg-gray-deep cursor-pointer text-white hover:text-yellow-light px-2 py-[2px]">Option2</li>
                                <li onClick={(e)=>onChangetrait(e)} className="bg-gray-400 text-[16px] font-bold uppercase hover:bg-gray-deep cursor-pointer text-white hover:text-yellow-light px-2 py-[2px]">Option3</li>
                            </ul>
                        )}
                        <p className='text-gray-deep text-lg p-1 leading-normal'>beige</p>  
                    </div>
                </div>
                <div className='text-center mt-5'>
                    <CustomBtn className={"border border-gray-400 w-24 text-sm rounded-md font-gilroy-bold text-gray-deep py-1 mr-2"} btnText={"edit!"}/>
                    <CustomBtn className={"border border-gray-400 w-24 text-sm rounded-md font-gilroy-bold text-gray-deep py-1"} btnText={"delete!"}/>
                </div>
              </div>

              <div className='mb-5 max-w-[350px] mx-auto'>
                <div className='grid grid-cols-2 bg-gray-300 gap-2 p-5'>
                    <div className='flex flex-col relative'>
                        <div onClick={onClickCat2} className="bg-gray-400 relative font-bold text-[16px] px-2 
                            uppercase cursor-pointer text-white w-full h-7 leading-8">
                            {Cat2Value ? Cat2Value: "Category"}
                            <span className={ ` text-white absolute top-0 right-2 ${Cat2Arrow && 'rotate-180'}` }>⮟</span>
                        </div>
                        {Cat2 && (
                            <ul className="absolute w-full top-8 flex flex-col gap-[2px]" onClick={onClickCat2}>
                                <li onClick={(e)=>onChangecat2(e)} className="bg-gray-400 text-[16px] font-bold uppercase hover:bg-gray-deep cursor-pointer text-white hover:text-yellow-light px-2 py-[2px]">Option1</li>
                                <li onClick={(e)=>onChangecat2(e)} className="bg-gray-400 text-[16px] font-bold uppercase hover:bg-gray-deep cursor-pointer text-white hover:text-yellow-light px-2 py-[2px]">Option2</li>
                                <li onClick={(e)=>onChangecat2(e)} className="bg-gray-400 text-[16px] font-bold uppercase hover:bg-gray-deep cursor-pointer text-white hover:text-yellow-light px-2 py-[2px]">Option3</li>
                            </ul>
                        )}
                        <p className='text-gray-deep text-lg p-1 leading-normal'>background</p>  
                    </div>
                    <div className='flex flex-col relative'>
                        <div onClick={onClicktrait2} className="bg-gray-400 relative font-bold text-[16px] px-2 
                            uppercase cursor-pointer text-white w-full h-7 leading-8">
                            {traitNameValue2 ? traitNameValue2: "Trait Name"}
                            <span className={ ` text-white absolute top-0 right-2 ${traitArrow2 && 'rotate-180'}` }>⮟</span>
                        </div>
                        {traitName2 && (
                            <ul className="absolute w-full top-8 flex flex-col gap-[2px]" onClick={onClicktrait2}>
                                <li onClick={(e)=>onChangetrait2(e)} className="bg-gray-400 text-[16px] font-bold uppercase hover:bg-gray-deep cursor-pointer text-white hover:text-yellow-light px-2 py-[2px]">Option1</li>
                                <li onClick={(e)=>onChangetrait2(e)} className="bg-gray-400 text-[16px] font-bold uppercase hover:bg-gray-deep cursor-pointer text-white hover:text-yellow-light px-2 py-[2px]">Option2</li>
                                <li onClick={(e)=>onChangetrait2(e)} className="bg-gray-400 text-[16px] font-bold uppercase hover:bg-gray-deep cursor-pointer text-white hover:text-yellow-light px-2 py-[2px]">Option3</li>
                            </ul>
                        )}
                        <p className='text-gray-deep text-lg p-1 leading-normal'>beige</p>  
                    </div>
                </div>
                <div className='text-center mt-5'>
                    <CustomBtn className={"border border-gray-400 w-24 text-sm rounded-md font-gilroy-bold text-gray-deep py-1 mr-2"} btnText={"edit!"}/>
                    <CustomBtn className={"border border-gray-400 w-24 text-sm rounded-md font-gilroy-bold text-gray-deep py-1"} btnText={"delete!"}/>
                </div>
              </div>
         
        </div>
    </div>
  )
}

export default BlockedTraits