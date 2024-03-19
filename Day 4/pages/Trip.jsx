import "../assets/css/Trip.css";
import TripData from "./TripData";
import Trip1 from "../assets/images/i1.jpg";
import Trip2 from "../assets/images/i2.jpg";
import Trip3 from "../assets/images/i3.jpg";
function Trip() {
  return (
    <div className="trip">
      <center><h1>Boat Houses Trips in India</h1></center>
      <p><center>Explore the serene beauty of Indians waterways with these unforgettable boat house trips.</center></p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Backwaters of Kerala"
          text="Embark on a journey through the tranquil backwaters of Kerala, known for its picturesque landscapes and traditional houseboat cruises."
        />
        <TripData
        image={Trip2}
          imageUrl="https://www.shutterstock.com/image-photo/dwarka-gujrat-india-102709-ferry-600nw-1504692638.jpg"
          heading="Dal Lake, Kashmir"
          text="Experience the enchanting beauty of Dal Lake in Kashmir by staying in a charming houseboat, surrounded by snow-capped mountains and lush greenery."
        />
        <TripData
        image={Trip3}
          imageUrl="https://ke-courses-production.s3.amazonaws.com/asset_files/production/1632/attachments/original/boat-preparation.jpg?1507568091"
          heading="Sundarbans, West Bengal"
          text="Explore the unique ecosystem of the Sundarbans mangrove forest in West Bengal while cruising along its waterways aboard a rustic houseboat."
        />
      </div>
    </div>
  );
}

export default Trip;
