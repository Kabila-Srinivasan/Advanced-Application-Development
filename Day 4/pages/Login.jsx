import  { useState } from 'react';
import '../assets/css/Login.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const[username,setUserName]=useState('');
  const[emailid,setEmail]=useState('');
  const[mobileno, setMobileNum] = useState('');
  const[password, setPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const usernameRegex=/^[a-zA-Z0-9_]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{8,}$/;
  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
  };
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleMobileNumberChange = (e) => {
    setMobileNum(e.target.value);
  };
const handleSignin=async()=>

{
  try
  {
    if(!username||!password)
  {
    alert('Enter all fields');
  }

   else if(!usernameRegex.test(username)){
        alert("Invalid username format");
        return;
      }
    else if (password.length < 8) {
      alert('Password should be at least 8 characters long');
      return;
    }
    else if(!passwordRegex.test(password))
    {
      alert("Invalid Password format");
      return;
    }
   
  }
  catch(error)
  {
    alert("Incorrect Username and Password")
  }
}
  const handleSignUp = async (e) => {
    e.preventDefault();
    if(!username||!emailid||!mobileno||!password)
  {
    alert('Enter all fields');
  }
    else if(!usernameRegex.test(username)){
        alert("Invalid username format");
        return;
      }
    else if (password.length < 8) {
      alert('Password should be at least 8 characters long');
      return;
    }
    else if(!passwordRegex.test(password))
    {
      alert("Invalid Password format");
      return;
    }
    
    else if (!/^\d{10}$/g.test(mobileno)) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }
    
    else {
      setRegistrationSuccess(true);
      setUserName('');
      setEmail('');
      setMobileNum('');
      setPassword('');
    }
   
  };
  return (
    <div className='bodyy'>
    <div className={`containerss ${isSignUp ? 'active' : ''}`}>
      <div className="form-container sign-up">
        <form>
          <h1>Register</h1>
          <div className="socials-icons">
          <a href="https://www.facebook.com/signup"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="https://twitter.com/signup"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://accounts.google.com/signup"><FontAwesomeIcon icon={faGoogle} /></a>
          <a href="https://www.linkedin.com/signup"><FontAwesomeIcon icon={faLinkedinIn} /></a>

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
              value={emailid}
              onChange={handleEmailChange}
            />
            <input
              type='number'
              placeholder='Mobile Number'
              value={mobileno}
              onChange={handleMobileNumberChange}
            />
          <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={handlePasswordChange}
            />
          <button type='button' onClick={handleSignUp}>Sign Up</button>
          {registrationSuccess && (
            <p className="success-message">
              Thank you for registering! Please login to view all our features.
            </p>
          )}
        </form>
      </div>
      <div className="form-container sign-in">
        <form>
          <h1>Sign In</h1>
          <div className="socials-icons">
              <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#"><FontAwesomeIcon icon={faGoogle} /></a>
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
          <button type='button' onClick={handleSignin}>Sign In</button>
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
