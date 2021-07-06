import React from 'react';

function Friend({ name, isOnline, avatar }) {
  return (
    <li>
      <span></span>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </li>
  );
}

export default Friend;
