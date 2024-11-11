import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import "./Copy.css"

const Copy = () => {
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
                                <a className="text-decoration-none text-muted" href="/About">Copyright & Licensing</a>
                            </li>
                        </ol>
                    </nav>

                    <h1 className="main-heading">Copyright & Licensing </h1>

                    <div className="accordion">
                        <div className="accordion">

                            <div className="col-lg-11 ">
                                <div className="content">
                                    <p>
                                        <h5 className="pt-4 pb-4">Copyright
                                        </h5>
                                        <div className="Copy-text fw-light">
                                            Copyright on any article in the <span className="fst-italic text-danger fw-semibold">Global Cardiology </span> is retained by the author(s) under the <a  className="text-danger fw-semibold text-decoration-none"href="/">Creative Commons license</a>, which permits to copy, redistribute remix, transform, and build upon the material in any non-commercial medium or format, provided the original work is properly cited
                                        </div>

                                        <article className="pt-4 pb-4">
                                            <h5>License agreement
                                            </h5>

                                            <p className="Copy-text fw-light pt-3">uthors grant PAGEPress a license to publish the article and identify PAGEPress as the original publisher. Authors also grant any third party the right to use, distribute and reproduce the article in any non-commercial medium, provided the original work is properly cited.</p>

                                        </article>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="side sidebar">
                        <h4 className="sidebar-title text-white text-center bg-danger p-2">FOR AUTHORS</h4>
                        <ul className="list-group ">
                            <li className="bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
                                <a className="text-decoration-none text-muted fw-light text-link" href="/submission">Submit Your Paper</a>
                            </li>
                            <li className="bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
                                <a className="text-decoration-none text-muted fw-light text-link" href="/guide">Guide for Authors</a>
                            </li>
                            <li className="bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
                                <a className="text-decoration-none text-muted fw-light text-link" href="/benefits-authors">Benefits for Authors</a>
                            </li>
                            <li className="bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
                                <a className="text-decoration-none text-muted fw-light text-link" href="/write-scientific-paper">How to write a Scientific paper</a>
                            </li>
                            <li className="bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
                                <a className="text-decoration-none text-muted fw-light text-link" href="/write-review-article ">How to write a Review article</a>
                            </li>
                            <li className="bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
                                <a className="text-decoration-none text-muted fw-light text-link" href="/article-processing-charge">Article Processing Charge</a>
                            </li>
                        </ul>

                        <h4 className="sidebar-title text-white text-center bg-danger p-2 mt-4">FOR REVIEWERS</h4>
                        <ul className="list-group">
                            <li className="bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
                                <a className="text-decoration-none text-muted fw-light text-link" href="/how-to-review">How to Review</a>
                            </li>
                        </ul>

                        <h4 className="sidebar-title text-white text-center bg-danger p-2 mt-4">Most read last month</h4>
                        <div className="border-1 bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
                            <p className="fw-light text-muted">
                                "Baseline echocardiographic characteristics of patients enrolled in the randomized investigation of MitraClip device in heart failure (RESHAPE HF-2) trial: comparison with COAPT and Mitra-FR"</p>
                            <div>
                                <FaEye className="me-2" />
                                <span className="fw-light text-muted">70</span>
                            </div>
                        </div>
                        <div className="border-1 bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
                            <p className="fw-light text-muted">
                                "The effect of SGLT2 inhibitors on health status in patients with heart failure: a systematic review and meta-analysis"</p>
                            <div>
                                <FaEye className="me-2" />
                                <span className="fw-light text-muted">58</span>
                            </div>
                        </div>
                        <div className="border-1 bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
                            <p className="fw-light text-muted">
                                "The effect of SGLT2 inhibitors on health status in patients with heart failure: a systematic review and meta-analysis"</p>
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

export default Copy;
