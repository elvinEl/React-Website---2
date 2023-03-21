import React from 'react'
import Footer from '../components/Footer'
import Partners from '../components/partners/Partners'
import NewProducts from '../components/products/NewProducts'

function Products() {
  return (
    <div>
      <NewProducts/>
      <Partners/>
      <Footer/>
    </div>
  )
}

export default Products