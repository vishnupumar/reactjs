import './App.css';
import Nav from './Components/Nav/Nav';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Main />
      </header>
      <footer className='App-footer'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
