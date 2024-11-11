import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FaEye } from "react-icons/fa";
import { Accordion } from "react-bootstrap";
import Sidebar from "../SideBar/SideNav";
import './Benefits.css'





const Benefits = () => {
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
                  
                </a>
              </li>
            </ol>
          </nav>

          <h1 className="fw-bold main-heading">Benefits for Authors</h1>
          <p className="pt-3 fw-light">Articles published in the <b>Global Cardiology</b> are Open Access, giving a number of advantages for the widest dissemination, visibility, and impact of your research.</p>
          <p className="pt-3 fw-light">Publishing as Open access offers authors a number of benefits, including:</p>
            <ul>
            <li className="pt-3 fw-light"><b>Higher and faster visibility:</b> Open Access articles are viewed on a global scale, and contents are available to everyone.</li>
            <li className="pt-1 fw-light"><b>Wider impact:</b>  Thanks to a permissive license like CC BY, scientists and scholars are endowed to make progress on existing researches, thus facilitating the generation of new data.</li>
            <li className="pt-1 fw-light"><b>Increased citation:</b> Studies have shown that Open Access articles are regarded and cited more often than established paywall journals/articles.</li>
            <li className="pt-1 fw-light"><b>Perpetual accessibility:</b> Open Access articles are hosted on dedicated servers, being accessible to everyone endlessly.</li>
            <li className="pt-1 fw-light"><b>Funding opportunities:</b> an increasing number of funding bodies and agencies requires their grant holders to publish their researches as Open Access articles to be comprehensively available, free and without restrictions on re-use.</li>
            </ul>
            <p className="pt-3 fw-light"><b>Copyright</b> on any article in the <b>Global Cardiology</b> is retained by the author(s) under a <span className="text-danger">CC BY-NC</span> license, which permits to copy, redistribute, remix, transform, and build upon the material in any non-commercial medium or format. This type of license is mandatory for many research funding bodies, and allows for maximum dissemination and re-use of open access materials.</p>
            <h4 className="sub-heading fw-bold pt-3">Wide-ranging and rigorous peer review</h4>
            <p className="pt-3 fw-light">Manuscripts are evaluated by skilled reviewers who are authorities in your field. Our journal follows the ICMJE Recommendations for the Conduct, Reporting, Editing, and Publication of Scholarly Work in Medical Journals and the Principles of Transparency and Best Practice in Scholarly Publishing (joint statement by <span className="text-danger">COPE</span>, <span className="text-danger">DOAJ</span>, <span className="text-danger">WAME</span>, and <span className="text-danger">OASPA</span>).</p>
            <h4 className="sub-heading fw-bold pt-3">Global spread and discoverability</h4>
            <p className="pt-3 fw-light">Article level metrics for each article show your research impact on the journal site and provide understandings in the ways people interact with your research in the online environment.</p>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
            <Sidebar/>
        </div>
        </div>
      </div>
  );
};


export default Benefits

