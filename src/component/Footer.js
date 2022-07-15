import React from 'react'
import  logo from "../assets/image/Fresh-Mango-Logo-3.svg";
const Footer = () => {
  return (
    <>
    <div className='footer'>
      <div className='container footer-padding'>
        <div classname='row g-0' style={{display:'flex'}}>
          <div className='col footer-head text-start'>
            Fresh Mango
          </div>
          <div className='col'>
           <div className='footer-content-head pb-24'>Services</div>
           <div className='footer-link'>IT Managed Services</div>
           <div className='footer-link'>Servers & Network <br></br> Infrastructure</div>
           <div className='footer-link footerlink2'>Websites & SEO </div>
           <div className='footer-link'>Cyber Security Services </div>
           <div className='footer-link'> Cloud Phone Systems </div>
           <div className='footer-link'>Cloud Backup Service </div>
          </div>
          <div className='col'>
          <div className='footer-content-head pb-24'>Our Other Websites</div>
          <div className='footer-link footerlink2'>freshmango.com</div>
          <div className='footer-link'>neovault.net</div>
          <div className='footer-link'>complete-cyber-security.com</div>
          <div className='footer-link'>phoenixcaribbean.com</div>
          </div>
          <div className='col'>
          <div className='footer-content-head pb-24'>Ripon Office</div>
          <p className='footer-link'>6 Brewery Close, Melmerby Ripon, HG4 5NL </p>
          <p className='footer-link' > +44 (0) 1765 606700</p>
          <div className='footer-content-head pb-24'>Leads Office</div>
          <p className='footer-link'>Unit 3 , Manor Mill Lane, Leeds, LS11 8LQ </p>
          <p className='footer-link' > +44 (0) 113 819 5859</p>
          </div>
          <div className='col'>
          <div className='footer-content-head pb-24'>Email</div>
          <div className='footer-link' href='mailto:freshmango@freshmango.co.uk'>freshmango@freshmango.co.uk</div>
          <div className='footer-content-head pb-24' style={{marginTop:'97px'}}>Social</div>
          <div className='footer-link'>Facebook</div>
          <div className='footer-link'>Linkedin</div>
          <div className='footer-link'>Instagram</div>
          </div>
        </div>
        <div className='row g-0' style={{marginTop:'66px'}}>
          <div className='col-3'><img src={logo} width="90%"/></div>
          <div className='col-9 d-flex justify-content-between'>
            <div className='align-self-center ms-2 footergrey'>
            © 2022 Fresh Mango Technologies UK.
            </div>
            <div className='align-self-center footergrey'>
              Privacy Policy & Terms & Conditions
            </div>
          </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Footer