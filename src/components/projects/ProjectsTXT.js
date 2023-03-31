import React, { useEffect, useState } from 'react'
import DataProjectTXT from '../../data/projectsTXT.json'
import ProjectTXTItem from './ProjectTXTItem'

function ProjectsTXT() {
  const [projectsTXT, setProjectTXT] = useState([])

  useEffect(() => {
    setProjectTXT(DataProjectTXT)
  })

  return (
    <div>
     
      <div className='grid grid-cols-2 gap-8 max-w-[80%] mt-[2rem] mx-auto max-lg:grid-cols-2 max-lg:max-w-[85%] max-md:grid-cols-1 max-md:max-w-[85%]'>
        {
           projectsTXT.map(projectTXT => <ProjectTXTItem key={projectTXT.id} projectTXT={projectTXT} />) 
        }
      </div>
    </div>
  )
}

export default ProjectsTXT