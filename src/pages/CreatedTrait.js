import React, {useState} from 'react';
import Header from '../components/Header';
import TraitHeader from '../components/TraitHeader';
import BackLink from '../components/BackLink';
import IndividualCreatedTrait from '../components/IndividualCreatedTrait';
import PendingTraitImg from '../assets/img/thumbnail.png';
import { IoMdArrowDropright } from 'react-icons/io';
// import EditCreatedTrait from '../components/EditCreatedTrait';
import ReadyToPurchaseBox from '../components/ReadyToPurchaseBox';
import PurchasedBox from '../components/PurchasedBox';

const CreatedTrait = () => {
  const [statusField, setStatusField] = useState('');
  const [statusArrow, setstatusArrow] = useState(false);
  
  const [status,setStatus] = useState('')

  const onClickstatus = event => {
    setStatusField(current => !current);
    setstatusArrow(current => !current);
  };
 const onChangestatus = (e)=>{
    setStatus(e.target.innerText)
   };
  return (
    <>
    <Header />
    <section className='w-[94%] relative h-full bg-gray-light ml-auto py-16'>
          <BackLink className={"absolute top-5 left-5 text-xl font-bold text-gray-deep"} to={"/"}/>
          <TraitHeader />
          <div className='w-[85%] ml-auto px-5'>
              <div className='max-w-7xl grid grid-cols-1-5 gap-5 mx-auto items-start relative'>
                <IndividualCreatedTrait 
                    src={PendingTraitImg}
                    alt="Pending Trait Individual"
                    traitNmaeTitle={"Trait Name:"}
                    traitNmae={"SAC Button Down"}
                    traitId={"Trait ID"}
                    traitIdNum={"4"}
                    traitSupply={"TraitSupply:"}
                    traitSupplyStats={"15"}
                    traitAmount={"Amount purchased:"}
                    traitAmountStats={"0"}
                    traitleftAmount={"Left Amount"}
                    traitleftAmountStats={"15"}
                    clild={(<div>
                      <p className='flex items-center text-xs text-gray-deep font-bold'><IoMdArrowDropright className='text-yellow-light text-lg'/> Filter by NFT hash </p>
                      <input type='text' className='border font-bold border-gray-400 w-full bg-gray-light focus:outline-none p-[2px]' />
                    </div>)}
                    />
                
                <div>
                    <div className='max-w-[220px] flex flex-col relative mb-5'>
                      <label className='text-lg text-gray-deep font-gilroy-bold'>filter by Status</label>
                      <div onClick={onClickstatus} className="bg-gray-400 relative font-bold text-[16px] px-2 
                          uppercase cursor-pointer text-white w-full h-8 leading-8">
                          {status}
                          <span className={ ` text-white absolute top-0 right-2 ${statusArrow && 'rotate-180'}` }>⮟</span>
                      </div>
                      {statusField && (
                          <ul className="absolute w-full top-[103%] flex flex-col gap-[2px]" onClick={onClickstatus}>
                              <li onClick={(e)=>onChangestatus(e)} className="bg-gray-400 text-[16px] font-bold uppercase hover:bg-gray-deep cursor-pointer text-white hover:text-yellow-light px-2 py-[2px]">Option1</li>
                              <li onClick={(e)=>onChangestatus(e)} className="bg-gray-400 text-[16px] font-bold uppercase hover:bg-gray-deep cursor-pointer text-white hover:text-yellow-light px-2 py-[2px]">Option2</li>
                              <li onClick={(e)=>onChangestatus(e)} className="bg-gray-400 text-[16px] font-bold uppercase hover:bg-gray-deep cursor-pointer text-white hover:text-yellow-light px-2 py-[2px]">Option3</li>
                          </ul>
                      )}
                    </div>


                  <div className='grid grid-cols-4 gap-2'>
                    <ReadyToPurchaseBox 
                      title={"NFT Hash:"}
                      des={"AvywJh YvuvPAkPmC6u AvywJh YvuvPAkPmC6u AvywJh YvuvPAkPmC6u"}
                      price={"Current price:"} 
                      ammout={"300"}
                      currency={"purchasing Currency:"}
                      currencyType={"0TK"}
                    />
                    <ReadyToPurchaseBox 
                      title={"NFT Hash:"}
                      des={"AvywJh YvuvPAkPmC6u AvywJh YvuvPAkPmC6u AvywJh YvuvPAkPmC6u"}
                      idTitle={"Transaction ID:"}
                      idDes={"AvywJh YvuvPAkPmC6u AvywJh YvuvPAkPmC6u AvywJh YvuvPAkPmC6u"}
                    />
                    <PurchasedBox 
                      title={"NFT Hash:"}
                      des={"AvywJh YvuvPAkPmC6u AvywJh YvuvPAkPmC6u AvywJh YvuvPAkPmC6u"}
                      price={"Current price:"} 
                      ammout={"300"}
                      currency={"purchasing Currency:"}
                      currencyType={"0TK"}
                    />
                    <PurchasedBox 
                      title={"NFT Hash:"}
                      des={"AvywJh YvuvPAkPmC6u AvywJh YvuvPAkPmC6u AvywJh YvuvPAkPmC6u"}
                      idTitle={"Transaction ID:"}
                      idDes={"AvywJh YvuvPAkPmC6u AvywJh YvuvPAkPmC6u AvywJh YvuvPAkPmC6u"}
                    />
                   
                  </div>

                </div>
              </div>
          </div>
    </section>
    </>
  )
}

export default CreatedTrait