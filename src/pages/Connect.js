import React from "react";
import Myform from "../components/Myform";
import Helmet from 'react-helmet'


function Connect() {
  return (
    <div className="Connect">
  <Helmet>
    <title>Bizimlə Əlaqə</title>
  </Helmet>
      <div className="max-w-[70%] mt-40 mx-auto bg-[#f7f7f7] border rounded mb-12 max-md:max-w-full max-md:mt-0" >
        <span className="text-[30px] font-bold flex justify-center items-center pt-6 ">
          Əlaqə
        </span>
        <div className="max-w-[95%] mx-auto">
          <div className="bg-white mt-8 mb-8 py-[16px] border rounded-[20px]"></div>
        </div>

        <div className="grid grid-cols-10 max-w-[95%]  mx-auto mt-16 mb-12 max-lg:block  ">
          <div className="col-span-4 bg-[#4d4c4b] text-white p-8 rounded-l-xl rounded max-h-[380px] max-lg:rounded">
            <div>
              <span className="font-semibold text-[22px]">Əlaqə nömrələri</span>
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
              <span className="font-semibold text-[22px]">E-mail</span>
              <div className="mt-2">
                <a href="mailto:raminmemmedzade@climat.az">raminmemmedzade@climat.az</a><br/>
                <a href="mailto:hr@climat.az">hr@climat.az</a><br/>
                <a href="mailto:info@climat.az">info@climat.az</a>
              </div>
            </div>

            <div className="mt-4" >
              <span className="font-semibold text-[22px]">Ünvan</span>
              <div className="mt-2">
                <span>507-511 İsmayıl bəy Qutqaşınlı, Bakı</span>
              </div>
            </div>
          </div>

          <div className="col-span-6 bg-white px-7 py-7 rounded-r-xl">
            <div >
            <span className="font-semibold text-[22px]" >Əlaqə Formu</span>

            </div>

            <div className="grid grid-cols-3 mt-8 max-md:block gap-4">
              <Myform />
            </div>

            


          </div>
        </div>

        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12159.336398383248!2d49.82100290986404!3d40.36820277564172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dc5db2da509%3A0x8cc1c152888dcd4b!2z0JDQu9GC0LXRgSDQn9C70LDQt9Cw!5e0!3m2!1sru!2saz!4v1679318611005!5m2!1sru!2saz"
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
