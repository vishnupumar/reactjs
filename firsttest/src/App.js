import './App.css';
import { Footerleft } from './Components/Footer/Footerleft';
import { Achivements } from './Components/Main/Achivements';
import { Features } from './Components/Main/Features';
import { HeadPart } from './Components/Main/HeadPart';
import Nav from './Components/Nav/Nav';


function App() {
  return (
    <div className="App">
      <Nav />
      <HeadPart />
      <div className='feature-app'>
        <h1>Our Features</h1>
      </div>
      <Features />
      <Achivements />
      <Footerleft />
    </div>
  );
}

export default App;
