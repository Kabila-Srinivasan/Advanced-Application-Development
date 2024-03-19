import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../assets/css/Booknow.css';

function Booknow() {
  const backgroundSt = {
    backgroundImage: "url('https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2Vib2F0fGVufDB8fDB8fHww')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '115vh',
    width: '100vw',
    margin: 0,
  };

  const nav = useNavigate();
  const [name, setName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [emailId, setEmailId] = useState('');
  const [bookingType, setBookingType] = useState('');
  const [date, setDate] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');

  const senddb = (e) => {
    e.preventDefault();
    if (
      name.length === 0 ||
      mobileNo.length === 0 ||
      emailId.length === 0 ||
      bookingType.length === 0 ||
      date.length === 0 ||
      address.length === 0 ||
      city.length === 0 ||
      state.length === 0 ||
      pincode.length === 0
    ) {
      alert('Please fill in all fields');
    } else {
      // Perform the booking submission or navigation logic here
      nav("/booked");
    }
  }

  return (
    <div style={backgroundSt}>
      <div className="bodyss">
        <div className="product-form">
          <div className="containersss">
            <div className="headersss">
              <h1>Book Your Dreamy Boat House</h1>
            </div>
            <form>
              <div className="input">
                <i className="fa-solid fa-user"></i>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                />
              </div>
              <div className="input">
                <i className="fa-solid fa-mobile"></i>
                <input
                  type="tel"
                  value={mobileNo}
                  onChange={(e) => setMobileNo(e.target.value)}
                  placeholder="Mobile Number"
                />
              </div>
              <div className="input">
                <i className="fa-solid fa-envelope"></i>
                <input
                  type="email"
                  value={emailId}
                  onChange={(e) => setEmailId(e.target.value)}
                  placeholder="Email Address"
                />
              </div>
              <div className="input">
                <i className="fa-solid fa-gear"></i>
                <input
                  type="text"
                  value={bookingType}
                  onChange={(e) => setBookingType(e.target.value)}
                  placeholder="Booking Type"
                />
              </div>
              <div className="input">
                <i className="fa-solid fa-calendar"></i>
                <input
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="Date"
                />
              </div>
              <div className="input">
                <i className="fa-solid fa-map-marker"></i>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Address"
                />
              </div>
              <div className="input">
                <i className="fa-solid fa-city"></i>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="City"
                />
              </div>
              <div className="input">
                <i className="fa-solid fa-location"></i>
                <input
                  type="text"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  placeholder="State"
                />
              </div>
              <div className="input">
                <i className="fa-solid fa-barcode"></i>
                <input
                  type="text"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  placeholder="Pincode"
                />
              </div>
              <input
                className="submit-btn"
                onClick={senddb}
                type="submit"
                value="Book Now"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booknow;
