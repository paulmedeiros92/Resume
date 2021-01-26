import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Showcase from './components/Showcase/Showcase';
import Job from './components/Job/Job';

const shineTypes = ['one', 'two', 'three', 'four', 'five'];
const littleShineTypes = ['lone', 'ltwo', 'lthree', 'lfour', 'lfive'];
const MOBILE_WIDTH = 1200;

class App extends React.Component {
  static createStar(isLittle) {
    const container = isLittle ? 'lsContainer' : 'sContainer';
    const type = isLittle ? 'lstar' : 'star';
    const index = Math.floor(Math.random() * 5);
    const star = isLittle ? littleShineTypes[index] : shineTypes[index];
    const top = `${Math.floor(Math.random() * 101)}%`;
    const left = `${Math.floor(Math.random() * 101)}%`;
    return (
      <div className={container} style={{ top, left }}>
        <div className={`${type} ${star}`} />
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.createStar = App.createStar.bind(this);
    let stars = [...Array(20)].map(() => this.createStar(false));
    stars = stars.concat([...Array(150)].map(() => this.createStar(true)));
    this.state = {
      isMobile: window.innerWidth <= MOBILE_WIDTH,
      stars,
      shootingStar: undefined,
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.createShootingStar = this.createShootingStar.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    this.createShootingStar();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ isMobile: window.innerWidth <= MOBILE_WIDTH });
  }

  createShootingStar() {
    const speed = Math.floor(Math.random() * 4) + 3;
    const delay = Math.floor(Math.random() * 11);
    const top = '-10%';
    const left = `${Math.floor(Math.random() * 150)}%`;
    const animation = `shoot ${speed}s linear ${delay}s infinite`;
    this.setState({
      shootingStar:
      (
        <div
          className="shooting-star"
          style={{
            top, left, animation,
          }}
        >
          {this.createStar(true)}
        </div>
      ),
    });
    setTimeout(() => this.createShootingStar(), delay * 1000);
  }

  render() {
    const { isMobile, shootingStar, stars } = this.state;
    return (
      <div className="App">
        <Router>
          <Route exact path="/"><Profile isMobile={isMobile} /></Route>
          <Route path="/showcase/saia"><Showcase urlKey="saia" isMobile={isMobile} /></Route>
          <Route path="/showcase/mtgbuddy"><Showcase urlKey="mtgbuddy" isMobile={isMobile} /></Route>
          <Route path="/showcase/discord"><Showcase urlKey="discord" isMobile={isMobile} /></Route>
          <Route path="/showcase/tilted"><Showcase urlKey="tilted" isMobile={isMobile} /></Route>
          <Route path="/showcase/slalom"><Job urlKey="slalom" isMobile={isMobile} /></Route>
          <Route path="/showcase/UNLV"><Job urlKey="UNLV" isMobile={isMobile} /></Route>
        </Router>
        <div className="mountain" />
        <div className="moon-wrapper">
          <div className="moonlight">
            <div className="moon" />
          </div>
        </div>
        {stars}
        {shootingStar}
      </div>
    );
  }
}

export default App;
