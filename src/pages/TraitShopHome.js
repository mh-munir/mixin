import React from 'react'
import CustomBtn from '../components/CustomBtn'
import Header from '../components/Header'
import TraitHeader from '../components/TraitHeader'
import {MdArrowRight} from 'react-icons/md';
import TraitThumbnail from '../components/TraitThumbnail';
import thumbnailImg from '../assets/img/thumbnail.png';
import { Link } from 'react-router-dom';

const TraitShopHome = () => {
  return (
    <>
      <Header />
      <TraitHeader />
      <section className='w-[94%] h-full bg-gray-light ml-auto py-[70px] mb-24'>
            <div className='w-[80%] ml-auto px-5'>
                <div className='mb-5'>
                    <CustomBtn className={"bg-gray-deep text-yellow flex items-start text-xl rounded-sm px-5 py-1"} awrrowSign={<MdArrowRight className='text-2xl leading-none'/>} btnText={"Add new"} />
                </div>
                <div className='max-w-4xl mr-auto mb-5 relative'>
                    <div className='flex items-center justify-between mb-2'>
                        <h2 className='text-gray-deep text-2xl font-bold'>Pending Traits</h2>
                        <Link className='text-gray-deep text-2xl font-normal italic' to="">See All</Link>
                    </div>
                    <div className='grid grid-cols-4 gap-5'>
                        <TraitThumbnail src={thumbnailImg} alt="Trait Thumbnail" to={"/"} />
                        <TraitThumbnail src={thumbnailImg} alt="Trait Thumbnail" to={"/"} />
                        <TraitThumbnail src={thumbnailImg} alt="Trait Thumbnail" to={"/"} />
                        <TraitThumbnail src={thumbnailImg} alt="Trait Thumbnail" to={"/"} />
                    </div>

                    <div className='absolute top-1/2 -right-24 -translate-y-1/2 flex gap-3'>
                        <span className='bg-red inline-block w-3 h-3 rounded-full'></span>
                        <span className='bg-red inline-block w-3 h-3 rounded-full'></span>
                        <span className='bg-red inline-block w-3 h-3 rounded-full'></span>
                    </div>

                </div>
                <div className='max-w-4xl mr-auto relative'>
                    <div className='flex items-center justify-between mb-2'>
                        <h2 className='text-gray-deep text-2xl font-bold'>created Traits</h2>
                        <Link className='text-gray-deep text-2xl font-normal italic' to="">See All</Link>
                    </div>
                    <div className='grid grid-cols-4 gap-5'>
                        <TraitThumbnail src={thumbnailImg} alt="Trait Thumbnail" to={"/"}/>
                        <TraitThumbnail src={thumbnailImg} alt="Trait Thumbnail" to={"/"}/>
                        <TraitThumbnail src={thumbnailImg} alt="Trait Thumbnail" to={"/"}/>
                        <TraitThumbnail src={thumbnailImg} alt="Trait Thumbnail" to={"/"}/>
                    </div>
                    <div className='absolute top-1/2 -right-24 -translate-y-1/2 flex gap-3'>
                        <span className='bg-red inline-block w-3 h-3 rounded-full'></span>
                        <span className='bg-red inline-block w-3 h-3 rounded-full'></span>
                        <span className='bg-red inline-block w-3 h-3 rounded-full'></span>
                    </div>
                </div>
            </div>
      </section>
    </>
  )
}

export default TraitShopHome