import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Partners from "../partners/Partners";

function NewProductsDetails() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("http://192.168.0.130/api/products/" + id)
      .then((res) => res.json())
      .then((data) => setProduct(data.data));
  }, []);

  return (
    <>
     
        <div className="max-w-[70%] mx-auto mt-40 bg-[#f7f7f7] border rounded max-lg:max-w-full max-lg:mt-0 ">
          <span className="text-[30px] font-bold flex justify-center items-center pt-6">
            {product.title}
          </span>
          <div className="max-w-[95%] mx-auto">
            <div className="bg-white mt-8 mb-8 py-[16px] border rounded-[20px]"></div>
            <div className="flex justify-center items-center rounded">
              <img src={product.image} alt="" />
            </div>
            <div className="mt-4 mb-4">
              <span className="font-light" dangerouslySetInnerHTML={{__html:product.description}}></span>
            </div>
          </div>
        </div>
        <Partners/>
    </>
  );
}

export default NewProductsDetails;
