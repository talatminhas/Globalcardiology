import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FaEye } from "react-icons/fa";
import { Accordion } from "react-bootstrap";
import Sidebar from "../SideBar/SideNav";





const Guidelines = () => {
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

          <h1 className="fw-bold main-heading">Author Guidelines for Global Cardiology</h1>
          <h4 className="fw-bold pt-3">Aims and scope</h4>
          <p className="sub-content fw-light lh-lg pt-3">The  <strong>Global Cardiology</strong> journal is an open access, peer-reviewed international journal that aims to publish original articles, reviews, mini reviews, case reports, guidelines, white papers, news, meeting reports, plain language summaries, editorials and letters to the editor related to the diagnosis, treatment, and prevention of cardiovascular diseases. The scope of the journal includes all aspects of basic, translational and clinical science in cardiology, including but not limited to coronary artery disease, heart failure, cardiomyopathies, arrhythmias, valvular heart disease, hypertension, congenital heart disease, cardiac imaging, interventional cardiology, cardiac surgery, co-morbidities leading to cardiovascular disease, as well as epidemiology, prevention and rehabilitation of cardiovascular diseases. The journal aims to provide a platform for the dissemination of new knowledge and advancements in the field of cardiology, as well as to promote interdisciplinary collaboration among researchers, clinicians, healthcare professionals and the medically interested public. The target audience of a general cardiology journal includes cardiologists, internists, primary care physicians, researchers, and other healthcare professionals involved in the care of patients with cardiovascular diseases. </p>
          <p className="sub-content fw-light lh-lg pt-4">Global Cardiology journal accepts the following categories of articles: Reviews, Original Articles, Case Reports, Editorials, Letters to the Editors.
          See the "Manuscript categories and criteria" section below for more information.</p>

          <div className="accordion mt-4" id="journalAccordion">
                        <div className="accordion-item mb-4">
                            <h2 className="accordion-header border">
                                <button
                                    className="accordion-button"
                                    type="button"
                                    onClick={() => toggleAccordion(1)}
                                >
                                    Focus, Scope and Objectives
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
                                <div className="accordion-body">
                                    <p className="fw-light text-black fs-5 fw-light">
                                        Manuscripts will be carefully scrutinized for evidence of plagiarism, duplication and data manipulation; in particular, images will be carefully examined for any indication of intentional improper modification. Any suspected misconduct will result in a quick rejection and is then reported to the <a className="text-danger fw-normal " href="/"> US Office of Research Integrity</a>.
                                    </p>
                                    <p>
                                        <span className="text-normal">Ensure that the following items are present.</span>One author has been designated as the corresponding author with contact details:
                                    </p>
                                    <p>
                                        The target audience of a general cardiology journal includes
                                        cardiologists, internists, primary care physicians,
                                        researchers, and other healthcare professionals involved in
                                        the care of patients with cardiovascular diseases.
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
                                    <div className="fs-6 fw-bold">Peer review process</div>
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
                                <div className="accordion-body">

                                    <h5 className=" fs-6 fw-semibold pb-3">Introduction</h5>
                                    <p className="fw-light">
                                        Peer review is applied to all research articles and the majority of other article types published in Global Cardiology. This usually entails at least two independent, expert peer reviewers.</p>

                                    <h5 className="fs-6 fw-bold pt-3">Policy</h5>
                                    <p className="fw-light">
                                        All submissions to <b className="fw-medium">Global Cardiology </b> are first checked for completeness (criteria for desk reject are available in the <b className="text-danger">Guide for Authors</b>) before being sent to an Editor, who decides whether they are suitable for peer review. If an Editor is on the author list or has a competing interest in a particular manuscript, another member of the Editorial Board will be assigned to oversee peer review. When making a decision, Editors will consider the peer-reviewed reports, but they will not be bound by the opinions or recommendations contained in them. A single peer reviewer's or the Editor's concern may result in the manuscript being rejected. Peer review reports are sent to authors along with the editorial decision on their manuscript.

                                        At <b className="fw-medium">Global Cardiology</b> papers undergo a <a className="text-black fw-medium" href="/">single-blind review process </a> - meaning that the reviewers’ identity is not shared with the authors.
                                    </p>

                                    <h5 className="fs-6 fw-bold pt-2">Selection</h5>.
                                    <p className="fw-light">
                                        Peer reviewer selection is critical to the publication process. A variety of factors influence it, including expertise, reputation, specific recommendations, conflicts of interest, and previous performance. All of these qualities are highly desirable: speed, thoroughness, sound reasoning, and collegiality.

                                        Before accepting an invitation to review a manuscript, potential peer reviewers should notify the Editor of any potential conflicts of interest. Editors' and peer reviewers' communications contain confidential information that should not be shared with third parties.

                                        <b>Global Cardiology</b> is committed to making editorial decisions and publishing them as soon as possible, and we believe that an efficient editorial process benefits both our authors and the research community as a whole. As a result, we ask reviewers to respond within the agreed-upon time frame. If reviewers anticipate a delay, we ask that they notify us so that we can keep the authors updated and, if necessary, find alternative solutions.
                                    </p>
                                    <h5 className="fs-6 fw-bold">Diversity and equity</h5>
                                    <p className="fw-light">
                                        <b>Global Cardiology</b> is committed to diversity, equity, and inclusion, and strives for demographic diversity among peer reviewers. When inviting peer reviewers, editors are bly encouraged to consider geographical regions, gender identities, racial/ethnic groups, and other groups.
                                    </p>

                                    <h5 className="fs-6 fw-bold">Misconduct</h5>
                                    <p className="fw-light">
                                        False or misleading information, such as identity theft and suggesting fake peer-reviewers, will result in the manuscript being rejected, further investigation in accordance with PAGEPress' misconduct policy <a className="hover-text-underline text-decoration-none" href=""><b className="text-danger hover-text-underine">(https://www.pagepress.org/site/plagiarism_misconduct) </b></a>, and notification to the authors' institutions/employers. PAGEPress journals follow the Committee on Publication Ethics (COPE) guidance about peer reviewer fraud/falsification.
                                    </p>
                                    <h5 className="fs-6 fw-bold">Guidance</h5>
                                    <p className="fw-light">
                                        The primary goal of peer review is to provide the Editor with the information needed to make a fair, evidence-based decision that adheres to the journal's editorial criteria. Review reports should also assist authors in revising their paper so that it can be accepted for publication. Reports that include a recommendation to reject the paper should explain the major flaws in the research; this will help the authors prepare their manuscript for possible re-submission (if allowed by the Editor) or submission to a different journal.

                                        A quick guide to reviewing is available here

                                        <p className="fw-medium pt-3">Before submitting a report, reviewers should ask themselves the following questions:</p>
                                        <ul>
                                            <li className="fw-medium pt-3" >How would you react if you received this report?</li>
                                            <li className="fw-medium pt-3" >Do you find the tone offensive?</li>
                                            <li className="fw-medium pt-3" >Is it polite and professional?</li>
                                            <li className="fw-medium pt-3" >Do the authors or their competitors receive any unnecessary personal or antagonistic remarks?</li>
                                            <li className="fw-medium pt-3" >Please keep in mind that any offensive language in your report may be removed by the Editor.</li>
                                        </ul>

                                    </p>
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
                                    <div className="fs-6 fw-bold">Publication Frequency</div>
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
                                    <p className="fw-light">
                                        All papers are published as soon as they have been accepted, by adding them to the "current" volume's Table of Contents.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="accordion-item mb-4">
                            <h2 className="accordion-header border">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    onClick={() => toggleAccordion(4)}
                                >
                                    <div className="fs-6 fw-bold">Open Access Policy</div>
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
                                    <p className="fw-light">
                                        This journal provides immediate open access to its content on the principle that making research freely available to the public supports a greater global exchange of knowledge.

                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="accordion-item mb-4">
                            <h2 className="accordion-header border">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    onClick={() => toggleAccordion(5)}
                                >
                                    <div className="fs-6 fw-bold">Archiving</div>
                                    <FontAwesomeIcon
                                        icon={activeIndex === 5 ? faMinus : faPlus}
                                        className="ms-auto"
                                    />
                                </button>
                            </h2>
                            <div
                                className={`accordion-collapse collapse ${activeIndex === 5 ? "show" : ""
                                    }`}
                            >
                                <div className="accordion-body">
                                    <p className="fw-light">
                                        This journal utilizes the <span className="text-danger fw-normal">PKP Preservation Network </span>, the Global <span className="text-danger fw-normal">LOCKSS Network</span> and<span className="text-danger fw-normal"> Portico</span> to create a distributed archiving system among participating libraries and permits those libraries to create permanent archives of the journal for purposes of preservation and restoration.

                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item mb-4">
                            <h2 className="accordion-header border">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    onClick={() => toggleAccordion(6)}
                                >
                                    <div className="fs-6 fw-bold">Pre- and post-prints</div>
                                    <FontAwesomeIcon
                                        icon={activeIndex === 6 ? faMinus : faPlus}
                                        className="ms-auto"
                                    />
                                </button>
                            </h2>
                            <div
                                className={`accordion-collapse collapse ${activeIndex === 6 ? "show" : ""
                                    }`}
                            >
                                <div className="accordion-body">
                                    <p className="fw-light">
                                    PAGEPress allows and encourages authors to deposit both their pre- and post-prints in Open-Access institutional archives or repositories. The primary benefit of pre- and post-print self-archiving is reaching a larger audience which enhances the visibility and impact of your research.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>

        <div className="col-md-3">
          <Sidebar/>
        </div>
      </div>
    </div>
  );
};


export default Guidelines
