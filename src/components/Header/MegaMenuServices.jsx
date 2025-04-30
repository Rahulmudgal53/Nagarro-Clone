import React from 'react'
import MegaMenuWrapper from './MegaMenuWrapper'
import TextBtnCard from '../../utils/TextBtnCard'
import { services } from '../../constants/ListItems'

function MegaMenuServices() {
  return (
    <MegaMenuWrapper className='grid-cols-4'>

        <TextBtnCard title={'services'} description={'A holistic approach that accelerates your current vision while also making you future-proof. We help you face the future fluidically.'}/>
        <div className='col-span-3 grid grid-cols-3 border-l border-gray-300 pl-4'>
        {
            services.map((item,index)=>(
                <TextBtnCard key={index} title={item.title} description={item.description} button={{text:'View all services',link:`/services/${item.title}`}}/>
            ))
        }
        </div>

    </MegaMenuWrapper>
  )
}

export default MegaMenuServices