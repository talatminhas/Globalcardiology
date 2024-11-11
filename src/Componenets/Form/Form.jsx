import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FaEye } from "react-icons/fa";
import logopng from "../../Images/pagepress_logo.png";



const Form = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container badcrum">
      <div className="row">
        {/* Main Content */}
        <div className="col-lg-9">
          <nav aria-label="breadcrumb bg-light">
            <ol className="breadcrumb bg-light p-3">
              <li className="breadcrumb-item">
                <a className="text-decoration-none text-danger" href="/">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <a className="text-decoration-none text-muted" href="/About">
                  Contact
                </a>
              </li>
            </ol>
          </nav>

          <h1 className="main-heading">Contact</h1>
          <figure>
            <img className="logo pt-4 pb-4" src={logopng} alt="" />
          </figure>
          <div>
            <p>PAGEPress Publications</p>
            <p>via A. Cavagna Sangiuliani, 5 - 27100 Pavia, Italy</p>
          </div>
          <div className="col-lg-12">
            <div className="d-flex justify-content-between pt-4">
            <div>
                <h5 className="fw-bold">Principal Contact</h5>
                <p >Monika Diek</p>
                <p><a className="text-danger" href="/">eo@globalcardiology.info</a></p>
            </div>
            <div>
            <h5 className="fw-bold">Support Contact</h5>
                <p className="fw-light">Emanuela Fusinato, PAGEPress Publications, Pavia, Italy</p>
                <h5 className="fw-bold">Phone</h5>
                <p className="fw-light">39.0382.1549020</p>
                <p><a className="text-danger"    href="/">emanuela.fusinato@pagepress.org</a></p>
            </div>
          </div>
            </div>
        </div>

        <div className="col-md-3">
          <div className="side sidebar">
            <h4 className="sidebar-title text-white text-center bg-danger p-2">
              FOR AUTHORS
            </h4>
            <ul className="list-group ">
              <li className="bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
                <a
                  className="text-decoration-none text-muted fw-light"
                  href="/submission"
                >
                  Submit Your Paper
                </a>
              </li>
              <li className="bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
                <a
                  className="text-decoration-none text-muted fw-light"
                  href="/guide-authors"
                >
                  Guide for Authors
                </a>
              </li>
              <li className="bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
                <a
                  className="text-decoration-none text-muted fw-light"
                  href="/benefits-authors"
                >
                  Benefits for Authors
                </a>
              </li>
              <li className="bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
                <a
                  className="text-decoration-none text-muted fw-light"
                  href="/write-scientific-paper"
                >
                  How to write a Scientific paper
                </a>
              </li>
              <li className="bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
                <a
                  className="text-decoration-none text-muted fw-light"
                  href="/write-review-article "
                >
                  How to write a Review article
                </a>
              </li>
              <li className="bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
                <a
                  className="text-decoration-none text-muted fw-light"
                  href="/article-processing-charge"
                >
                  Article Processing Charge
                </a>
              </li>
            </ul>

            <h4 className="sidebar-title text-white text-center bg-danger p-2 mt-4">
              FOR REVIEWERS
            </h4>
            <ul className="list-group">
              <li className="bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
                <a
                  className="text-decoration-none text-muted fw-light"
                  href="/how-to-review"
                >
                  How to Review
                </a>
              </li>
            </ul>

            <h4 className="sidebar-title text-white text-center bg-danger p-2 mt-4">
              Most read last month
            </h4>
            <div className="border-1 bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
              <p className="fw-light text-muted">
                "Baseline echocardiographic characteristics of patients enrolled
                in the randomized investigation of MitraClip device in heart
                failure (RESHAPE HF-2) trial: comparison with COAPT and
                Mitra-FR"
              </p>
              <div>
                <FaEye className="me-2" />
                <span className="fw-light text-muted">70</span>
              </div>
            </div>
            <div className="border-1 bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
              <p className="fw-light text-muted">
                "The effect of SGLT2 inhibitors on health status in patients
                with heart failure: a systematic review and meta-analysis"
              </p>
              <div>
                <FaEye className="me-2" />
                <span className="fw-light text-muted">58</span>
              </div>
            </div>
            <div className="border-1 bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
              <p className="fw-light text-muted">
                "The effect of SGLT2 inhibitors on health status in patients
                with heart failure: a systematic review and meta-analysis"
              </p>
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

export default Form;
