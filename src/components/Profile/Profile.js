import React from 'react';
import PropTypes from 'prop-types';
import './Profile.scss';
import Link from '../Link/Link';
import profilePic from '../../images/portrait.jpg';
import degreeIcon from '../../images/degree.svg';
import Project from '../Project/Project';

const Profile = () => (
  <div className="Profile">
    <div className="portrait-wrapper">
      <div className="portrait">
        <img className="avatar" src={profilePic} alt="Hello!" />
      </div>
      <div className="name">Paul Medeiros</div>
      <div className="about-me">
        <p>
          I am a fun Portuguese guy who loves learning, problem solving, and language. I love collaborating with others and sharing ideas. You can always find me working on a personal project or learning new languages.
        </p>
      </div>
      <div className="school">
        <img src={degreeIcon} alt="degree" />
        <div className="title">B.S. Computer Science, UNLV</div>
      </div>
      <div className="links">
        <Link type={"mail"} />
        <Link type={"linkedin"} />
        <Link type={"github"} />
        <Link type={'instagram'} />
      </div>
    </div>
    <div className="projects">
      <div className="projects-title">Projects</div>
      <div className="row">
        <Project name={'saia'} />
        <Project name={'mtgbuddy'} />
      </div>
      <div className= "row">
        <Project name={'bots'} />
        <Project name={'tilted'} />
      </div>
    </div>    
  </div>
);

Profile.propTypes = {};

Profile.defaultProps = {};

export default Profile;
