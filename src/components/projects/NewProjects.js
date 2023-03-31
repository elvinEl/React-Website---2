import React, { useState, useEffect } from 'react'
import NewProjectsData from '../../data/projects.json'
import NewProjectsItem from './NewProjectsItem'

function NewProjects() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        setProjects(NewProjectsData)
    })

    return (
        <>
            <div className='underline flex justify-center items-center'>
                <span className='font-bold text-2xl mt-8'>LAHİYƏLƏR</span>
            </div>
            <div className='grid grid-cols-3 gap-8 max-w-[80%] mt-[2rem] mx-auto max-lg:grid-cols-2 max-lg:max-w-[85%] max-md:grid-cols-1 max-md:max-w-[85%]'>
                {projects.map(project => <NewProjectsItem key={project.id} project={project} />)}
            </div>
        </>
    )
}

export default NewProjects