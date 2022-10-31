import React,{useState} from 'react'
import CustomBtn from '../components/CustomBtn'
import Header from '../components/Header'
import BuilderHeader from '../components/BuilderHeader'
import BackLink from '../components/BackLink'
import CustomSelect from '../components/CustomSelect'


const EditBuilderImages2 = () => {
    const [cat, setCat] = useState("")
    const [catArrow, setCatArrow] = useState("")
    const [catValue, setCatValue] = useState("")
    
     
    const onClickCategory = event => {
        setCat(current => !current);
        setCatArrow(current => !current);
      };

    const onChangeCat =(e)=>{
        setCatValue(e.target.innerText)
    }
  return (
    <>
      <Header />
      <section className='w-[94%] relative h-full bg-gray-light ml-auto py-16 min-h-[600px] mb-16'>
            <BackLink className={"absolute top-5 left-5 text-xl font-bold text-gray-deep"} to={"/"}/>
            <BuilderHeader />
            <div className='w-[80%] ml-auto px-5'>
                <div className='max-w-5xl mr-auto bg-gray-200 min-h-[660px]'>
                    <div className='max-w-xl p-5'>
                        <h2 className='text-xl font-gilroy-bold text-gray-deep mb-5'>Edit images</h2>
                        <CustomBtn className={"max-w-[250px] bg-gray-400 text-white font-normal text-sm rounded-sm px-10 py-1 uppercase mb-5"} btnText={"Add Trait"} />
                        <div className='grid grid-cols-2 gap-5 mb-5 items-center'>
                            <CustomSelect 
                                className={"bg-gray-400 font-normal max-w-[250px] py-1 h-7 text-sm"}
                                defaultValue={"Catagory"}
                                optionShow={cat}
                                onClick ={onClickCategory}
                                onChange={onChangeCat}
                                arrow={catArrow}
                                value={catValue}
                                optionClass={"bg-gray-400 text-[16px] font-normal uppercase hover:bg-gray-deep cursor-pointer text-white hover:text-yellow-light px-2 py-[2px]"}
                                Option1={"Option1"}
                                Option2={"Option2"}
                                Option3={"Option3"}
                                Option4={"Option4"}
                            />
                            <div>
                                <input type="file" accept='image'/>
                            </div>
                        </div>
                        <CustomBtn className={"max-w-[250px] bg-black text-white font-gilroy-bold text-sm rounded-sm px-10 py-1 mb-5"} btnText={"Save"} />
                    </div>
                </div>
                
            </div>
      </section>
    </>
  )
}

export default EditBuilderImages2