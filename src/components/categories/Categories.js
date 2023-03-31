import React from 'react'
import { useState, useEffect } from 'react'
import CategoryItem from './CategoryItem'
import categoriesData from '../../data/categories.json'

function Categories() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        setCategories(categoriesData)
    })

    return (
        <div className='grid cursor-pointer grid-cols-5 gap-4 max-lg:grid-cols-2  max-md:grid-cols-1'>
            {categories.map(category => <CategoryItem key={category.id} category={category} />)}
        </div>
    )
}

export default Categories