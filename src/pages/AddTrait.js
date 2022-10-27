
import React from 'react'
import AddtraitField from '../components/AddtraitField'
import CustomBtn from '../components/CustomBtn'
import Header from '../components/Header'
import TraitHeader from '../components/TraitHeader'

const AddTrait = () => {
    const handleSubmit =(e)=>{
        e.preventDefault()
    }
  return (
    <>
        <Header/>
        <section className='w-[94%] h-full bg-gray-light ml-auto py-[70px] mb-24 relative'>
        <TraitHeader />
            <div className='w-[80%] ml-auto px-5'>
                <from onSubmit={handleSubmit}>
                    <div className='max-w-2xl mr-auto mb-5 relative grid gap-10'>
                        <div className='flex justify-between items-start'>
                            <div className='text-center'>
                                <AddtraitField accept={"image"} className={"text-gray-400 font-bold"} type={"file"} traitTitle={"Upload image"} 
                                traitDes={"must be png or gif"} />
                            </div>
                            <div className='text-center'>
                                <AddtraitField accept={"video"} className={"text-gray-400 font-bold"} type={"file"} traitTitle={"Upload video"} 
                                traitDes={"must be an mp4"} />
                            </div>
                        </div>
                        <div className='text-center'>
                            <AddtraitField 
                            className={"text-gray-deep font-normal bg-gray-light w-[60%] border-2 border-gray-400 p-2 focus:outline-0"}
                            type={"text"} traitTitle={"Name of trait"} 
                            traitDes={"( Without numbers - those will added automaticly )"} />
                        </div>
                        <div className='text-center'>
                            <AddtraitField 
                            className={"text-gray-deep font-normal bg-gray-light w-[60%] border-2 border-gray-400 p-2 focus:outline-0"}
                            type={"text"} traitTitle={"Symbol"} 
                            traitDes={"only regular characters are allowed"} />
                        </div>
                        <div className='text-center'>
                            <AddtraitField 
                            className={"text-gray-deep font-normal bg-gray-light w-[60%] border-2 border-gray-400 p-2 focus:outline-0"}
                            type={"text"} traitTitle={"External link"} 
                            traitDes={"this appears when viewing the NFT in your wallet"} />
                        </div>
                        <div className='text-center'>
                            <AddtraitField 
                            className={"text-gray-deep font-normal bg-gray-light w-[60%] border-2 border-gray-400 p-2 focus:outline-0"}
                            type={"text"} traitTitle={"Supply"} 
                            traitDes={"this cannot be edited later"} />
                        </div>
                        <div className='text-center'>
                            <AddtraitField 
                            className={"text-gray-deep font-normal bg-gray-light w-[60%] border-2 border-gray-400 p-2 focus:outline-0"}
                            type={"text"} traitTitle={"Sales price"} />
                        </div>
                        <div className='text-center'>
                            <AddtraitField 
                            className={"text-gray-deep font-normal bg-gray-light w-[60%] border-2 border-gray-400 p-2 focus:outline-0"}
                            type={"text"} traitTitle={"Purchase coin"}
                            traitDes={"please input the hash of the coin that can be used this trait (please input the hash of the coin that can be used this trait) "} />
                        </div>
                        <div className='text-center'>
                            <AddtraitField 
                            className={"text-gray-deep font-normal bg-gray-light w-[60%] border-2 border-gray-400 p-2 focus:outline-0"}
                            type={"text"} traitTitle={"Royalty Fee"}
                            traitDes={"add two Os to the percentage you want: ex. 10% -> input '1000' "} />
                        </div>
                        <div className='text-center flex flex-col justify-center items-center'>
                            <label className='font-gilroy-bold text-2xl text-gray-deep mb-1'> Description</label>
                            <textarea className='w-[60%] text-gray-deep font-normal bg-gray-light h-56 border-2 border-gray-400 p-2 focus:outline-0' />
                        </div>
                        <div className='text-center'>
                            <AddtraitField 
                            className={"text-gray-deep font-normal bg-gray-light w-[60%] border-2 border-gray-400 p-2 focus:outline-0"}
                            type={"text"} traitTitle={"Trait category"}
                            traitDes={"this is the category the trait will appear under in the trait shop front end (example: Clothing)"} />
                            <div className='mt-10 flex justify-center gap-3'>
                                <CustomBtn type={"submit"} btnText={"Add atribute"} className={"bg-gray-400 text-white px-5 py-2 text-lg font-bold rounded-md"}/>
                                <CustomBtn type={"reset"} btnText={"remove atribute"} className={"bg-gray-400 text-white px-5 py-2 text-lg font-bold rounded-md"}/>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-5'>
                            <div className='text-center'>
                                <AddtraitField 
                                className={"text-gray-deep font-normal bg-gray-light w-full border-2 border-gray-400 p-2 focus:outline-0"}
                                type={"text"} traitTitle={"Atribute name"} />
                            </div>
                            <div className='text-center'>
                                <AddtraitField 
                                className={"text-gray-deep font-normal bg-gray-light w-full border-2 border-gray-400 p-2 focus:outline-0"}
                                type={"text"} traitTitle={"Atribute value"} />
                            </div>
                            <div className='text-center'>
                                <AddtraitField 
                                className={"text-gray-deep font-normal bg-gray-light w-full border-2 border-gray-400 p-2 focus:outline-0"}
                                type={"text"} traitTitle={"Atribute name"} />
                            </div>
                            <div className='text-center'>
                                <AddtraitField 
                                className={"text-gray-deep font-normal bg-gray-light w-full border-2 border-gray-400 p-2 focus:outline-0"}
                                type={"text"} traitTitle={"Atribute value"} />
                            </div>
                        </div>
                        <div className='text-center'>
                            <CustomBtn className={"bg-red-deep text-white py-2 w-36 font-bold text-lg text-center rounded-md"} type={"submit"} btnText={"Create NFTs!"} />
                        </div>
                    </div>
                </from>
            </div>
        </section>
    </>
  )
}

export default AddTrait