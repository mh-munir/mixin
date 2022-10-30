import React from 'react'
import CustomBtn from './CustomBtn'
import Progress from './Progress'

const PendingTraitUpload1 = () => {
  return (
    <div>
        <ul className='relative flex justify-between items-start before:absolute before:w-[88%] before:h-[1px] before:bg-gray-300 before:left-1/2 before:-translate-x-1/2 before:top-5'>
            <li className='relative z-10 flex flex-col items-center justify-center text-center font-gilroy-bold text-lg leading-5 text-gray-deep gap-1'>
                <span className='inline-block w-10 h-10 rounded-full bg-yellow-light'></span> uploaded <br/> images</li>
            <li className='relative z-10 flex flex-col items-center justify-center text-center font-gilroy-bold text-lg leading-5 text-gray-300 gap-1'>
                <span className='inline-block w-10 h-10 rounded-full bg-gray-300'></span> uploaded JSONs</li>
            <li className='relative z-10 flex flex-col items-center justify-center text-center font-gilroy-bold text-lg leading-5 text-gray-300 gap-1'>
                <span className='inline-block w-10 h-10 rounded-full bg-gray-300'></span> Found NFTs</li>
            <li className='relative z-10 flex flex-col items-center justify-center text-center font-gilroy-bold text-lg leading-5 text-gray-300 gap-1'>
                <span className='inline-block w-10 h-10 rounded-full bg-gray-300'></span> Create NFTs</li>
        </ul>

        <p className='font-gilroy-bold text-xl text-gray-deep mt-5'>This page is to upload the images and videos to arweave</p>
        <div className='mt-5 inline-block'>
            <CustomBtn className={"bg-gray-deep text-yellow-light px-3 text-sm font-semibold py-2 rounded-md"} type={"refresh"} btnText={"Refresh to check status"}/>
            <ul className='pl-5 py-3 pr-10 border-2 border-gray-300 mt-1 flex flex-col gap-2'>
                <li className='font-bold text-[16px] text-gray-400'> Panding image uploads: <span>4</span></li>
                <li className='font-bold text-[16px] text-gray-400'> Panding Video uploads: <span>0</span></li>
                <li className='font-bold text-[16px] text-gray-400'> Successful image upload: <span>0/4</span></li>
                <li className='font-bold text-[16px] text-gray-400'> Successful video upload: <span>0/4</span></li>
            </ul>
        </div>
        <div className="mt-10 flex flex-col gap-7">
            <Progress uploadedText={"Uploaded images (0 left to upload)"} done="90" />
            <Progress uploadedText={"Uploaded videos (0 left to upload)"} done="60" />
        </div>
    </div>
  )
}

export default PendingTraitUpload1