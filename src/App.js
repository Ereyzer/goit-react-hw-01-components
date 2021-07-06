import React from 'react';
// import './App.css';
import user from './components/Task-1/user.json';
import Profile from './components/Task-1/profile/Profile';
import Statistics from './components/Task-2/statistics/Statistics';
import statisticsData from './components/Task-2/statistical-data.json';
import friends from './components/Task-3/friends.json';
import FriendList from './components/Task-3/FriendList';
import TransactionHistory from './components/Task-4/TransactionHistory';
import transactions from './components/Task-4/transactions.json';
import Container from './components/loyaut/Container';

function App() {
  return (
    <Container>
      <Profile {...user} />
      <Statistics title="Upload stats" data={statisticsData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}

export default App;
