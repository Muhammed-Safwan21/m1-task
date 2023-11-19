import React, { useState } from "react";
import { Badge, Col, Row } from "react-bootstrap";
import OfferCard from "./OfferCard";
import BottomCard from "./BottomCard";
import { FaBell } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import '../styles/Home.css'


const Home = () => {
  const [activeButton, setActiveButton] = useState("monthly");

  const handleToggle = (button) => {
    setActiveButton(button);
  };
  return (
    <div className="home-container">
      <div className="p-4">
      <h4 className="mx-4">Choose a plan that's just right for you!</h4>
      <div className="month-annual-button px-4">
        
      <div className="button-container">
        <div
          className={`togglebtn ${activeButton === "monthly" ? "active" : ""}`}
          onClick={() => handleToggle("monthly")}
        >
          Monthly
        </div>
        <div
          className={`togglebtn ${activeButton === "annually" ? "active" : ""}`}
          onClick={() => handleToggle("annually")}
        >
          Annually<sup style={{color:'green'}}>-10%</sup>
        </div>
      </div>
      </div>
      <Row className="card-container pt-4">
        <Col sm={12} md={6} lg={4} >
          <div className="p-4">
          <OfferCard
            offerType="Basic"
            originalPrice="$89.99/mo"
            discountedPrice="$9.99/mo"
            users="Up to 25 Users"
            storage="Up to 25gb Storage"
            support="Email Support"
            buttonColor="#fadea9"
          />
          </div>
          
        </Col>
        <Col sm={12} md={6} lg={4} >
        <div className="p-4">
          <OfferCard
            offerType="Standard"
            originalPrice="$189.99/mo"
            discountedPrice="$99.99/mo"
            users="Up to 50 Users"
            storage="Up to 60gb Storage"
            support="Email+Chat Support"
            buttonColor='#f9a7b6'/>
            </div>
            </Col>
        <Col sm={12} md={6} lg={4} >
        <div className="p-4">
          <OfferCard
            offerType="Premium"
            originalPrice="$389.99/mo"
            discountedPrice="$199.99/mo"
            users="Up to 75 Users"
            storage="Up to 100gb Storage"
            support="Email+Chat+Whatsapp Support"
            buttonColor="#f397f3"
          />
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="px-5 py-2">
          <BottomCard title='Free Starter'
          description='This is quickest and easiest way to try Protocols with functionalities'
          buttonText='Get Started'
          btnBgColor='lightGreen'
          hasEmailSupport={true}
          userText='Upto 25 Users'
          checkText='Basics of Documents, Task Flow, Voting, Accounting, Banking, Notes, Investor, Director and Team Management included'
          />
        </Col>
        <Col md={6} className="px-5 py-2">
        <BottomCard title='Enter Plan'
        description='Effortlessly customize and fine-tune services as your needs shift, ensuring the perfect tools for success'
        buttonText='Contact Us'
        btnBgColor='#75c8e3'
        hasEmailSupport={false}
        userText='More than 75 Users'
        checkText='Cutomization of all other features'
        />
        </Col>
      </Row>
      <div className="text-end px-3 note" >*some unique features are provided as add-ons with individual plans for each features</div>
      </div>
      <div className="py-4 right-container">
      <div className="bell-container">
        <div className="bell-icon">
          <FaBell color="skyBlue"/>
        </div>
        {/* <Badge pill bg="danger" className="badge">
         1
        </Badge> */}
      </div>
      <div className="plus-box">
          <FaPlus color="violet"/>
      </div>
      
      </div>
     
    </div>
  );
};

export default Home;
