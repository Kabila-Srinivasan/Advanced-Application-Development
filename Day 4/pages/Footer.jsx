import '../assets/css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  
  return (
    <footer className="footerer">
      <div className="containerer">
        <div className="rows">
          <div className="footerer-coll">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About us</a></li>
              <li><a href="/contact">Contact us</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms and Conditions</a></li>
              <br/>
            </ul>
          </div>
          <div className="footerer-coll">
            <h4>Get Help</h4>
            <ul>
            
  <li><a href="/faq" style={{ color: 'solid black' }}>FAQ</a></li>
  <li><a href="/testimonial" style={{ color: 'solid black' }}>Testimonials</a></li>
  <li><a href="/book" style={{ color: 'solid black' }}>Our HouseBoat Services</a></li>
  <li><a href="/feedback" style={{ color: 'solid black' }}>Feedback</a></li>


              <br/>
            </ul>
          </div>
          <div className="footerer-coll">
          
            <h4>Contact Us:</h4>
            <p>Email 1:<a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new" target="_blank" rel="noopener noreferrer">kabilasrini@gmail.com</a></p>
            <p>Email 2:<a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new" target="_blank" rel="noopener noreferrer">boatvoyage@gmail.com</a></p>
            
            <p>Mobile Number: 6384842423</p>
            
          </div>
          <div className="footerer-coll">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="https://www.linkedin.com/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </div>
          </div>
      </div>
      <hr style={{ borderTop: '3px solid white' }} />
       <div className="sb_footerer-below">
       <div className="sb_footerer-copyright">
       
      </div>
       </div><br/><br/><br/> <p>
       <center><b><h2 style={{ color: 'black' }}>
  {new Date().getFullYear()} Dreamy House Boat Voyages Kabila Srinivasan.All Rights Reserved.
</h2></b></center></p>
        
    </footer>
  );
};

export default Footer;
