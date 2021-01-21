import React from 'react';
import PropTypes from 'prop-types';
import './Project.scss';

const Project = ({title, imgSrc, urlKey}) => (
  <div className="Project">
    <div className="secondary-title">{title}</div>
    <div className="preview">
      <a href={`/showcase/${urlKey}`}>
        <div className="screen"></div>
        <img src={imgSrc} alt={title} />
      </a>
    </div>
  </div>
);

Project.propTypes = {};

Project.defaultProps = {};

export default Project;
