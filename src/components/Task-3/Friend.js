import React from 'react';
import styles from './FriendList.module.css';

function Friend({ name, isOnline, avatar }) {
  console.log(
    [styles.status, isOnline ? styles.statusOnline : styles.statusOffline].join(
      ' ',
    ),
  );
  return (
    <li className={styles.item}>
      <span
        className={[
          styles.status,
          isOnline ? styles.statusOnline : styles.statusOffline,
        ].join(' ')}
      ></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

export default Friend;
