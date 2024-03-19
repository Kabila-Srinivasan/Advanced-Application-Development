import { useState } from 'react';
import '../assets/css/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faPaperPlane, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Contact= () => {
  const backgroundStyls = {
    backgroundImage: "url('https://img.freepik.com/premium-vector/hand-painted-watercolor-sky-clouds-abstract-watercolor-background-blue-fluid-painting_101553-1703.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710633600&semt=ais')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    width: '100vw',
    margin:0,
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
              <span>Email:</span> <a href="mailto:houseboatvoyage.com">houseboatvoyage@gmail.com</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faGlobe} />
              <span>Website:</span> <a href="https://www.houseboatvoyage.com/index.html">houseboatvoyage.com</a>
            </li>
          </ul>
          <ul className="social-icons">
            <li><a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a></li>
            <li><a href="https://twitter.com//"><FontAwesomeIcon icon={faTwitter} /></a></li>
            <li><a href="https://www.linkedin.com/company/"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
          </ul>

        </div>
        <div className="form-wrap">
          {formSubmitted ? (
            <div className="thank-you-message">
            <p>Thank you for your response! We will contact you shortly.</p>
            <br/>
              <p>
Thank you for booking a houseboat voyage with us! Your reservation has been successfully received, and we are thrilled to have you on board. A confirmation email will be sent to you shortly, containing all the details of your booking, along with a reference number for your records. Expect this email within the next few minutes.</p>
<br/>
<p>In the meantime, feel free to follow us on our social media channels for updates, behind-the-scenes content, and special offers related to your upcoming voyage. We are constantly sharing exciting news and engaging with our community.</p>
<br/>
<p>While you wait, why not explore our website for additional information about our houseboat voyages? You will find resources, FAQs, and testimonials from satisfied customers, providing you with a glimpse of the unforgettable experience that awaits you.</p>
<br/>
<p>Should you have any urgent inquiries or need assistance with anything related to your booking, please don not hesitate to reach out to us through alternative contact methods provided on our website. Your satisfaction is our priority, and we are here to ensure you have a seamless and memorable voyage.</p>
<br/>
<p>We are eagerly looking forward to welcoming you aboard our houseboat and creating unforgettable memories together.Have a great voyage and sweet memories in this beautiful boat trip.
</p>

             
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
