import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FaEye } from "react-icons/fa";
import './Board.css';
import { Accordion } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Board = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="container badcrum">
            <div className="row">
                {/* Main Content */}
                <div className="col-md-9">
                    <nav aria-label="breadcrumb bg-light">
                        <ol className="breadcrumb bg-light p-3">
                            <li className="breadcrumb-item">
                                <a className="text-decoration-none text-danger" href="/">Home</a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                <a className="text-decoration-none text-muted" href="/About">Edtiorial Board</a>
                            </li>
                        </ol>
                    </nav>

                    <h1 className="main-heading pt-4">Editorial Board</h1>

                    <div className="accordion">
                        <div className="accordion">

                            <div className="col-lg-11 ">
                                <div className="content">
                                    <p>
                                        <h5 className="chief-heading pt-4 pb-4 fw-bold">Editor-in-Chief </h5>
                                        <div className="fw-light pb-3">
                                            <span className="text-danger fw-semibold"> <br />Andrew J.S. Coats,</span> Heart Research Institute, Sydney, Australia | <span className="text-danger" >ORCID</span><br />
                                            <span > E-mail: </span> <span className="text-danger"> ajscoats@aol.com</span><br />

                                        </div>


                                        <article className="pt-4 pb-4">
                                            <span className="pb-3">Deputy Editors-in-Chief</span> <br />
                                            <p className="board-para detail-text fw-light pt-3 fst-italic text-word-space">William Abraham, Division of Cardiovascular Medicine, The Ohio State University, Columbus, OH, <span className="text-danger">USA william.abraham@osumc.edu</span> 
                                            Vijay Chopra, Heart Failure Programme and Research, Max Super Specialty Hospital, Saket, New Delhi, India <span className="text-danger"> chopravk@gmail.com | ORCID</span>
                                            Gerasimos Filippatos, Department of Cardiology, Attikon University Hospital, Medical School, National and Kapodistrian University of Athens, Greece <span className="text-danger pb-3"> geros@otenet.gr  | ORCID </span><br />
                                            Clara Saldarriaga, Department of Cardiology, Clinica Cardio VID, Medellin, Colombia <span className="text-danger">clarais@une.net.co | ORCID </span>
                                            Maurizio Volterrani, IRCCS San Raffaele Rome, Italy <span className="text-danger">maurizio.volterrani@sanraffaele.it | ORCID</span>
                                            Jose-Luis Zamorano, Department of Cardiology, Hospital Universitario Ramón y Cajal, Madrid, Spain, CIBERCV, Instituto de Salud Carlos III (ISCIII), Spain <span className="text-danger">jlzamorano@vodafone.es | ORCID</span></p>


                                        </article>

                                       <h5 className="pt-3 pb-2 ">Associate Editors</h5>
                                       <p className="board-para detail-text fw-light fst-italic"> Nooshin Bazargani, Department of Cardiology, Dubai Hospital, Dubai, United Arab Emirates <span className="text-danger">nmBazargani@dha.gov.ae</span>
                                        Albertino Damasceno, Eduardo Mondlane University, Maputo, Mozambique <span className="text-danger">tino_7117@yahoo.com.br | ORCID</span>
                                        Enrico Fabris, Cardiovascular Department, Center for Diagnosis and Treatment of Cardiomyopathies, Azienda Sanitaria Universitaria Giuliano-Isontina, University of Trieste, Italy <span className="text-danger">enrico.fabris@asugi.sanita.fvg.it | ORCID</span>
                                        Maria George, INOCA International, London, UK <span className="text-danger">maria.george@btinternet.com</span>
                                        Seung Hwan Han, Division of Cardiology, Department of Internal Medicine, Gachon University Gil Hospital, Gachon University College of Medicine, Incheon, Korea <span className="text-danger">shhan@gilhospital.com | ORCID</span>
                                        Loreena Hill, School of Nursing and Midwifery, Queen's University Belfast, UK <span className="text-danger">l.hill@qub.ac.uk | ORCID</span>
                                        Bela Merkely, Heart and Vascular Center, Semmelweis University, Budapest, Hungary <span className="text-danger">rektor@semmelweis.hu | ORCID</span>
                                        Petar Seferovic, University Medical Center, Medical Faculty University of Belgrade, Serbian Academy of Sciences and Arts, Belgrade, Serbia <span className="text-danger">petar.sferovic@med.bg.ac.rs | ORCID</span>
                                        Stephan von Bardeleben, Department of Cardiology, University Medical Center of the Johannes Gutenberg-University Mainz, Germany <span className="text-danger">Stephan.von_Bardeleben@unimedizin-mainz.de | ORCID</span>
                                        Yuhui Zhang, State Key Laboratory of Cardiovascular Disease, Heart Failure Center, Fuwai Hospital, National Center for Cardiovascular Diseases, Chinese Academy of Medical Sciences and Peking Union Medical College, Beijing, China <span className="text-danger">yuhuizhangjoy@126.com</span></p>


                                        <h5 className="pt-3 pb-2">Guest Editors</h5>

                                        <p className="board-para detail-text fw-light fst-italic">Michael Böhm, Department of Internal Medicine Clinic III, Saarland University Hospital, Homburg/Saar, Germany <span className="text-danger">michael.boehm@uks.eu | ORCID</span>
                                        Mitja Lainscak, Division of Cardiology, General Hospital Murska Sobota, Murska Sobota; Faculty of Medicine, University of Ljubljana, Slovenia <span className="text-danger">mitja.lainscak@guest.arnes.si | ORCID</span></p>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="side sidebar">
                        <h4 className="top-heading sidebar-title text-white text-center bg-danger p-2">FOR AUTHORS</h4>
                        <ul className="list-group ">
                            <li className="bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
                                <a className="submit-heading text-decoration-none text-muted fw-light link-text" href="/submission">Submit Your Paper</a>
                            </li>
                            <li className="bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
                                <a className="text-decoration-none text-muted fw-light link-text" href="/guide">Guide for Authors</a>
                            </li>
                            <li className="bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
                                <a className="text-decoration-none text-muted fw-light link-text" href="/benefits-authors">Benefits for Authors</a>
                            </li>
                            <li className="bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
                                <a className="text-decoration-none text-muted fw-light link-text" href="/write-scientific-paper">How to write a Scientific paper</a>
                            </li>
                            <li className="bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
                                <a className="text-decoration-none text-muted fw-light link-text" href="/write-review-article ">How to write a Review article</a>
                            </li>
                            <li className="bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
                                <a className="text-decoration-none text-muted fw-light link-text" href="/article-processing-charge">Article Processing Charge</a>
                            </li>
                        </ul>

                        <h4 className="sidebar-title text-white text-center bg-danger p-2 mt-4">FOR REVIEWERS</h4>
                        <ul className="list-group">
                            <li className="bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
                                <a className="text-decoration-none text-muted fw-light" href="/how-to-review">How to Review</a>
                            </li>
                        </ul>
                        <h4 className="side sidebar-title text-white  text-center bg-danger p-2 mt-4">INDEXING</h4>
                        <ul className="list-group ">
                            <li className="bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
                                <a className="review text-decoration-none text-muted fw-light link-text" href="https://scholar.google.it/scholar?hl=en&as_sdt=0%2C5&q=site%3Aglobalcardiology.info&btnG=">Google Scholar</a>
                            </li>
                            <li className="bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
                                <a className="review text-decoration-none text-muted fw-light link-text" href="https://openalex.org/sources/s4390963333">OpenAlex</a>
                            </li>
                            <li className="bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
                                <NavLink className="review text-decoration-none text-muted fw-light link-text" to="/analytics">Analytics</NavLink>
                            </li>
                        </ul>

                        <h4 className="sidebar-title text-white text-center bg-danger p-2 mt-4">Most read last month</h4>
                        <div className="border-1 bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
                            <p className="fw-light text-muted">
                                "Baseline echocardiographic characteristics of patients enrolled in the randomized investigation of MitraClip device in heart failure (RESHAPE HF-2) trial: comparison with COAPT and Mitra-FR"</p>
                            <div>
                                <FaEye className="me-2" />
                                <span className="fw-light text-muted">34</span>
                            </div>
                        </div>
                        <div className="border-1 bg-light pt-3 ps-3 pe-3 border-bottom">
                            <p className="fw-light text-muted">
                                "Iron deficiency in heart failure with preserved ejection fraction: rationale and design of the FAIR-HFpEF trial"</p>
                            <div>
                                <FaEye className="me-2" />
                                <span className="fw-light text-muted">39</span>
                            </div>
                        </div>
                        <div className="border-1 bg-light pt-3 ps-3 pe-3 pb-3 border-bottom">
                            <p className="fw-light text-muted">
                                "Treatment pathways in patients with heart failure with preserved ejection fraction and obesity: perspectives from cardiology specialists and patients"</p>
                            <div>
                                <FaEye className="me-2" />
                                <span className="fw-light text-muted">32</span>
                            </div>
                        </div>
                        <div className="border-1 bg-light pt-3 ps-3 pe-3 pb-3 border-bottom">
                            <p className="fw-light text-muted">
                                "Bibliometric analysis of cardiovascular disease research activity in the Arab world"</p>
                            <div>
                                <FaEye className="me-2" />
                                <span className="fw-light text-muted">29</span>
                            </div>
                        </div>
                        <div className="border-1 bg-light pt-3 ps-3 pe-3 pb-3 border-bottom">
                            <p className="fw-light text-muted">
                                "Clinical trial design, endpoints and regulatory considerations in heart failure"</p>
                            <div>
                                <FaEye className="me-2" />
                                <span className="fw-light text-muted">28</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Board;
