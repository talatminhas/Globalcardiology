import React from 'react'
import './SideBar.css'
import { FaEye } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className="sidebar">
                        <h4 className="side sidebar-title text-white border-none text-center bg-danger p-2">FOR AUTHORS</h4>
                        <ul className="list-group ">
                            <li className="bg-light pt-3 ps-3 pe-3 pb-3 border-bottom">
                                <Link className="review text-decoration-none text-muted fw-light link-text" to="/submission">Submit Your Paper</Link>
                            </li>
                            <li className="bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
                                <Link className="review text-decoration-none text-muted fw-light link-text" to="/guide">Guide for Authors</Link>
                            </li>
                            <li className="bg-light pt-2 ps-3 pe-3 pb-3 border-bottom ">
                                <Link className="review text-decoration-none text-muted fw-light link-text" to="/authors">Benefits for Authors</Link>
                            </li>
                            <li className="bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
                                <Link className="review text-decoration-none text-muted fw-light link-text" to="https://www.pagepress.org/public/How_to_write_a_scientific_paper.pdf">How to write a Scientific paper</Link>
                            </li>
                            <li className="bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
                                <Link className="review text-decoration-none text-muted fw-light link-text" to="https://www.pagepress.org/public/How_to_write_a_review_article.pdf">How to write a Review article</Link>
                            </li>
                            <li className="bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
                                <Link className="review text-decoration-none text-muted fw-light link-text" to="/article">Article Processing Charge</Link>
                            </li>
                        </ul> 

                        <h4 className="sidebar-title text-white text-center bg-danger p-2 mt-4 ">FOR REVIEWERS</h4>
                        <ul className="list-group">
                            <li className="bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
                                <Link className="review text-decoration-none text-muted fw-light link-text" to="https://www.pagepress.org/public/Peer_review_at_its_best.pdf">How to Review</Link>
                            </li>
                        </ul>
                        <h4 className="side sidebar-title text-white  text-center bg-danger p-2 mt-4">INDEXING</h4>
                        <ul className="list-group ">
                            <li className="bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
                                <Link className="review text-decoration-none text-muted fw-light link-text" to="https://scholar.google.it/scholar?hl=en&as_sdt=0%2C5&q=site%3Aglobalcardiology.info&btnG=">Google Scholar</Link>
                            </li>
                            <li className="bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
                                <Link className="review text-decoration-none text-muted fw-light link-text" to="https://openalex.org/sources/s4390963333">OpenAlex</Link>
                            </li>
                            <li className="bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
                                <NavLink className="review text-decoration-none text-muted fw-light link-text" to="/analytics">Analytics</NavLink>
                            </li>
                        </ul>

                        <h4 className="sidebar-title text-white text-center bg-danger p-2 mt-4 ">Most read last month</h4>
                        <div className="border-1 pt-2 ps-3 pe-3 pb-3 border-bottom">
                        <p className="review fw-light text-muted">
                             "Baseline echocardiographic characteristics of patients enrolled in the randomized investigation of MitraClip device in heart failure (RESHAPE HF-2) trial: comparison with COAPT and Mitra-FR"</p>
                            <div className='pt-3'>
                                <FaEye className="me-2" />
                                <span className="review fw-lighter text-muted">70</span>
                            </div>
                        </div>
                        <div className="border-1 bg-lighter pt-2 ps-3 pe-3 pb-3 border-bottom">
                            <p className="review fw-light text-muted">
                                "The effect of SGLT2 inhibitors on health status in patients with heart failure: a systematic review and meta-analysis"</p>
                            <div className='pt-3'>
                                <FaEye className="me-2" />
                                <span className="review fw-lighter text-muted">58</span>
                            </div>
                        </div>
                        <div className="border-1 bg-lighter pt-2 ps-3 pe-3 pb-3 border-bottom">
                            <p className="review fw-light text-muted">
                                "The effect of SGLT2 inhibitors on health status in patients with heart failure: a systematic review and meta-analysis"</p>
                            <div className='pt-3'>
                                <FaEye className="me-2" />
                                <span className="review fw-lighter text-muted">28</span>
                            </div>
                        </div>
                        <div className="border-1 bg-lighter pt-2 ps-3 pe-3 pb-3 border-bottom">
                            <p className="review fw-light text-muted">
                                "Bibliometric analysis of cardiovascular disease research activity in the Arab world"</p>
                            <div className='pt-3'> 
                                <FaEye className="me-2" />
                                <span className="review fw-lighter text-muted">30</span>
                            </div>
                        </div>
                        <div className="border-1 bg-lighter pt-2 ps-3 pe-3 pb-3 border-bottom">
                            <p className="review fw-light text-muted">
                                "The impact of diurnal fasting during Ramadan on patients with established cardiac disease: a systematic review"</p>
                            <div className='pt-3'>
                                <FaEye className="me-2" />
                                <span className="review fw-lighter text-muted">25</span>
                            </div>
                        </div>
                    </div>
  )
}

export default Sidebar
