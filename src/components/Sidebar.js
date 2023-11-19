import React, { useState } from 'react';
import '../styles/Sidebar.css';
import { MdDashboard } from 'react-icons/md';
import { GiSeedling } from "react-icons/gi";
import { FaPuzzlePiece } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { IoMdPower } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Sidebar = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  return (
    <div className='sidebar-container'>
      <div className='profile text-center'>
        <div>
          <img src='/images/person.jpg' alt='hero' className='profile-image' />
        </div>
        
        <p style={{ fontWeight: '600' }} className='mb-0'>John Doe <IoIosArrowForward color='#57b6dd' /></p>
        <span>john@gmail.com</span>
      </div>
      
      <div
        className={`option ${selectedOption === 0 ? 'selected' : ''}`}
        onClick={() => handleOptionClick(0)}
      >
        <MdDashboard color='#57b6dd'/>
        <span>Dashboard</span>
      </div>

      <div
        className={`option ${selectedOption === 1 ? 'selected' : ''}`}
        onClick={() => handleOptionClick(1)}
      >
        <GiSeedling color='#57b6dd'/>
        <span>Perks</span>
      </div>

      <div
        className={`option ${selectedOption === 2 ? 'selected' : ''}`}
        onClick={() => handleOptionClick(2)}
      >
        <FaPuzzlePiece color='#57b6dd'/>
        <span>Addons</span>
      </div>

      <div
        className={`option ${selectedOption === 3 ? 'selected' : ''}`}
        onClick={() => handleOptionClick(3)}
      >
        <FaComments color='#57b6dd'/>
        <span>FAQ</span>
      </div>

      <div
        className={`option ${selectedOption === 4 ? 'selected' : ''}`}
        onClick={() => handleOptionClick(4)}
      >
        <MdOutlineSupportAgent color='#57b6dd'/>
        <span>Support</span>
      </div>

      <div className='logout'>
        Logout <IoMdPower/>
      </div>
    </div>
  );
};

export default Sidebar;
