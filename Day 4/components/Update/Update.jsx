
import './Update.css'; 
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
const notifications = [
  {
    img:img1,
    name: "Rajesh Kumar",
    noti: "Kerala",
    time: "The backwater houseboat experience in Kerala was truly magical! The serene surroundings, delicious local cuisine, and warm hospitality made it a memorable trip for my family. Highly recommended!",
  },
  {
    img:img2,
    name: "Priya Patel",
    noti: "Assam",
    time: "We had a fantastic time on the river safari in Assam. The wildlife sightings were breathtaking, and our guide was very knowledgeable. The only downside was the weather, but overall, it was an unforgettable experience.",
  },
  {
    img:img3,
    name: "Amit Singh",
    noti: "Goa",
    time: "The sunset boating tour in Goa was absolutely delightful! The stunning views of the coastline, coupled with the soothing sea breeze, made for a perfect evening. We even spotted dolphins! Definitely worth it.",
  }
];

const Update = () => {
  return (
    <div className="update-container">
      <div className="notification-list">
        {notifications.map((notification, index) => (
          <div className="notification-item" key={index}>
            <img src={notification.img} alt={notification.name} className="user-image" />
            <div className="notification-content">
              <p className="notification-text">
                <span className="user-name">{notification.name}</span> {notification.noti}
              </p>
              <p className="time">{notification.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Update;
