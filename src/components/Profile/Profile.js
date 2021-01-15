import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css';
import Link from '../Link/Link';
import profilePic from '../../images/portrait.jpg';

const Profile = () => (
  <div className="Profile">
    <div className="portrait-wrapper">
      <img className="portrait" src={profilePic} alt="Hello!" />
      <div className="name">Paul Medeiros</div>
      <div className="links">
        <Link type={"mail"} />
        <Link type={"linkedin"} />
        <Link type={"github"} />
        <Link type={'instagram'} />
      </div>
    </div>
      <div className="about-me">
        <p>
          I am a fun Portuguese guy who loves learning, problem solving, and language.  
        </p>
        <p>
        I love collaborating with others and sharing ideas. You can always find me working on a personal project or learning new languages.
        </p>
        <div className="projects"><div>MTGBUDDY</div><div>SAIA</div></div>
      </div>
  </div>
);

Profile.propTypes = {};

Profile.defaultProps = {};

export default Profile;
