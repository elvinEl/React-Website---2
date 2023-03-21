import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../pages/Header'

function RootLayout() {
    return (
        <div className='root-layout'>
          <Header/>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout