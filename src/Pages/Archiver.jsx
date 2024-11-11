import React from 'react'
import { Link } from 'react-router-dom'
import Archive from '../Componenets/Archive/Archive'
import Partners from '../Componenets/Partners/Partners'
import Footer from '../Componenets/Footer/Footer'
import Links from '../Componenets/Links/Links'

const Archiver = () => {
  return (
    <div>
      <Links/>
      <Archive/>
      <Partners/>
      <Footer/>
    </div>
  )
}

export default Archiver;
