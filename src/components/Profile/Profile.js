import React from 'react';
import Stats from './Stats';
import Description from './Description';
import styles from './Profile.module.css';

function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className={styles.profile}>
      <Description {...{ name, tag, location, avatar }} />
      <Stats {...stats} />
    </div>
  );
}

export default Profile;
