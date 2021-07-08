import React from 'react';
// import data from '../statistical-data.json';
import StatItems from './StatItems';
import styles from './Statistics.module.css';

function Statistics({ title, data }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles['stat-list']}>
        <StatItems data={data} />
      </ul>
    </section>
  );
}

export default Statistics;
