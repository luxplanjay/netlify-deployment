import React from 'react';
import UserProfile from '../components/UserProfile';
import user from '../user.json';

const Profile = () => (
  <UserProfile image={user.image} name={user.name} about={user.about} />
);

export default Profile;
