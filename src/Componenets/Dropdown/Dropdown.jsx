import React, { useState } from 'react';
import './Dropdown.css'; // Create a separate CSS file or use inline styling
import img from "../../Images/download-icon.png"

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={toggleDropdown}>
        More Citation Formats
        <span className={`arrow ${isOpen ? 'up' : 'down'}`}></span>
      </div>
      {isOpen && (
        <ul className="dropdown-list overflow-y-auto">
          <li className="dropdown-item text-danger">ACM</li>
          <li className="dropdown-item text-danger">ACS</li>
          <li className="dropdown-item text-danger">APA</li>
          <li className="dropdown-item text-danger">ABNT</li>
          <li className="dropdown-item text-danger">Chicago</li>
          <li className="dropdown-item text-danger">Harvard</li>
          <li className="dropdown-item text-danger">IEEE</li>
          <li className="dropdown-item text-danger">MLA</li>
          <li className="dropdown-item text-danger">Turabian</li>
          <li className="dropdown-item text-danger">Vancouver</li>
          <h3 className='ps-3 pt-4 pb-4'>Download Citation</h3>
          <li className="d-flex gap-2 dropdown-item text-danger border-0">
            <figure><img className='icon-img' src={img} alt="" /></figure>
            <span className='pt-1'>Endnote/Zotero/Mendeley (RIS)</span></li>
            <li className="d-flex gap-2 dropdown-item text-danger">
            <figure><img className='icon-img' src={img} alt="" /></figure>
            <span className='pt-1'>BibTeX</span></li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
