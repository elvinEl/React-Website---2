import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";

export default function NewProductItem({ product }) {
  const { t, i18n } = useTranslation();

    return (
        <Link to={product.id.toString()}>
        <div className='box p-[35px 25px 25px]  py-[25px] bg-white relative shadow '>
            <div className='flex justify-center items-center flex-col '>
            <img className='max-w-[100%]  h-[150px] max-md:max-h-full' src={product.image} alt="" />
            <p className='mt-[2rem] font-bold line-clamp-1 text-[#3abff8]'>{product.title}</p>
            <p className='absolute -bottom-3 bg-[#3abff8] hover:bg-[#089ddd] transition-colors text-white px-14 py-1 font-semibold text-[12px] rounded'>
                {t('Ətraflı')}
                </p>
            </div>
        </div>
        </Link>
        
    )
}
