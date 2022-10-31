import React,{useState} from 'react'
import CustomSelect from '../components/CustomSelect'
import CustomBtn from './CustomBtn'

const AddNewBlockedTrait2 = () => {
    const [catValue, setCatValue]= useState("")
    const [cat1, setCat1] = useState("")
    const [catArrow1, setCatArrow1] = useState("")
    const [catValue1, setCatValue1] = useState("")
    const [cat2, setCat2] = useState("")
    const [catArrow2, setCatArrow2] = useState("")
    const [catValue2, setCatValue2] = useState("")
    const [cat3, setCat3] = useState("")
    const [catArrow3, setCatArrow3] = useState("")
    const [catValue3, setCatValue3] = useState("")
    const [cat4, setCat4] = useState("")
    const [catArrow4, setCatArrow4] = useState("")
    const [catValue4, setCatValue4] = useState("")
    const [tarit1, settarit1] = useState("")
    const [taritArrow1, settaritArrow1] = useState("")
    const [taritValue1, settaritValue1] = useState("")
    const [tarit2, settarit2] = useState("")
    const [taritArrow2, settaritArrow2] = useState("")
    const [taritValue2, settaritValue2] = useState("")
    const [tarit3, settarit3] = useState("")
    const [taritArrow3, settaritArrow3] = useState("")
    const [taritValue3, settaritValue3] = useState("")
    const [tarit4, settarit4] = useState("")
    const [taritArrow4, settaritArrow4] = useState("")
    const [taritValue4, settaritValue4] = useState("")
      
   
    const onChangeCat = (e)=>{
        setCatValue(e.target.innerText)
    };
    
    const onClickCategory1 = event => {
        setCat1(current => !current);
        setCatArrow1(current => !current);
      };
    const onClickCategory2 = event => {
        setCat2(current => !current);
        setCatArrow2(current => !current);
      };
    const onClickCategory3 = event => {
        setCat3(current => !current);
        setCatArrow3(current => !current);
      };
    const onClickCategory4 = event => {
        setCat4(current => !current);
        setCatArrow4(current => !current);
      };

    const onChangeCat1 =(e)=>{
        setCatValue1(e.target.innerText)
    }
    const onChangeCat2 =(e)=>{
        setCatValue2(e.target.innerText)
    }
    const onChangeCat3 =(e)=>{
        setCatValue3(e.target.innerText)
    }
    const onChangeCat4 =(e)=>{
        setCatValue4(e.target.innerText)
    }
    const onClickTrait1 = event => {
        settarit1(current => !current);
        settaritArrow1(current => !current);
      };

    const onChangeTrait1 =(e)=>{
        settaritValue1(e.target.innerText)
    }
    const onClickTrait2 = event => {
        settarit2(current => !current);
        settaritArrow2(current => !current);
      };

    const onChangeTrait2 =(e)=>{
        settaritValue2(e.target.innerText)
    }
    const onClickTrait3 = event => {
        settarit3(current => !current);
        settaritArrow3(current => !current);
      };

    const onChangeTrait3 =(e)=>{
        settaritValue3(e.target.innerText)
    }
    const onClickTrait4 = event => {
        settarit4(current => !current);
        settaritArrow4(current => !current);
      };

    const onChangeTrait4 =(e)=>{
        settaritValue4(e.target.innerText)
    }
  return (
    <div className='w-full'>
        <div className='w-full bg-gray-200 p-5 min-h-[600px]'>
            <h2 className='mb-5 text-xl text-gray-deep font-gilroy-bold'>Select primary trait</h2>
            <div className='grid grid-cols-2 items-start gap-x-5 gap-y-2 mb-2'>
                <div>
                    <CustomSelect 
                        className={"bg-gray-400 max-w-[250px] py-[2px] mb-2"}
                        defaultValue={"Catagory"}
                        optionShow={cat1}
                        onClick ={onClickCategory1}
                        onChange={onChangeCat1}
                        arrow={catArrow1}
                        value={catValue1}
                        optionClass={"bg-gray-300 text-sm font-bold uppercase hover:bg-gray-deep cursor-pointer text-white hover:text-yellow-light px-2 py-[2px]"}
                        Option1={"Option1"}
                        Option2={"Option2"}
                        Option3={"Option3"}
                        Option4={"Option4"}
                    />
                    <p className='text-lg font-bold text-gray-deep px-1'>Background</p>
                </div>

                <div>
                    <CustomSelect 
                        className={"bg-gray-400 max-w-[250px] py-[2px] mb-2"}
                        defaultValue={"Trait Name"}
                        optionShow={tarit1}
                        onClick ={onClickTrait1}
                        onChange={onChangeTrait1}
                        arrow={taritArrow1}
                        value={taritValue1}
                        optionClass={"bg-gray-300 text-sm font-bold uppercase hover:bg-gray-deep cursor-pointer text-white hover:text-yellow-light px-2 py-[2px]"}
                        Option1={"Option1"}
                        Option2={"Option2"}
                        Option3={"Option3"}
                        Option4={"Option4"}
                    />
                    <p className='text-lg font-bold text-gray-deep px-1'>Beiges</p>
                </div>
                <CustomBtn className={"text-white bg-gray-deep text-sm  py-1 font-gilroy-bold w-32"} btnText={"edit"}/>
            </div>
            <div className='grid grid-cols-2 gap-x-5'>
                <div className='w-full py-2'>
                    <h4 className='mb-2 text-lg text-gray-deep font-gilroy-bold'>Select primary trait</h4>
                    <div className="bg-gray-400 relative font-bold text-sm py-[2px] px-2 
                        uppercase cursor-pointer text-white w-full mb-5">
                        {catValue ? catValue: "Catagory"}
                        <span className={'text-white absolute top-0 right-2'}>⮟</span>
                    </div>
                    <ul className="w-full flex flex-col gap-2">
                        <li onClick={(e)=>onChangeCat(e)} className="text-sm font-bold uppercase  cursor-pointer text-gray-deep px-2 py-[2px]">Background</li>
                        <li onClick={(e)=>onChangeCat(e)} className="text-sm font-bold uppercase  cursor-pointer text-gray-deep px-2 py-[2px]">Eyes</li>
                        <li onClick={(e)=>onChangeCat(e)} className="text-sm font-bold uppercase  cursor-pointer text-gray-deep px-2 py-[2px]">Ears</li>
                        <li onClick={(e)=>onChangeCat(e)} className="text-sm font-bold uppercase  cursor-pointer text-gray-deep px-2 py-[2px]">Background</li>
                        <li onClick={(e)=>onChangeCat(e)} className="text-sm font-bold uppercase  cursor-pointer text-gray-deep px-2 py-[2px]">Eyes</li>
                        <li onClick={(e)=>onChangeCat(e)} className="text-sm font-bold uppercase  cursor-pointer text-gray-deep px-2 py-[2px]">Ears</li>
                    </ul>
                </div>
                <div>
                    <h4 className='mb-2 text-lg text-gray-deep font-gilroy-bold'>Select primary trait</h4>
                    <div className='grid grid-cols-2 items-start gap-2 mb-3 bg-gray-300 p-2'>
                        <div>
                            <CustomSelect 
                                className={"bg-gray-400 text-sm py-[2px] mb-2"}
                                defaultValue={"Catagory"}
                                optionShow={cat2}
                                onClick ={onClickCategory2}
                                onChange={onChangeCat2}
                                arrow={catArrow2}
                                value={catValue2}
                                optionClass={"bg-gray-300 text-sm font-bold uppercase hover:bg-gray-deep cursor-pointer text-white hover:text-yellow-light px-2 py-[2px]"}
                                Option1={"Option1"}
                                Option2={"Option2"}
                                Option3={"Option3"}
                                Option4={"Option4"}
                            />
                            <p className='text-sm font-bold text-gray-deep px-1'>Background</p>
                        </div>
                        <div>
                            <CustomSelect 
                                 className={"bg-gray-400 text-sm py-[2px] mb-2"}
                                defaultValue={"Trait Name"}
                                optionShow={tarit2}
                                onClick ={onClickTrait2}
                                onChange={onChangeTrait2}
                                arrow={taritArrow2}
                                value={taritValue2}
                                optionClass={"bg-gray-300 text-sm font-bold uppercase hover:bg-gray-deep cursor-pointer text-white hover:text-yellow-light px-2 py-[2px]"}
                                Option1={"Option1"}
                                Option2={"Option2"}
                                Option3={"Option3"}
                                Option4={"Option4"}
                            />
                            <p className='text-sm font-bold text-gray-deep px-1'>Beiges</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 items-start gap-2 mb-3 bg-gray-300 p-2'>
                        <div>
                            <CustomSelect 
                                className={"bg-gray-400 text-sm py-[2px] mb-2"}
                                defaultValue={"Catagory"}
                                optionShow={cat3}
                                onClick ={onClickCategory3}
                                onChange={onChangeCat3}
                                arrow={catArrow3}
                                value={catValue3}
                                optionClass={"bg-gray-300 text-sm font-normal uppercase hover:bg-gray-deep cursor-pointer text-white hover:text-yellow-light px-2 py-[2px]"}
                                Option1={"Option1"}
                                Option2={"Option2"}
                                Option3={"Option3"}
                                Option4={"Option4"}
                            />
                            <p className='text-sm font-bold text-gray-deep px-1'>Background</p>
                        </div>
                        <div>
                            <CustomSelect 
                                 className={"bg-gray-400 text-sm py-[2px] mb-2"}
                                defaultValue={"Trait Name"}
                                optionShow={tarit3}
                                onClick ={onClickTrait3}
                                onChange={onChangeTrait3}
                                arrow={taritArrow3}
                                value={taritValue3}
                                optionClass={"bg-gray-300 text-sm font-bold uppercase hover:bg-gray-deep cursor-pointer text-white hover:text-yellow-light px-2 py-[2px]"}
                                Option1={"Option1"}
                                Option2={"Option2"}
                                Option3={"Option3"}
                                Option4={"Option4"}
                            />
                            <p className='text-sm font-bold text-gray-deep px-1'>Beiges</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 items-start gap-2 mb-5 bg-gray-300 p-2'>
                        <div>
                            <CustomSelect 
                                 className={"bg-gray-400 text-sm py-[2px] mb-2"}
                                defaultValue={"Catagory"}
                                optionShow={cat4}
                                onClick ={onClickCategory4}
                                onChange={onChangeCat4}
                                arrow={catArrow4}
                                value={catValue4}
                                optionClass={"bg-gray-300 text-sm font-bold uppercase hover:bg-gray-deep cursor-pointer text-white hover:text-yellow-light px-2 py-[2px]"}
                                Option1={"Option1"}
                                Option2={"Option2"}
                                Option3={"Option3"}
                                Option4={"Option4"}
                            />
                            <p className='text-sm font-bold text-gray-deep px-1'>Background</p>
                        </div>
                        <div>
                            <CustomSelect 
                                 className={"bg-gray-400 text-sm py-[2px] mb-2"}
                                defaultValue={"Trait Name"}
                                optionShow={tarit4}
                                onClick ={onClickTrait4}
                                onChange={onChangeTrait4}
                                arrow={taritArrow4}
                                value={taritValue4}
                                optionClass={"bg-gray-300 text-sm font-bold uppercase hover:bg-gray-deep cursor-pointer text-white hover:text-yellow-light px-2 py-[2px]"}
                                Option1={"Option1"}
                                Option2={"Option2"}
                                Option3={"Option3"}
                                Option4={"Option4"}
                            />
                            <p className='text-sm font-bold text-gray-deep px-1'>Beiges</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-2 text-center'>
            <CustomBtn className={"text-white bg-black text-lg py-1 font-gilroy-bold w-32"} btnText={"Save"}/>
        </div>
    </div>
  )
}

export default AddNewBlockedTrait2