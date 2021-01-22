import React from 'react';
import PropTypes from 'prop-types';
import './Project.scss';
import data from '../../data/ShowcaseData';
import jobData from '../../data/JobData';

const Project = ({ title, imgSrc, urlKey }) => (
  <div className="Project">
    <div className="secondary-title">{title}</div>
    <div className="preview">
      <a href={`/showcase/${urlKey}`}>
        <div className="screen" />
        <img src={imgSrc} alt={title} />
      </a>
    </div>
  </div>
);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.node.isRequired,
  urlKey: PropTypes.oneOf(Object.keys({ ...data, ...jobData })).isRequired,
};

Project.defaultProps = {};

export default Project;
