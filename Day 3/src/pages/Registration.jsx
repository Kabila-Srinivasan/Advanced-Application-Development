import { useRef, useState } from "react";
import "../assets/css/Registration.css"; 
function Registration() { 
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef(); 
  const [registerMsg, setRegisterMsg] = useState("Welcome!"); 
  function handleRegister() { 
    console.log("clicked");
    if (
      email.current.value === "" ||
      password.current.value === "" ||
      confirmPassword.current.value === "" 
    ) {
      setRegisterMsg("Please fill in all fields."); 
      document.getElementById("register_msg").style.color = "red";
    } else if (password.current.value !== confirmPassword.current.value) { 
      setRegisterMsg("Passwords do not match."); 
      document.getElementById("register_msg").style.color = "red";
    } else {
      setRegisterMsg("Registration successful!"); 
      document.getElementById("register_msg").style.color = "green";
      
    }
  }
  return (
    <div id="register_container"> 
      <div id="register_box"> 
        <h1 id="register_title">Register</h1> 
        <p id="register_msg">{registerMsg}</p> 
        <form id="register_form"> 
          <input
            type="email"
            ref={email}
            placeholder="Enter your email"
            id="email"
          />
          <input
            type="password"
            ref={password}
            placeholder="Enter your password"
            id="password"
          />
          <input
            type="password"
            ref={confirmPassword}
            placeholder="Confirm your password"
            id="confirm_password" 
          />
          <button id="register_btn" type="button" onClick={handleRegister}> 
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
