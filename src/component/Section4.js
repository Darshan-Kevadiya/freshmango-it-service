import React from 'react'
import img1 from "../assets/image/Rectangle 40.png";
import img2 from "../assets/image/Rectangle 41.png";
import img3 from "../assets/image/Rectangle 42.png";
const Section4 = () => {

  const images= [
    {image: img1 , date:'June 29, 2022' , title:'A Day in the Life of an IT Support Technician'} , 
  {image:img2 , date:'June 04, 2022' , title:'Computer tax relief'} , 
  {image:img3 , date:'May 31, 2022' , title:'Add extra security to your systems with TFA'}
]
  return (
    <>
  <div className='container'>
<div className='sec4-head'>Old Latest Articles</div>
<div className='row'>
  {
  images.map(x =>{
    return <div className='col-4'>
    <img src={x.image} width='100%'></img>
    <hr></hr>
    <div className='blog-date'>{x.date}</div>
    <div className='blog-title'>{x.title}</div>
    </div> 
  })

}
</div>
  </div>
    </>
  )
}

export default Section4