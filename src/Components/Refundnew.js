import React from 'react';
import "../Layouts/test.css";
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';


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
                <h3>Refund Policy </h3>
                <p class="fst-italic">
                  We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.
                </p>
                <ul>
                  <li><i class="bi bi-check"></i>  Merchant business' return and cancellation policy must be made available to customers on website and they have to agree to its terms during the order process. Customers have to click on an "Accept" or "Agree" for return and cancellation button before submitting their payment information. Then, once the order has been submitted, policy can be sent to customers with the order confirmation email.</li>
                  <li><i class="bi bi-check"></i>  When you buy our products/services, your purchase is covered by our 30-day money-back guarantee. If you are, for any reason, not entirely happy with your purchase, we will cheerfully issue a full refund.
                    We develop and sell software that we use ourselves every day and have thousands of satisfied customers worldwide, and our support is second to none. That is why we can afford to back our products with this special guarantee. To request a refund, simply contact us with your purchase details within ninety (90) days of your purchase. Please include your order number (sent to you via email after ordering) and optionally tell us why you’re requesting a refund – we take customer feedback very seriously and use it to constantly improve our products and quality of service.
                    Refunds are not being provided for services delivered in full such as installation service and provided knowledge base hosting service. Refunds are being processed within 21 days period.</li>

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