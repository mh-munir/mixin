import React from 'react'
import BackLink from '../components/BackLink'
import BuilderHeader from '../components/BuilderHeader'
import Header from '../components/Header'
import BlockedTraits from '../components/BlockedTraits'



const EditBlockedTraits = () => {
  return (
    <>
    <Header />
        <section className='w-[94%] relative h-full bg-gray-light ml-auto min-h-[700px] py-10'>
            <BackLink className={"absolute top-5 left-5 text-xl font-bold text-gray-deep"} to={"/"}/>
            <BuilderHeader />
            <div className='w-[80%] ml-auto px-5'>
                <div className='max-w-5xl grid grid-cols-2 gap-10 p-5  items-center'>
                   <BlockedTraits/>
                    <p className='text-lg text-gray-400'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>
        </section>
    </>
  )
}

export default EditBlockedTraits