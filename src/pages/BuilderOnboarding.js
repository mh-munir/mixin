import React from 'react'
import BackLink from '../components/BackLink'
import Header from '../components/Header'
import Header2 from '../components/Header2'
import AddtraitField from '../components/AddtraitField'
import CustomBtn from '../components/CustomBtn'

const BuilderOnboarding = () => {
  return (
    <>
    <Header />
    <section className='w-[94%] relative h-full bg-gray-light ml-auto min-h-[700px] py-16'>
          <BackLink className={"absolute top-5 left-5 text-xl font-bold text-gray-deep"} to={"/"}/>
          <Header2 />
          <div className='w-[80%] ml-auto px-5'>
              <div className='max-w-xl mr-auto items-start relative'>
                    <div className='mb-16'>
                        <h2 className='text-xl font-gilroy-bold text-gray-deep mb-2'>Upload Images</h2>
                        <p className='text-lg text-gray-deep leading-5'>
                            Get started with the by uploading zip file with your trait (your zip file must contain the trait 
                            in the category layers they belong in.)
                        </p>
                        <AddtraitField accept={"file"} className={"text-gray-deep font-bold mt-5"} type={"file"} />
                    </div>
                    <div>
                        <p className='text-lg text-gray-deep leading-5'>
                            Get started with the by uploading zip file with your trait (your zip file must contain the trait 
                            in the category layers they belong in.)
                        </p>
                        <CustomBtn 
                            className={"bg-black text-white text-lg px-7 font-gilroy-bold py-1 mt-5 rounded-md"} 
                            type={"button"} 
                            btnText={"Download"}/>
                    </div>
              </div>
          </div>
    </section>
  </>
  )
}

export default BuilderOnboarding