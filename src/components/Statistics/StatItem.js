import React from 'react';
import styles from './Statistics.module.css';
import { renderColor, renderRGBColor } from '../../helpers/renderColor';

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
