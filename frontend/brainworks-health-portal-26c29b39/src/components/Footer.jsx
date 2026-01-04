import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer({ onServicesClick, scrollToSection, scrollToTop}) {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="logo">
            Brain<span style={{ color: '#2196F3' }}>Works</span>
          </div>
          <p>
            This AI system is designed for investigational and educational support only. 
            It is not a substitute for professional medical advice, diagnosis, or treatment.
            All AI-generated reports should be reviewed by a certified neuroradiologist.
          </p>
          <div className="social-icons">
            <a href="#"><FacebookIcon /></a>
            <a href="#"><TwitterIcon /></a>
            <a href="#"><InstagramIcon /></a>
            <a href="#"><LinkedInIcon /></a>
          </div>
        </div>
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a onClick={onServicesClick}>Services</a></li>
            <li><a onClick={() => scrollToSection('about')}>About</a></li>
            <li><a onClick={() => scrollToSection('footer')}>Contact</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Our Services</h4>
          <ul>
            <li><a href="#">MRI Image Analysis</a></li>
            <li><a href="#">AI Tumor Detection</a></li>
            <li><a href="#">Tumor Classification & Insights</a></li>
            <li><a href="#">Report Generation & Support</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact Info</h4>
          <ul>
            <li><a href="#">+91 123 456 7890</a></li>
            <li><a href="#">info@brainworks.com</a></li>
            <li><a href="#">Team Neural Stack </a></li>
            <li><a href="#">NIT Rourkela, Odisha</a></li>
            <li><a href="#">PIN - 769008</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 BrainWorks Medical Healthcare. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;