import React from 'react'
import { Link } from 'react-router-dom'

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
           <Link>IT Managed Services</Link>
           <Link>Servers & Network Infrastructure</Link>
           <Link>Servers </Link>
           <Link>Websites & SEO </Link>
           <Link>Cyber Security Services </Link>
           <Link>Cloud Phone Systems </Link>
           <Link>Cloud Backup Service </Link>
          </div>
          <div className='col'>
          <div className='footer-content-head pb-24'>Our Other Websites</div>
          <Link>freshmango.com</Link>
          <Link>neovault.net</Link>
          <Link>complete-cyber-security.com</Link>
          <Link>phoenixcaribbean.com</Link>
          </div>
          <div className='col'>
          <div className='footer-content-head pb-24'>Ripon Office</div>
          <p>6 Brewery Close, Melmerby Ripon, HG4 5NL </p>
          <p> +44 (0) 1765 606700</p>
          <div className='footer-content-head pb-24'>Leads Office</div>
          <p>Unit 3 , Manor Mill Lane, Leeds, LS11 8LQ </p>
          <p> +44 (0) 113 819 5859</p>
          </div>
          <div className='col'>
          <div className='footer-content-head pb-24'>Email</div>
          <a href='mailto:freshmango@freshmango.co.uk'>freshmango@freshmango.co.uk</a>
          </div>
          <div className='col'>sadasd</div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Footer