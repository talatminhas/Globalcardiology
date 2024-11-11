import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FaEye } from "react-icons/fa";
import { Accordion } from "react-bootstrap";
import Sidebar from "../SideBar/SideNav";
import "./Submission.css"





const Submission = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const NumberedList = () => {
    const items = ['item 1', 'item 2','item 3'];
  }

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
                    Submissions
                </a>
              </li>
            </ol>
          </nav>
            
            <h1 className="fw-bold main-heading pt-4">Submissions</h1>
            <div className="col-lg-12">
                <div className="border mt-4">
                    <div className="p-4">
                        <p className="sub-content fw-light">To submit a new paper/revised paper to our journal:</p>
                        <p className="d-flex">
                            <span className="sub-content fw-light"> Register at:</span>
                            <span className="sub-content fw-light text-danger"><a className="text-danger text-decoration-none" href="/">https://www.editorialmanager.com/globalcardiol;</a></span>
                        </p>
                        <p className="sub-content fw-light">Follow the Guidelines for Authors for preparation of your manuscript;</p>
                        <p className="sub-content fw-light">Read our Editorial Policies and our Competing Interest policies;</p>
                        <p className="d-flex">
                            <span className="sub-content fw-light">Login In at:</span>
                            <span className="sub-content fw-light"><a className="text-danger text-decoration-none" href="/">https://www.editorialmanager.com/globalcardiol;</a></span>
                        </p>
                    </div>
                </div>
                <h2 className="section-head pt-4">Author Guidelines</h2>
                <h2 className="section-head pt-4">To submit a new paper/revised paper to our journal:</h2>
                <ol>
                    <li className="sub-content fw-light">Register at:<a className="text-danger text-decoration-none" href="/"> https://www.editorialmanager.com/globalcardiol/</a></li>
                    <li className="sub-content fw-light">Follow the <span className="fw-normal text-danger text-decoration-none"> Guidelines for Authors</span> for preparation of your manuscript;</li>
                    <li className="sub-content fw-light">Read our <b>Editorial Policies</b> and our <b>Competing Interest</b> policies;</li>
                    <li className="sub-content fw-light">Log in at:<a className="text-danger text-decoration-none" href="/"> https://www.editorialmanager.com/globalcardiol/;</a></li>
                </ol>
                <h2 className="section-head pt-4">Copyright Notice</h2>
                <p className="pt-2">PAGEPress <span className="sub-content fw-light"> has chosen to apply the</span> <a className="fw-normal text-danger text-decoration-none" href="/"> Creative Commons Attribution 4.0 International License (CC BY-NC 4.0)</a><span className="sub-content fw-light"> to all manuscripts to be published</span></p>
                <p className="pt-4">An PAGEPress <span className="sub-content fw-light"> has chosen to apply the</span><span className="sub-content fw-light">Publication is one that meets the following two conditions:</span></p>
                <ol>
                    <li className="sub-content fw-light">the author(s) and copyright holder(s) grant(s) to all users a free, irrevocable, worldwide, perpetual right of access to, and a license to copy, use, distribute, transmit and display the work publicly and to make and distribute derivative works, in any digital medium for any responsible purpose, subject to proper attribution of authorship, as well as the right to make small numbers of printed copies for their personal use.</li>
                    <li className="sub-content fw-light">a complete version of the work and all supplemental materials, including a copy of the permission as stated above, in a suitable standard electronic format is deposited immediately upon initial publication in at least one online repository that is supported by an academic institution, scholarly society, government agency, or other well-established organization that seeks to enable open access, unrestricted distribution, interoperability, and long-term archiving.</li>
                </ol>
                <p className="sub-content fw-light pt-4">Authors who publish with this journal agree to the following terms:</p>
                <ol>
                    <li className="sub-content fw-light">Authors retain copyright and grant the journal right of first publication with the work simultaneously licensed under a Creative Commons Attribution License that allows others to share the work with an acknowledgement of the work's authorship and initial publication in this journal.</li>
                    <li className="sub-content fw-light">Authors are able to enter into separate, additional contractual arrangements for the non-exclusive distribution of the journal's published version of the work (e.g., post it to an institutional repository or publish it in a book), with an acknowledgement of its initial publication in this journal.</li>
                    <li className="sub-content fw-light">Authors are permitted and encouraged to post their work online (e.g., in institutional repositories or on their website) prior to and during the submission process, as it can lead to productive exchanges, as well as earlier and greater citation of published work.</li>
                </ol>
                <h2 className="section-head pt-4">Privacy Statement</h2>
                <p className="sub-content fw-light">The names and email addresses entered in this journal site will be used exclusively for the stated purposes of this journal and will not be made available for any other purpose or to any other party.</p>
            </div>

        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <Sidebar/>
        </div>
      </div>
    </div>
  );
};


export default Submission