import React from 'react';
import PropTypes from 'prop-types';
import './Job.scss';
import jobData from '../../data/JobData';
import linkIcon from '../../images/link.svg';

const Job = ({ urlKey }) => (
  <div className="Job">
    <div className="top">
      <div className="portrait">
        <img src={jobData[urlKey].images[0]} alt={urlKey} />
      </div>
      <div className="top-panel">
        <div className="company-description-wrapper">
          <p>{jobData[urlKey].companyDescription}</p>
        </div>
        <div className="link-wrapper">
          <a href={jobData[urlKey].url} target="_blank" rel="noreferrer">
            {jobData[urlKey].urlTitle}
            <img className="link" src={linkIcon} alt="link" />
          </a>
        </div>
      </div>
    </div>
    <div className="bottom">
      <div className="title-wrapper">
        <div className="secondary-title">
          {`Title - ${jobData[urlKey].title}`}
        </div>
        <div className="secondary-title range">
          {`From ${jobData[urlKey].from} - To ${jobData[urlKey].to}`}
        </div>
      </div>
      <div className="description-wrapper">
        <div className="secondary-title">Description</div>
        <div className="content">
          <p>{jobData[urlKey].description}</p>
        </div>
      </div>
      <div className="description-wrapper-bottom" />
      <div className="back-button">
        <a href="/">
          <div className="back-image" />
        </a>
      </div>
    </div>
  </div>
);

Job.propTypes = {
  urlKey: PropTypes.oneOf(Object.keys(jobData)).isRequired,
};

Job.defaultProps = {};

export default Job;
