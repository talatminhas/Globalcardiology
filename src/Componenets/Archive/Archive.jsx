import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaRegEye,
  FaFilePdf,
  FaRegLaughWink,
  FaFileDownload,
} from "react-icons/fa";
import coverpng from "../../Assets/CoverIssueDefault_en_US (1).jpg";
import { FaDownload } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaEye } from "react-icons/fa";
import Sidebar from "../SideBar/SideNav";
import './Archive.css' 

const Archive = () => {
  return (
    <div className="container baadcrums" style={styles.container}>
      <div className="row">
        <div className="col-lg-9">
           {/* Main Content */}
      <div style={styles.mainContent}>
        <div>
        <nav aria-label="breadcrumb bg-light">
            <ol className="breadcrumb bg-light p-3">
              <li className="breadcrumb-item">
                <a className="text-decoration-none text-danger" to="/">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <NavLink className="text-decoration-none text-muted" to="/About">
                Archives
                </NavLink>
              </li>
            </ol>
          </nav>
          <h1 style={styles.title}>Vol. 2 No. 2 (2024)</h1>
          <p style={styles.publishDate}>Published: 2024-06-28</p>
          <h1 className="FirstHeading fs-1 fw-bold text-danger">2024</h1>
          <div className="d-flex align-items-center gap-4 ">
           <NavLink to="/Vol" className="text-decoration-none text-muted" > 
              <div style={styles.coverSection}>
                <p
                  className="ps-2 fs-6 fw-bold text-danger"
                  style={styles.coverTitle} 
                >
                  Vol. 2 No. 2 (2024)
                </p>
                <img
                  src={coverpng} // Replace with actual image link
                  alt="Global Cardiology"
                  style={styles.coverImage}
                />
                <p className=" ps-3 pt-2">
                  <span className="text-decoration-none">Published: </span>
                  <span className="fs-6 fw-light text-decoration-none">2024-06-28</span>
                </p>
              </div>
            </NavLink>
            <NavLink to="/Vol" className="text-decoration-none text-muted"><div style={styles.coverSection}>
              <p className="ps-2 fs-6 fw-bold text-danger text-decoration-none" style={styles.coverTitle}> Vol. 2 No. 1 (2024)</p>
              <img className="text-decoration-none" src={coverpng} alt="Global Cardiology" style={styles.coverImage}
              />
              <p className=" ps-3 pt-2">
                <span className="fw-medium fs-6">Published: </span>
                <span className="fs-6 fw-light ps-2">2024-06-28</span>
              </p>
            </div></NavLink> 
          </div>
          <div>
            <h1 className="FirstHeading fs-1 fw-bold text-danger pt-4">2023</h1>

            <div style={styles.coverSection}>
              <p
                className="ps-2 fs-6 fw-bold text-danger"
                style={styles.coverTitle}
              >
                Vol. 2 No. 1 (2024)
              </p>
              <img
                src={coverpng} // Replace with actual image link
                alt="Global Cardiology"
                style={styles.coverImage}
              />
              <p className=" ps-3 pt-2">
                <span className="fw-medium fs-6">Published: </span>
                <span className="fs-6 fw-light ps-2">2024-06-28</span>
              </p>
            </div>
            
          </div>
        </div>
      </div>
        </div>
       

      {/* Sidebar */}
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="side sidebar ms-2">
          <Sidebar/>
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
    padding: "20px ",
    fontFamily: "Arial, sans-serif",
  },
  mainContent: {
    width: "60%",
    display: "flex",
    gap: "30px",
    border: "none",
  },

  breadcrumb: {
    width: "1050px",
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
    width: "200px",
    height: "auto",
  },
  coverTitle: {
    fontSize: "14px",
    marginTop: "10px",
  },
  editorialSection: {
    marginBottom: "40px",
    flexGrow: "2",
  },
  sectionHeader: {
    width: "800px",
    color: "#d9534f",
    fontSize: "22px",
    marginBottom: "10px",
  },

}

export default Archive;
