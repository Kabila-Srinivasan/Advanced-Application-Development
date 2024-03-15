import { useRef, useState } from "react";
import "../assets/css/Login.css";
function Login() {
  const email = useRef();
  const password = useRef();
  const [loginmsg, setLoginmsg] = useState("Welcome back");
  function handlesubmit() {
    console.log("clicked");
    if (email.current.value === "" || password.current.value === "") {
      setLoginmsg("Please enter email and password");
      document.getElementById("login_msg").style.color = "red";
    } else {
      setLoginmsg("Login successful");
      document.getElementById("login_msg").style.color = "green";
    }
  }
  return (
    <div id="login_container">
      <div id="login_box">
        <h1 id="login_title">Login</h1>
        <p id="login_msg">{loginmsg}</p>
        <form id="login_form">
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
          <button id="login_btn" type="button" onClick={handlesubmit}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
