import React from 'react'
import { Accordion, Navbar } from 'react-bootstrap'
import Links from '../Componenets/Links/Links'
import Accordions from '../Componenets/Accordions/Accordions'
import Partner from "../Componenets/Partners/Partners"
import Footer from "../Componenets/Footer/Footer"

const About = () => {
  return (
    <div>
      <Links/>
      <Accordions/>
      <Partner/>
      <Footer/>
    </div>
  )
}

export default About

