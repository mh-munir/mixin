import React from 'react';
import Header from '../components/Header';
import TraitHeader from '../components/TraitHeader';
import BackLink from '../components/BackLink';
import IndividualPendingTrait from '../components/IndividualPendingTrait';
import PendingTraitUpload1 from '../components/PendingTraitUpload1';
import PendingTraitImg from '../assets/img/thumbnail.png';

const PendingTrait = () => {
  return (
    <>
    <Header />
    <section className='w-[94%] relative h-full bg-gray-light ml-auto py-16'>
          <BackLink className={"absolute top-5 left-5 text-xl font-bold text-gray-deep"} to={"/"}/>
          <TraitHeader />
          <div className='w-[80%] ml-auto px-5'>
              <div className='max-w-6xl grid grid-cols-1-4 gap-5 mr-auto relative'>
                <IndividualPendingTrait 
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
                    />
                
                <div className='p-5 border-2 border-gray-300'>
                    <PendingTraitUpload1/>
                </div>
              </div>
          </div>
    </section>
  </>
  )
}

export default PendingTrait