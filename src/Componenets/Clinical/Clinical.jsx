import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FaEye } from 'react-icons/fa';
import { FaFilePdf } from 'react-icons/fa';
import "./Clinical.css"
import { Accordion } from "react-bootstrap";
import SideBar from '../SideBar/SideNav'
import iconpng from "../../Images/DOI_logo.png"
import Usepng from "../../Images/user.png"
import Emailpng from "../../Images/mail.png"
import university from "../../Images/university.png"
import png from "../../Images/submission_18_19_coverImage_en_US.png"
import folderpng from "../../Images/folder.png"
import chartpng from "../../Images/chart.png"
import editpng from "../../Images/edit.png"
import citationpng from "../../Images/citation.png"
import twitterpng from "../../Images/twitter.png"
import facebookicon from "../../Images/Faceb.svg"
import DimensionsBadge from "../DimensionsBadge/DimensionsBadge";
import PlumXMetrics from "../PlumXMetrics/PlumXMetrics";
import Linkindicon from "../../Images/Linkind.svg"
import telegrampng from "../../Images/telegram.png"
import envelopepng from "../../Images/envelope.png"
import Infoicon from "../../Images/Info.svg"
import whatsapppng from "../../Images/whatsapp.png"
import UsageStatsGraph from "../UsageStatsGraph/UsageStatsGraph";
import Altmetricpng from "../../Images/Altmetric.png"
import plumximg from "../../Images/plumximg.png"
import Linegraphpng from "../../Images/Linegraph.png"
import Dropdown from "../Dropdown/Dropdown";
import crossref from "../../Images/crossref-png.png"
import scopus from "../../Images/scopus-png.png"
import scholar from "../../Images/scholar-png.png"


const Clinical = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [isOpen, setIsOpen] = useState(false);


    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
        const toggleAccordion = () => {
            setIsOpen(!isOpen);
    };
    
    }

    return (
        <div className="container d-flex grid gap-3">
            <div className="row">
                <div className="col-md-12 col-lg-9 badcrum">
                    <nav aria-label="breadcrumb bg-light rounded">
                        <ol className="breadcrumb bg-light p-3">
                            <li className="breadcrumb-item">
                                <a className="bradcrums text-decoration-none text-danger" href="/">Home</a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                <a className="bradcrums text-decoration-none text-muted" href="/About">Clinical</a>
                            </li>
                        </ol>
                    </nav>
                    <div className="d-flex gap-2">
                        <figure>
                            <img src={iconpng} alt="" />
                        </figure>
                        <p>
                            <a className="text-danger text-decoration-none" href="/"> https://doi.org/10.4081/cardio.2024.18</a>
                        </p>
                    </div>
                    <h1 className="main-heading fw-medium mb-4">Clinical trial design, endpoints and regulatory considerations in heart failure</h1>
                    <div className="d-flex gap-1">
                        <figure>
                            <img className="custom-icon" src={Usepng} alt="" />
                        </figure>
                        <p>
                            <a className="text-danger text-decoration-none pt-1" href="/">Giuseppe M.C. Rosano</a>
                        </p>
                    </div>
                    <div className="d-flex gap-1 ps-3">
                        <figure>
                            <img className="mail-icon" src={Emailpng} alt="" />
                        </figure>
                        <p>
                            <a className="text-danger text-decoration-none" href="/">giuseppe.rosano@gmail.com</a>
                        </p>
                    </div>
                    <div className="d-flex gap-2 ps-3">
                        <figure>
                            <img className="mail-icon" src={university} />
                        </figure>
                        <p>
                            <a className="uni-text text-muted fw-light text-decoration-none" href="/">Cardiovascular Clinical Academic Group, St George’s University Hospital, London, United Kingdom; Department of Cardiology, San Raffaele Cassino Hospital, Cassino, Italy.</a>
                        </p>
                    </div>
                    <div className="accordion mb-4" id="journalAccordion">
                        <div className="accordion-item mt-4 mb-4">
                            <h2 className="accordion-header border">
                                <button
                                    className="accordion-button"
                                    type="button"
                                    onClick={() => toggleAccordion(1)}
                                >
                                    <span className="mt-3 ps-2 pe-2">
                                        <figure>
                                            <img className="custom-icon"  src={folderpng} alt="" />
                                        </figure>
                                    </span>
                                    Abstract
                                    <FontAwesomeIcon
                                        icon={activeIndex === 1 ? faMinus : faPlus}
                                        className="ms-auto"
                                    />
                                </button>
                            </h2>
                            <div
                                className={`accordion-collapse collapse ${activeIndex === 1 ? "show" : ""
                                    }`}
                            >
                                <div className="accordion-body border-none">
                                    <p className="fw-light">
                                    Following the withdrawal of flosequinan in the early 1990s due to heightened mortality and fatal arrhythmia risks, regulatory agencies have demanded evidence of the efficacy of novel treatments in managing heart failure, with mortality and morbidity endpoints becoming more stringent criteria for approval. In recent times, regulatory agencies have exhibited a greater willingness to permit the evaluation of functional capacity as an efficacy endpoint, albeit limited to specific patient groupings. Consequently, a novel therapeutic intervention for heart failure may be granted approval provided that it enhances survival rates, decreases length of hospital stays, and/or safely improves functional capacity. This article reviews clinical trial design, trial endpoints and regulatory issues in heart failure trials.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item mb-4">
                            <h2 className="accordion-header border">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    onClick={() => toggleAccordion(2)}
                                >
                                    <div className="pt-3 fs-6 fw-bold d-flex">
                                    <span className="ps-2 pe-2">
                                        <figure>
                                            <img className="custom-icon"  src={chartpng} alt="" />
                                        </figure>
                                    </span>
                                        Metric</div>
                                    <FontAwesomeIcon
                                        icon={activeIndex === 2 ? faMinus : faPlus}
                                        className="ms-auto"
                                    />
                                </button>
                            </h2>
                            <div
                                className={`accordion-collapse collapse ${activeIndex === 2 ? "show" : ""
                                    }`}
                            >
                                <div className="accordion-body ms-0">
                                    <div className="d-flex gap-3 mb-3 ms-0 mt-3"> 
                                        <article className="col-lg-5">
                                            <div className="bg-light text-danger fs-5 ps-3 pe-5 py-1 mb-3 rounded-pill">DIMENSIONS</div>
                                            <DimensionsBadge/> 

                                        </article>
                                        <article className="col-lg-3">
                                            <div className="bg-light text-danger fs-5 ps-3 px-5 py-1 rounded-pill">ALTMETRIC</div>
                                            <figure>
                                                <img className="altmetricimg" src={Altmetricpng} alt="" />
                                            </figure>
                                        </article>
                                        <article className="col-lg-3">
                                            <div className="bg-light text-danger fs-5 ps-3 px-5 py-1 rounded-pill">PlUMX METRIX</div>
                                            <figure>
                                                <img className="altmetricimg w-100px" src={plumximg}alt=""/>
                                            </figure>
                                        </article>
                                       
                                    </div>
                                    <div className="bg-light text-danger fs-5 ps-3 pe-5 py-1 mb-3 rounded-pill">DOWNLOADS</div>


                                    <UsageStatsGraph/>
                                    <div className="bg-light text-danger fs-5 ps-3 pe-5 py-1 mb-3 mt-3 rounded-pill">CITATIONS</div>
                                    <div className="row ps-5">
                                        <figure className="col-lg-4 pt-3"><img src={crossref} alt="" /></figure>
                                        <figure className="col-lg-4 pt-3"><img src={scopus} alt="" /></figure>
                                        <figure className="col-lg-4 pt-3"><img src={scholar} alt="" /></figure>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="accordion-item mb-4">
                            <h2 className="accordion-header border">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    onClick={() => toggleAccordion(3)}
                                >
                                    <div className="pt-3 fs-6 fw-bold d-flex">
                                    <span className="ps-2 pe-2">
                                        <figure>
                                            <img className="custom-icon"  src={editpng} alt="" />
                                        </figure>
                                    </span>
                                        References</div>
                                    <FontAwesomeIcon
                                        icon={activeIndex === 3 ? faMinus : faPlus}
                                        className="ms-auto"
                                    />
                                </button>
                            </h2>
                            <div
                                className={`accordion-collapse collapse ${activeIndex === 3 ? "show" : ""
                                    }`}
                            >
                                <div className="accordion-body">
                                    <h3 className="fs-5 fw-bold text-danger ">Similar Articles</h3>
                                    <p className="fw-light">Schüssler-Lenz M, Beuneu C, Menezes-Ferreira M et al. Cell-based therapies for cardiac repair: a meeting report on scientific observations and European regulatory viewpoints. Eur J Heart Fail 2016;18:133-41. DOI: <a className="fw-normal text-danger text-decoration-none" href="/"> https://doi.org/10.1002/ejhf.422</a></p>
                                    <p>Anker SD, Schroeder S, Atar D, et al. Traditional and new composite endpoints in heart failure clinical trials: facilitating comprehensive efficacy assessments and improving trial efficiency. Eur J Heart Fail 2016;18:482-9. DOI: <a className="fw-normal text-danger text-decoration-none" href="/"> https://doi.org/10.1002/ejhf.422</a></p>
                                    <p>Pani L, Pecorelli S, Rosano G, et al. Steps forward in regulatory pathways for acute and chronic heart failure. Eur J Heart Fail 2015;17:3-8. DOI: <a className="fw-normal text-danger text-decoration-none" href="/"> https://doi.org/10.1002/ejhf.422</a></p>
                                    <p>ESC Committee for Practice Guidelines. ESC guidelines for the diagnosis and treatment of acute and chronic heart failure 2016: The Task Force for the Diagnosis and Treatment of Acute and Chronic Heart Failure 2016 of the European Society of Cardiology. Developed in collaboration with the Heart Failure Association (HFA) of the ESC. Eur J Heart Fail 2016;18:891-975. DOI: <a className="fw-normal text-danger text-decoration-none" href="/"> https://doi.org/10.1002/ejhf.422</a></p>
                                    <p>Greene SJ, Shah AN, Butler J, et al. Designing effective drug and device development programs for hospitalized heart failure: a proposal for pretrial registries. Am Heart J 2014;168:142-9. DOI: <a className="fw-normal text-danger text-decoration-none" href="/"> https://doi.org/10.1002/ejhf.422</a></p>
                                    <p>Gheorghiade M, Shah AN, Vaduganathan M, et al. Recognizing hospitalized heart failure as an entity and developing new therapies to improve outcomes: academics’, clinicians’, industry’s, regulators’, and payers’ perspectives. Heart Fail Clin 2013;9:285-90. DOI: <a className="fw-normal text-danger text-decoration-none" href="/"> https://doi.org/10.1002/ejhf.422</a></p>
                                    <p>Butler J, Fonarow GC, Zile MR, et al. Developing therapies for heart failure with preserved ejection fraction: current state and future directions. JACC Heart Fail 2014;2:97-112. DOI: <a className="fw-normal text-danger text-decoration-none" href="/"> https://doi.org/10.1002/ejhf.422</a></p>
                                    <p>Vaduganathan M, Greene SJ, Ambrosy AP, Gheorghiade M, Butler J. The disconnect between phase II and phase III trials of drugs for heart failure. Nat Rev Cardiol 2013;10:85-97. DOI: <a className="fw-normal text-danger text-decoration-none" href="/"> https://doi.org/10.1002/ejhf.422</a></p>
                                    <p>Zannad F, Garcia AA, Anker SD, et al. Clinical outcome endpoints in heart failure trials: a European Society of Cardiology Heart Failure Association consensus document. Eur J Heart Fail. 2013 Oct;15(10):1082-94. DOI: <a className="fw-normal text-danger text-decoration-none" href="/"> https://doi.org/10.1002/ejhf.422</a></p>
                                    <p>Fishbein DP, Hellkamp AS, Mark DB, et al. Use of the 6-min walk distance to identify variations in treatment benefits from implantable cardioverterdefibrillator and amiodarone: results from the SCD-HeFT (Sudden Cardiac Death in Heart Failure trial). J Am Coll Cardiol 2014;63:2560-8. DOI: <a className="fw-normal text-danger text-decoration-none" href="/"> https://doi.org/10.1002/ejhf.422</a></p>
                                    <p>Seltzer JH, Turner JR, Geiger MJ, et al. Centralized adjudication of cardiovascular endpoints in cardiovascular and noncardiovascular pharmacologic trials: a report from the Cardiac Safety Research Consortium. Am Heart J 2015;169:197-204. DOI: <a className="fw-normal text-danger text-decoration-none" href="/"> https://doi.org/10.1002/ejhf.422</a></p>
                                    <p>Collins SP, Pang PS, Fonarow GC, Yancy CW, Bonow RO, Gheorghiade M. Is hospital admission for heart failure really necessary?: the role of the emergency department and observation unit in preventing hospitalization and rehospitalisation. J Am Coll Cardiol 2013;61:121-6. DOI: <a className="fw-normal text-danger text-decoration-none" href="/"> https://doi.org/10.1002/ejhf.422</a></p>
                                    <p>Harinstein ME, Butler J, Greene SJ, et al. Site selection for heart failure clinical trials in the USA. Heart Fail Rev 2015;20:375-83. DOI: <a className="fw-normal text-danger text-decoration-none" href="/"> https://doi.org/10.1002/ejhf.422</a></p>
                                    <p>Rosano GM, Anker SD, Marrocco W, Coats AJ. Adaptive licensing. A way forward in the approval process of new therapeutic agents in Europe. Int J Cardiol 2015;184:568-9. DOI:<a className="fw-normal text-danger text-decoration-none" href="/"> https://doi.org/10.1002/ejhf.422</a></p>
                                    <p>Pelliccia F, Rosano GM. Back to the future: the crucial role of clinical registries in the era of randomized controlled trials for identifying the optimal medical therapy of heart failure. Eur Heart J Cardiovasc Pharmacother 2015;1:37-8. DOI: <a className="fw-normal text-danger text-decoration-none" href="/"> https://doi.org/10.1002/ejhf.422</a></p>
                                    <p>Capuano A, Coats AJ, Scavone C, Rossi F, Rosano GM. Disclosure of negative trial results. A call for action. Int J Cardiol 2015;198:47-8. DOI: <a className="fw-normal text-danger text-decoration-none" href="/"> https://doi.org/10.1002/ejhf.422</a></p>
                                </div>
                            </div>

                        </div>
                        <div className="accordion-item mt-4">
                            <h2 className="accordion-header border">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    onClick={() => toggleAccordion(4)}
                                >
                                    <div className="pt-3 fs-6 fw-bold d-flex">
                                    <span className="ps-2 pe-2">
                                        <figure>
                                            <img className="custom-icon"  src={citationpng} alt="" />
                                        </figure>
                                    </span>
                                        Citation / Copyright</div>
                                    <FontAwesomeIcon
                                        icon={activeIndex === 4 ? faMinus : faPlus}
                                        className="ms-auto"
                                    />
                                </button>
                            </h2>
                            <div
                                className={`accordion-collapse collapse ${activeIndex === 4 ? "show" : ""
                                    }`}
                            >
                                <div className="accordion-body">
                                <h2 className="bg-light p-2 ps-3 rounded-pill" style={styles.sectionHeader}>How to Cite</h2>
                                <p className="text">Rosano, G. M. (2024). Clinical trial design, endpoints and regulatory considerations in heart failure. Global Cardiology, 2(1). https://doi.org/10.4081/cardio.2024.18</p>
                                <div>
                                <div>
                                    <Dropdown/>
                            </div>
                            <p className="d-flex Copyright pt-4">Copyright (c) 2024 the Author(s)<img className="pb-2 ps-3" src={Linegraphpng} alt="https://creativecommons.org/licenses/by-nc/4.0/" /></p>
                            <p className="Copyright pt-0">This work is licensed under a <span className="text-danger">Creative Commons Attribution-NonCommercial 4.0 International License.</span></p>
                            <p className="Copyright pt-0"><span className="fw-normal">PAGEPress</span> has chosen to apply the <span className="text-danger fw-normal">Creative Commons Attribution NonCommercial 4.0 International License</span> (CC BY-NC 4.0) to all manuscripts to be published.</p>
                        </div>
                                
                    </div>
                </div>  
            </div>
        </div>

                    <div className="d-flex gap-3">
                        <div className="tweet-box">
                            <div className="d-flex gap-2 pt-1">
                                <figure>
                                    <img className="tweet-icon ps-1" src={twitterpng} alt="" />
                                </figure>
                                <p className="text-white ">Tweet</p>
                            </div>
                        </div>
                        <div className="share-box">
                            <div className="d-flex gap-2 pt-1">
                                <figure>
                                    <img className="tweet-icon ps-1 text-white" src={facebookicon} alt="" />
                                </figure>
                                <p className="text-white ">Share</p>
                            </div>
                        </div>
                        <div className="linkid-box">
                            <div className="d-flex gap-2 pt-1">
                                <figure>
                                    <img className="tweet-icon ps-1" src={Linkindicon} alt="" />
                                </figure>
                                <p className="text-white ">Share</p>
                            </div>
                        </div>
                        <div className="watsapp-box">
                            <div className="d-flex gap-2 pt-1">
                                <figure>
                                    <img className="tweet-icon ps-1" src={whatsapppng} alt="" />
                                </figure>
                                <p className="text-white ">Share</p>
                            </div>
                        </div>
                        <div className="share-box">
                            <div className="d-flex gap-2 pt-1">
                                <figure>
                                    <img className="tweet-icon ps-1" src={telegrampng} alt="" />
                                </figure>
                                <p className="text-white ">Share</p>
                            </div>
                        </div>
                        <div className="email-box">
                            <div className="d-flex gap-2 pt-1">
                                <figure>
                                    <img className="tweet-icon ps-1" src={envelopepng} alt="" />
                                </figure>
                                <p className="text-white ">Share</p>
                            </div>
                        </div>      
                    </div>
                    <h4 className="pt-5 text-danger fw-bold">Similar Articles</h4>
                    <ul>
                        <li className="bullet-point fw-light">Rafael Vidal-Pérez, Ewa A. Jankowska,<span className="fw-light text-danger"> The scientific targets: the myocardium, the vasculature and the body’s response to heart failure ,</span> <span className="text-danger "> Global Cardiology: Vol. 2 No. 1 (2024)</span></li>
                        <li className="bullet-point pt-2 fw-light">Giuseppe M.C. Rosano, Jerneja Farkas,<span className="fw-light text-danger">Evolving targets for heart failure: the journey so far ,</span>  <span className="text-danger">Global Cardiology: Vol. 1 No. 1 (2023)</span></li>
                        <li className="bullet-point pt-2 fw-light">Stephan von Haehling,  <span className="fw-light text-danger"> Doehner, Ruben Evertz, Tania Garfias-Veitl, Monika Diek, Mahir Karakas, Ralf Birkemeyer, Gerasimos Fillippatos, Piotr Ponikowski, Michael Böhm, Tim Friede, Stefan D. Anker,</span><span className="fw-light text-danger"> Iron deficiency in heart failure with preserved ejection fraction: rationale and design of the FAIR-HFpEF trial ,</span><span className="text-danger"> Global Cardiology: Vol. 1 No. 1 (2023)</span></li>
                        <li className="bullet-point pt-2 fw-light">Elena Efremova, Alexander Shutov, <span className="fw-light text-danger">Adherence to lifestyle therapy in patients with chronic heart failure and comorbidity , Global Cardiology: Vol. 1 No. 1 (2023)</span></li>
                        <li className="bullet-point pt-2 fw-light">Khawaja M. Talha, Javed Butler, Stephan von Haehling, Mitja Lainscak, Piotr Ponikowski, Stefan D. Anker,<span className="fw-light text-danger"> Defining iron replete status in patients with heart failure treated with intravenous iron , Global Cardiology: Vol. 1 No. 1 (2023)</span></li>
                        <li className="bullet-point pt-2 fw-light">Jelena Čelutkienė, Agnė Monika Jakštaitė, Jolita Badarienė, Svetlana Solovjova, Ieva Slivovskaja, Rokas Navickas, Edita Kazėnaitė, Egidija Rinkūnienė, Alma Čypienė, Jonas Misiūra, Ligita Ryliškytė, Aleksandras Laucevičius, Andrew J.S. Coats,<span className="fw-light text-danger"> Detection of early heart failure with preserved ejection fraction in metabolic syndrome patients detected as part of a national screening program in middle aged subjects , Global Cardiology: Vol. 1 No. 1 (2023)</span></li>
                        <li className="bullet-point pt-2 fw-light">Maryanne Caruana, Miriam Gatt, Oscar Aquilina, Charles Savona Ventura, Victor Grech, Jane Somerville,<span className="fw-light text-danger"> The impact of maternal congenital heart disease on pregnancy outcomes in Malta: a retrospective study , Global Cardiology: Vol. 1 No. 1 (2023)-</span></li>
                        <li className="bullet-point pt-2 fw-light">Maryanne Caruana, Philip Moons, Adrienne H. Kovacs, Koen Luyckx, Corina Thomet, Werner Budts, Maayke Sluman, Katrine Eriksen, Mikael Dellborg, Malin Berghammer, Bengt Johansson, Alexandra Soufi, Edward Callus, Victor Grech, Silke Apers,<span className="fw-light text-danger"> Quality of life in Maltese adults with congenital heart disease: a second look , Global Cardiology: Vol. 2 No. 1 (2024)</span></li>
                        <li className="bullet-point pt-2 fw-light">Eirini Flouda, Athena Stefanatou, Tinia Apergi, Intervention options:<span className="fw-light text-danger"> depression and cardiovascular disease during COVID-19 , Global Cardiology: Vol. 1 No. 1 (2023)</span></li>
                        <li className="bullet-point pt-2 fw-light">Tariq Jamal Siddiqi, Javed Butler, Andrew J.S. Coats, Subodh Verma, Tim Friede, Gerasimos Filippatos, Stefan D. Anker, <span className="fw-light text-danger">SGLT2 inhibitors and risk reduction for mortality in high-risk patients: a meta-analysis of randomized controlled trials , Global Cardiology: Vol. 1 No. 1 (2023)</span></li>
                    </ul>
                    <div className="d-flex gap-2">
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                    </div>
                    <p className="text-muted fw-light">You may also start an <span className="text-danger">advanced similarity search for this article</span>.</p>
                </div>
               
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <figure>
                        <img src={png} alt="" />
                    </figure>
                    <div className="sidebar">
                        <article className="sidebar-title text-white bg-light p-2 border border-dark mb-3">
                            <article className="d-flex ps-3 ">
                                <figure>
                                    <img className="info-icon" src={Infoicon} alt="" />
                                </figure>
                                <p className="heading text-muted fw-light"> Publisher's note</p>
                            </article>
                            <p className="article text-muted fw-light ps-3">All claims expressed in this article are solely those of the authors and do not necessarily represent those of their affiliated organizations, or those of the publisher, the editors and the reviewers. Any product that may be evaluated in this article or claim that may be made by its manufacturer is not guaranteed or endorsed by the publisher.</p>
                        </article>
                       <a className="text-center" href="#" style={styles.pdfButton}>
                            <FaFilePdf className="text-white me-2" style={styles.icon} />
                            <span className="">PDF</span>
                        </a>
                        <a className="text-center mt-3" href="#" style={styles.pdfButton}>
                            <FaFilePdf className="text-white pe-1" style={styles.icon} />
                            <span className="">HTML</span>
                        </a>

                        <h4 className="sidebar-title text-white text-center bg-danger p-2 mt-4">Publication</h4>
                        <div className="border-1 background  p-2">
                            <p className="fw-lighter text-muted">
                                <span className="fw-medium">Published:</span> 
                                <span className="fw-lighter">March 28, 2024</span>
                            </p>
                        </div>
                        <h4 className="sidebar-title text-white text-center bg-danger  p-2 mt-4">Issue</h4>
                        <div className="border-1 background py-2 ps-3 pe-3">
                            <p className="fw-lighter text-muted ">
                            <FaFilePdf className="text-muted pe-1" style={styles.icon} />
                                <span className="fw-medium  text-danger"> Vol. 2 No. 1 (2024)</span>
                            </p>
                        </div>
                        <h4 className="sidebar-title text-white text-center bg-danger p-2 mt-4">Keywords</h4>
                        <div className="border-1 background  py-2 ps-3 pe-3">
                            <p className="fw-lighter text-muted">
                                <span className="fw-normal text-danger"> Heart failure,</span>
                                <span className="fw-normal text-danger">endpoints,</span>
                                <span className="fw-normal text-danger">regulatory approval</span>
                            </p>
                        </div>
                        <h4 className="sidebar-title text-white text-center bg-danger  p-2 mt-4">Statistics</h4>
                        <div className="border-1 background  py-2 ps-3 pe-3 ">
                            <article className="fw-lighter text-muted">
                            <div className="d-flex justify-content-between">
                            <div className="d-flex">
                                    <span> <FaEye className="me-2" /></span>
                                    <span className="fw-normal text-muted">   Abstract Views:</span>
                                </div>
                                <div>3284</div>
                            </div>
                            <div className="d-flex justify-content-between pt-2">
                            <div className="d-flex">
                                    <span> <FaEye className="me-2" /></span>
                                    <span className="fw-normal text-muted">  PDF:</span>
                                </div>
                                <div>177</div>
                            </div>
                            <div className="d-flex justify-content-between pt-2">
                                <div className="d-flex">
                                    <span> <FaEye className="me-2" /></span>
                                    <span className="fw-normal text-muted">  HTML:</span>
                                </div>
                                <div>88</div>
                            </div>
                                 <p></p>
                            </article>
                        </div>
                    </div>
                </div>
                </div>
            </div>
    );
};

const styles = {
    container: {
      display: "flex",
      justifyContent: "space-between",
      padding: "20px",
      fontFamily: "Roboto, sans-serif",
    },
    bradcrumBg: {
      width: "600px",
    },
    breadcrumb: {
      marginBottom: "10px",
      fontSize: "12px",
      color: "#888",
    },
    title: {
      fontSize: "28px",
      color: "#d9534f",
    },
    publishDate: {
      color: "#555",
      marginBottom: "20px",
    },
    coverSection: {
      marginBottom: "30px",
    },
    coverImage: {
      width: "150px",
      height: "auto",
    },
    coverTitle: {
      fontSize: "14px",
      marginTop: "10px",
    },
    editorialSection: {
      marginBottom: "40px",
      flexGrow: "1",
    },
    sectionHeader: {
      width: "680px",
      color: "#d9534f",
      fontSize: "22px",
      marginBottom: "10px",
    },
    editorialContent: {
      padding: "20px",
      borderRadius: "8px",
    },
    articleTitle: {
      color: "#d9534f",
      fontSize: "18px",
      marginBottom: "5px",
    },
    author: {
      color: "#666",
      marginBottom: "15px",
    },
    doiSection: {
      display: "flex",
      alignItems: "center",
      marginBottom: "15px",
    },
    doiLink: {
      color: "#d9534f",
      marginLeft: "5px",
      textDecoration: "none",
    },
    emojiIcon: {
      fontSize: "18px",
    },
    stats: {
      display: "flex",
      gap: "15px",
      marginBottom: "20px",
    },
    statItem: {
      display: "flex",
      alignItems: "center",
      gap: "5px",
      fontSize: "14px",
    },
    icon: {
      fontSize: "15px",
    },
    pdfButton: {
      display: "block",
      alignItems: "center",
      backgroundColor: "#d9534f",
      fontSize: "17px",
      color: "white",
      padding: "6px 22px",
      borderRadius: "4px",
      textDecoration: "none",
      fontWeight: "bold",
    },
  };

export default Clinical;
