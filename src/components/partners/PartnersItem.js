import React from 'react'

export default function PartnersItem({ partner }) {
    return (
        <div className=' flex justify-center items-center opacity-40 hover:opacity-100 duration-500 hover:scale-150'>
            <img className='max-w-[150px]  max-md:max-w-[100px]  ' src={partner.img} alt="" />
        </div>
    )
}
