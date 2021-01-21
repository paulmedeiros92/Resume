import React from 'react';
import PropTypes from 'prop-types';
import './Showcase.scss';
import Gallery from '../Gallery/Gallery';
import { data } from '../../data/ShowcaseData';
import linkIcon from '../../images/link.svg'

const Showcase = ({urlKey}) => (
  <div className="Showcase">

    <div className="top">
      <Gallery images={data[urlKey].images}></Gallery>
    </div>
    <div className="bottom">
      <div className="link-wrapper">
        <a href={data[urlKey].url} target="_blank" rel="noreferrer">
          {data[urlKey].urlTitle}
          <img className="link" src={linkIcon} alt="link" />
        </a>
      </div>
      <div className="title-wrapper">
        <div className="secondary-title">Title - {data[urlKey].title}</div>
      </div>
      <div className="description-wrapper">
        <div className="secondary-title">Description</div>
        <div className="content">
          <p>{data[urlKey].description}</p>
        </div>
      </div>
      <div className="description-wrapper-bottom"></div>
    </div>
    <div className="back-button">
      <a href="/">
        <div className="back-image"></div>
      </a>
    </div>
  </div>
);

Showcase.propTypes = {};

Showcase.defaultProps = {};

export default Showcase;
