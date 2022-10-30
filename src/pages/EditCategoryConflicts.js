import React from 'react'
import BackLink from '../components/BackLink'
import BuilderHeader from '../components/BuilderHeader'
import Header from '../components/Header'
import CategoryConflicts from '../components/CategoryConflicts'
import CustomBtn from '../components/CustomBtn'


const EditCategoryConflicts = () => {
  return (
    <>
    <Header />
        <section className='w-[94%] relative h-full bg-gray-light ml-auto min-h-[700px] py-16'>
            <BackLink className={"absolute top-5 left-5 text-xl font-bold text-gray-deep"} to={"/"}/>
            <BuilderHeader />
            <div className='w-[80%] ml-auto px-5'>
                <div className='max-w-4xl grid grid-cols-2 gap-10 p-5  items-center'>
                    <CategoryConflicts 
                        title={"Category Conflicts"}
                        des={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
                        child={(
                        <div className='mt-5'>
                            <div className='mb-10'>
                                <div className='max-w-[250px] text-white uppercase font-bold mx-auto border-2 border-yellow-deep bg-gray-400 py-[2px] px-8'>Earing conflicts - 1</div>
                                <div className='mt-2'>
                                    <CustomBtn className={"border border-gray-400 w-28 rounded-md text-sm font-gilroy-bold text-gray-400 py-1 mr-2"} btnText={"edit!"} />
                                    <CustomBtn className={"border border-gray-400 w-28 rounded-md text-sm font-gilroy-bold text-gray-400 py-1"} btnText={"delete!"}/>
                                </div>
                            </div>
                            <div>
                                <div className='max-w-[250px] text-white uppercase font-bold mx-auto border-2 border-gray-400 bg-gray-400 py-[2px] px-8'>Mouth conflicts - 2</div>
                                <div className='mt-2'>
                                    <CustomBtn className={"border border-gray-400 w-28 rounded-md text-sm font-gilroy-bold text-gray-400 py-1 mr-2"} btnText={"edit!"} />
                                    <CustomBtn className={"border border-gray-400 w-28 rounded-md text-sm font-gilroy-bold text-gray-400 py-1"} btnText={"delete!"}/>
                                </div>
                            </div>
                        </div>
                        )}
                    />
                    <p className='text-lg text-gray-400'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>
        </section>
    </>
  )
}

export default EditCategoryConflicts