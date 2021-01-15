import React from 'react';
import PropTypes from 'prop-types';
import './Project.scss';
import saiaPreview from '../../images/projects/saia.png';
import discordPreview from '../../images/projects/discord.jpg';
import mtgbuddyPreview from '../../images/projects/mtgbuddy.png';
import tiltedPreview from '../../images/projects/tilted.png';





const projects = {
  saia: { title: 'Saia.com', imgSrc: saiaPreview},
  mtgbuddy: { title: 'MtgBuddy.com', imgSrc: mtgbuddyPreview},
  bots: { title: 'Discord.js Bots', imgSrc: discordPreview},
  tilted: { title: 'Android Game', imgSrc: tiltedPreview},
}

const Project = ({name}) => (
  <div className="Project">
    <div className="title">{projects[name].title}</div>
    <div className="preview">
      <div className="screen"></div>
      <img src={projects[name].imgSrc} alt={name} />
    </div>
  </div>
);

Project.propTypes = {};

Project.defaultProps = {};

export default Project;
