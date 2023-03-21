import React from 'react'
import Footer from '../components/Footer'
import Partners from '../components/partners/Partners'
import { TbSquareRoundedCheck } from 'react-icons/tb'

function About() {
  return (
    <>
      <div className='max-w-[70%] mt-40 mx-auto bg-[#f7f7f7] border rounded max-lg:max-w-full max-lg:mt-0'>

        <span className='text-[30px] font-bold flex justify-center items-center pt-6 '>
          Şirkət Haqqında
        </span>




        <div className='max-w-[95%] mx-auto'>

          <div className='bg-white mt-8 mb-8 py-[16px] border rounded-[20px]'></div>

          <div className='flex justify-center items-center mb-8'>
            <img className='max-h-[130px]' src="./assets/logo/logo1.jpg" alt="" />
          </div>

          <div className='bg-white p-[40px] border-l-4 border-yellow-300 text-start rounded font-light'>
            <span>
              Şirkətimiz “SFV Group” QSC, Azərbaycan bazarında 2010-cu ildən isitmə, soyutma və havalandırma sistemlərinin layihələndirilməsi və quraşdırılması sektorunda tam ixtisaslaşmış firma kimi fəaliyyət göstərir. Qısa müddət keçməsinə baxmayaraq isitmə, soyutma, havalandırma, su və kanalizasiya, həmçinin server otaqlarının soyudulması sistemlərinin sərfəli qiymətə təşkili və quraşdırılması işlərini yüksək peşəkarlıqla həyata keçirir.
            </span>
          </div><br /><br />

          <div>
            <span className='font-light'>
              “SFV Group” QSC 7/24, zamanın fərqi olmadan peşəkar servis kollektivi tərəfindən inzibati və ofis binalarında istilik qazanlarına, çillər qurğularına, havalandırma sistemləri aqreqatlarına və sair avadanlıqlara servis xidmətinin göstərilməsi işini həyata keçirir.<br /><br />

              Bütün bunlardan başqa şirkətimiz isitmə, soyutma, havalandırma, su və kanalizasiya sistemlərini, server otaqlarının soyudulması sistemlərini dünyanın tanınmış markalarını Azərbaycanda satışı və təminatçısı kimi də fəaliyyət göstərir. Təmin etdiyimiz avadanlıqların keyfiyyətinə tam zəmanət verilir və verilmiş sifarişlərin çatdırılma müddətinə və qiymətlərinə görə rəqiblərimizdən hər zaman bir addım öndə olduğumuzu təcrübəmizə əsaslanaraq tam əminliklə deyə bilərik.<br /><br />

              Fəaliyyət göstərdiyimiz müddətdə Azərbaycan Respublikasının bir çox dövlət və özəl layihələrinə imza atmışıq. Başa vurduğumuz layihələrin bir qismi aşağıdakılardan ibarətdir:
            </span>
          </div>

          <div className='mt-[2rem]'>
            <p>
            <b>Vizyonumuz </b><span className='font-light'>müştərilərimiz tərəfindən bazar lideri kimi tanınmaqdır.</span><br/><br/>
            <b>Müştəri xidməti və məmnuniyyəti </b><span className='font-light'>müştəri xidməti və məmnuniyyəti lider olmaq üçün açardır. Xidmətimizlə müştərilərimizi razı salmağa çalışırıq.</span><br/><br/>
            <b>Keyfiyyət </b><span className='font-light'>Bazar lideri olmaq baxımından özümüzə çox inanırıq.</span><br/><br/>
            <b>Özünə güvən </b><span className='font-light'>müştərilərimiz tərəfindən bazar lideri kimi tanınmaqdır.</span><br/><br/>
            </p>
          
          </div>

        </div>

      </div>
      <Partners />
      <Footer />
    </>
  )
}

export default About