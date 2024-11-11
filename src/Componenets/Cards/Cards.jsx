import React from 'react'
import "./Cards.css"
import iconpng from "../../Images/icondesign.jpg"
import pubishtionsvg from '../../Assets/Pubistion.svg'
import achievesvg from '../../Assets/Achieve.svg'


const Cards = () => {
  return (
    <div>
      <div className="container d-flex flex-column flex-md-row gap-3">
                <div class="col-12 col-md-4">
                    <article className='related-box border bg-gray'>
                        <div className="content ps-5 pt-3">
                            <div className="img-heading d-flex  align-items-center gap-3 pb-1">
                                <figure>
                                    <img className='icon' src={iconpng} alt="" />
                                </figure>
                                <h3 className='d-flex'> Editorial Board</h3>
                            </div>
                            <button className='about-btn px-2 py-2 mb-4 px-3 py-2'>READ</button>
                        </div>
                    </article>
                </div>
                <div class="col-12 col-md-4">
                    <article className='related-box border bg-gray'>
                        <div className="content ps-5 py-4">
                            <div className="img-heading d-flex align-items-center gap-3 pb-3">
                                <figure>
                                    <img className='pub-icon' src={pubishtionsvg} alt="" />
                                </figure>
                                <h3> Publication Ethics</h3>
                            </div>
                            <button className='about-btn px-2 py-2 mb-1 px-3 py-2'>READ</button>
                        </div>
                    </article>
                </div>
                <div class="col-12 col-md-4">
                    <article className='related-box border bg-gray'>
                        <div className="content ps-5 py-4">
                            <div className="img-heading d-flex align-items-center gap-3 pb-3">
                                <figure>
                                    <img className='achieveicon' src={achievesvg} alt="" />
                                </figure>
                                <h3> Archives</h3>
                            </div>
                            <button className='about-btn px-2 py-2 mb-1 px-3 py-2'>VIEW</button>
                        </div>
                    </article>
                </div>
            </div>
    </div>
  )
}

export default Cards
