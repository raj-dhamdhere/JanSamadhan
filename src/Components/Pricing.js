import React from 'react';
import "../Layouts/test.css";
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Aboutus from "../images/aboutus.jpg";
import Mobile from "../images/mobile.png";
import Dth from "../images/dth.png";
import Money from "../images/money.png";



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
            <div >
                <header className="page-header">
                    <Navbar bg="light" variant="light">
                        <Navbar.Brand href="#home">Gurukrupa</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About Us</Nav.Link>
                            <Nav.Link href="/contact">Contact us</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/pricing">Pricing</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar>
                </header>

                <section id="why-us" class="why-us">
      <div class="container">

        <div class="row">
          <div class="col-lg-4 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-right">
            <div class="content">
              <h3>Why Choose GuruKrupa</h3>
              <p>
              Gurukrupa Enterprises  is India's No. 1 recharge site that delivers next generation instant online pre-paid recharge solutions to end users.
              </p>
              <div class="text-center">
                <a href="#" class="more-btn">Learn More <i class="bx bx-chevron-right"></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-8 d-flex align-items-stretch">
            <div class="icon-boxes d-flex flex-column justify-content-center">
              <div class="row">
                <div class="col-xl-4 d-flex align-items-stretch aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                  <div class="icon-box mt-4 mt-xl-0">
                    <i class="bx bx-receipt"></i>
                    <h4>Mobile Recharges</h4>
                    <p>Six Operators, One Application , Put the Amount and the numbers and just listen the beep of recharge Completion</p>
                  </div>
                </div>
                <div class="col-xl-4 d-flex align-items-stretch aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                  <div class="icon-box mt-4 mt-xl-0">
                    <i class="bx bx-cube-alt"></i>
                    <h4>Dth Recharges</h4>
                    <p>five Operators, One Application , Put the Amount and the numbers and just listen the beep of recharge Completion</p>
                  </div>
                </div>
                <div class="col-xl-4 d-flex align-items-stretch aos-init aos-animate" data-aos="zoom-in" data-aos-delay="300">
                  <div class="icon-box mt-4 mt-xl-0">
                    <i class="bx bx-images"></i>
                    <h4>Payout</h4>
                    <p>Bank to Bank , Person To Person One Click and the listen the beep of Completion of Transactions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>





          


            <center>
            <Table  className="Tableforpricing" bordered="True" responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Service</th>
                            <th>Operator</th>
                            <th>Pricing</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Prepaid</td>
                            <td>BSNL SPECIAL</td>
                            <td>1.5%</td>
                        </tr>
                        <tr>
                        <td>1</td>
                            <td>Prepaid</td>
                            <td>IDEA</td>
                            <td>1.5%</td>
                        </tr>
                        <tr>
                        <td>1</td>
                            <td>Prepaid</td>
                            <td>BSNL TOPUP</td>
                            <td>1.5%</td>
                        </tr>
                        <tr>
                        <td>1</td>
                            <td>Prepaid</td>
                            <td>JIO</td>
                            <td>1.5%</td>
                        </tr>
                        <tr>
                        <td>1</td>
                            <td>Prepaid</td>
                            <td>VODAFONE</td>
                            <td>1.5%</td>
                        </tr>
                        <tr>
                        <td>1</td>
                            <td>Prepaid</td>
                            <td>DISH TV</td>
                            <td>1.5%</td>
                        </tr>
                        <tr>
                        <td>1</td>
                            <td>Prepaid</td>
                            <td>AIRTEL DIGITAL TV</td>
                            <td>1.5%</td>
                        </tr>
                        <tr>
                        <td>1</td>
                            <td>Prepaid</td>
                            <td>TATASKY</td>
                            <td>1.5%</td>
                        </tr>
                        <tr>
                        <td>1</td>
                            <td>Prepaid</td>
                            <td>AIRTEL</td>
                            <td>1.5%</td>
                        </tr>
                        
                    </tbody>
                </Table>
            </center>
                
               



           
            <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-4 col-md-6">
            <div className="footer-info">
              <h3>Gurukrupa EnterPrises</h3>
              <p className="pb-3"><em>All in One Services Platform and an User Friendly Approach</em></p>
              <p>
                Wadagaon Sheri <br></br>
                Pune 411014<br></br>
                <strong>Phone:</strong> +91 8482848200<br></br>
                <strong>Email:</strong> mahesh.gurukrupa@gmail.com<br></br>
              </p>
              <div className="social-links mt-3">
                <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="/Disclaimer">Disclaimer Policies</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="/refund">Security Policies</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="/Efund">Refund Policies</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="/terms">Terms and conditions</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="/privacy">Privacy policy</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Mobile Recharge</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Dth Payments</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Utility Payments</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Payouts</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">User Friendliness</a></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>We work Fast , make everything easy and support fast</p>
            

          </div>

        </div>
      </div>
    </div>

    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong><span>Gurukrupa EnterPrises</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
       
      </div>
    </div>
  </footer>





            </div>
        )
    }
}

export default About;