
import '../assets/css/Booked.css';

const ServiceBooked = () => {
  
  const captainDetails = {
    name: 'Captain Jack Sparrow',
    contactNumber: '+1234567890',
    email: 'captainjack@example.com',
  };

  const boatHouseDetails = {
    name: 'Dreamy House Boat Voyages',
    contactNumber: '+91-9876543210',
    email: 'info@dreamyhouseboatvoyages.com',
    address: 'Dreamy Island, Backwaters, Kerala',
  };

  return (
    <div className='ser'>
      <div className="service-booked-container">
        <div className="success-message">
          <h2>Booking Confirmed!</h2>
          <p>Your dreamy house boat voyage has been booked successfully.</p>
          <p>We will contact you shortly with further details.</p>
        </div>
        <div className="captain-details">
          <h3>Captain Details:</h3>
          <p>Name: {captainDetails.name}</p>
          <p>Contact Number: {captainDetails.contactNumber}</p>
          <p>Email: {captainDetails.email}</p>
        </div>
        <div className="boat-house-details">
          <h3>Boat House Information:</h3>
          <p>Name: {boatHouseDetails.name}</p>
          <p>Contact Number: {boatHouseDetails.contactNumber}</p>
          <p>Email: {boatHouseDetails.email}</p>
          <p>Address: {boatHouseDetails.address}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceBooked;
