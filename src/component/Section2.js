import React from 'react'
import Group7 from "../assets/image/Group 7.png";
import Group8 from "../assets/image/Group 8.png";
import Group9 from "../assets/image/Group 9.png";
import Group10 from "../assets/image/Group 10.png";
import Group11 from "../assets/image/Group 11.png";
import Group12 from "../assets/image/Group 12.png";

const Section2 = () => {
  return (
    <div className='section2 row g-0'>
      <div className='section2-text col-6 mx-auto'>
        Why Choose Fresh Mango as your IT Support Company?
      </div>
      <div className='container-fluid'>
        <div className='row g-0 sec2card'>
          <div className='col-3 sec2col-3' style={{ padding: "35px" }}>
            <div className='card1-heading'>Servicing Yorkshire and beyond</div>
            <div className='card-1-para'>As a Yorkshire-based IT Support Company, we support a wide range of businesses in and around Yorkshire. Our team of IT technicians have strength in depth and is VERY customer friendly!
            </div>
            <div className='card-1-footer'>We also have a sister company in the <a>CARIBBEAN!</a></div>
          </div>

          <div className='col-9 '>
            <div className='sec-2-right-card'>
              <div class="row">
                <div class="col-4 sec-2-cardcol card-bottom-margin">
                  <div class="border bg-light h-100 
                  border-radius-10">
                    <div className='row  padding-card card7'>
                      <img src={Group7} className="card-img" />
                    </div>
                    <div className="card7-body">
                      <div className="title7">Trusted IT Support</div>
                      <div className='card-para'>Our customers told us the most important thing they look for in an IT company is Trust.</div>
                    </div>
                  </div>
                </div>
                <div class="col-4 sec-2-cardcol card-bottom-margin">
                  <div class="border bg-light h-100 border-radius-10">
                    <div className='row  padding-card card8'>
                      <img src={Group8} className="card-img" />
                    </div>
                    <div className="card8-body">
                      <div className="title8">Cost Effective</div>
                      <div className='card-para'>We have created strategic partnerships, so we can offer our customers the best value for their money possible.</div>
                    </div>
                  </div>
                </div>
                <div class="col-4 sec-2-cardcol card-bottom-margin">
                  <div class="border bg-light h-100 border-radius-10">
                    <div className='row  padding-card card9'>
                      <img src={Group9} className="card-img" />
                    </div>
                    <div className="card9-body">
                      <div className="title9">Local IT Support</div>
                      <div className='card-para'>As a Yorkshire-based company, we can and do rapidly deploy IT thechnicians to client premises every day.</div>
                    </div>
                  </div>
                </div>
              {/* </div> */}
              <div class="col-4 sec-2-cardcol">
                <div class="border bg-light h-100 border-radius-10">
                  <div className='row  padding-card card10'>
                    <img src={Group10} className="card-img" />
                  </div>
                  <div className="card10-body">
                    <div className="title10">Fast Support</div>
                    <div className='card-para'>With us you have peace of mind knowing you are fully covered both remotely and on site against any IT headaches.</div>
                  </div>
                </div>
              </div>
            {/* </div> */}
            <div class="col-4 sec-2-cardcol">
              <div class="border bg-light h-100 border-radius-10">
                <div className='row  padding-card card11'>
                  <img src={Group11} className="card-img" />
                </div>
                <div>
                  <div className="card11-body">
                    <div className="title11">Plain English</div>
                    <div className='card-para'>We won’t bamboozle or confuse you with ‘IT speak’. We always explain our work in plain-English.</div>
                  </div>
                </div>
              </div>
            </div>
          {/* </div> */}
          <div class="col-4 sec-2-cardcol">
            <div class="border bg-light h-100 border-radius-10">
              <div className='row  padding-card card12'>
                <img src={Group12} className="card-img" />
              </div>
              <div className="card12-body">
                <div className="title12">Security First</div>
                <div className='card-para'>We combine dedicated cyber experts with purpose-designed systems to solve your cyber security problems.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div >
     </div >
   </div >
  )
}

export default Section2