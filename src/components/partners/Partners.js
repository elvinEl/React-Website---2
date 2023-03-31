import React from 'react'
import PartnersItem from './PartnersItem'
import { useState, useEffect } from 'react'
import partnersData from '../../data/partners.json'



function Partners() {

  const [partners, setPartners] = useState([])

  useEffect(() => {
    setPartners(partnersData)
  })

  return (
    <div className='mt-[5rem] '>
      <div className='underline flex justify-center items-center' >
        <span className='font-bold text-2xl mt-8'>TƏRƏFDAŞLAR</span>
      </div>
      <div className='grid grid-cols-4 grid-rows-3 max-w-[80%] mx-auto gap-16 mt-[3rem] mb-[1rem] max-lg:grid-cols-3 max-md:grid-cols-2'>
        {partners.map(partner => <PartnersItem key={partner.id} partner={partner} />)}
      </div>
    </div>
  )
}

export default Partners