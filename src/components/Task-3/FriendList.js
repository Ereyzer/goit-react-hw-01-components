import React from 'react';
import Friend from './Friend';
function FriendList({ friends }) {
  return (
    <ul>
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
