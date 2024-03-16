import { useEffect, useRef } from 'react';
import '../assets/css/LoginPage.css'; 

const LoginPage = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const usernameRegex = /^[a-zA-Z0-9_]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{8,}$/;

  const handleSignin = () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (!username || !password) {
      alert('Enter all fields');
    } else if (!usernameRegex.test(username)) {
      alert('Invalid username format');
    } else if (password.length < 8) {
      alert('Password should be at least 8 characters long');
    } else if (!passwordRegex.test(password)) {
      alert('Invalid Password format');
    }
  };

  useEffect(() => {
    const ioniconsModuleScript = document.createElement('script');
    ioniconsModuleScript.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js';
    ioniconsModuleScript.type = 'module';
    document.body.appendChild(ioniconsModuleScript);

    const ioniconsNomoduleScript = document.createElement('script');
    ioniconsNomoduleScript.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js';
    ioniconsNomoduleScript.setAttribute('nomodule', '');
    document.body.appendChild(ioniconsNomoduleScript);

    return () => {
      document.body.removeChild(ioniconsModuleScript);
      document.body.removeChild(ioniconsNomoduleScript);
    };
  }, []);

  return (
    <div className='adminlogin'>
      <div className="form-box">
        <div className="form-value">
          <form>
            <h2>Login</h2>
            <div className="inputbox">
              <ion-icon name="mail-outline"></ion-icon>
              <input
                type="text"
                ref={usernameRef}
                required
              />
              <label>Username</label>
            </div>
            <div className="inputbox">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input
                type="password"
                ref={passwordRef}
                required
              />
              <label>Password</label>
            </div>
            <div className="forget">
              <label>
                <input type="checkbox" />Remember Me{' '}
              </label>
              <span className="forget-password-link">
                <a href="#" style={{ color: 'white',textDecoration:'none' }}>Forget Password</a>
              </span>
            </div>
            <button onClick={handleSignin}>Log in</button>
            <div className="register">
              <p>
                Dont have an account? <a href="#">Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
