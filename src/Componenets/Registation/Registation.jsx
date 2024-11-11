import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FaEye } from "react-icons/fa";
import { Accordion } from "react-bootstrap";
import Infopng from "../../Assets/info.svg";

const Announcements = () => {
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
                <a className="text-decoration-none text-danger" href="/">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <a className="text-decoration-none text-muted" href="/About">
                  Register
                </a>
              </li>
            </ol>
          </nav>

          <h1 className="fw-bold main-heading">Register</h1>
          <div>
            <FontAwesomeIcon icon="fa-solid fa-circle-info" />
            <p>All fields are required.</p>
          </div>
          <h5 className="fw-bold">Profile</h5>
          <form class="row">
            <div className="pt-3">
              <div class="col-md-4 d-block">
                <label className="form-label fst-italic">Given Name *</label>
                <input type="text" class="form-control" />
                <div class="valid-feedback">Looks good!</div>
              </div>
            </div>
            <div className="pt-3">
              <div class="col-md-4 d-block">
                <label className=" form-label fst-italic">Family Name *</label>
                <input type="text" class="form-control" />
                <div class="valid-feedback">Looks good!</div>
              </div>
            </div>
            <div className="pt-3">
              <div class="col-md-4 d-block">
                <label className=" form-label fst-italic">Affiliation *</label>
                <input type="text" class="form-control" />
                <div class="valid-feedback">Looks good!</div>
              </div>
            </div>
            <div className="pt-3">
              <div class="col-md-4 d-block">
                <label className=" form-label fst-italic">Country *</label>
                <input type="text" class="form-control" />
                <div class="valid-feedback">Looks good!</div>
              </div>
            </div>
            <h5 className="fw-bold pt-4">Login</h5>
            <div className="pt-3">
              <div class="col-md-4 d-block">
                <label className=" form-label fst-italic">Email *</label>
                <input type="text" class="form-control" />
                <div class="valid-feedback">Looks good!</div>
              </div>
            </div>

            <div className="pt-3">
              <div class="col-md-4 d-block">
                <label className=" form-label fst-italic">Username *</label>
                <input type="text" class="form-control" />
                <div class="valid-feedback">Looks good!</div>
              </div>
            </div>

            <div className="pt-3">
              <div class="col-md-4 d-block">
                <label className=" form-label fst-italic">Password *</label>
                <input type="text" class="form-control" />
                <div class="valid-feedback">Looks good!</div>
              </div>
            </div>
            <div className="pt-3">
              <div className="col-md-4 d-block">
                <label className=" form-label fst-italic">Repeat Password *</label>
                <input type="text" className="form-control" />
                <div className="valid-feedback">Looks good!</div>
              </div>
            </div>


            <div className="col-12 mt-4 text-muted mt-5 mb-5">
              <div className="form-check">
                <input  className="form-check-input"  type="checkbox"  value=""  id="invalidCheck"  require/>
                <label className="form-check-label" for="invalidCheck">
                  Yes, I agree to have my data collected and stored according to the  <span className="text-danger">privacy statement</span>
                </label>
                <div className="invalid-feedback">
                  Yes, I agree to have my data collected and stored according to the 
                </div>
              </div>
              <div className="form-check mt-4">
                <input  className="form-check-input"  type="checkbox"  value=""  id="invalidCheck"  require/>
                <label className="form-check-label" for="invalidCheck">  
							    Yes, I would like to be notified of new publications and announcements.
                </label>
                <div class="invalid-feedback">
                  You must agree before submitting.
                </div>
              </div>
              <div className="form-check text-muted mt-4">
                <input  className="form-check-input"  type="checkbox"  value=""  id="invalidCheck"  require/>
                <label className="form-check-label" for="invalidCheck">
										Yes, I would like to be contacted with requests to review submissions to this journal.
                </label>
                <div className="invalid-feedback">
                  You must agree before submitting.
                </div>
              </div>
            </div>
            <div className="buttons d-flex gap-3">
            <button type="button" className=" custom btn btn-secondary">Secondary</button>
            <div className="col-1 pt-1">
              <a className="text-danger">
                Login
              </a>
            </div>
            </div>
            
          </form>
          
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
              <li className="list-group-item bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
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
            <div className="border-1 bg-light pt-2 ps-3 pe-3 pb-3 rounded border-bottom">
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

export default Announcements;
