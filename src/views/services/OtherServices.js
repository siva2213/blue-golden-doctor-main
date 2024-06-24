import React from 'react';
import braces from "./../../assets/braces.jpg";
import decay from "./../../assets/decay.jpg";
import rootcanal from "./../../assets/rootcanal.jpg";
import whitening from "./../../assets/whitening.jpg";
import "./ServiceDetail.css"
// Sample data for services, this can be fetched or passed as props
const servicesData = {
  DentalCrown: [
    { src: braces, alt: 'Dental Braces', text: 'Dental Braces' },
    { src: decay, alt: 'Decayed Tooth', text: 'Decayed Tooth' },
    { src: rootcanal, alt: 'Root Canal', text: 'Root Canal' },
    { src: whitening, alt: 'Whitening', text: 'Whitening' },
  ],
  // Add more services as needed
};

const ServiceContainer = ({ serviceId }) => {
  const services = servicesData[serviceId] || [];

  return (
    <div className='services-container'>
      {services.map((service, index) => {
       
        return(
        <div className='service-item' key={index}>
          <img src={service.src} alt={service.alt} />
          <p>{service.text}</p>
        </div>
      )})}
    </div>
  );
};


export default ServiceContainer;
