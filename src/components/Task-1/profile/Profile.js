import React from 'react';
import Stats from './Stats';
import Description from './Description';
import './profile.scss';
function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className="profile">
      <Description {...{ name, tag, location, avatar }} />
      <Stats {...stats} />
    </div>
  );
}

export default Profile;
