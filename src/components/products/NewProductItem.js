import React from 'react'

export default function NewProductItem({ product }) {
    return (
        <div className='box p-[35px 25px 25px] px-[35px] py-[25px] bg-white relative '>
            <div className='flex justify-center items-center flex-col '>
            <img className='max-w-[100%] ' src={product.img} alt="" />
            <span className='mt-[2rem] font-bold'>{product.title}</span>
            <p className='absolute -bottom-3 bg-[#bb0000] hover:bg-[#a40404] transition-colors text-white px-14 py-1 font-semibold text-[12px] rounded'>Ətraflı</p>
            </div>
        </div>
    )
}
