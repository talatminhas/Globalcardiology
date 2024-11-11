import React from 'react'
import "./Header.css"
import bookpng from "../../Images/CoverIssueDefault_en_US.jpg"

const Header = () => {
    return (
        <section className='header mt-0'>
            <figure>
                <img className='header-img' src="https://www.globalcardiology.info/public/journals/1/homepageImage_en_US.jpg" alt="" />
            </figure>
            <article className='contact-box bg-white'>
                <article className='content-text-about ps-5 pt-5'>
                    <div className="icon-heading">
                        <figure>
                            <img className='icon' src="https://seekicon.com/free-icon-download/calendar-check_7.svg" alt="" />
                        </figure>
                        <h3 className='sub-heading'> Current Issue</h3>
                    </div>
                    <p className='ward mt-3'>Vol. 2 No. 2 (2024)</p>
                    <div className="date d-flex">
                        <b className='publish pe-2 mt-2'>Published: </b>
                        <p className='date mt-2'>2024-06-28</p>
                    </div>
                    <article className='buttons mt-4 mb-4'>
                        <button type="button" class="about-btn px-3 py-2 me-2">ABOUT</button>
                        <button type="button" class="submission-btn ms-3 px-3 py-2 me-2">SUBMISSION</button>
                        <button type="button" class="current-btn ms-3 px-3 py-2">CURRENT ISSUE</button>
                    </article>
                </article>
            </article>
            <div class="container pt-5">
                <div class="row">
                    <div class="col-lg-2">
                        <a href="https://www.globalcardiology.info/site/issue/view/3"><img className='book-png' src={bookpng} alt="" /></a>
                    </div>
                    <div class="col-lg-10 ">
                        <p className='detail-text fs-4 fw-light' style={{fontWeight:"300"}}>The <b className='fw-semibold'>Global Cardiology</b> <span > journal is an open access, peer-reviewed international journal that aims to publish original articles, reviews, mini reviews, case reports, guidelines, white papers, news, meeting reports, plain language summaries, editorials and letters to the editor related to the diagnosis, treatment, and prevention of cardiovascular diseases. The scope of the journal includes all aspects of basic, translational and clinical science in cardiology, including but not limited to coronary artery disease, heart failure, cardiomyopathies, arrhythmias, valvular heart disease, hypertension, congenital heart disease, cardiac imaging, interventional cardiology, cardiac surgery, co-morbidities leading to cardiovascular disease, as well as epidemiology, prevention and rehabilitation of cardiovascular diseases.</span></p>
                        <p className='fw-light mb-5 fs-4'>The journal aims to provide a platform for the dissemination of new knowledge and advancements in the field of cardiology, as well as to promote interdisciplinary collaboration among researchers, clinicians, healthcare professionals and the medically interested public. The target audience of a general cardiology journal includes cardiologists, internists, primary care physicians, researchers, and other healthcare professionals involved in the care of patients with cardiovascular diseases.</p>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Header;

