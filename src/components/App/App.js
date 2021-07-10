import React from 'react';
import user from '../../data/user.json';
import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import statisticsData from '../../data/statistical-data.json';
import friends from '../../data/friends.json';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistori/TransactionHistory';
import transactions from '../../data/transactions.json';
import Container from '../Container/Container';

function App() {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" data={statisticsData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}

export default App;
