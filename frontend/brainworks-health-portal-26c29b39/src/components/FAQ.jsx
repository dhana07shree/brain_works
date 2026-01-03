import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Why do we need a doctor, what about surgery?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      question: 'What is the cost for just repairing?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Our pricing is transparent and competitive.'
    },
    {
      question: 'What time will it take to finish my roofimg?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. We ensure timely completion of all treatments.'
    },
    {
      question: 'What about emergency services?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Our emergency services are available 24/7.'
    },
    {
      question: 'Is online consultation available?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Yes, we offer comprehensive online consultation services.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="section-header">
        <h2>We've Got Answers</h2>
        <p className="subtitle">Why To Believe With Venice Medical Healthcare?</p>
      </div>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div 
              className={`faq-question ${openIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <h4>{faq.question}</h4>
              <ExpandMoreIcon />
            </div>
            <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
