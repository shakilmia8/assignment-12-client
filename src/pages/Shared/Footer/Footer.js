import React from 'react';
import './Footer.css';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer-container'>
            <Container>
                <div className='footer-content'>
                    <div className='footer-gap'>
                        <h3>Quick Links</h3>
                        <li><i className="fas fa-long-arrow-alt-right"></i> Magazine</li>
                        <li><i className="fas fa-long-arrow-alt-right"></i> Subscribe Today</li>
                        <li><i className="fas fa-long-arrow-alt-right"></i> Advertise With Us</li>
                        <Nav.Link className='footer-link' as={Link} to="/about"><i className="fas fa-long-arrow-alt-right"></i> AboutUs</Nav.Link>
                        <Nav.Link className='footer-link' as={Link} to="/contact"><i className="fas fa-long-arrow-alt-right"></i> ContactUs</Nav.Link>
                        <li><i className="fas fa-long-arrow-alt-right"></i> Privacy Policy</li>
                    </div>
                    <div className='footer-gap'>
                        <h3>Others</h3>
                        <li><i className="fas fa-long-arrow-alt-right"></i> Luxury Cars</li>
                        <li><i className="fas fa-long-arrow-alt-right"></i> Diesel Cars</li>
                        <li><i className="fas fa-long-arrow-alt-right"></i> Electric Cars</li>
                        <li><i className="fas fa-long-arrow-alt-right"></i> Sedan Cars</li>
                        <li><i className="fas fa-long-arrow-alt-right"></i> Mileage Cars</li>
                        <li><i className="fas fa-long-arrow-alt-right"></i> Petrol Cars</li>
                    </div>
                    <div className='footer-gap'>
                        <h3>Get in Touch</h3>
                        <h4>Head Office</h4>
                        <p>C-3510, Nowabpur, Chandina, Cumilla</p>
                        <p><i className="fas fa-mobile-alt icon-color"></i> 01682 334 246</p>
                        <p><i className="fas fa-envelope icon-color"></i> shakilmia8@gmail.com</p>
                    </div>
                    <div className='footer-gap'>
                        <h3>Connect with us</h3>
                        <div>
                            <i className="fab fa-facebook-square"> Facebook</i><br />
                            <i className="fab fa-twitter-square"> Twitter</i><br />
                            <i className="fab fa-instagram-square"> Instagram</i><br />
                            <i className="fab fa-linkedin"> Linked in</i><br />
                            <i className="fab fa-youtube-square"> Youtube</i>
                        </div>
                    </div>
                </div>
                <p className='footer-text'> &copy; 2021 Cpi Publishers PVt. Ltd. All Rights Reserved</p>
            </Container>
        </div>
    );
};

export default Footer;