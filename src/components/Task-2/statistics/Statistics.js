import React from 'react';
// import data from '../statistical-data.json';
import StatItems from './StatItems';

function Statistics({ title, data }) {
  return (
    <section>
      {title && <h2>{title}</h2>}

      <ul>
        <StatItems data={data} />
      </ul>
    </section>
  );
}

export default Statistics;
