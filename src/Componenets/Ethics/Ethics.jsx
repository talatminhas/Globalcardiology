import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FaEye } from "react-icons/fa";
import "./Ethics.css";
import { Accordion } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Ethics = () => {
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
                  Publication Ethics
                </a>
              </li>
            </ol>
          </nav>

          <h1 className="main-heading">Publication Ethics</h1>

          <div className="accordion">
            <div className="accordion">
              <div className="col-lg-11 ">
                <div className="content">
                  <p>
                    <h5 className="pt-4 pb-4 fw-bold">Editorship</h5>
                    <div className="pb-3 fw-light">
                      PAGEPress strongly supports the mission of the <span className="text-danger">COPE Code
                      of Conduct and Best Practice Guidelines for Journal
                      Editors;</span> all individuals collaborating with PAGEPress are
                      strongly encouraged to adhere to this mission.
                    </div>

                    <article className="pt-4 pb-4 ">
                      <h5 className="fw-bold">Ethics</h5>

                      <p className="fw-light">
                        All research articles published by PAGEPress journals
                        are subject to rigorous ethical standards. Our journals
                        endorse the <span className="text-danger">Code of Conduct</span> of the Committee on
                        Publication Ethics (COPE), as well as the <span className="text-danger">COPE
                        International Standards for Editors and Authors
                        Guidelines.</span> The Editorial Board of each journal is
                        responsible for the form the peer review process will
                        take; therefore, all authors in the biomedical field
                        must adhere to the <span className="text-danger">Uniform Requirements for Manuscripts
                        Submitted to Biomedical Journals.</span> PAGEPress endorses the
                        <span className="text-danger">World Association of Medical Editors (WAME) Policy
                        Statement on Geopolitical Intrusion on Editorial
                        Decisions,</span> too.
                      </p>
                    </article>

                    <h5 className="pt-3 pb-2 fw-bold">
                      Principles of Transparency and Best Practice in Scholarly
                      Publishing
                    </h5>

                    <p className="fw-light">
                      The <span className="text-danger">Principles of Transparency and Best Practice in
                      Scholarly Publishing</span> should apply to all published
                      content, including special issues and conference
                      proceedings. Where practices deviate from the standards
                      outlined, editors must transparently communicate the
                      procedures that the journal follows. These principles also
                      acknowledge that publishers and editors are responsible
                      for promoting accessibility, diversity, equity, and
                      inclusivity in all aspects of the publication. Editorial
                      decisions should be based on scholarly merit. They should
                      not be affected by the origins of the manuscript,
                      including the nationality, ethnicity, political beliefs,
                      race, or religion of the authors. Journals should ensure
                      no policies create an exclusionary environment for anyone
                      wanting to engage with the journal and should regularly
                      assess their policies for inclusivity. PAGEPress maintains
                      an unbiased stance on published territorial descriptions,
                      maps, and author affiliations. All territorial claims are
                      solely those of the authors and do not necessarily
                      represent those of their affiliated organizations, the
                      publisher, the editors, or reviewers
                    </p>

                    <h5 className="pt-3 pb-2 fw-bold">Plagiarism</h5>

                    <p className="fw-light">
                      The Editorial Board of our journals will immediately
                      screen all articles submitted for publication in that
                      journal. All submissions we receive are checked for
                      plagiarism by using online available tools. Any suspected
                      misconduct ends up with a quick rejection and is then
                      reported to the <span className="text-danger">European Network of Research Integrity
                      Offices</span> and to the <span className="text-danger">US Office of Research Integrity.</span> The
                      European Federation of Academies of Sciences and
                      Humanities (<span className="text-danger">ALLEA</span>) released a <span className="text-danger">European Code of Conduct on
                      Research Integrity,</span> which is fully supported by our
                      journals. All authors submitting papers to our journals
                      are required to adopt these policies.

                      <p className="pt-3">Below some online resources to help you in understanding plagiarism:</p>
                      <ul>
                        <li>Roig, M. <span className="text-danger">Avoiding plagiarism, self-plagiarism, and other questionable writing practices: A guide to ethical writing.</span> St Johns University.</li>
                        <li>Long TC, Errami M, George AC, et al. <span className="text-danger">Responding to Possible Plagiarism.</span> Science 2009; 323:1293-1294.</li>
                        <li>Lewis J, Ossowski S, Hicks J, Errami M, and Garner HR. <span className="text-danger">Text similarity: an alternative way to search MEDLINE.</span> Bioinformatics 2006; 22:2298-2304.</li>
                      </ul>
                    </p>

                    <h5 className="pt-3 pb-2 fw-bold">Conflict of Interest</h5>

                    <p className="fw-light">
                      Conflict of interest exists when an author (or the
                      author's institution), reviewer, or editor has financial
                      or personal relationships that may be perceived to
                      influence his or her actions (such relationships are also
                      known as dual commitments, competing interests, or
                      competing loyalties). These relationships vary from
                      negligible to great potential for influencing judgment.
                      Not all relationships represent true conflict of interest.
                      On the other hand, the potential for conflict of interest
                      can exist regardless of whether an individual believes
                      that the relationship affects his or her scientific
                      judgment. Financial relationships (such as employment,
                      consultancies, stock ownership, honoraria, and paid expert
                      testimony) are the most easily identifiable conflicts of
                      interest and the most likely to undermine the credibility
                      of the journal, the authors, and of science itself.
                      However, conflicts can occur for other reasons, such as
                      personal relationships, academic competition, and
                      intellectual passion.
                    </p>

                    <p className="fw-light">
                      All participants in the peer-review and publication
                      process must disclose all relationships that could be
                      viewed as potential conflicts of interest. Disclosure of
                      such relationships is also important in connection with
                      editorials and review articles, because it can be more
                      difficult to detect bias in these types of publications
                      than in reports of original research. Editors may use
                      information disclosed in conflict-of-interest and
                      financial-interest statements as a basis for editorial
                      decisions.
                    </p>

                    <p className="fw-light">
                      When authors submit a manuscript, whether an article or a
                      letter, they are responsible for disclosing all financial
                      and personal relationships that might bias their work. To
                      prevent ambiguity, authors must state explicitly whether
                      potential conflicts do or do not exist. Authors should do
                      so in the manuscript on a conflict-of-interest
                      notification page, providing additional detail, if
                      necessary, in a cover letter that accompanies the
                      manuscript. Increasingly, individual studies receive
                      funding from commercial firms, private foundations, and
                      government. The conditions of this funding have the
                      potential to bias and otherwise discredit the research.
                    </p>

                    <p className="fw-light">
                      Scientists have an ethical obligation to submit creditable
                      research results for publication. Moreover, as the persons
                      directly responsible for their work, researchers should
                      not enter into agreements that interfere with their access
                      to the data and their ability to analyze them
                      independently, and to prepare and publish manuscripts.
                      Authors should describe the role of the study sponsor, if
                      any, in study design; collection, analysis, and
                      interpretation of data; writing the report; and the
                      decision to submit the report for publication. If the
                      supporting source had no such involvement, the authors
                      should so state. Biases potentially introduced when
                      sponsors are directly involved in research are analogous
                      to methodological biases.
                    </p>

                    <p className="fw-light">
                      Editors may request that authors of a study funded by an
                      agency with a proprietary or financial interest in the
                      outcome sign a statement, such as "I had full access to
                      all of the data in this study and I take complete
                      responsibility for the integrity of the data and the
                      accuracy of the data analysis." Editors should be
                      encouraged to review copies of the protocol and/or
                      contracts associated with project-specific studies before
                      accepting such studies for publication. Editors may choose
                      not to consider an article if a sponsor has asserted
                      control over the authors' right to publish.
                    </p>

                    <p className="fw-light">
                      Reviewers must disclose to editors any conflicts of
                      interest that could bias their opinions of the manuscript,
                      and they should recuse themselves from reviewing specific
                      manuscripts if the potential for bias exists. As in the
                      case of authors, silence on the part of reviewers
                      concerning potential conflicts may mean either that
                      conflicts exist and the reviewer has failed to disclose
                      them or conflicts do not exist. Reviewers must therefore
                      also be asked to state explicitly whether conflicts do or
                      do not exist. Reviewers must not use knowledge of the
                      work, before its publication, to further their own
                      interests.
                    </p>

                    <p className="fw-light">
                      Editors who make final decisions about manuscripts must
                      have no personal, professional, or financial involvement
                      in any of the issues they might judge. Other members of
                      the editorial staff, if they participate in editorial
                      decisions, must provide editors with a current description
                      of their financial interests (as they might relate to
                      editorial judgments) and recuse themselves from any
                      decisions in which a conflict of interest exists.
                    </p>

                    <h5 className="pt-3 pb-2 fw-bold">Informed Consent</h5>

                    <p className="fw-light">
                      PAGEPress journals strictly follow the <span className="text-danger">ICMJE Protection of
                      Research Participants policy.</span>
                    </p>
                    <p className="fw-light">
                      Where authors wish to include case details, other personal
                      information, or images of patients or other individuals in
                      a PAGEPress publication, appropriate consents,
                      permissions, and releases must be obtained.
                    </p>
                    <p className="fw-light">
                      Patients have a right to privacy that should not be
                      violated without informed consent. When informed consent
                      has been obtained, editors may request authors to provide
                      a copy before making the editorial decision. Authors can
                      find a template for the Informed Consent <span className="text-danger">here.</span>
                    </p>
                    <p className="fw-light">It is the author's responsibility to ensure that.</p>
                    <ul>
                      <li className="fw-light">
                        each individual, or the individual's legal guardian or
                        other people with legal authority to act on the
                        individual's behalf, who appears in any video,
                        recording, photograph, image, illustration, or case
                        report (or in any other identifiable form), is made
                        aware in advance of:
                      </li>
                      <li className="fw-light">
                        the fact that such photographs are being taken or such
                        video, recording, photograph, image, illustration, or
                        report is being made, and
                      </li>
                      <li className="fw-light">
                        all the purposes for which such photographs are being
                        taken or such video, or recording, Individuals should
                        also be informed that individual images from such works
                        or products may be discoverable through search engines.
                      </li>
                    </ul>
                    <p className="fw-light">
                      That individual, legal guardian, or person with legal
                      authority must provide written consent that is explicit
                      and fully informed.
                    </p>
                    <p className="fw-light">
                      If such consent is conditional (for example, adopting
                      measures to prevent personal identification of the person
                      concerned), PAGEPress must be made aware of all such
                      conditions in writing. Individuals must be informed that
                      once the material has been published, such consent cannot
                      be revoked. Written consents must be retained by the
                      author, and copies of the consents or evidence of such
                      consents must be provided to PAGEPress upon request, but
                      these should not be sent to PAGEPress unless specifically
                      requested in writing.
                    </p>

                    <ul>
                      <li className="fw-light">
                        The written consent form meets all of the requirements
                        of all applicable Data Protection and Privacy Laws.
                        Particular care should be taken to obtain fully informed
                        consent without coercion when children are involved,
                        when an individual has cognitive or intellectual
                        disabilities, when an individual's head or face appears,
                        when an individual's name or other personal details are
                        mentioned, or when other vulnerable groups or
                        individuals are mentioned.
                      </li>
                      <li className="fw-light">
                        If the parents or guardians of a child disagree on the
                        use of images of that child, consent should be deemed
                        not to have been given, and the images should not be
                        used. To reduce the risk of images being used
                        inappropriately, only images of children dressed
                        appropriately should be used.
                      </li>
                      <li className="fw-light">
                        Even if consent has been obtained, care must be taken to
                        ensure that the portrayal and captioning of the
                        individual in question are respectful and do not come
                        across as demeaning.
                      </li>
                      <li className="fw-light">
                        Special precautions should also be taken when there is a
                        possibility of extensive media coverage of a specific
                        case report, so that the individual is fully informed of
                        the potential extent of the publicity and can make an
                        informed decision about participation.
                      </li>
                    </ul>

                    <h5 className="pt-3 pb-2 fw-bold">Particular considerations</h5>
                    <ul>
                      <li className="fw-light">
                        The names, initials, hospital or social security
                        numbers, dates of birth, or other personal or
                        identifying information of patients and research
                        subjects should not be used.
                      </li>
                      <li className="fw-light">
                        Images of patients or research subjects should not be
                        used unless the information is required for scientific
                        purposes and explicit permission has been granted as
                        part of the consent process. Even if consent has been
                        granted, identifying information should be omitted if it
                        is not required.
                      </li>
                      <li className="fw-light">
                        If identifying characteristics are changed to protect
                        anonymity, authors must ensure that the changes do not
                        distort scientific meaning.
                      </li>
                    </ul>

                    <h5 className="pt-3 pb-2 fw-bold">
                      Images that are unidentifiable
                    </h5>
                    <ul>
                      <li className="fw-light">
                        Formal consents are not required for the use of
                        completely anonymized images from which the individual
                        cannot be identified, such as x-rays, ultrasound images,
                        pathology slides, or laparoscopic images, as long as
                        they do not contain any identifying marks and are not
                        accompanied by text that could identify the individual
                        in question. Although formal consent is not required,
                        the author should inform the patient that their images
                        will be used in a scientific publication as a matter of
                        good practice and courtesy.
                      </li>
                      <li className="fw-light">
                        While details that could identify a patient or allow a
                        patient to identify himself or herself should be removed
                        from case reports, complete anonymity cannot always be
                        guaranteed, so informed consent should be obtained for
                        all case reports. This also applies to case reports
                        involving deceased people, where consent should be
                        obtained from the individual's nominated
                        representative(s) if it was not provided by the
                        individual. If consent has not been obtained, simply
                        using eye bars or blurring the individual's face to
                        anonymize a photograph is generally insufficient.
                      </li>
                    </ul>

                    <h5 className="pt-3 pb-2 fw-bold">IConfidentiality</h5>
                    <p className="fw-light">
                      Manuscripts must be reviewed while maintaining the
                      authors' confidentiality. When authors submit manuscripts
                      for review, they are entrusting editors with the results
                      of their scientific and creative work, on which their
                      reputation and career may rely. The disclosure of
                      confidential details during the review of an author's
                      manuscript may violate their rights. Reviewers have the
                      right to confidentiality, which the editor must respect.
                      Confidentiality may have to be violated if dishonesty or
                      fraud is suspected, but it must otherwise be respected.
                      Editors must not reveal information about manuscripts to
                      anyone other than the authors and reviewers (including
                      their receipt, content, status in the reviewing process,
                      reviewer criticism, or ultimate fate). This includes
                      requests for the materials to be used in legal
                      proceedings.
                    </p>

                    <h5 className="pt-3 pb-2 fw-bold">Role of the funding source</h5>
                    <p className="fw-light">
                      Authors are requested to identify who provided financial
                      support for the conduct of the research and/or preparation
                      of the article and to briefly describe the role of the
                      sponsor(s), if any, in study design; in the collection,
                      analysis and interpretation of data; in the writing of the
                      report; and in the decision to submit the article for
                      publication. If the funding source(s) had no such
                      involvement, it is recommended to state this.
                    </p>

                    <h5 className="pt-3 pb-2 fw-bold">
                      Obligation to Register Clinical Trials
                    </h5>
                    <p className="fw-light">
                      The ICMJE believes that it is important to foster a
                      comprehensive, publicly available database of clinical
                      trials. The{" "}
                      <span className="text-danger">
                        ICMJE defines a clinical trial
                      </span>{" "}
                      as any research project that prospectively assigns human
                      subjects to intervention or concurrent comparison or
                      control groups to study the cause-and-effect relationship
                      between a medical intervention and a health outcome.
                      Medical interventions include drugs, surgical procedures,
                      devices, behavioral treatments, process-of-care changes,
                      etc. Our journals require, as a condition of consideration
                      for publication, registration in a public trials registry.
                      The journal considers a trial for publication only if it
                      has been registered before the enrollment of the first
                      patient. The journal does not advocate one particular
                      registry, but requires authors to register their trial in
                      a registry that meets several criteria. The registry must
                      be accessible to the public at no charge. It must be open
                      to all prospective registrants and managed by a non-profit
                      organization. There must be a mechanism to ensure the
                      validity of the registration data, and the registry should
                      be electronically searchable. An acceptable registry must
                      include a minimum of data elements (
                      <span className="text-danger">
                        http://www.icmje.org/about-icmje/faqs/clinical-trials-registration/
                      </span>
                      ). For example, ClinicalTrials.gov (
                      <span className="text-danger">
                        http://www.clinicaltrials.gov
                      </span>
                      ), sponsored by the United States National Library of
                      Medicine, meets these requirements.
                    </p>

                    <h5 className="pt-3 pb-2 fw-bold">
                      Protection of Human Subjects and Animals in Research
                    </h5>
                    <p className="fw-light">
                      When reporting experiments on human subjects, authors
                      should indicate whether the procedures followed were in
                      accordance with the ethical standards of the responsible
                      committee on human experimentation (institutional and
                      national) and with the Helsinki Declaration of 1975, as
                      revised in <span className="text-danger">2013</span>. If
                      doubt exists whether the research was conducted in
                      accordance with the Helsinki Declaration, the authors must
                      explain the rationale for their approach and demonstrate
                      that the institutional review body explicitly approved the
                      doubtful aspects of the study. An Informed Consent
                      statement is always required from patients involved in any
                      experiments. When reporting experiments on animals,
                      authors should indicate whether the institutional and
                      national guide for the care and use of laboratory animals
                      was followed. Further guidance on animal research ethics
                      is available from the World Medical Association (
                      <span className="text-danger">2016 revision</span>). When
                      reporting experiments on ecosystems involving non-native
                      species, Authors are bound to ensure compliance with the
                      institutional and national guide for the preservation of
                      native biodiversity.
                    </p>

                    <h5 className="pt-3 pb-2 fw-bold">Appealing editorial decisions</h5>
                    <p className="fw-light">
                      Editors have broad discretion in deciding whether an
                      article is a good fit for their journal. Many manuscripts
                      are rejected with a very general statement of the reason
                      for the rejection. These decisions are not subject to
                      formal appeal unless the author believes the decision to
                      reject the manuscript was based on a mistake in the
                      article's review, in which case the author may appeal the
                      decision by providing the Editor with a detailed written
                      description of the error they believe occurred. If an
                      author believes that a publication ethics violation
                      influenced the decision on their manuscript, the author
                      may contact the publisher with a detailed written
                      description of their concern and supporting information
                    </p>
                    <p className="fw-light">
                      The Editor-in-Chief (or Handling Editor) considers the
                      authors' argument, the reviewer reports, and decides
                      whether
                    </p>
                    <ul>
                      <li className="fw-light">the decision to reject should stand;</li>
                      <li className="fw-light">whether another independent opinion is required;</li>
                      <li className="fw-light">or whether the appeal should be considered.</li>
                    </ul>
                    <p className="fw-light">
                      The decision is communicated to the complainant, along
                      with an explanation if necessary. Appeals decisions are
                      final, and new submissions take precedence over appeals.
                    </p>

                    <h5 className="pt-3 pb-2 fw-bold">Citations</h5>
                    <p className="fw-light">
                      Citing and referencing appropriate and relevant literature
                      is a necessary component of scholarly publishing, and it
                      is a shared responsibility among all parties involved
                      (authors, editors, peer reviewers). Authors must avoid
                      excessive and inappropriate self-citation, as well as
                      author group prearrangements to inappropriately cite each
                      other's work, coordinated efforts among several authors to
                      collectively self-cite, and gratuitous and unnecessary
                      citation of articles published in the journal to which the
                      paper has been submitted, as this can be considered
                      citation manipulation, a type of misconduct. Editors and
                      peer reviewers should not request citations from authors
                      unless there is a compelling scholarly reason to do so.
                      Citation manipulation will result in the article being
                      rejected, and the authors' institutions may be notified.
                      Similarly, authors should report to the publisher any
                      attempt by peer-reviewers or editors to encourage such
                      practices.
                    </p>

                    <p className="fw-light">
                      When preparing their manuscript, authors should keep the
                      following guidelines in mind:
                    </p>
                    <ul>
                      <li className="fw-light">
                        A citation should be used for any statement in the
                        manuscript that relies on external sources of
                        information (i.e., not the authors' own new ideas,
                        findings, or general knowledge).
                      </li>
                      <li className="fw-light">
                        Derivations of original work should not be cited by
                        authors. For example, rather than citing a review
                        article that cites an original work, they should cite
                        the original work.
                      </li>
                      <li className="fw-light">
                        Authors should make certain that their citations are
                        correct (i.e. they should ensure the citation supports
                        the statement made in their manuscript and should not
                        misrepresent another work by citing it if it does not
                        support the point the authors wish to make).
                      </li>
                      <li className="fw-light">
                        Authors should avoid citing sources they have not read.
                      </li>
                      <li className="fw-light">
                        Authors should not preferentially cite their own or the
                        publications of their friends, peers, or institutions.
                      </li>
                      <li className="fw-light">
                        Authors should avoid citing only work from a single
                        country.
                      </li>
                      <li className="fw-light">
                        Authors should not cite too many sources to support a
                        single point.
                      </li>
                      <li className="fw-light">
                        Wherever possible, authors should cite sources that have
                        been peer reviewed.
                      </li>
                      <li className="fw-light">
                        Advertisements or advertorial material should not be
                        cited by authors.
                      </li>
                    </ul>

                    <h5 className="pt-3 pb-2 fw-bold">
                      Reviewer Suggestions / Exclusions
                    </h5>
                    <p className="fw-light">
                      When submitting their manuscripts, authors are encouraged
                      to suggest suitable reviewers and/or request the exclusion
                      of specific individuals. When recommending reviewers,
                      authors should ensure that they are completely independent
                      and have no ties to the work in any way. It is bly advised
                      to suggest a diverse group of reviewers from various
                      countries and institutions. When suggesting reviewers, the
                      Corresponding Author must include an institutional email
                      address for each suggested reviewer, or, if this is not
                      possible, other means of verifying the identity in the
                      submission letter, such as a link to a personal homepage,
                      a link to the publication record, or a researcher or
                      author ID. Please keep in mind that while the Journal may
                      not use your suggestions, they are greatly appreciated and
                      may help with the peer review process.
                    </p>

                    <h5 className="pt-3 pb-2 fw-bold">
                      Availability of data and materials
                    </h5>
                    <p className="fw-light">
                      he reproducibility of scientific claims is essential for
                      the credibility of published research. The data from which
                      results and conclusions are drawn is at the heart of
                      research claims. Scientific claims can be difficult (if
                      not impossible) to replicate without access to the
                      original data. Mandatory data availability statements
                      compile information on the availability of data associated
                      with the manuscript, such as whether the data is in
                      repositories, available on request, included with
                      supplementary information, or included with figure source
                      data files
                    </p>

                    <h5 className="pt-3 pb-2 fw-bold">Post-publication corrections</h5>
                    <p className="fw-light">
                      Every article published by a PAGEPress journal, or a
                      journal published by PAGEPress on behalf of a scholarly
                      society, whether in print or online, constitutes the
                      Version of Record (VoR): the final, definitive, and
                      citable version in the scholarly record (see{" "}
                      <span className="text-danger">NISO, 2008</span>).
                    </p>
                    <p>The VoR includes:</p>
                    <ul>
                      <li className="fw-light">
                        The paper, revised and accepted following peer review,
                        in its final form, including the abstract, text,
                        references, bibliography, and all accompanying tables,
                        illustrations, data.
                      </li>
                      <li>Any additional materials.</li>
                    </ul>

                    <p className="fw-light">
                      Recognizing a published article as a finalized VoR
                      establishes the expectation that it can be relied upon as
                      accurate, complete, and citable. Wherever possible it is
                      our policy to maintain the integrity of the Version of
                      Record in accordance with STM Association guidelines:
                      “Articles that have been published should remain extant,
                      exact, and unaltered to the maximum extent possible” -{" "}
                      <span className="text-danger">
                        STM Guidelines on Preservation of the Objective Record
                        of Science
                      </span>
                    </p>
                    <p className="fw-light">
                      It is sometimes necessary to make changes to the Version
                      of Record after an article has been published. This will
                      be done after careful consideration by the Editor who is
                      also supported by PAGEPress staff to ensure any necessary
                      changes are made in accordance with guidance from the{" "}
                      <span className="text-danger">
                        Committee on Publication Ethics (COPE)
                      </span>
                      .
                    </p>

                    <h5 className="pt-3 pb-2 fw-bold">
                      Corrections, Expressions of Concern, and Retractions
                    </h5>
                    <p className="fw-light">
                      Any necessary changes will be accompanied with a
                      post-publication notice that will be permanently linked to
                      the original article, ensuring that readers are fully
                      informed of any required changes. This could be a
                      Correction notice, an Expression of Concern or a
                      Retraction. The goal of this mechanism for making
                      permanent and transparent changes is to protect the
                      scholarly record's integrity. All corrections, expressions
                      of concern, and retraction notices are made available at
                      the time of publication. We use these notices to address
                      the following issues, as discussed further below:
                    </p>
                    <ul>
                      <li className="fw-light">
                        Errors that affect an article's interpretation or
                        indexing
                      </li>
                      <li className="fw-light">
                        Concerns about the journal's policies and standards
                      </li>
                      <li className="fw-light">
                        Concerns about the publication's integrity,
                        dependability, and/or validity
                      </li>
                    </ul>
                    <p className="fw-light">
                      In responding to concerns about PAGEPress publications, we
                      adhere to our journals' policies, publication criteria,
                      and editorial standards, as well as{" "}
                      <span className="text-danger">ICMJE</span> and{" "}
                      <span className="text-danger">COPE</span> guidelines where
                      applicable.
                    </p>
                    <p className="fw-light">
                      PAGEPress collaborates with journal Editors on cases
                      involving serious ethics or integrity concerns after
                      publication, including those warranting an Expression of
                      Concern or Retraction.
                    </p>
                    <p className="fw-light">
                      If you wish to notify PAGEPress of an error in your
                      publication that may require a correction, please send an
                      email to the journal directly with the relevant details
                      (article citation and DOI, description of the error).
                    </p>

                    <h5 className="pt-3 pb-2 fw-bold">PCorrections</h5>
                    <p className="fw-light">
                      We publish corrections to PAGEPress articles when it is
                      necessary to correct an error or omission that may affect
                      the interpretation of the article, but where the scholarly
                      integrity of the article remains intact (e.g., mislabeling
                      of a figure, missing key information on funding or
                      competing interests of the authors). PAGEPress may also
                      issue a correction to address an error in the
                      publication's metadata (for example, a misspelled author's
                      name or errors in the competing interests, funding, or
                      data availability statement).
                    </p>
                    <p className="fw-light">
                      Typically, a correction notice will appear as a
                      post-publication notice linked to the original PAGEPress
                      article, with following actions:
                    </p>

                    <ul>
                      <li className="fw-light">
                        Add a footnote to the published Version of Record
                        displaying the electronic link to the correction notice.
                      </li>
                      <li className="fw-light">
                        Paginate and make available the correction notice in the
                        online issue of the journal, electronically linked back
                        to the published Version of Record.
                      </li>
                    </ul>
                    <p className="fw-light">
                      Corrections for typographical errors or other minor issues
                      that do not have a significant impact on the scientific
                      integrity, understanding, or indexability of the article
                      will not be published.
                    </p>

                    <h5 className="pt-3 pb-2 fw-bold">Retractions</h5>
                    <p className="fw-light">
                      As discussed in <span className="text-danger">COPE's Retraction Guidelines,</span> Retraction
                      is a mechanism for correcting the literature and informing
                      readers of major concerns about the integrity, validity,
                      or reliability of an article. If the Editors determine
                      that unresolved issues in our discussions with the authors
                      warrant retraction in accordance with COPE guidelines,
                      PAGEPress will retract the article. Authors and
                      institutions may request that their articles be retracted
                      if their reasons meet the retraction criteria. If a major
                      error (e.g., in the analysis or methods) invalidates the
                      article's conclusions, or if research misconduct or
                      publication misconduct has occurred, a retraction notice
                      will be issued (e.g., research without required ethical
                      approvals, fabricated data, manipulated images,
                      plagiarism, duplicate publication, etc.). When a decision
                      is made to retract an article, PAGEPress will:
                    </p>
                    <ul>
                      <li className="fw-light">
                        Add a "retracted" watermark to the published article.
                      </li>
                      <li className="fw-light">
                        Issue a separate retraction statement, titled
                        'Retraction: "[article title]", with a link to the
                        retracted article.
                      </li>
                      <li className="fw-light">
                        Issue a separate retraction statement, titled
                        'Retraction: "[article title]", with a link to the
                        retracted article.
                      </li>
                    </ul>

                    <h5 className="pt-3 pb-2 fw-bold">Expressions of Concern</h5>
                    <p className="fw-light">
                      Expressions of Concern are notices published at the
                      discretion of the Editors to alert readers of serious
                      concerns about published work. In most cases, PAGEPress
                      will complete the case's follow-up before publishing a
                      notice; however, in some cases, an Expression of Concern
                      may be published as an interim notice while PAGEPress or
                      another entity investigates an issue. If we complete our
                      follow-up process and issues remain unresolved, an
                      Expression of Concern may be used to resolve a
                      post-publication case. Expressions of Concern are written
                      by PAGEPress staff and/or the journal's
                      Editor(s)-in-Chief. When published, an Expression of
                      Concern is posted on the relevant journal's webpage and
                      linked to the article's publication record, similar to a
                      correction. An Expression of Concern has no effect on the
                      linked research article's publication status. Following
                      the publication of an Expression of Concern, the same
                      article or the Expression of Concern itself may be
                      corrected or retracted, depending on the editors'
                      assessment of information, data, and/or materials received
                      in subsequent discussions. Before publishing an Expression
                      of Concern, PAGEPress attempts to notify the authors of
                      the affected article, but does not require their approval
                      or agreement. The Expression of Concern will be linked
                      back to the published article it relates to.
                    </p>
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
                                <a className="text-decoration-none fw-light text-muted link-text" href="/submission">Submit Your Paper</a>
                            </li>
                            <li className="bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
                                <a className="text-decoration-none text-muted fw-light link-text" href="/guide">Guide for Authors</a>
                            </li>
                            <li className="bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
                                <a className="text-decoration-none text-muted fw-light link-text" href="/benefits-authors">Benefits for Authors</a>
                            </li>
                            <li className="bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
                                <a className="text-decoration-none text-muted fw-light link-text" href="/write-scientific-paper">How to write a Scientific paper</a>
                            </li>
                            <li className="bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
                                <a className="text-decoration-none text-muted fw-light link-text" href="/write-review-article ">How to write a Review article</a>
                            </li>
                            <li className="bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
                                <a className="text-decoration-none text-muted fw-light link-text" href="/article-processing-charge">Article Processing Charge</a>
                            </li>
                        </ul>

                        <h4 className="sidebar-title text-white text-center rounded-none bg-danger p-2 mt-4">FOR REVIEWERS</h4>
                        <ul className="list-group">
                            <li className="bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
                                <a className="text-decoration-none text-muted link-text" href="/how-to-review">How to Review</a>
                            </li>
                        </ul>
                        <h4 className="side sidebar-title text-white  text-center bg-danger p-2 mt-4">INDEXING</h4>
                        <ul className="list-group ">
                            <li className="bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
                                <a className="review text-decoration-none text-muted fw-light link-text" href="https://scholar.google.it/scholar?hl=en&as_sdt=0%2C5&q=site%3Aglobalcardiology.info&btnG=">Google Scholar</a>
                            </li>
                            <li className="bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
                                <a className="review text-decoration-none text-muted fw-light link-text" href="https://openalex.org/sources/s4390963333">OpenAlex</a>
                            </li>
                            <li className="bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
                                <NavLink className="review text-decoration-none text-muted fw-light link-text" to="/analytics">Analytics</NavLink>
                            </li>
                        </ul>

                        <h4 className="sidebar-title text-white text-center bg-danger p-2 mt-4">Most read last month</h4>
                        <div className="border-1  pt-2 ps-3 pe-3 pb-3 border-bottom">
                            <p className="fw-lighter text-muted">
                                "Baseline echocardiographic characteristics of patients enrolled in the randomized investigation of MitraClip device in heart failure (RESHAPE HF-2) trial: comparison with COAPT and Mitra-FR"</p>
                            <div>
                                <FaEye className="me-2" />
                                <span className="fw-lighter text-muted">70</span>
                            </div>
                        </div>
                        <div className="border-1  pt-2 ps-3 pe-3 pb-3 border-bottom">
                            <p className="fw-light text-muted">
                                "The effect of SGLT2 inhibitors on health status in patients with heart failure: a systematic review and meta-analysis"</p>
                            <div>
                                <FaEye className="me-2" />
                                <span className="fw-light text-muted">58</span>
                            </div>
                        </div>
                        <div className="border-1 bg-lighter pt-2 ps-3 pe-3 pb-3 border-bottom">
                            <p className="fw-light text-muted">
                                "The effect of SGLT2 inhibitors on health status in patients with heart failure: a systematic review and meta-analysis"</p>
                            <div>
                                <FaEye className="me-2" />
                                <span className="fw-lighter text-muted">28</span>
                            </div>
                        </div>
                    </div>

            <h4 className="sidebar-title text-white text-center bg-danger p-2 mt-4">
              Most read last month
            </h4>
            <div className="border-1 bg-light pt-2 ps-3 pe-3 pb-3 rounded border-bottom">
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
            <div className="border-1 bg-light pt-2 ps-3 pe-3 pb-3 rounded border-bottom">
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
  );
};

export default Ethics;
