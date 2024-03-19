import '../assets/css/Booking.css';
import {Link} from 'react-router-dom';
import Houseboat1 from "../assets/images/i1.jpg";
import Houseboat2 from "../assets/images/i2.jpg";
import Houseboat3 from "../assets/images/i3.jpg";
import Houseboat4 from "../assets/images/i4.png";
import Houseboat5 from "../assets/images/i5.jpg";
import Houseboat6 from "../assets/images/i6.jpeg";
import Houseboat7 from "../assets/images/i7.avif";
import Houseboat8 from "../assets/images/i13.avif";
import Houseboat9 from "../assets/images/i12.jpg";
import info1 from "../assets/images/i7.avif";
import info2 from "../assets/images/i8.jpeg";
import info3 from "../assets/images/i9.jpeg";

export default function Booking() {
  const data = [
    {
      image: Houseboat1,
      title: "Serenity Retreat",
      subTitle: "Experience tranquility amidst the serene backwaters of Kerala.",
      cost: "Starting from ₹15,000",
      duration: "Approx. 1 night trip",
    },
    {
      image: Houseboat2,
      title: "Riverside Paradise",
      subTitle: "Indulge in a peaceful getaway along the riverside of Goa.",
      cost: "Starting from ₹18,000",
      duration: "Approx. 2 night trip",
    },
    {
      image: Houseboat3,
      title: "Lakeside Haven",
      subTitle: "Find solace in the scenic beauty of Dal Lake, Kashmir.",
      cost: "Starting from ₹20,000",
      duration: "Approx. 1 night trip",
    },
    {
      image: Houseboat4,
      title: "Tranquil Waterside",
      subTitle: "Escape to the tranquil waterside charm of Udaipur's lakes.",
      cost: "Starting from ₹22,000",
      duration: "Approx. 1 night trip",
    },
    {
      image: Houseboat5,
      title: "Ganges Hideaway",
      subTitle: "Explore the cultural richness of Varanasi from a serene Ganges houseboat.",
      cost: "Starting from ₹25,000",
      duration: "Approx. 2 night trip",
    },
    {
      image: Houseboat6,
      title: "Coastal Haven",
      subTitle: "Enjoy coastal breezes and stunning views aboard a houseboat in Andaman.",
      cost: "Starting from ₹30,000",
      duration: "Approx. 2 night trip",
    },
    {
      image: Houseboat7,
      title: "Mountain Lake Retreat",
      subTitle: "Relax in the lap of nature at a mountain lake houseboat.",
      cost: "Starting from ₹28,000",
      duration: "Approx. 1 night trip",
    },
    {
      image: Houseboat8,
      title: "Tropical Oasis",
      subTitle: "Discover a tropical paradise on a secluded houseboat getaway.",
      cost: "Starting from ₹32,000",
      duration: "Approx. 2 night trip",
    },
    {
      image: Houseboat9,
      title: "Desert Mirage",
      subTitle: "Experience the magic of the desert from a luxurious desert houseboat.",
      cost: "Starting from ₹35,000",
      duration: "Approx. 1 night trip",
    },
  ];

  return (
    <div className="houseboat-voyage">
      <div className="title">
        <h2>Dreamy Houseboat Voyages</h2>
      </div>
      <div className="destinations">
        {data.map((destination, index) => {
          return (
            <div className="houseboat" key={index}>
              <img src={destination.image} alt="" />
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className="info">
                <div className="services">
                  <img src={info1} alt="" />
                  <img src={info2} alt="" />
                  <img src={info3} alt="" />
                </div>
                <h4>{destination.cost}</h4>
              </div>
              <div className="duration">
                <span>{destination.duration}</span>
              </div>
              <Link to="/booknow">
                    <button className="book-now">Book Now</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
