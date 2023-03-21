import React from 'react'
import HeroSection from '../components/HeroSection'
import NewProducts from '../components/products/NewProducts'
import Partners from '../components/partners/Partners'
import Footer from '../components/Footer'
import NewProjects from '../components/projects/NewProjects'

function Home() {
    return (
        <div>
            <HeroSection />
            <NewProducts />
            <NewProjects/>
            <Partners/>
            <Footer/>
        </div>
    )
}

export default Home