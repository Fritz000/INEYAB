import React from 'react'
import charges from "../assets/charges.png";
import "../pages/OurCharges.css";
import { CircleCheckBig } from "lucide-react";
import { Link } from "react-router-dom";
import Cover1 from "../assets/cover1.png";
import Frame211 from "../assets/Frame211.png";
import Frame1000003979 from "../assets/Frame1000003979.png";

const OurCharges = () => {
  return (
    <div className='first'>
    <div
      className="charges"
      style={{
        backgroundImage: `url(${charges})`,
      }}
    >
      <div className="charges-content">
        <h1>AFFORDABLE LEGAL SOLUTIONS, TAILORED FOR YOU</h1>
        <p>
          Legal matters can be complex, but understanding the costs shouldn't be. We offer clean explanations of our charges, so you can make informed decisions without surprises.
        </p>
      </div>
    </div>

    <section className="legal-fees-section">
      <div className="legal-fees-container">
        {/* Left - Image */}
        <div className="legal-fees-image">
          <img src={Frame1000003979} alt="Law consultation" />
        </div>

        {/* Right - Content */}
        <div className="legal-fees-content">
          <h2>Legal Fees that work for You</h2>
          <div className="legal-fees-buttons">
            <button className="primary-btn">Talk to us</button>
            <button className="secondary-btn">View Services</button>
          </div>
        </div>
        </div>
          <p className='full-width-text'>
            We have published our price and service information in accordance
            with the Solicitors Regulation Authority guidance on transparency in
            respect of charges. Some of our services are offered on an hourly
            rate basis due to the fact that some of our client’s matters are
            complex. Our charges do not attract VAT and will be calculated
            mainly by reference to the time actually spent by the solicitors and
            other staff in respect of any work which they do on our clients’
            behalf...
          </p>
    </section>

      <section className="pricing-section">
      <div className="pricing-container">
        {/* Civil Litigation */}
        <div className="pricing-box">
          <h2>Civil Litigation</h2>
          <p>Contact us for an estimate. Our current hourly rates are:</p>
          <ul>
            <li><CircleCheckBig className='iconos'/> Trainee Solicitors, Paralegal & equivalent </li>
            <li><CircleCheckBig className='iconos'/> Solicitors – Less than 4 years experience</li>
            <li><CircleCheckBig className='iconos'/> Solicitors / legal executives, 4+ years experience</li>
            <li><CircleCheckBig className='iconos'/> Solicitors over 8 years qualified experience </li>
          </ul>
          <button className="pricing-btn">Talk to us</button>
        </div>

        {/* Civil Litigation */}
        <div className="pricing-box">
          <h2>Criminal Law</h2>
          <p>Contact us for an estimate. Our current hourly rates are:</p>
          <ul>
            <li><CircleCheckBig className='iconos'/> Trainee Solicitors, Paralegal & equivalent</li>
            <li><CircleCheckBig className='iconos'/> Solicitors – Less than 4 years experience</li>
            <li><CircleCheckBig className='iconos'/> Solicitors / legal executives, 4 years + qualified experience</li>
            <li><CircleCheckBig className='iconos'/> Solicitors over 8 years qualified experience </li>
          </ul>
          <button className="pricing-btn">Talk to us</button>
        </div>
        {/* Civil Litigation */}
        <div className="pricing-box">
          <h2>Family Law & Divorce</h2>
          <p>Contact us for an estimate. Our current hourly rates are:</p>
          <ul>
          <li><CircleCheckBig className='iconos'/> Divorce Straightforward  </li>
          </ul>
          <button className="pricing-btn">Talk to us</button>
        </div>

        <div className="pricing-box">
          <h2>Housing, Landlord & Tenant</h2>
          <p>Contact us for an estimate. Our current hourly rates are:</p>
          <ul>
          <li><CircleCheckBig className='iconos'/> Possession Action undefended </li>
          </ul>
          <button className="pricing-btn">Talk to us</button>
        </div>

        <div className="pricing-box">
          <h2>Business & Commercial</h2>
          <p>Contact us for an estimate. Our current hourly rates are:</p>
          <ul>
          <li><CircleCheckBig className='iconos'/> Lease assignment, surrender, extension from  </li>
          </ul>
          <button className="pricing-btn">Talk to us</button>
        </div>
        {/* Civil Litigation */}
        
        {/* Civil Litigation */}
        <div className="pricing-box">
          <h2>Miscellaneous</h2>
          <p>Contact us for an estimate. Our current hourly rates are:</p>
          <ul>
          <li><CircleCheckBig className='iconos'/> Consultation Fee  </li>
          <li><CircleCheckBig className='iconos'/> Solicitors Letters from </li>
          <li><CircleCheckBig className='iconos'/> Drafting Power of Attorney</li>
          </ul>
          <button className="pricing-btn">Talk to us</button>
        </div>

        <div className="pricing-box1">
          <h2>Immigration, Nationality & Asylum</h2>
          <p>Contact us for an estimate. Our current hourly rates are:</p>
          <ul>
          <li><CircleCheckBig className='iconos'/> Naturalisation or Registration as a British Citizen  </li>
          <li><CircleCheckBig className='iconos'/> Applications under the Immigration rules  </li>
          <li><CircleCheckBig className='iconos'/> Applications on behalf of European Economic Area Nationals and their family members depending on complexity of the case.  </li>
          <li><CircleCheckBig className='iconos'/> Appeal matters (Immigration) £1,500 - £2,500 plus disbursements. </li>
          <li><CircleCheckBig className='iconos'/> Additional Hearing (due to adjournment) at the First Tier Tribunal £500.00.  </li>
          <li><CircleCheckBig className='iconos'/> Judicial Review work £2,500 plus disbursements. Additional fees apply on renewal.  </li>
          <li><CircleCheckBig className='iconos'/> Attendance at detention centres to obtain instructions &amp; representation £500.00 plus disbursements.  </li>
          <li><CircleCheckBig className='iconos'/> Bail Application £1000 plus disbursements.  </li>
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
