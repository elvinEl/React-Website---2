import React from "react";
import Myform from '../components/connect/Myform'
import Helmet from 'react-helmet'
import { useTranslation } from "react-i18next";



function Connect() {
  const { t, i18n } = useTranslation();

  return (
    <div className="Connect">
  <Helmet>
    <title>Bizimlə Əlaqə</title>
  </Helmet>
      <div className="max-w-[70%] mt-40 mx-auto bg-[#f7f7f7] border rounded mb-12 max-md:max-w-full max-md:mt-0" >
        <span className="text-[30px] font-bold flex justify-center items-center pt-6 ">
          {t('Əlaqə')}
          
        </span>
        <div className="max-w-[95%] mx-auto">
          <div className="bg-white mt-8 mb-8 py-[16px] border rounded-[20px]"></div>
        </div>

        <div className="grid grid-cols-10 max-w-[95%]  mx-auto mt-16 mb-12 max-lg:block  ">
          <div className="col-span-4 bg-[#4d4c4b] text-white p-8 rounded-l-xl rounded max-h-[400px] max-lg:rounded">
            <div>
              <span className="font-semibold text-[22px]">{t('Əlaqə Nömrələri')} </span>
              <div className="text-white mt-4">
                <p>
                  <a href="tel:(+99470)2091646">(+99470)209-16-46</a>
                </p>
                <p>
                  <a href="tel:(+99455)2824800">(+99455)282-48-00</a>
                </p>
              </div>
            </div>

            <div className="mt-4">
              <span className="font-semibold text-[22px]">{t('E-mail')} </span>
              <div>
                <a href="mailto:raminmemmedzade@climat.az">huseynmammedzade@climat.az</a><br/>
                <a href="mailto:hr@climat.az">hr@climat.az</a><br/>
                <a href="mailto:info@climat.az">info@climat.az</a>
              </div>
            </div>

            <div className="mt-4" >
              <span className="font-semibold text-[22px]">{t('Ünvan')} </span>
              <div className="mt-2">
                <span>{t('Xırdalan şəhəri, Heydər Əliyev pr. 167 AAAF Park yaşayış massivi küçə 22 bina 11')} </span>
              </div>
            </div>
          </div>

          <div className="col-span-6 bg-white px-7 py-7 rounded-r-xl">
            <div >
            <span className="font-semibold text-[22px]" >{t('Əlaqə Formu')} </span>

            </div>

            <div className="grid grid-cols-3 mt-8 max-md:block gap-4">
              <Myform />
            </div>

            


          </div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1276.3406959257925!2d49.72401814003208!3d40.46050952040964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403085b0879d8753%3A0xbddd4c18bf1c06d7!2z0JDQkNCQ0KQg0J_QsNGA0Lo!5e0!3m2!1sru!2saz!4v1680878590804!5m2!1sru!2saz"
            width="100%"
            height="450"
            style={{ border: "0" }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
export default Connect;
