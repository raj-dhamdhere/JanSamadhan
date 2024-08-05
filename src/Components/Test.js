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
        {/* <header className="page-header">
          <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">JAN SAMADHAN &nbsp; </Navbar.Brand>
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
        </header> */}



        <section id="hero" class="d-flex align-items-center justify-content-center">
          <div class="container" data-aos="fade-up">

            <div class="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
              <div class="col-xl-8 col-lg-8">
                <img src="assets/img/logoj.png" height="100px" width="1000px" class="img-fluid" alt="" />
                <h2></h2>
              </div>
            </div>

            <div class="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
              <div class="col-xl-2 col-md-4">
                <div class="icon-box">
                  <i class="ri-store-line"></i>
                  <h3><a href="">Web Design</a></h3>
                </div>
              </div>
              <div class="col-xl-2 col-md-4">
                <div class="icon-box">
                  <i class="ri-bar-chart-box-line"></i>
                  <h3><a href="">Application Development</a></h3>
                </div>
              </div>
              <div class="col-xl-2 col-md-4">
                <div class="icon-box">
                  <i class="ri-calendar-todo-line"></i>
                  <h3><a href="">Digital Marketing</a></h3>
                </div>
              </div>
              <div class="col-xl-2 col-md-4">
                <div class="icon-box">
                  <i class="ri-paint-brush-line"></i>
                  <h3><a href="">Regression Testing</a></h3>
                </div>
              </div>
              <div class="col-xl-2 col-md-4">
                <div class="icon-box">
                  <i class="ri-database-2-line"></i>
                  <h3><a href="">Cloud Services</a></h3>
                </div>
              </div>
            </div>

          </div>
        </section>


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


        <section id="services" class="services">
          <div class="container col-lg-10 order-1 order-lg-2" data-aos="fade-up">

            <div class="section-title">
              <h2>Services</h2>
              <p>Check our Services</p>
            </div>

            <div class="row">
              <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                <div class="icon-box">
                  <div class="icon"><i class="bx bxl-dribbble"></i></div>
                  <h4><a href="">Web Design</a></h4>
                  <p>Flawless Website Designing and Hosting with SSL Certificates</p>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                <div class="icon-box">
                  <div class="icon"><i class="bx bx-file"></i></div>
                  <h4><a href="">Software Consultancy</a></h4>
                  <p>Top Notch Advisory and Proper Guidance to Users According to Requirements</p>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
                <div class="icon-box">
                  <div class="icon"><i class="bx bx-tachometer"></i></div>
                  <h4><a href="">Standalone Application Development</a></h4>
                  <p>Web Api's Outsourcing and Enterprise Based Application Development</p>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
                <div class="icon-box">
                  <div class="icon"><i class="bx bx-world"></i></div>
                  <h4><a href="">Digital Marketing</a></h4>
                  <p>As a people-centric company, we maintain the highest standards of quality and integrity to ensure the success of our employees, partner agencies and the community in which we operate..</p>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
                <div class="icon-box">
                  <div class="icon"><i class="bx bx-slideshow"></i></div>
                  <h4><a href="">Market Analysis & Advisory</a></h4>
                  <p>Detailed assessment of your business's target market and competitive landscape within a specific industry.</p>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                <div class="icon-box">
                  <div class="icon"><i class="bx bx-arch"></i></div>
                  <h4><a href="">Social Media Marketing</a></h4>
                  <p>One of the most cost-efficient digital marketing methods used to syndicate content and increase your business' visibility</p>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
                <div class="icon-box">
                  <div class="icon"><i class="bx bx-world"></i></div>
                  <h4><a href="">Cloud Services</a></h4>
                  <p>Excellent Storing of data in a smooth manner with Data Analysis</p>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
                <div class="icon-box">
                  <div class="icon"><i class="bx bx-slideshow"></i></div>
                  <h4><a href="">Testing & Maintenance</a></h4>
                  <p>Agile Methodology , Regression Testing with Affordable Maintenance Charges</p>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                <div class="icon-box">
                  <div class="icon"><i class="bx bx-arch"></i></div>
                  <h4><a href="">Constant Support</a></h4>
                  <p>Top Notch Team with support at Requirements ,Deployment,Advisory Etc</p>
                </div>
              </div>

            </div>

          </div>
        </section>

        <section id="features" class="features">
          <div class="container col-lg-10 order-1 order-lg-2" data-aos="fade-up">

            <div class="row">
              <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left">
                <img src="assets/img/features.jpg" class="img-fluid" alt="" />
              </div>
              <div class="col-lg-6" data-aos="fade-right" data-aos-delay="100">
                <div class="icon-box mt-5 mt-lg-0" data-aos="zoom-in" data-aos-delay="150">
                  <i class="bx bx-receipt"></i>
                  <h4>Custom Computer Building</h4>
                  <p>Custom Computer Building Using Latest Components in Affordable Prices.</p>
                </div>
                <div class="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
                  <i class="bx bx-cube-alt"></i>
                  <h4>Product Management</h4>
                  <p>Acclaim Products makes it possible for product people to track product health, prioritize trade-offs, inform stakeholders, and make decisions without having to spend hours cobbling information together.</p>
                </div>
                <div class="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
                  <i class="bx bx-images"></i>
                  <h4>Computer Parts & Graphic Cards</h4>
                  <p>Computer Parts & Graphic Cards in Discounted Pricese with Proper Maintenance and Installation Support</p>
                </div>
                <div class="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
                  <i class="bx bx-shield"></i>
                  <h4>Security</h4>
                  <p>Hosted Products with Ssl certificates and Applications with Powerful Secure Layers</p>
                </div>
              </div>
            </div>

          </div>
        </section>


        <section id="cta" class="cta">
          <div class="container" data-aos="zoom-in">

            <div class="text-center">
              <h3>Call To Action</h3>
              <p> Our Motto is to Provide Top Notch Support To Our Customers.</p>
              <a class="cta-btn" href="#">Call To Action</a>
            </div>

          </div>
        </section>

        <section id="portfolio" class="portfolio">
          <div class="container col-lg-10 order-1 order-lg-2" data-aos="fade-up">

            <div class="section-title">
              <h2>Portfolio</h2>
              <p>Check our Portfolio</p>
            </div>

            <div class="row" data-aos="fade-up" data-aos-delay="100">
              <div class="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li data-filter="*" class="filter-active">All</li>
                  <li data-filter=".filter-app">App</li>
                  <li data-filter=".filter-card">Card</li>
                  <li data-filter=".filter-web">Web</li>
                </ul>
              </div>
            </div>

            <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

              <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <div class="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt="" />
                  <div class="portfolio-info">
                    <h4>App 1</h4>
                    <p>App</p>
                    <div class="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 1"><i class="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                <div class="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-2.png" class="img-fluid" alt="" />
                  <div class="portfolio-info">
                    <h4>Web 3</h4>
                    <p>Web</p>
                    <div class="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-2.png" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <div class="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-3.png" class="img-fluid" alt="" />
                  <div class="portfolio-info">
                    <h4>App 2</h4>
                    <p>App</p>
                    <div class="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-3.png" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 2"><i class="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                <div class="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-4.jpg" class="img-fluid" alt="" />
                  <div class="portfolio-info">
                    <h4>Card 2</h4>
                    <p>Card</p>
                    <div class="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 2"><i class="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                <div class="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-5.jpg" class="img-fluid" alt="" />
                  <div class="portfolio-info">
                    <h4>Web 2</h4>
                    <p>Web</p>
                    <div class="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 2"><i class="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <div class="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-6.png" class="img-fluid" alt="" />
                  <div class="portfolio-info">
                    <h4>App 3</h4>
                    <p>App</p>
                    <div class="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-6.png" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 3"><i class="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                <div class="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-7.png" class="img-fluid" alt="" />
                  <div class="portfolio-info">
                    <h4>Card 1</h4>
                    <p>Card</p>
                    <div class="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-7.png" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 1"><i class="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                <div class="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-8.png" class="img-fluid" alt="" />
                  <div class="portfolio-info">
                    <h4>Card 3</h4>
                    <p>Card</p>
                    <div class="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-8.png" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 3"><i class="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                <div class="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-9.jpg" class="img-fluid" alt="" />
                  <div class="portfolio-info">
                    <h4>Web 3</h4>
                    <p>Web</p>
                    <div class="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>


        <section id="services" class="services">
          <div class="container col-lg-10 order-1 order-lg-2" data-aos="fade-up">

            <div class="section-title">
              <h2>Services</h2>
              <p>Check our Pricing</p>
            </div>

            <div class="row">
              <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                <div class="icon-box">
                  <div class="icon"><i class="bx bxl-dribbble"></i></div>
                  <h4><a href="">Basic</a></h4>
                  <p>Web Designing , Minimum  Plugins , 200 Templates ,Support </p>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                <div class="icon-box">
                  <div class="icon"><i class="bx bx-file"></i></div>
                  <h4><a href="">Gold</a></h4>
                  <p>Web Designing , Plugins , Consultancy Advisory ,Testing , Support , 500 Templates</p>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
                <div class="icon-box">
                  <div class="icon"><i class="bx bx-tachometer"></i></div>
                  <h4><a href="">Platinum</a></h4>
                  <p>Web Designing , Plugins , Consultancy Advisory ,Testing , Support with Top Notch Support </p>
                </div>
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