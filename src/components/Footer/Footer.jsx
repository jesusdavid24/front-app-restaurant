import React from "react";
import { Accordion } from "@mantine/core";
import "./footer.scss";

const Footer = () => {
   const locationUrl = "../src/assets/img/location.png";
   return (
      <div className="footer-container">
         <Accordion
            radius="xs"
            defaultValue="customization"
            transitionDuration={1000}>
            <Accordion.Item value="contact-us">
               <Accordion.Control className="accordion__control">
                  Contact Us
               </Accordion.Control>
               <Accordion.Panel>
                  <div className="contact-container">
                     <div className="logo-container">
                        <div className="logo-background">
                           <img
                              id="logo"
                              src="/src/assets/icons/logo2.png"
                              className="contact__logo"
                           />
                        </div>
                        <h1 id="logo" className="contact__title">
                           RICA
                        </h1>
                     </div>
                     <p className="contact__content">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the...
                     </p>
                     <h2 className="contact__data">
                        <img
                           id="logo"
                           src="/src/assets/icons/position.png"
                           className="contact__icon"
                        />
                        &nbsp; A-32, Albany, New York.
                     </h2>
                     <h2 className="contact__data">
                        <img
                           id="logo"
                           src="/src/assets/icons/telephone.png"
                           className="contact__icon"
                        />
                        &nbsp; 518 - 457 - 5181
                     </h2>
                     <h2 className="contact__data">
                        <img
                           id="logo"
                           src="/src/assets/icons/mail.png"
                           className="contact__icon"
                        />
                        &nbsp; Contact@Gmail.com
                     </h2>
                  </div>
               </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="useful-links">
               <Accordion.Control className="accordion__control">
                  Useful Links
               </Accordion.Control>
               <Accordion.Panel>Home</Accordion.Panel>
               <Accordion.Panel>Our Vehical</Accordion.Panel>
               <Accordion.Panel>Latest Video</Accordion.Panel>
               <Accordion.Panel>Services</Accordion.Panel>
               <Accordion.Panel>Booking Deal</Accordion.Panel>
               <Accordion.Panel>Emergency Call</Accordion.Panel>
               <Accordion.Panel>Mobile App</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="about">
               <Accordion.Control className="accordion__control">
                  About
               </Accordion.Control>
               <Accordion.Panel>About Us</Accordion.Panel>
               <Accordion.Panel>FAQ</Accordion.Panel>
               <Accordion.Panel>Login</Accordion.Panel>
               <Accordion.Panel>Register</Accordion.Panel>
               <Accordion.Panel>Terms & Co.</Accordion.Panel>
               <Accordion.Panel>Privacy</Accordion.Panel>
               <Accordion.Panel>Support</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="our-location">
               <Accordion.Control className="accordion__control">
                  Our Location
               </Accordion.Control>
               <Accordion.Panel>
                  <div
                     className="promo-1"
                     style={{ backgroundImage: `url(${locationUrl})` }}></div>
               </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="new-topics">
               <Accordion.Control className="accordion__control">
                  New Topics
               </Accordion.Control>
               <Accordion.Panel>
                  <div className="topics-container">
                     <img
                        src="../src/assets/img/taxi.jpg"
                        className="topics__image"
                     />
                     <div className="topics__cotent-container">
                        <h1 className="topics__title">Recent News</h1>
                        <p className="topics__content">
                           Lorem Ipsum is simply dummy text of the printing and
                           typesetting industry. Lorem Ipsum has been th...
                        </p>
                     </div>
                  </div>
               </Accordion.Panel>
               <Accordion.Panel>
                  <div className="topics-container">
                     <img
                        src="../src/assets/img/taxi2.jpg"
                        className="topics__image2"
                     />
                     <div className="topics__cotent-container">
                        <h1 className="topics__title">Recent News</h1>
                        <p className="topics__content">
                           Lorem Ipsum is simply dummy text of the printing and
                           typesetting industry. Lorem Ipsum has been th...
                        </p>
                     </div>
                  </div>
               </Accordion.Panel>
            </Accordion.Item>
         </Accordion>
         <div className="social-networks-container">
            <div className="social-networks__buttons">
               <img
                  src="../src/assets/icons/facebook.png"
                  className="social-networks__icon"
               />
               <img
                  src="../src/assets/icons/instagram.png"
                  className="social-networks__icon"
               />
               <img
                  src="../src/assets/icons/twitter.png"
                  className="social-networks__icon"
               />
               <img
                  src="../src/assets/icons/google.png"
                  className="social-networks__icon"
               />
            </div>
            <h2 className="footer__copyright">
               Copyright 2023 Rica By{" "}
               <img
                  src="../src/assets/icons/hearth.png"
                  className="copyright__hearth"
               />{" "}
               Pixelstrap
            </h2>
         </div>
      </div>
   );
};

export default Footer;
