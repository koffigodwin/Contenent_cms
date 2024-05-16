import React from 'react'
import Image from '../assets/coder.svg'
import '../index.css'
const Hero = () => {
  return (
    <div className='Hero-container'>
        <h1>Contentful CMS</h1>
       <div className="sub-hero">
       <div className="lorem">
        <p>A headless CMS is a back-end only content management system that provides content creators with an intuitive interface 
            for creating and managing content, while leaving the front-end presentation layer to be handled by a separate system or platform. This approach allows for greater flexibility and scalability, as the content can be easily distributed
             to multiple channels and devices, without being limited by the constraints of a particular front-end system.</p>
        </div>
        <div className="image-hero">
        <img src={Image} alt="CODER" className='coder-image'/>
        </div>
       </div>
    </div>
  )
}

export default Hero