import React from 'react';
import PropTypes from 'prop-types';

const renderColor = () => Math.round(Math.random() * (250 - 0) + 0);
const renderRGBColor = callback =>
  `rgb(${callback()}, ${callback()}, ${callback()})`;

function StatItem({ label, percentage }) {
  return (
    <li style={{ backgroundColor: renderRGBColor(renderColor) }}>
      <span>{label}</span>
      <span>{percentage + '%'}</span>
    </li>
  );
}

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatItem;
