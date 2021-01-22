import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Showcase from './components/Showcase/Showcase';
import Job from './components/Job/Job';

const shineTypes = ['one', 'two', 'three', 'four', 'five'];
const littleShineTypes = ['lone', 'ltwo', 'lthree', 'lfour', 'lfive'];

function createStar(isLittle) {
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

// function createShootingStar() {
//   const top = '-10%';
//   const left = `${Math.floor(Math.random() * 150)}%`;
//   return (
//     <div className="shooting-star" style={{ top, left }}>
//       {createStar(true)}
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: window.innerWidth <= 1500,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ isMobile: window.innerWidth <= 1500 });
  }

  render() {
    const { isMobile } = this.state;
    let stars = [...Array(20)].map(() => createStar(false));
    stars = stars.concat([...Array(150)].map(() => createStar(true)));
    return (
      <div className="App">
        <Router>
          <Route exact path="/"><Profile /></Route>
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
      </div>
    );
  }
}

export default App;
