import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from './default.jpg';
import './profile.scss';
const Description = ({ name, tag, location, avatar }) => (
  <div className="description">
    <img src={avatar} alt={name} className="avatar"></img>
    <p className="name">{name}</p>
    <p>@{tag}</p>
    <p>{location}</p>
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
