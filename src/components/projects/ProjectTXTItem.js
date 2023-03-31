import React from 'react'
import { ImCheckmark } from 'react-icons/im'

export default function ProjectTXTItem({ projectTXT }) {
    return (
        <>
        <div className='flex gap-3'>
            <div className='flex items-start text-[18px] text-yellow-500 mt-[0.4rem]'>
                <ImCheckmark />
            </div>
            <div>
                <span className='font-semibold text-[14px]'> {projectTXT.title}</span>
                <div>
                    <span className='text-[12px]'>
                        <i>
                            {projectTXT.about}
                        </i>
                    </span>
                </div>
            </div>

        </div>
        </>
    )
}
