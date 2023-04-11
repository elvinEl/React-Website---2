import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {useTranslation} from 'react-i18next'

function CategoryDetails() {

  const [categoryDetails, setCategoryDetails] = useState([]);
  const {i18n} = useTranslation()
  
  const { id } = useParams();

  useEffect(() => {
    async function fetchProducts() {
        const language = i18n.language;
        const response = await axios.get('http://192.168.31.32:8010/api/categories/'+id, {
          headers: { 'Accept-Language': language },
        });
        setCategoryDetails(response.data.data);
      }
  
      fetchProducts();
  }, [i18n.language]);

  return (
    <div>
        <div className="max-w-[70%] mx-auto mt-40 mb-[5rem] bg-[#f7f7f7] border rounded max-lg:max-w-full max-lg:mt-0 ">
          <span className="text-[30px] font-bold flex justify-center items-center pt-6">
            {categoryDetails.name}
          </span>
          <div className="max-w-[95%] mx-auto">
            <div className="bg-white mt-8 mb-8 py-[16px] border rounded-[20px]"></div>
            <div className="flex justify-center items-center rounded">
              <img src={categoryDetails.image} alt="" />
            </div>
            <div className='mt-[2rem] mb-[2rem]'>
              <span className='font-light'>
                {categoryDetails.description}
              </span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CategoryDetails