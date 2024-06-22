import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
  const { serviceId } = useParams();

  return (
    <div>
      <h1>Service Detail</h1>
      <p>Details for service: {serviceId}</p>
    </div>
  );
};

export default ServiceDetail;
