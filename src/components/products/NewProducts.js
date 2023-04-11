import React from "react";
import { useState, useEffect } from "react";
import NewProductItem from "./NewProductItem";
import { Link, NavLink, useLocation } from "react-router-dom";
import {useTranslation} from 'react-i18next'
import axios from 'axios'

function NewProducts() {
  const [products, setProducts] = useState([]);

  const location = useLocation();

  const {t,i18n} = useTranslation()

  // PAGINATION
  const [noOfElement, setNoOfElement] = useState(4);
  const slice = products.slice(0, noOfElement);
  const loadMore = () => {
    setNoOfElement(noOfElement + noOfElement);
  };
  //


  // useEffect(() => {
  //   fetch("http://192.168.0.130:8000/api/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data.data));
  // }, []);

  useEffect(() => {
    async function fetchProducts() {
        const language = i18n.language;
        const response = await axios.get('http://192.168.31.32:8010/api/products', {
          headers: { 'Accept-Language': language },
        });
        setProducts(response.data.data);
      }
  
      fetchProducts();
  }, [i18n.language]);

  return (
    <div className="bg-[#f6f6f6] mt-[5rem]">
      <div>
        <div className="underline flex justify-center items-center ">
          {location.pathname == "/" ? (
            <span className="font-bold text-2xl mt-8">YENI MƏHSULLAR</span>
          ) : null}
        </div>
        <div className="grid grid-cols-4 cursor-pointer gap-6 mt-8 max-w-[95%] mx-auto max-xl:grid-cols-3  max-lg:grid-cols-2 max-lg:max-w-[90%] max-md:grid-cols-1 max-md:max-w-[90%]">
          {Object.keys(slice).map((key) => (
            <Link to={products[key].id}>
              <NewProductItem key={key} product={products[key]} />
            </Link>
          ))}
        </div>

        <div className="flex justify-center items-center mt-16 pb-8 ">
          {location.pathname == "/" ? (
            <NavLink
              className="border-[1px] px-5 py-5 text-[13px] font-medium"
              to="products"
            >
              BÜTÜN MƏHSULLARA BAX
            </NavLink>
          ) : null}

          {/* PAGINATION BUTTON */}
          <div className="flex justify-center items-center">
            <button className="btn btn-info  text-[13px] border-[1px] text-white flex justify-center items-center"  onClick={() => loadMore()}> 
            {t('DAHA ÇOX GÖR')}
            </button>
          </div>
            {/* // */}
        </div>
      </div>
    </div>
  );
}

export default NewProducts;
