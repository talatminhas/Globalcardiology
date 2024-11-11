import React from 'react'
import "./Partners.css"

const Partners = () => {
    return (
        <div>
            <div className="row d-flex justify-content-center align-items-center">
            <div className="images d-flex flex-column flex-md-row justify-content-center gap-5 my-5">
                <figure>
                    <a href="/">
                    <img className='logo-imges ps-5' href='https://www.tmacademy.org/' src="https://www.globalcardiology.info/plugins/themes/PAGEPressManuscript/styles/images/TMA_Logo_p.jpg" alt="" />
                        </a>
                </figure>
                <figure>
                    <a href="">
                    <img className='logo-imges ps-5' href="https://www.tmacademy.org/" src="https://www.globalcardiology.info/plugins/themes/PAGEPressManuscript/styles/images/icardio_p.jpg" alt="" />
                        </a>
                </figure>
            </div>
            </div>
            
        </div>
    )
}

export default Partners
