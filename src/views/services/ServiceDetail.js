import React from 'react';
import dentalimage from "./../../assets/dentalimage.jpg"
import scroll from "./../../assets/dentalscroll.png"
import ellipse from "./../../assets/DentalCrownEllipse.svg"
import endEllipse from "./../../assets/lastellipsedental.svg"
import endrectangle from "./../../assets/endrectangle.svg"
import "@fontsource-variable/league-spartan";
import "./ServiceDetail.css"
import OtherServices from "./OtherServices"
const ServiceDetail = () => {
  return (
    <div className='main-background'>
      <div className='image-container'>
        <img src={dentalimage} className='tooth-image' alt='tooth icon' />
        <img src={scroll} className='scroll-icon' alt='Scroll Icon' />
      </div>
      <div>
        <p className='dental-crown'>Dental Crown</p>
        <p className='dental-crown-detail'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus</p>
      </div>
      <div className='ellipse-container'>
        <img src={ellipse} className="ellipse" alt="Ellipse" />
        <h1 className='h1-detail'>Why would I need a dental crown?</h1>
        <h2 className='h2-detail'>You may need a dental crown for several reasons, including:</h2>
        <div className='ul-dental-container'>
        <ul className='ul-dental'>
          <li>Protecting a weak tooth (possibly from decay) from breaking or to keep the weak tooth together if parts of it are cracked. </li>
          <li>Restoring a broken tooth or a severely worn down tooth.</li>
          <li>Covering and supporting a tooth with a large filling and not much tooth remaining.</li>
          <li>Holding a dental bridge in place.</li>
          <li>Covering misshapen or severely discolored teeth.</li>
          <li>Covering a dental implant.</li>
          <li>Covering a tooth that’s been treated with a root canal.</li>
        </ul>
        </div>
        
      </div>
      <div className='white-block'></div>
      <div className='end-ellipse'>
        <img src={endEllipse} className="endEllipseLast" alt='EndEllipse' />
        <h1 className='other-services'>Other Services</h1>
        <img src={endrectangle} className="end-rect" alt='End Rectangle' />
        <div className='services-wrapper'>
          <OtherServices serviceId="DentalCrown" />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;