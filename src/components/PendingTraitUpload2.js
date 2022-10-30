import React from 'react'
import CustomBtn from './CustomBtn'
import Progress from './Progress'

const PendingTraitUpload1 = () => {
  return (
    <div>
        <ul className='relative flex justify-between items-start before:absolute before:w-[88%] before:h-[1px] before:bg-gray-300 before:left-1/2 before:-translate-x-1/2 before:top-5'>
            <li className='relative z-10 flex flex-col items-center justify-center text-center font-gilroy-bold text-lg leading-5 text-gray-deep gap-1'>
                <span className='inline-block w-10 h-10 rounded-full bg-yellow-light'></span> uploaded <br/> images</li>
            <li className='relative z-10 flex flex-col items-center justify-center text-center font-gilroy-bold text-lg leading-5 text-gray-deep gap-1'>
                <span className='inline-block w-10 h-10 rounded-full bg-yellow-light'></span> uploaded JSONs</li>
            <li className='relative z-10 flex flex-col items-center justify-center text-center font-gilroy-bold text-lg leading-5 text-gray-300 gap-1'>
                <span className='inline-block w-10 h-10 rounded-full bg-gray-300'></span> Found NFTs</li>
            <li className='relative z-10 flex flex-col items-center justify-center text-center font-gilroy-bold text-lg leading-5 text-gray-300 gap-1'>
                <span className='inline-block w-10 h-10 rounded-full bg-gray-300'></span> Create NFTs</li>
        </ul>

        <p className='max-w-xl font-gilroy-bold text-xl text-gray-deep mt-5'>
            Images and videos have already been uploaded and verified!
            Next step is to upload the JSONs with the metadata
        </p>
        <div className='mt-5 inline-block'>
            <CustomBtn className={"bg-gray-deep text-yellow-light px-3 text-sm font-semibold py-2 rounded-md"} type={"refresh"} btnText={"Refresh to check status"}/>
            <ul className='pl-5 py-3 pr-10 border-2 border-gray-300 mt-1 flex flex-col gap-2 mb-2'>
                <li className='font-bold text-[16px] text-gray-400'> Panding json uploads: <span>0/4</span></li>
                <li className='font-bold text-[16px] text-gray-400'> Successful json upload: <span>0/4</span></li>
                <li className='font-bold text-[16px] text-gray-400'> Amount left to upload: <span>0/4</span></li>
            </ul>
            <p className='max-w-md text-gray-400 text-sm'> The final JSONs have to confirm - click the refresh button to check again</p>
        </div>
        <div className="mt-10 flex flex-col gap-7">
            <Progress uploadedText={"Upload remaining JSONs (4 left to upload)"} done="90" />
        </div>
    </div>
  )
}

export default PendingTraitUpload1