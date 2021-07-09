import React from 'react';
import Friend from './Friend';
import styles from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={styles['friend-list']}>
      {friends.map(friend => (
        <Friend
          avatar={friend.avatar}
          name={friend.name}
          key={friend.id}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}

export default FriendList;
