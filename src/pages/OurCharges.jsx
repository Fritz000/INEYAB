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

      <div className="wrapper">
      <div className="card109">
        <h3>CIVIL LITIGATION</h3>
        <p>Contact us for an estimate. Our current hourly rates are:</p>
        <ul>
          <li><CircleCheckBig size={20} className="icon19" /> Trainee Solicitors, Paralegal &amp; equivalent £130</li>
          <li><CircleCheckBig size={20} className="icon19" /> Solicitors – Less than 4 years experience £200</li>
          <li><CircleCheckBig size={20} className="icon19" /> Solicitors /legal executives, 4 years + qualified experience £300</li>
          <li><CircleCheckBig size={20} className="icon19" /> Solicitors over 8 years qualified experience £400</li>
        </ul>
      </div>

      <div className="card109">
        <h3>CRIMINAL LAW</h3>
        <p>Contact us for an estimate. Our current hourly rates are:</p>
        <ul>
          <li><CircleCheckBig size={20} className="icon19" /> Trainee Solicitors, Paralegal &amp; equivalent £130</li>
          <li><CircleCheckBig size={20} className="icon19" /> Solicitors – Less than 4 years experience £200</li>
          <li><CircleCheckBig size={20} className="icon19" /> Solicitors /legal executives, 4 years + qualified experience £300</li>
          <li><CircleCheckBig size={20} className="icon19" /> Solicitors over 8 years qualified experience £400</li>
        </ul>
      </div>

      <div className="card109">
        <h3>IMMIGRATION, NATIONALITY &amp; ASYLUM</h3>
        <p>Contact us for an estimate</p>
        <ul>
          <li><CircleCheckBig size={20} className="icon19" /> Solicitor: Akeem Ayeni (over 8 years qualified experience)</li>
          <li><CircleCheckBig size={20} className="icon19" /> Naturalisation or Registration as a British Citizen £1000.</li>
          <li><CircleCheckBig size={20} className="icon19" /> Applications under the Immigration rules £1,000.</li>
          <li><CircleCheckBig size={20} className="icon19" /> Applications on behalf of European Economic Area Nationals<br/> and their family members £800 - £2000 depending on complexity<br/> of the case.</li>
          <li><CircleCheckBig size={20} className="icon19" /> Appeal matters (Immigration) £1,500 - £2,500 plus disbursements.</li>
          <li><CircleCheckBig size={20} className="icon19" /> Additional Hearing (due to adjournment) at the First Tier Tribunal £500.00.</li>
          <li><CircleCheckBig size={20} className="icon19" /> Judicial Review work £2,500 plus disbursements. Additional fees <br/> apply on renewal.</li>
          <li><CircleCheckBig size={20} className="icon19" /> Attendance at detention centres to obtain instructions <br/> &amp; representation £500.00 plus disbursements.</li>
          <li><CircleCheckBig size={20} className="icon19" /> Bail Application £1000 plus disbursements.</li>
          
        </ul>
      </div>

      <div className="card109">
        <h3>FAMILY LAW &amp; DIVORCE</h3>
        <p>Contact us for an estimate</p>
        <h3>HOUSING, LANDLORD &amp; TENANT</h3>
        <p>Contact us for an estimate</p>
        <h3>FAMILY LAW &amp; DIVORCE</h3>
        <p>Contact us for an estimate</p>
        <h3>FAMILY LAW &amp; DIVORCE</h3>
        <p>Contact us for an estimate</p>
        <ul>
          <li><CircleCheckBig size={20} className="icon19" /> HOUSING, LANDLORD &amp; TENANT</li>
          <li><CircleCheckBig size={20} className="icon19" /> Contact us for an estimate</li>
          <li><CircleCheckBig size={20} className="icon19" /> Divorce - straightforward £1,000</li>
          <li><CircleCheckBig size={20} className="icon19" /> Optimize Hashtags</li>
          <li><CircleCheckBig size={20} className="icon19" /> Unlimited Users</li>
        </ul>
      </div>
    </div>
    
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
