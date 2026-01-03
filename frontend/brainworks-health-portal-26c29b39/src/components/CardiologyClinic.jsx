import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';

function CardiologyClinic() {
  const [activeTab, setActiveTab] = useState(0);

  const clinics = [
    {
      name: 'Cardiology Clinic',
      title: 'Cardiology Clinic',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      name: 'Pediatric Care',
      title: 'Pediatric Care',
      description: 'Our pediatric care services provide comprehensive health solutions for children of all ages. We ensure your little ones receive the best medical attention with compassion and expertise.'
    },
    {
      name: 'Dental Services',
      title: 'Dental Services',
      description: 'Our dental services offer complete oral health care including preventive, restorative, and cosmetic dentistry. We use the latest technology to ensure comfortable and effective treatments.'
    },
    {
      name: 'Neurology',
      title: 'Neurology',
      description: 'Our neurology department specializes in diagnosing and treating conditions of the nervous system. Our expert neurologists provide comprehensive care for a wide range of neurological conditions.'
    }
  ];

  return (
    <section className="cardiology">
      <div className="clinic-tabs">
        {clinics.map((clinic, index) => (
          <button
            key={index}
            className={`clinic-tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {clinic.name}
          </button>
        ))}
      </div>
      <div className="clinic-content">
        <div className="clinic-text">
          <h2>{clinics[activeTab].title}</h2>
          <p>{clinics[activeTab].description}</p>
          <button className="learn-more-btn">Learn More</button>
        </div>
        <div className="clinic-icon">
          <FavoriteIcon />
        </div>
      </div>
    </section>
  );
}

export default CardiologyClinic;
