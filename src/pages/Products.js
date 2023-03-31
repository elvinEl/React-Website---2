import React from "react";
import Partners from "../components/partners/Partners";
import NewProducts from "../components/products/NewProducts";
import Helmet from 'react-helmet'

function Products() {
  return (
    <>
    <Helmet>
      <title>Məhsullar</title>
    </Helmet>
      <div className="max-w-[70%] mt-40 mx-auto bg-[#f7f7f7] border rounded max-lg:max-w-full max-lg:mt-0">
        <span className="text-[30px] font-bold flex justify-center items-center pt-6 ">
          Məhsullar
        </span>

        <div className="max-w-[95%] mx-auto">
          <div className="bg-white mt-8 mb-8 py-[16px] border rounded-[20px]"></div>
          <NewProducts />
        </div>
      </div>
      <Partners />
    </>
  );
}

export default Products;
