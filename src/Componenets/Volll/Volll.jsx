import React from "react";
import {FaRegEye,FaFilePdf,FaRegLaughWink,FaFileDownload,}
from "react-icons/fa";
import coverpng from "../../Assets/CoverIssueDefault_en_US (1).jpg";
import { FaDownload } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaEye } from "react-icons/fa";
import { CiTextAlignCenter } from "react-icons/ci";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import Sidebar from "../SideBar/SideNav";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import healthpng from '../../Images/submission_18_19_coverImage_en_US.png'
import "./Volll.css"
import subpng from "../../Images/submission_22_23_coverImage_en_US.png"
import turgetpng from "../../Images/submission_19_20_coverImage_en_US.png"
import covidpng from "../../Images/submission_21_22_coverImage_en_US.png"
import clickpng from "../../Images/submission_26_27_coverImage_en_US.jpg"
import heightpng from "../../Images/submission_27_28_coverImage_en_US.png"
import harthpng from "../../Images/submission_25_26_coverImage_en_US.jpg"
import watchpng from "../../Images/submission_23_24_coverImage_en_US.jpg"
import { Link } from "react-router-dom";


const Volll = () => {
  return (
    <>
    <div className="d-flex">
      <div className=" container">
          <div className="col-lg-8 ">
            <div className="bg-light p-3 rounded" style={styles.breadcrumb}>
            <span className="text-danger">HOME</span>
                <span> / ARCHIVES / Vol. 2 No. 2 (2024)</span>
              </div>
            </div>
            <div className="row">
            <div className="col-lg-2" style={styles.mainContent}>
              <div className="d-flex flex-column">
                <h1 className="main-heading fw-black text-black d-block" style={styles.title}>Vol. 2 No. 2 (2024)</h1>
                <p style={styles.publishDate}>Published: 2024-06-28</p>
                <div style={styles.coverSection}>
                  <img src={coverpng}  alt="/Clinical" style={styles.coverImage} />
                  <p style={styles.coverTitle}>GLOBAL CARDIOLOGY</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
                <div style={styles.editorialSection}>
                <h2 className="bg-light fw-light p-2 ps-3 rounded-pill" style={styles.sectionHeader}>EDITORIALS</h2>
                <div className="d-flex">
                    <figure>
                        <img className="image mt-4" src={healthpng} alt="" />
                      </figure>
                    <div>
                      <div style={styles.editorialContent}>
                        <h3>
				                   <Link to='/trail' className="custom-link text-decoration-none text-danger fw-light"> The scientific targets: the myocardium, the vasculature and the body’s response to heart failure</Link>
                        </h3>
                        <p className="fw-light" style={styles.author}>Rafael Vidal-Pérez, Ewa A. Jankowska</p>
                        <div style={styles.doiSection}>
                          <FaRegLaughWink style={styles.emojiIcon} />
                            <a className="link" href="https://doi.org/10.4081/cardio.2024.41" style={styles.doiLink}>https://doi.org/10.4081/cardio.2024.41</a>
                          </div>
                        </div>
                        <div className="d-flex gap-1" style={styles.stats}>
                          <p className="ps-3 m-0">
                            <span className="fw-light">Published:</span>
                            <span className="text-muted">March 28, 2024</span> 
                          </p>
                          <div style={styles.statItem}>
                              <FaRegEye className="ms-3 vertical-baseline" style={styles.icon} />
                            <span>1272</span>
                          </div>
                          <div style={styles.statItem}>
                            <FaFilePdf className="ms-3" style={styles.icon} />
                            <span>PDF: 328</span>
                          </div>
                        </div>
                        <div className="d-flex mb-4">
                          <a href="#" style={styles.pdfButton}>
                            <FaFilePdf  style={styles.icon} />
                            <span className="ps-2">PDF</span>
                          </a>
                          <a href="#" style={styles.pdfButton}>
                            <FaFilePdf  style={styles.icon} />
                            <span className="ps-2">HTML</span>
                          </a>
                        </div>
                        
                      </div>
                    </div>
                    <div style={styles.editorialSection}>
                <h2 className="bg-light fw-light p-2 ps-3 rounded-pill " style={styles.sectionHeader}>Reviews </h2>
                <div className="d-flex">
                    <figure>
                        <img className="image mt-4" src={subpng} alt="" />
                      </figure>
                    <div>
                      <div style={styles.editorialContent}>
                        <h3 style={styles.articleTitle}>
                          <a className="text-decoration-none text-danger fw-light" href="/">
				                    Acute interventional management of spontaneous coronary artery dissection: case series and literature review
					                </a>
                        </h3>
                        <p className="fw-light" style={styles.author}>Enrico Cerrato, Ilaria Meynet, Giorgio Quadri, Federico Giacobbe, Cristina Rolfo, Francesco Tomassini, Fabio Ferrari, Fabio Mariani, Luca Lo Savio, Matteo Bianco, Paola Destefanis, Alessia Luciano, Carol Gravinese, Emanuele Tizzani, Sara Giolitto, Antonella Corleto, Fabrizio D’Ascenzo, Umberto Barbero, Fernando Macaya, Javier Escaned, Roberto Pozzi, Ferdinando Varbella
                        </p>
                        <div style={styles.doiSection}>
                          <FaRegLaughWink style={styles.emojiIcon} />
                            <a className="link" href="https://doi.org/10.4081/cardio.2024.41" style={styles.doiLink}>https://doi.org/10.4081/cardio.2024.41</a>
                          </div>
                        </div>
                        <div className="d-flex gap-1" style={styles.stats}>
                          <p className="ps-3 m-0">
                            <span className="fw-light">Published:</span>
                            <span className="text-muted">March 28, 2024</span> 
                          </p>
                          <div style={styles.statItem}>
                              <FaRegEye className="ms-3 vertical-baseline" style={styles.icon} />
                            <span>1272</span>
                          </div>
                          <div style={styles.statItem}>
                            <FaFilePdf className="ms-3" style={styles.icon} />
                            <span>PDF: 328</span>
                          </div>
                        </div>
                        <div className="d-flex mb-4">
                          <a href="#" style={styles.pdfButton}>
                            <FaFilePdf  style={styles.icon} />
                            <span className="ps-2">PDF</span>
                          </a>
                          <a href="#" style={styles.pdfButton}>
                            <FaFilePdf  style={styles.icon} />
                            <span className="ps-2">HTML</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div style={styles.editorialSection}>
     
                <div className="d-flex">
                    <figure>
                        <img className="image mt-4" src={turgetpng} alt="" />
                      </figure>
                    <div>
                      <div style={styles.editorialContent}>
                        <h3  style={styles.articleTitle}>
                          <a className="text-decoration-none text-danger fw-light" href="/">
				                    Clinical trial design, endpoints and regulatory considerations in heart failure
					                </a>
                        </h3>
                        <p className="fw-light" style={styles.author}>Giuseppe M.C. Rosano</p>
                        <div style={styles.doiSection}>
                          <FaRegLaughWink style={styles.emojiIcon} />
                            <a className="link" href="https://doi.org/10.4081/cardio.2024.41" style={styles.doiLink}>https://doi.org/10.4081/cardio.2024.41</a>
                          </div>
                        </div>
                        <div className="d-flex gap-1" style={styles.stats}>
                          <p className="ps-3 m-0">
                            <span className="fw-light">Published:</span>
                            <span className="text-muted">March 28, 2024</span> 
                          </p>
                          <div style={styles.statItem}>
                              <FaRegEye className="ms-3 vertical-baseline" style={styles.icon} />
                            <span>1272</span>
                          </div>
                          <div style={styles.statItem}>
                            <FaFilePdf className="ms-3" style={styles.icon} />
                            <span>PDF: 328</span>
                          </div>
                        </div>
                        <div className="d-flex mb-4">
                          <a href="#" style={styles.pdfButton}>
                            <FaFilePdf  style={styles.icon} />
                            <span className="ps-2">PDF</span>
                          </a>
                          <a href="#" style={styles.pdfButton}>
                            <FaFilePdf  style={styles.icon} />
                            <span className="ps-2">HTML</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div style={styles.editorialSection}>
                <div className="d-flex">
                    <figure>
                        <img className="image mt-4" src={covidpng} alt="" />
                      </figure>
                    <div>
                      <div style={styles.editorialContent}>
                        <h3  style={styles.articleTitle}>
                          <a className="text-decoration-none text-danger fw-light" href="/">
				                    COVID-19 myocarditis
							            </a>
                        </h3>
                        <p className="fw-light" style={styles.author}>Reinaldo B. Bestetti, Rosemary Furlan-Daniel, Luciano P. Pereira</p>
                        <div style={styles.doiSection}>
                          <FaRegLaughWink style={styles.emojiIcon} />
                            <a className="link" href="https://doi.org/10.4081/cardio.2024.41" style={styles.doiLink}>https://doi.org/10.4081/cardio.2024.41</a>
                          </div>
                        </div>
                        <div className="d-flex gap-1" style={styles.stats}>
                          <p className="ps-3 m-0">
                            <span className="fw-light">Published:</span>
                            <span className="text-muted">March 28, 2024</span> 
                          </p>
                          <div style={styles.statItem}>
                              <FaRegEye className="ms-3 vertical-baseline" style={styles.icon} />
                            <span>1272</span>
                          </div>
                          <div style={styles.statItem}>
                            <FaFilePdf className="ms-3" style={styles.icon} />
                            <span>PDF: 328</span>
                          </div>
                        </div>
                        <div className="d-flex mb-4">
                          <a href="#" style={styles.pdfButton}>
                            <FaFilePdf  style={styles.icon} />
                            <span className="ps-2">PDF</span>
                          </a>
                          <a href="#" style={styles.pdfButton}>
                            <FaFilePdf  style={styles.icon} />
                            <span className="ps-2">HTML</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div style={styles.editorialSection}>
                    <h2 className="bg-light p-2 ps-3 rounded-pill" style={styles.sectionHeader}>Original Articles</h2>
                      <div className="d-flex">
                        <figure>
                          <img className="image mt-4" src={clickpng} alt="" />
                        </figure>
                      <div>
                      <div style={styles.editorialContent}>
                        <h3 className="fw-light" style={styles.articleTitle}>
                          <a className="fw-light text-decoration-none text-danger" href="/">
                          <span>
				                    Quality of life in Maltese adults with congenital heart disease: a second look
									        </span>
				                    <span>An APPROACH-IS substudy</span>
					                </a>
                        </h3>
                        <p className="fw-light" style={styles.author}>Maryanne Caruana, Philip Moons, Adrienne H. Kovacs, Koen Luyckx, Corina Thomet, Werner Budts, Maayke Sluman, Katrine Eriksen, Mikael Dellborg, Malin Berghammer, Bengt Johansson, Alexandra Soufi, Edward Callus, Victor Grech, Silke Apers</p>
                        <div style={styles.doiSection}>
                          <FaRegLaughWink style={styles.emojiIcon} />
                            <a className="link" href="https://doi.org/10.4081/cardio.2024.41" style={styles.doiLink}>https://doi.org/10.4081/cardio.2024.41</a>
                          </div>
                        </div>
                        <div className="d-flex gap-1" style={styles.stats}>
                          <p className="ps-3 m-0">
                            <span className="fw-light">Published:</span>
                            <span className="text-muted">March 28, 2024</span> 
                          </p>
                          <div style={styles.statItem}>
                              <FaRegEye className="ms-3 vertical-baseline" style={styles.icon} />
                            <span>1272</span>
                          </div>
                          <div style={styles.statItem}>
                            <FaFilePdf className="ms-3" style={styles.icon} />
                            <span>PDF: 328</span>
                          </div>
                        </div>
                        <div className="d-flex mb-4">
                          <a href="#" style={styles.pdfButton}>
                            <FaFilePdf  style={styles.icon} />
                            <span className="ps-2">PDF</span>
                          </a>
                          <a href="#" style={styles.pdfButton}>
                            <FaFilePdf  style={styles.icon} />
                            <span className="ps-2">HTML</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    </div><div style={styles.editorialSection}>
                      <div className="d-flex">
                        <figure>
                          <img className="image mt-4" src={heightpng} alt="" />
                        </figure>
                      <div>
                      <div style={styles.editorialContent}>
                        <h3 className="fw-light" style={styles.articleTitle}>
                          <a className="fw-light text-decoration-none text-danger" href="/">
                            Neck-to-height ratio in Bosnian university students according to the 2017 American College of Cardiology/American Heart Association guidelines on hypertension classification
					                </a>
                        </h3>
                        <p className="fw-light" style={styles.author}>Asija Začiragić, Marija Mikić, Amela Dervišević, Orhan Lepara, Nesina Avdagić, Nermina Babić, Almir Fajkić, Amina Valjevac</p>
                        <div style={styles.doiSection}>
                          <FaRegLaughWink style={styles.emojiIcon} />
                            <a className="link" href="https://doi.org/10.4081/cardio.2024.41" style={styles.doiLink}>https://doi.org/10.4081/cardio.2024.41</a>
                          </div>
                        </div>
                        <div className="d-flex gap-1" style={styles.stats}>
                          <p className="ps-3 m-0">
                            <span className="fw-light">Published:</span>
                            <span className="text-muted">March 28, 2024</span> 
                          </p>
                          <div style={styles.statItem}>
                              <FaRegEye className="ms-3 vertical-baseline" style={styles.icon} />
                            <span>1272</span>
                          </div>
                          <div style={styles.statItem}>
                            <FaFilePdf className="ms-3" style={styles.icon} />
                            <span>PDF: 328</span>
                          </div>
                        </div>
                        <div className="d-flex mb-4">
                          <a href="#" style={styles.pdfButton}>
                            <FaFilePdf  style={styles.icon} />
                            <span className="ps-2">PDF</span>
                          </a>
                          <a href="#" style={styles.pdfButton}>
                            <FaFilePdf  style={styles.icon} />
                            <span className="ps-2">HTML</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    </div><div style={styles.editorialSection}>
                      <div className="d-flex">
                        <figure>
                          <img className="image mt-4" src={harthpng} alt="" />
                        </figure>
                      <div>
                      <div style={styles.editorialContent}>
                        <h3 className="fw-light" style={styles.articleTitle}>
                          <a className="fw-light text-decoration-none text-danger" href="/">
                            Preferential vasodilator effects of levosimendan	 in resistance pulmonary arteries in a rodent pulmonary embolism model
												  </a>
                        </h3>
                        <p className="fw-light" style={styles.author}>Camila Bedo, Juan C. Grignola</p>
                        <div style={styles.doiSection}>
                          <FaRegLaughWink style={styles.emojiIcon} />
                            <a className="link" href="https://doi.org/10.4081/cardio.2024.41" style={styles.doiLink}>https://doi.org/10.4081/cardio.2024.41</a>
                          </div>
                        </div>
                        <div className="d-flex gap-1" style={styles.stats}>
                          <p className="ps-3 m-0">
                            <span className="fw-light">Published:</span>
                            <span className="text-muted">March 28, 2024</span> 
                          </p>
                          <div style={styles.statItem}>
                              <FaRegEye className="ms-3 vertical-baseline" style={styles.icon} />
                            <span>1272</span>
                          </div>
                          <div style={styles.statItem}>
                            <FaFilePdf className="ms-3" style={styles.icon} />
                            <span>PDF: 328</span>
                          </div>
                        </div>
                        <div className="d-flex mb-4">
                          <a href="#" style={styles.pdfButton}>
                            <FaFilePdf  style={styles.icon} />
                            <span className="ps-2">PDF</span>
                          </a>
                          <a href="#" style={styles.pdfButton}>
                            <FaFilePdf  style={styles.icon} />
                            <span className="ps-2">HTML</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    </div><div style={styles.editorialSection}>
                    <h2 className="bg-light p-2 ps-3 rounded-pill" style={styles.sectionHeader}>Case Reports</h2>
                      <div className="d-flex">
                        <figure>
                          <img className="image mt-4" src={watchpng} alt="" />
                        </figure>
                      <div>
                      <div style={styles.editorialContent}>
                        <h3 className="fw-light" style={styles.articleTitle}>
                          <a className="fw-light text-decoration-none text-danger" href="/">  
				                    Elevated left ventricular end diastolic pressure, chronic pulmonary oedema and valve disease
					                </a>
                        </h3>
                        <p className="fw-light" style={styles.author}>Prithwish Banerjee</p>
                        <div style={styles.doiSection}>
                          <FaRegLaughWink style={styles.emojiIcon} />
                            <a className="link" href="https://doi.org/10.4081/cardio.2024.41" style={styles.doiLink}>https://doi.org/10.4081/cardio.2024.41</a>
                          </div>
                        </div>
                        <div className="d-flex gap-1" style={styles.stats}>
                          <p className="ps-3 m-0">
                            <span className="fw-light">Published:</span>
                            <span className="text-muted">March 28, 2024</span> 
                          </p>
                          <div style={styles.statItem}>
                              <FaRegEye className="ms-3 vertical-baseline" style={styles.icon} />
                            <span>1272</span>
                          </div>
                          <div style={styles.statItem}>
                            <FaFilePdf className="ms-3" style={styles.icon} />
                            <span>PDF: 328</span>
                          </div>
                        </div>
                        <div className="d-flex mb-4">
                          <a href="#" style={styles.pdfButton}>
                            <FaFilePdf  style={styles.icon} />
                            <span className="ps-2">PDF</span>
                          </a>
                          <a href="#" style={styles.pdfButton}>
                            <FaFilePdf  style={styles.icon} />
                            <span className="ps-2">HTML</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    </div><div style={styles.editorialSection}>
                    <h2 className="bg-light p-2 ps-3 rounded-pill" style={styles.sectionHeader}>Original Articles</h2>
                      <div className="d-flex">
                        <figure>
                          <img className="image mt-4" src={healthpng} alt="" />
                        </figure>
                      <div>
                      <div style={styles.editorialContent}>
                        <h3 className="fw-light" style={styles.articleTitle}>
                          <a className="fw-light text-decoration-none text-danger" href="/">
                            Neck-to-height ratio in Bosnian university students according to the 2017 American College of Cardiology/American Heart Association guidelines on hypertension classification
					                </a>
                        </h3>
                        <p className="fw-light" style={styles.author}>Asija Začiragić, Marija Mikić, Amela Dervišević, Orhan Lepara, Nesina Avdagić, Nermina Babić, Almir Fajkić, Amina Valjevac</p>
                        <div style={styles.doiSection}>
                          <FaRegLaughWink style={styles.emojiIcon} />
                            <a className="link" href="https://doi.org/10.4081/cardio.2024.41" style={styles.doiLink}>https://doi.org/10.4081/cardio.2024.41</a>
                          </div>
                        </div>
                        <div className="d-flex gap-1" style={styles.stats}>
                          <p className="ps-3 m-0">
                            <span className="fw-light">Published:</span>
                            <span className="text-muted">March 28, 2024</span> 
                          </p>
                          <div style={styles.statItem}>
                              <FaRegEye className="ms-3 vertical-baseline" style={styles.icon} />
                            <span>1272</span>
                          </div>
                          <div style={styles.statItem}>
                            <FaFilePdf className="ms-3" style={styles.icon} />
                            <span>PDF: 328</span>
                          </div>
                        </div>
                        <div className="d-flex mb-4">
                          <a href="#" style={styles.pdfButton}>
                            <FaFilePdf  style={styles.icon} />
                            <span className="ps-2">PDF</span>
                          </a>
                          <a href="#" style={styles.pdfButton}>
                            <FaFilePdf  style={styles.icon} />
                            <span className="ps-2">HTML</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    </div><div style={styles.editorialSection}>
                    <h2 className="bg-light p-2 ps-3 rounded-pill" style={styles.sectionHeader}>Original Articles</h2>
                      <div className="d-flex">
                        <figure>
                          <img className="image mt-4" src={healthpng} alt="" />
                        </figure>
                      <div>
                      <div style={styles.editorialContent}>
                        <h3 className="fw-light" style={styles.articleTitle}>
                          <a className="fw-light text-decoration-none text-danger" href="/">
                            Neck-to-height ratio in Bosnian university students according to the 2017 American College of Cardiology/American Heart Association guidelines on hypertension classification
					                </a>
                        </h3>
                        <p className="fw-light" style={styles.author}>Asija Začiragić, Marija Mikić, Amela Dervišević, Orhan Lepara, Nesina Avdagić, Nermina Babić, Almir Fajkić, Amina Valjevac</p>
                        <div style={styles.doiSection}>
                          <FaRegLaughWink style={styles.emojiIcon} />
                            <a className="link" href="https://doi.org/10.4081/cardio.2024.41" style={styles.doiLink}>https://doi.org/10.4081/cardio.2024.41</a>
                          </div>
                        </div>
                        <div className="d-flex gap-1" style={styles.stats}>
                          <p className="ps-3 m-0">
                            <span className="fw-light">Published:</span>
                            <span className="text-muted">March 28, 2024</span> 
                          </p>
                          <div style={styles.statItem}>
                              <FaRegEye className="ms-3 vertical-baseline" style={styles.icon} />
                            <span>1272</span>
                          </div>
                          <div style={styles.statItem}>
                            <FaFilePdf className="ms-3" style={styles.icon} />
                            <span>PDF: 328</span>
                          </div>
                        </div>
                        <div className="d-flex mb-4">
                          <a href="#" style={styles.pdfButton}>
                            <FaFilePdf  style={styles.icon} />
                            <span className="ps-2">PDF</span>
                          </a>
                          <a href="#" style={styles.pdfButton}>
                            <FaFilePdf  style={styles.icon} />
                            <span className="ps-2">HTML</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
    
            </div>
           
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
              <div style={styles.sidebar}>
                <Sidebar/>
              </div>
            </div>
        </div>
      </div>
    </div>
    </>
     
  );
};

// Styling
const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    fontFamily: "Roboto, sans-serif",
  },
  bradcrumBg: {
    width: "600px",
  },
  breadcrumb: {
    marginBottom: "10px",
    fontSize: "12px",
    color: "#888",
  },
  title: {
    fontSize: "28px",
    color: "#d9534f",
  },
  publishDate: {
    color: "#555",
    marginBottom: "20px",
  },
  coverSection: {
    marginBottom: "30px",
  },
  coverImage: {
    width: "150px",
    height: "auto",
  },
  coverTitle: {
    fontSize: "14px",
    marginTop: "10px",
  },
  editorialSection: {
    marginBottom: "40px",
    flexGrow: "1",
  },
  sectionHeader: {
    width: "700px",
    color: "#d9534f",
    fontSize: "22px",
    marginBottom: "10px",
  },
  editorialContent: {
    padding: "20px",
    borderRadius: "8px",
  },
  articleTitle: {
    color: "#d9534f",
    fontSize: "18px",
    marginBottom: "5px",
  },
  author: {
    color: "#666",
    marginBottom: "15px",
  },
  doiSection: {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
  },
  doiLink: {
    color: "#d9534f",
    marginLeft: "5px",
    textDecoration: "none",
  },
  emojiIcon: {
    fontSize: "18px",
  },
  stats: {
    display: "flex",
    gap: "15px",
    marginBottom: "20px",
  },
  statItem: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    fontSize: "14px",
  },
  icon: {
    fontSize: "15px",
  },
  pdfButton: {
    display: "inline-block",
    alignItems: "center",
    backgroundColor: "#d9534f",
    fontSize: "17px",
    color: "white",
    marginLeft: "10px",
    padding: "6px 18px",
    borderRadius: "4px",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Volll;
