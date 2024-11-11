import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FaEye } from "react-icons/fa";
import { Accordion } from "react-bootstrap";
import Sidebar from "../SideBar/SideNav";
import buttonpng from "../../Images/Button.png"





const Article = () => {
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
                  Contact
                </a>
              </li>
            </ol>
          </nav>

          <h1 className="pt-2 fw-bold main-heading">Article Processing Charge</h1>
          <p className="pt-3 fw-light">Open access publishing does have its costs. Since PAGEPress does not have subscription charges for its research content it can defray publishing costs from the Article Processing Charges. This is because PAGEPress believes that the interests of the scientific community can best be served by an immediate, worldwide, unlimited, open access to the full text of research articles. Information regarding authors’ payment are not made available to editors and reviewers ensuring that they cannot be influenced in their selection of papers for publication by payment conditions or limitations.</p>
          <h4 className="sub-heading fw-bold pt-3">Article Processing Charges</h4>
            <ul className="points pt-1">
            <li className="pt-2 fw-light fw-normal">Full papers/reviews: €1950,00</li>
            <li className=" fw-normal">Editorials: €990,00</li>
            <li className=" fw-normal">Case reports: €990,00</li>
            <li className=" fw-normal">Letters: €490,00</li>
            <li className="fst-italic fw-normal">20% discount for members of the iCARDIO-Alliance (Full papers/reviews)</li>
            <li className="fst-italic fw-normal">50% discount for authors from the <span className="text-danger">United Nations list of Least Developed Countries</span> (see Terms for Discounts below)</li>
            </ul>
            <p className="pt-3 fw-light">Our fees cover the costs of peer review, copyediting, publication, different format of publication (HTML, PDF), inclusion in many Open Access databases.</p>
            
            <p className="pt-3 fw-light">The listed fees are net prices and applicable VAT is added (details on this can be found here)” </p>
            <h4 className="sub-heading fw-bold pt-3">When and how to pay</h4>
            <p className="pt-3 fw-light">Upon editorial acceptance of an article, the corresponding author will be notified that payment is due.</p>
            <p className="pt-1 fw-light"><span className="fw-normal">We advise prompt payment as we are unable to publish accepted articles until full payment has been received.</span> Payment can be made by one of the following methods:</p>

            <ul>
              <li className="pt-3 fw-light"><span className="fw-normal">PayPal/Credit cards</span> – These are the most recommended and secure payment systems, enabling you to pay without sharing your financial information and getting your payment receipt immediately. Once payment has been processed a regular invoice will be issued.</li>
              <li className="pt-3 fw-light"><span className="fw-normal">Bank transfer</span> – Payment is due within 30 days of the manuscript receiving editorial acceptance. Bank charges to be borne by payer. Once payment has been processed a regular invoice will be issued.</li>
              <p className="fw-light fst-italic">Name of the bank: Banca Popolare di Sondrio, Ag. 1, Pavia, Italy</p>
              <p className="fw-light fst-italic">Name of the account: PAGEPress SRL, Pavia, Italy.</p>
              <p className="fw-light fst-italic">IBAN: IT85Y0569611301000005086X83 - BIC: POSOIT22</p>
            </ul>

            <h4 className="sub-heading fw-bold pt-2">Terms for Discounts</h4>
            <p className="fw-light pt-3">Authors coming from the countries included in the “United Nations list of Least Developed Countries” are entitled to ask for a discount.</p>
            
            <ul>
              <li className="fw-light pt-3">Authors should apply for discounts after receiving the acceptance letter.</li>
              <li className="fw-light">All applications are subject to approval by the publisher.</li>
              <li className="fw-light">Discounts may not be transferred to a different author or journal</li>
            </ul>

            <div className="d-flex flex-column justify-content-center align-items-center">
              <h6 className="fw-bold px-3 py-3">PayPal direct link</h6>
                  <figure>
                    <img src={buttonpng} alt="" />
                  </figure>
              </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
            <Sidebar/>
        </div>
        </div>
      </div>
  );
};


export default Article;

