import React from 'react';
import PropTypes from 'prop-types';
import './SocialLink.scss';
import gitIcon from '../../images/github.svg';
import linkedinIcon from '../../images/linkedin.svg';
import instagramIcon from '../../images/instagram.svg';
import mailIcon from '../../images/mail.svg';

const types = {
  github: { url: 'https://github.com/paulmedeiros92', imgSrc: gitIcon },
  linkedin: { url: 'https://www.linkedin.com/in/paulmed/', imgSrc: linkedinIcon },
  instagram: { url: 'https://www.instagram.com/HeavensCloudXD/', imgSrc: instagramIcon },
  mail: { url: 'mailto:paulmedeiros92@gmail.com?subject=I saw your cool site!', imgSrc: mailIcon },
};

const SocialLink = ({ type }) => (
  <div className="SocialLink">
    <a href={types[type].url}>
      <img src={types[type].imgSrc} alt={type} />
    </a>
  </div>
);

SocialLink.propTypes = {
  type: PropTypes.oneOf(Object.keys(types)).isRequired,
};

SocialLink.defaultProps = {};

export default SocialLink;
