import React from 'react';
import Header from '../components/Header';
import TraitHeader from '../components/TraitHeader';
import BackLink from '../components/BackLink';
import TraitsFiltering from '../components/TraitsFiltering';
import PendingTraitImg from '../assets/img/thumbnail.png';
import CreatedTraitsLiveScroll from '../components/CreatedTraitsLiveScroll';
import CreatedTraitsArchivedScroll from '../components/CreatedTraitsArchivedScroll';

const CreatedTraits = () => {
  return (
    <>
    <Header />
    <section className='w-[94%] relative h-full bg-gray-light ml-auto py-16'>
          <BackLink className={"absolute top-5 left-5 text-xl font-bold text-gray-deep"} to={"/"}/>
          <TraitHeader />
          <div className='w-[80%] ml-auto px-5'>
              <div className='max-w-3xl ml-24 mr-auto relative'>
                <TraitsFiltering className={"mb-5 max-w-2xl"}/>
                  <div className='grid grid-cols-3 gap-10'>
                    <CreatedTraitsLiveScroll 
                      src={PendingTraitImg} 
                      alt="Pending Trait Scroll"
                      traitNmaeTitle={"Trait Name:"}
                      traitNmae={"SAC Button Down"}
                      traitSupply={"TraitSupply:"}
                      traitSupplyStats={"15"}
                      traitAmount={"Trait Amount:"}
                      traitAmountStats={"0"}
                      to={"/createdtrait"}
                      traitbtnText={"Archive Trait"}
                      traitText={"These are the non live traits"}
                    />
                    <CreatedTraitsLiveScroll 
                      src={PendingTraitImg} 
                      alt="Pending Trait Scroll"
                      traitNmaeTitle={"Trait Name:"}
                      traitNmae={"SAC Button Down"}
                      traitSupply={"TraitSupply:"}
                      traitSupplyStats={"15"}
                      traitAmount={"Trait Amount:"}
                      traitAmountStats={"0"}
                      to={"/createdtrait"}
                      traitbtnText={"Archive Trait"}
                      traitText={"These are the non live traits"}
                    />
                    <CreatedTraitsArchivedScroll
                      src={PendingTraitImg} 
                      alt="Pending Trait Scroll"
                      traitNmaeTitle={"Trait Name:"}
                      traitNmae={"SAC Button Down"}
                      traitSupply={"TraitSupply:"}
                      traitSupplyStats={"15"}
                      traitAmount={"Trait Amount:"}
                      traitAmountStats={"0"}
                      to={"/createdtrait"}
                      traitbtnText={"Push Live"}
                      traitText={"These are the non live traits"}
                    />
                    <CreatedTraitsLiveScroll 
                      src={PendingTraitImg} 
                      alt="Pending Trait Scroll"
                      traitNmaeTitle={"Trait Name:"}
                      traitNmae={"SAC Button Down"}
                      traitSupply={"TraitSupply:"}
                      traitSupplyStats={"15"}
                      traitAmount={"Trait Amount:"}
                      traitAmountStats={"0"}
                      to={"/pendingtrait"}
                      traitbtnText={"Archive Trait"}
                      traitText={"These are the non live traits"}
                    />
                    <CreatedTraitsLiveScroll 
                      src={PendingTraitImg} 
                      alt="Pending Trait Scroll"
                      traitNmaeTitle={"Trait Name:"}
                      traitNmae={"SAC Button Down"}
                      traitSupply={"TraitSupply:"}
                      traitSupplyStats={"15"}
                      traitAmount={"Trait Amount:"}
                      traitAmountStats={"0"}
                      to={"/pendingtrait"}
                      traitbtnText={"Archive Trait"}
                      traitText={"These are the non live traits"}
                    />
                    <CreatedTraitsArchivedScroll
                      src={PendingTraitImg} 
                      alt="Pending Trait Scroll"
                      traitNmaeTitle={"Trait Name:"}
                      traitNmae={"SAC Button Down"}
                      traitSupply={"TraitSupply:"}
                      traitSupplyStats={"15"}
                      traitAmount={"Trait Amount:"}
                      traitAmountStats={"0"}
                      to={"/pendingtrait"}
                      traitbtnText={"Push Live"}
                      traitText={"These are the non live traits"}
                    />
                    <CreatedTraitsLiveScroll 
                      src={PendingTraitImg} 
                      alt="Pending Trait Scroll"
                      traitNmaeTitle={"Trait Name:"}
                      traitNmae={"SAC Button Down"}
                      traitSupply={"TraitSupply:"}
                      traitSupplyStats={"15"}
                      traitAmount={"Trait Amount:"}
                      traitAmountStats={"0"}
                      to={"/pendingtrait"}
                      traitbtnText={"Archive Trait"}
                      traitText={"These are the non live traits"}
                    />
                    <CreatedTraitsLiveScroll 
                      src={PendingTraitImg} 
                      alt="Pending Trait Scroll"
                      traitNmaeTitle={"Trait Name:"}
                      traitNmae={"SAC Button Down"}
                      traitSupply={"TraitSupply:"}
                      traitSupplyStats={"15"}
                      traitAmount={"Trait Amount:"}
                      traitAmountStats={"0"}
                      to={"/pendingtrait"}
                      traitbtnText={"Archive Trait"}
                      traitText={"These are the non live traits"}
                    />
                    <CreatedTraitsArchivedScroll
                      src={PendingTraitImg} 
                      alt="Pending Trait Scroll"
                      traitNmaeTitle={"Trait Name:"}
                      traitNmae={"SAC Button Down"}
                      traitSupply={"TraitSupply:"}
                      traitSupplyStats={"15"}
                      traitAmount={"Trait Amount:"}
                      traitAmountStats={"0"}
                      to={"/pendingtrait"}
                      traitbtnText={"Push Live"}
                      traitText={"These are the non live traits"}
                    />
                  </div>
              </div>
          </div>
    </section>
    </>
  )
}

export default CreatedTraits