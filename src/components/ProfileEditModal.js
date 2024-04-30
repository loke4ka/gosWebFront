import React, { useState } from 'react';
import styles from './ProfileEditModal.module.css'; 
import axios from 'axios';


function ProfileEditModal({ onClose }) {
  const [aboutMe, setAboutMe] = useState('');
  const [age, setAge] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user_id = localStorage.getItem('user_id');
    const formData = new FormData();
    formData.append('age', age);
    formData.append('about_me', aboutMe);
    if (profilePicture) {
      formData.append('profile_picture', profilePicture);
    }
  
    try {
      await axios.patch(`http://127.0.0.1:8000/api/profile/${user_id}/update/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      onClose(); // Закрыть модальное окно после успешного обновления
      window.location.reload();
    } catch (error) {
      console.error('Error updating profile:', error);
      // Обработка ошибки при обновлении профиля
    }
  };
  

  const handleCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleCloseModal}>
      <div className={styles.modal}>
        <h2>Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>About Me:</label>
            <textarea value={aboutMe} onChange={(e) => setAboutMe(e.target.value)} />
          </div>
          <div>
            <label>Age:</label>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
          <div>
            <label>Profile Picture:</label>
            <input type="file" onChange={(e) => setProfilePicture(e.target.files[0])} />
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}

export default ProfileEditModal;
