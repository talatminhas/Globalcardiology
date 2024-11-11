import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FaEye } from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';



const Log = () => {
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
                    Login
                </a>
              </li>
            </ol>
          </nav>

          <h1 className="main-heading">Login</h1>
          <p className="pt-4 text-light text-muted">Required fields are marked with an asterisk: *</p>
          <div className="col-lg-4 mt-5">
            <label htmlFor="text">Username *</label>
            <InputGroup className="mt-2">
                <Form.Control  aria-label="Username"  aria-describedby="basic-addon1" />
            </InputGroup>
            <label className="fst-italic mt-4" htmlFor="text">Password *</label>
            <InputGroup className="mt-2">
                <Form.Control  aria-label="Username"  aria-describedby="basic-addon1" />
            </InputGroup>
            <p className="fw-light text-danger mt-2">Forget your password?</p>
        </div>
        <div className="d-flex align-items-center gap-2">
        <input className="pt-2" type="checkbox" />
            <p className="pt-3 text-muted"> Keep me logged in</p>
        </div>
          <div className="d-flex gap-3 align-items-center ms-5">
          <span className="ms-5 text-danger text-decoration-none"><a className="text-danger text-decoration-none" href="/">Register</a></span>
            
            <button className="pt-2 ps-3 pb-2 pe-3 bg-gray text-secondry fw-bold rounded">Login</button>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="side sidebar">
            <h4 className="sidebar-title text-white text-center bg-danger p-2">
              FOR AUTHORS
            </h4>
            <ul className="list-group ">
              <li className="bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
                <a
                  className="text-decoration-none text-muted fw-light"
                  href="/submit-paper"
                >
                  Submit Your Paper
                </a>
              </li>
              <li className="bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
                <a
                  className="text-decoration-none text-muted fw-light"
                  href="/guide"
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
              <li className=" bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
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

export default Log;
