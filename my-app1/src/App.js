import './App.css';
import Navbar from './Components/Header/Navbar';
import Card from './Components/Main/Card';
import User from './Components/API/Users';
import TextBox from './Components/textBox/TextBox';
import Users from './Components/Users/Users';

function App(){
  return (
    <>
      <Navbar />
      <User />
      <Users />
      <TextBox />
      <div className='cards'>
        <Card 
          color="red"
          name="Ankura nilo"
          gender="Male"
          image="data:image/jpeg;base64,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"/>
        <Card 
        color="blue"
          name="Ashaney leka"
          gender="Female"
          image="data:image/jpeg;base64,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" 
        />
        <Card 
        color="green"
          name="Warater nill"
          gender="Female"
          image="data:image/jpeg;base64,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"
        />
      </div>
    </>
    )
}

export default App;
