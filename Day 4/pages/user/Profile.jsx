import  { useState } from 'react';
import DisplayProfile from './DisplayProfile';
import EditProfile from './EditProfile';
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisi at massa rutrum condimentum vel at libero.',
    profileImage: 'https://via.placeholder.com/150',
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleEditToggle = () => {
    setIsEditing(prevState => !prevState);
  }

  const handleSaveProfile = (editedUser) => {
    setUser(editedUser);
    setIsEditing(false);
  }

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1>User Profile</h1>
        <button onClick={handleEditToggle}>
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </button>
      </div>
      {isEditing ? (
        <EditProfile user={user} onSave={handleSaveProfile} />
      ) : (
        <DisplayProfile user={user} />
      )}
    </div>
  );
}

export default Profile;
