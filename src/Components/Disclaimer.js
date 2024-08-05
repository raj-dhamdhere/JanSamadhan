import React from 'react';
import "../Layouts/test.css";
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



import {
  BrowserRouter as Router,
  Route, Link, Switch
} from "react-router-dom";

class Test extends React.Component {


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


        <section id="details" class="details">
          <div class="container">

            <div class="row content">
              <div class="col-md-4 aos-init aos-animate" data-aos="fade-right">
                <img src="assets/img/details-1.png" class="img-fluid" alt="" />
              </div>
              <div class="col-md-8 pt-4 aos-init aos-animate" data-aos="fade-up">
                <h3>Disclaimer Policy</h3>
                <p class="fst-italic">
                  The information contained in this website is for general information purposes only. The information is provided by Jan Samadhan Technology & Services Pvt.Ltd and while we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
                  In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arise out of, or in connection with, the use of this website.
                  Through this website you are able to link to other websites which are not under the control of Jan Samadhan Technology & Services Pvt.Ltd. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
                  Every effort is made to keep the website up and running smoothly. However, Jan Samadhan Technology & Services Pvt.Ltd takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
                </p>
                <ul>
                  <li><i class="bi bi-check"></i>Navi Mumbai</li>

                </ul>

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

export default Test;