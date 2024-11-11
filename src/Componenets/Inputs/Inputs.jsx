import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import "./This.css"


const Inputs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedAfterYear, setPublishedAfterYear] = useState("");
  const [publishedAfterMonth, setPublishedAfterMonth] = useState("");
  const [publishedAfterDay, setPublishedAfterDay] = useState("");
  const [publishedBeforeYear, setPublishedBeforeYear] = useState("");
  const [publishedBeforeMonth, setPublishedBeforeMonth] = useState("");
  const [publishedBeforeDay, setPublishedBeforeDay] = useState("");

  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();
    return Array.from({ length: 50 }, (_, i) => currentYear - i); 
  };

  const generateMonthOptions = () => [
    { value: "01", label: "January" },
    { value: "02", label: "February" },
    { value: "03", label: "March" },
    { value: "04", label: "April" },
    { value: "05", label: "May" },
    { value: "06", label: "June" },
    { value: "07", label: "July" },
    { value: "08", label: "August" },
    { value: "09", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ];

  const generateDayOptions = () => Array.from({ length: 31 }, (_, i) => i + 1);

  const handleSearch = () => {
    console.log("Search Query:", searchQuery);
    console.log("Author:", author);
    console.log("Published After:", publishedAfterYear, publishedAfterMonth, publishedAfterDay);
    console.log("Published Before:", publishedBeforeYear, publishedBeforeMonth, publishedBeforeDay);
  };

  return (
    <div className="container badcrum">
      <nav aria-label="breadcrumb bg-light">
        <ol className="breadcrumb bg-light p-3">
          <li className="breadcrumb-item">
            <a className="text-decoration-none text-danger" href="/">
              Home
            </a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Search
          </li>
        </ol>
      </nav>
      <div className="row">
        <div className="col-lg-9">
      <h2>Search</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="d-flex gap-3">
          <input
            className="form-control p-2 rounded"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="border rounded p-3 mt-3">
          <h4>Advanced Filters</h4>

          <div className="d-flex gap-3">
            <div>
              <label>Published After</label>
              <div className="d-flex gap-2">
                <select
                  className="form-control"
                  value={publishedAfterYear}
                  onChange={(e) => setPublishedAfterYear(e.target.value)}
                >
                  <option value="">Year</option>
                  {generateYearOptions().map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>

                <select
                  className="form-control"
                  value={publishedAfterMonth}
                  onChange={(e) => setPublishedAfterMonth(e.target.value)}
                >
                  <option value="">Month</option>
                  {generateMonthOptions().map((month) => (
                    <option key={month.value} value={month.value}>
                      {month.label}
                    </option>
                  ))}
                </select>

                <select
                  className="form-control"
                  value={publishedAfterDay}
                  onChange={(e) => setPublishedAfterDay(e.target.value)}
                >
                  <option value="">Day</option>
                  {generateDayOptions().map((day) => (
                    <option key={day} value={day < 10 ? `0${day}` : day}>
                      {day}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label>By Author</label>
              <input
                className="form-control"
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-3">
            <label>Published Before</label>
            <div className="col-lg-4 d-flex gap-2">
              <select
                className="form-control"
                value={publishedBeforeYear}
                onChange={(e) => setPublishedBeforeYear(e.target.value)}
              >
                <option value="">Year</option>
                {generateYearOptions().map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>

              <select
                className="form-control"
                value={publishedBeforeMonth}
                onChange={(e) => setPublishedBeforeMonth(e.target.value)}
              >
                <option value="">Month</option>
                {generateMonthOptions().map((month) => (
                  <option key={month.value} value={month.value}>
                    {month.label}
                  </option>
                ))}
              </select>

              <select
                className="form-control"
                value={publishedBeforeDay}
                onChange={(e) => setPublishedBeforeDay(e.target.value)}
              >
                <option value="">Day</option>
                {generateDayOptions().map((day) => (
                  <option key={day} value={day < 10 ? `0${day}` : day}>
                    {day}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </form>
      <div className="d-flex justify-content-end mt-3">
        <button className="btn btn-secondary" onClick={handleSearch}>
          <FaSearch className="me-2" /> Search
        </button>
      </div>
      <article className="border rounded p-3 mt-5">
        No search
        </article>
      </div>
      
      
      <div className="col-lg-3">
        <div className="sides sidebar">
          <h4 className="sidebar-title text-white text-center bg-danger p-2">
            FOR AUTHORS
          </h4>
          <ul className="list-group ">
            <li className="bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
              <a
                className="text-decoration-none text-muted fw-light"
                href="/submission"
              >
                Submit Your Paper
              </a>
            </li>
            <li className="bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
              <a
                className="text-decoration-none text-muted fw-light"
                href="/guide-authors"
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
            <li className="bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
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
              failure (RESHAPE HF-2) trial: comparison with COAPT and Mitra-FR"
            </p>
            <div>
              <FaEye className="me-2" />
              <span className="fw-light text-muted">70</span>
            </div>
          </div>
          <div className="border-1 bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
            <p className="fw-light text-muted">
              "The effect of SGLT2 inhibitors on health status in patients with
              heart failure: a systematic review and meta-analysis"
            </p>
            <div>
              <FaEye className="me-2" />
              <span className="fw-light text-muted">58</span>
            </div>
          </div>
          <div className="border-1 bg-light pt-2 ps-3 pe-3 pb-3 border-bottom">
            <p className="fw-light text-muted">
              "The effect of SGLT2 inhibitors on health status in patients with
              heart failure: a systematic review and meta-analysis"
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

export default Inputs;
