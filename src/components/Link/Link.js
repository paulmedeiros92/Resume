import React from 'react';
import PropTypes from 'prop-types';
import './Link.scss';
import gitIcon from '../../images/github.svg';
import linkedinIcon from '../../images/linkedin.svg';
import instagramIcon from '../../images/instagram.svg';
import mailIcon from '../../images/mail.svg';

const types = {
  github: {url: "https://github.com/paulmedeiros92", imgSrc: gitIcon},
  linkedin: {url: "https://www.linkedin.com/in/paulmed/", imgSrc: linkedinIcon},
  instagram: {url: "https://www.instagram.com/HeavensCloudXD/", imgSrc: instagramIcon},
  mail: {url: "mailto:paulmedeiros92@gmail.com?subject=I saw your cool site!", imgSrc: mailIcon},
}

const Link = ({type}) => {
  return (
    <div className="Link">
      <a href={types[type].url}>
        <img src={types[type].imgSrc} alt={type} />
      </a>
    </div>
  )
};

Link.propTypes = {};

Link.defaultProps = {};

export default Link;
