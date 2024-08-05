import React from 'react';
import "../Layouts/test.css";
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Carousel from 'react-bootstrap/Carousel';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Aboutus from "../images/aboutus.jpg";

import Conc from './Conc';


import {
  BrowserRouter as Router,
  Route, Link, Switch
} from "react-router-dom";

class About extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <header className="page-header">
          <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">JAN SAMADHAN</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/contact">Contact us</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>

            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>
        </header>



        <section id="about" class="about">
          <div class="container col-lg-10 order-1 order-lg-2" data-aos="fade-up">

            <div class="row">
              <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                <img src="assets/img/about.jpg" class="img-fluid" alt="" />
              </div>
              <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
                <h3>Jan Samadhan Technology & Services Pvt.Ltd</h3>
                <p class="fst-italic">
                  Jan Samadhan Technology & Services Pvt.Ltd Pvt Ltd is a Indian firm that specializes in software development.The company has offered a wide range of high quality services in the development, delivery, and maintenance of software in India.
                </p>
                <ul>
                  <li><i class="ri-check-double-line"></i> Our goal is to be “flawless” in the eyes of our customers</li>
                  <li><i class="ri-check-double-line"></i> We are technologist but our focus is on our customers and their businesses.</li>
                  <li><i class="ri-check-double-line"></i> We understand that you want your IT problems resolved quickly, effectively and at reasonable cost</li>
                </ul>
                <p>
                  We maintain a far-reaching network by technicians who are highly experienced, proficient and available to work throughout the Middle East. Our core strengths are years of technical and operational experience and our internal processes which leverage our best-of-breed technology.
                </p>
              </div>
            </div>

          </div>
        </section>














        <footer id="footer">
          <div class="footer-top">
            <div class="container col-lg-10 order-1 order-lg-2">
              <div class="row">

                <div class="col-lg-3 col-md-6">
                  <div class="footer-info">
                    <h3>Jan Samadhan Technology & Services Pvt.Ltd<span>.</span></h3>
                    <p>
                      Navi Mumbai<br />

                      <strong>Email:</strong> info.jstspvtltd@gmail.com<br />
                    </p>
                    <div class="social-links mt-3">
                      <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                      <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                      <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                      <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                      <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-2 col-md-6 footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                    <li><i class="bx bx-chevron-right"></i> <a href="/Disclaimer">Disclaimer Policies</a></li>
                    <li><i class="bx bx-chevron-right"></i> <a href="/refund">Security Policies</a></li>
                    <li><i class="bx bx-chevron-right"></i> <a href="/Efund">Refund Policies</a></li>
                    <li><i class="bx bx-chevron-right"></i> <a href="/terms">Terms and conditions</a></li>
                    <li><i class="bx bx-chevron-right"></i> <a href="/privacy">Privacy policy</a></li>
                  </ul>
                </div>

                <div class="col-lg-3 col-md-6 footer-links">
                  <h4>Our Services</h4>
                  <ul>
                    <li><i class="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                    <li><i class="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                    <li><i class="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                    <li><i class="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                    <li><i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                  </ul>
                </div>

                <div class="col-lg-4 col-md-6 footer-newsletter">
                  <h4>Our Newsletter</h4>
                  <p>Navi Mumbai</p>
                  <form action="" method="post">
                    <input type="email" name="email" /><input type="submit" value="Subscribe" />
                  </form>

                </div>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="copyright">
              &copy; Copyright <strong><span>Jan Samadhan Technology & Services Pvt.Ltd </span></strong>. All Rights Reserved
            </div>
            <div class="credits">
              Designed by <a href="">Jan Samadhan Technology & Services Pvt.Ltd </a>
            </div>
          </div>
        </footer>









      </div>
    )
  }
}

export default About;