// import Vector from '../assets/Vector.svg'
import './App.css';
import Cube from './components/Cube';
import CubeStairs from './components/CubeStairs';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Pillar from './components/Pillar';
import Stairs from './components/Stairs';

function App() {
  return (
    <div className="bg-black h-[100%] " id='whole'>
      <Navbar/>
      <Hero/>
      <Cube/>
      <Stairs/>
      <CubeStairs/>
      <Pillar/>
      <Footer/>
    </div>
  );
}

export default App;
