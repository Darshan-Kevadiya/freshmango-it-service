import React from 'react'
import One from "../assets/image/Group 36.png";
import ImageOne from "../assets/image/Rectangle 36.png";
import Two from "../assets/image/Group 38.png";
import ImageTwo from "../assets/image/Rectangle 37.png";
import Three from "../assets/image/Group 51.png";
import ImageThree from "../assets/image/Rectangle 38.png";
import MangoLogo from "../assets/image/Fresh-Mango-Logo-3-white 2.png";
import Ellipse25 from "../assets/image/Ellipse 25.png";
import Ellipse10 from "../assets/image/Ellipse 10.png";
import Ellipse26 from "../assets/image/Ellipse 26.png";
import Ellipse11 from "../assets/image/Ellipse 11.png";
import Ellipse12 from "../assets/image/Ellipse 12.png";
import Ellipse27 from "../assets/image/Ellipse 27.png";
import Tick from "../assets/image/Vector.png";


const Section3 = () => {
  return (
    <>
      <div className='sec3-head'>Value & Benefits of choosing us as your IT Support Company</div>
      <div className='sec3para'>
        Fresh Mango Technologies provides a full range of IT and computer services and products to our clients. Check out the selection below and find out what Fresh Mango Technologies can do for you and your business when we become your IT Support Company today!
      </div>
      <div>
        <div className='container sec-3one'>
          <div><img src={One} /></div>

          <div className='row g-0'>
            <div className='col-6 leftcol sec3card1-border '>
              <div className='imageoverlay'>
                <img src={ImageOne} width="100%" className='imageone' />
                <img src={MangoLogo} className='mangologo' />
                <img src={Ellipse10} className='ellipse10' />
                <img src={Ellipse25} className='ellipse25' />
              </div>
            </div>
            <div className='col-6 rightcol'>
              <div className='sec-cardtitle'>
                IT Support
              </div>
              <div className='sec-cardpara'>
                We asked our customers why they choose us as their IT partner. They told us: We're Local - we speak plain English - they trust us implicitly - we're proactive - we have strength in depth with a large team and continuous training.
              </div>
              <div className='row g-0 features'>
                <div className='col-6'>
                  <div className='row flex-nowrap g-0'>
                    <div className=' bluetick' style={{width:'22px'}}>
                      <img src={Tick} className='tick' />
                    </div>
                    <span className='features-title'>Trusted & Local IT Company</span>
                  </div>
                </div>
                <div className='col-6'>
                <div className='row flex-nowrap g-0'>
                    <div className=' bluetick' style={{width:'22px'}}>
                      <img src={Tick} className='tick' />
                    </div>
                    <span className='features-title'>Proactive IT Management</span>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className='row g-0 features'>
                <div className='col-6'>
                  <div className='row flex-nowrap g-0'>
                    <div className=' bluetick' style={{width:'22px'}}>
                      <img src={Tick} className='tick' />
                    </div>
                    <span className='features-title'>Plain English</span>
                  </div>
                </div>
                <div className='col-6'>
                <div className='row flex-nowrap g-0'>
                    <div className=' bluetick' style={{width:'22px'}}>
                      <img src={Tick} className='tick' />
                    </div>
                    <span className='features-title'>Expertise with Strenght in dept</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* card 2 */}
          <div><img src={Two} /></div>

          <div className='row g-0'>
            <div className='col-6 leftcol sec3card2-border '>
              <div className='sec-cardtitle text-end'>
                Computer Equipment & Software
              </div>
              <div className='sec-cardpara text-end' style={{ marginLeft: '80px' }}>
                Experienced technicians combined with a customer-friendly and can-do attitude to ensure your computer requirements are managed seamlessly.
              </div>

              <div>
              <div className='row g-0 features'>
                <div className='col-6'>
                  <div className='row flex-nowrap justify-content-end  g-0'>
                    <div className='orangetick' style={{width:'22px'}}>
                      <img src={Tick} className='tick' />
                    </div>
                    <span className='features-title' style={{width:'fit-content' ,paddingRight : '26px'}}>Service Networks</span>
                  </div>
                </div>
                <div className='col-6'>
                <div className='row flex-nowrap g-0 justify-content-end'>
                    <div className=' orangetick' style={{width:'22px'}}>
                      <img src={Tick} className='tick' />
                    </div>
                    <span className='features-title' style={{width:'fit-content'}}>Cloud Services</span>
                  </div>
                </div>
              </div>
              {/* */}
              <div className='row g-0 features ms-auto'>
                <div className='col-6'>
                  <div className='row flex-nowrap justify-content-end  g-0'>
                    <div className=' orangetick' style={{width:'22px'}}>
                      <img src={Tick} className='tick' />
                    </div>
                    <span className='features-title' style={{width:'fit-content'}}>Computer Equipment</span>
                  </div>
                </div>
                <div className='col-6'>
                <div className='row flex-nowrap justify-content-end  g-0'>
                    <div className=' orangetick' style={{width:'22px'}}>
                      <img src={Tick} className='tick' />
                    </div>
                    <span className='features-title' style={{width:'fit-content', paddingRight:'40px'}}>Software</span>
                  </div>
                </div>
              </div>
              <div className='row g-0 features ms-auto'>
                <div className='col-6'>
                  <div className='row flex-nowrap justify-content-end  g-0'>
                    <div className=' orangetick' style={{width:'22px'}}>
                      <img src={Tick} className='tick' />
                    </div>
                    <span className='features-title' style={{width:'fit-content' , marginRight:'88px'}}>Microsoft</span>
                  </div>
                </div>
                <div className='col-6'>
                <div className='row flex-nowrap justify-content-end  g-0'>
                    <div className=' orangetick' style={{width:'22px'}}>
                      <img src={Tick} className='tick' />
                    </div>
                    <span className='features-title' style={{width:'fit-content'}}>Cyber Security</span>
                  </div>
                </div>
              </div>
              </div>  
            </div>
            <div className='col-6 rightcol'>
              <div className='imageoverlay'>
                <img src={ImageTwo} width="100%" className='imageone' />
                <img src={MangoLogo} className='mangologo2' />
                <img src={Ellipse26} className='ellipse26' />
                <img src={Ellipse11} className='ellipse11' />
              </div>
            </div>
          </div>
          {/* card 3 */}
          <div><img src={Three} /></div>

          <div className='row g-0'>
            <div className='col-6 leftcol sec3card3-border'>
              <div className='imageoverlay'>
                <img src={ImageThree} width="100%" className='imageone' />
                <img src={MangoLogo} className='mangologo' />
                <img src={Ellipse12} className='ellipse10' />
                <img src={Ellipse27} className='ellipse25' />
              </div>
            </div>
            <div className='col-6 rightcol'>
              <div className='sec-cardtitle'>
                Cyber Security
              </div>
              <div className='sec-cardpara' style={{ maxWidth: '480px' }}>
                Combat the ever-present cyber threat to your business with our suite of cyber services.
              </div>
              <div className='row g-0 features'>
                <div className='col-6'>
                  <div className='row flex-nowrap g-0'>
                    <div className=' greentick' style={{width:'22px'}}>
                      <img src={Tick} className='tick' />
                    </div>
                    <span className='features-title'>Trusted & Local IT Company</span>
                  </div>
                </div>
                <div className='col-6'>
                <div className='row flex-nowrap g-0'>
                    <div className=' greentick' style={{width:'22px'}}>
                      <img src={Tick} className='tick' />
                    </div>
                    <span className='features-title'>Proactive IT Management</span>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className='row g-0 features'>
                <div className='col-6'>
                  <div className='row flex-nowrap g-0'>
                    <div className=' greentick' style={{width:'22px'}}>
                      <img src={Tick} className='tick' />
                    </div>
                    <span className='features-title'>Plain English</span>
                  </div>
                </div>
                <div className='col-6'>
                <div className='row flex-nowrap g-0'>
                    <div className=' greentick' style={{width:'22px'}}>
                      <img src={Tick} className='tick' />
                    </div>
                    <span className='features-title'>Expertise with Strenght in dept</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section3