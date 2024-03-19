import './DisplayProfile.css';

const DisplayProfile = ({ user }) => {
  return (
    <div className="profile-container">
      <img src={user.profileImage} alt="Profile" className="profile-image" />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
    </div>
  );
}

export default DisplayProfile;
