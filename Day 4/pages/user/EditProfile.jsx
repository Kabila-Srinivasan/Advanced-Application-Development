/* eslint-disable react/prop-types */
import  { useState } from 'react';
import './EditProfile.css';

const EditProfile = ({ user, onSave }) => {
  const [editedUser, setEditedUser] = useState(user);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleSave = () => {
    onSave(editedUser);
  };

  return (
    <div className="edit-form-container">
      <input
        type="text"
        name="name"
        value={editedUser.name}
        onChange={handleInputChange}
        placeholder="Enter your name"
      />
      <textarea
        name="bio"
        value={editedUser.bio}
        onChange={handleInputChange}
        placeholder="Enter your bio"
      ></textarea>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default EditProfile;
