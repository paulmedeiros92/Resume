import React from 'react';
import PropTypes from 'prop-types';
import './Showcase.scss';
import Gallery from '../Gallery/Gallery';
import data from '../../data/ShowcaseData';
import linkIcon from '../../images/link.svg';

const Showcase = ({ urlKey, isMobile }) => (
  <div className="Showcase">
    <div className="top">
      {!isMobile && (<Gallery images={data[urlKey].images} />)}
      {isMobile && (
        <img src={data[urlKey].images[0]} alt={urlKey} />
      )}
    </div>
    <div className="bottom">
      <div className="link-wrapper">
        <a href={data[urlKey].url} target="_blank" rel="noreferrer">
          {data[urlKey].urlTitle}
          <img className="link" src={linkIcon} alt="link" />
        </a>
      </div>
      <div className="title-wrapper">
        <div className="secondary-title">
          {`Title - ${data[urlKey].title}`}
        </div>
      </div>
      <div className="description-wrapper">
        <div className="secondary-title">Description</div>
        <div className="content">
          <p>
            &emsp;
            {data[urlKey].description}
          </p>
        </div>
      </div>
      <div className="footer">
        <div className="back-button">
          <a href="/">
            <div className="back-image" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

Showcase.propTypes = {
  urlKey: PropTypes.oneOf(Object.keys(data)).isRequired,
  isMobile: PropTypes.bool.isRequired,
};

Showcase.defaultProps = {};

export default Showcase;
