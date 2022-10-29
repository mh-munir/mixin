import React from 'react'
import BackLink from '../components/BackLink'
import BuilderHeader from '../components/BuilderHeader'
import CustomBtn from '../components/CustomBtn'
import Header from '../components/Header'


const EditBuilderConfig = () => {
  return (
    <>
    <Header />
        <section className='w-[94%] relative h-full bg-gray-light ml-auto min-h-[700px] py-16'>
            <BackLink className={"absolute top-5 left-5 text-xl font-bold text-gray-deep"} to={"/"}/>
            <BuilderHeader />
            <div className='w-[80%] ml-auto px-5'>
                <div className='max-w-3xl bg-gray-200 p-5 text-center'>
                        <h2 className='text-xl text-gray-deep font-gilroy-bold mb-10'>Builder configuration</h2>
                        <div className='mb-14'>
                            <CustomBtn className={"bg-red-light text-white py-2 px-6 rounded-md text-lg font-gilroy-bold"} btnText={"edit layer order"} />
                            <p className='text-xl text-gray-deep leading-8 mt-5'>This allows you to edit the default layer order of your trait.</p>
                        </div>
                        <div className='mb-14'>
                            <CustomBtn className={"bg-yellow-deep text-white py-2 px-6 rounded-md text-lg font-gilroy-bold"} btnText={"edit conflicts"} />
                            <p className='text-xl text-gray-deep leading-8 mt-5'>Conflicts allow you to put conditional on specific traits,
                                changing the layering order to ensure the network is always perfect.
                            </p>
                        </div>
                        <div className='mb-14'>
                            <CustomBtn className={"bg-yellow-light text-white py-2 px-6 rounded-md text-lg font-gilroy-bold"} btnText={"edit blockers"} />
                            <p className='text-xl text-gray-deep leading-8 mt-5'>Sometimes there are issues with trait combinations, this allows you to block off specific trait combinations. </p>
                        </div>
                </div>
            </div>
        </section>
    </>
  )
}


export default EditBuilderConfig