import React from 'react'
import '../styles/Header.css'
import { IoIosArrowDown } from "react-icons/io";


const Header = () => {
  return (
    <div className='header'>
      <div className="diagonal-div">
      <img src='/images/logo.jpg' alt='logo'/>
      </div>
  <div className='right-header px-5'>
    <div className='company-name'>
      <div className='image-container'>
        
      </div>

        <span style={{fontSize:'12px',fontWeight:'500'}}>XYZ Enterprise Pvt Ltd</span>
    </div>
    <div className='icon-container'>

    <IoIosArrowDown/>
    </div>
  </div>


    </div>
  )
}

export default Header