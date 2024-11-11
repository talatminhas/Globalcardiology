import React from 'react'
import "./Footer.css"
import AppleIcon from '../../Assets/Apple.svg'
import WhatsappIcon from '../../Assets/Whatsapp.svg'
import HuaweiIcon from '../../Assets/Huawei.svg'

const Footer = () => {
    return (
        <div>
            <div className="bg py-5 mt-5">
                <div className="container">
                    <div className='d-flex flex-wrap gap-5 text-white'>
                        <div className='py-5 pb-1 col-lg-4 col-md-4 col-sm-12'>
                            <h5>Global Cardiology</h5>
                            <p className='footer-text fst-italic fw-light'>
                                is an Open Access, peer-reviewed journal published online by PAGEPress®, Pavia, Italy.
                                Website continuously updated
                            </p>
                            <p className='fw-light'>eISSN: 2975-2728</p>
                        </div>
                        <div className='pt-5 pb-1 col-lg-2 col-md-2 col-sm-12'>
                            <h5 className='pb-3'>Info</h5>
                            <hr className='line' />
                            <div className='fw-light'>
                            <a className='ancher-link' href="/"><p>About</p></a>
                            <a className='ancher-link' href="/"><p>Editorial Board</p></a>
                            </div>
                        </div>
                        <div className='pt-5 pb-1 col-lg-2 col-md-2 col-sm-12'>
                            <div>
                                <h5 className=' pb-3'>Info Submission</h5>
                                <hr className='line' />
                                <div className='fw-light'>
                                <a className='ancher-link' href="/"><p>Submission </p></a>
                                <a className='ancher-link' href="/"><p>Guidelines for authors</p></a>
                                </div>
                            </div>

                        </div>
                        <div className='pt-5 pb-1 col-lg-2 col-md-2 col-sm-12'>
                            <h5 className=' pb-3'>Our App Free For Anyone!</h5>
                            <hr className='line' />
                            <div className="icons d-flex gap-3">
                                <figure>
                                    <a className='ancher-link' href="/"><img src={WhatsappIcon} alt="" /></a>
                                </figure>
                                <figure>
                                    <a className='ancher-link' href="/"><img src={AppleIcon} alt="" /></a>
                                </figure>
                                <figure>
                                    <a className='ancher-link' href="/"><img src={HuaweiIcon} alt="" /></a>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='copyright text-center py-3 fw-light'>
            © PAGEPress 2008-2024 • PAGEPress® is a registered trademark property of PAGEPress srl, Italy    •    VAT: IT02125780185    •    Privacy
            </div>
        </div>
        
    )
}

export default Footer
