import React from 'react'
import { Link } from 'react-router-dom'

export default function NewProductItem({ product }) {
    return (
        <Link to={product.id.toString()}>
        <div className='box p-[35px 25px 25px]  py-[25px] bg-white relative shadow '>
            <div className='flex justify-center items-center flex-col '>
            <img className='max-w-[100%]  h-[150px] max-md:max-h-full' src={product.image} alt="" />
            <span className='mt-[2rem] font-bold text-red-700'>{product.title}</span>
            <p className='absolute -bottom-3 bg-[#bb0000] hover:bg-[#a40404] transition-colors text-white px-14 py-1 font-semibold text-[12px] rounded'>Ətraflı</p>
            </div>
        </div>
        </Link>
        
    )
}
