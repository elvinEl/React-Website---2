import React from 'react'

export default function CategoryItem({ category }) {
    return (
        <div className='box bg-white px-5 py-5 hover:shadow-lg duration-500 shadow-xl '>
            <div className='flex justify-center items-center flex-col'>
                <img className='w-[60px]' src={category.img} alt="" />
                <span className='font-bold text-center'>{category.title}</span>
            </div>
        </div>
    )
}
