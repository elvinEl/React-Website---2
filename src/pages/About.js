import React from "react";
import Partners from "../components/partners/Partners";
import Zoom from "../components/photo-zoom/Zoom";
import Helmet from "react-helmet";
import {BsFillBuildingFill} from 'react-icons/bs'
import {FaHandshake} from 'react-icons/fa'
import {ImCheckmark} from 'react-icons/im'

function About() {
  return (
    <>
      <Helmet>
        <title>Şirkət Haqqında</title>
      </Helmet>

      <div className="max-w-[70%] mt-40 mx-auto bg-[#f7f7f7] border rounded max-lg:max-w-full max-lg:mt-0">
        <span className="text-[30px] font-bold flex justify-center items-center pt-6 ">
          Şirkət Haqqında
        </span>

        <div className="max-w-[95%] mx-auto">
          <div className="bg-white mt-8 mb-8 py-[16px] border rounded-[20px]"></div>

          <div className="flex justify-center items-center mb-8">
            <img
              className="max-h-[130px]"
              src="./assets/logo/logo.jpg"
              alt=""
            />
          </div>

          <div className="bg-white p-[40px] border-l-4 border-yellow-300 text-start rounded font-light">
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </span>
          </div>
          <br />
          <br />

          <div>
            <span className="font-light">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
              <br />
              <br />
              Bütün bunlardan başqa şirkətimiz isitmə, soyutma, havalandırma, su
              və kanalizasiya sistemlərini, server otaqlarının soyudulması
              sistemlərini dünyanın tanınmış markalarını Azərbaycanda satışı və
              təminatçısı kimi də fəaliyyət göstərir. Təmin etdiyimiz
              avadanlıqların keyfiyyətinə tam zəmanət verilir və verilmiş
              sifarişlərin çatdırılma müddətinə və qiymətlərinə görə
              rəqiblərimizdən hər zaman bir addım öndə olduğumuzu təcrübəmizə
              əsaslanaraq tam əminliklə deyə bilərik.
              <br />
              <br />
              Fəaliyyət göstərdiyimiz müddətdə Azərbaycan Respublikasının bir
              çox dövlət və özəl layihələrinə imza atmışıq. Başa vurduğumuz
              layihələrin bir qismi aşağıdakılardan ibarətdir:
            </span>
          </div>

          <div className="mt-[2rem] mb-[2rem]">
            <span className="flex justify-center items-center text-[30px] font-black">
              ÜSTÜNLÜKLƏRİMİZ
            </span>
            <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
              <div>
                <div className="flex justify-center items-center text-[40px] mt-3">
                <BsFillBuildingFill/>
                </div>
                <span className="flex justify-center items-center font-black mt-3 mb-3">İLLƏRİN TƏCRÜBƏSİ</span>
                <p className="font-light">
                Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. 
                </p>
              </div>
              <div>
              <div className="flex justify-center items-center text-[40px] mt-3">
            <FaHandshake/>
                </div>
                <span className="flex justify-center items-center font-black mt-3 mb-3">MÜŞTƏRİLƏRİN ETİBARI</span>
                <p className="font-light">Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. </p>
              </div>
              <div>
              <div className="flex justify-center items-center text-[40px] mt-3">
           <ImCheckmark/>
                </div>
                <span className="flex justify-center items-center font-black mt-3 mb-3">SƏRFƏLİ QİYMƏT</span>
                <p className="font-light">
                Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. 
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white flex flex-col justify-center items-center p-6 max-w-[95%] mx-auto border-l-yellow-300 border-l-[4px] ">
          <span className="flex justify-center items-center font-bold text-[20px]">
            SERTIFKATLAR
          </span>
          <Zoom />
        </div>
      </div>
      <Partners />
    </>
  );
}

export default About;
