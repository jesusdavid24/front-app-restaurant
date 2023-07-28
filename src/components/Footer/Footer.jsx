import React from "react";
import { Accordion } from "@mantine/core";
import "./footer.scss";

const Footer = () => {
   const locationUrl = "../src/assets/img/location.png";
   return (
      <div className="footer">
         <Accordion
            radius="xs"
            defaultValue="customization"
            transitionDuration={1000}>
            <Accordion.Item value="contact-us">
               <Accordion.Control className="footer__control">
                  Contact Us
               </Accordion.Control>
               <Accordion.Panel className="footer__panel">
                  <div className="footer__panel__contact">
                     <div className="footer__panel__contact__logo-container">
                        <div className="footer__panel__contact__logo-background">
                           <img
                              id="logo"
                              src="/src/assets/icons/logo2.png"
                              className="footer__panel__contact__logo"
                           />
                        </div>
                        <h1 id="logo" className="footer__panel__contact__title">
                           RICA
                        </h1>
                     </div>
                     <p className="footer__panel__contact__content">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the...
                     </p>
                     <h2 className="footer__panel__contact__data">
                        <img
                           id="logo"
                           src="/src/assets/icons/position.png"
                           className="footer__panel__contact__icon"
                        />
                        &nbsp; A-32, Albany, New York.
                     </h2>
                     <h2 className="footer__panel__contact__data">
                        <img
                           id="logo"
                           src="/src/assets/icons/telephone.png"
                           className="footer__panel__contact__icon"
                        />
                        &nbsp; 518 - 457 - 5181
                     </h2>
                     <h2 className="footer__panel__contact__data">
                        <img
                           id="logo"
                           src="/src/assets/icons/mail.png"
                           className="cfooter__panel__contact__icon"
                        />
                        &nbsp; Contact@Gmail.com
                     </h2>
                  </div>
               </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="useful-links">
               <Accordion.Control className="footer__control">
                  Useful Links
               </Accordion.Control>
               <Accordion.Panel className="footer__panel">Home</Accordion.Panel>
               <Accordion.Panel className="footer__panel">
                  Our Vehical
               </Accordion.Panel>
               <Accordion.Panel className="footer__panel">
                  Latest Video
               </Accordion.Panel>
               <Accordion.Panel className="footer__panel">
                  Services
               </Accordion.Panel>
               <Accordion.Panel className="footer__panel">
                  Booking Deal
               </Accordion.Panel>
               <Accordion.Panel className="footer__panel">
                  Emergency Call
               </Accordion.Panel>
               <Accordion.Panel className="footer__panel">
                  Mobile App
               </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="about">
               <Accordion.Control className="footer__control">
                  About
               </Accordion.Control>
               <Accordion.Panel className="footer__panel">
                  About Us
               </Accordion.Panel>
               <Accordion.Panel className="footer__panel">FAQ</Accordion.Panel>
               <Accordion.Panel className="footer__panel">
                  Login
               </Accordion.Panel>
               <Accordion.Panel className="footer__panel">
                  Register
               </Accordion.Panel>
               <Accordion.Panel className="footer__panel">
                  Terms & Co.
               </Accordion.Panel>
               <Accordion.Panel className="footer__panel">
                  Privacy
               </Accordion.Panel>
               <Accordion.Panel className="footer__panel">
                  Support
               </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="our-location">
               <Accordion.Control className="footer__control">
                  Our Location
               </Accordion.Control>
               <Accordion.Panel className="footer__panel">
                  <div
                     className="footer__panel__location"
                     style={{ backgroundImage: `url(${locationUrl})` }}></div>
               </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="new-topics">
               <Accordion.Control className="footer__control">
                  New Topics
               </Accordion.Control>
               <Accordion.Panel className="footer__panel">
                  <div className="footer__panel__topics">
                     <img
                        src="../src/assets/img/taxi.jpg"
                        className="footer__panel__topics__image"
                     />
                     <div className="footer__panel__topics__cotent-box">
                        <h1 className="footer__panel__topics__title">
                           Recent News
                        </h1>
                        <p className="footer__panel__topics__content">
                           Lorem Ipsum is simply dummy text of the printing and
                           typesetting industry. Lorem Ipsum has been th...
                        </p>
                     </div>
                  </div>
               </Accordion.Panel>
               <Accordion.Panel className="footer__panel">
                  <div className="footer__panel__topics">
                     <img
                        src="../src/assets/img/taxi2.jpg"
                        className="footer__panel__topics__image2"
                     />
                     <div className="footer__panel__topics__cotent-box">
                        <h1 className="footer__panel__topics__title">
                           Recent News
                        </h1>
                        <p className="footer__panel__topics__content">
                           Lorem Ipsum is simply dummy text of the printing and
                           typesetting industry. Lorem Ipsum has been th...
                        </p>
                     </div>
                  </div>
               </Accordion.Panel>
            </Accordion.Item>
         </Accordion>
         <div className="footer__networks">
            <div className="footer__networks__buttons">
               <img
                  src="../src/assets/icons/facebook.png"
                  className="footer__networks__icon"
               />
               <img
                  src="../src/assets/icons/instagram.png"
                  className="footer__networks__icon"
               />
               <img
                  src="../src/assets/icons/twitter.png"
                  className="footer__networks__icon"
               />
               <img
                  src="../src/assets/icons/google.png"
                  className="footer__networks__icon"
               />
            </div>
            <h2 className="footer__copyright">
               Copyright 2023 Rica By
               <img
                  src="../src/assets/icons/hearth.png"
                  className="footer__copyright__hearth"
               />
               Pixelstrap
            </h2>
         </div>
      </div>
   );
};

export default Footer;
