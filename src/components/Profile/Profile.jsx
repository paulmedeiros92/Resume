import React from 'react';
import PropTypes from 'prop-types';
import './Profile.scss';
import SocialLink from '../SocialLink/SocialLink';
import profilePic from '../../images/portrait.webp';
import resumeIcon from '../../images/resume.svg';
import Project from '../Project/Project';
import data from '../../data/ShowcaseData';
import jobData from '../../data/JobData';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectsSelected: true,
    };
  }

  tabClick(projectsSelected) {
    this.setState({ projectsSelected });
  }

  render() {
    const { isMobile } = this.props;
    const { projectsSelected } = this.state;
    return (
      <div className="Profile">
        <div className="portrait-wrapper">
          <div className="portrait">
            <img className="avatar" src={profilePic} alt="Hello!" />
          </div>
          <div className="title">Paul Medeiros</div>
          <div className="details">
            <div className="about-me">
              <p>
                I am a fun Portuguese software engineer who loves learning, problem solving,
                and language. I love collaborating with others and sharing ideas.
                You can always find me working on a personal project or learning new languages.
              </p>
            </div>
          </div>
          <div className="links">
            <SocialLink type="mail" />
            <SocialLink type="linkedin" />
            <SocialLink type="github" />
            <SocialLink type="instagram" />
          </div>
          {!isMobile && (
            <div className="extra">
              <a className="title" href="/Paul_Medeiros_Resume.pdf" download>
                Resume
                <img src={resumeIcon} alt="resume" />
              </a>
            </div>
          )}
        </div>
        <div className="right">
          <div className="view-selector">
            <div
              className={`title ${projectsSelected ? 'selected' : ''}`}
              onClick={() => this.tabClick(true)}
              onKeyDown={() => this.tabClick(true)}
              role="button"
              tabIndex={0}
            >
              Projects
            </div>
            <div
              className={`title ${projectsSelected ? '' : 'selected'}`}
              onClick={() => this.tabClick(false)}
              onKeyDown={() => this.tabClick(false)}
              role="button"
              tabIndex={0}
            >
              Work History
            </div>
          </div>
          <div className={`projects ${projectsSelected ? '' : 'invisible'}`}>
            <div className="row">
              <Project title="Saia" imgSrc={data.saia.images[0]} urlKey="saia" />
              <Project title="MtgBuddy" imgSrc={data.mtgbuddy.images[0]} urlKey="mtgbuddy" />
            </div>
            <div className="row">
              <Project title="Discord Bots" imgSrc={data.discord.images[0]} urlKey="discord" />
              <Project title="Tilted Game" imgSrc={data.tilted.images[0]} urlKey="tilted" />
            </div>
          </div>
          <div className={`projects ${projectsSelected ? 'invisible' : ''}`}>
            <div className="row">
              <Project title="Consulting" imgSrc={jobData.slalom.images[0]} urlKey="slalom" />
              <Project title="Bio-Informatics" imgSrc={jobData.UNLV.images[0]} urlKey="UNLV" />
            </div>
            <div className="row" />
          </div>
          {isMobile && (
            <div className="extra">
              <a className="title" href="/Paul_Medeiros_Resume.pdf" download>
                Resume
                <img src={resumeIcon} alt="resume" />
              </a>
            </div>
          )}
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

Profile.defaultProps = {};

export default Profile;
