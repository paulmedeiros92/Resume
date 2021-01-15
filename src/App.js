import './App.css';
import Profile from './components/Profile/Profile';

const shineTypes = ['one', 'two', 'three', 'four', 'five'];
const littleShineTypes = ['lone', 'ltwo', 'lthree', 'lfour', 'lfive'];

function createShootingStar() {
  const top = '-10%';
  const left = Math.floor(Math.random() * 150) + '%';
  return (
    <div className="shooting-star" style={{top, left}}>
      {createStar(true)}
    </div>
  );
}

function createStar(isLittle) {
  const container = isLittle ? 'lsContainer' : 'sContainer';
  const type = isLittle ? 'lstar' : 'star';
  const index = Math.floor(Math.random() * 5);
  const star = isLittle ? littleShineTypes[index] : shineTypes[index];
  const top = Math.floor(Math.random() * 101) + '%';
  const left = Math.floor(Math.random() * 101) + '%';
  return (
    <div className={container} style={{top, left}}>
        <div className={`${type} ${star}`}></div>
    </div>
  );
}

function App() {
  let stars = [...Array(20)].map(() => createStar(false));
  stars = stars.concat([...Array(150)].map(() => createStar(true)));
  return (
    <div className="App">
      <Profile></Profile>
      <div className="mountain"></div>
      <div className="moon-wrapper">
        <div className="moonlight">
          <div className="moon"></div>
        </div>
      </div>
      {stars}
    </div>
  );
}

export default App;
