import React from 'react'
import charges from "../assets/charges.png";
import "../pages/OurCharges.css";
import { CircleCheckBig } from "lucide-react";
import { Link } from "react-router-dom";
import Cover1 from "../assets/cover1.png";
import Frame211 from "../assets/Frame211.png";

const OurCharges = () => {
  return (
    <div className='first'>
    <div
      className="services120-container"
      style={{
        backgroundImage: `url(${charges})`,
      }}
    >
    
      </div>

      <section className="pricing-section">
      <div className="pricing-container">
        {/* Civil Litigation */}
        <div className="pricing-box">
          <h2>Civil Litigation</h2>
          <p>Contact us for an estimate. Our current hourly rates are:</p>
          <ul>
            <li>✅ Trainee Solicitors, Paralegal & equivalent <span className="price">£130</span></li>
            <li>✅ Solicitors – Less than 4 years experience <span className="price">£200</span></li>
            <li>✅ Solicitors / legal executives, 4+ years experience <span className="price">£300</span></li>
            <li>✅ Solicitors over 8 years qualified experience <span className="price">£400</span></li>
          </ul>
          <button className="pricing-btn">Talk to us</button>
        </div>

        {/* Criminal Law */}
        <div className="pricing-box">
          <h2>Criminal Law</h2>
          <p>Contact us for an estimate. Our current hourly rates are:</p>
          <ul>
            <li>✅ Trainee Solicitors, Paralegal & equivalent <span className="price">£130</span></li>
            <li>✅ Solicitors – Less than 4 years experience <span className="price">£200</span></li>
            <li>✅ Solicitors / legal executives, 4+ years experience <span className="price">£300</span></li>
            <li>✅ Solicitors over 8 years qualified experience <span className="price">£400</span></li>
          </ul>
          <button className="pricing-btn">Talk to us</button>
        </div>

        {/* Family Law & Divorce */}
        <div className="pricing-box">
          <h2>Family Law & Divorce</h2>
          <p>Contact us for an estimate. Our current hourly rates are:</p>
          <ul>
            <li>✅ Divorce - straightforward <span className="price">£1,000</span></li>
          </ul>
          <button className="pricing-btn">Talk to us</button>
        </div>
      </div>
    </section>
    
          <div className="hero-section101" style={{
                backgroundImage: `url(${Cover1})`,
              }}>
              <div className="overlay101"></div>
              <div className="hero-content101">
                <h1>
                  Be you ever so high, the law <br /> is above you
                </h1>
                <p>
                  At Ineyab Solicitors, we understand the complexities of the legal landscape.
                  Our mission is <br /> to provide you with expert legal guidance and support tailored to your unique needs.
                  <br />
                  Whether you're facing a personal legal matter or seeking business advice, we're here to <br />
                  help you navigate through every step of the legal process.
                </p>
              </div>
          
              <div className="form-container">
                <h2>Request A Free Consultation</h2>
                <form>
                  <label className='label1' htmlFor="name">
                    First and Last Name <span>*</span>
                  </label>
                  <input type="text" id="name" placeholder="Enter first and last name" required />
          
                  <label htmlFor="email">
                    Email Address <span>*</span>
                  </label>
                  <input type="email" id="email" placeholder="Enter email address" required />
          
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" placeholder="Enter phone number" />
          
                  <label htmlFor="message">
                    Message <span>*</span>
                  </label>
                  <textarea id="message" placeholder="Enter your messages" required></textarea>
          
                  <button className="submit1" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          
            <div className="banner" style={{ backgroundImage: `url(${Frame211})` }}></div>
          
            <footer className="footer">
                <div className="container120">
                  <div className="row">
                    <div className="footer-col">
                      <h4>Quick links</h4>
                      <ul>
                        <li><Link to ="/">Home</Link></li>
                        <li><a><Link to="/OurCharges">Our Charges</Link></a></li>
                        <li><a href="#"><Link to ="/Contact">Contact us</Link></a></li>
                      </ul>
                    </div>
                    <div className="footer-col1">
                      <h4>Services & Practices</h4>
                      <ul>
                        <li><a><Link to ="/Services">Civil litigation</Link></a></li>
                        <li><a><Link to ="/Services">Criminal law</Link></a></li>
                        <li><a><Link to ="/Services">Housing, Landlord  & Tenant Matters</Link></a></li>
                        <li><a><Link to ="/Services">Family Law & Divorce</Link></a></li>
                      </ul>
                    </div>
                    <div className="footer-col2">
                    <h4>&nbsp;</h4>
                      <ul>
                        <li><a><Link to ="/Services">Employment Law</Link></a></li>
                        <li><a><Link to ="/Services">Immigration, Nationality & Asylum Law</Link></a></li>
                        <li><a><Link to ="/Services">Housing, Landlord & Tenant Matters</Link></a></li>
                      </ul>
                    </div>
                    <div className="footer-col3">
                      <h4>Contact</h4>
                        <ul>
                        <li><a href="tel:02086946419">02086946419, 07908523354 (Out of Office)</a></li>
                          <li><a href="info@INEYABsolicitors.com">info@INEYABsolicitors.com</a></li>
                          <li><a href="ineyabsolicitors@yahoo.com">ineyabsolicitors@yahoo.com</a></li>
                        </ul>
                      </div>
                    </div>
                    <hr className='hr'/>
          
                    
                  </div>
                  <p className='copy'>&copy; 2025 Ineyab Solicitors. All rights reserved.</p>
              </footer>
    </div>
  )
}

export default OurCharges
