import  { useState } from 'react';
import '../assets/css/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faPaperPlane, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Contactus = () => {
  const backgroundStyls = {
    backgroundImage: "url('https://img.freepik.com/free-vector/vibrant-pink-watercolor-painting-background_53876-58930.jpg?size=626&ext=jpg&ga=GA1.1.623741277.1686718373&semt=ais')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    width: '100vw',
    margin: 0,
  };
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.phone &&
      formData.message
    ) {
      setFormSubmitted(true);
    } else {
      alert('Please fill in all fields before submitting.');
    }
  };

  return (
    <div style={backgroundStyls}>
    <section id="section-wrapper">
      <div className="box-wrapper">
        <div className="info-wrap">
          <h2 className="info-title">Contact Information</h2>
          <h3 className="info-sub-title">Fill up the form and our Team will get back to you within 24 hours</h3>
          <ul className="info-details">
            <li>
              <FontAwesomeIcon icon={faPhoneAlt} />
              <span>Phone:</span> <a href="tel:+1235235598">+1235 2355 98</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faPaperPlane} />
              <span>Email:</span> <a href="mailto:eliteapp@gmail.com">eliteapp@gmail.com</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faGlobe} />
              <span>Website:</span> <a href="https://www.eliteappliance.com/index.html">eliteappliance.com</a>
            </li>
          </ul>
          <ul className="social-icons">
            <li><a href="https://www.facebook.com/pre.homeservice/"><FontAwesomeIcon icon={faFacebook} /></a></li>
            <li><a href="https://twitter.com/whirlpoolcare?lang=en/"><FontAwesomeIcon icon={faTwitter} /></a></li>
            <li><a href="https://www.linkedin.com/company/home-appliance-service/"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
          </ul>

        </div>
        <div className="form-wrap">
          {formSubmitted ? (
            <div className="thank-you-message">
            <p>Thank you for your response! We will contact you shortly.</p>
              <p>Thank you for reaching out to us! Your message has been received, and we appreciate your interest. A confirmation email will be sent to you shortly with details and a reference number for your records. We aim to respond within 12 hours. In the meantime, feel free to follow us on our social media channels for updates and promotions. For additional resources, FAQs, or customer testimonials, please explore our website. If you have urgent inquiries, don't hesitate to reach out through alternative contact methods. We value your feedback, and you can share your experience through our customer satisfaction survey. As a token of our appreciation, consider checking out our ongoing promotions and exclusive offers. Thank you for choosing us, and we look forward to assisting you further!
              And our team is actively working on addressing it. You can expect a response within 12 hours. In the meantime, explore our social media platforms for the latest updates, exclusive content, and community engagement. We value your connection, and your unique reference number for this submission is 6384842423. Feel free to delve into our website for additional resources, FAQs, and customer success stories. Should you have any urgent matters, please reach out through our alternative contact options. We're eager to hear your thoughts; consider sharing your experience through our feedback survey. As a token of appreciation, enjoy access to special promotions and discounts. Thank you for choosing us, and we're committed to providing you with excellent service!</p>

             
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2 className="form-title">Send us a message</h2>
              <div className="form-fields">
                <div className="form-group">
                  <input
                    type="text"
                    className="fname"
                    placeholder="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="lname"
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="email"
                    placeholder="Mail"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    className="phone"
                    placeholder="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Write your message"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              </div>
              <input type="submit" value="Send Message" className="submit-button" />
            </form>
          )}
        </div>
      </div>
    </section>
    </div>
  );
};

export default Contact;
