import React from 'react';
import './UserProfile.css';

const UserProfile = ({ image, name, about }) => (
  <section className="UserProfile">
    <img src={image} alt="" width="320" className="UserProfile-image" />
    <div>
      <h2>{name}</h2>

      <p>{about}</p>
    </div>
  </section>
);

export default UserProfile;
