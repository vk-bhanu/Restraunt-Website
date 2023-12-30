import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import './Footer.css';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { images } from '../../constants';

const Footer = () => (
    <div className="app__footer section__padding">
        <FooterOverlay />
        <Newsletter />

        <div className="app__footer-links">
            <div className="appfooter-links_contact">
                <h1 className="app__footer-headtext">
                    Contact Us
                </h1>
                <p className="p__opensans">
                B-79, Pvr Prashant Vihar Rd, Sector 14, Rohini, New Delhi
                </p>

                <p className="p__opensans">+91-9313-714-825</p>
                <p className="p__opensans">+91-9971-468-908</p>
            </div>

            <div className="app__footer-links_logo">
                <img src={images.gericht} alt="footer_logo" />
                <p className="p__opensans">"The Best way to Find Yourself is to Loose Yourself int the Service of Others."</p>
                <img src={images.spoon} alt="spoon" className="spoon__images" style={{ marginTop: 15}} />
                <div className="app__footer-links_icons">
                    <FiFacebook />
                    <FiTwitter />
                    <FiInstagram />
                </div>
            </div>

            <div className="app__footer-links_work">
                <h1 className="app__footer-headtext">
                    Working Hours
                </h1>
                <p className="p__opensans">
                Monday - Friday
                </p>

                <p className="p__opensans">08:00 AM - 12:00 AM</p>

                <p className="p__opensans">
                Saturday - Sunday
                </p>

                <p className="p__opensans">07:00 AM - 11:00 PM</p>
            </div>
        </div>

        <div className="footer__copyright">
            <p className="p__opensans">
                2023 Gericht. All Rights Reserved. 
            </p>
        </div>
    </div>
);

export default Footer;