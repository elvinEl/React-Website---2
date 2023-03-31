import React from 'react'
import Partners from '../components/partners/Partners'
import ProjectsTXT from '../components/projects/ProjectsTXT'
import Helmet from 'react-helmet'

function Projects() {
  return (
    <>
    <Helmet>
      <title>Lahiyələr</title>
    </Helmet>
    <div className='max-w-[70%] mt-40 mx-auto bg-[#f7f7f7] border rounded max-lg:max-w-full max-lg:mt-0'>
      <span className='text-[30px] font-bold flex justify-center items-center pt-6 '>
        Lahiyələr
      </span>
      <div className='max-w-[95%] mx-auto'>
        <div className='bg-white mt-8 mb-8 py-[16px] border rounded-[20px]'></div>
        <span className='text-[24px] font-bold flex justify-center items-center'>
          Tamamlanmış Lahiyələrimiz
        </span>
        <ProjectsTXT />
      </div>
    </div>
    <Partners />

    </>
  )
}
export default Projects