import React from "react";
import Partners from "../components/partners/Partners";
import Zoom from "../components/photo-zoom/Zoom";
import Helmet from "react-helmet";
import { BsFillBuildingFill } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { ImCheckmark } from "react-icons/im";
import { useTranslation } from "react-i18next";

function About() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Şirkət Haqqında</title>
      </Helmet>

      <div className="max-w-[70%] mt-40 mx-auto bg-[#f7f7f7] border rounded max-lg:max-w-full max-lg:mt-0">
        <span className="text-[30px] font-bold flex justify-center items-center pt-6 ">
          {t("Haqqımızda")}
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
              {t('RM TECHNIC MMC - Şirkətimiz Mərkəzi Havalandırma, İsitmə və Soyutma, Qazanxana, Nasosxana,Buxarlı isitmə və soyutma, Su-Kanalizasiya, Tüstüsovurma, SuluYanğınsöndürmə (Spirkler) Sistemləri, Yüksək və alçaq gərginliklielektrik sistemləri, Yanğın xəbərdarlıq sistemləri və Avtomatik idarəetmə sistemlərinin layihələndirilməsi, montajı və servisi üzrə ixtisaslaşmışdır. Bu gün də şirkətimiz göstərdiyi xidmət sahələrini genişləndirir və daim inkişaf edərək fəaliyyətini davam etdirir. Yarandığı dövrdən etibarən daim böyük layihələrə imza atmış  RM TECHNIC MMC nin komanda və işçi qrupları öz sahələri üzrə yüksək ixtisaslaşmış və 10 ildən çox təcrübəyə malik mütəxəssislərdən ibarətdir. Bununla yanaşı, şirkətimizin nümayəndələri öz fəaliyyəti dövründə keçirilən beynəlxalq və yerli təlimlərdə iştirak edib ən son texnogiyalarla və yeniliklərlə tanış olur, onları mövcud və gələcək işlərində tətbiq edirlər. RM TECHNIC MMC olaraq əsas iş prinsipimiz hər bir müştəriyə fərdi yanaşma və sifarişi müştərinin istəklərini nəzərə almaqla onun büdcəsinə maksimum qənaətlə hazılayıb verməkdir.')}
              
            </span>
          </div>
          <br />
          <br />

          <div>
            <span className="flex justify-center items-center font-bold text-[30px]">
              {t("XİDMƏTLƏR")}{" "}
            </span>
            <ul className="max-w-[97%] mx-auto max-md:max-w-[95%]">
              <li className="list-disc">
                {t(
                  "Havalandırma sistemlərinin layihələndirilməsi, isitmə-soyutma, soyuducu-fan coil və istənilən həcmdə quraşdırma quraşdırma işləri"
                )}
              </li>
              <li className="list-disc">
                {t(
                  "Sinklənmiş polad təbəqədən yuvarlaq, düzbucaqlı kanalların istehsalı"
                )}
              </li>
              <li className="list-disc">
                {t(
                  "İstənilən şəraitdə hava kanalının yığılması və quraşdırılması"
                )}
              </li>
              <li className="list-disc">
                {t(
                  "Bütün növ split və multi split, VRF kondisioner sistemlərinin layihələndirilməsi, quraşdırılması və zəmanətli təmiri"
                )}
              </li>
              <li className="list-disc">
                {t(
                  "Mərkəzi kondisionerlərin (AHU) layihələndirilməsi və quraşdırılması"
                )}
              </li>
              <li className="list-disc">
                {t(
                  "Döşəmə istilik sistemlərinin layihələndirilməsi və quraşdırılması"
                )}
              </li>
              <li className="list-disc">
                {t(
                  "Qazan - isti su sistemlərinin layihələndirilməsi və quraşdırılması"
                )}
              </li>
              <li className="list-disc">
                {t(
                  "Daxili drenaj sistemlərinin layihələndirilməsi və quraşdırılması"
                )}
              </li>
              <li className="list-disc">{t("Yüksək keyfiyyətli transfer")}</li>
            </ul>
          </div>

          <div className="mt-[2rem] mb-[2rem]">
            <span className="flex justify-center items-center text-[30px] font-bold">
              {t("ÜSTÜNLÜKLƏRİMİZ")}
            </span>
            <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
              <div>
                <div className="flex justify-center items-center text-[75px] mt-3">
                  <BsFillBuildingFill />
                </div>
                <span className="flex justify-center items-center font-black mt-3 mb-3 text-[22px]">
                  {t("İLLƏRİN TƏCRÜBƏSİ")}
                </span>         
              </div>
              <div>
                <div className="flex justify-center items-center text-[75px] mt-3">
                  <FaHandshake />
                </div>
                <span className="flex justify-center items-center font-black mt-3 mb-3 text-[22px]">
                  {t("MÜŞTƏRİLƏRİN ETİBARI")}
                </span>
              </div>
              <div>
                <div className="flex justify-center items-center text-[75px] mt-3">
                  <ImCheckmark />
                </div>
                <span className="flex justify-center items-center font-black mt-3 mb-3 text-[22px]">
                  {t("SƏRFƏLİ QİYMƏT")}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white flex flex-col justify-center items-center p-6 max-w-[95%] mx-auto border-l-yellow-300 border-l-[4px] ">
          <span className="flex justify-center items-center font-bold text-[20px]">
            {t("SERTIFKATLAR")}
          </span>
          <Zoom />
        </div>
      </div>
      <Partners />
    </>
  );
}

export default About;
