import React from 'react';
import StatItem from './StatItem';

function StatItems({ data }) {
  return (
    <>
      {data.map(({ id, label, percentage }) => (
        <StatItem key={id} label={label} percentage={percentage} />
      ))}
    </>
  );
}

export default StatItems;
