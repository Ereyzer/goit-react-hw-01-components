import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from './default.jpg';
// import './Profile.module.css';
import styles from './Profile.module.css';

const Description = ({ name, tag, location, avatar }) => (
  <div className={styles.description}>
    <img src={avatar} alt={name} className={styles.avatar}></img>
    <p className={styles.name}>{name}</p>
    <p className={styles.tag}>@{tag}</p>
    <p className={styles.location}>{location}</p>
  </div>
);

Description.defaultProps = {
  avatar: defaultImage,
  location: 'location is hidden',
};

Description.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
};
export default Description;
