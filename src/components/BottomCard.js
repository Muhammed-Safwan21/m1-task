

import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { LuUser2 } from 'react-icons/lu';
import { TiCloudStorageOutline } from 'react-icons/ti';
import { AiOutlineMail } from 'react-icons/ai';
import { IoCheckmarkDone } from "react-icons/io5";
import { BiSolidRightArrowAlt } from 'react-icons/bi';
import '../styles/BottomCard.css';

function FeatureItem({ icon, text }) {
  return (
    <div style={{ display: 'flex', fontWeight: '600', fontSize: '14px' }}>
      <div>{icon}</div><div  style={{ marginLeft: '10px' }} ><span className='text-center'>{text}</span></div>
    </div>
  );
}

function BottomCard({ title, description,buttonText,btnBgColor,userText ,checkText,hasEmailSupport }) {
  return (
    <Row className='bottomCard-container'>
       <Col className='' md={6} >
          <div style={{padding: '0 10px',backgroundColor:btnBgColor,borderRadius:'15px',display: 'inline-block',alignItems:'center'}} className='text-center'><span style={{fontSize:'12px',fontWeight:'500'}}>Free Forever</span></div>
          <h2 className='mt-2'>{title}</h2>
          <p style={{fontSize:'12px',fontWeight:'500'}}>{description} </p>
          <button className='basic-btn' style={{backgroundColor:btnBgColor}}><span>{buttonText}</span><BiSolidRightArrowAlt /></button>
        </Col>

      <Col className="" style={{display:'flex', flexDirection:'column',justifyContent:'center'}} md={6}>
       
        <p className='mb-1'  style={{ fontSize: '14px' }}>What you'll get:</p>

        <FeatureItem icon={<LuUser2 />} text={userText} />
       

        {hasEmailSupport && (
            <>
          <FeatureItem icon={<AiOutlineMail />} text="Email Support" />
          <FeatureItem icon={<TiCloudStorageOutline />} text="Upto 8gb Storage" />
            </>
        )}
        <div style={{ display: 'flex', fontWeight: '600', fontSize: '14px', marginBottom: '5px' }}>
          <div><IoCheckmarkDone /></div>
          <div style={{ marginLeft: '10px' }}>
            <span className='text-center'>
              {checkText}
            </span>
          </div>
        </div>
      </Col>
    </Row>
  
  );
}

export default BottomCard;
