import React from 'react'

export default function NewProjectsItem({ project }) {
    return (
        <div className='relative  before:block before:absolute before:bg-black before:opacity-20 before:hover:opacity-60 before:hover:duration-700 before:to-transparent inset-0 before:w-full before:h-full before:z-30'>
            <img className='' src={project.img} alt="" />
            <div className='absolute top-6 left-9 z-50 text-white font-bold text-[30px]'>
                <span>{project.title}</span>
            </div>
            <div className='absolute bottom-6 left-9 text-white border z-50 opacity-60 hover:opacity-100 duration-700  rounded'>
                <button className='px-10 py-3'>Ətraflı</button>
            </div>
        </div>
    )
}
