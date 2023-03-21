import React from 'react'
import { useState, useEffect } from 'react'
import NewProductItem from './NewProductItem'
import NewProductData from '../../data/products.json'
import {NavLink} from 'react-router-dom'

function NewProducts() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(NewProductData)
    })

    return (
        <div className='bg-[#f6f6f6] mt-[5rem]'>

            <div >
                <div className='underline flex justify-center items-center'>
                    <span className='font-bold text-2xl mt-8'>YENI MƏHSULLAR</span>
                </div>

                <div className=' grid grid-cols-4 cursor-pointer gap-6 mt-8 max-w-[80%] mx-auto max-lg:grid-cols-2 max-lg:max-w-[90%] max-md:grid-cols-1 max-md:max-w-[90%]'>
                    {products.map(product => <NewProductItem key={product.id} product={product} />)}
                </div>
                <div className='flex justify-center items-center mt-16 pb-8 '>
                    <NavLink className='border-[1px] px-5 py-5 text-[13px] font-medium' to='products'>BÜTÜN MƏHSULLARA BAX</NavLink>
                </div>
            </div>


        </div>
    )
}

export default NewProducts