import React from 'react';
import styles from './Statistics.module.css';

const renderColor = () => Math.round(Math.random() * (250 - 0) + 0);
const renderRGBColor = callback =>
  `rgb(${callback()}, ${callback()}, ${callback()})`;

function StatItem({ label, percentage }) {
  return (
    <li
      className={styles.item}
      style={{ backgroundColor: renderRGBColor(renderColor) }}
    >
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage + '%'}</span>
    </li>
  );
}

export default StatItem;