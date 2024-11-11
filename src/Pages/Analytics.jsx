import React from 'react'
import MatomoDashboard from '../Componenets/MatomoDashboard/MatomoDashboard'
import Links from '../Componenets/Links/Links'
import Partners from '../Componenets/Partners/Partners'
import Footer from '../Componenets/Footer/Footer'


const Analytics = () => {
  return (
    <div>
        <Links/>
        <div>
        <MatomoDashboard />
        </div>
        <Partners/>
        <Footer/>
    </div>
  )
}

export default Analytics
