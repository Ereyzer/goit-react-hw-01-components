import React from 'react';
import PropTypes from 'prop-types';
import StatItem from './StatItem';

function StatItems({ data }) {
  return (
    <>
      {data.map(item => (
        <StatItem
          key={item.id}
          label={item.label}
          percentage={item.percentage}
        />
      ))}
    </>
  );
}

export default StatItems;
