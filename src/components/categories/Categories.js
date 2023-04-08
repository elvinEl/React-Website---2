import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState([]);

  const {i18n} = useTranslation()

  useEffect(() => {
    async function fetchProducts() {
      const language = i18n.language;
      const response = await axios.get(
        "http://192.168.0.130:8000/api/categories",
        {
          headers: { "Accept-Language": language },
        }
      );
      setCategories(response.data.data);
    }
    fetchProducts();
  }, [i18n.language]);
 

  return (
    <div >
      
      <div className="grid cursor-pointer grid-cols-5 gap-4 max-xl:grid-cols-3  max-xl:w-full max-lg:grid-cols-2 max-md:grid-cols-1">
        {Object.keys(categories).map((key) => (
          <div className="bg-white flex justify-center items-center text-center hover:shadow-lg duration-500 shadow-xl " >
            <Link to={`categories/${categories[key].id}`}>
              <div className="flex flex-col justify-center items-center mt-3">
                <img className="w-[60px]" src={categories[key].image_desc} alt="" />
              <span className="font-bold text-center mb-3 mt-3 text-[13px]">
                {categories[key].name}
              </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
