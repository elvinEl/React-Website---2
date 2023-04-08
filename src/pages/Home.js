import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import Partners from "../components/partners/Partners";
import ProjectsImagesZoom from "../components/projects/ProjectsImagesZoom";
import Helmet from "react-helmet";
import { useTranslation } from "react-i18next";
import axios from "axios";

function Home() {

  const { t, i18n } = useTranslation();

  const [homeProducts, setHomeProducts] = useState([]);

  const [sliceElement] = useState(8);
  const slice = homeProducts.slice(0, sliceElement);


  useEffect(() => {
    async function fetchProducts() {
        const language = i18n.language;
        const response = await axios.get('http://192.168.0.130:8000/api/products', {
          headers: { 'Accept-Language': language },
        });
        setHomeProducts(response.data.data);
      }
  
      fetchProducts();
  }, [i18n.language]);

  return (
    <div>
      <Helmet>
        <title>Əsas Səhifə</title>
      </Helmet>

      <HeroSection />
      <div className="bg-[#f6f6f6] mt-[5rem]">
        <div>
          <div className="underline flex justify-center items-center">
            <span className="font-bold text-2xl mt-8">
              {t("YENİ MƏHSULLAR")}
            </span>
          </div>

          <div className=" grid grid-cols-4 cursor-pointer gap-6 mt-8 max-w-[80%] max-xl:grid-cols-3 max-xl:max-w-[80%] mx-auto max-lg:grid-cols-2 max-lg:max-w-[90%] max-md:grid-cols-1 max-md:max-w-[90%]">
            {Object.keys(slice).map((key) => (
              <Link
                className=""
                to={`products/${homeProducts[key].id.toString()}`}
              >
                <div className="box p-[35px 25px 25px]  py-[25px] bg-white relative shadow ">
                  <div className="flex justify-center items-center flex-col ">
                    <img
                      className="max-w-[100%] h-[155px] max-md:max-h-full"
                      src={homeProducts[key].image}
                      alt=""
                    />
                    <span className="mt-[2rem] font-bold text-[#3abff8]">
                      {homeProducts[key].title}
                    </span>
                    <p className="absolute -bottom-3 bg-[#3abff8] hover:bg-[#089ddd] transition-colors text-white px-14 py-1 font-semibold text-[12px] rounded">
                      {t("Ətraflı")}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center items-center mt-16 pb-8 ">
            <NavLink
              className="border-[1px] font-bold bg-[#3ABFF8] text-white px-3 py-4 rounded-[6px] text-[13px] "
              to="products"
            >
              {t("BÜTÜN MƏHSULLARA BAX")}
            </NavLink>
          </div>
        </div>
      </div>

      <ProjectsImagesZoom />

      <Partners />
    </div>
  );
}

export default Home;
