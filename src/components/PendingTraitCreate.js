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
                <li className='relative z-10 flex flex-col items-center justify-center text-center font-gilroy-bold text-lg leading-5 text-gray-deep gap-1'>
                    <span className='inline-block w-10 h-10 rounded-full bg-yellow-light'></span> Found NFTs</li>
                <li className='relative z-10 flex flex-col items-center justify-center text-center font-gilroy-bold text-lg leading-5 text-gray-300 gap-1'>
                    <span className='inline-block w-10 h-10 rounded-full bg-gray-300'></span> Create NFTs</li>
            </ul>

            <div className='mb-5'>
                <p className='font-gilroy-bold text-xl text-gray-deep mt-5'>JSONs have been uploaded and verified, we are now ready to create the NFTs</p>
                <p className='text-gray-400 text-sm'> The final JSONs have to confirm - click the refresh button to check again</p>
            </div>
            <div className='mt-5'>
                <p className='font-gilroy-bold text-gray-deep text-xl'>Pay below:</p>
                <CustomBtn className={"bg-black font-gilroy-bold text-yellow-light px-8 text-lg font-semibold py-1 rounded-md"} type={"refresh"} btnText={"Pay now"}/>
            </div>
            <div className='mb-5'>
                <p className='font-gilroy-bold text-xl text-gray-deep mt-5'>Click below to create NFTs!</p>
                <p className='text-gray-400 text-sm'> The final JSONs have to confirm - click the refresh button to check again</p>
            </div>
           <CustomBtn className={"bg-red-light font-gilroy-bold text-white px-10 text-lg font-semibold py-1 rounded-md"} type={"refresh"} btnText={"Create"}/>
            <div className="mt-10 flex flex-col gap-7">
                <Progress uploadedText={"Status bar (1/15 created)"} done="10" />
            </div>
        </div>
  )
}

export default PendingTraitUpload1