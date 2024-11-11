import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Accordion } from "react-bootstrap";
import SideBar from "../SideBar/SideNav";
import "./Accordions.css";

const Accordions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container badcrum">
      <div className="row">
        <div className="col-lg-9 col-md-12 col-sm-12">
          <nav aria-label="breadcrumb" className="bg-light rounded mb-4">
            <ol className="breadcrumb bg-light p-2 p-md-3">
              <li className="breadcrumb-item">
                <a className="text-decoration-none text-danger" href="/">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <a
                  className="fw-normal text-decoration-none text-muted"
                  href="/About"
                >
                  About the Journal
                </a>
              </li>
            </ol>
          </nav>

          <h1 className="main-heading mb-4">About the Journal</h1>

          <div className="accordion mb-4" id="journalAccordion">
            {accordionItems.map((item, index) => (
              <div className="accordion-item mb-3" key={index}>
                <h2 className="accordion-header border">
                  <button
                    className="accordion-button d-flex justify-content-between"
                    type="button"
                    onClick={() => toggleAccordion(index)}
                  >
                    <div className="fs-6 fw-bold">{item.title}</div>
                    <FontAwesomeIcon
                      icon={activeIndex === index ? faMinus : faPlus}
                      className="ms-auto"
                    />
                  </button>
                </h2>
                <div
                  className={`accordion-collapse collapse ${
                    activeIndex === index ? "show" : ""
                  }`}
                >
                  <div className="accordion-body">{item.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <SideBar />
        </div>
      </div>
    </div>
  );
};

// Data for each accordion item
const accordionItems = [
  {
    title: "Focus, Scope and Objectives",
    content: (
      <>
        <p className="fw-light">
          <strong className="text-black fs-5 fw-light">
            The Global Cardiology
          </strong>{" "}
          journal is an open access, peer-reviewed international journal that
          aims to publish original articles, reviews, mini reviews, case
          reports, guidelines, white papers, news, meeting reports, plain
          language summaries, editorials, and letters to the editor related to
          the diagnosis, treatment, and prevention of cardiovascular diseases.
        </p>
        <p>
          The journal aims to provide a platform for the dissemination of new
          knowledge and advancements in the field of cardiology, as well as to
          promote interdisciplinary collaboration among researchers, clinicians,
          healthcare professionals, and the medically interested public.
        </p>
        <p>
          The target audience includes cardiologists, internists, primary care
          physicians, researchers, and other healthcare professionals involved
          in the care of patients with cardiovascular diseases.
        </p>
      </>
    ),
  },
  {
    title: "Peer Review Process",
    content: (
      <>
        <h6 className="fw-bold pt-3">Introduction</h6>
        <p className="fw-light">
          Peer review is applied to all research articles and the majority of
          other article types published in Global Cardiology. This usually
          entails at least two independent, expert peer reviewers.
        </p>
        <h6 className="pt-3 fw-bold">Policy</h6>
        <p>
          All submissions to Global Cardiology are first checked for
          completeness (criteria for desk reject are available in the{" "}
          <span className="text-danger">Guide for Authors</span>) before being
          sent to an Editor, who decides whether they are suitable for peer
          review. If an Editor is on the author list or has a competing interest
          in a particular manuscript, another member of the Editorial Board will
          be assigned to oversee peer review. When making a decision, Editors
          will consider the peer-reviewed reports, but they will not be bound by
          the opinions or recommendations contained in them. A single peer
          reviewer's or the Editor's concern may result in the manuscript being
          rejected. Peer review reports are sent to authors along with the
          editorial decision on their manuscript.
        </p>
        <p>
          At <b>Global Cardiology</b> papers undergo a{" "}
          <a className="text-black fw-noramal" href="/">
            single-blind review process
          </a>{" "}
          - meaning that the reviewers’ identity is not shared with the authors.
        </p>
        <h6 className="pt-3 fw-bold">Selection</h6>
        <p>
          Peer reviewer selection is critical to the publication process. A
          variety of factors influence it, including expertise, reputation,
          specific recommendations, conflicts of interest, and previous
          performance. All of these qualities are highly desirable: speed,
          thoroughness, sound reasoning, and collegiality. Before accepting an
          invitation to review a manuscript, potential peer reviewers should
          notify the Editor of any potential conflicts of interest. Editors' and
          peer reviewers' communications contain confidential information that
          should not be shared with third parties. Global Cardiology is
          committed to making editorial decisions and publishing them as soon as
          possible, and we believe that an efficient editorial process benefits
          both our authors and the research community as a whole. As a result,
          we ask reviewers to respond within the agreed-upon time frame. If
          reviewers anticipate a delay, we ask that they notify us so that we
          can keep the authors updated and, if necessary, find alternative
          solutions.
        </p>
        <h6 className="pt-3 fw-bold">Diversity and equity</h6>
        <p>
          <strong className="text-black fs-6 fw-normal">
            Global Cardiology
          </strong>{" "}
          is committed to diversity, equity, and inclusion, and strives for
          demographic diversity among peer reviewers. When inviting peer
          reviewers, editors are bly encouraged to consider geographical
          regions, gender identities, racial/ethnic groups, and other groups.
        </p>
        <h6 className="pt-3 fw-bold">Misconduct</h6>
        <p>
          False or misleading information, such as identity theft and suggesting
          fake peer-reviewers, will result in the manuscript being rejected,
          further investigation in accordance with PAGEPress' misconduct policy
        </p>
        (
        <span className="text-danger">
          https://www.pagepress.org/site/plagiarism_misconduct
        </span>
        ), and notification to the authors' institutions/employers. PAGEPress
        journals follow the Committee on Publication Ethics (COPE){" "}
        <span className="text-danger">guidance</span> about peer reviewer
        fraud/falsification.
        <h6 className="pt-3 fw-bold">Guidance</h6>
        <p>
          The primary goal of peer review is to provide the Editor with the
          information needed to make a fair, evidence-based decision that
          adheres to the journal's editorial criteria. Review reports should
          also assist authors in revising their paper so that it can be accepted
          for publication. Reports that include a recommendation to reject the
          paper should explain the major flaws in the research; this will help
          the authors prepare their manuscript for possible re-submission (if
          allowed by the Editor) or submission to a different journal. A quick
          guide to reviewing is available <span className="text-danger">here</span>
        </p>
        <span className="fw-normal">
          Before submitting a report, reviewers should ask themselves the
          following questions:
        </span>
        <ul className="fw-normal pt-3">
          <li>How would you react if you received this report?</li>
          <li>Do you find the tone offensive?</li>
          <li>Is it polite and professional?</li>
          <li>
            Do the authors or their competitors receive any unnecessary personal
            or antagonistic remarks?
          </li>
        </ul>
        <span className="fw-normal pt-3">
          Please keep in mind that any offensive language in your report may be
          removed by the Editor.
        </span>
      </>
    ),
  },
  {
    title: "Publication Frequency",
    content: (
      <p className="fw-light">
        All papers are published as soon as they have been accepted, by adding
        them to the "current" volume's Table of Contents.
      </p>
    ),
  },
  {
    title: "Open Access Policy",
    content: (
      <p className="fw-light">
        This journal provides immediate open access to its content on the
        principle that making research freely available to the public supports a
        greater global exchange of knowledge.
      </p>
    ),
  },
  {
    title: "Archiving",
    content: (
      <p className="fw-light">
        This journal utilizes the{" "}
        <span className="text-danger fw-normal">PKP Preservation Network</span>,
        the <span className="text-danger fw-normal">Global LOCKSS Network</span>
        , and <span className="text-danger fw-normal">Portico</span> to create a
        distributed archiving system for preservation and restoration.
      </p>
    ),
  },
  {
    title: "Pre- and Post-Prints",
    content: (
      <p className="fw-light">
        PAGEPress allows and encourages authors to deposit both their pre- and
        post-prints in Open-Access institutional archives or repositories. The
        primary benefit of pre- and post-print self-archiving is reaching a
        larger audience which enhances the visibility and impact of your
        research.
      </p>
    ),
  },
];

export default Accordions;
