import React from "react";
import {FaRegEye,FaFilePdf,FaRegLaughWink,FaFileDownload,}
from "react-icons/fa";
import coverpng from "../../Assets/CoverIssueDefault_en_US (1).jpg";
import { FaDownload } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaEye } from "react-icons/fa";
import "./Archives.css"
import { CiTextAlignCenter } from "react-icons/ci";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import Sidebar from "../SideBar/SideNav";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, NavLink } from "react-router-dom";
import ReactDOM from 'react-dom'



const Archives = () => {
  return (
    <div className="container badcrum">
      <div className="d-flex flex-column">
            <nav aria-label="breadcrumb bg-light badcrum">
              <ol className="breadcrumb bg-light p-3">
                <li className="breadcrumb-item">
                  <a className="text-decoration-none text-danger" href="/">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <a className="text-decoration-none text-muted" href="/About">
                  Current
                  </a>
                </li>
              </ol>
            </nav>
          <div className="row">
          <Link className="col-lg-3" style={styles.mainContent}>
            <div className="d-flex flex-column flex-wrap">
              <h1 className="main-heading fw-black text-black d-block" style={styles.title}>Vol. 2 No. 2 (2024)</h1>
              <p style={styles.publishDate}>Published: 2024-06-28</p>
              <div style={styles.coverSection}>
                <img src={coverpng}  alt="Global Cardiology" style={styles.coverImage} />
                <p style={styles.coverTitle}>GLOBAL CARDIOLOGY</p>
              </div>
            </div>
          </Link>
            <div className="col-lg-6">
              <div style={styles.editorialSection}>
                <h2 className="bg-light p-2 ps-3 rounded-pill" style={styles.sectionHeader}>EDITORIALS</h2>
                <div style={styles.editorialContent}>
                  <h3 style={styles.articleTitle}>Global Cardiology issue highlights</h3>
                  <p style={styles.author}>Andrew J.S. Coats</p>
                  <div style={styles.doiSection}>
                    <FaRegLaughWink style={styles.emojiIcon} />
                    <a href="https://doi.org/10.4081/cardio.2024.41" style={styles.doiLink}>https://doi.org/10.4081/cardio.2024.41</a>
                  </div>
                </div>
                <div style={styles.stats}>
                  <div style={styles.statItem}>
                    <FaRegEye className="ms-3" style={styles.icon} />
                    <span>1272</span>
                  </div>
                  <div style={styles.statItem}>
                    <FaFilePdf className="ms-3" style={styles.icon} />
                    <span>PDF: 328</span>
                  </div>
                </div>
                <a href="#" style={styles.pdfButton}>PDF</a>
              </div>
              <div style={styles.editorialSection}>
                <h2 className="bg-light p-2 ps-3 rounded-pill" style={styles.sectionHeader}>Reviews</h2>
                  <div style={styles.editorialContent}>
                  <h3 style={styles.articleTitle}>Epidemiology of peripartum cardiomyopathy in Africas</h3>
                  <p style={styles.author}>Kamilu M. Karaye, Abdulrazaq G. Habib, Karen Sliwa</p>
                  <div style={styles.doiSection}>
                    <FaRegLaughWink style={styles.emojiIcon} />
                  <a href="https://doi.org/10.4081/cardio.2024.41" style={styles.doiLink}>https://doi.org/10.4081/cardio.2024.41</a>
                </div>
              </div>
              <div style={styles.stats}>
                <div style={styles.statItem}>
                  <FaRegEye className="ms-3" style={styles.icon} />
                  <span>1272</span>
                </div>
                <div style={styles.statItem}>
                  <FaFilePdf style={styles.icon} />
                  <span>PDF: 328</span>
                </div>
                <a href="#" style={styles.pdfButton}>PDF</a>
              </div>
              <div style={styles.editorialSection}>
                <div style={styles.editorialContent}>
                <h3 style={styles.articleTitle}>Using multiple primary endpoints in clinical trials with a focus on heart failure</h3>
                <p style={styles.author}>Stefan D. Anker, Javed Butler, Khawaja M. Talha, Tim Friede</p>
                <div style={styles.doiSection}>
                  <FaRegLaughWink style={styles.emojiIcon} />
                    <a href="https://doi.org/10.4081/cardio.2024.41" style={styles.doiLink}>https://doi.org/10.4081/cardio.2024.41</a>
                </div>
                <div style={styles.stats}>
                  <div style={styles.statItem}>
                    <FaRegEye  style={styles.icon} />
                    <span>1272</span>
                  </div>
                  <div style={styles.statItem}>
                    <FaFilePdf style={styles.icon} />
                    <span>PDF: 328</span>
                  </div>
                </div>
                <NavLink to="/" href="#" style={styles.pdfButton}>PDF</NavLink>
              </div>
              <div style={styles.editorialSection}>
                <div style={styles.editorialContent}>
                <h3 style={styles.articleTitle}>The impact of diurnal fasting during Ramadan on patients with established cardiac disease: a systematic review</h3>
                <p style={styles.author} className="text-muted">The effect of SGLT2 inhibitors on health status in patients with heart failure: a systematic review and meta-analysis</p>
                <div style={styles.doiSection}>
                  <FaRegLaughWink style={styles.emojiIcon} />
                  <a href="https://doi.org/10.4081/cardio.2024.41" style={styles.doiLink}>https://doi.org/10.4081/cardio.2024.41</a>
                </div>
                <div style={styles.stats}>
                  <div style={styles.statItem}>
                    <FaRegEye style={styles.icon} />
                    <span>1272</span>
                  </div>
                  <div style={styles.statItem}>
                    <FaFilePdf style={styles.icon} />
                    <span>PDF: 328</span>
                  </div>
                </div>
                <a href="#" style={styles.pdfButton}>PDF</a>
              </div>
              <div style={styles.editorialSection}>
                <div style={styles.editorialContent}>
                <h3 style={styles.articleTitle}>The effect of SGLT2 inhibitors on health status in patients withheart failure: a systematic review and meta-analysis</h3>
                <p style={styles.author}>Andrew J.S. Coats</p>
                <div style={styles.doiSection}>
                  <FaRegLaughWink style={styles.emojiIcon} />
                  <a href="https://doi.org/10.4081/cardio.2024.41" style={styles.doiLink}>https://doi.org/10.4081/cardio.2024.41</a>
                </div>
                <div style={styles.stats}>
                  <div style={styles.statItem}>
                    <FaRegEye style={styles.icon} />
                    <span>1272</span>
                  </div>
                  <div style={styles.statItem}>
                    <FaFilePdf style={styles.icon} />
                    <span>PDF: 328</span>
                  </div>
                  <div style={styles.statItem}>
                    <FontAwesomeIcon icon={FaDownload} />
                    <span>PDF: 328</span>
                  </div>
                </div>
                <div className="flex">
                  <a href="#" style={styles.pdfButton}>
                    <FaFilePdf className="text-white pe-1" style={styles.icon} />
                    <span className="pt-3 ps-2">PDF</span>
                  </a>
                  <a href="#" style={styles.pdfButton}>
                    <FaFilePdf className="text-white pe-1" style={styles.icon} />
                    <span className="pt-3 ps-2">CONFLICT OF INTEREST</span>
                  </a>
                  <a href="#" style={styles.pdfButton}>
                    <FaFilePdf className="text-white" style={styles.icon} />
                    <span className="pt-3 ps-2">SUPPLEMENTARY MATERIAL</span>
                  </a>
                </div>
              </div>
              <div style={styles.editorialSection}>
                <h2 className="bg-light p-2 ps-3 rounded-pill" style={styles.sectionHeader}>Original Articles</h2>
                <div style={styles.editorialContent}>
                <h3 style={styles.articleTitle}>Bibliometric analysis of cardiovascular disease research activity in the Arab world</h3>
                  <p style={styles.author}>Hussein H. Khachfe, Marwan M. Refaat</p>
                  <div style={styles.doiSection}>
                    <FaRegLaughWink style={styles.emojiIcon} />
                    <a href="https://doi.org/10.4081/cardio.2024.41" style={styles.doiLink}>https://doi.org/10.4081/cardio.2024.41</a>
                  </div>
                  <div style={styles.stats}>
                    <div style={styles.statItem}>
                      <FaRegEye style={styles.icon} />
                      <span>1272</span>
                  </div>
                  <div style={styles.statItem}>
                     <FaFilePdf style={styles.icon} />
                    <span>PDF: 328</span>
                  </div>
                </div>
                <a href="#" style={styles.pdfButton}>PDF</a>
              </div>
              <div style={styles.editorialContent}>
                <h3 style={styles.articleTitle}> Prevalence of left ventricular dysfunction and relationship with serum selenium in apparently healthy pregnant women: results from the PEACE registry</h3>
                <p style={styles.author}> Kamilu M. Karaye, Idris Y. Mohammed, Hadiza Sa’idu, Naser A. Ishaq, Suleiman A. Balarabe, Jamilu Tukur, Tewogbade A. Adedeji, Olufemiwa N. Makinde, Rasaaq A. Adebayo</p>
                <div style={styles.doiSection}>
                  <FaRegLaughWink style={styles.emojiIcon} /><a href="https://doi.org/10.4081/cardio.2024.41" style={styles.doiLink}>https://doi.org/10.4081/cardio.2024.41</a>
                </div>
                <div style={styles.stats}>
                  <div style={styles.statItem}>
                    <FaRegEye style={styles.icon} />
                    <span>1272</span>
                  </div>
                  <div style={styles.statItem}>
                    <FaFilePdf style={styles.icon} />
                    <span>PDF: 328</span>
                  </div>
                </div>
                <a href="#" style={styles.pdfButton}>PDF</a>
              </div>
              <div style={styles.editorialContent}>
                <h3 style={styles.articleTitle}> Preliminary study on the immunohistochemical expression of galectin-3 in hypertrophic hearts</h3>
                <p style={styles.author}> Cecilia Salzillo, Lorenzo Giovannico, Giuseppe Fischetti, Gerardo Cazzato, Mario Magistro, Grazia Nucci, Gabriella Serio, Andrea Marzullo</p>
                <div style={styles.doiSection}>
                  <FaRegLaughWink style={styles.emojiIcon} />
                  <a href="https://doi.org/10.4081/cardio.2024.41" style={styles.doiLink}>https://doi.org/10.4081/cardio.2024.41</a>
                </div>
                <div style={styles.stats}>
                  <div style={styles.statItem}>
                    <FaRegEye style={styles.icon} />
                    <span>1272</span>
                  </div>
                  <div style={styles.statItem}>
                    <FaFilePdf style={styles.icon} />
                    <span>PDF: 328</span>
                  </div>
                  <div style={styles.statItem}>
                    <FontAwesomeIcon icon={FaDownload} />
                    <span>PDF: 328</span>
                  </div>
                </div>
                <div className="flex">
                  <a href="#" style={styles.pdfButton}>
                    <FaFilePdf className="text-white pe-1" style={styles.icon} />
                    <span className="pt-3 ps-2">PDF</span>
                  </a>
                  <a href="#" style={styles.pdfButton}>
                    <FaFilePdf className="text-white pe-1" style={styles.icon} />
                    <span className="pt-3 ps-2">CONFLICT OF INTEREST</span>
                  </a>
                  <a href="#" style={styles.pdfButton}>
                    <FaFilePdf className="text-white" style={styles.icon} />
                    <span className="pt-3 ps-2">SUPPLEMENTARY MATERIAL</span>
                  </a>
                </div>
              </div>
            </div>
            </div>
            </div>
            </div>
            </div>
          </div>
          <div className="side-nav col-lg-3 col-md-6 col-sm-12">
              <div style={styles.sidebar}>
                <Sidebar/>
              </div>
          </div>
            
            </div>
      </div>
      </div>
     
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
    width: "680px",
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

export default Archives;
