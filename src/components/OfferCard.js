import React from 'react';
import { Button } from 'react-bootstrap';
import { BiSolidRightArrowAlt } from 'react-icons/bi';
import { LuUser2 } from 'react-icons/lu';
import { TiCloudStorageOutline } from 'react-icons/ti';
import { AiOutlineMail } from 'react-icons/ai';
import { BiSolidRightArrow } from 'react-icons/bi';
import '../styles/OfferCard.css';

function OfferCard({ offerType, originalPrice, discountedPrice, users, storage, support,buttonColor }) {
  return (
    <div className='offerCard-container' >
      <h2>{offerType}</h2>
      <p className='m-0 priceText' >{originalPrice}</p>
      <p style={{ fontSize: '32px' }}>{discountedPrice}</p>
      <button className='basic-btn' style={{backgroundColor:buttonColor}}><span>Get Started</span><BiSolidRightArrowAlt /></button>
      <hr />
      <p style={{ fontSize: '14px' }}>What you'll get:</p>

      <div className='feature'><div><LuUser2 /></div><div style={{ marginLeft: '10px' }}><span className='text-center'>{users}</span></div></div>
      <div className='feature'><div><TiCloudStorageOutline /></div><div style={{ marginLeft: '10px' }}><span  className='text-center'>{storage}</span></div></div>
      <div className='feature mb-2' ><div><AiOutlineMail /></div><div style={{ marginLeft: '10px' }} ><span className='text-center'>{support}</span></div></div>

      <a href='/' >
        <div className='getStart-container'>
          <span>EXPLORE FEATURES </span><div style={{ color: buttonColor }}><BiSolidRightArrow /></div>
         
        </div>
      </a>
    </div>
  );
}

export default OfferCard;
