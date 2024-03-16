import { useState } from 'react';
import '../assets/css/Login.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const toggleForm = () => {
    setIsSignUp(prev => !prev);
  };

  const handleUserNameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!username || !email || !mobileNumber || !password) {
      alert('Enter all fields');
      return;
    }
    // Add additional validation as needed

    // Here you can place your sign up logic
    console.log('Sign up logic');
    // For demonstration, we'll just set registrationSuccess to true
    setRegistrationSuccess(true);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert('Enter all fields');
      return;
    }
    // Add additional validation as needed

    // Here you can place your sign in logic
    console.log('Sign in logic');
  };

  return (
    <div className='bodyy'>
      <div className={`containerss ${isSignUp ? 'active' : ''}`}>
        <div className="form-container sign-up">
          <form onSubmit={handleSignUp}>
            <h1>Register</h1>
            <div className="socials-icons">
              <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
            <span>or use your email for registration</span>
            <input
              type='text'
              placeholder='Username'
              value={username}
              onChange={handleUserNameChange}
            />
            <input
              type='email'
              placeholder='Email'
              value={email}
              onChange={handleEmailChange}
            />
            <input
              type='tel'
              placeholder='Mobile Number'
              value={mobileNumber}
              onChange={handleMobileNumberChange}
            />
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={handlePasswordChange}
            />
            <button type='submit'>Sign Up</button>
            {registrationSuccess && (
              <p className="success-message">
                Thank you for registering! Please login to view all our features.
              </p>
            )}
          </form>
        </div>
        <div className="form-container sign-in">
          <form onSubmit={handleSignIn}>
            <h1>Sign In</h1>
            <div className="socials-icons">
              <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
            <span>or use your email password</span>
            <input
              type='text'
              placeholder='Username'
              value={username}
              onChange={handleUserNameChange}
            />
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={handlePasswordChange}
            />
            <a href="#">Forget Your Password?</a>
            <button type='submit'>Sign In</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className={`toggle-panel ${isSignUp ? 'toggle-left' : 'toggle-right'}`}>
              {isSignUp ? (
                <>
                  <h1>Welcome Back!</h1>
                  <p>Enter your personal details to use all site features</p>
                  <button className="hidden" onClick={toggleForm}>
                    Sign In
                  </button>
                </>
              ) : (
                <>
                  <h1>Hello, Friend!</h1>
                  <p>Register with your personal details to use all site features</p>
                  <button className="hidden" onClick={toggleForm}>
                    Sign Up
                  </button>
                  {registrationSuccess && (
                    <p className="success-message">
                      Thank you for registering! Please login to view all our features.
                    </p>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
