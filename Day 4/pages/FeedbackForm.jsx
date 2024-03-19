import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/FeedbackForm.css';

function FeedbackForm() {
  const backgroundSty = {
    backgroundImage: "url('https://c1.wallpaperflare.com/preview/600/663/689/houseboat-alleppey-boat-house-boat.jpg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    width: '100vw',
    margin: 0,
  };
  const nav = useNavigate();
  const [uname, setName] = useState('');
  const [uemail, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [comment, setFeedback] = useState('');
  const [feedbackError, setFeedbackError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const sendFeedback = (e) => {
    e.preventDefault();
    const emailRegex = /^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+[.]+[a-z]/;
    setFeedbackError('');

    if (!uname || !uemail ||!mobile|| !comment) {
      setSuccessMessage('');
 
      alert('Please fill in all fields.');
    } else if (!emailRegex.test(uemail)) {
      setSuccessMessage('');
      alert('Invalid email format');
    } 
    else{
      nav('/')
  }
  };

  return (
    <div style={backgroundSty}>
    <div className="feedback-container">
    <div id="feedback-body">
      <div className="feedback-box">
          <div className="feedback-header">
            <center><h1>Provide Feedback</h1></center>
          </div>
          <form>
            <div className="feedback-input">
              <input
                type="text"
                value={uname}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your Name"
              />
            </div>
            <div className="feedback-input">
              <input
                type="email"
                value={uemail}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email"
              />
               </div>
            <div className="feedback-input">
              <input
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
                placeholder="Mobile"
              />
           </div>
            <div className="feedback-input">
              <textarea
                value={comment}
                onChange={(e) => setFeedback(e.target.value)}
                required
                placeholder="Your Feedback"
              />
              {feedbackError && <p className="feedback-error">{feedbackError}</p>}
            </div>
            <div className="feedback-btn-container">
            <input
              className="feedback-btn"
              onClick={sendFeedback}
              type="submit"
              value="Submit Feedback"
            />
            </div>
          </form>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <p className="feedback-link">
              <center>Back to Home</center>
            </p>
          </Link>
          {successMessage && (
            <p className="feedback-success-message">{successMessage}</p>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}

export default FeedbackForm;
