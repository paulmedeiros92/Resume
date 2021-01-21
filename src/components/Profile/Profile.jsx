import React from 'react';
import './Profile.scss';
import SocialLink from '../SocialLink/SocialLink';
import profilePic from '../../images/portrait.jpg';
import degreeIcon from '../../images/degree.svg';
import Project from '../Project/Project';
import data from '../../data/ShowcaseData';

const Profile = () => (
  <div className="Profile">
    <div className="portrait-wrapper">
      <div className="portrait">
        <img className="avatar" src={profilePic} alt="Hello!" />
      </div>
      <div className="title">Paul Medeiros</div>
      <div className="details">
        <div className="about-me">
          <p>
            I am a fun Portuguese guy who loves learning, problem solving, and language.
            I love collaborating with others and sharing ideas.
            You can always find me working on a personal project or learning new languages.
          </p>
        </div>
        <div className="school">
          <div className="title">
            <img src={degreeIcon} alt="degree" />
            B.S. Computer Science, UNLV
          </div>
        </div>
      </div>
      <div className="links">
        <SocialLink type="mail" />
        <SocialLink type="linkedin" />
        <SocialLink type="github" />
        <SocialLink type="instagram" />
      </div>
    </div>
    <div className="projects">
      <div className="title">Projects</div>
      <div className="row">
        <Project title="Saia.com" imgSrc={data.saia.images[0]} urlKey="saia" />
        <Project title="MtgBuddy.com" imgSrc={data.mtgbuddy.images[0]} urlKey="mtgbuddy" />
      </div>
      <div className="row">
        <Project title="Discord Bots" imgSrc={data.discord.images[0]} urlKey="discord" />
        <Project title="Tilted Game" imgSrc={data.tilted.images[0]} urlKey="tilted" />
      </div>
    </div>
  </div>
);

Profile.propTypes = {};

Profile.defaultProps = {};

export default Profile;
