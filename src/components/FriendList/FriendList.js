import React from 'react';
import Friend from './Friend';
import styles from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={styles['friend-list']}>
      {friends.map(({ avatar, name, id, isOnline }) => (
        <Friend avatar={avatar} name={name} key={id} isOnline={isOnline} />
      ))}
    </ul>
  );
}

export default FriendList;
