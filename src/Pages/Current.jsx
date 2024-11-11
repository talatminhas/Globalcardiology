import React from 'react'
import { Navbar } from 'react-bootstrap'
import Links from '../Componenets/Links/Links';
import Archives from '../Componenets/Archives/Archives';
import Partners from '../Componenets/Partners/Partners';
import Footer from '../Componenets/Footer/Footer';


const Current = () => {
  return (
    <div>
        <Links/>
        <Archives/>
        <Partners/>
        <Footer/>
    </div>
  )
}

export default Current;
